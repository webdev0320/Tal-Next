#!/usr/bin/env node
/**
 * Captures the rendered body of every site page into the pages_content seed file.
 *
 * Reads the static export (out/<url>/index.html, produced by `npm run build`),
 * takes the inner HTML of <main>, and turns it into WordPress-style editable HTML:
 *   - shared widgets marked with data-shortcode="name" become [name] shortcodes
 *   - <script type="application/ld+json"> blocks are moved to json_ld
 *   - React hydration markers are removed
 *   - first-paint animation states (scroll reveal, lazy image skeleton) are set to visible
 *   - block-level tags are put on their own lines so the HTML is editable
 *
 * Pages are taken from the URL registry (admin-panel/database/seeders/data/page-urls.json);
 * legacy, redirect and blog URLs are skipped (blog posts live in blog_posts / blog_contents).
 *
 * Usage: npm run build && node scripts/export-page-content.mjs [--no-pretty]
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const OUT_DIR = path.join(ROOT, 'out');
const SEED_DIR = path.join(ROOT, 'admin-panel/database/seeders/data');
const URLS_FILE = path.join(SEED_DIR, 'page-urls.json');
const OUT_FILE = path.join(SEED_DIR, 'pages-content.json');

const SKIP_TYPES = new Set(['legacy', 'redirect', 'blog']);
const PRETTY = !process.argv.includes('--no-pretty');

const BLOCK_TAGS = [
  'section', 'header', 'footer', 'nav', 'article', 'aside', 'main', 'div', 'form', 'fieldset',
  'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'ul', 'ol', 'li', 'dl', 'dt', 'dd',
  'table', 'thead', 'tbody', 'tfoot', 'tr', 'th', 'td', 'details', 'summary',
  'figure', 'figcaption', 'blockquote', 'iframe', 'hr',
];
const VOID_TAGS = new Set(['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'source', 'track', 'wbr']);

/** Index just past the element that opens at `start` (balanced on the same tag name). */
function elementEnd(html, start, tag) {
  const re = new RegExp(`<(/?)${tag}\\b[^>]*>`, 'gi');
  re.lastIndex = start;
  let depth = 0;
  let m;
  while ((m = re.exec(html))) {
    if (m[1]) depth--;
    else if (!m[0].endsWith('/>')) depth++;
    if (depth === 0) return re.lastIndex;
  }
  throw new Error(`Unbalanced <${tag}> at ${start}`);
}

function replaceShortcodes(html, found) {
  const re = /<([a-z][a-z0-9]*)\b[^>]*\sdata-shortcode="([a-z0-9_]+)"[^>]*>/i;
  let m;
  while ((m = re.exec(html))) {
    const end = elementEnd(html, m.index, m[1]);
    found.push(m[2]);
    html = html.slice(0, m.index) + `\n[${m[2]}]\n` + html.slice(end);
  }
  return html;
}

function extractScripts(html, jsonLd, warnings) {
  return html.replace(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi, (_, attrs, body) => {
    if (/application\/ld\+json/i.test(attrs)) {
      try {
        jsonLd.push(JSON.parse(body));
      } catch {
        warnings.push('unparseable JSON-LD block dropped');
      }
    } else {
      warnings.push('inline <script> removed');
    }
    return '';
  });
}

function settleInitialState(html) {
  return html
    // React text/suspense markers
    .replace(/<!--\s*-->/g, '')
    .replace(/<!--\/?\$[?!]?-->/g, '')
    // ScrollReveal / StaggerReveal render hidden until the IntersectionObserver fires
    .replace(/class="([^"]*\bscroll-reveal\b[^"]*)"/g, (all, cls) =>
      cls.includes('scroll-reveal--visible') ? all : `class="${cls.trim()} scroll-reveal--visible"`)
    .replace(/class="([^"]*\bstagger-children\b[^"]*)"/g, (all, cls) =>
      cls.includes('stagger-visible') ? all : `class="${cls.trim()} stagger-visible"`)
    // LazyImage skeleton + hidden image
    .replace(/<div class="absolute inset-0 img-skeleton"[^>]*><\/div>/g, '')
    .replace(/class="opacity-0 w-full h-auto"/g, 'class="img-loaded w-full h-auto"');
}

