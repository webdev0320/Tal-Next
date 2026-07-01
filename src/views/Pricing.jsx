"use client";
import React, { useEffect } from 'react';
import Link from 'next/link';
import PageHero from '../components/PageHero';
import Partners from '../components/Partners';
import ReviewsSlider from '../components/ReviewsSlider';
import ContactForm from '../components/ContactForm';

const CheckIcon = () => (
  <svg className="me-2 flex-shrink-0" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--brand-orange)' }}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const Pricing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbs = [
    { label: 'Home', link: '/' },
    { label: 'Pricing', active: true }
  ];

  const packages = [
    {
      title: 'Sole Trader',
      price: '£25',
      desc: 'HMRC-compliant accounting for self-employed professionals.',
      link: '/packages/sole-trader-pricing',
      features: [
        'Sole Trader Accounts',
        'Self Assessment Tax Return',
        'Income Tax Liabilities & Deadlines',
        'HMRC 64-8 Agent Authorization',
        'Online Submission to HMRC',
        'Unlimited support upon request'
      ]
    },
    {
      title: 'LTD Company',
      price: '£45',
      isPopular: true,
      desc: 'Complete accounts & tax service for limited companies.',
      link: '/packages/ltd-company-pricing',
      features: [
        'Annual Set of Accounts',
        'Corporation Tax Return',
        'Director Personal Tax Return',
        'Confirmation Statement submission',
        'Payroll for 1 Employee',
        'Automated Email Reminders'
      ]
    },
    {
      title: 'Contractor LTD',
      price: '£50',
      desc: 'Specialist compliance and IR35 support for UK contractors.',
      link: '/packages/contractor-ltd-pricing',
      features: [
        'Full Set of Accounts & CT600',
        'Director Self Assessment',
        'HMRC & Companies House filings',
        'IR35 Review and contract check',
        'FreeAgent system setup',
        'Dedicated Accountant support'
      ]
    },
    {
      title: 'Landlords',
      price: '£25',
      desc: 'Keep property tax simple and optimize your rental returns.',
      link: '/packages/landlords-3',
      features: [
        'Rental Property Accounts',
        'Property Tax Return (SA105)',
        'Expense Optimization & Reliefs',
        'Multiple Property Support Available',
        'Capital Gains Tax planning advice',
        'HMRC Agent Representation'
      ]
    },
    {
      title: 'SPVs & Property LTDs',
      price: '£85',
      desc: 'Advanced tax structuring for property investment companies.',
      link: '/packages/spvs-ltd-pricing',
      features: [
        'Company Accounts & Tax Return',
        'Mortgage / SPV compliance check',
        'Director Personal Tax filings',
        'Rental bookkeeping support',
        'ATED compliance and guidance',
        'Corporate tax planning reviews'
      ]
    },
    {
      title: 'Charities & Non-Profits',
      price: '£80',
      desc: 'Expert accounting and compliance for charities.',
      link: '/packages/charities-pricing',
      features: [
        'Charity Commission compliant accounts',
        'CT600 & Charity Tax Return',
        'Gift Aid claims support',
        'Trustees annual report help',
        'Independent examinations',
        'Dedicated non-profit expert'
      ]
    }
  ];

  return (
    <div>
      <PageHero
        title="Pricing & Packages"
        subtitle="Transparent, Fixed-Fee Chartered Accounting Packages Tailored to Your Business Needs"
        breadcrumbs={breadcrumbs}
      />

      <section className="py-5 bg-white">
        <div className="container py-4">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold text-brand-dark" style={{ fontFamily: "'Outfit', sans-serif" }}>Choose the Right Plan for You</h2>
            <p className="text-muted leading-relaxed max-w-2xl mx-auto">No hidden fees, no surprise invoices. Fully accredited chartered accountants at fixed monthly costs.</p>
          </div>

          <div className="row g-4 justify-content-center">
            {packages.map((pkg, i) => (
              <div key={i} className="col-lg-4 col-md-6">
                <div className={`card h-100 border-0 shadow-sm rounded-4 p-4 position-relative ${pkg.isPopular ? 'border-top-brand' : ''}`} style={pkg.isPopular ? { borderTop: '4px solid var(--brand-orange)' } : {}}>
                  {pkg.isPopular && (
                    <div className="position-absolute top-0 end-0 bg-brand text-white px-3 py-1 rounded-bl-3 rounded-tr-3 fw-bold small shadow-sm" style={{ background: '#d2601a', borderBottomLeftRadius: '10px', borderTopRightRadius: '10px' }}>
                      Popular
                    </div>
                  )}

                  <div className="text-center mb-4">
                    <h3 className="fw-bold text-brand-dark mb-2" style={{ fontFamily: "'Outfit', sans-serif" }}>{pkg.title}</h3>
                    <p className="text-muted small mb-3">{pkg.desc}</p>
                    <div className="d-flex justify-content-center align-items-center">
                      <span className="fs-1 fw-bold text-brand-orange">{pkg.price}</span>
                      <span className="text-muted ms-1">+VAT/ m</span>
                    </div>
                  </div>
                  
                  <ul className="list-unstyled text-secondary mb-4 d-flex flex-column gap-3" style={{ fontSize: '0.95rem' }}>
                    {pkg.features.map((feat, idx) => (
                      <li key={idx} className="d-flex align-items-start">
                        <CheckIcon />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-auto pt-4 text-center">
                    <Link href={pkg.link} className={`btn ${pkg.isPopular ? 'btn-brand' : 'btn-brand-outline'} w-100 py-2 fw-bold`}>
                      View Package
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Partners />
      <ContactForm source="Pricing" />
      <ReviewsSlider />
    </div>
  );
};

export default Pricing;
