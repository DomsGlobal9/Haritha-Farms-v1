/**
 * sitemap-xml-handler.ts — Browser-side first-attempt injection
 *
 * Fires only when the CDN serves index.html as a SPA catch-all for
 * /sitemap.xml or /sitemap. Tries document.write() before React mounts.
 * If blocked, App.tsx falls through to the Route which renders a <pre> fallback.
 *
 * Keep the SITEMAP_XML content in sync with:
 *   - /public/sitemap.xml          (served directly by Vite dev server + CDN)
 *   - /scripts/generate-sitemap.js (writes dist/sitemap.xml post-build)
 *
 * IMPORTANT: Import this as the VERY FIRST import in App.tsx.
 */

export const SITEMAP_XML = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

  <url>
    <loc>https://harithafarms.in/</loc>
    <lastmod>2026-02-24</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>

  <url>
    <loc>https://harithafarms.in/about</loc>
    <lastmod>2026-02-24</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <url>
    <loc>https://harithafarms.in/contact</loc>
    <lastmod>2026-02-24</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>

  <url>
    <loc>https://harithafarms.in/visit</loc>
    <lastmod>2026-02-24</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>

  <url>
    <loc>https://harithafarms.in/faq</loc>
    <lastmod>2026-02-24</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>

  <url>
    <loc>https://harithafarms.in/farms</loc>
    <lastmod>2026-02-24</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>

  <url>
    <loc>https://harithafarms.in/farms/sheep</loc>
    <lastmod>2026-02-24</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <url>
    <loc>https://harithafarms.in/farms/hen</loc>
    <lastmod>2026-02-24</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <url>
    <loc>https://harithafarms.in/farms/fish</loc>
    <lastmod>2026-02-24</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <url>
    <loc>https://harithafarms.in/practices</loc>
    <lastmod>2026-02-24</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <url>
    <loc>https://harithafarms.in/transparency</loc>
    <lastmod>2026-02-24</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <url>
    <loc>https://harithafarms.in/certifications</loc>
    <lastmod>2026-02-24</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>

  <url>
    <loc>https://harithafarms.in/feed</loc>
    <lastmod>2026-02-24</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <url>
    <loc>https://harithafarms.in/feed/livestock</loc>
    <lastmod>2026-02-24</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>

  <url>
    <loc>https://harithafarms.in/feed/poultry</loc>
    <lastmod>2026-02-24</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>

  <url>
    <loc>https://harithafarms.in/feed/fish</loc>
    <lastmod>2026-02-24</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>

  <url>
    <loc>https://harithafarms.in/feed-transparency</loc>
    <lastmod>2026-02-24</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>

  <url>
    <loc>https://harithafarms.in/gallery</loc>
    <lastmod>2026-02-24</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>

  <url>
    <loc>https://harithafarms.in/blog</loc>
    <lastmod>2026-02-24</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>

  <url>
    <loc>https://harithafarms.in/blog/pasture-rotation</loc>
    <lastmod>2025-12-18</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.6</priority>
  </url>

  <url>
    <loc>https://harithafarms.in/blog/free-range-matters</loc>
    <lastmod>2025-12-10</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.6</priority>
  </url>

  <url>
    <loc>https://harithafarms.in/blog/clean-water-fish</loc>
    <lastmod>2025-12-01</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.6</priority>
  </url>

  <url>
    <loc>https://harithafarms.in/blog/seasonal-rhythms</loc>
    <lastmod>2025-11-22</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.6</priority>
  </url>

  <url>
    <loc>https://harithafarms.in/blog/traditional-feed</loc>
    <lastmod>2025-11-15</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.6</priority>
  </url>

  <url>
    <loc>https://harithafarms.in/blog/value-of-patience</loc>
    <lastmod>2025-11-08</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.6</priority>
  </url>

  <url>
    <loc>https://harithafarms.in/blog/recipe-lamb</loc>
    <lastmod>2025-11-01</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.6</priority>
  </url>

  <url>
    <loc>https://harithafarms.in/blog/community-food</loc>
    <lastmod>2025-10-25</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.6</priority>
  </url>

  <url>
    <loc>https://harithafarms.in/blog/transparency-cost</loc>
    <lastmod>2025-10-18</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.6</priority>
  </url>

  <url>
    <loc>https://harithafarms.in/blog/soil-health</loc>
    <lastmod>2025-10-10</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.6</priority>
  </url>

  <url>
    <loc>https://harithafarms.in/blog/egg-traceability</loc>
    <lastmod>2025-10-03</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.6</priority>
  </url>

  <url>
    <loc>https://harithafarms.in/blog/animal-welfare</loc>
    <lastmod>2025-09-26</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.6</priority>
  </url>

  <url>
    <loc>https://harithafarms.in/blog/no-antibiotics</loc>
    <lastmod>2025-09-19</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.6</priority>
  </url>

  <url>
    <loc>https://harithafarms.in/blog/farm-visits</loc>
    <lastmod>2025-09-12</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.6</priority>
  </url>

  <url>
    <loc>https://harithafarms.in/sitemap</loc>
    <lastmod>2026-02-24</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.3</priority>
  </url>

</urlset>`;

export const IS_SITEMAP_XML_REQUEST =
  typeof window !== 'undefined' &&
  window.location.pathname === '/sitemap.xml';

// NOTE: The document.write() fast-path has been intentionally removed.
//
// Why it was here:
//   Search-engine crawlers hitting /sitemap.xml need raw XML.  The idea was
//   to intercept the request before React mounts and write raw XML via
//   document.write(), bypassing the SPA entirely.
//
// Why it was removed:
//   In sandboxed / CSP-restricted environments (Figma Make, CodeSandbox, …)
//   document.write() either gets blocked silently or "succeeds" but wipes
//   the DOM while producing a blank page (the raw XML string isn't rendered
//   as visible content inside the sandbox iframe).
//
// How /sitemap.xml is served now:
//   1. Production CDN: The real /public/sitemap.xml static file is copied to
//      dist/sitemap.xml by vite.config.ts's staticFilesPlugin.  The CDN
//      serves it directly with the correct Content-Type header, so this
//      module never even loads.
//   2. SPA fallback (preview / dev): React Router renders the <SitemapXml />
//      component, which displays the XML with browser-native syntax
//      highlighting (purple tags, red attrs, blue values, clickable URLs).