/** Put block-level tags on their own lines with indentation (text inside blocks is untouched). */
function prettify(html) {
  const blocks = BLOCK_TAGS.join('|');
  const tokenRe = new RegExp(`(<\\/?(?:${blocks})\\b[^>]*>|\\n\\[[a-z0-9_]+\\]\\n)`, 'gi');
  const parts = html.split(tokenRe).filter((part) => part !== '');
  const lines = [];
  let depth = 0;
  let inline = '';

  const flush = () => {
    if (inline.trim() !== '') lines.push('  '.repeat(depth) + inline.trim());
    inline = '';
  };

  for (const part of parts) {
    const shortcode = part.match(/^\n(\[[a-z0-9_]+\])\n$/);
    const tag = part.match(new RegExp(`^<(\\/?)(${blocks})\\b`, 'i'));

    if (shortcode) {
      flush();
      lines.push('  '.repeat(depth) + shortcode[1]);
    } else if (!tag) {
      inline += part;
    } else if (tag[1]) {
      // closing tag: keep "<p>short text</p>" on one line
      const last = lines[lines.length - 1];
      if (inline.trim() !== '' && last && last.trim().startsWith(`<${tag[2].toLowerCase()}`) && !last.trim().endsWith(`</${tag[2]}>`) && inline.length < 400 && !inline.includes('\n')) {
        depth--;
        lines[lines.length - 1] = last + inline.trim() + part;
        inline = '';
        continue;
      }
      flush();
      depth = Math.max(0, depth - 1);
      lines.push('  '.repeat(depth) + part);
    } else {
      flush();
      lines.push('  '.repeat(depth) + part);
      if (!VOID_TAGS.has(tag[2].toLowerCase()) && !part.endsWith('/>')) depth++;
    }
  }
  flush();

  return lines.join('\n');
}

function htmlFileFor(url) {
  return path.join(OUT_DIR, url === '/' ? '' : url, 'index.html');
}

if (!fs.existsSync(OUT_DIR)) {
  console.error('out/ not found. Run `npm run build` first.');
  process.exit(1);
}

const pages = JSON.parse(fs.readFileSync(URLS_FILE, 'utf8')).filter((row) => !SKIP_TYPES.has(row.type));
const rows = [];
const report = [];
const shortcodeCounts = {};

for (const page of pages) {
  const file = htmlFileFor(page.url);
  const warnings = [];

  if (!fs.existsSync(file)) {
    report.push({ url: page.url, warning: 'no built HTML' });
    continue;
  }

  const document = fs.readFileSync(file, 'utf8');
  const open = document.search(/<main\b[^>]*>/i);
  const close = document.lastIndexOf('</main>');
  if (open === -1 || close === -1) {
    report.push({ url: page.url, warning: 'no <main> element' });
    continue;
  }

  let html = document.slice(document.indexOf('>', open) + 1, close);
  const jsonLd = [];
  const shortcodes = [];

  html = extractScripts(html, jsonLd, warnings);
  html = replaceShortcodes(html, shortcodes);
  html = settleInitialState(html);
  html = PRETTY ? prettify(html) : html.trim();

  for (const name of shortcodes) shortcodeCounts[name] = (shortcodeCounts[name] ?? 0) + 1;
  if (/<form\b/i.test(html)) warnings.push('contains a <form> that is not a shortcode');
  if (/swiper/i.test(html)) warnings.push('contains swiper markup');
  if (/\/_next\//.test(html)) warnings.push('references /_next/ build assets (hashed, will break on rebuild)');
  if (html.replace(/<[^>]+>/g, '').trim().length < 200) warnings.push('very little text: page may render client-side only');

  rows.push({ url: page.url, content: html, json_ld: jsonLd });
  if (warnings.length) report.push({ url: page.url, warning: [...new Set(warnings)].join('; ') });
}

fs.writeFileSync(OUT_FILE, JSON.stringify(rows, null, 1) + '\n', 'utf8');

const built = fs.statSync(path.join(OUT_DIR, 'index.html')).mtime;
console.log(`Wrote ${rows.length} pages to ${path.relative(ROOT, OUT_FILE)} (build from ${built.toISOString()})`);
console.log('Shortcodes:', shortcodeCounts);
if (report.length) {
  console.log(`\n${report.length} page(s) to review:`);
  for (const item of report) console.log(`  ${item.url}: ${item.warning}`);
}
