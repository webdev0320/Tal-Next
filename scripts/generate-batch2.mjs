/**
 * generate-batch2.mjs
 * Automates creation of routes and views for Batch 2.
 * Pages: /business-start-up, /construction-industry-scheme, /ir35-contractors-review,
 *        /contractors-insurance, /start-ups-basic, /business-plan
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const batch2DataPath = path.join(ROOT, 'scripts', 'batch2-content.json');
const batch2Data = JSON.parse(fs.readFileSync(batch2DataPath, 'utf8'));

// Pages that already have a hand-crafted view — skip view generation but still create the route
const SKIP_VIEW_GENERATION = new Set(['/business-start-up']);

// Helper: PascalCase from slug
function getComponentName(p) {
  const name = p.replace(/^\//, '');
  return name
    .split('-')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join('');
}

// Helper: human-readable title from slug
function slugToTitle(slug) {
  return slug
    .replace(/^\//, '')
    .split('-')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

// Titles derived from content, falling back to slug
const PAGE_TITLES = {
  '/business-start-up': 'Business Start-Up',
  '/construction-industry-scheme': 'Construction Industry Scheme',
  '/ir35-contractors-review': 'IR35 Contractors Review',
  '/contractors-insurance': 'Contractors Insurance',
  '/start-ups-basic': 'Start-Ups / Basic Packages',
  '/business-plan': 'Business Plan',
};

const PAGE_SUBTITLES = {
  '/business-start-up': 'Expert Accounting Support to Launch and Grow Your Business in the UK',
  '/construction-industry-scheme': 'CIS Tax Returns, HMRC Compliance & Financial Management for Construction Workers',
  '/ir35-contractors-review': 'Independent IR35 Status Reviews to Keep You Compliant and Protected',
  '/contractors-insurance': 'Professional Insurance Guidance for UK Contractors and Freelancers',
  '/start-ups-basic': 'Affordable Fixed-Fee Accounting Packages for New Businesses and Sole Traders',
  '/business-plan': 'Professional Business Planning Support to Secure Funding and Drive Growth',
};

const PAGE_IMAGES = {
  '/business-start-up': '/images/young-asian.webp',
  '/construction-industry-scheme': '/images/2023/10/bigstock-Accountant-Women-At-Desk-Using-434753615-600x600-1.jpg',
  '/ir35-contractors-review': '/images/young-asian.webp',
  '/contractors-insurance': '/images/young-asian.webp',
  '/start-ups-basic': '/images/young-asian.webp',
  '/business-plan': '/images/young-asian.webp',
};

// ─────────────────────────────────────────────
// STEP 1: Create page.jsx route files
// ─────────────────────────────────────────────
batch2Data.forEach(p => {
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

// ─────────────────────────────────────────────
// STEP 2: Create view components
// ─────────────────────────────────────────────
batch2Data.forEach(p => {
  if (SKIP_VIEW_GENERATION.has(p.path)) {
    console.log(`⏭  Skipping view generation for ${p.path} (existing hand-crafted view)`);
    return;
  }

  const componentName = getComponentName(p.path);
  const title = PAGE_TITLES[p.path] || slugToTitle(p.path);
  const subtitle = PAGE_SUBTITLES[p.path] || 'Professional Chartered Accounting Services in London';
  const imageUrl = PAGE_IMAGES[p.path] || '/images/young-asian.webp';

  // Filter out the "Get in Touch" / contact-detail sections — rendered by ContactForm instead
  const filteredSections = p.sections.filter(s => {
    if (!s.title && !s.paragraphs.length && s.bullets.length > 0) return false; // phone/email only rows
    if (s.title === 'Get in Touch') return false;
    return true;
  });

  // Detect if we have FAQs (either top-level or nested in sections)
  const hasFaqs = p.faqs && p.faqs.length > 0;

  const viewContent = `"use client";
import React, { useEffect } from 'react';
import PageHero from '../components/PageHero';
import Partners from '../components/Partners';
import ReviewsSlider from '../components/ReviewsSlider';
import ContactForm from '../components/ContactForm';
${hasFaqs ? "import FAQSection from '../components/FAQSection';" : ''}

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
    { label: '${title}', active: true }
  ];

  const sections = ${JSON.stringify(filteredSections, null, 2)};
${hasFaqs ? `  const faqs = ${JSON.stringify(p.faqs, null, 2)};` : ''}

  return (
    <div>
      <PageHero
        title="${title}"
        subtitle="${subtitle}"
        breadcrumbs={breadcrumbs}
      />

      {sections.map((section, idx) => {
        const altBg = idx % 2 === 1 ? 'bg-light border-top border-bottom border-light' : 'bg-white';
        const imageLeft = idx % 2 === 0;
        const currentImage = idx === 0 ? '${imageUrl}' : null;

        return (
          <section key={idx} className={\`py-5 \${altBg}\`}>
            <div className="container py-2">
              <div className="row g-5 align-items-center">
                {currentImage && imageLeft && (
                  <div className="col-lg-5 order-2 order-lg-1">
                    <div className="p-2 border rounded-4 shadow-lg bg-white">
                      <img
                        src={currentImage}
                        alt={section.title || '${title}'}
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
                        alt={section.title || '${title}'}
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

${hasFaqs ? `      {faqs && faqs.length > 0 && (
        <FAQSection faqs={faqs.map((f, i) => ({ id: 'faq-' + i, question: f.q, answer: f.a }))} />
      )}` : ''}

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

console.log('🎉 Completed generating all Batch 2 files.');
