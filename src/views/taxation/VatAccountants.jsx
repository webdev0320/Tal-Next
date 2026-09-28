

"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import TaxationLinksBar from '../../components/TaxationLinksBar';
import ContactForm from '../../components/ContactForm';
import vatAccountantsImg from '../../assets/taxation-vat-accountants.webp';
import { faqJsonLd } from '../../lib/jsonld';

const CheckIcon = () => (
  <svg className="me-2 flex-shrink-0" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--brand-orange)' }}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const WarningIcon = () => (
  <svg className="me-2 flex-shrink-0" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--brand-orange)' }}>
    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

const faqs = [
  {
    q: 'What does a VAT accountant do?',
    a: 'A VAT accountant manages VAT registration, prepares VAT returns, ensures accurate VAT accounting, and submits VAT returns online through HMRC systems.'
  },
  {
    q: 'How do I submit a VAT return online UK?',
    a: 'You prepare your VAT figures, complete the return, and submit it using HMRC-approved software. All figures must match your underlying records.'
  },
  {
    q: 'When do I need a VAT registration accountant?',
    a: 'When your business approaches the VAT threshold or needs to choose the correct VAT scheme, working with a VAT registration accountant helps avoid mistakes.'
  },
  {
    q: 'Can VAT accountants fix previous errors?',
    a: 'Yes. VAT accountants can review previous returns, correct errors, and resubmit where necessary to align with HMRC requirements.'
  }
];


