"use client";
import React, { useEffect } from 'react';
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

const ConstructionIndustryScheme = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbs = [
    { label: 'Home', link: '/' },
    { label: 'Construction Industry Scheme', active: true }
  ];

  const sections = [
  {
    "title": "Construction Industry",
    "paragraphs": [
      "Building Tax Savings, One Block at a Time with Taxaccolega."
    ],
    "bullets": [],
    "faqs": []
  },
  {
    "title": "How do we help Construction Industry?",
    "paragraphs": [
      "Construction Industry Scheme (CIS) tax matters can be quite intricate, depending on your specific contract. There are several tax regulations applied to self-employed individuals, umbrella companies, and payroll contractors. Overpaying taxes or incurring fines from HMRC may result from errors in your Self Assessment Tax Return. Financial losses occur either way.",
      "Our certified accountants at Taxaccolega in Croydon file your Self Assessment Tax Returns accurately. As well as providing guidance on effective record-keeping practices, we assist you in managing your accounts. Our hands-on advice and support are available whenever you engage in CIS contracts."
    ],
    "bullets": [],
    "faqs": []
  },
  {
    "title": "Why Choose Taxaccolega",
    "paragraphs": [
      "Integrity, honesty, and dedication are the hallmarks of  Taxaccolega.",
      "We are a team of dedicated and experienced accountants committed to providing you with the most comprehensive accountancy services in an agile and realistic manner. Aside from professional and client-centric tax advisory services, we also provide 360-degree financial management.",
      "With Taxaccolega, you can automate and digitally transform your accounting and taxation processes to focus on the growth of your company instead of managing them."
    ],
    "bullets": [],
    "faqs": []
  }
];
  const faqs = [
  {
    "q": "WHAT IS THE CONSTRUCTION INDUSTRY SCHEME?",
    "a": "CIS is governed by HMRC, but allows contractors to deduct tax from source in relation to construction work. You can therefore make convenient monthly payments rather than calculating your tax liabilities in your annual Self-Assessment Tax Return Form."
  },
  {
    "q": "DOES CIS COVER PAYMENTS MADE TO EMPLOYEES?",
    "a": "No, CIS doesn´t cover payments to employees as they are covered by the Pay As You Earn (PAYE) scheme. However, the CIS scheme works with the same principles in that tax is deducted at the time of payment. Before you deduct taxable income under the construction industry scheme check that the sub-contractor is CIS registered and what level of registration they have."
  },
  {
    "q": "WHEN DOES CIS APPLY?",
    "a": "CIS only applies when you are paying for the services of construction work performed by a sub-contractor. These include builders, property developers together with businesses that are not in the construction business, but have invested £1 million or more on the construction project over a three year period."
  },
  {
    "q": "HOW MUCH TAX IS DEDUCTED UNDER CIS?",
    "a": "Providing the sub-contractor is eligible under the CIS you can deduct 20% tax rather than the usual 30 per cent. A subcontractor will submit an invoice for labour and materials. As a contractor you will deduct 20 per cent from labour costs only and pay HMRC as tax."
  },
  {
    "q": "WHAT SHOULD I DO IF I AM A SUB-CONTRACTOR?",
    "a": "If you are offering your services under the Construction Industry Scheme independently rather than with an umbrella company or on the payroll of a contractor you should ensure you are recognized as having self-employed status and include tax deductions on each of your invoices in your Self Assessment Tax Return. You are required by HMRC to keep efficient business records to keep track of your invoices in case they want to investigate your business tax claims. HMRC are clamping down on sub-contractors that take advantage of CIS in an attempt to identify people who are avoiding paying taxes."
  }
];

  return (
    <div>
      <PageHero
        title="Construction Industry Scheme"
        subtitle="CIS Tax Returns, HMRC Compliance & Financial Management for Construction Workers"
        breadcrumbs={breadcrumbs}
      />

      {sections.map((section, idx) => {
        const altBg = idx % 2 === 1 ? 'bg-light border-top border-bottom border-light' : 'bg-white';
        const imageLeft = idx % 2 === 0;
        const currentImage = idx === 0 ? '/images/2023/10/bigstock-Accountant-Women-At-Desk-Using-434753615-600x600-1.jpg' : null;

        return (
          <section key={idx} className={`py-5 ${altBg}`}>
            <div className="container py-2">
              <div className="row g-5 align-items-center">
                {currentImage && imageLeft && (
                  <div className="col-lg-5 order-2 order-lg-1">
                    <div className="p-2 border rounded-4 shadow-lg bg-white">
                      <img
                        src={currentImage}
                        alt={section.title || 'Construction Industry Scheme'}
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
                        alt={section.title || 'Construction Industry Scheme'}
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
      <ContactForm source="ConstructionIndustryScheme" />
      <ReviewsSlider />
    </div>
  );
};

export default ConstructionIndustryScheme;
