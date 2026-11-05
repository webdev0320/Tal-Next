#!/usr/bin/env node
/**
 * Builds the SEO backfill map from copy that already exists in the repo.
 *
 * Sources, per URL:
 *   pages  : public/seo-metadata.json → src/data/seo/staticPages.js →
 *            industry/accounts page data → slug-based fallback
 *   blogs  : src/app/blog/**\/page.jsx is absent (dynamic route), so:
 *            public/blog-seo.json → blogs.json (excerpt is empty) → slug fallback
 *
 * Output: admin-panel/database/seeders/data/professional-seo.json
 *         (one row per page/blog URL; title/description are capped for SERPs,
 *          noindex for legacy/redirect rows and for blog archive pages > 1)
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const PUBLIC = path.join(ROOT, 'public');
const APP_SEO = path.join(ROOT, 'src/data/seo/staticPages.js');
const DATA_DIR = path.join(ROOT, 'src/data');
const SEED_DIR = path.join(ROOT, 'admin-panel/database/seeders/data');
const OUT_FILE = path.join(SEED_DIR, 'professional-seo.json');

const decodeEntities = (raw = '') =>
  String(raw)
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#0?38;/g, '&')
    .replace(/&#0?39;|&apos;/g, "'")
    .replace(/&#0?8211;|&ndash;/g, '–')
    .replace(/&#0?8212;|&mdash;/g, '—')
    .replace(/&#0?8216;|&lsquo;/g, '‘')
    .replace(/&#0?8217;|&rsquo;/g, '’')
    .replace(/&#0?8220;|&ldquo;/g, '“')
    .replace(/&#0?8221;|&rdquo;/g, '”')
    .replace(/&#0?8230;|&hellip;/g, '…')
    .replace(/&pound;/g, '£')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');

const clean = (raw = '') => {
  let value = decodeEntities(raw);
  value = value.replace(/<[^>]*>/g, ' ');                       // HTML tags
  value = value.replace(/[a-zA-Z#.][^{}]*\{[^}]*\}/g, ' ');       // inline CSS blobs
  value = value.replace(/\bamp\b/g, '&');                        // "Wage amp National" -> "Wage & National"
  value = value.replace(/\uFFFD/g, '');                          // replacement chars
  value = value.replace(/[\u2010\u2011\u2012]/g, '-');            // odd hyphen variants
  return value.replace(/\s+/g, ' ').trim();
};

const truncateAtWord = (value, max) => {
  const text = clean(value);
  if (text.length <= max) return text;

  const cut = text.slice(0, max);
  const lastSpace = cut.lastIndexOf(' ');
  const clipped = lastSpace > max * 0.5 ? cut.slice(0, lastSpace) : cut;

  return clipped.replace(/[,.;:|-]\s*$/, '').trim() + '…';
};

const headline = (text) =>
  clean(text).replace(/[-_]+/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()).replace(/\s+/g, ' ').trim();

const slugFor = (url) => (url === '/' ? 'home' : url.split('/').filter(Boolean).pop() || 'home');

const stopWords = new Set([
  'a', 'an', 'the', 'and', 'or', 'of', 'to', 'for', 'in', 'on', 'at', 'by', 'with',
  'your', 'you', 'we', 'our', 'i', 'me', 'my', 'how', 'what', 'why', 'when', 'where', 'who',
  'do', 'does', 'did', 'is', 'are', 'am', 'can', 'could', 'should', 'would', 'will', 'than',
  'from', 'that', 'this', 'it', 'its', 'be', 'not', 'but', 'if', 'into', 'about',
]);

const deriveKeyword = (title) => {
  const words = clean(title).toLowerCase().split(/[^a-z0-9&]+/).filter(Boolean)
    .filter((w) => !stopWords.has(w))
    .filter((w) => w !== 'taxaccolega')
    .filter((w) => w !== 'accountants' || true);

  return words.slice(0, 4).join(' ').trim();
};

const stripBrand = (title) =>
  clean(title)
    .replace(/\s*[\|–—-]\s*Taxaccolega.*$/i, '')
    .replace(/Taxaccolega\s*[\|–—-]?\s*/i, '')
    .trim();

