

"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import TaxationLinksBar from '../../components/TaxationLinksBar';
import ContactForm from '../../components/ContactForm';
import FAQItem from '../../components/FAQItem';
import vatAccountantsImg from '../../assets/taxation-vat-accountants.png';


export default function VatAccountants() {
  const [openFaq, setOpenFaq] = useState(null);
  const [showMockup, setShowMockup] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <TaxationLinksBar />

      {/* ── HERO SECTION ── */}
      <header className="position-relative text-white overflow-hidden py-5" style={{ background: 'linear-gradient(135deg, #1d3c45 0%, #11252b 100%)', minHeight: '380px' }}>
        <div className="position-absolute w-100 h-100" style={{ backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(210, 96, 26, 0.15) 0%, transparent 60%)', top: 0, left: 0, zIndex: 1 }}></div>
        <div className="container position-relative py-4" style={{ zIndex: 2 }}>
          <div className="row g-4 align-items-center">
            <div className="col-lg-8 text-center text-lg-start">
              <span className="text-uppercase small tracking-wider fw-bold mb-2 d-inline-block text-brand-orange" style={{ letterSpacing: '2px' }}>
                Corporate Tax Specialists
              </span>
              <h1 className="display-4 fw-bold text-white mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>
                {"VAT Accountants UK"}
              </h1>
              <p className="lead text-white-50 mb-4" style={{ maxWidth: '680px', fontSize: '1.1rem', lineHeight: 1.6 }}>
                {"Your Expert Partner for Seamless VAT Returns and Compliance"}
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* ── 2. HERO CONTENT SPLIT ── */}
      <section className="py-5 border-bottom bg-white">
        <div className="container py-3">
          <div className="row g-5">
            <div className="col-lg-7">
              <div className="d-flex align-items-center gap-3 mb-4">
                <div className="bg-brand-light p-3 rounded-circle text-brand-orange">
                  <i className="fas fa-chart-line fa-xl"></i>
                </div>
                <h3 className="fw-bold text-brand-dark mb-0 m-0">The Complete Solution</h3>
              </div>
              
              <p className="lead text-secondary mb-4" style={{ lineHeight: 1.8 }}>
                {"Navigating Value Added Tax (VAT) can be a complex and time-consuming task for businesses. Our dedicated VAT accountants ensure your business remains fully compliant with HMRC regulations, helping you avoid penalties and streamline your financial operations."}
              </p>
              
              <p className="text-secondary mb-5" style={{ lineHeight: 1.8 }}>
                {"From initial VAT registration and choosing the most suitable scheme to accurate preparation and timely submission of your VAT returns, we handle all aspects of your VAT obligations. We provide expert advice on complex VAT issues, optimize your processes, and identify potential savings, allowing you to focus on your core business activities."}
              </p>
              
              <div className="p-4 border-start border-brand-orange border-4 bg-light rounded-e-3 mb-4">
                <h5 className="fw-bold text-brand-dark mb-2">Our Strategic Approach</h5>
                <p className="text-secondary mb-0 small" style={{ lineHeight: 1.6 }}>
                  We work closely with you to examine transaction histories, map corporate/personal bands, reconstruct details, and generate standard compliance packets that satisfy HMRC guidelines.
                </p>
              </div>

              <div className="d-flex flex-wrap gap-3">
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
                <p className="text-white-50 mb-4 small">Tax and disclosure deadlines can arise quickly. Speak directly to an expert tax advisor today.</p>
                
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

      {/* ── 3. Toggleable Figma Mockup Display ── */}
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

      {/* ── 4. Dynamic Responsive Custom Sections ── */}
      
      <section className="py-5 bg-light border-top border-bottom">
        <div className="container py-4">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <span className="badge bg-danger mb-3 px-3 py-2 rounded-pill fw-normal tracking-wider">CRITICAL CONSIDERATION</span>
              <h3 className="fw-bold text-brand-dark mb-3">{"Common VAT Challenges"}</h3>
              <h5 className="text-secondary mb-4">{"VAT rules are intricate and constantly evolving, demanding meticulous attention to detail."}</h5>
              <div className="bg-white p-4 rounded-4 shadow-sm text-start border-start border-4 border-danger">
                <p className="mb-3 text-secondary">{"Many businesses, especially those with diverse operations or international dealings, find VAT compliance particularly challenging. Misinterpretations or errors can lead to significant financial repercussions and disputes with HMRC."}</p>
                <ul className="list-unstyled mb-4">
                  
                    <li className="mb-2 d-flex align-items-start">
                      <i className="fas fa-exclamation-triangle text-danger mt-1 me-3"></i>
                      <span className="text-secondary">{"Understanding VAT registration thresholds and obligations"}</span>
                    </li>
                  
                    <li className="mb-2 d-flex align-items-start">
                      <i className="fas fa-exclamation-triangle text-danger mt-1 me-3"></i>
                      <span className="text-secondary">{"Applying correct VAT rates to a variety of goods and services"}</span>
                    </li>
                  
                    <li className="mb-2 d-flex align-items-start">
                      <i className="fas fa-exclamation-triangle text-danger mt-1 me-3"></i>
                      <span className="text-secondary">{"Managing international VAT implications (imports, exports, reverse charge)"}</span>
                    </li>
                  
                    <li className="mb-2 d-flex align-items-start">
                      <i className="fas fa-exclamation-triangle text-danger mt-1 me-3"></i>
                      <span className="text-secondary">{"Navigating industry-specific VAT schemes and partial exemption rules"}</span>
                    </li>
                  
                    <li className="mb-2 d-flex align-items-start">
                      <i className="fas fa-exclamation-triangle text-danger mt-1 me-3"></i>
                      <span className="text-secondary">{"Accurate record-keeping and digital submission requirements"}</span>
                    </li>
                  
                    <li className="mb-2 d-flex align-items-start">
                      <i className="fas fa-exclamation-triangle text-danger mt-1 me-3"></i>
                      <span className="text-secondary">{"Dealing with VAT inspections and HMRC enquiries"}</span>
                    </li>
                  
                </ul>
                <p className="mb-0 fw-bold text-brand-dark small p-3 bg-light rounded">{"Given the potential for substantial penalties for non-compliance, entrusting your VAT affairs to expert accountants is not just a convenience, but a strategic business decision to safeguard your finances."}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-white">
        <div className="container py-4">
          <div className="text-center mb-5">
            <h3 className="fw-bold text-brand-dark mb-3">{"Our Comprehensive VAT Services"}</h3>
            <p className="text-secondary lead mx-auto" style={{ maxWidth: '800px' }}>{"We offer a full suite of VAT accounting services designed to simplify your compliance and optimize your financial position."}</p>
          </div>
          <div className="row g-4 justify-content-center">
            
              <div className="col-md-6 col-lg-4">
                <div className="card h-100 border-0 shadow-sm rounded-4 hover-lift" style={{ transition: 'transform 0.3s' }}>
                  <div className="card-body p-4">
                    <div className="bg-brand-light d-inline-flex align-items-center justify-content-center rounded-circle mb-3" style={{ width: '50px', height: '50px' }}>
                      <i className="fas fa-check text-brand-orange"></i>
                    </div>
                    <h5 className="fw-bold text-brand-dark mb-3">{"VAT Registration & De-registration"}</h5>
                    <p className="text-secondary small mb-0">{"Assisting with initial registration, advising on voluntary registration, and handling de-registration processes."}</p>
                  </div>
                </div>
              </div>
            
              <div className="col-md-6 col-lg-4">
                <div className="card h-100 border-0 shadow-sm rounded-4 hover-lift" style={{ transition: 'transform 0.3s' }}>
                  <div className="card-body p-4">
                    <div className="bg-brand-light d-inline-flex align-items-center justify-content-center rounded-circle mb-3" style={{ width: '50px', height: '50px' }}>
                      <i className="fas fa-check text-brand-orange"></i>
                    </div>
                    <h5 className="fw-bold text-brand-dark mb-3">{"VAT Return Preparation & Submission"}</h5>
                    <p className="text-secondary small mb-0">{"Accurate and timely compilation and digital submission of your periodic VAT returns to HMRC."}</p>
                  </div>
                </div>
              </div>
            
              <div className="col-md-6 col-lg-4">
                <div className="card h-100 border-0 shadow-sm rounded-4 hover-lift" style={{ transition: 'transform 0.3s' }}>
                  <div className="card-body p-4">
                    <div className="bg-brand-light d-inline-flex align-items-center justify-content-center rounded-circle mb-3" style={{ width: '50px', height: '50px' }}>
                      <i className="fas fa-check text-brand-orange"></i>
                    </div>
                    <h5 className="fw-bold text-brand-dark mb-3">{"VAT Planning & Advisory"}</h5>
                    <p className="text-secondary small mb-0">{"Expert guidance on complex VAT issues, scheme optimization, and strategic tax planning to minimize liabilities."}</p>
                  </div>
                </div>
              </div>
            
          </div>
        </div>
      </section>


      {/* ── 5. FAQs ── */}
      
      <section className="py-5 bg-light border-top">
        <div className="container py-4">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="text-center mb-5">
                <span className="text-uppercase small tracking-wider text-brand-orange fw-bold">Common Questions</span>
                <h3 className="text-brand-dark fw-bold mt-2">Frequently Asked Questions</h3>
              </div>
              <div className="accordion custom-accordion shadow-sm rounded-4 overflow-hidden" id="faqAccordion">
                
                  <FAQItem 
                    question={"Who needs to register for VAT in the UK?"} 
                    answer={"You must register for VAT if your VAT taxable turnover exceeds the current registration threshold (currently £90,000) within a 12-month period, or if you expect to exceed it in the next 30 days."} 
                    isOpen={openFaq === 0}
                    onClick={() => setOpenFaq(openFaq === 0 ? null : 0)}
                  />
                
                  <FAQItem 
                    question={"What is 'Making Tax Digital for VAT'?"} 
                    answer={"Making Tax Digital (MTD) for VAT requires most VAT-registered businesses to keep digital records and submit their VAT returns using MTD-compatible software."} 
                    isOpen={openFaq === 1}
                    onClick={() => setOpenFaq(openFaq === 1 ? null : 1)}
                  />
                
                  <FAQItem 
                    question={"Can I reclaim VAT on all business expenses?"} 
                    answer={"Generally, you can reclaim VAT on most goods and services purchased for business use, provided you have valid VAT invoices. However, there are exceptions, such as certain business entertainment expenses and cars."} 
                    isOpen={openFaq === 2}
                    onClick={() => setOpenFaq(openFaq === 2 ? null : 2)}
                  />
                
                  <FAQItem 
                    question={"What are the different VAT schemes available?"} 
                    answer={"HMRC offers various VAT schemes, including the Standard Accounting Scheme, Cash Accounting Scheme, Flat Rate Scheme, and Annual Accounting Scheme, each suited to different business types and sizes."} 
                    isOpen={openFaq === 3}
                    onClick={() => setOpenFaq(openFaq === 3 ? null : 3)}
                  />
                
                  <FAQItem 
                    question={"What happens if I submit my VAT return late?"} 
                    answer={"Late submission of VAT returns can result in penalties from HMRC. The penalty system is points-based, with charges increasing for repeated late submissions. Interest may also be charged on overdue payments."} 
                    isOpen={openFaq === 4}
                    onClick={() => setOpenFaq(openFaq === 4 ? null : 4)}
                  />
                
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ── 6. Form Section ── */}
      <section id="contact-section" className="py-5 bg-white">
        <div className="container py-4">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="card border-0 shadow-lg rounded-4 overflow-hidden">
                <div className="row g-0">
                  <div className="col-md-5 bg-brand text-white p-5 d-flex flex-column justify-content-center" style={{ background: '#1d3c45' }}>
                    <h3 className="fw-bold mb-4">Request a Callback</h3>
                    <p className="mb-4 text-white-50">Provide your details and one of our chartered accountants will contact you to discuss your specific requirements.</p>
                    <ul className="list-unstyled mb-0">
                      <li className="mb-3 d-flex align-items-center gap-3">
                        <i className="fas fa-check-circle text-brand-orange"></i> Free initial consultation
                      </li>
                      <li className="mb-3 d-flex align-items-center gap-3">
                        <i className="fas fa-check-circle text-brand-orange"></i> Confidential advice
                      </li>
                      <li className="d-flex align-items-center gap-3">
                        <i className="fas fa-check-circle text-brand-orange"></i> No obligation quote
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-7 p-5 bg-white">
                    <ContactForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
