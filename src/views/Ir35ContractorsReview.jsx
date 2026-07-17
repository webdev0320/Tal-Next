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

const Ir35ContractorsReview = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbs = [
    { label: 'Home', link: '/' },
    { label: 'IR35 Contractors Review', active: true }
  ];

  const sections = [
  {
    "title": "Mitigate Your IR35 Risk with Comprehensive Reviews",
    "paragraphs": [
      "IR35 legislation remains one of the most critical compliance areas for independent contractors, freelancers, and businesses in the UK. Operating inside or outside IR35 dictates your tax liabilities and net take-home pay, making it essential to determine your correct employment status.",
      "At Taxaccolega, we provide detailed, contract-by-contract IR35 status reviews. Our specialists analyze the written agreement and verify your actual day-to-day working practices to ensure you remain compliant with HMRC guidelines."
    ],
    "bullets": [
      "Avoid costly HMRC penalties by proving your independent contractor status.",
      "Clear, expert analysis of key clauses like substitution, control, and mutuality of obligation.",
      "Assistance for both contractors and end-clients to align with Off-Payroll rules."
    ],
    "faqs": []
  },
  {
    "title": "Why You Need a Professional IR35 Status Review",
    "paragraphs": [
      "HMRC frequently audits independent contractors to verify if they are operating as genuine businesses or 'disguised employees.' Relying on automated tools like CEST often fails to capture the nuances of your working relationship, potentially leaving you exposed to back-taxes and interest charges.",
      "Our thorough process reviews the contract alongside a working practices questionnaire to deliver an objective assessment of your status."
    ],
    "bullets": [
      "Clause-by-clause analysis to identify high-risk terminology.",
      "Verification that your actual working practices match the contract terms.",
      "Actionable recommendations to modify contract language and working conditions to reflect genuine self-employment."
    ],
    "faqs": []
  }
];


  return (
    <div>
      <PageHero
        title="IR35 Contractors Review"
        subtitle="Independent IR35 Status Reviews to Keep You Compliant and Protected"
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
                        alt={section.title || 'IR35 Contractors Review'}
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
                        alt={section.title || 'IR35 Contractors Review'}
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
      <ContactForm source="Ir35ContractorsReview" />
      <ReviewsSlider />
    </div>
  );
};

export default Ir35ContractorsReview;