// A real fallback for pages with no usable source description. Keyed off the URL so it
// stays unique, but remains grammatical and reasonably on-topic.
// Same suffix-location service patterns we use to repair WP titles — only from
// those patterns can we trust the location.
const locationFromUrl = (url) => {
  const path = url.toLowerCase();
  const patterns = [
    /^\/accounts\/bookkeeping-services-for-small-business-([a-z0-9-]+)$/,
    /^\/accounts\/self-assessment-tax-return-accountant-([a-z0-9-]+)$/,
    /^\/taxation\/capital-gains-tax-accountant-([a-z0-9-]+)$/,
    /^\/taxation\/inheritance-tax-planning-advisors-([a-z0-9-]+)$/,
    /^\/taxation\/personal-income-tax-accountants-([a-z0-9-]+)$/,
  ];

  for (const re of patterns) {
    const match = path.match(re);
    if (match) return headline(match[1].replace(/-/g, ' '));
  }

  return null;
};

const fallbackDescription = (url, title) => {
  const path = url.toLowerCase();
  const service = deriveKeyword(stripBrand(title)) || headline(slugFor(url)).toLowerCase();
  const where = locationFromUrl(path) ?? 'the UK';

  if (/accounts\/bookkeeping|accounts\/self-assessment/.test(path)) {
    const what = /bookkeeping/.test(path)
      ? 'bookkeeping services: Xero/QuickBooks records, VAT returns, year-end accounts and tailored tax advice'
      : 'self assessment tax returns with clear advice on deadlines, deductions and HMRC compliance';
    return truncateAtWord(`Specialist ${what} for small businesses in ${where}. Fixed fees, ACCA chartered accountants, HMRC-ready paperwork and support that grows with your business.`, 155);
  }

  if (/taxation\//.test(path)) {
    return truncateAtWord(`${headline(service)} in ${where}. Specialist UK tax advice from ACCA chartered accountants: planning, returns, reliefs and clear fixed-fee support for business owners, landlords and contractors.`, 155);
  }

  if (/industries\//.test(path) || /accounts\//.test(path) || /packages\//.test(path) || /taxation\//.test(path)) {
    return truncateAtWord(`${headline(service)} in the UK. Fixed-fee accounting, tax planning, accounts, VAT and payroll from ACCA chartered accountants who understand your sector and keep your paperwork HMRC-ready.`, 155);
  }

  return truncateAtWord(`${headline(service)} — expert UK accounting, tax, VAT and compliance advice from Taxaccolega Chartered Accountants. Clear fees, 5-star Google reviews and support for growing businesses.`, 155);
};

const titleWithBrand = (title) => {
  let t = clean(title);
  if (/taxaccolega/i.test(t)) return t;

  // Keep brand only when it still reads professionally (short enough).
  return t.length + 14 <= 70 ? `${t} | Taxaccolega` : t;
};

const readJsonData = (file) => {
  const raw = fs.readFileSync(file, 'utf8');
  const m = raw.match(/const\s+\w+\s*=\s*(\{[\s\S]*?\})\s*;\s*export\s+default\s+\w+/);
  return m ? JSON.parse(m[1]) : null;
};

const walk = (dir, pick) => {
  const out = new Map();
  for (const name of fs.readdirSync(dir)) {
    if (/(^|\/)(index\.(mjs|js)|\.gitkeep)$/.test(name) || !name.endsWith('.js')) continue;

    const data = readJsonData(path.join(dir, name));
    if (data?.path) out.set(data.path, pick(data));
  }
  return out;
};

const { staticPages } = await import(pathToFileURL(APP_SEO).href);

const seoMeta = JSON.parse(fs.readFileSync(path.join(PUBLIC, 'seo-metadata.json'), 'utf8'));
const blogSeo = JSON.parse(fs.readFileSync(path.join(PUBLIC, 'blog-seo.json'), 'utf8'));

