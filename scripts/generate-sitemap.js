/**
 * scripts/generate-sitemap.js
 *
 * Run automatically after `vite build` via:
 *   "build": "vite build && node scripts/generate-sitemap.js"
 *
 * Writes dist/sitemap.xml with a fresh `lastmod` timestamp for every
 * non-blog URL so every deployment has current dates.
 *
 * robots.txt is NOT generated here — Vite copies public/robots.txt →
 * dist/robots.txt automatically during build (and staticFilesPlugin
 * in vite.config.ts does a belt-and-suspenders explicit copy too).
 * Generating it from a stub here would clobber the comprehensive
 * AI-crawler block rules in public/robots.txt.
 *
 * This is the SINGLE SOURCE OF TRUTH for all production URLs.
 * Keep the URLS array in sync with:
 *   - /src/app/sitemap-xml-handler.ts  (browser SPA fallback)
 *   - /public/sitemap.xml              (static CDN copy / dev server)
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync, copyFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir   = join(__dirname, '..');
const distDir   = join(rootDir, 'dist');
const today     = new Date().toISOString().slice(0, 10); // YYYY-MM-DD

// ── URL registry ─────────────────────────────────────────────────────────────
// Edit this list to add / remove / reprioritise pages.
// changefreq and priority follow the sitemap protocol spec.
const BASE_URL = 'https://harithafarms.in';

const URLS = [
  // Core pages
  { loc: '/',                          changefreq: 'weekly',  priority: '1.0', lastmod: today },
  { loc: '/about',                     changefreq: 'monthly', priority: '0.8', lastmod: today },
  { loc: '/contact',                   changefreq: 'monthly', priority: '0.7', lastmod: today },
  { loc: '/visit',                     changefreq: 'monthly', priority: '0.7', lastmod: today },
  { loc: '/faq',                       changefreq: 'monthly', priority: '0.6', lastmod: today },

  // Farms
  { loc: '/farms',                     changefreq: 'weekly',  priority: '0.9', lastmod: today },
  { loc: '/farms/sheep',               changefreq: 'monthly', priority: '0.8', lastmod: today },
  { loc: '/farms/hen',                 changefreq: 'monthly', priority: '0.8', lastmod: today },
  { loc: '/farms/fish',                changefreq: 'monthly', priority: '0.8', lastmod: today },

  // Values & trust
  { loc: '/practices',                 changefreq: 'monthly', priority: '0.8', lastmod: today },
  { loc: '/transparency',              changefreq: 'monthly', priority: '0.8', lastmod: today },
  { loc: '/certifications',            changefreq: 'monthly', priority: '0.7', lastmod: today },

  // Feed division
  { loc: '/feed',                      changefreq: 'monthly', priority: '0.8', lastmod: today },
  { loc: '/feed/livestock',            changefreq: 'monthly', priority: '0.7', lastmod: today },
  { loc: '/feed/poultry',              changefreq: 'monthly', priority: '0.7', lastmod: today },
  { loc: '/feed/fish',                 changefreq: 'monthly', priority: '0.7', lastmod: today },
  { loc: '/feed-transparency',         changefreq: 'monthly', priority: '0.7', lastmod: today },

  // Content
  { loc: '/gallery',                   changefreq: 'weekly',  priority: '0.7', lastmod: today },
  { loc: '/blog',                      changefreq: 'weekly',  priority: '0.9', lastmod: today },

  // Blog posts (fixed publication dates — do NOT change to `today`)
  { loc: '/blog/pasture-rotation',     changefreq: 'yearly',  priority: '0.6', lastmod: '2025-12-18' },
  { loc: '/blog/free-range-matters',   changefreq: 'yearly',  priority: '0.6', lastmod: '2025-12-10' },
  { loc: '/blog/clean-water-fish',     changefreq: 'yearly',  priority: '0.6', lastmod: '2025-12-01' },
  { loc: '/blog/seasonal-rhythms',     changefreq: 'yearly',  priority: '0.6', lastmod: '2025-11-22' },
  { loc: '/blog/traditional-feed',     changefreq: 'yearly',  priority: '0.6', lastmod: '2025-11-15' },
  { loc: '/blog/value-of-patience',    changefreq: 'yearly',  priority: '0.6', lastmod: '2025-11-08' },
  { loc: '/blog/recipe-lamb',          changefreq: 'yearly',  priority: '0.6', lastmod: '2025-11-01' },
  { loc: '/blog/community-food',       changefreq: 'yearly',  priority: '0.6', lastmod: '2025-10-25' },
  { loc: '/blog/transparency-cost',    changefreq: 'yearly',  priority: '0.6', lastmod: '2025-10-18' },
  { loc: '/blog/soil-health',          changefreq: 'yearly',  priority: '0.6', lastmod: '2025-10-10' },
  { loc: '/blog/egg-traceability',     changefreq: 'yearly',  priority: '0.6', lastmod: '2025-10-03' },
  { loc: '/blog/animal-welfare',       changefreq: 'yearly',  priority: '0.6', lastmod: '2025-09-26' },
  { loc: '/blog/no-antibiotics',       changefreq: 'yearly',  priority: '0.6', lastmod: '2025-09-19' },
  { loc: '/blog/farm-visits',          changefreq: 'yearly',  priority: '0.6', lastmod: '2025-09-12' },

  // Meta
  { loc: '/sitemap',                   changefreq: 'monthly', priority: '0.3', lastmod: today },
];

// ── Build sitemap XML ─────────────────────────────────────────────────────────
function buildSitemapXml(urls) {
  const entries = urls.map(({ loc, changefreq, priority, lastmod }) => {
    const lastmodTag  = lastmod     ? `\n    <lastmod>${lastmod}</lastmod>`         : '';
    const freqTag     = changefreq  ? `\n    <changefreq>${changefreq}</changefreq>` : '';
    return (
      `  <url>\n` +
      `    <loc>${BASE_URL}${loc}</loc>` +
      lastmodTag +
      freqTag +
      `\n    <priority>${priority}</priority>\n  </url>`
    );
  }).join('\n\n');

  return (
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n\n` +
    entries +
    `\n\n</urlset>\n`
  );
}

// ── Ensure dist/ exists ───────────────────────────────────────────────────────
if (!existsSync(distDir)) mkdirSync(distDir, { recursive: true });

// ── Write sitemap.xml ─────────────────────────────────────────────────────────
const sitemapPath = join(distDir, 'sitemap.xml');
const sitemapXml  = buildSitemapXml(URLS);
writeFileSync(sitemapPath, sitemapXml, 'utf-8');
console.log(`\x1b[32m✓\x1b[0m  sitemap.xml → dist/sitemap.xml  (${URLS.length} URLs, lastmod ${today})`);

// ── Sync robots.txt from public/ → dist/ ─────────────────────────────────────
// We do NOT generate robots.txt from a stub here.  The comprehensive ruleset
// (AI-crawler blocks, Crawl-delay directives, etc.) lives in public/robots.txt
// and is already copied by Vite's own public-directory handling plus the
// staticFilesPlugin in vite.config.ts.  This extra copy is a belt-and-
// suspenders guarantee for hosting environments that strip public/ assets.
const robotsSrc  = join(rootDir, 'public', 'robots.txt');
const robotsDest = join(distDir, 'robots.txt');

if (existsSync(robotsSrc)) {
  copyFileSync(robotsSrc, robotsDest);
  console.log(`\x1b[32m✓\x1b[0m  robots.txt  → dist/robots.txt  (copied from public/robots.txt)`);
} else {
  console.warn(`\x1b[33m⚠\x1b[0m  public/robots.txt not found — dist/robots.txt not written`);
}
