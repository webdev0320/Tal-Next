"use client";
import React, { useEffect } from 'react';
import Link from 'next/link';
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

const Dentists = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbs = [
    { label: 'Home', link: '/' },
    { label: 'Dentists', active: true }
  ];

  const sections = [
  {
    "title": "Dentists",
    "paragraphs": [
      "Your path to success"
    ],
    "bullets": [],
    "faqs": []
  },
  {
    "title": "How do we help for Dentists\n?",
    "paragraphs": [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    ],
    "bullets": [],
    "faqs": []
  },
  {
    "title": "",
    "paragraphs": [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
    ],
    "bullets": [],
    "faqs": []
  }
];
  const faqs = [];

  return (
    <div>
      <PageHero
        title="Dentists"
        subtitle="Professional Chartered Accounting Services in London"
        breadcrumbs={breadcrumbs}
      />

      {sections.map((section, idx) => {
        const altBg = idx % 2 === 1 ? 'bg-light border-top border-bottom border-light' : 'bg-white';
        const imageLeft = idx % 2 === 1;
        // Use custom image or fallback
        const currentImage = idx === 0 ? '/images/young-asian.webp' : null;

        return (
          <section key={idx} className={`py-5 ${altBg}`}>
            <div className="container">
              <div className="row g-5 align-items-center">
                {currentImage && imageLeft && (
                  <div className="col-lg-5 order-2 order-lg-1">
                    <div className="p-2 border rounded-4 shadow-lg bg-white">
                      <img
                        src={currentImage}
                        alt={section.title || ''}
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
                        alt={section.title || ''}
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
      <ContactForm source="Dentists" />
      <ReviewsSlider />
    </div>
  );
};

export default Dentists;
