/**
 * audit-wp-routes.mjs
 * Compares WordPress page_urls.json against Next.js routing structure.
 * Produces: matched, missing, ambiguous lists; saves missing_pages.json
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

// ─────────────────────────────────────────────
// 1. Load WordPress URLs & normalise to paths
// ─────────────────────────────────────────────
const wpUrls = JSON.parse(fs.readFileSync(path.join(ROOT, 'public', 'page_urls.json'), 'utf8'));

function normalisePath(rawUrl) {
  // Strip domain, lowercase, ensure leading slash, remove trailing slash
  let p = rawUrl.replace(/^https?:\/\/[^/]+/, '').toLowerCase();
  if (!p.startsWith('/')) p = '/' + p;
  if (p !== '/' && p.endsWith('/')) p = p.slice(0, -1);
  return p;
}

const wpPaths = wpUrls.map(normalisePath);

// ─────────────────────────────────────────────
// 2. Build Next.js route list from app/ dir
// ─────────────────────────────────────────────

// Static routes derived from page.jsx files in src/app/
const staticAppRoutes = [
  '/',
  '/about-us',
  '/accounts',
  '/accounts/annual-accounts',
  '/accounts/auto-enrolment-pension-contributions',
  '/accounts/bookkeeping',
  '/accounts/bookkeeping-services',
  '/accounts/cash-flow-forecasting',
  '/accounts/consolidated-accounts',
  '/accounts/financial-forecasting',
  '/accounts/hmrc-self-assessment-tax-returns-accountant',
  '/accounts/management-accounts',
  '/accounts/payroll-services',
  '/accounts/self-assessment',
  '/accounts/statutory-accounts',
  '/awards-accolades-accreditations',
  '/banks',
  '/blog',
  '/company-formation',
  '/company-secretarial',
  '/contact-us',
  '/employment-agreement',
  '/industries/automobile',
  '/industries/charities',
  '/industries/charity',
  '/industries/construction',
  '/industries/ecommerce',
  '/industries/expatriates',
  '/industries/healthcare-professionals',
  '/industries/hospitality',
  '/industries/it-professionals',
  '/industries/leisure-industry',
  '/industries/logistics',
  '/industries/non-uk-resident-taxation',
  '/industries/real-estate',
  '/industries/restaurants',
  '/industries/wholesellers-retailers',
  '/legal',
  '/packages/charities',
  '/packages/charities-pricing',
  '/packages/contractor-ltd',
  '/packages/contractor-ltd-pricing',
  '/packages/landlords',
  '/packages/landlords-3',
  '/packages/ltd-company',
  '/packages/ltd-company-pricing',
  '/packages/sole-trader',
  '/packages/sole-trader-pricing',
  '/packages/spvs-ltd',
  '/packages/spvs-ltd-pricing',
  '/privacy-policy',
  '/refer-a-friend',
  '/refer-and-earn',
  '/registered-address',
  '/robots.txt',
  '/schedule-a-phone-call-or-video-meeting',
  '/share-transfer',
  '/software',
  '/switch-accountant',
  '/taxation',
  '/taxation/company-tax-return-accountants',
  '/taxation/cryptocurrency',
  '/taxation/emi-schemes',
  '/taxation/inheritance-tax-planning',
  '/taxation/let-property-campaign',
  '/taxation/personal-income-tax-professionals-and-chartered-accountants',
  '/taxation/vat-accountants',
  '/taxation/worldwide-disclosure-facility',
];

// Dynamic route patterns with their slugs (from generateStaticParams)
const dynamicTaxationSlugs = [
  'worldwide-disclosure-facility', 'film-tax-relief', 'let-property-campaign',
  'personal-income-tax', 'company-tax-return-accountants', 'vat-accountants',
  'inheritance-tax-planning', 'tax-investigation-insurance', 'emi-schemes',
  'cryptocurrency', 'personal-income-tax-professionals-and-chartered-accountants',
  'capital-gains-tax', 'capital-gains-tax-accountant', 'capital-gains-tax-accountants',
  'corporate-tax-return', 'estate-and-property-tax-planning-accountants',
  'estate-property-tax-planning', 'estate-tax', 'income-tax', 'inheritance-tax',
  'inheritance-tax-planning-advisors', 'let-property', 'non-uk-resident',
  'non-uk-resident-taxation', 'rd', 'seed-enterprise-investment-scheme-tax-relief',
  'seis-tax-relief', 'tax-advisors', 'tax-investigation', 'worldwide-disclosure',
];

const dynamicPackageSlugs = [
  'sole-trader', 'ltd-company', 'contractor-ltd', 'spvs-ltd', 'landlords', 'charities',
];

// Blog slugs – read from blogs.json
let blogSlugs = [];
const blogsJsonPath = path.join(ROOT, 'public', 'blogs.json');
if (fs.existsSync(blogsJsonPath)) {
  try {
    const blogsData = JSON.parse(fs.readFileSync(blogsJsonPath, 'utf8'));
    blogSlugs = (blogsData.posts || []).map(p => p.slug);
  } catch { /* ignore */ }
}

