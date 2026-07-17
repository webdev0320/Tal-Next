/**
 * generate-batch567.mjs
 * Creates app routes and view components for Batches 5, 6, and 7.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const data = JSON.parse(
  fs.readFileSync(path.join(ROOT, 'scripts', 'batch567-content.json'), 'utf8')
);

function toPascalCase(slug) {
  return slug.replace(/^\//, '').split('-')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('');
}

// ─── Curated metadata per page ───────────────────────────────────────────────
const META = {
  // Batch 5 – bank/fintech
  '/anna':         { title: 'Anna Money Accountants',          subtitle: 'Seamless Accounting Integration with Anna Money for UK Small Businesses',             image: '/images/2023/10/bigstock-Accountant-Women-At-Desk-Using-434753615-600x600-1.jpg' },
  '/tide':         { title: 'Tide Business Accountants',       subtitle: 'Expert Accounting Support for Tide Business Bank Account Holders',                   image: '/images/2023/10/bigstock-Accountant-Women-At-Desk-Using-434753615-600x600-1.jpg' },
  '/mettle':       { title: 'Mettle Bank Accountants',         subtitle: 'Chartered Accountants Working Alongside Your Mettle Business Account',               image: '/images/2023/10/bigstock-Accountant-Women-At-Desk-Using-434753615-600x600-1.jpg' },
  '/monzo':        { title: 'Monzo Business Accountants',      subtitle: 'Professional Tax & Accounting Services for Monzo Business Account Holders',           image: '/images/2023/10/bigstock-Accountant-Women-At-Desk-Using-434753615-600x600-1.jpg' },
  '/revolut':      { title: 'Revolut Business Accountants',    subtitle: 'Chartered Accountants Who Integrate with Your Revolut Business Account',              image: '/images/2023/10/bigstock-Accountant-Women-At-Desk-Using-434753615-600x600-1.jpg' },
  '/starling':     { title: 'Starling Bank Accountants',       subtitle: 'Award-Winning Accounting Services for Starling Bank Business Customers',              image: '/images/2023/10/bigstock-Accountant-Women-At-Desk-Using-434753615-600x600-1.jpg' },
  // Batch 6 – niches
  '/property-landlords':          { title: 'Property Landlord Accountants',         subtitle: 'Specialist Tax & Accounting Services for UK Property Landlords and Investors',    image: '/images/young-asian.webp' },
  '/furnished-holiday-letting':   { title: 'Furnished Holiday Letting Accountants', subtitle: 'Expert FHL Tax Planning & HMRC Compliance for Holiday Let Owners',               image: '/images/young-asian.webp' },
  '/hotels-restaurants-bars':     { title: 'Hotels, Restaurants & Bars Accountants',subtitle: 'Specialist Accounting & Tax Services for the Hospitality Sector',                image: '/images/young-asian.webp' },
  '/hairdressers-beauty-barbers': { title: 'Hairdressers & Beauty Accountants',     subtitle: 'Tailored Accounting & Tax for Hair Salons, Beauty Therapists and Barbers',       image: '/images/young-asian.webp' },
  '/jewellers':                   { title: 'Jewellers Accountants',                 subtitle: 'Specialist Financial & Tax Services for the UK Jewellery Trade',                  image: '/images/young-asian.webp' },
  '/construction-builders':       { title: 'Construction & Builders Accountants',   subtitle: 'CIS, VAT & Accounting Expertise for Builders and Construction Companies',        image: '/images/young-asian.webp' },
  '/media-creative-industries':   { title: 'Media & Creative Industry Accountants', subtitle: 'Tax-Efficient Accounting for Creatives, Freelancers & Media Professionals',      image: '/images/young-asian.webp' },
  '/optician-optometrists':       { title: 'Opticians & Optometrists Accountants',  subtitle: 'Specialist Accounting & Tax Planning for Opticians and Optometry Practices',     image: '/images/young-asian.webp' },
  '/autumn-budget-2024':          { title: 'Autumn Budget 2024',                    subtitle: 'Key Tax Changes & What They Mean for Your Business — Taxaccolega Analysis',      image: '/images/young-asian.webp' },
  // Batch 7 – utility/misc
  '/core-package':         { title: 'Core Accounting Package',     subtitle: 'Our All-Inclusive Accounting Package — Everything Your Business Needs',            image: '/images/young-asian.webp' },
  '/spvs':                 { title: 'SPV Accountants',             subtitle: 'Expert Accounting & Tax Planning for Special Purpose Vehicles and Property SPVs',  image: '/images/young-asian.webp' },
  '/payment-confirmation': { title: 'Payment Confirmed',           subtitle: 'Thank You — Your Payment Has Been Received Successfully',                           image: '/images/young-asian.webp' },
  '/payment-failed':       { title: 'Payment Failed',              subtitle: 'Something Went Wrong — Please Try Again or Contact Our Team',                       image: '/images/young-asian.webp' },
  '/team-member':          { title: 'Our Team',                    subtitle: 'Meet the Dedicated Chartered Accountants Behind Taxaccolega',                       image: '/images/young-asian.webp' },
  '/testimonial':          { title: 'Client Testimonials',         subtitle: 'Hear What Our Clients Say About Working With Taxaccolega',                          image: '/images/young-asian.webp' },
};

// Special static views for pages with no real content
const STATIC_VIEWS = {
  '/payment-confirmation': `"use client";
import React, { useEffect } from 'react';
import Link from 'next/link';

const PaymentConfirmation = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="d-flex align-items-center justify-content-center" style={{ minHeight: '70vh' }}>
      <div className="text-center px-4">
        <div className="mb-4" style={{ fontSize: '4rem' }}>✅</div>
        <h1 className="display-5 fw-bold mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>
          Payment Confirmed
        </h1>
        <p className="text-secondary fs-5 mb-4">
          Thank you! Your payment has been received successfully.<br />
          Our team will be in touch shortly.
        </p>
        <Link href="/" className="btn btn-brand px-5 py-2 fw-bold">Back to Home</Link>
      </div>
    </div>
  );
};
export default PaymentConfirmation;
`,

  '/payment-failed': `"use client";
import React, { useEffect } from 'react';
import Link from 'next/link';

const PaymentFailed = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="d-flex align-items-center justify-content-center" style={{ minHeight: '70vh' }}>
      <div className="text-center px-4">
        <div className="mb-4" style={{ fontSize: '4rem' }}>❌</div>
        <h1 className="display-5 fw-bold mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>
          Payment Failed
        </h1>
        <p className="text-secondary fs-5 mb-4">
          Something went wrong with your payment. Please try again<br />
          or contact us and we will help you complete your order.
        </p>
        <div className="d-flex gap-3 justify-content-center">
          <Link href="/contact-us" className="btn btn-brand px-5 py-2 fw-bold">Contact Us</Link>
          <Link href="/pricing" className="btn btn-brand-outline px-5 py-2 fw-bold">View Pricing</Link>
        </div>
      </div>
    </div>
  );
};
export default PaymentFailed;
`,
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

function buildStandardView(p) {
  const comp    = toPascalCase(p.path);
  const meta    = META[p.path] || { title: comp, subtitle: 'Professional Accounting Services from Taxaccolega', image: '/images/young-asian.webp' };
  const hasFaqs = p.faqs && p.faqs.length > 0;

  return `"use client";
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
    { label: '${meta.title.replace(/'/g, "\\'")}', active: true },
  ];

  const sections = ${JSON.stringify(p.sections, null, 2)};
${hasFaqs ? `  const faqs = ${JSON.stringify(p.faqs, null, 2)};` : ''}

  return (
    <div>
      <PageHero
        title="${meta.title.replace(/"/g, '\\"')}"
        subtitle="${meta.subtitle.replace(/"/g, '\\"')}"
        breadcrumbs={breadcrumbs}
      />

      {sections.length > 0 && sections.map((section, idx) => {
        const altBg     = idx % 2 === 1 ? 'bg-light border-top border-bottom border-light' : 'bg-white';
        const showImage = idx === 0;
        return (
          <section key={idx} className={\`py-5 \${altBg}\`}>
            <div className="container py-2">
              <div className="row g-5 align-items-center">
                {showImage && (
                  <div className="col-lg-5 order-2 order-lg-1">
                    <div className="p-2 border rounded-4 shadow-lg bg-white">
                      <img
                        src="${meta.image}"
                        alt="${meta.title.replace(/"/g, '\\"')}"
                        className="img-fluid rounded-3"
                        style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                      />
                    </div>
                  </div>
                )}
                <div className={\`col-lg-\${showImage ? '7' : '10 mx-auto'} \${showImage ? 'order-1 order-lg-2' : ''}\`}>
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
                      <p key={i} className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>{para}</p>
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

      {sections.length === 0 && (
        <section className="py-5 bg-white">
          <div className="container py-4 text-center">
            <p className="text-secondary fs-5">
              Content coming soon. In the meantime, please{' '}
              <a href="/contact-us" className="text-brand-orange fw-bold">contact our team</a>.
            </p>
          </div>
        </section>
      )}

${hasFaqs ? `      {faqs && faqs.length > 0 && (
        <FAQSection faqs={faqs.map((f, i) => ({ id: 'faq-' + i, question: f.q, answer: f.a }))} />
      )}` : ''}

      <Partners />
      <ContactForm source="${comp}" />
      <ReviewsSlider />
    </div>
  );
};

export default ${comp};
`;
}

// ─── STEP 1: Create app route files ──────────────────────────────────────────
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

// ─── STEP 2: Create view components ──────────────────────────────────────────
data.forEach(p => {
  const comp     = toPascalCase(p.path);
  const viewFile = path.join(ROOT, 'src', 'views', `${comp}.jsx`);

  // Use static view for payment pages
  if (STATIC_VIEWS[p.path]) {
    fs.writeFileSync(viewFile, STATIC_VIEWS[p.path], 'utf8');
    console.log(`✅ View (static): /src/views/${comp}.jsx`);
  } else {
    fs.writeFileSync(viewFile, buildStandardView(p), 'utf8');
    console.log(`✅ View: /src/views/${comp}.jsx`);
  }
});

console.log('\n🎉 Batches 5, 6 & 7 generation complete.');
