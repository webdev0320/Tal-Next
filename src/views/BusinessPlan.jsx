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

const BusinessPlan = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbs = [
    { label: 'Home', link: '/' },
    { label: 'Business Plan', active: true }
  ];

  const sections = [
  {
    "title": "Turn Your Vision into a Structured Business Plan",
    "paragraphs": [
      "A well-structured business plan is more than just a document; it is a roadmap for your company's future growth and a critical requirement for securing funding from banks, investors, or venture capitalists. A solid plan outlines your business model, defines your market, and details how you plan to generate revenue.",
      "At Taxaccolega, we work with startups and established businesses in London and the UK to compile professional business plans that combine realistic strategy with robust financial forecasting."
    ],
    "bullets": [
      "Define clear, measurable operational and financial objectives.",
      "Analyze market potential, target demographics, and competitive landscapes.",
      "Set up realistic timelines for execution, product launches, and scaling."
    ],
    "faqs": []
  },
  {
    "title": "Comprehensive Financial Projections & Cash Flow Forecasts",
    "paragraphs": [
      "The core of any successful business plan lies in its numbers. Investors want to see detailed, realistic financial projections that demonstrate sustainability and profitability. We help build comprehensive financial models that project your income statements, balance sheets, and cash flow expectations over 3 to 5 years.",
      "Having an accountant handle these details ensures your projections align with realistic tax assumptions and industry benchmarks, significantly boosting your credibility with lenders."
    ],
    "bullets": [
      "Detailed cash flow forecasts to ensure working capital adequacy.",
      "Break-even analysis to identify when your business will start yielding profits.",
      "Professional presentation of financial data to suit bank loan and investor requirements."
    ],
    "faqs": []
  }
];


  return (
    <div>
      <PageHero
        title="Business Plan"
        subtitle="Professional Business Planning Support to Secure Funding and Drive Growth"
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
                        alt={section.title || 'Business Plan'}
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
                        alt={section.title || 'Business Plan'}
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
      <ContactForm source="BusinessPlan" />
      <ReviewsSlider />
    </div>
  );
};

export default BusinessPlan;
