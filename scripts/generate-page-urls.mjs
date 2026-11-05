#!/usr/bin/env node
/**
 * Builds the URL registries used by the admin panel.
 *
 * Sources, in priority order:
 *   1. Every static Next.js route (src/app/**\/page.jsx, dynamic segments skipped)
 *   2. Published blog posts + pagination archives (public/blogs.json)
 *   3. Static redirect stubs (public/**\/index.html)
 *   4. Legacy WordPress URLs that are no longer routed (public/page_urls.json)
 *
 * Outputs:
 *   - admin-panel/database/seeders/data/page-urls.json  (pages → `pages` table)
 *   - admin-panel/database/seeders/data/blog-posts.json (blog URLs → `blog_posts` table)
 *
 * Titles are resolved from src/data/seo/staticPages.js, the industry/account
 * page data and the blog JSON, with a slug-based fallback.
 *
 * Usage: node scripts/generate-page-urls.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const APP_DIR = path.join(ROOT, 'src/app');
const PUBLIC_DIR = path.join(ROOT, 'public');
const DATA_DIR = path.join(ROOT, 'src/data');
const OUT_FILE = path.join(ROOT, 'admin-panel/database/seeders/data/page-urls.json');

const BLOG_POSTS_PER_PAGE = 15;
const SITE_HOST = /^https?:\/\/[^/]+/i;

function normalizePath(raw) {
  let value = String(raw || '').trim().replace(SITE_HOST, '').replace(/[?#].*$/, '');
  if (!value.startsWith('/')) value = '/' + value;
  value = value.replace(/\/+$/, '');
  return value === '' ? '/' : value.toLowerCase();
}

function slugFor(url) {
  if (url === '/') return 'home';
  return url.split('/').filter(Boolean).pop() || 'home';
}

function headline(value) {
  return String(value || '')
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function cleanTitle(value) {
  return String(value || '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;|&apos;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/** Read the `const page = {...}; export default page;` data file as JSON. */
function readPageData(file) {
  const raw = fs.readFileSync(file, 'utf8');
  const match = raw.match(/const\s+\w+\s*=\s*(\{[\s\S]*?\})\s*;\s*export\s+default\s+\w+/);
  if (!match) return null;

  try {
    return JSON.parse(match[1]);
  } catch {
    return null;
  }
}

function collectAppRoutes(dir, routes = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      collectAppRoutes(full, routes);
      continue;
    }

    if (entry.name !== 'page.jsx' && entry.name !== 'page.js') continue;

    const relative = path.relative(APP_DIR, dir);
    const segments = relative ? relative.split(path.sep) : [];

    // Dynamic routes ([slug], [page], ...) are expanded from their data source below.
    if (segments.some((segment) => segment.startsWith('['))) continue;

    const cleaned = segments.filter((segment) => !/^\(.*\)$/.test(segment));
    routes.push(normalizePath('/' + cleaned.join('/')));
  }

  return routes;
}

function collectPublicPages(dir, pages = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      collectPublicPages(full, pages);
      continue;
    }

    if (entry.name !== 'index.html') continue;

    const relative = path.relative(PUBLIC_DIR, dir);
    const url = normalizePath('/' + relative.split(path.sep).join('/'));
    const html = fs.readFileSync(full, 'utf8');
    const canonical = html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i)?.[1] ?? null;
    const title = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] ?? null;

    pages.push({ url, canonical: canonical ? normalizePath(canonical) : null, title: title ? cleanTitle(title) : null });
  }

  return pages;
}

function typeFor(url) {
  if (url === '/industries' || url.startsWith('/industries/')) return 'industry';
  if (url === '/accounts' || url.startsWith('/accounts/')) return 'account';
  if (url === '/taxation' || url.startsWith('/taxation/')) return 'taxation';
  if (url === '/packages' || url.startsWith('/packages/')) return 'package';
  if (url === '/blog' || url.startsWith('/blog/')) return 'blog';

  return 'page';
}

const { staticPages } = await import(pathToFileURL(path.join(DATA_DIR, 'seo/staticPages.js')).href);

const seoTitles = new Map(
  Object.entries(staticPages).map(([key, value]) => [normalizePath(key), cleanTitle(value?.title)]),
);

