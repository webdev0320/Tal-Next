/**
 * Generates the new "Who We Assist" industry pages.
 *
 * Each page needs:
 *  - src/data/industryPages/{slug}.js   (config: title, subtitle, sections, faqs, quickNav)
 *  - src/app/industries/{slug}/page.jsx (route with noindex metadata)
 *  - registration in src/data/industryPages/index.js
 *
 * Run: node scripts/generate-assist-pages.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const CONFIG_DIR = path.join(ROOT, 'src', 'data', 'industryPages');
const APP_DIR = path.join(ROOT, 'src', 'app', 'industries');

// ── Page definitions: slug -> { title, subtitle } ──────────────────────────
// Content is derived from title/slug so it stays relevant per page.
const PAGES = [
  // Technology
  ['technology-accountants', 'Technology Accountants', 'Specialist accountants for technology businesses, software companies and IT startups across the UK.'],
  ['it-contractor-accountants', 'IT Contractor Accountants', 'Dedicated accountants for IT contractors, limited company directors and freelance tech professionals.'],
  ['startup-accountants', 'Startup Accountants', 'Accounting, tax and growth support for early-stage startups and founders.'],
  ['software-company-accountants', 'Software Company Accountants', 'Financial and tax services tailored to software companies and product-led businesses.'],
  ['saas-accountants', 'SaaS Accountants', 'Accounting for SaaS businesses, recurring revenue models and subscription-first companies.'],

  // Property
  ['property-accountants', 'Property Accountants', 'Expert property accountants for investors, landlords and property businesses across the UK.'],
  ['real-estate-accountants', 'Real Estate Accountants', 'Accounting and tax specialists for real estate professionals and property firms.'],
  ['landlord-accountants', 'Landlord Accountants', 'Dedicated landlord accountants to manage rental income, expenses and property taxes.'],
  ['property-investor-accountants', 'Property Investor Accountants', 'Tax-efficient accounting for property investors and portfolio owners.'],
  ['property-developer-accountants', 'Property Developer Accountants', 'Accountants for property developers, construction and regeneration projects.'],
  ['estate-agent-accountants', 'Estate Agent Accountants', 'Embracing a dedicated accounting partner for estate agencies and lettings firms.'],

  // E-commerce
  ['ecommerce-accountants', 'E-commerce Accountants', 'Specialist e-commerce accountants for online sellers, marketplaces and direct-to-consumer brands.'],
  ['amazon-seller-accountants', 'Amazon Seller Accountants', 'Accountants for Amazon sellers, FBA businesses and marketplace vendors.'],
  ['shopify-accountants', 'Shopify Accountants', 'Accounting and tax services tailored to Shopify store owners and D2C brands.'],
  ['online-retail-accountants', 'Online Retail Accountants', 'Financial support for online retail businesses and digital storefronts.'],
  ['wholesale-accountants', 'Wholesale Accountants', 'Accounting for wholesale, trade and B2B distribution businesses.'],
  ['retail-accountants', 'Retail Accountants', 'Dedicated accountants for retail businesses, shops and point-of-sale operations.'],

  // Construction
  ['construction-accountants', 'Construction Accountants', 'Industry-specific accountants for construction businesses, builders and contractors.'],
  ['builder-accountants', 'Builder Accountants', 'Accounting and CIS support for builders and construction trades.'],
  ['trade-accountants', 'Trade Accountants', 'Accountants for trade businesses, skilled tradespeople and contractors.'],
  ['contractor-accountants', 'Contractor Accountants', 'Dedicated contractor accountants for limited company and self-employed contractors.'],
  ['civil-engineering-accountants', 'Civil Engineering Accountants', 'Financial and tax support for civil engineering firms and consultancies.'],
  ['engineering-accountants', 'Engineering Accountants', 'Accounting for engineering businesses, design consultancies and technical firms.'],

  // Automotive
  ['automotive-accountants', 'Automotive Accountants', 'Specialist accountants for the automotive industry, dealerships and motor trade.'],
  ['car-dealership-accountants', 'Car Dealership Accountants', 'Accounting and tax services for car dealerships and vehicle sales businesses.'],
  ['motor-trade-accountants', 'Motor Trade Accountants', 'Dedicated accountants for motor traders, garages and vehicle services.'],

  // Healthcare
  ['healthcare-accountants', 'Healthcare Accountants', 'Specialist accountants for healthcare professionals and medical practices.'],
  ['doctor-accountants', 'Doctor Accountants', 'Accounting and tax support for doctors, consultants and medical professionals.'],
  ['dental-accountants', 'Dental Accountants', 'Dedicated accountants for dental practices and dental professionals.'],
  ['pharmacy-accountants', 'Pharmacy Accountants', 'Accounting for pharmacy owners, dispensaries and healthcare retailers.'],
  ['medical-practice-accountants', 'Medical Practice Accountants', 'Financial and tax services for medical practices and GP surgeries.'],
  ['locum-accountants', 'Locum Accountants', 'Dedicated locum accountants for freelance medical and healthcare professionals.'],
  ['veterinary-accountants', 'Veterinary Accountants', 'Accounting for veterinary practices and animal health professionals.'],

  // Logistics
  ['logistics-accountants', 'Logistics Accountants', 'Specialist accountants for logistics, supply chain and distribution businesses.'],
  ['transport-accountants', 'Transport Accountants', 'Accounting and tax support for transport operators and fleet businesses.'],
  ['freight-accountants', 'Freight Accountants', 'Dedicated accountants for freight, shipping and import/export businesses.'],
  ['courier-accountants', 'Courier Accountants', 'Accounting for courier, delivery and last-mile fulfilment businesses.'],

  // Hospitality
  ['hospitality-accountants', 'Hospitality Accountants', 'Specialist accountants for hospitality businesses, venues and leisure operators.'],
  ['restaurant-accountants', 'Restaurant Accountants', 'Dedicated accountants for restaurants, kitchens and hospitality venues.'],
  ['cafe-accountants', 'Cafe Accountants', 'Accounting and tax support for cafes, coffee shops and food outlets.'],
  ['takeaway-accountants', 'Takeaway Accountants', 'Accounting for takeaways, fast food and delivery-led food businesses.'],
  ['food-business-accountants', 'Food Business Accountants', 'Financial support for food businesses, producers and catering operators.'],
  ['hotel-accountants', 'Hotel Accountants', 'Dedicated accountants for hotels and accommodation businesses.'],
  ['pub-accountants', 'Pub Accountants', 'Accounting for pubs, bars and licensed hospitality venues.'],
  ['bar-accountants', 'Bar Accountants', 'Accounting and tax services for bars and licensed venues.'],
  ['event-venue-accountants', 'Event Venue Accountants', 'Accounting for event venues, hospitality and events businesses.'],
  ['leisure-accountants', 'Leisure Accountants', 'Dedicated accountants for leisure, recreation and entertainment businesses.'],

  // Charity
  ['charity-accountants', 'Charity Accountants', 'Specialist accountants for charities, non-profits and not-for-profit organisations.'],
  ['nonprofit-accountants', 'Nonprofit Accountants', 'Accounting and compliance support for nonprofit organisations.'],
  ['cic-accountants', 'CIC Accountants', 'Dedicated accountants for Community Interest Companies and social enterprises.'],

  // Professional services
  ['professional-service-accountants', 'Professional Service Accountants', 'Accounting for professional service firms, consultancies and knowledge-based businesses.'],
  ['recruitment-accountants', 'Recruitment Accountants', 'Dedicated accountants for recruitment, staffing and talent businesses.'],
  ['consultant-accountants', 'Consultant Accountants', 'Accounting and tax support for consultants and advisory professionals.'],
  ['law-firm-accountants', 'Law Firm Accountants', 'Accounting for law firms and legal practices.'],
  ['solicitor-accountants', 'Solicitor Accountants', 'Dedicated accountants for solicitors and legal professionals.'],
  ['school-accountants', 'School Accountants', 'Accounting and financial support for schools and education providers.'],
  ['training-provider-accountants', 'Training Provider Accountants', 'Accounting for trainers, educators and learning providers.'],

  // Private client
  ['private-client-accountants', 'Private Client Accountants', 'Dedicated accountants for private clients, high net worth individuals and investors.'],

  // Marketing
  ['marketing-accountants', 'Marketing Accountants', 'Specialist accountants for marketing and creative businesses.'],
  ['digital-agency-accountants', 'Digital Agency Accountants', 'Accounting for digital agencies, web and performance marketing businesses.'],
  ['media-accountants', 'Media Accountants', 'Dedicated accountants for media, broadcast and content businesses.'],
  ['creative-agency-accountants', 'Creative Agency Accountants', 'Accounting for creative agencies and design-led businesses.'],
  ['marketing-agency-accountants', 'Marketing Agency Accountants', 'Accounting and tax services for marketing agencies.'],
  ['influencer-accountants', 'Influencer Accountants', 'Dedicated accountants for influencers, creators and content monetisation.'],
];

function titleCase(slug) {
  return slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

function buildSections(title, subtitle) {
  const lower = title.toLowerCase();
  const area = subtitle.replace(/er(s)? accountants/i, '').replace(/for /i, '').trim();

  return [
    {
      title: `How We Help ${title}s`,
      paragraphs: [
        `Running a business in the ${area} space brings its own financial reality. Income can be irregular, expenses spread across multiple areas, and tax obligations vary depending on how the work is structured. At Taxaccolega we help ${lower} stay compliant while keeping more of what they earn.`,
        `Our team of chartered accountants understands the day-to-day pressures of the ${area} sector. Whether you operate as a sole trader, a limited company director or run a growing team, we tailor our services around the way your business actually works.`,
        `We handle the compliance work so you can focus on delivering your service and growing your business with confidence.`,
      ],
      bullets: [],
      image: null,
      cta: { text: 'Contact Us', href: '/contact-us' },
    },
    {
      title: `Accounting & Bookkeeping for ${title}s`,
      paragraphs: [
        `Accurate bookkeeping is the foundation of a healthy business. For ${lower}, that means recording income and expenses correctly from the start, reconciling bank accounts, and keeping your records HMRC-ready throughout the year.`,
        `We use leading cloud accounting software such as Xero and QuickBooks, so your records are always up to date and accessible wherever you are.`,
        `Our bookkeeping service gives you a clear, real-time view of your cash position, so there are no surprises at year end.`,
      ],
      bullets: [
        'Cloud bookkeeping with Xero or QuickBooks',
        'Bank reconciliation and expense tracking',
        'VAT returns prepared and filed on time',
        'Year-end accounts and statutory filing',
        'A dedicated accountant who knows your business',
      ],
      image: null,
      cta: { text: 'Book a Free Consultation', href: '/contact-us' },
    },
    {
      title: `Tax Planning for ${title}s`,
      paragraphs: [
        `Tax is one of the largest costs most businesses face, yet it is often the area where the least proactive planning happens. We help ${lower} structure their affairs to legally minimise tax while staying fully compliant.`,
        `From choosing the right business structure to optimising salaries, dividends and allowable expenses, we look at your position as a whole.`,
        `We also keep on top of deadlines, allowances and changes in tax law, so you never miss an opportunity to save.`,
      ],
      bullets: [
        'Business structure and incorporation guidance',
        'Maximising allowable expenses and reliefs',
        'Salary, dividend and extraction planning',
        'Corporation tax and self assessment filing',
        'Proactive reminders for every deadline',
      ],
      image: null,
      cta: { text: 'Speak to an Accountant', href: '/schedule-a-phone-call-or-video-meeting' },
    },
    {
      title: `Why Choose Taxaccolega for ${title}s`,
      paragraphs: [
        `We are more than a compliance service. For ${lower} across the UK, we act as a long-term financial partner, simplifying the complexities of tax and accounting so you can stay focused on what you do best.`,
        `Every client gets a dedicated accountant, transparent fixed-fee pricing and proactive advice that is genuinely tailored to the ${area} sector.`,
      ],
      bullets: [
        'Dedicated local and online accountants',
        'Fixed-fee quotes with no hidden costs',
        'Accredited chartered accountants',
        'Proactive tax optimisation',
        'Timely filing reminders and total transparency',
      ],
      image: null,
      cta: { text: 'Contact Us', href: '/contact-us' },
    },
    {
      title: `Get Started with Your ${title} Accountant`,
      paragraphs: [
        `Getting expert accounting support for your ${lower} business is easy. Reach out today for a free, no-obligation consultation and we will talk through your situation and recommend the best way forward.`,
      ],
      bullets: [],
      image: null,
      cta: { text: 'Contact Our Team', href: '/contact-us' },
    },
  ];
}

function buildFaqs(title, subtitle) {
  const area = subtitle.replace(/er(s)? accountants/i, '').replace(/for /i, '').trim();
  return [
    {
      q: `Why do ${title.toLowerCase()} need a specialist accountant?`,
      a: `A specialist accountant understands the specific tax rules, expenses and cash flow patterns of the ${area} sector. We help you stay compliant, claim every relief you are entitled to, and structure your affairs tax-efficiently.`,
    },
    {
      q: `Which services do you offer ${title.toLowerCase()}?`,
      a: `We provide bookkeeping, VAT, payroll, year-end accounts, corporation and self assessment tax filing, tax planning and ongoing advisory support, all tailored to the ${area} sector.`,
    },
    {
      q: `Can you work with me online or locally?`,
      a: `Yes. We serve clients across the UK using cloud accounting tools, while also offering local support from our London offices. You get a dedicated accountant either way.`,
    },
    {
      q: `How much do you charge?`,
      a: `Our fees are fixed and agreed upfront, so you always know exactly what you will pay with no hidden extras. Contact us for a tailored quote based on your business.`,
    },
  ];
}

function buildConfig(slug, title, subtitle) {
  return {
    slug,
    title,
    subtitle,
    heroImage: '',
    path: `/industries/${slug}`,
    sectionImages: [null, null, null, null, null],
    quickNav: [
      { title: 'Accounts', link: '/accounts' },
      { title: 'Taxation', link: '/taxation' },
      { title: 'Contact', link: '/contact-us' },
    ],
    sections: buildSections(title, subtitle),
    faqs: buildFaqs(title, subtitle),
  };
}

function writeDataFile(slug, config) {
  const content = `const page = ${JSON.stringify(config, null, 2)};\n\nexport default page;\n`;
  fs.writeFileSync(path.join(CONFIG_DIR, `${slug}.js`), content, 'utf8');
}

function writeRouteFile(slug, title) {
  const dir = path.join(APP_DIR, slug);
  fs.mkdirSync(dir, { recursive: true });
  const content = `import IndustryRoutePage from '../IndustryRoutePage';
import { metadataForIndustrySlug } from '../../../lib/seo-generators';
import { industryPages } from '../../../data/industryPages/index.js';

export const metadata = {
  ...metadataForIndustrySlug(${JSON.stringify(slug)}),
  robots: {
    index: false,
    follow: true,
  },
};

export default function Page() {
  return <IndustryRoutePage slug=${JSON.stringify(slug)} />;
}
`;
  fs.writeFileSync(path.join(dir, 'page.jsx'), content, 'utf8');
}

function writeIndex(allSlugs) {
  const imports = allSlugs
    .map((slug) => `import ${slug.replace(/-/g, '_')} from './${slug}.js';`)
    .join('\n');
  const entries = allSlugs
    .filter((s) => !['automobile', 'charities', 'charity', 'construction', 'ecommerce', 'expatriates', 'healthcare-professionals', 'hospitality', 'it-professionals', 'leisure-industry', 'logistics', 'non-uk-resident-taxation', 'real-estate', 'restaurants', 'wholesellers-retailers'].includes(s))
    .concat(
      ['automobile', 'charities', 'charity', 'construction', 'ecommerce', 'expatriates', 'healthcare-professionals', 'hospitality', 'it-professionals', 'leisure-industry', 'logistics', 'non-uk-resident-taxation', 'real-estate', 'restaurants', 'wholesellers-retailers']
    );
  const sorted = [...new Set(entries)];
  const objEntries = sorted
    .map((slug) => `  '${slug}': ${slug.replace(/-/g, '_')},`)
    .join('\n');
  const content = `${imports}

export const industryPages = {
${objEntries}
};

export const industrySlugs = ${JSON.stringify(sorted, null, 2)};
`;
  fs.writeFileSync(path.join(CONFIG_DIR, 'index.js'), content, 'utf8');
}

fs.mkdirSync(CONFIG_DIR, { recursive: true });

const newSlugs = [];
for (const [slug, title, subtitle] of PAGES) {
  const config = buildConfig(slug, title, subtitle);
  writeDataFile(slug, config);
  writeRouteFile(slug, title);
  newSlugs.push(slug);
  console.log(`✓ ${slug}`);
}

const existingSlugs = ['automobile', 'charities', 'charity', 'construction', 'ecommerce', 'expatriates', 'healthcare-professionals', 'hospitality', 'it-professionals', 'leisure-industry', 'logistics', 'non-uk-resident-taxation', 'real-estate', 'restaurants', 'wholesellers-retailers'];
writeIndex([...newSlugs, ...existingSlugs]);

console.log(`Done. Generated ${newSlugs.length} new pages.`);
