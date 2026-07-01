/**
 * generate-batch1.mjs
 * Automates creation of routes and views for Batch 1.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const batch1DataPath = path.join(ROOT, 'scripts', 'batch1-content.json');
const batch1Data = JSON.parse(fs.readFileSync(batch1DataPath, 'utf8'));

// Helper to capital-case names (e.g. self-employed -> SelfEmployed)
function getComponentName(p) {
  const name = p.replace(/^\//, '');
  return name
    .split('-')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join('');
}

// 1. Create page.jsx files in src/app/
batch1Data.forEach(p => {
  const slug = p.path.replace(/^\//, '');
  const folderPath = path.join(ROOT, 'src', 'app', slug);
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
  }

  const componentName = getComponentName(p.path);

  const pageContent = `import { metadataForPath } from '../../lib/seo';
import ${componentName} from '../../views/${componentName}';

export const metadata = metadataForPath('${p.path}');

export default function Page() {
  return <${componentName} />;
}
`;

  const pageFile = path.join(folderPath, 'page.jsx');
  fs.writeFileSync(pageFile, pageContent, 'utf8');
  console.log(`✅ Created page route: ${pageFile}`);
});

// 2. Create Pricing View
const pricingViewContent = `"use client";
import React, { useEffect } from 'react';
import Link from 'next/link';
import PageHero from '../components/PageHero';
import Partners from '../components/Partners';
import ReviewsSlider from '../components/ReviewsSlider';
import ContactForm from '../components/ContactForm';

const CheckIcon = () => (
  <svg className="me-2 flex-shrink-0" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--brand-orange)' }}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const Pricing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbs = [
    { label: 'Home', link: '/' },
    { label: 'Pricing', active: true }
  ];

  const packages = [
    {
      title: 'Sole Trader',
      price: '£25',
      desc: 'HMRC-compliant accounting for self-employed professionals.',
      link: '/packages/sole-trader-pricing',
      features: [
        'Sole Trader Accounts',
        'Self Assessment Tax Return',
        'Income Tax Liabilities & Deadlines',
        'HMRC 64-8 Agent Authorization',
        'Online Submission to HMRC',
        'Unlimited support upon request'
      ]
    },
    {
      title: 'LTD Company',
      price: '£45',
      isPopular: true,
      desc: 'Complete accounts & tax service for limited companies.',
      link: '/packages/ltd-company-pricing',
      features: [
        'Annual Set of Accounts',
        'Corporation Tax Return',
        'Director Personal Tax Return',
        'Confirmation Statement submission',
        'Payroll for 1 Employee',
        'Automated Email Reminders'
      ]
    },
    {
      title: 'Contractor LTD',
      price: '£50',
      desc: 'Specialist compliance and IR35 support for UK contractors.',
      link: '/packages/contractor-ltd-pricing',
      features: [
        'Full Set of Accounts & CT600',
        'Director Self Assessment',
        'HMRC & Companies House filings',
        'IR35 Review and contract check',
        'FreeAgent system setup',
        'Dedicated Accountant support'
      ]
    },
    {
      title: 'Landlords',
      price: '£25',
      desc: 'Keep property tax simple and optimize your rental returns.',
      link: '/packages/landlords-3',
      features: [
        'Rental Property Accounts',
        'Property Tax Return (SA105)',
        'Expense Optimization & Reliefs',
        'Multiple Property Support Available',
        'Capital Gains Tax planning advice',
        'HMRC Agent Representation'
      ]
    },
    {
      title: 'SPVs & Property LTDs',
      price: '£85',
      desc: 'Advanced tax structuring for property investment companies.',
      link: '/packages/spvs-ltd-pricing',
      features: [
        'Company Accounts & Tax Return',
        'Mortgage / SPV compliance check',
        'Director Personal Tax filings',
        'Rental bookkeeping support',
        'ATED compliance and guidance',
        'Corporate tax planning reviews'
      ]
    },
    {
      title: 'Charities & Non-Profits',
      price: '£80',
      desc: 'Expert accounting and compliance for charities.',
      link: '/packages/charities-pricing',
      features: [
        'Charity Commission compliant accounts',
        'CT600 & Charity Tax Return',
        'Gift Aid claims support',
        'Trustees annual report help',
        'Independent examinations',
        'Dedicated non-profit expert'
      ]
    }
  ];

  return (
    <div>
      <PageHero
        title="Pricing & Packages"
        subtitle="Transparent, Fixed-Fee Chartered Accounting Packages Tailored to Your Business Needs"
        breadcrumbs={breadcrumbs}
      />

      <section className="py-5 bg-white">
        <div className="container py-4">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold text-brand-dark" style={{ fontFamily: "'Outfit', sans-serif" }}>Choose the Right Plan for You</h2>
            <p className="text-muted leading-relaxed max-w-2xl mx-auto">No hidden fees, no surprise invoices. Fully accredited chartered accountants at fixed monthly costs.</p>
          </div>

          <div className="row g-4 justify-content-center">
            {packages.map((pkg, i) => (
              <div key={i} className="col-lg-4 col-md-6">
                <div className={\`card h-100 border-0 shadow-sm rounded-4 p-4 position-relative \${pkg.isPopular ? 'border-top-brand' : ''}\`} style={pkg.isPopular ? { borderTop: '4px solid var(--brand-orange)' } : {}}>
                  {pkg.isPopular && (
                    <div className="position-absolute top-0 end-0 bg-brand text-white px-3 py-1 rounded-bl-3 rounded-tr-3 fw-bold small shadow-sm" style={{ background: '#d2601a', borderBottomLeftRadius: '10px', borderTopRightRadius: '10px' }}>
                      Popular
                    </div>
                  )}

                  <div className="text-center mb-4">
                    <h3 className="fw-bold text-brand-dark mb-2" style={{ fontFamily: "'Outfit', sans-serif" }}>{pkg.title}</h3>
                    <p className="text-muted small mb-3">{pkg.desc}</p>
                    <div className="d-flex justify-content-center align-items-center">
                      <span className="fs-1 fw-bold text-brand-orange">{pkg.price}</span>
                      <span className="text-muted ms-1">+VAT/ m</span>
                    </div>
                  </div>
                  
                  <ul className="list-unstyled text-secondary mb-4 d-flex flex-column gap-3" style={{ fontSize: '0.95rem' }}>
                    {pkg.features.map((feat, idx) => (
                      <li key={idx} className="d-flex align-items-start">
                        <CheckIcon />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-auto pt-4 text-center">
                    <Link href={pkg.link} className={\`btn \${pkg.isPopular ? 'btn-brand' : 'btn-brand-outline'} w-100 py-2 fw-bold\`}>
                      View Package
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Partners />
      <ContactForm source="Pricing" />
      <ReviewsSlider />
    </div>
  );
};

export default Pricing;
`;

fs.writeFileSync(path.join(ROOT, 'src', 'views', 'Pricing.jsx'), pricingViewContent, 'utf8');
console.log('✅ Created Pricing View');

// 3. Create views for contractors, dentists, self-employed, freelancers, small-business
const contentPages = batch1Data.filter(p => p.path !== '/pricing');

contentPages.forEach(p => {
  const componentName = getComponentName(p.path);
  const isSelfEmployed = p.path === '/self-employed';

  // Build breadcrumbs
  const breadcrumbs = [
    { label: 'Home', link: '/' },
    { label: p.title || componentName, active: true }
  ];

  // Re-map images based on path
  let imageUrl = '/images/young-asian.webp';
  if (p.path === '/contractors') imageUrl = '/images/2023/10/bigstock-Accountant-Women-At-Desk-Using-434753615-600x600-1.jpg';
  else if (p.path === '/dentists') imageUrl = '/images/young-asian.webp';
  else if (p.path === '/self-employed') imageUrl = '/images/young-asian.webp';
  else if (p.path === '/freelancers') imageUrl = '/images/young-asian.webp';
  else if (p.path === '/small-business') imageUrl = '/images/young-asian.webp';

  const viewContent = `"use client";
import React, { useEffect } from 'react';
import Link from 'next/link';
import PageHero from '../components/PageHero';
import Partners from '../components/Partners';
import ReviewsSlider from '../components/ReviewsSlider';
import ContactForm from '../components/ContactForm';
import FAQSection from '../components/FAQSection';

const CheckIcon = () => (
  <svg className="me-2 flex-shrink-0" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--brand-orange)' }}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const ${componentName} = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbs = [
    { label: 'Home', link: '/' },
    { label: '${p.title || componentName}', active: true }
  ];

  const sections = ${JSON.stringify(p.sections, null, 2)};
  const faqs = ${JSON.stringify(p.faqs, null, 2)};

  return (
    <div>
      <PageHero
        title="${p.title || componentName}"
        subtitle="${isSelfEmployed ? 'HMRC-Compliant Tax Returns & Accounting Support for Sole Traders' : 'Professional Chartered Accounting Services in London'}"
        breadcrumbs={breadcrumbs}
      />

      {sections.map((section, idx) => {
        const altBg = idx % 2 === 1 ? 'bg-light border-top border-bottom border-light' : 'bg-white';
        const imageLeft = idx % 2 === 1;
        // Use custom image or fallback
        const currentImage = idx === 0 ? '${imageUrl}' : null;

        return (
          <section key={idx} className={\`py-5 \${altBg}\`}>
            <div className="container">
              <div className="row g-5 align-items-center">
                {currentImage && imageLeft && (
                  <div className="col-lg-5 order-2 order-lg-1">
                    <div className="p-2 border rounded-4 shadow-lg bg-white">
                      <img
                        src={currentImage}
                        alt={section.title || '${p.title}'}
                        className="img-fluid rounded-3"
                        style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                      />
                    </div>
                  </div>
                )}
                
                <div className={\`col-lg-\${currentImage ? '7' : '10 mx-auto'} \${currentImage && imageLeft ? 'order-1 order-lg-2' : ''}\`}>
                  {section.title && (
                    <h2
                      className="text-brand-dark display-6 fw-bold mt-2 mb-4"
                      style={{ fontFamily: "'Outfit', sans-serif" }}
                    >
                      {section.title}
                    </h2>
                  )}

                  {section.paragraphs.map((para, pIdx) => {
                    if (para.startsWith('## ')) {
                      return (
                        <h3 key={pIdx} className="h4 text-brand-dark fw-bold mt-4 mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>
                          {para.slice(3)}
                        </h3>
                      );
                    }
                    return (
                      <p key={pIdx} className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>
                        {para}
                      </p>
                    );
                  })}

                  {section.bullets && section.bullets.length > 0 && (
                    <ul className="list-unstyled mb-4 d-flex flex-column gap-2 text-secondary">
                      {section.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="d-flex align-items-start">
                          <CheckIcon />
                          <span>{bullet.replace(/^\\*\\*.*?\\*\\*:\\s*/, '')}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {currentImage && !imageLeft && (
                  <div className="col-lg-5">
                    <div className="p-2 border rounded-4 shadow-lg bg-white">
                      <img
                        src={currentImage}
                        alt={section.title || '${p.title}'}
                        className="img-fluid rounded-3"
                        style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        );
      })}

      {faqs && faqs.length > 0 && (
        <FAQSection faqs={faqs.map((f, i) => ({ id: 'faq-' + i, question: f.q, answer: f.a }))} />
      )}

      <Partners />
      <ContactForm source="${componentName}" />
      <ReviewsSlider />
    </div>
  );
};

export default ${componentName};
`;

  const viewFile = path.join(ROOT, 'src', 'views', `${componentName}.jsx`);
  fs.writeFileSync(viewFile, viewContent, 'utf8');
  console.log(`✅ Created View: ${viewFile}`);
});
console.log('🎉 Completed generating all Batch 1 files.');
