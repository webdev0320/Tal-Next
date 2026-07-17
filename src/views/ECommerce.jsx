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

const ECommerce = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const breadcrumbs = [
    { label: 'Home', link: '/' },
    { label: 'E-Commerce Accountants', active: true },
  ];

  const sections = [
  {
    "title": "E-Commerce",
    "paragraphs": [
      "Top Rated Accountants for E-Commerce Enterprises",
      "[rank_math_breadcrumb]"
    ],
    "bullets": [],
    "faqs": []
  },
  {
    "title": "How do we help ?",
    "paragraphs": [
      "TaxAccolega offers a comprehensive range of services designed to support and optimise e-commerce businesses. Our services include:",
      "We ensure accurate and precise tax reporting, identify potential savings, and minimize your business's tax liabilities.",
      "Our team will help you stay on top of your company's finances, ensuring that your tax records are accurate.",
      "We'll work with you to develop effective tax strategies, aiming to reduce your tax burden and maximize deductions and credits.",
      "Our expertise includes financial planning and investment advice to support your e-commerce business' growth.",
      "We can help your e-commerce business register for VAT, handle quarterly returns, and ensure compliance with VAT regulations.",
      "E-commerce companies with employees can use our payroll management services to calculate salaries and withhold taxes accurately.",
      "Our team can assist you in selecting and registering the most appropriate business structure.",
      "To gauge your e-commerce business's financial health, we prepare profit and loss statements and balance sheets.",
      "If HMRC audits or inquiries your e-commerce business, we're here to support and represent you.",
      "Protect your e-commerce business's legal and financial interests with our expertise in navigating complex legal issues."
    ],
    "bullets": [],
    "faqs": []
  },
  {
    "title": "Our Clients and Collaborative Partners",
    "paragraphs": [],
    "bullets": [],
    "faqs": []
  },
  {
    "title": "Why Choose TaxAccolega",
    "paragraphs": [
      "Our team at TaxAccolega understands the unique challenges e-commerce businesses face. As your e-commerce business grows in the digital marketplace, you can navigate the financial complexities with confidence."
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
    "bullets": [
      "**Address**: 187a London Road, Croydon, Surrey, CR0 2RJ",
      "**Email**: info@taxaccolega.co.uk",
      "**Phone No**: 020 8127 0728 074 7117 0484",
      "**Opening Hours**: Monday - Friday 9:00 am - 5:00 pm"
    ],
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
        title="E-Commerce Accountants"
        subtitle="Specialist Accounting & Tax Services for Online Retailers and E-Commerce Businesses"
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
                        alt="E-Commerce Accountants"
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
      <ContactForm source="ECommerce" />
      <ReviewsSlider />
    </div>
  );
};

export default ECommerce;
