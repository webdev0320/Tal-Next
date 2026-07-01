/**
 * This script reads public/seo-metadata.json (extracted from pages.xml)
 * and generates an updated src/data/seo/staticPages.js, taxationSeo.js, and packagesSeo.js
 * merging the WordPress SEO data with the existing code.
 */
import fs from 'fs';
import path from 'path';

const seoData = JSON.parse(fs.readFileSync('public/seo-metadata.json', 'utf-8'));

// ---- Helpers ----
function clean(str) {
  return (str || '')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#8217;/g, "'")
    .replace(/&#8216;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/%title%/g, '')
    .replace(/%sep%/g, '|')
    .replace(/\s+/g, ' ')
    .trim();
}

function getSeoForPath(urlPath) {
  const item = seoData[urlPath];
  if (!item) return null;
  return {
    title: clean(item.title),
    description: clean(item.description),
    keywords: item.keywords || []
  };
}

// ---- Build staticPages.js ----
// Get all paths that should be in staticPages (non-taxation, non-packages, non-blog)
const TAXATION_PREFIX = '/taxation/';
const PACKAGES_PREFIX = '/packages/';
const BLOG_PREFIX = '/blog/';
const INDUSTRIES_PREFIX = '/industries/';
const ACCOUNTS_PREFIX = '/accounts/';

// Routes for staticPages (existing manually curated ones)
const existingStaticPaths = [
  '/', '/about-us', '/accounts', '/accounts/annual-accounts', '/accounts/bookkeeping',
  '/accounts/bookkeeping-services', '/accounts/cash-flow-forecasting', '/accounts/consolidated-accounts',
  '/accounts/financial-forecasting', '/accounts/hmrc-self-assessment-tax-returns-accountant',
  '/accounts/management-accounts', '/accounts/payroll-services', '/accounts/self-assessment',
  '/accounts/statutory-accounts', '/accounts/auto-enrolment-pension-contributions',
  '/awards-accolades-accreditations', '/banks', '/blog', '/company-formation', '/company-secretarial',
  '/contact-us', '/employment-agreement', '/legal', '/privacy-policy', '/refer-a-friend',
  '/refer-and-earn', '/registered-address', '/schedule-a-phone-call-or-video-meeting',
  '/share-transfer', '/software', '/switch-accountant', '/taxation',
  '/taxation/worldwide-disclosure-facility', '/taxation/cryptocurrency',
  '/taxation/let-property-campaign', '/taxation/personal-income-tax-professionals-and-chartered-accountants',
  '/taxation/company-tax-return-accountants', '/taxation/vat-accountants',
  '/taxation/inheritance-tax-planning', '/taxation/emi-schemes',
  '/packages/sole-trader', '/packages/sole-trader-pricing', '/packages/ltd-company',
  '/packages/ltd-company-pricing', '/packages/contractor-ltd', '/packages/contractor-ltd-pricing',
  '/packages/landlords', '/packages/landlords-3', '/packages/spvs-ltd', '/packages/spvs-ltd-pricing',
  '/packages/charities', '/packages/charities-pricing',
  // Additional pages
  '/pricing', '/contractors', '/dentists', '/self-employed', '/freelancers', '/small-business',
  '/business-start-up', '/construction-industry-scheme', '/ir35-contractors-review',
  '/contractors-insurance', '/start-ups-basic', '/business-plan',
  '/e-commerce', '/amazon-seller', '/shopify', '/saas', '/ebay-seller', '/woocommerce', '/dropshipping',
  '/xero', '/quickbooks', '/sage', '/freeagent', '/dext', '/taxcalc', '/btc-software', '/flow',
  '/anna', '/tide', '/mettle', '/monzo', '/revolut', '/starling',
  '/property-landlords', '/furnished-holiday-letting', '/hotels-restaurants-bars',
  '/hairdressers-beauty-barbers', '/jewellers', '/construction-builders',
  '/media-creative-industries', '/optician-optometrists', '/autumn-budget-2024',
  '/core-package', '/spvs', '/payment-confirmation', '/payment-failed', '/team-member', '/testimonial',
  // industries
  '/industries/automobile', '/industries/charities', '/industries/charity', '/industries/construction',
  '/industries/ecommerce', '/industries/expatriates', '/industries/healthcare-professionals',
  '/industries/hospitality', '/industries/it-professionals', '/industries/leisure-industry',
  '/industries/logistics', '/industries/non-uk-resident-taxation', '/industries/real-estate',
  '/industries/restaurants', '/industries/wholesellers-retailers',
];

let staticPagesCode = `/** @typedef {{ title: string, description: string, keywords?: string[], image?: string, type?: 'website'|'article' }} StaticPageSeo */

/** @type {Record<string, StaticPageSeo>} */
export const staticPages = {\n`;

for (const urlPath of existingStaticPaths) {
  const seo = getSeoForPath(urlPath);
  if (!seo || !seo.title) continue;
  
  const title = seo.title || '';
  const description = seo.description || '';
  const keywords = seo.keywords.length > 0 ? seo.keywords : [];
  
  const keywordsStr = keywords.length > 0 
    ? `[${keywords.map(k => `'${k.replace(/'/g, "\\'")}'`).join(', ')}]`
    : '[]';
  
  staticPagesCode += `  '${urlPath}': {\n`;
  staticPagesCode += `    title: ${JSON.stringify(title)},\n`;
  if (description) {
    staticPagesCode += `    description: ${JSON.stringify(description)},\n`;
  }
  if (keywords.length > 0) {
    staticPagesCode += `    keywords: ${keywordsStr},\n`;
  }
  staticPagesCode += `  },\n`;
}

