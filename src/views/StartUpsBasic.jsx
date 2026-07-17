"use client";
import React, { useEffect } from 'react';
import PageHero from '../components/PageHero';
import Partners from '../components/Partners';
import ReviewsSlider from '../components/ReviewsSlider';
import ContactForm from '../components/ContactForm';


const CheckIcon = () => (
  <svg className="me-2 flex-shrink-0" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--brand-orange)' }}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const StartUpsBasic = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbs = [
    { label: 'Home', link: '/' },
    { label: 'Start-Ups / Basic Packages', active: true }
  ];

  const sections = [
  {
    "title": "Start-ups / Basic",
    "paragraphs": [
      "dummy text of the printing"
    ],
    "bullets": [],
    "faqs": []
  },
  {
    "title": "LANDLORDS",
    "paragraphs": [
      "## £49",
      "We are expert specialist accountants for landlords, buy-to-let and property investors.",
      "## Self-Employed",
      "## £49",
      "Simple, proactive, hassle-free accounting for sole traders and self-employed people.",
      "## Contractors",
      "## £POA",
      "Great value, all-inclusive bespoke accountancy packages for small businesses and SMEs."
    ],
    "bullets": [],
    "faqs": []
  },
  {
    "title": "Limited\nCompanies",
    "paragraphs": [
      "## £109",
      "We're the top-rated accountants for contractors operating through a limited company.",
      "## SPV’s – Residential",
      "## £109",
      "Expert, experienced accountants for freelancers operating across all sectors and industries.",
      "## Non- Resident",
      "## £POA",
      "Top-rated accountants for Locums, Contractors, Social Media Influencers, Developers and more."
    ],
    "bullets": [],
    "faqs": []
  }
];


  return (
    <div>
      <PageHero
        title="Start-Ups / Basic Packages"
        subtitle="Affordable Fixed-Fee Accounting Packages for New Businesses and Sole Traders"
        breadcrumbs={breadcrumbs}
      />

      {sections.map((section, idx) => {
        const altBg = idx % 2 === 1 ? 'bg-light border-top border-bottom border-light' : 'bg-white';
        const imageLeft = idx % 2 === 0;
        const currentImage = idx === 0 ? '/images/young-asian.webp' : null;

        return (
          <section key={idx} className={`py-5 ${altBg}`}>
            <div className="container py-2">
              <div className="row g-5 align-items-center">
                {currentImage && imageLeft && (
                  <div className="col-lg-5 order-2 order-lg-1">
                    <div className="p-2 border rounded-4 shadow-lg bg-white">
                      <img
                        src={currentImage}
                        alt={section.title || 'Start-Ups / Basic Packages'}
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
                        alt={section.title || 'Start-Ups / Basic Packages'}
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



      <Partners />
      <ContactForm source="StartUpsBasic" />
      <ReviewsSlider />
    </div>
  );
};

export default StartUpsBasic;