export default function VatAccountants() {
  const [showMockup, setShowMockup] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="position-relative text-white overflow-hidden py-5" style={{ 
        backgroundImage: 'url(/images/banners/VAT%20Tax%20Accounting%20Banner%2001.webp)', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '380px'
      }}>
        <div className="position-absolute w-100 h-100" style={{ background: 'linear-gradient(135deg, rgba(29, 60, 69, 0.9) 0%, rgba(17, 37, 43, 0.95) 100%)', top: 0, left: 0, zIndex: 1 }}></div>
        <div className="container position-relative py-4" style={{ zIndex: 2 }}>
          <div className="row g-4 align-items-center">
            <div className="col-lg-8 text-center text-lg-start">
              <span className="text-uppercase small tracking-wider fw-bold mb-2 d-inline-block text-brand-orange" style={{ letterSpacing: '2px' }}>
                Value Added Tax Specialists
              </span>
              <h1 className="display-4 fw-bold text-white mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>
                {"VAT Accountants London"}
              </h1>
              <p className="lead text-white-50 mb-4" style={{ maxWidth: '680px', fontSize: '1.1rem', lineHeight: 1.6 }}>
                {"VAT Returns, VAT Registration & VAT Services UK"}
              </p>
            </div>
          </div>
        </div>
            </header>

      {/* Breadcrumb */}
      <div className="bg-white border-bottom py-3">
        <div className="container px-4">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0 small">
              <li className="breadcrumb-item"><Link href="/" className="text-decoration-none" style={{ color: '#D2601A' }}>Home</Link></li>
              <li className="breadcrumb-item"><Link href="/taxation" className="text-decoration-none" style={{ color: '#D2601A' }}>Taxation</Link></li>
              <li className="breadcrumb-item active text-secondary">VAT Accountants London</li>
            </ol>
          </nav>
        </div>
      </div>

      <TaxationLinksBar />

      {/* 1. INTRO */}
      <section className="py-5 border-bottom bg-white">
        <div className="container py-3">
          <div className="row g-5">
            <div className="col-lg-7">
              <span className="text-brand-orange fw-bold text-uppercase small tracking-wider">Where VAT Starts To Build</span>
              <h2 className="text-brand-dark display-6 fw-bold mt-2 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                {"VAT rarely feels like a problem at the beginning"}
              </h2>

              <div className="text-secondary d-flex flex-column gap-3 fs-6" style={{ lineHeight: 1.8 }}>
                <p>{"VAT rarely feels like a problem at the beginning. A business starts trading, invoices go out, expenses are paid, and everything appears manageable. Then activity increases. More transactions, more suppliers, more customers — and suddenly VAT starts to feel less straightforward."}</p>
                <p>{"Figures need to match. Deadlines become tighter. There\u2019s uncertainty around what should actually be reported and when to submit a VAT return."}</p>
                <p className="fw-semibold text-brand-dark bg-light p-3 border-start border-brand-orange border-4 rounded-end mb-0">
                  {"This is where working with a VAT accountant in London UK becomes relevant. For most businesses, VAT doesn\u2019t become difficult because of the rules \u2014 it becomes difficult because of how those rules apply to real business activity."}
                </p>
              </div>

              <div className="d-flex flex-wrap gap-3 mt-4">
                <a href="#contact-section" className="btn btn-brand px-4 py-2">
                  <i className="fas fa-envelope me-2"></i> Book Free Consultation
                </a>
                <button onClick={() => setShowMockup(!showMockup)} className="btn btn-brand-outline px-4 py-2">
                  <i className="fas fa-eye me-2"></i> {showMockup ? 'Hide Figma Mockup' : 'View Figma Mockup'}
                </button>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="card border-0 shadow-lg rounded-4 p-4 text-center position-relative overflow-hidden" style={{ background: '#1d3c45', color: '#fff' }}>
                <div className="position-absolute bg-warning rounded-circle" style={{ width: '150px', height: '150px', top: '-75px', right: '-75px', opacity: 0.1 }}></div>
                
                <h4 className="fw-bold mb-3 text-white" style={{ fontFamily: "'Outfit', sans-serif" }}>Fast Response Helpline</h4>
                <p className="text-white-50 mb-4 small">VAT deadlines and filing pressures can arise quickly. Speak directly to an expert VAT accountant today.</p>
                
                <div className="d-flex flex-column gap-3 mb-4 text-start">
                  <a href="tel:02081270728" className="d-flex align-items-center text-white text-decoration-none gap-3 p-2 rounded hover-bg-translucent">
                    <div className="bg-brand-orange text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '45px', height: '45px' }}>
                      <i className="fas fa-phone-alt"></i>
                    </div>
                    <div>
                      <span className="text-white-50 d-block small">Call Office</span>
                      <span className="fw-semibold">020 8127 0728</span>
                    </div>
                  </a>
                  <a href="https://wa.me/447471170484" target="_blank" rel="noreferrer" className="d-flex align-items-center text-white text-decoration-none gap-3 p-2 rounded hover-bg-translucent">
                    <div className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '45px', height: '45px' }}>
                      <i className="fab fa-whatsapp"></i>
                    </div>
                    <div>
                      <span className="text-white-50 d-block small">Whatsapp Chat</span>
                      <span className="fw-semibold">074 7117 0484</span>
                    </div>
                  </a>
                  <a href="mailto:info@taxaccolega.co.uk" className="d-flex align-items-center text-white text-decoration-none gap-3 p-2 rounded hover-bg-translucent">
                    <div className="bg-info text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '45px', height: '45px' }}>
                      <i className="fas fa-envelope"></i>
                    </div>
                    <div>
                      <span className="text-white-50 d-block small">Email Support</span>
                      <span className="fw-semibold">info@taxaccolega.co.uk</span>
                    </div>
                  </a>
                </div>

                <a href="#contact-section" className="btn btn-warning w-100 py-3 fw-bold rounded-3">Get Started Now</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Toggleable Figma Mockup Display */}
      {showMockup && (
        <section className="py-5" style={{ background: '#f1f3f5' }}>
          <div className="container text-center">
            <span className="text-uppercase small tracking-wider text-brand-orange fw-bold">Figma Visual Reference</span>
            <h3 className="text-brand-dark mb-4 fw-bold">Original Page Mockup Design</h3>
            <div className="p-2 border rounded-4 shadow bg-light d-inline-block position-relative" style={{ maxWidth: '100%' }}>
              <img 
                src={vatAccountantsImg} 
                alt="Figma design reference" 
                className="img-fluid rounded-3" 
                style={{ maxHeight: '900px', objectFit: 'contain', border: '1px solid #dee2e6' }}
              />
              <button 
                onClick={() => setShowMockup(false)} 
                className="btn btn-dark btn-sm position-absolute" 
                style={{ top: '15px', right: '15px', borderRadius: '50px' }}
              >
                <i className="fas fa-times me-1"></i> Close Design Mock
              </button>
            </div>
          </div>
        </section>
      )}

      {/* 2. VAT SERVICES BUILT AROUND ACCURACY */}
      <section className="py-5 bg-light border-top border-bottom border-light">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-7">
              <span className="text-brand-orange fw-bold text-uppercase small tracking-wider">Accuracy Before Submission</span>
              <h2 className="text-brand-dark display-6 fw-bold mt-2 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                {"VAT Accountants London \u2013 VAT Services Built Around Accuracy"}
              </h2>
              <p className="text-secondary mb-4 fs-6" style={{ lineHeight: 1.8 }}>
                {"Our VAT services are designed to keep your business compliant, your reporting consistent, and your submissions accurate."}
              </p>
              <p className="text-secondary" style={{ lineHeight: 1.8 }}>
                {"Whether you need a VAT registration accountant, ongoing VAT accounting, or support to file VAT returns online, the focus stays the same:"}
                <strong className="text-brand-dark d-block mt-2 fs-5">{"keep records clear before submission \u2014 not fix them afterwards."}</strong>
              </p>
            </div>

            <div className="col-lg-5">
              <div className="p-4 rounded-4 shadow-sm bg-white h-100" style={{ borderTop: '4px solid var(--brand-orange)' }}>
                <h5 className="fw-bold text-brand-dark mb-3">What this covers</h5>
                <ul className="list-unstyled mb-0 d-flex flex-column gap-2 text-secondary" style={{ lineHeight: 1.7 }}>
                  <li className="d-flex align-items-start"><CheckIcon /> <span>VAT registration accountant support</span></li>
                  <li className="d-flex align-items-start"><CheckIcon /> <span>Ongoing VAT accounting</span></li>
                  <li className="d-flex align-items-start"><CheckIcon /> <span>Support to file VAT returns online</span></li>
                  <li className="d-flex align-items-start"><CheckIcon /> <span>Records kept clear before submission</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. HOW VAT WORKS + TABLE */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-7">
              <span className="text-brand-orange fw-bold text-uppercase small tracking-wider">VAT Mechanics</span>
              <h2 className="text-brand-dark display-6 fw-bold mt-2 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                {"How VAT Works in Real Business Activity"}
              </h2>
              <div className="text-secondary d-flex flex-column gap-3" style={{ lineHeight: 1.8 }}>
                <p className="mb-0">{"In practice, VAT accounting is not just about submitting returns. It\u2019s about understanding how VAT flows through your business."}</p>
                <p className="mb-0">{"Every sale may include VAT collected. Many expenses include VAT paid. The difference between the two is what eventually gets reported in your VAT return UK."}</p>
                <p className="mb-0 fw-semibold text-brand-dark">{"But this only works when records are accurate."}</p>
                <p className="mb-0">
                  {"When underlying "}
                  <Link href="/accounts/bookkeeping-services" className="text-brand-orange text-decoration-none">bookkeeping services for small businesses</Link>
                  {" are kept up to date, VAT reporting tends to stay straightforward. When they are not, inconsistencies start appearing across invoices, expenses, and returns."}
                </p>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="p-4 rounded-4 shadow-sm bg-light h-100 border-start border-brand-orange border-4">
                <h5 className="fw-bold text-brand-dark mb-3">Why accuracy comes first</h5>
                <p className="text-secondary mb-0" style={{ lineHeight: 1.8 }}>
                  {"VAT reporting is only as reliable as the records underneath it. When bookkeeping is maintained through the year, the return reflects actual business activity rather than estimates assembled close to a deadline."}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-5">
            <h4 className="text-brand-dark fw-bold text-center mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>VAT Flow in Business Operations</h4>
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="table-responsive rounded-4 shadow-sm border overflow-hidden">
                  <table className="table table-hover align-middle mb-0 bg-white">
                    <thead style={{ background: '#1d3c45', color: '#fff' }}>
                      <tr>
                        <th className="py-3 px-4 text-white border-0 fw-bold">Area</th>
                        <th className="py-3 px-4 text-white border-0 fw-bold">What Happens</th>
                        <th className="py-3 px-4 text-white border-0 fw-bold">Impact on VAT</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-bottom">
                        <td className="py-3 px-4 fw-bold text-brand-dark">Sales</td>
                        <td className="py-3 px-4 text-secondary">VAT collected from customers</td>
                        <td className="py-3 px-4 text-secondary">Output VAT</td>
                      </tr>
                      <tr className="border-bottom" style={{ background: '#fcfcfc' }}>
                        <td className="py-3 px-4 fw-bold text-brand-dark">Expenses</td>
                        <td className="py-3 px-4 text-secondary">VAT paid on purchases</td>
                        <td className="py-3 px-4 text-secondary">Input VAT</td>
                      </tr>
                      <tr style={{ background: '#fcfcfc' }}>
                        <td className="py-3 px-4 fw-bold text-brand-dark">Difference</td>
                        <td className="py-3 px-4 text-secondary">{'Output \u2013 Input'}</td>
                        <td className="py-3 px-4 text-secondary">VAT payable or reclaimable</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. VAT RETURNS AND VAT FILING ONLINE */}
      <section className="py-5 bg-light border-top border-bottom border-light">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-7">
              <span className="text-brand-orange fw-bold text-uppercase small tracking-wider">Submission Quality</span>
              <h2 className="text-brand-dark display-6 fw-bold mt-2 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                {"VAT Returns and VAT Filing Online"}
              </h2>
              <div className="text-secondary d-flex flex-column gap-3" style={{ lineHeight: 1.8 }}>
                <p className="mb-0">{"Filing VAT returns online is now standard under HMRC requirements. But the submission itself is not usually the problem."}</p>
                <p className="mb-0">{"Most issues arise before submission \u2014 when figures don\u2019t align. A common example is where sales invoices include VAT but purchase invoices are recorded late, creating an overstated liability. Another is where VAT is applied incorrectly on mixed-use expenses, leading to inaccurate input VAT claims."}</p>
              </div>

              <div className="p-4 border-start border-brand-orange border-4 bg-white rounded-end mt-4">
                <h5 className="fw-bold text-brand-dark mb-3">Businesses often reach the stage where:</h5>
                <ul className="list-unstyled mb-0 d-flex flex-column gap-2 text-secondary" style={{ fontSize: '0.95rem' }}>
                  <li className="d-flex align-items-start"><WarningIcon /> <span>VAT returns are due</span></li>
                  <li className="d-flex align-items-start"><WarningIcon /> <span>figures look correct</span></li>
                  <li className="d-flex align-items-start"><WarningIcon /> <span>{'but totals don\u2019t fully match underlying records'}</span></li>
                </ul>
              </div>

              <p className="text-secondary mt-4 mb-0" style={{ lineHeight: 1.8 }}>
                {"This is where working with VAT return accountants becomes important. This is not about submitting VAT returns \u2014 it is about ensuring that the figures behind them reflect your actual business activity before they are filed."}
              </p>
            </div>

            <div className="col-lg-5">
              <div className="card border-0 shadow-lg rounded-4 p-4 text-white h-100" style={{ background: '#1d3c45' }}>
                <h4 className="fw-bold mb-4 border-bottom pb-2" style={{ fontFamily: "'Outfit', sans-serif" }}>We manage the full process</h4>
                <ul className="list-unstyled d-flex flex-column gap-3 mb-0">
                  {[
                    'Preparing VAT returns',
                    'Reviewing figures before submission',
                    'Filing VAT returns online through HMRC systems',
                    'Handling VAT tax return corrections where needed'
                  ].map((item, idx) => (
                    <li key={idx} className="d-flex align-items-start gap-3">
                      <div className="bg-brand-orange text-white rounded-circle d-flex align-items-center justify-content-center mt-1" style={{ width: '24px', height: '24px', minWidth: '24px' }}>
                        <i className="fas fa-check" style={{ fontSize: '0.75rem' }}></i>
                      </div>
                      <span className="fw-semibold" style={{ fontSize: '0.95rem' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. VAT REGISTRATION ACCOUNTANT */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-7">
              <span className="text-brand-orange fw-bold text-uppercase small tracking-wider">Initial Setup Protocols</span>
              <h2 className="text-brand-dark display-6 fw-bold mt-2 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                {"VAT Registration Accountant \u2013 Getting Set Up Properly"}
              </h2>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>
                {"VAT registration is one of the first stages where mistakes can carry forward."}
              </p>
              <p className="text-secondary mb-4" style={{ lineHeight: 1.8 }}>
                {"Some businesses register too early. Others delay registration and face penalties."}
              </p>

              <h5 className="fw-bold text-brand-dark mb-3">A VAT registration accountant ensures:</h5>
              <ul className="list-unstyled mb-4 d-flex flex-column gap-2 text-secondary">
                <li className="d-flex align-items-center"><CheckIcon /> correct registration timing</li>
                <li className="d-flex align-items-center"><CheckIcon /> appropriate VAT scheme selection</li>
                <li className="d-flex align-items-center"><CheckIcon /> proper setup of VAT accounting systems</li>
              </ul>

              <p className="text-secondary mb-0" style={{ lineHeight: 1.8 }}>
                {"This is especially important when your business is also managing "}
                <Link href="/taxation/company-tax-return-accountants" className="text-brand-orange text-decoration-none">corporation tax services</Link>
                {", where VAT treatment directly affects profit calculations."}
              </p>
            </div>

            <div className="col-lg-5">
              <div className="p-4 rounded-4 shadow-sm bg-light h-100 border-start border-brand-orange border-4">
                <h5 className="fw-bold text-brand-dark mb-3">Registration timing matters</h5>
                <p className="text-secondary mb-0" style={{ lineHeight: 1.8 }}>
                  {"Registering too early or too late both create avoidable work. Getting the timing, the scheme, and the systems right at the start prevents the same corrections from repeating across later periods."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. VAT ACCOUNTING AND FINANCIAL RECORDS */}
      <section className="py-5 bg-light border-top border-bottom border-light">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-7">
              <span className="text-brand-orange fw-bold text-uppercase small tracking-wider">Consistent Records</span>
              <h2 className="text-brand-dark display-6 fw-bold mt-2 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                {"VAT Accounting and Financial Records"}
              </h2>
              <div className="text-secondary d-flex flex-column gap-3" style={{ lineHeight: 1.8 }}>
                <p className="mb-0">{"VAT accounting relies heavily on consistency."}</p>
                <p className="mb-0">{"It\u2019s not just about submitting a VAT tax return \u2014 it\u2019s about making sure the figures used actually reflect business activity."}</p>
                <p className="mb-0">
                  {"When records are maintained alongside structured "}
                  <Link href="/accounts/management-accounts" className="text-brand-orange text-decoration-none">management accounts services</Link>
                  {", businesses have a clearer view of their VAT position throughout the year, not just at filing time."}
                </p>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="card border-0 shadow-sm rounded-4 p-4 bg-white h-100">
                <h5 className="fw-bold text-brand-dark mb-3">Common VAT Accounting Issues</h5>
                <ul className="list-unstyled mb-0 d-flex flex-column gap-2 text-secondary" style={{ lineHeight: 1.7 }}>
                  <li className="d-flex align-items-start"><WarningIcon /> <span>Mismatched invoices and expenses</span></li>
                  <li className="d-flex align-items-start"><WarningIcon /> <span>Incorrect VAT treatment on purchases</span></li>
                  <li className="d-flex align-items-start"><WarningIcon /> <span>Missing supporting records</span></li>
                  <li className="d-flex align-items-start"><WarningIcon /> <span>Filing based on incomplete data</span></li>
                </ul>
                <p className="text-secondary small mb-0 mt-3 pt-3 border-top" style={{ lineHeight: 1.7 }}>
                  {"These issues usually build gradually rather than appearing suddenly."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. VAT SERVICES INCLUDED */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="text-center mb-5">
            <span className="text-brand-orange fw-bold text-uppercase small tracking-wider">Service Scope</span>
            <h3 className="text-brand-dark display-6 fw-bold mt-2" style={{ fontFamily: "'Outfit', sans-serif" }}>
              {"VAT Services Across London and The UK \u2013 What\u2019s Included"}
            </h3>
            <p className="text-secondary mt-2 mb-0">{"Our VAT services cover the full process, not just submission."}</p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="table-responsive rounded-4 shadow-sm border overflow-hidden">
                <table className="table table-hover align-middle mb-0 bg-white">
                  <thead style={{ background: '#1d3c45', color: '#fff' }}>
                    <tr>
                      <th className="py-3 px-4 text-white border-0 fw-bold">Service Area</th>
                      <th className="py-3 px-4 text-white border-0 fw-bold">What It Covers</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-bottom">
                      <td className="py-3 px-4 fw-bold text-brand-dark">VAT Registration</td>
                      <td className="py-3 px-4 text-secondary">Setup and HMRC registration</td>
                    </tr>
                    <tr className="border-bottom" style={{ background: '#fcfcfc' }}>
                      <td className="py-3 px-4 fw-bold text-brand-dark">VAT Returns</td>
                      <td className="py-3 px-4 text-secondary">Preparation and filing</td>
                    </tr>
                    <tr className="border-bottom">
                      <td className="py-3 px-4 fw-bold text-brand-dark">VAT Accounting</td>
                      <td className="py-3 px-4 text-secondary">Ongoing record management</td>
                    </tr>
                    <tr className="border-bottom" style={{ background: '#fcfcfc' }}>
                      <td className="py-3 px-4 fw-bold text-brand-dark">VAT Advice</td>
                      <td className="py-3 px-4 text-secondary">Guidance on VAT treatment</td>
                    </tr>
                    <tr style={{ background: '#fcfcfc' }}>
                      <td className="py-3 px-4 fw-bold text-brand-dark">VAT Corrections</td>
                      <td className="py-3 px-4 text-secondary">Adjustments and resubmissions</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. GROWING BUSINESSES + DEADLINES */}
      <section className="py-5 bg-light border-top border-bottom border-light">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="card h-100 border-0 shadow-sm rounded-4 p-4 bg-white" style={{ borderTop: '4px solid var(--brand-orange)' }}>
                <h4 className="fw-bold mb-3 text-brand-dark" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  {"VAT Specialist Accountants for Growing Businesses"}
                </h4>
                <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>
                  {"As businesses grow, VAT becomes more closely linked to overall tax structure."}
                </p>
                <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>
                  {"It no longer sits separately \u2014 it connects with:"}
                </p>
                <ul className="list-unstyled text-secondary mb-4 d-flex flex-column gap-2">
                  <li className="d-flex align-items-center"><CheckIcon /> <Link href="/taxation/income-tax" className="text-brand-orange text-decoration-none">income tax decisions</Link></li>
                  <li className="d-flex align-items-center"><CheckIcon /> <Link href="/taxation/capital-gains-tax" className="text-brand-orange text-decoration-none">capital gains tax positions</Link></li>
                  <li className="d-flex align-items-center"><CheckIcon /> business structure planning</li>
                </ul>
                <p className="text-secondary mb-0" style={{ lineHeight: 1.8 }}>
                  {"At this stage, working with "}
                  <Link href="/taxation/tax-advisors" className="text-brand-orange text-decoration-none">tax advisory services UK</Link>
                  {" becomes important, especially when VAT starts affecting wider financial decisions."}
                </p>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="card h-100 border-0 shadow-sm rounded-4 p-4 bg-white" style={{ borderTop: '4px solid #1d3c45' }}>
                <h4 className="fw-bold mb-3 text-brand-dark" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  {"Filing VAT Return UK \u2013 Deadlines and Accuracy"}
                </h4>
                <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>
                  {"VAT deadlines are consistent, but they\u2019re often missed due to timing issues rather than complexity."}
                </p>
                <p className="text-secondary mb-2 fw-semibold" style={{ lineHeight: 1.8 }}>{"Typical problems include:"}</p>
                <ul className="list-unstyled text-secondary mb-4 d-flex flex-column gap-2">
                  <li className="d-flex align-items-start"><WarningIcon /> <span>preparing figures too close to deadlines</span></li>
                  <li className="d-flex align-items-start"><WarningIcon /> <span>working from incomplete records</span></li>
                  <li className="d-flex align-items-start"><WarningIcon /> <span>last-minute adjustments</span></li>
                </ul>
                <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>
                  {"This becomes more likely when VAT is handled separately from core accounting processes like "}
                  <Link href="/accounts/statutory-accounts" className="text-brand-orange text-decoration-none">statutory accounts preparation</Link>
                  {"."}
                </p>
                <p className="text-secondary mb-0" style={{ lineHeight: 1.8 }}>
                  {"Keeping everything aligned throughout the year avoids these issues."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. VAT AND PAYROLL */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-7">
              <span className="text-brand-orange fw-bold text-uppercase small tracking-wider">Operational Alignment</span>
              <h2 className="text-brand-dark display-6 fw-bold mt-2 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                {"VAT and Payroll, Expenses, and Business Activity"}
              </h2>
              <p className="text-secondary mb-4 fs-6" style={{ lineHeight: 1.8 }}>
                {"VAT doesn\u2019t operate in isolation. Payments, salaries, and expenses all affect financial reporting \u2014 especially where structured "}
                <Link href="/accounts/payroll-services" className="text-brand-orange text-decoration-none">payroll services UK</Link>
                {" are involved."}
              </p>
              <p className="text-secondary mb-0" style={{ lineHeight: 1.8 }}>
                {"While payroll itself is not subject to VAT, it influences overall financial records, which in turn affect VAT accuracy."}
              </p>
            </div>

            <div className="col-lg-5">
              <div className="p-4 rounded-4 shadow-sm bg-light h-100 border-start border-brand-orange border-4">
                <h5 className="fw-bold text-brand-dark mb-2">Connected records</h5>
                <p className="text-secondary small mb-0" style={{ lineHeight: 1.7 }}>
                  {"Payroll, expenses, and sales all sit in the same financial records. When they are maintained together, VAT figures stay consistent with the rest of the reporting."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. VAT RETURNS ONLINE - CONSISTENT SUBMISSIONS */}
      <section className="py-5 bg-light border-top border-bottom border-light">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-7">
              <span className="text-brand-orange fw-bold text-uppercase small tracking-wider">Consistent Submissions</span>
              <h2 className="text-brand-dark display-6 fw-bold mt-2 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                {"VAT Returns Online \u2013 Keeping Submissions Consistent"}
              </h2>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>{"Online VAT return submissions require:"}</p>
              <ul className="list-unstyled mb-4 d-flex flex-column gap-2 text-secondary">
                <li className="d-flex align-items-center"><CheckIcon /> accurate figures</li>
                <li className="d-flex align-items-center"><CheckIcon /> consistent records</li>
                <li className="d-flex align-items-center"><CheckIcon /> correct VAT treatment</li>
              </ul>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>
                {"The submission process itself is straightforward \u2014 but the preparation behind it is where most errors happen."}
              </p>
              <p className="text-secondary mb-0 fw-semibold text-brand-dark" style={{ lineHeight: 1.8 }}>
                {"This is why VAT accountants focus more on preparation than submission."}
              </p>
            </div>

            <div className="col-lg-5">
              <div className="card border-0 shadow-lg rounded-4 p-4 text-white h-100" style={{ background: '#1d3c45' }}>
                <h4 className="fw-bold mb-3 border-bottom pb-2" style={{ fontFamily: "'Outfit', sans-serif" }}>Preparation before submission</h4>
                <ul className="list-unstyled d-flex flex-column gap-3 mb-0">
                  {[
                    'Figures reconciled to invoices and expenses',
                    'Records checked for completeness',
                    'VAT treatment reviewed before filing'
                  ].map((item, idx) => (
                    <li key={idx} className="d-flex align-items-start gap-3">
                      <div className="bg-brand-orange text-white rounded-circle d-flex align-items-center justify-content-center mt-1" style={{ width: '24px', height: '24px', minWidth: '24px' }}>
                        <i className="fas fa-check" style={{ fontSize: '0.75rem' }}></i>
                      </div>
                      <span style={{ fontSize: '0.95rem' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. WHY BUSINESSES WORK WITH VAT ACCOUNTANTS */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="text-center mb-5">
            <span className="text-brand-orange fw-bold text-uppercase small tracking-wider">Commercial Advantage</span>
            <h3 className="text-brand-dark display-6 fw-bold mt-2" style={{ fontFamily: "'Outfit', sans-serif" }}>
              {"Why Businesses Work with VAT Accountants"}
            </h3>
            <p className="text-secondary mt-2 mb-0">{"Most businesses don\u2019t struggle with VAT because of complexity."}</p>
          </div>

          <div className="row g-4 justify-content-center">
            <div className="col-lg-10">
              <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
                <div className="p-4 text-white" style={{ background: '#1d3c45' }}>
                  <h5 className="fw-bold mb-0">{"They struggle because:"}</h5>
                </div>
                <div className="p-4 bg-white">
                  <ul className="list-unstyled mb-0 d-flex flex-column gap-2 text-secondary" style={{ lineHeight: 1.7 }}>
                    <li className="d-flex align-items-start"><WarningIcon /> <span>{'records aren\u2019t consistent'}</span></li>
                    <li className="d-flex align-items-start"><WarningIcon /> <span>deadlines are too close</span></li>
                    <li className="d-flex align-items-start"><WarningIcon /> <span>{'figures don\u2019t align'}</span></li>
                  </ul>
                </div>
                <div className="p-4 bg-light border-top">
                  <p className="text-secondary mb-0" style={{ lineHeight: 1.8 }}>
                    {"VAT accountants bring structure to the process so everything is handled before submission, not corrected after."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 12. SPEAK TO TAXACCOLEGA */}
      <section className="py-5 bg-light border-top border-bottom border-light">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-7">
              <span className="text-brand-orange fw-bold text-uppercase small tracking-wider">Review Before It Builds</span>
              <h2 className="text-brand-dark display-6 fw-bold mt-2 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                {"Speak to Taxaccolega VAT Accountants London"}
              </h2>
              <p className="text-secondary mb-4" style={{ lineHeight: 1.8 }}>
                {"Where VAT issues build across periods, correcting them later often requires revisiting multiple returns \u2014 not just the current one. If your VAT is starting to feel unclear, it\u2019s usually a sign that things need to be reviewed properly."}
              </p>
              <p className="text-secondary mb-4" style={{ lineHeight: 1.8 }}>
                {"Whether you need help with VAT registration, VAT returns online, VAT accounting, or ongoing VAT services, getting things in order early and timely avoids last-minute pressure. Once VAT returns are submitted based on incorrect figures, correcting them becomes more complex."}
              </p>

              <div className="d-flex flex-wrap gap-3">
                <a href="#contact-section" className="btn btn-brand px-4 py-2">
                  <i className="fas fa-envelope me-2"></i> Speak to a VAT Accountant
                </a>
                <a href="tel:02081270728" className="btn btn-brand-outline px-4 py-2">
                  <i className="fas fa-phone-alt me-2"></i> 020 8127 0728
                </a>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="card border-0 shadow-lg rounded-4 p-4 h-100" style={{ background: '#1d3c45' }}>
                <h4 className="fw-bold mb-3 text-white border-bottom pb-2" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  {"When Exactly You Should Speak to a VAT Accountant"}
                </h4>
                <ul className="list-unstyled d-flex flex-column gap-3 mb-0">
                  {[
                    'When VAT returns start to feel unclear',
                    'When figures don\u2019t match records',
                    'When deadlines create pressure',
                    'When business activity increases'
                  ].map((item, idx) => (
                    <li key={idx} className="d-flex align-items-start gap-3">
                      <div className="bg-brand-orange text-white rounded-circle d-flex align-items-center justify-content-center mt-1" style={{ width: '24px', height: '24px', minWidth: '24px' }}>
                        <i className="fas fa-check" style={{ fontSize: '0.75rem' }}></i>
                      </div>
                      <span className="text-white" style={{ fontSize: '0.95rem' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-5 bg-white border-top">
        <div className="container py-4">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="text-center mb-5">
                <span className="text-uppercase small tracking-wider text-brand-orange fw-bold">Common Questions</span>
                <h3 className="text-brand-dark fw-bold mt-2">{"FAQs on VAT Accountants"}</h3>
              </div>
              <div className="d-flex flex-column gap-3">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="card border-0 shadow-sm rounded-4">
                    <div className="card-body p-4">
                      <div className="d-flex align-items-start gap-3">
                        <div className="bg-brand-light text-brand-orange rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: '36px', height: '36px', minWidth: '36px' }}>
                          <i className="fas fa-question"></i>
                        </div>
                        <div>
                          <h5 className="fw-bold text-brand-dark mb-2" style={{ fontFamily: "'Outfit', sans-serif" }}>{faq.q}</h5>
                          <p className="text-secondary mb-0" style={{ lineHeight: 1.8 }}>{faq.a}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="contact-section" className="py-5 bg-light border-top">
        <ContactForm source="VAT accountants page" />
      </section>

      {(() => { const faqData = faqJsonLd(faqs); return faqData ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} /> : null; })()}
    </div>
  );
}
