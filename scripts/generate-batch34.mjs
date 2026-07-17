/**
 * generate-batch34.mjs
 * Creates app routes and view components for Batch 3 (e-commerce) + Batch 4 (software).
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const data = JSON.parse(
  fs.readFileSync(path.join(ROOT, 'scripts', 'batch34-content.json'), 'utf8')
);

function toPascalCase(slug) {
  return slug
    .replace(/^\//, '')
    .split('-')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join('');
}

// Curated titles, subtitles and images per page
const META = {
  '/e-commerce':      { title: 'E-Commerce Accountants',        subtitle: 'Specialist Accounting & Tax Services for Online Retailers and E-Commerce Businesses', image: '/images/young-asian.webp' },
  '/amazon-seller':   { title: 'Amazon Seller Accountants',     subtitle: 'Expert Tax & Accounting Support for Amazon FBA and Marketplace Sellers in the UK',    image: '/images/young-asian.webp' },
  '/shopify':         { title: 'Shopify Accountants',           subtitle: 'Dedicated Accounting & VAT Services for Shopify Store Owners',                          image: '/images/young-asian.webp' },
  '/saas':            { title: 'SaaS Accountants',              subtitle: 'Specialist Financial & Tax Support for Software-as-a-Service Businesses',               image: '/images/young-asian.webp' },
  '/ebay-seller':     { title: 'eBay Seller Accountants',       subtitle: 'HMRC-Compliant Tax Returns & Bookkeeping for eBay Sellers',                            image: '/images/young-asian.webp' },
  '/woocommerce':     { title: 'WooCommerce Accountants',       subtitle: 'Accounting, VAT & Tax Services Tailored for WooCommerce Store Owners',                  image: '/images/young-asian.webp' },
  '/dropshipping':    { title: 'Dropshipping Accountants',      subtitle: 'Tax-Efficient Accounting Solutions for UK Dropshipping Businesses',                     image: '/images/young-asian.webp' },
  '/xero':            { title: 'Xero Accountants',              subtitle: 'Certified Xero Advisors Helping You Get the Most From Your Xero Account',              image: '/images/2023/10/bigstock-Accountant-Women-At-Desk-Using-434753615-600x600-1.jpg' },
  '/quickbooks':      { title: 'QuickBooks Accountants',        subtitle: 'Certified QuickBooks ProAdvisors Providing Full Accounting & Tax Support',              image: '/images/2023/10/bigstock-Accountant-Women-At-Desk-Using-434753615-600x600-1.jpg' },
  '/sage':            { title: 'Sage Accountants',              subtitle: 'Expert Sage Users Combining Software Power with Chartered Accountancy',                 image: '/images/2023/10/bigstock-Accountant-Women-At-Desk-Using-434753615-600x600-1.jpg' },
  '/freeagent':       { title: 'FreeAgent Accountants',         subtitle: 'FreeAgent Partner Accountants — Cloud Accounting Made Simple for Freelancers & SMEs',  image: '/images/2023/10/bigstock-Accountant-Women-At-Desk-Using-434753615-600x600-1.jpg' },
  '/dext':            { title: 'Dext Accountants',              subtitle: 'Streamline Your Receipt Capture and Bookkeeping with Dext-Integrated Accounting',      image: '/images/2023/10/bigstock-Accountant-Women-At-Desk-Using-434753615-600x600-1.jpg' },
  '/taxcalc':         { title: 'TaxCalc Accountants',           subtitle: 'Professional Tax Return Filing & Advisory Services Using TaxCalc',                     image: '/images/2023/10/bigstock-Accountant-Women-At-Desk-Using-434753615-600x600-1.jpg' },
  '/btc-software':    { title: 'BTC Software Accountants',      subtitle: 'Expert Accountants Using BTC Software for Accurate, Compliant Tax Returns',            image: '/images/2023/10/bigstock-Accountant-Women-At-Desk-Using-434753615-600x600-1.jpg' },
  '/flow':            { title: 'Float / Flow Accountants',      subtitle: 'Cash Flow Forecasting & Financial Planning Powered by Float / Flow',                   image: '/images/2023/10/bigstock-Accountant-Women-At-Desk-Using-434753615-600x600-1.jpg' },
};

// Sections to skip in rendered output (contact/CTA duplicates)
function filterSections(sections) {
  return sections.filter(s => {
    const combined = [s.title, ...s.paragraphs, ...s.bullets].join(' ').toLowerCase();
    if (s.title === 'Get in Touch') return false;
    if (combined.includes('send us a message')) return false;
    // skip bare phone/email bullet-only rows with no title
    if (!s.title && s.paragraphs.length === 0 && s.bullets.length <= 2 &&
        s.bullets.every(b => b.match(/phone|email|whatsapp|address/i))) return false;
    return true;
  });
}

// ─── STEP 1: Create app route files ────────────────────────────────────────
data.forEach(p => {
  const slug = p.path.replace(/^\//, '');
  const dir  = path.join(ROOT, 'src', 'app', slug);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  const comp = toPascalCase(p.path);
  fs.writeFileSync(
    path.join(dir, 'page.jsx'),
    `import { metadataForPath } from '../../lib/seo';
import ${comp} from '../../views/${comp}';

export const metadata = metadataForPath('${p.path}');

export default function Page() {
  return <${comp} />;
}
`,
    'utf8'
  );
  console.log(`✅ Route: /src/app/${slug}/page.jsx`);
});

// ─── STEP 2: Create view components ────────────────────────────────────────
data.forEach(p => {
  const comp     = toPascalCase(p.path);
  const meta     = META[p.path] || { title: comp, subtitle: 'Professional Accounting Services from Taxaccolega', image: '/images/young-asian.webp' };
  const sections = filterSections(p.sections);
  const hasFaqs  = p.faqs && p.faqs.length > 0;

  const view = `"use client";
import React, { useEffect } from 'react';
import PageHero from '../components/PageHero';
import Partners from '../components/Partners';
import ReviewsSlider from '../components/ReviewsSlider';
import ContactForm from '../components/ContactForm';
${hasFaqs ? "import FAQSection from '../components/FAQSection';" : ''}

const CheckIcon = () => (
  <svg className="me-2 flex-shrink-0" width="18" height="18" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="3"
    strokeLinecap="round" strokeLinejoin="round"
    style={{ color: 'var(--brand-orange)' }}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const ${comp} = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const breadcrumbs = [
    { label: 'Home', link: '/' },
    { label: '${meta.title}', active: true },
  ];

  const sections = ${JSON.stringify(sections, null, 2)};
${hasFaqs ? `  const faqs = ${JSON.stringify(p.faqs, null, 2)};` : ''}

  return (
    <div>
      <PageHero
        title="${meta.title}"
        subtitle="${meta.subtitle}"
        breadcrumbs={breadcrumbs}
      />

      {sections.map((section, idx) => {
        const altBg       = idx % 2 === 1 ? 'bg-light border-top border-bottom border-light' : 'bg-white';
        const showImage   = idx === 0;
        const imageLeft   = true;

        return (
          <section key={idx} className={\`py-5 \${altBg}\`}>
            <div className="container py-2">
              <div className="row g-5 align-items-center">

                {showImage && imageLeft && (
                  <div className="col-lg-5 order-2 order-lg-1">
                    <div className="p-2 border rounded-4 shadow-lg bg-white">
                      <img
                        src="${meta.image}"
                        alt="${meta.title}"
                        className="img-fluid rounded-3"
                        style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                      />
                    </div>
                  </div>
                )}

                <div className={\`col-lg-\${showImage ? '7' : '10 mx-auto'} \${showImage && imageLeft ? 'order-1 order-lg-2' : ''}\`}>
                  {section.title && (
                    <h2 className="text-brand-dark display-6 fw-bold mt-2 mb-4"
                        style={{ fontFamily: "'Outfit', sans-serif" }}>
                      {section.title}
                    </h2>
                  )}

                  {section.paragraphs.map((para, i) =>
                    para.startsWith('## ') ? (
                      <h3 key={i} className="h4 text-brand-dark fw-bold mt-4 mb-3"
                          style={{ fontFamily: "'Outfit', sans-serif" }}>
                        {para.slice(3)}
                      </h3>
                    ) : (
                      <p key={i} className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>
                        {para}
                      </p>
                    )
                  )}

                  {section.bullets && section.bullets.length > 0 && (
                    <ul className="list-unstyled mb-4 d-flex flex-column gap-2 text-secondary">
                      {section.bullets.map((bullet, i) => (
                        <li key={i} className="d-flex align-items-start">
                          <CheckIcon />
                          <span>{bullet.replace(/^\\*\\*.*?\\*\\*:\\s*/, '')}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

              </div>
            </div>
          </section>
        );
      })}

${hasFaqs ? `      {faqs && faqs.length > 0 && (
        <FAQSection
          faqs={faqs.map((f, i) => ({ id: 'faq-' + i, question: f.q, answer: f.a }))}
        />
      )}` : ''}

      <Partners />
      <ContactForm source="${comp}" />
      <ReviewsSlider />
    </div>
  );
};

export default ${comp};
`;

  fs.writeFileSync(path.join(ROOT, 'src', 'views', `${comp}.jsx`), view, 'utf8');
  console.log(`✅ View:  /src/views/${comp}.jsx`);
});

console.log('\n🎉 Batch 3 & 4 generation complete.');
