"use client";
import React, { useEffect } from 'react';
import PageHero from '../components/PageHero';
import Partners from '../components/Partners';
import ReviewsSlider from '../components/ReviewsSlider';
import ContactForm from '../components/ContactForm';


const CheckIcon = () => (
  <svg className="me-2 flex-shrink-0" width="18" height="18" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="3"
    strokeLinecap="round" strokeLinejoin="round"
    style={{ color: 'var(--brand-orange)' }}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const PropertyLandlords = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const breadcrumbs = [
    { label: 'Home', link: '/' },
    { label: 'Property Landlord Accountants', active: true },
  ];

  const sections = [
  {
    "title": "Property Landlords",
    "paragraphs": [
      "dummy text of the printing",
      "[rank_math_breadcrumb]"
    ],
    "bullets": [],
    "faqs": []
  },
  {
    "title": "How do we help for Property Landlords ?",
    "paragraphs": [],
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
    "title": "The Benefits Of Hiring An Accountant",
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
    "title": "Send Us a Message",
    "paragraphs": [],
    "bullets": [],
    "faqs": []
  }
];


  return (
    <div>
      <PageHero
        title="Property Landlord Accountants"
        subtitle="Specialist Tax & Accounting Services for UK Property Landlords and Investors"
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
                        src="/images/young-asian.webp"
                        alt="Property Landlord Accountants"
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



      <Partners />
      <ContactForm source="PropertyLandlords" />
      <ReviewsSlider />
    </div>
  );
};

export default PropertyLandlords;
