/**
 * Pulls published posts, pages and SEO settings from the Laravel admin API
 * (admin-panel) into src/data/cms.json, which the static build reads.
 *
 * API base: CMS_API_URL, else NEXT_PUBLIC_API_URL, else http://127.0.0.1:8000.
 * If the API can't be reached the previous snapshot is kept; with no snapshot
 * the site falls back to public/blogs.json (see src/lib/cms.js).
 * Set CMS_REQUIRED=true to fail the build instead.
 */
import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import nextEnv from '@next/env';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
nextEnv.loadEnvConfig(root);

const API = (process.env.CMS_API_URL || process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000').replace(/\/+$/, '');
const OUT = path.join(root, 'src', 'data', 'cms.json');
// Small and committed: imported by src/lib/cms-seo.js, which client code can reach.
const PAGES_OUT = path.join(root, 'src', 'data', 'cms-pages.json');

/** Editor-set page SEO keyed by "/path/", without the bulky schema/breadcrumbs. */
function pageSeoByPath(pages) {
  const byPath = {};
  for (const page of pages) {
    const { schema, breadcrumbs, scores, ...seo } = page.seo || {};
    if (!Object.values(seo.custom || {}).some(Boolean)) continue;
    const trimmed = page.path.replace(/^\/+|\/+$/g, '');
    byPath[trimmed ? `/${trimmed}/` : '/'] = seo;
  }
  return byPath;
}

async function get(pathname) {
  const res = await fetch(`${API}${pathname}`, {
    headers: { Accept: 'application/json' },
    signal: AbortSignal.timeout(60000),
  });
  if (!res.ok) throw new Error(`${res.status} ${res.statusText} for ${pathname}`);
  return res.json();
}

async function main() {
  // Sequential: `php artisan serve` handles one request at a time.
  const posts = (await get('/api/posts?all=1&full=1')).data;
  const pages = (await get('/api/pages?full=1')).data;
  const settings = await get('/api/seo/settings');

  mkdirSync(path.dirname(OUT), { recursive: true });
  writeFileSync(
    OUT,
    JSON.stringify({
      fetchedAt: new Date().toISOString(),
      source: API,
      settings: settings.data ?? settings,
      posts,
      pages,
    })
  );
  writeFileSync(PAGES_OUT, `${JSON.stringify(pageSeoByPath(pages), null, 2)}
`);
  console.log(`CMS: saved ${posts.length} posts and ${pages.length} pages from ${API}`);
}

main().catch((err) => {
  const fallback = existsSync(OUT) ? 'keeping the previous src/data/cms.json' : 'falling back to public/blogs.json';
  console.warn(`CMS: could not fetch from ${API} (${err.cause?.code || err.message}); ${fallback}.`);
  if (process.env.CMS_REQUIRED === 'true') process.exit(1);
});
