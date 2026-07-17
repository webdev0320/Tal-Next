// scripts/generate-sitemap.mjs
// Run with: node scripts/generate-sitemap.mjs
// Generates a static public/sitemap.xml based on App.jsx routes + dynamic JSON data.

import fs from 'fs';
import path from 'path';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.taxaccolega.co.uk';
const PUBLIC_DIR = path.join(process.cwd(), 'public');

// ---- 1. Static routes (copied from App.jsx, excluding dynamic :slug routes & catch-all) ----
const staticRoutes = [
  '/',
  '/about-us',
  '/blog',
  '/contact-us',
  '/switch-accountant',
  '/refer-and-earn',
  '/awards-accolades-accreditations',
  '/schedule-a-phone-call-or-video-meeting',
  '/taxation',
  '/accounts',
  '/company-formation',
  '/registered-address',
  '/company-secretarial',
  '/employment-agreement',
  '/share-transfer',
  '/legal',
  '/software',
  '/banks',
  '/taxation/company-tax-return-accountants',
  '/taxation/vat-accountants',
  '/taxation/inheritance-tax-planning',
  '/taxation/emi-schemes',
  '/taxation/let-property-campaign',
  '/taxation/worldwide-disclosure-facility',
  '/taxation/cryptocurrency',
  '/taxation/personal-income-tax-professionals-and-chartered-accountants',
  '/accounts/annual-accounts',
  '/accounts/payroll-services',
  '/accounts/hmrc-self-assessment-tax-returns-accountant',
  '/accounts/auto-enrolment-pension-contributions',
  '/accounts/financial-forecasting',
  '/accounts/statutory-accounts',
  '/accounts/management-accounts',
  '/accounts/consolidated-accounts',
  '/accounts/cash-flow-forecasting',
  '/packages/sole-trader',
  '/packages/ltd-company',
  '/packages/contractor-ltd',
  '/packages/landlords',
  '/packages/spvs-ltd',
  '/packages/charities',
  '/refer-a-friend',
  '/privacy-policy',
  '/charities',
];

// ---- 2. Account/Industry service pages (object keyed by slug) ----
let accountRoutes = [];
const accountServicePagesPath = path.join(PUBLIC_DIR, 'account-service-pages.json');
if (fs.existsSync(accountServicePagesPath)) {
  const accountServiceData = JSON.parse(fs.readFileSync(accountServicePagesPath, 'utf-8'));
  accountRoutes = Object.keys(accountServiceData).map((slug) => `/accounts/${slug}`);
}

// ---- 3. Blog posts ----
let blogRoutes = [];
const blogsPath = path.join(PUBLIC_DIR, 'blogs.json');
if (fs.existsSync(blogsPath)) {
  const blogsData = JSON.parse(fs.readFileSync(blogsPath, 'utf-8'));
  blogRoutes = blogsData.posts
    .filter((post) => post.status === 'publish')
    .map((post) => ({ url: `/blog/${post.slug}`, lastmod: post.date }));
}

// ---- 4. Industry pages (slugs from src/data/industriesConfig.js) ----
const industrySlugs = [
  'it-professionals',
  'real-estate',
  'ecommerce',
  'construction',
  'automobile',
  'restaurants',
  'wholesellers-retailers',
  'healthcare-professionals',
  'leisure-industry',
  'non-uk-resident-taxation',
  'logistics',
  'expatriates',
  // 'charities' has its own dedicated route at /charities (already in staticRoutes),
  // so it's excluded here to avoid a duplicate /industries/charities entry.
];
const industryRoutes = industrySlugs.map((slug) => `/industries/${slug}`);

// ---- Build final URL list ----
const today = new Date().toISOString().split('T')[0];

const urls = [
  ...staticRoutes.map((route) => ({ loc: `${BASE_URL}${route}`, lastmod: today })),
  ...accountRoutes.map((route) => ({ loc: `${BASE_URL}${route}`, lastmod: today })),
  ...industryRoutes.map((route) => ({ loc: `${BASE_URL}${route}`, lastmod: today })),
  ...blogRoutes.map((post) => ({
    loc: `${BASE_URL}${post.url}`,
    lastmod: post.lastmod ? post.lastmod.split(' ')[0] : today,
  })),
];

// ---- Write XML ----
const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
  </url>`
  )
  .join('\n')}
</urlset>
`;

fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap.xml'), xml);
console.log(`✅ sitemap.xml generated with ${urls.length} URLs at public/sitemap.xml`);
