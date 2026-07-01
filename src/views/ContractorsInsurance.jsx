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

const ContractorsInsurance = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbs = [
    { label: 'Home', link: '/' },
    { label: 'Contractors Insurance', active: true }
  ];

  const sections = [
  {
    "title": "Protecting Your Contract Business with the Right Insurance",
    "paragraphs": [
      "Operating as an independent contractor or freelancer in the UK offers great flexibility, but it also carries direct legal and financial responsibilities. If a client alleges a mistake in your work or if an accident occurs on-site, having the correct insurance cover protects your assets and your business reputation.",
      "At Taxaccolega, we guide contractors through understanding what policies they need to operate safely and meet their client’s contractual obligations."
    ],
    "bullets": [
      "Secure Professional Indemnity to protect against claims of professional negligence or bad advice.",
      "Utilize Public Liability to cover accidental injury or property damage to third parties.",
      "Understand Employer's Liability requirements if you employ staff or work with associates."
    ],
    "faqs": []
  },
  {
    "title": "Insurance as a Compliance and IR35 Indicator",
    "paragraphs": [
      "Beyond basic financial security, having your own business insurance policies is a key indicator of genuine self-employment. HMRC looks at whether a contractor carries business risk when assessing IR35 status. Paying for your own professional insurance helps demonstrate that you run an independent enterprise rather than operating as a disguised employee."
    ],
    "bullets": [
      "Demonstrate financial risk-bearing to support an 'outside IR35' status.",
      "Comply with standard agency and end-client contractual requirements.",
      "Ensure peace of mind with legal expenses cover for tax and IR35 investigations."
    ],
    "faqs": []
  }
];


  return (
    <div>
      <PageHero
        title="Contractors Insurance"
        subtitle="Professional Insurance Guidance for UK Contractors and Freelancers"
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
                        alt={section.title || 'Contractors Insurance'}
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
                        alt={section.title || 'Contractors Insurance'}
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
      <ContactForm source="ContractorsInsurance" />
      <ReviewsSlider />
    </div>
  );
};

export default ContractorsInsurance;