// Build full set of known routes (static + dynamic)
const knownRoutes = new Set([
  ...staticAppRoutes.map(r => r.toLowerCase()),
  ...dynamicTaxationSlugs.map(s => `/taxation/${s}`),
  ...dynamicPackageSlugs.map(s => `/packages/${s}`),
  ...blogSlugs.map(s => `/blog/${s}`),
]);

// Dynamic route PATTERNS for ambiguous matching
const dynamicPatterns = [
  /^\/taxation\/.+$/,      // /taxation/[slug]
  /^\/packages\/.+$/,      // /packages/[slug]
  /^\/blog\/.+$/,          // /blog/[slug]
  /^\/industries\/.+$/,    // /industries/[slug]
];

// Known redirect mappings (old slug → new path)
const knownRedirects = {
  '/home-old':          '/',
  '/blog-old':          '/blog',
  '/bank':              '/banks',
  '/software-2':        '/software',
  '/sole-traders':      '/packages/sole-trader',
  '/limited-company':   '/packages/ltd-company',
  '/spvs-ltd':          '/packages/spvs-ltd',
  '/landlords':         '/packages/landlords',
  '/landlords-2':       '/packages/landlords',
  '/landlords-4':       '/packages/landlords',
  '/sole-trader-pricing':      '/packages/sole-trader-pricing',
  '/sole-traders-package':     '/packages/sole-trader',
  '/ltd-company':              '/packages/ltd-company',
  '/spvs-residential':         '/packages/spvs-ltd',
  '/non-uk-resident':          '/industries/non-uk-resident-taxation',
  '/non-resident':             '/industries/non-uk-resident-taxation',
  '/industries':               '/industries/automobile',  // parent page — redirect to listing
  '/packages':                 '/packages/sole-trader',   // parent page
  '/charities':                '/industries/charities',
  '/industries/charities':     '/industries/charities',
  '/accounts/bookkeeping-services':   '/accounts/bookkeeping',
  '/accounts/self-assessment':        '/accounts/hmrc-self-assessment-tax-returns-accountant',
  '/accounts/self-assessment-tax-returns': '/accounts/hmrc-self-assessment-tax-returns-accountant',
  '/accounts/self-assessment-tax-return-accountants': '/accounts/hmrc-self-assessment-tax-returns-accountant',
  '/taxation/inheritance-tax-accountant': '/taxation/inheritance-tax-planning',
  '/taxation/property-tax':   '/taxation/estate-property-tax-planning',
};

// ─────────────────────────────────────────────
// 3. Classify each WP path
// ─────────────────────────────────────────────
const matched   = [];
const missing   = [];
const ambiguous = [];

