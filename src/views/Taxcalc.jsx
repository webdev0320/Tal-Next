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

const Taxcalc = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const breadcrumbs = [
    { label: 'Home', link: '/' },
    { label: 'TaxCalc Accountants', active: true },
  ];

  const sections = [
  {
    "title": "TaxCalc",
    "paragraphs": [
      "Efficiency and Accuracy with TaxCalc Software",
      "[rank_math_breadcrumb]"
    ],
    "bullets": [],
    "faqs": []
  },
  {
    "title": "TaxCalc Software Experts",
    "paragraphs": [
      "At TaxAccolega, we're committed to providing the best-in-class solutions to meet your tax needs, and that's why we proudly utilize TaxCalc Software. This powerful tax software is designed to streamline and simplify taxation. With TaxCalc, you can trust efficient tax return preparation, compliance, and accurate calculations. This is all while ensuring that you meet tax deadlines with ease.",
      "The user-friendly interface makes it accessible to individuals, businesses, and professionals alike, allowing for seamless collaboration and accurate financial management. Our team of tax experts is well-versed in TaxCalc, ensuring your financial affairs are in capable hands. Join us in embracing this cutting-edge solution to navigate your tax journey effortlessly."
    ],
    "bullets": [],
    "faqs": []
  },
  {
    "title": "Taxcalc",
    "paragraphs": [
      "With Taxcalc on your side, managing taxes does not have to be a headache. In a simple online interface, Taxcalc streamlines income tax preparation, company tax filing, and self-assessment for companies in Croydon and London. Taxcalc assures you are always on top of your taxes requirements whether you work freelance or are a small developing company, free from the difficulty. It is as if you had a personal tax advisor directly at your doorsteps and at fingertips to lead you through your business finances' most crucial components.",
      "We excel at getting Taxcalc to function for you at Taxaccolega. Our Taxcalc software specialists guarantee accurate tax filing and meet with the UK tax rules. We remove the tension of tax season from computerized tax computations to live alerts. With Taxcalc you can simplify your tax planning, save time, and stay on track every year. Let Taxaccolega help you see how."
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
        title="TaxCalc Accountants"
        subtitle="Professional Tax Return Filing & Advisory Services Using TaxCalc"
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
                        alt="TaxCalc Accountants"
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
      <ContactForm source="Taxcalc" />
      <ReviewsSlider />
    </div>
  );
};

export default Taxcalc;