// Location-specific service pages inherited poor WP titles (e.g. wrong service
// name/location mix). Derive reliable, professional titles from the URL instead.
const locationTitleFor = (url) => {
  const tests = [
    [/^\/accounts\/bookkeeping-services-for-small-business-(.+)$/, 'Bookkeeping services for small businesses in'],
    [/^\/accounts\/self-assessment-tax-return-accountant-(.+)$/, 'Self Assessment accountant in'],
    [/^\/taxation\/capital-gains-tax-accountant-(.+)$/, 'Capital Gains Tax accountant in'],
    [/^\/taxation\/inheritance-tax-planning-advisors-(.+)$/, 'Inheritance Tax Planning advisors in'],
    [/^\/taxation\/personal-income-tax-accountants-(.+)$/, 'Personal Income Tax accountants in'],
  ];

  for (const [re, prefix] of tests) {
    const match = url.match(re);
    if (match) {
      const place = headline(match[1].replace(/-/g, ' '));
      return { title: `${prefix} ${place}`, keywords: [] };
    }
  }

  return null;
};

const pageData = walk(path.join(DATA_DIR, 'industryPages'), (d) => d);
for (const [pathname, data] of walk(path.join(DATA_DIR, 'accountsPages'), (d) => d)) {
  pageData.set(pathname, data);
}

const pageRows = JSON.parse(fs.readFileSync(path.join(SEED_DIR, 'page-urls.json'), 'utf8'));
const blogRows = JSON.parse(fs.readFileSync(path.join(SEED_DIR, 'blog-posts.json'), 'utf8'));

const sourceFor = (url) => {
  const s = staticPages[url];
  const m = seoMeta[url];
  const d = pageData.get(url);

  const data = pageData.get(url);

  const titleSource = s?.title ?? m?.title ?? d?.title ?? null;
  const descSource = s?.description ?? (m?.description?.trim() ? m.description : null)
    ?? (d?.subtitle && clean(d.subtitle) ? d.subtitle : null)
    ?? d?.faqs?.[0]?.a
    ?? d?.sections?.[0]?.paragraphs?.[0]
    ?? d?.sections?.[0]?.bullets?.[0]
    ?? null;
  const keywords = (s?.keywords?.length ? s.keywords
    : m?.keywords?.length ? m.keywords
    : []);

  return { title: titleSource, description: descSource, keywords };
};

const pageTypeFor = (url, row) => {
  if (url === '/blog' || url.startsWith('/blog/page/')) return 'CollectionPage';
  if (url === '/about-us') return 'AboutPage';
  if (url === '/contact-us') return 'ContactPage';
  if (url.startsWith('/accounts/') || url === '/accounts') return 'Service';
  if (url.startsWith('/industries/') || url === '/industries') return 'Service';
  if (url.startsWith('/taxation/') || url === '/taxation') return 'Service';
  if (url.startsWith('/packages/') || url === '/packages') return 'Service';
  return 'WebPage';
};

const records = [];
const report = { pages: {}, blogs: {} };

