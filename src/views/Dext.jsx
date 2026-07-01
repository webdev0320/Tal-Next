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

const Dext = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const breadcrumbs = [
    { label: 'Home', link: '/' },
    { label: 'Dext Accountants', active: true },
  ];

  const sections = [
  {
    "title": "Dext",
    "paragraphs": [
      "Simplifying Financial Management with Dext",
      "[rank_math_breadcrumb]"
    ],
    "bullets": [],
    "faqs": []
  },
  {
    "title": "Dext Accounting Experts",
    "paragraphs": [
      "Dext stands as the world's most widely embraced paperless bookkeeping platform, fostering collaboration between accountants, bookkeepers, and small businesses. Since its inception in 2010, Dext has simplified the process of capturing, processing, and sharing financial documents.",
      "This streamlined approach allows you to concentrate on what truly matters—expanding your small business. Dext's influence extends globally, processing over 1 million transactions each month. It serves the needs of over 200,000 businesses and 10,000 accounting and bookkeeping firms worldwide."
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
    "title": "The Benefits Of Hiring An Accountant",
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
        title="Dext Accountants"
        subtitle="Streamline Your Receipt Capture and Bookkeeping with Dext-Integrated Accounting"
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
                        alt="Dext Accountants"
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
      <ContactForm source="Dext" />
      <ReviewsSlider />
    </div>
  );
};

export default Dext;
