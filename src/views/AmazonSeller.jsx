"use client";
import React, { useEffect } from 'react';
import PageHero from '../components/PageHero';
import Partners from '../components/Partners';
import ReviewsSlider from '../components/ReviewsSlider';
import ContactForm from '../components/ContactForm';
import FAQSection from '../components/FAQSection';

const CheckIcon = () => (
  <svg className="me-2 flex-shrink-0" width="18" height="18" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="3"
    strokeLinecap="round" strokeLinejoin="round"
    style={{ color: 'var(--brand-orange)' }}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const AmazonSeller = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const breadcrumbs = [
    { label: 'Home', link: '/' },
    { label: 'Amazon Seller Accountants', active: true },
  ];

  const sections = [
  {
    "title": "Amazon Seller",
    "paragraphs": [
      "Best Accountants for Amazon Sellers",
      "[rank_math_breadcrumb]"
    ],
    "bullets": [],
    "faqs": []
  },
  {
    "title": "We bring massive value to Amazon sellers",
    "paragraphs": [],
    "bullets": [
      "Tax Compliance: We ensure your income and expenses are accurately reported, optimizing your tax position while ensuring compliance with Amazon's specific tax requirements.",
      "Financial Management: Our services help you maintain precise financial records, which are essential for tax reporting and financial planning.",
      "VAT Services: For Amazon sellers subject to Value Added Tax (VAT), we offer guidance on registration, quarterly VAT returns, and compliance to align with HMRC regulations.",
      "Tax Strategies: We develop tax strategies that minimize your tax liability while maximizing deductions and credits, ensuring you retain more of your hard-earned profits.",
      "Audit Support: In the event of an audit or inquiry, our team provides support, representation, and the necessary documentation to ensure compliance and ease the processs"
    ],
    "faqs": []
  },
  {
    "title": "The Benefits Of Hiring An Accountant",
    "paragraphs": [
      "With our specialised assistance, Amazon sellers can confidently navigate the complexities of e-commerce taxation, allowing you to focus on growing your business and maximizing success within the Amazon marketplace."
    ],
    "bullets": [],
    "faqs": []
  },
  {
    "title": "FAQs",
    "paragraphs": [],
    "bullets": [
      "**Phone:**: 020 8127 0728",
      "**Email Address:**: info@taxaccolega.co.uk"
    ],
    "faqs": []
  },
  {
    "title": "Our Recent Google Reviews",
    "paragraphs": [],
    "bullets": [],
    "faqs": []
  }
];
  const faqs = [
  {
    "q": "What is Lorem Ipsum?",
    "a": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
  },
  {
    "q": "What is Lorem Ipsum?",
    "a": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
  },
  {
    "q": "What is Lorem Ipsum?",
    "a": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
  },
  {
    "q": "What is Lorem Ipsum?",
    "a": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
  }
];

  return (
    <div>
      <PageHero
        title="Amazon Seller Accountants"
        subtitle="Expert Tax & Accounting Support for Amazon FBA and Marketplace Sellers in the UK"
        breadcrumbs={breadcrumbs}
      />

      {sections.map((section, idx) => {
        const altBg       = idx % 2 === 1 ? 'bg-light border-top border-bottom border-light' : 'bg-white';
        const showImage   = idx === 0;
        const imageLeft   = true;

        return (
          <section key={idx} className={`py-5 ${altBg}`}>
            <div className="container py-2">
              <div className="row g-5 align-items-center">

                {showImage && imageLeft && (
                  <div className="col-lg-5 order-2 order-lg-1">
                    <div className="p-2 border rounded-4 shadow-lg bg-white">
                      <img
                        src="/images/young-asian.webp"
                        alt="Amazon Seller Accountants"
                        className="img-fluid rounded-3"
                        style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                      />
                    </div>
                  </div>
                )}

                <div className={`col-lg-${showImage ? '7' : '10 mx-auto'} ${showImage && imageLeft ? 'order-1 order-lg-2' : ''}`}>
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
                      <p key={i} className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>
                        {para}
                      </p>
                    )
                  )}

                  {section.bullets && section.bullets.length > 0 && (
                    <ul className="list-unstyled mb-4 d-flex flex-column gap-2 text-secondary">
                      {section.bullets.map((bullet, i) => (
                        <li key={i} className="d-flex align-items-start">
                          <CheckIcon />
                          <span>{bullet.replace(/^\*\*.*?\*\*:\s*/, '')}</span>
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

      {faqs && faqs.length > 0 && (
        <FAQSection
          faqs={faqs.map((f, i) => ({ id: 'faq-' + i, question: f.q, answer: f.a }))}
        />
      )}

      <Partners />
      <ContactForm source="AmazonSeller" />
      <ReviewsSlider />
    </div>
  );
};

export default AmazonSeller;
