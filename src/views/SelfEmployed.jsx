"use client";
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

const SelfEmployed = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbs = [
    { label: 'Home', link: '/' },
    { label: 'SelfEmployed', active: true }
  ];

  const sections = [
  {
    "title": "Self-Employed",
    "paragraphs": [
      "Go-To Accountants for Self-Employed Professionals",
      "## How do we help you?",
      "TaxAccolega offers a comprehensive suite of essential services to self-employed individuals. Here's how we can assist you:",
      "Our team ensures accurate income and expense reporting while identifying tax-saving opportunities.",
      "We ensure that your financial data is sorted, accurate, and tax-ready.",
      "We develop tax strategies to minimise tax liability and optimize deductions and credits.",
      "Count on us for financial guidance, including investments, savings, and retirement planning.",
      "If you're subject to VAT, we assist with registration, quarterly returns, and compliance.",
      "Our payroll specialists ensure accurate salary calculations and tax withholding for self-employed individuals.",
      "Assistance with choosing and registering the right business structure.",
      "We prepare financial statements like profit and loss statements and balance sheets for your business.",
      "In case of an audit or HMRC inquiry, we offer support and representation, ensuring compliance.",
      "Legal compliance and insurance advice are our specialties."
    ],
    "bullets": [],
    "faqs": []
  },
  {
    "title": "Why choose TAXACCOLEGA",
    "paragraphs": [
      "With TaxAccolega, you can simplify financial management, enhance tax efficiency, and adhere to UK tax regulations. We're your trusted partner on the path to financial success."
    ],
    "bullets": [],
    "faqs": []
  },
  {
    "title": "Get in Touch",
    "paragraphs": [
      "## Send Us a Message"
    ],
    "bullets": [
      "**Phone Number**: 020 8127 0728",
      "**Whatsapp**: 074 7117 0484",
      "**Email**: info@taxaccolega.co.uk",
      "**Address**: 187a London Road, Croydon, Surrey, CR0 2RJ"
    ],
    "faqs": []
  }
];
  const faqs = [];

  return (
    <div>
      <PageHero
        title="SelfEmployed"
        subtitle="HMRC-Compliant Tax Returns & Accounting Support for Sole Traders"
        breadcrumbs={breadcrumbs}
      />

      {sections.map((section, idx) => {
        const altBg = idx % 2 === 1 ? 'bg-light border-top border-bottom border-light' : 'bg-white';
        const imageLeft = idx % 2 === 1;
        // Use custom image or fallback
        const currentImage = idx === 0 ? '/images/young-asian.webp' : null;

        return (
          <section key={idx} className={`py-5 ${altBg}`}>
            <div className="container">
              <div className="row g-5 align-items-center">
                {currentImage && imageLeft && (
                  <div className="col-lg-5 order-2 order-lg-1">
                    <div className="p-2 border rounded-4 shadow-lg bg-white">
                      <img
                        src={currentImage}
                        alt={section.title || ''}
                        className="img-fluid rounded-3"
                        style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                      />
                    </div>
                  </div>
                )}
                
                <div className={`col-lg-${currentImage ? '7' : '10 mx-auto'} ${currentImage && imageLeft ? 'order-1 order-lg-2' : ''}`}>
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
                          <span>{bullet.replace(/^\*\*.*?\*\*:\s*/, '')}</span>
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
                        alt={section.title || ''}
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
      <ContactForm source="SelfEmployed" />
      <ReviewsSlider />
    </div>
  );
};

export default SelfEmployed;