for (const wpPath of wpPaths) {
  // a) Direct match
  if (knownRoutes.has(wpPath)) {
    matched.push({ path: wpPath, matchType: 'static' });
    continue;
  }

  // b) Known redirect
  if (knownRedirects[wpPath]) {
    matched.push({ path: wpPath, matchType: 'redirect', redirectsTo: knownRedirects[wpPath] });
    continue;
  }

  // c) Could match a dynamic pattern
  const matchedPattern = dynamicPatterns.find(rx => rx.test(wpPath));
  if (matchedPattern) {
    ambiguous.push({
      path: wpPath,
      reason: `Matches dynamic pattern ${matchedPattern} but slug not in generateStaticParams`,
    });
    continue;
  }

  // d) Genuinely missing
  missing.push({ path: wpPath });
}

// ─────────────────────────────────────────────
// 4. Flag missing paths that look like redirects
// ─────────────────────────────────────────────
const LIKELY_REDIRECT_PATTERNS = [
  // duplicate or renamed slugs
  { rx: /^\/accounts\/bookkeeping-services-for-small-business(-.*)?$/, to: '/accounts/bookkeeping-services' },
  { rx: /^\/accounts\/self-assessment-tax-return-accountant(-.*)?$/, to: '/accounts/hmrc-self-assessment-tax-returns-accountant' },
  { rx: /^\/accounts\/bookkeeping-services(-.*)?$/, to: '/accounts/bookkeeping-services' },
  { rx: /^\/accounts\/self-assessment-tax-return-accountants(-.*)?$/, to: '/accounts/hmrc-self-assessment-tax-returns-accountant' },
];

for (const m of missing) {
  for (const { rx, to } of LIKELY_REDIRECT_PATTERNS) {
    if (rx.test(m.path)) {
      m.likelyRedirectTo = to;
      m.note = 'Looks like a location-specific variant of an existing page — consider a redirect';
      break;
    }
  }
}

// ─────────────────────────────────────────────
// 5. Save missing_pages.json
// ─────────────────────────────────────────────
const missingJsonPath = path.join(ROOT, 'missing_pages.json');
fs.writeFileSync(missingJsonPath, JSON.stringify(missing, null, 2), 'utf8');

// ─────────────────────────────────────────────
// 6. Print summary report
// ─────────────────────────────────────────────
console.log('='.repeat(70));
console.log('WordPress → Next.js Migration Route Audit');
console.log('='.repeat(70));
console.log(`\nTotal WP URLs analysed : ${wpPaths.length}`);
console.log(`✅ Matched             : ${matched.length}`);
console.log(`⚠️  Ambiguous           : ${ambiguous.length}`);
console.log(`❌ Missing             : ${missing.length}`);

console.log('\n' + '─'.repeat(70));
console.log('MISSING PAGES (require new content or redirect)');
console.log('─'.repeat(70));

const missingWithRedirect   = missing.filter(m => m.likelyRedirectTo);
const missingNeedingContent = missing.filter(m => !m.likelyRedirectTo);

console.log(`\n  Needs new content (${missingNeedingContent.length}):`);
for (const m of missingNeedingContent) console.log(`    • ${m.path}`);

console.log(`\n  Likely just needs a REDIRECT (${missingWithRedirect.length}):`);
for (const m of missingWithRedirect) console.log(`    • ${m.path}  →  ${m.likelyRedirectTo}`);

console.log('\n' + '─'.repeat(70));
console.log('AMBIGUOUS (match dynamic pattern but slug not statically registered)');
console.log('─'.repeat(70));
for (const a of ambiguous) console.log(`  ? ${a.path}  [${a.reason}]`);

console.log('\n' + '─'.repeat(70));
console.log('MATCHED');
console.log('─'.repeat(70));
const redirectMatches = matched.filter(m => m.matchType === 'redirect');
const staticMatches   = matched.filter(m => m.matchType === 'static');
console.log(`  Static routes   : ${staticMatches.length}`);
console.log(`  Via redirect map: ${redirectMatches.length}`);
for (const r of redirectMatches) console.log(`    ↩  ${r.path}  →  ${r.redirectsTo}`);

console.log('\n✅ missing_pages.json saved to project root.');