for (const row of [...pageRows, ...blogRows]) {
  const isBlog = row.url === '/blog' || row.url.startsWith('/blog/');
  const noindexUtilities = new Set([
    '/payment-confirmation',
    '/payment-failed',
    '/thank-you-transaction-result',
    '/id-verification-form-for-companies-house/thank-you',
    '/blog/a-new-post-by-rizwan', // internal WP test post, keep out of the index
  ]);
  const nofollow = row.type === 'legacy' || row.type === 'redirect'
    || (isBlog && row.kind === 'archive' && row.url !== '/blog')
    || noindexUtilities.has(row.url)
    || row.status !== 'published';

  const locationOverride = !isBlog ? locationTitleFor(row.url) : null;
  const source = isBlog
    ? (() => {
        const slug = slugFor(row.url);
        const fromExport = blogSeo[slug] ? { ...blogSeo[slug], keywords: [] } : null;
        if (fromExport) return fromExport;

        const fromStatic = staticPages[row.url];
        if (fromStatic) return fromStatic;

        const archive = row.url.match(/^\/blog\/page\/(\d+)$/);
        if (archive) {
          const page = archive[1];
          return {
            title: `Blog - Page ${page} | Taxaccolega`,
            description: `Tax, accounting and finance insights from Taxaccolega. Browse page ${page} for expert UK tax advice, company accounts, VAT and payroll guides.`,
            keywords: ['uk accounting blog'],
          };
        }

        return { title: null, description: null, keywords: [] };
      })()
    : locationOverride ?? sourceFor(row.url);

  const data = !isBlog ? pageData.get(row.url) : null;
  const ogImage = isBlog ? null : (data?.heroImage && String(data.heroImage).trim() ? data.heroImage : null);

  const baseTitle = source.title ? clean(source.title) : headline(slugFor(row.url));
  const title = titleWithBrand(baseTitle);

  const baseDesc = (source.description && clean(source.description))
    || (isBlog ? `${baseTitle}.` : fallbackDescription(row.url, baseTitle));
  const description = truncateAtWord(baseDesc, 155);

  const focus = source.keywords?.map((k) => clean(k).toLowerCase()).find((k) => k && k.length >= 3)
    ?? deriveKeyword(baseTitle);

  let related = [...(source.keywords ?? [])]
    .map((k) => clean(k).replace(/\s+/g, ' ').trim())
    .filter((k) => k && k.length >= 3 && !/^blog$/i.test(k));
  related = [focus, ...related, ...slugFor(row.url).split('-').filter(Boolean)].filter(Boolean)
    .map((k) => k.replace(/\s+/g, ' ').trim());
  related = [...new Set(related.map((k) => k.toLowerCase()))].slice(0, 6);

  const breadcrumb = (stripBrand(baseTitle) || headline(slugFor(row.url))).slice(0, 60).trim();

  const record = {
    url: row.url,
    seoable_type: isBlog ? 'App\\Models\\BlogPost' : 'App\\Models\\Page',
    title,
    description,
    focus_keyword: focus,
    related_keywords: related,
    robots_index: nofollow ? 'noindex' : 'index',
    robots_follow: true,
    breadcrumb_title: breadcrumb,
    schema_page_type: pageTypeFor(row.url, row),
    is_cornerstone: ['/', '/accounts', '/taxation', '/industries', '/pricing', '/company-formation', '/small-business', '/switch-accountant'].includes(row.url),
    og_title: title,
    og_description: description,
    twitter_title: title,
    twitter_description: description,
    og_image: ogImage,
    twitter_image: ogImage,
  };

  if (isBlog && row.kind === 'post') record.schema_article_type = 'BlogPosting';
  if (isBlog && row.kind === 'archive') record.schema_article_type = 'None';

  records.push(record);
  const bucket = isBlog ? report.blogs : report.pages;
  bucket[nofollow ? 'noindex' : 'index'] = (bucket[nofollow ? 'noindex' : 'index'] ?? 0) + 1;
}

fs.mkdirSync(SEED_DIR, { recursive: true });
fs.writeFileSync(OUT_FILE, JSON.stringify(records, null, 2) + '\n', 'utf8');

const noDesc = records.filter((r) => !r.description).length;
const noTitle = records.filter((r) => !r.title).length;
const noKeyword = records.filter((r) => !r.focus_keyword).length;
const overDesc = records.filter((r) => r.description.length > 160).length;
const overTitle = records.filter((r) => r.title.length > 70).length;

console.log(`Wrote ${records.length} SEO records to ${path.relative(ROOT, OUT_FILE)}`);
console.log('Indexed:', JSON.stringify(report));
console.log(`empty title=${noTitle} empty description=${noDesc} empty keyword=${noKeyword}`);
console.log(`titles > 70 chars: ${overTitle}; descriptions > 160 chars: ${overDesc}`);
