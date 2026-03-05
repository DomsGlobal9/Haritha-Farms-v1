import { defineConfig, type Plugin } from 'vite'
import path from 'path'
import fs from 'fs'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// ── Inline fallback content ───────────────────────────────────────────────────
// Used when public/ files cannot be read (e.g. CDN build environments that
// strip the public directory before the plugin runs).
// Keep in sync with: /public/robots.txt and /src/app/robots-txt-handler.ts
const ROBOTS_TXT_CONTENT = `# robots.txt — Haritha Farms (https://harithafarms.in)
User-agent: *
Allow: /
Disallow: /api/
Disallow: /assets/
Disallow: /*.json
Disallow: /*.js
Disallow: /*.css
Disallow: /*.map
Disallow: /*?

User-agent: Googlebot
Allow: /
Disallow: /api/
Disallow: /assets/
Disallow: /*?

User-agent: Googlebot-Image
Allow: /gallery
Allow: /farms
Allow: /blog

User-agent: GPTBot
Disallow: /

User-agent: ChatGPT-User
Disallow: /

User-agent: Google-Extended
Disallow: /

User-agent: CCBot
Disallow: /

User-agent: anthropic-ai
Disallow: /

User-agent: PerplexityBot
Disallow: /

Sitemap: https://harithafarms.in/sitemap.xml
Host: https://harithafarms.in
`

/**
 * figmaAssetFallbackPlugin
 *
 * Resolves `figma:asset/<hash>.<ext>` virtual imports that are native to
 * Figma Make but unavailable in external CI/CD build environments (Vercel,
 * Netlify, GitHub Actions, etc.).
 *
 * Resolution strategy (in priority order):
 *   1. Check `src/assets/images/<hash>.<ext>` for a locally committed copy.
 *   2. Fall back to a transparent 1×1 PNG data-URI so the build never breaks.
 *
 * To ship real images in production, download each figma:asset image from
 * the Figma Make preview and save it to `src/assets/images/` using the
 * original `<hash>.<ext>` filename.
 */
function figmaAssetFallbackPlugin(): Plugin {
  const SCHEME = 'figma:asset/'
  const RESOLVED_PREFIX = '\0figma-asset:'
  // 1×1 transparent PNG data-URI (tiny, harmless placeholder)
  const PLACEHOLDER =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQI12NgAAIABQABNjN9GQAAAABJREFJRkJggg=='

  return {
    name: 'vite-plugin-figma-asset-fallback',

    resolveId(source) {
      if (source.startsWith(SCHEME)) {
        return RESOLVED_PREFIX + source.slice(SCHEME.length)
      }
      return null
    },

    load(id) {
      if (!id.startsWith(RESOLVED_PREFIX)) return null

      const filename = id.slice(RESOLVED_PREFIX.length)
      const localPath = path.resolve(__dirname, 'src/assets/images', filename)

      if (fs.existsSync(localPath)) {
        // Emit the real file as a Vite asset so it gets hashed into dist/assets/
        const content = fs.readFileSync(localPath)
        const refId = this.emitFile({
          type: 'asset',
          name: filename,
          source: content,
        })
        return `export default import.meta.ROLLUP_FILE_URL_${refId};`
      }

      // No local copy — export a transparent placeholder so the build succeeds.
      console.warn(
        `\x1b[33m⚠\x1b[0m  figma:asset/${filename} not found in src/assets/images/ — using placeholder`
      )
      return `export default "${PLACEHOLDER}";`
    },
  }
}

/**
 * staticFilesPlugin
 *
 * Guarantees that sitemap.xml and robots.txt land in dist/ after every build
 * and are served with the correct Content-Type in the Vite dev server.
 *
 * Strategy (in order):
 *   1. Dev server middleware: intercepts /robots.txt and /sitemap.xml
 *      requests and serves them as text/plain and application/xml.
 *   2. closeBundle (post-build): copies from public/ if the file is
 *      accessible; otherwise falls back to the inline ROBOTS_TXT_CONTENT
 *      constant above, so dist/robots.txt is always written.
 */
function staticFilesPlugin(): Plugin {
  const FILES = [
    {
      src: path.resolve(__dirname, 'public/sitemap.xml'),
      url: '/sitemap.xml',
      contentType: 'application/xml; charset=utf-8',
      extra: { 'X-Content-Type-Options': 'nosniff' },
      fallback: null as string | null, // sitemap fallback handled by generate-sitemap.js
    },
    {
      src: path.resolve(__dirname, 'public/robots.txt'),
      url: '/robots.txt',
      contentType: 'text/plain; charset=utf-8',
      extra: {},
      fallback: ROBOTS_TXT_CONTENT,
    },
  ]

  return {
    name: 'vite-plugin-static-files',

    // ── Dev server middleware ──────────────────────────────────
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const match = FILES.find(f => req.url?.split('?')[0] === f.url)
        if (match) {
          const content = fs.existsSync(match.src)
            ? fs.readFileSync(match.src, 'utf-8')
            : match.fallback

          if (content !== null) {
            res.setHeader('Content-Type', match.contentType)
            res.setHeader('Cache-Control', 'public, max-age=3600')
            Object.entries(match.extra).forEach(([k, v]) => res.setHeader(k, v))
            res.statusCode = 200
            res.end(content)
            return
          }
        }
        next()
      })
    },

    // ── Post-build write (belt-and-suspenders) ─────────────────
    closeBundle() {
      const distDir = path.resolve(__dirname, 'dist')
      if (!fs.existsSync(distDir)) fs.mkdirSync(distDir, { recursive: true })

      for (const f of FILES) {
        const dest = path.join(distDir, path.basename(f.src))

        if (fs.existsSync(f.src)) {
          // Primary path: copy from public/
          fs.copyFileSync(f.src, dest)
          console.log(`\x1b[32m✓\x1b[0m  ${path.basename(f.src)} → dist/${path.basename(f.src)} (copied from public/)`)
        } else if (f.fallback !== null) {
          // Fallback: write inline content so dist/ always has the file
          fs.writeFileSync(dest, f.fallback, 'utf-8')
          console.log(`\x1b[33m⚠\x1b[0m  ${path.basename(f.src)} not found in public/ — wrote inline fallback to dist/${path.basename(f.src)}`)
        } else {
          console.warn(`\x1b[31m✗\x1b[0m  ${f.src} not found and no fallback — ${path.basename(f.src)} will be missing from dist/`)
        }
      }
    },
  }
}

export default defineConfig({
  plugins: [
    // figma:asset fallback runs WITHOUT enforce:'pre' so Figma Make's native
    // resolver takes priority inside the Make environment.  This plugin only
    // activates during external CI/CD builds where no native resolver exists.
    figmaAssetFallbackPlugin(),
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
    staticFilesPlugin(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})