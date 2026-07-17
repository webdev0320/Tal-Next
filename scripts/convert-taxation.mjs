import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const configPath = path.join(__dirname, '../src/views/taxationConfig.js');
let configText = fs.readFileSync(configPath, 'utf-8');

// Remove single-line comments that start at the beginning of lines or after whitespace
configText = configText.replace(/^\s*\/\/.*$/gm, '');

// Find all image imports and create a map of varName -> original import string
const imageImports = {};
const importRegex = /import\s+([a-zA-Z0-9_]+)\s+from\s+['"]([^'"]+\.(png|jpg|jpeg|webp))['"];/g;
let match;
while ((match = importRegex.exec(configText)) !== null) {
  imageImports[match[1]] = match[2];
}

// Remove imports and the "use client" so we can eval it
configText = configText.replace(/import\s+[^;]+;/g, '');
configText = configText.replace(/"use client";/g, '');
configText = configText.replace(/export\s+const\s+taxationConfig/g, 'const taxationConfig');
configText += '\n\nreturn taxationConfig;';

// Stub out the image variables with strings
const stubVars = Object.keys(imageImports).map(v => `const ${v} = "IMAGE_VAR_${v}";`).join('\n');

const executeScript = `
  ${stubVars}
  ${configText}
`;

const configObj = new Function(executeScript)();

// Now we have the object. Let's write a generator for the hardcoded JSX.
const templatePath = path.join(__dirname, '../src/views/TaxationSubPage.jsx');
const templateJsx = fs.readFileSync(templatePath, 'utf-8');

// We need to parse TaxationSubPage manually or just use string replacements.
// Since TaxationSubPage has a lot of logic (like checking if sect.type === 'hero-2-column'),
// it's easier to write a custom generator that outputs clean JSX based on the data.

const outputViewsDir = path.join(__dirname, '../src/views/taxation');
const outputAppDir = path.join(__dirname, '../src/app/taxation');
if (!fs.existsSync(outputViewsDir)) fs.mkdirSync(outputViewsDir, { recursive: true });

function toPascalCase(str) {
  return str.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('');
}