const dataTitles = new Map();
for (const folder of ['industryPages', 'accountsPages']) {
  const dir = path.join(DATA_DIR, folder);
  if (!fs.existsSync(dir)) continue;

  for (const name of fs.readdirSync(dir)) {
    if (!name.endsWith('.js') || name === 'index.js') continue;

    const data = readPageData(path.join(dir, name));
    if (data?.path && data?.title) dataTitles.set(normalizePath(data.path), cleanTitle(data.title));
  }
}

const blogJson = JSON.parse(fs.readFileSync(path.join(PUBLIC_DIR, 'blogs.json'), 'utf8'));
const blogPosts = (blogJson.posts || []).filter((post) => post.status === 'publish');
const blogTitles = new Map(blogPosts.map((post) => [normalizePath(`/blog/${post.slug}`), cleanTitle(post.title)]));
const blogPages = Math.ceil(blogPosts.length / BLOG_POSTS_PER_PAGE);

const entries = new Map();
const blogRows = [];

function add(url, { type, status = 'published', title } = {}) {
  const key = normalizePath(url);
  const resolvedType = type ?? typeFor(key);
  const resolvedTitle = cleanTitle(title) || seoTitles.get(key) || dataTitles.get(key) || headline(slugFor(key));

  // Blog URLs go to their own manifest — they are seeded into blog_posts/blog_contents.
  if (resolvedType === 'blog') {
    blogRows.push({
      url: key,
      slug: slugFor(key),
      title: resolvedTitle,
      kind: key === '/blog' || key.startsWith('/blog/page/') ? 'archive' : 'post',
      status,
    });

    return;
  }

  const existing = entries.get(key);

  if (existing && status !== 'published') return;

  entries.set(key, {
    url: key,
    slug: slugFor(key),
    title: resolvedTitle,
    type: resolvedType,
    status,
  });
}

for (const url of collectAppRoutes(APP_DIR)) {
  add(url);
}

for (const post of blogPosts) {
  add(`/blog/${post.slug}`, { type: 'blog', title: blogTitles.get(normalizePath(`/blog/${post.slug}`)) });
}

for (let page = 2; page <= blogPages; page++) {
  add(`/blog/page/${page}`, { type: 'blog', title: `Blog - Page ${page}` });
}

for (const redirect of collectPublicPages(path.join(PUBLIC_DIR))) {
  add(redirect.url, {
    type: 'redirect',
    status: 'draft',
    title: redirect.canonical ? seoTitles.get(redirect.canonical) ?? dataTitles.get(redirect.canonical) : null,
  });
}

const blogUrlSet = new Set(blogRows.map((row) => row.url));
const legacyUrls = JSON.parse(fs.readFileSync(path.join(PUBLIC_DIR, 'page_urls.json'), 'utf8'));
for (const legacy of legacyUrls) {
  // /blog is tracked as a blog archive entry, not as a (fake) legacy page.
  if (blogUrlSet.has(normalizePath(legacy))) continue;
  add(legacy, { type: 'legacy', status: 'draft' });
}

const BLOG_OUT_FILE = path.join(ROOT, 'admin-panel/database/seeders/data/blog-posts.json');

const rows = [...entries.values()].sort((a, b) => (a.url === '/' ? -1 : b.url === '/' ? 1 : a.url.localeCompare(b.url)));
const blogRowsSorted = [...blogRows].sort((a, b) => (a.url === '/blog' ? -1 : b.url === '/blog' ? 1 : a.url.localeCompare(b.url)));

fs.mkdirSync(path.dirname(OUT_FILE), { recursive: true });
fs.writeFileSync(OUT_FILE, JSON.stringify(rows, null, 2) + '\n', 'utf8');
fs.writeFileSync(BLOG_OUT_FILE, JSON.stringify(blogRowsSorted, null, 2) + '\n', 'utf8');

const counts = rows.reduce((acc, row) => {
  acc[row.type] = (acc[row.type] ?? 0) + 1;
  return acc;
}, {});

console.log(`Wrote ${rows.length} URLs to ${path.relative(ROOT, OUT_FILE)}`);
console.log(counts);
console.log(`Wrote ${blogRowsSorted.length} blog URLs to ${path.relative(ROOT, BLOG_OUT_FILE)}`);
console.log(blogRowsSorted.reduce((acc, row) => ({ ...acc, [row.kind]: (acc[row.kind] ?? 0) + 1 }), {}));
