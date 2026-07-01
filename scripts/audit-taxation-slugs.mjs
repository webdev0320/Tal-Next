/**
 * audit-taxation-slugs.mjs
 * Finds which /taxation/[slug] entries in generateStaticParams
 * are NOT covered by taxationConfig, and checks pages.xml for their content.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

// Slugs in generateStaticParams
const STATIC_PARAMS_SLUGS = [
  'worldwide-disclosure-facility',
  'film-tax-relief',
  'let-property-campaign',
  'personal-income-tax',
  'company-tax-return-accountants',
  'vat-accountants',
  'inheritance-tax-planning',
  'tax-investigation-insurance',
  'emi-schemes',
  'cryptocurrency',
  'personal-income-tax-professionals-and-chartered-accountants',
  'capital-gains-tax',
  'capital-gains-tax-accountant',
  'capital-gains-tax-accountants',
  'corporate-tax-return',
  'estate-and-property-tax-planning-accountants',
  'estate-property-tax-planning',
  'estate-tax',
  'income-tax',
  'inheritance-tax',
  'inheritance-tax-planning-advisors',
  'let-property',
  'non-uk-resident',
  'non-uk-resident-taxation',
  'rd',
  'seed-enterprise-investment-scheme-tax-relief',
  'seis-tax-relief',
  'tax-advisors',
  'tax-investigation',
  'worldwide-disclosure',
];

// Slugs already in taxationConfig (have full custom page)
const TAXATION_CONFIG_SLUGS = new Set([
  'worldwide-disclosure-facility',
  'cryptocurrency',
  'film-tax-relief',
  'let-property-campaign',
  'personal-income-tax',
  'company-tax-return-accountants',
  'vat-accountants',
  'inheritance-tax-planning',
  'tax-investigation-insurance',
]);

// Static sub-routes that have their own page.jsx (not dynamic)
const STATIC_ROUTES = new Set([
  'company-tax-return-accountants',
  'cryptocurrency',
  'emi-schemes',
  'inheritance-tax-planning',
  'let-property-campaign',
  'personal-income-tax-professionals-and-chartered-accountants',
  'vat-accountants',
  'worldwide-disclosure-facility',
]);

const missing = STATIC_PARAMS_SLUGS.filter(s => !TAXATION_CONFIG_SLUGS.has(s));
console.log(`\n📋 Slugs in generateStaticParams NOT in taxationConfig (${missing.length}):`);
missing.forEach(s => {
  const hasStaticRoute = STATIC_ROUTES.has(s);
  console.log(`  ${hasStaticRoute ? '✅ has static route' : '❌ NO static route'} → /taxation/${s}`);
});

// Now search pages.xml for each missing slug
const DOMAIN = 'https://www.taxaccolega.co.uk';
const xmlPath = path.join(ROOT, 'public', 'pages.xml');
console.log('\nSearching pages.xml …');
const xml = fs.readFileSync(xmlPath, 'utf8');
const items = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)].map(m => m[1]);

function extractField(block, tag) {
  const cdata = new RegExp(`<${tag}[^>]*><!\\[CDATA\\[([\\s\\S]*?)\\]\\]><\\/${tag}>`, 'i');
  let m = block.match(cdata);
  if (m) return m[1].trim();
  const plain = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, 'i');
  m = block.match(plain);
  return m ? m[1].trim() : '';
}

console.log('\n🔎 pages.xml search results:');
const results = [];
for (const slug of missing) {
  const targetUrl = `${DOMAIN}/taxation/${slug}/`;
  const targetUrl2 = `${DOMAIN}/taxation/${slug}`;
  const block = items.find(b => {
    const link = extractField(b, 'link');
    return link === targetUrl || link === targetUrl2;
  });
  const title = block ? extractField(block, 'title').replace(/<[^>]+>/g, '').trim() : '';
  const hasEl = block ? (block.includes('_elementor_data') ? 'has elementor' : 'no elementor') : '';
  console.log(`  ${block ? '✅' : '⚠️ NOT FOUND'} /taxation/${slug}${block ? ` — "${title}" (${hasEl})` : ''}`);
  results.push({ slug, found: !!block, title });
}

// Summary
const found = results.filter(r => r.found).map(r => r.slug);
const notFound = results.filter(r => !r.found).map(r => r.slug);
console.log(`\n✅ Found in XML: ${found.length}`);
console.log(`⚠️  Not found in XML: ${notFound.length}`);
if (notFound.length) {
  console.log('   These slugs exist in generateStaticParams but have NO WordPress source:');
  notFound.forEach(s => console.log(`   - /taxation/${s}`));
}