function generateJsxForPage(slug, data) {
  const componentName = toPascalCase(slug);
  let imports = `
"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import TaxationLinksBar from '../../components/TaxationLinksBar';
import ContactForm from '../../components/ContactForm';
import FAQItem from '../../components/FAQItem';
`;

  // Find which image var was used
  let imageImportLine = '';
  const imgStr = data.img || '';
  if (imgStr.startsWith('IMAGE_VAR_')) {
    const varName = imgStr.replace('IMAGE_VAR_', '');
    const originalPath = imageImports[varName];
    // Adjust path for src/views/taxation
    // Original was '../assets/taxation-cryptocurrency.png' from src/views
    // Now from src/views/taxation it is '../../assets/taxation-cryptocurrency.png'
    const newPath = originalPath.replace('../assets', '../../assets');
    imageImportLine = `import ${varName} from '${newPath}';`;
    imports += imageImportLine + '\n';
  } else if (imgStr.includes('placehold.co')) {
    imageImportLine = `const placeholderImg = '${imgStr}';`;
    imports += imageImportLine + '\n';
  }

  // Generate sections
  let sectionsJsx = '';
  if (data.sections && Array.isArray(data.sections)) {
    data.sections.forEach((sect, sIdx) => {
      if (sect.type === 'hero-2-column') {
        sectionsJsx += `
      <section className="py-5 bg-white">
        <div className="container py-3">
          <div className="row g-5 align-items-start">
            <div className="col-lg-7">
              <h2 className="text-brand-dark display-6 fw-bold mb-4">{${JSON.stringify(sect.title)}}</h2>
              <div className="text-secondary" style={{ lineHeight: 1.8, whiteSpace: 'pre-line' }}>{${JSON.stringify(sect.content)}}</div>
            </div>
            <div className="col-lg-5">
              <div className="d-flex flex-column gap-3">
                ${sect.cards.map(card => `
                  <div className="p-3 border-start border-4 border-brand-orange bg-light rounded-end shadow-sm">
                    <h5 className="fw-bold text-brand-dark mb-1">{${JSON.stringify(card.title)}}</h5>
                    <Link href="${card.link || '#'}" className="text-brand-orange text-decoration-none small fw-bold">Read More »</Link>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        </div>
      </section>
`;
      } else if (sect.type === 'difficult') {
        sectionsJsx += `
      <section className="py-5 bg-light border-top border-bottom">
        <div className="container py-4">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <span className="badge bg-danger mb-3 px-3 py-2 rounded-pill fw-normal tracking-wider">CRITICAL CONSIDERATION</span>
              <h3 className="fw-bold text-brand-dark mb-3">{${JSON.stringify(sect.title)}}</h3>
              <h5 className="text-secondary mb-4">{${JSON.stringify(sect.subtitle)}}</h5>
              <div className="bg-white p-4 rounded-4 shadow-sm text-start border-start border-4 border-danger">
                <p className="mb-3 text-secondary">{${JSON.stringify(sect.content)}}</p>
                <ul className="list-unstyled mb-4">
                  ${sect.bullets.map(b => `
                    <li className="mb-2 d-flex align-items-start">
                      <i className="fas fa-exclamation-triangle text-danger mt-1 me-3"></i>
                      <span className="text-secondary">{${JSON.stringify(b)}}</span>
                    </li>
                  `).join('')}
                </ul>
                <p className="mb-0 fw-bold text-brand-dark small p-3 bg-light rounded">{${JSON.stringify(sect.footer)}}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
`;
      } else if (sect.type === 'cards') {
        sectionsJsx += `
      <section className="py-5 bg-white">
        <div className="container py-4">
          <div className="text-center mb-5">
            <h3 className="fw-bold text-brand-dark mb-3">{${JSON.stringify(sect.title)}}</h3>
            <p className="text-secondary lead mx-auto" style={{ maxWidth: '800px' }}>{${JSON.stringify(sect.intro)}}</p>
          </div>
          <div className="row g-4 justify-content-center">
            ${sect.cards.map(card => `
              <div className="col-md-6 col-lg-4">
                <div className="card h-100 border-0 shadow-sm rounded-4 hover-lift" style={{ transition: 'transform 0.3s' }}>
                  <div className="card-body p-4">
                    <div className="bg-brand-light d-inline-flex align-items-center justify-content-center rounded-circle mb-3" style={{ width: '50px', height: '50px' }}>
                      <i className="fas fa-check text-brand-orange"></i>
                    </div>
                    <h5 className="fw-bold text-brand-dark mb-3">{${JSON.stringify(card.title)}}</h5>
                    <p className="text-secondary small mb-0">{${JSON.stringify(card.text)}}</p>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>
`;
      }
    });
  }

  // FAQs
  let faqsJsx = '';
  if (data.faqs && data.faqs.length > 0) {
    faqsJsx = `
      <section className="py-5 bg-light border-top">
        <div className="container py-4">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="text-center mb-5">
                <span className="text-uppercase small tracking-wider text-brand-orange fw-bold">Common Questions</span>
                <h3 className="text-brand-dark fw-bold mt-2">Frequently Asked Questions</h3>
              </div>
              <div className="accordion custom-accordion shadow-sm rounded-4 overflow-hidden" id="faqAccordion">
                ${data.faqs.map((faq, fIdx) => `
                  <FAQItem 
                    question={${JSON.stringify(faq.q)}} 
                    answer={${JSON.stringify(faq.a)}} 
                    isOpen={openFaq === ${fIdx}}
                    onClick={() => setOpenFaq(openFaq === ${fIdx} ? null : ${fIdx})}
                  />
                `).join('')}
              </div>
            </div>
          </div>
        </div>
      </section>
`;
  }

  const imageSrc = imgStr.startsWith('IMAGE_VAR_') ? imgStr.replace('IMAGE_VAR_', '') : (imgStr.includes('placehold.co') ? 'placeholderImg' : '""');

  const fullComponent = `
${imports}

export default function ${componentName}() {
  const [openFaq, setOpenFaq] = useState(null);
  const [showMockup, setShowMockup] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <TaxationLinksBar />

      {/* ── HERO SECTION ── */}
      <header className="position-relative text-white overflow-hidden py-5" style={{ background: 'linear-gradient(135deg, #1d3c45 0%, #11252b 100%)', minHeight: '380px' }}>
        <div className="position-absolute w-100 h-100" style={{ backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(210, 96, 26, 0.15) 0%, transparent 60%)', top: 0, left: 0, zIndex: 1 }}></div>
        <div className="container position-relative py-4" style={{ zIndex: 2 }}>
          <div className="row g-4 align-items-center">
            <div className="col-lg-8 text-center text-lg-start">
              <span className="text-uppercase small tracking-wider fw-bold mb-2 d-inline-block text-brand-orange" style={{ letterSpacing: '2px' }}>
                Corporate Tax Specialists
              </span>
              <h1 className="display-4 fw-bold text-white mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>
                {${JSON.stringify(data.title)}}
              </h1>
              <p className="lead text-white-50 mb-4" style={{ maxWidth: '680px', fontSize: '1.1rem', lineHeight: 1.6 }}>
                {${JSON.stringify(data.subtitle)}}
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* ── 2. HERO CONTENT SPLIT ── */}
      <section className="py-5 border-bottom bg-white">
        <div className="container py-3">
          <div className="row g-5">
            <div className="col-lg-7">
              <div className="d-flex align-items-center gap-3 mb-4">
                <div className="bg-brand-light p-3 rounded-circle text-brand-orange">
                  <i className="fas fa-chart-line fa-xl"></i>
                </div>
                <h3 className="fw-bold text-brand-dark mb-0 m-0">The Complete Solution</h3>
              </div>
              
              <p className="lead text-secondary mb-4" style={{ lineHeight: 1.8 }}>
                {${JSON.stringify(data.heroIntro)}}
              </p>
              
              <p className="text-secondary mb-5" style={{ lineHeight: 1.8 }}>
                {${JSON.stringify(data.heroDetails)}}
              </p>
              
              <div className="p-4 border-start border-brand-orange border-4 bg-light rounded-e-3 mb-4">
                <h5 className="fw-bold text-brand-dark mb-2">Our Strategic Approach</h5>
                <p className="text-secondary mb-0 small" style={{ lineHeight: 1.6 }}>
                  We work closely with you to examine transaction histories, map corporate/personal bands, reconstruct details, and generate standard compliance packets that satisfy HMRC guidelines.
                </p>
              </div>

              <div className="d-flex flex-wrap gap-3">
                <a href="#contact-section" className="btn btn-brand px-4 py-2">
                  <i className="fas fa-envelope me-2"></i> Book Free Consultation
                </a>
                <button onClick={() => setShowMockup(!showMockup)} className="btn btn-brand-outline px-4 py-2">
                  <i className="fas fa-eye me-2"></i> {showMockup ? 'Hide Figma Mockup' : 'View Figma Mockup'}
                </button>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="card border-0 shadow-lg rounded-4 p-4 text-center position-relative overflow-hidden" style={{ background: '#1d3c45', color: '#fff' }}>
                <div className="position-absolute bg-warning rounded-circle" style={{ width: '150px', height: '150px', top: '-75px', right: '-75px', opacity: 0.1 }}></div>
                
                <h4 className="fw-bold mb-3 text-white" style={{ fontFamily: "'Outfit', sans-serif" }}>Fast Response Helpline</h4>
                <p className="text-white-50 mb-4 small">Tax and disclosure deadlines can arise quickly. Speak directly to an expert tax advisor today.</p>
                
                <div className="d-flex flex-column gap-3 mb-4 text-start">
                  <a href="tel:02081270728" className="d-flex align-items-center text-white text-decoration-none gap-3 p-2 rounded hover-bg-translucent">
                    <div className="bg-brand-orange text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '45px', height: '45px' }}>
                      <i className="fas fa-phone-alt"></i>
                    </div>
                    <div>
                      <span className="text-white-50 d-block small">Call Office</span>
                      <span className="fw-semibold">020 8127 0728</span>
                    </div>
                  </a>
                  <a href="https://wa.me/447471170484" target="_blank" rel="noreferrer" className="d-flex align-items-center text-white text-decoration-none gap-3 p-2 rounded hover-bg-translucent">
                    <div className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '45px', height: '45px' }}>
                      <i className="fab fa-whatsapp"></i>
                    </div>
                    <div>
                      <span className="text-white-50 d-block small">Whatsapp Chat</span>
                      <span className="fw-semibold">074 7117 0484</span>
                    </div>
                  </a>
                  <a href="mailto:info@taxaccolega.co.uk" className="d-flex align-items-center text-white text-decoration-none gap-3 p-2 rounded hover-bg-translucent">
                    <div className="bg-info text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '45px', height: '45px' }}>
                      <i className="fas fa-envelope"></i>
                    </div>
                    <div>
                      <span className="text-white-50 d-block small">Email Support</span>
                      <span className="fw-semibold">info@taxaccolega.co.uk</span>
                    </div>
                  </a>
                </div>

                <a href="#contact-section" className="btn btn-warning w-100 py-3 fw-bold rounded-3">Get Started Now</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Toggleable Figma Mockup Display ── */}
      {showMockup && (
        <section className="py-5" style={{ background: '#f1f3f5' }}>
          <div className="container text-center">
            <span className="text-uppercase small tracking-wider text-brand-orange fw-bold">Figma Visual Reference</span>
            <h3 className="text-brand-dark mb-4 fw-bold">Original Page Mockup Design</h3>
            <div className="p-2 border rounded-4 shadow bg-light d-inline-block position-relative" style={{ maxWidth: '100%' }}>
              <img 
                src={${imageSrc}} 
                alt="Figma design reference" 
                className="img-fluid rounded-3" 
                style={{ maxHeight: '900px', objectFit: 'contain', border: '1px solid #dee2e6' }}
              />
              <button 
                onClick={() => setShowMockup(false)} 
                className="btn btn-dark btn-sm position-absolute" 
                style={{ top: '15px', right: '15px', borderRadius: '50px' }}
              >
                <i className="fas fa-times me-1"></i> Close Design Mock
              </button>
            </div>
          </div>
        </section>
      )}

      {/* ── 4. Dynamic Responsive Custom Sections ── */}
      ${sectionsJsx}

      {/* ── 5. FAQs ── */}
      ${faqsJsx}

      {/* ── 6. Form Section ── */}
      <section id="contact-section" className="py-5 bg-white">
        <div className="container py-4">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="card border-0 shadow-lg rounded-4 overflow-hidden">
                <div className="row g-0">
                  <div className="col-md-5 bg-brand text-white p-5 d-flex flex-column justify-content-center" style={{ background: '#1d3c45' }}>
                    <h3 className="fw-bold mb-4">Request a Callback</h3>
                    <p className="mb-4 text-white-50">Provide your details and one of our chartered accountants will contact you to discuss your specific requirements.</p>
                    <ul className="list-unstyled mb-0">
                      <li className="mb-3 d-flex align-items-center gap-3">
                        <i className="fas fa-check-circle text-brand-orange"></i> Free initial consultation
                      </li>
                      <li className="mb-3 d-flex align-items-center gap-3">
                        <i className="fas fa-check-circle text-brand-orange"></i> Confidential advice
                      </li>
                      <li className="d-flex align-items-center gap-3">
                        <i className="fas fa-check-circle text-brand-orange"></i> No obligation quote
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-7 p-5 bg-white">
                    <ContactForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
`;
  return fullComponent;
}

const allSlugs = Object.keys(configObj);
console.log(`Found ${allSlugs.length} slugs in taxationConfig.js`);

for (const slug of allSlugs) {
  const componentContent = generateJsxForPage(slug, configObj[slug]);
  const viewPath = path.join(outputViewsDir, `${toPascalCase(slug)}.jsx`);
  fs.writeFileSync(viewPath, componentContent, 'utf-8');
  
  // Create Next.js route
  const routeDir = path.join(outputAppDir, slug);
  if (!fs.existsSync(routeDir)) fs.mkdirSync(routeDir, { recursive: true });
  
  const routeContent = `
import ${toPascalCase(slug)} from '../../../views/taxation/${toPascalCase(slug)}';
import { metadataForTaxationSlug } from '../../../lib/seo-generators';

export async function generateMetadata() {
  return metadataForTaxationSlug('${slug}');
}

export default function Page() {
  return <${toPascalCase(slug)} />;
}
`;
  fs.writeFileSync(path.join(routeDir, 'page.jsx'), routeContent, 'utf-8');
}

console.log('Successfully generated physical static pages and route folders.');
