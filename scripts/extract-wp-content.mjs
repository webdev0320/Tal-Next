/**
 * extract-wp-content.mjs
 * Parses public/pages.xml and extracts page content for given paths.
 * Outputs: scripts/wp-extracted.json
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

// Target paths (Category B — need real content)
const TARGET_PATHS = [
  '/business-start-up',
  '/construction-industry-scheme',
  '/start-ups-basic',
  '/dentists',
  '/contractors',
  '/payment-confirmation',
  '/payment-failed',
  '/business-plan',
  '/flow',
  '/xero',
  '/quickbooks',
  '/sage',
  '/freeagent',
  '/dext',
  '/taxcalc',
  '/btc-software',
  '/anna',
  '/tide',
  '/mettle',
  '/monzo',
  '/revolut',
  '/starling',
  '/self-employed',
  '/e-commerce',
  '/amazon-seller',
  '/shopify',
  '/saas',
  '/ebay-seller',
  '/woocommerce',
  '/dropshipping',
  '/freelancers',
  '/small-business',
  '/property-landlords',
  '/furnished-holiday-letting',
  '/contractors-insurance',
  '/ir35-contractors-review',
  '/hotels-restaurants-bars',
  '/hairdressers-beauty-barbers',
  '/jewellers',
  '/construction-builders',
  '/media-creative-industries',
  '/optician-optometrists',
  '/core-package',
  '/spvs',
  '/pricing',
  '/autumn-budget-2024',
  '/team-member',
  '/testimonial',
  '/id-verification-form-for-companies-house',
  '/thank-you-transaction-result',
  '/shop-products',
  '/id-verification-form-for-companies-house/thank-you',
];

const DOMAIN = 'https://www.taxaccolega.co.uk';

function normalisePath(url) {
  let p = url.replace(/^https?:\/\/[^/]+/, '').toLowerCase();
  if (!p.startsWith('/')) p = '/' + p;
  if (p !== '/' && p.endsWith('/')) p = p.slice(0, -1);
  return p;
}

function extractText(html) {
  if (!html) return '';
  return html
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
    // Elementor shortcodes and widgets
    .replace(/\[et_pb[^\]]*\]/gi, '')
    .replace(/\[\/et_pb[^\]]*\]/gi, '')
    .replace(/\[elementor[^\]]*\]/gi, '')
    .replace(/\[vc_[^\]]*\]/gi, '')
    // All other shortcodes
    .replace(/\[[^\]]+\]/g, '')
    // HTML tags → spaces
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/p>/gi, '\n')
    .replace(/<\/li>/gi, '\n')
    .replace(/<\/h[1-6]>/gi, '\n')
    .replace(/<[^>]+>/g, ' ')
    // HTML entities
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#8217;/g, "'")
    .replace(/&#8216;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&#8211;/g, '–')
    .replace(/&#8212;/g, '—')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    // Collapse whitespace
    .replace(/[ \t]+/g, ' ')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function extractMetaValue(xml, metaKey) {
  // Match <wp:postmeta> blocks containing the key
  const regex = new RegExp(
    `<wp:postmeta>\\s*<wp:meta_key><!\\[CDATA\\[${metaKey}\\]\\]><\\/wp:meta_key>\\s*<wp:meta_value><!\\[CDATA\\[([\\s\\S]*?)\\]\\]><\\/wp:meta_value>\\s*<\\/wp:postmeta>`,
    'i'
  );
  const m = xml.match(regex);
  return m ? m[1].trim() : null;
}

function extractCdata(tag, xml) {
  const regex = new RegExp(`<${tag}[^>]*><!\\[CDATA\\[([\\s\\S]*?)\\]\\]><\\/${tag}>`, 'i');
  const m = xml.match(regex);
  if (m) return m[1].trim();
  // Try without CDATA
  const regex2 = new RegExp(`<${tag}[^>]*>([^<]*)<\\/${tag}>`, 'i');
  const m2 = xml.match(regex2);
  return m2 ? m2[1].trim() : '';
}

console.log('Reading pages.xml (this may take a moment)...');
const xmlPath = path.join(ROOT, 'public', 'pages.xml');
const xml = fs.readFileSync(xmlPath, 'utf8');
console.log(`File size: ${(xml.length / 1024 / 1024).toFixed(1)}MB`);

// Split into <item> blocks
console.log('Splitting into items...');
const items = xml.split('<item>').slice(1).map(block => '<item>' + block.split('</item>')[0] + '</item>');
console.log(`Found ${items.length} items`);

// Build lookup map: path → item content
const pathMap = new Map();
for (const item of items) {
  const linkMatch = item.match(/<link>([^<]+)<\/link>/);
  if (!linkMatch) continue;
  const rawLink = linkMatch[1].trim();
  const p = normalisePath(rawLink);
  pathMap.set(p, item);
}

console.log(`Unique paths in XML: ${pathMap.size}`);

// Extract content for each target
const results = [];
for (const targetPath of TARGET_PATHS) {
  const item = pathMap.get(targetPath);
  if (!item) {
    results.push({ path: targetPath, found: false });
    continue;
  }

  const title = extractCdata('title', item);
  const postName = extractCdata('wp:post_name', item);
  const postStatus = extractCdata('wp:status', item);
  const postType = extractCdata('wp:post_type', item);
  const rawContent = extractCdata('content:encoded', item);

  // Yoast SEO meta
  const yoastTitle = extractMetaValue(item, '_yoast_wpseo_title');
  const yoastDesc = extractMetaValue(item, '_yoast_wpseo_metadesc');
  const yoastFocusKw = extractMetaValue(item, '_yoast_wpseo_focuskw');

  // Clean up content
  const cleanContent = extractText(rawContent);

  // Extract headings from raw HTML
  const headings = [];
  const hMatches = [...(rawContent.matchAll(/<h([1-6])[^>]*>([\s\S]*?)<\/h\1>/gi) || [])];
  for (const m of hMatches) {
    headings.push({ level: parseInt(m[1]), text: extractText(m[2]) });
  }

  // Extract paragraphs (first 5 meaningful ones)
  const paraMatches = [...(rawContent.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi) || [])];
  const paragraphs = paraMatches
    .map(m => extractText(m[1]))
    .filter(p => p.length > 30)
    .slice(0, 8);

  // Extract bullet lists
  const liMatches = [...(rawContent.matchAll(/<li[^>]*>([\s\S]*?)<\/li>/gi) || [])];
  const bullets = liMatches
    .map(m => extractText(m[1]))
    .filter(b => b.length > 5)
    .slice(0, 20);

  results.push({
    path: targetPath,
    found: true,
    postStatus,
    postType,
    title,
    postName,
    seo: {
      yoastTitle: yoastTitle || null,
      yoastDesc: yoastDesc || null,
      focusKw: yoastFocusKw || null,
    },
    headings,
    paragraphs,
    bullets,
    // Truncated clean content for reference
    cleanContentPreview: cleanContent.slice(0, 1000),
  });
}

const outPath = path.join(__dirname, 'wp-extracted.json');
fs.writeFileSync(outPath, JSON.stringify(results, null, 2), 'utf8');

// Summary
console.log('\n=== EXTRACTION SUMMARY ===');
const found = results.filter(r => r.found);
const notFound = results.filter(r => !r.found);
console.log(`Found: ${found.length} / ${TARGET_PATHS.length}`);
console.log(`Not found: ${notFound.length}`);
if (notFound.length) {
  console.log('\nNot found in pages.xml:');
  notFound.forEach(r => console.log(`  • ${r.path}`));
}
if (found.length) {
  console.log('\nFound (title, status):');
  found.forEach(r => console.log(`  ✅ ${r.path} → "${r.title}" [${r.postStatus}]`));
}
console.log(`\nOutput: ${outPath}`);
