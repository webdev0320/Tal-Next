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

const Tide = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const breadcrumbs = [
    { label: 'Home', link: '/' },
    { label: 'Tide Business Accountants', active: true },
  ];

  const sections = [
  {
    "title": "Tide",
    "paragraphs": [
      "Elevate Your Business with Tide Bank",
      "[rank_math_breadcrumb]"
    ],
    "bullets": [],
    "faqs": []
  },
  {
    "title": "Why Choose Tide Bank for Your Business?",
    "paragraphs": [
      "Tide offers a versatile mobile-first banking solution to streamline business operations. Manage your finances effortlessly from your smartphone with the ability to send invoices, make payments, and track expenses. Tide simplifies financial data synchronization with leading accounting software.",
      "As a prominent UK fintech, Tide caters to over 350,000 small and medium-sized enterprises, including sole traders, freelancers, and limited companies. One compelling feature is Tide's partnership with top accounting software providers like Xero, FreeAgent, and QuickBooks. Under our pricing packages, we guide you in seamlessly connecting with these software platforms, ensuring a smooth transition.",
      "Tide's bank account comes with features such as automated categorization, easy expense management, integration with accounting software, and in-app invoicing. With this all-in-one banking solution, business finance management can be simplified and streamlined to maximize efficiency and convenience."
    ],
    "bullets": [],
    "faqs": []
  },
  {
    "title": "The Benefits Of Hiring an Accountant",
    "paragraphs": [],
    "bullets": [],
    "faqs": []
  },
  {
    "title": "Our Recent Google Reviews",
    "paragraphs": [],
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
    "title": "Send Us a Message",
    "paragraphs": [],
    "bullets": [],
    "faqs": []
  }
];
  const faqs = [
  {
    "q": "What is Lorem Ipsum",
    "a": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
  },
  {
    "q": "What is Lorem Ipsum",
    "a": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
  },
  {
    "q": "What is Lorem Ipsum",
    "a": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
  },
  {
    "q": "What is Lorem Ipsum",
    "a": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
  }
];

  return (
    <div>
      <PageHero
        title="Tide Business Accountants"
        subtitle="Expert Accounting Support for Tide Business Bank Account Holders"
        breadcrumbs={breadcrumbs}
      />

      {sections.length > 0 && sections.map((section, idx) => {
        const altBg     = idx % 2 === 1 ? 'bg-light border-top border-bottom border-light' : 'bg-white';
        const showImage = idx === 0;
        return (
          <section key={idx} className={`py-5 ${altBg}`}>
            <div className="container py-2">
              <div className="row g-5 align-items-center">
                {showImage && (
                  <div className="col-lg-5 order-2 order-lg-1">
                    <div className="p-2 border rounded-4 shadow-lg bg-white">
                      <img
                        src="/images/2023/10/bigstock-Accountant-Women-At-Desk-Using-434753615-600x600-1.jpg"
                        alt="Tide Business Accountants"
                        className="img-fluid rounded-3"
                        style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                      />
                    </div>
                  </div>
                )}
                <div className={`col-lg-${showImage ? '7' : '10 mx-auto'} ${showImage ? 'order-1 order-lg-2' : ''}`}>
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
                      <p key={i} className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>{para}</p>
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

      {sections.length === 0 && (
        <section className="py-5 bg-white">
          <div className="container py-4 text-center">
            <p className="text-secondary fs-5">
              Content coming soon. In the meantime, please{' '}
              <a href="/contact-us" className="text-brand-orange fw-bold">contact our team</a>.
            </p>
          </div>
        </section>
      )}

      {faqs && faqs.length > 0 && (
        <FAQSection faqs={faqs.map((f, i) => ({ id: 'faq-' + i, question: f.q, answer: f.a }))} />
      )}

      <Partners />
      <ContactForm source="Tide" />
      <ReviewsSlider />
    </div>
  );
};

export default Tide;
