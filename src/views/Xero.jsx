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

const Xero = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const breadcrumbs = [
    { label: 'Home', link: '/' },
    { label: 'Xero Accountants', active: true },
  ];

  const sections = [
  {
    "title": "Xero",
    "paragraphs": [
      "Your Finances with Advanced Software Solutions",
      "[rank_math_breadcrumb]"
    ],
    "bullets": [],
    "faqs": []
  },
  {
    "title": "Xero Accounting Experts",
    "paragraphs": [
      "We are an established Chartered Accounting firm in London, specializing in Xero Accounting software.From startups, small businesses, and limited companies to eCommerce vendors across various specialized sectors, we provide comprehensive accounting and tax advisory services.We simplify and automate financial processes for our clients by providing them with cutting-edge technology and applications.We are ready to assist clients with migration to Xero thanks to our seasoned Xero accountants.",
      "We are Xero Platinum Partners, specializing in tackling any accounting challenges. Xero is the perfect solution for small businesses to manage their finances, bookkeeping, and accounting. Xero's HQ dashboard lets us manage financial documents efficiently. The accounting professionals at our firm can assist you with account setup and recommend third-party Xero apps. We recommend and implement suitable software solutions for sectors such as retail, eCommerce, property investment, and construction. In addition, we integrate efficient point-of-sale systems, invoicing, and payment automation into your business. Get personalized support tailored to your needs today!"
    ],
    "bullets": [],
    "faqs": []
  },
  {
    "title": "Xero",
    "paragraphs": [
      "Imagine having the power to control and steer your finances, not just manage them. Xero serves as a financial control center, not just accounting software for companies in London and Croydon. Xero offers you a coherent, up-to-date picture of the financial condition of your company regardless of whether you're reconciling your bank accounts, monitoring cash flow, or getting ready for VAT returns. Perfect for companies that rely on efficiency and invention, it integrates effortlessly with third-party applications.",
      "Taxaccolega changes the way you use Xero; we don't just get you started with it. With our expertise in Xero software, we assist you go deep into the program, revealing sophisticated capabilities such project tracking, multi-currency support, and automatic invoicing. Taxaccolega lets Xero be more than just a tool; it is your growth partner who gives you active information from your numbers and enables you to make better business decisions more quickly."
    ],
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
        title="Xero Accountants"
        subtitle="Certified Xero Advisors Helping You Get the Most From Your Xero Account"
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
                        src="/images/2023/10/bigstock-Accountant-Women-At-Desk-Using-434753615-600x600-1.jpg"
                        alt="Xero Accountants"
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
      <ContactForm source="Xero" />
      <ReviewsSlider />
    </div>
  );
};

export default Xero;