staticPagesCode += `};\n
/**
 * @param {string} path
 * @returns {StaticPageSeo | undefined}
 */
export function getStaticPageSeo(path) {
  const normalized = path.endsWith('/') && path.length > 1 ? path.slice(0, -1) : path;
  return staticPages[normalized];
}
`;

fs.writeFileSync('src/data/seo/staticPages.js', staticPagesCode, 'utf-8');
console.log('Written staticPages.js with', existingStaticPaths.length, 'paths');

// ---- Build taxationSeo.js ----
// All /taxation/* paths
const taxationPaths = Object.keys(seoData).filter(p => p.startsWith('/taxation/'));

let taxationSeoCode = `/** @type {Record<string, { title: string, subtitle?: string, description?: string, keywords?: string[] }>} */
export const taxationSeo = {\n`;

for (const urlPath of taxationPaths) {
  const slug = urlPath.replace('/taxation/', '');
  if (!slug || slug.includes('/')) continue;
  
  const seo = getSeoForPath(urlPath);
  if (!seo || !seo.title) continue;
  
  taxationSeoCode += `  '${slug}': {\n`;
  taxationSeoCode += `    title: ${JSON.stringify(seo.title)},\n`;
  if (seo.description) {
    taxationSeoCode += `    description: ${JSON.stringify(seo.description)},\n`;
  }
  taxationSeoCode += `  },\n`;
}

taxationSeoCode += `};\n`;

fs.writeFileSync('src/data/seo/taxationSeo.js', taxationSeoCode, 'utf-8');
console.log('Written taxationSeo.js with', taxationPaths.length, 'paths');

// ---- Build packagesSeo.js ----
const packagesPaths = Object.keys(seoData).filter(p => p.startsWith('/packages/'));
let packagesSeoCode = `/** @type {Record<string, { title: string, description?: string, keywords?: string[] }>} */
export const packagesSeo = {\n`;

for (const urlPath of packagesPaths) {
  const slug = urlPath.replace('/packages/', '');
  if (!slug || slug.includes('/')) continue;
  
  const seo = getSeoForPath(urlPath);
  if (!seo || !seo.title) continue;
  
  packagesSeoCode += `  '${slug}': {\n`;
  packagesSeoCode += `    title: ${JSON.stringify(seo.title)},\n`;
  if (seo.description) {
    packagesSeoCode += `    description: ${JSON.stringify(seo.description)},\n`;
  }
  packagesSeoCode += `  },\n`;
}

packagesSeoCode += `};\n`;

// Write packagesSeo.js
const packagesSeoPath = 'src/data/seo/packagesSeo.js';
if (fs.existsSync(packagesSeoPath)) {
  fs.writeFileSync(packagesSeoPath, packagesSeoCode, 'utf-8');
  console.log('Written packagesSeo.js with', packagesPaths.length, 'paths');
} else {
  console.log('packagesSeo.js not found — skipping');
}

// ---- Generate Blog SEO JSON map ----
const blogSeoData = {};
const blogPaths = Object.keys(seoData).filter(p => p.startsWith('/blog/'));
for (const urlPath of blogPaths) {
  const slug = urlPath.replace('/blog/', '');
  const seo = getSeoForPath(urlPath);
  if (seo && seo.title) {
    blogSeoData[slug] = { title: seo.title, description: seo.description };
  }
}
fs.writeFileSync('public/blog-seo.json', JSON.stringify(blogSeoData, null, 2), 'utf-8');
console.log('Written blog-seo.json with', Object.keys(blogSeoData).length, 'blog slugs');
