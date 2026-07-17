

"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import TaxationLinksBar from '../../components/TaxationLinksBar';
import ContactForm from '../../components/ContactForm';
import FAQItem from '../../components/FAQItem';
import filmImg from '../../assets/taxation-film-tax-relief.png';


export default function FilmTaxRelief() {
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
                {"Film Tax Relief"}
              </h1>
              <p className="lead text-white-50 mb-4" style={{ maxWidth: '680px', fontSize: '1.1rem', lineHeight: 1.6 }}>
                {"Empowering Creativity, Fueling Growth"}
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
                {"We specialise in offering comprehensive support for Film Tax Relief (FTR), tailored for filmmakers and production companies throughout the UK. Our team of industry experts is dedicated to navigating the complexities of FTR to maximise your financial benefits and contribute to the growth of the British film sector."}
              </p>
              
              <p className="text-secondary mb-5" style={{ lineHeight: 1.8 }}>
                {"We begin with thorough consultations to assess your project's eligibility for FTR, strategising the most effective approach to optimise your claim and maximise financial returns. Our team manages the meticulous preparation and timely submission of your FTR application to HMRC, ensuring all required documentation is meticulously compiled and submitted in compliance with regulatory standards. Throughout the production process, we provide continuous support to ensure adherence to FTR regulations, including monitoring expenditures, verifying compliance with qualifying conditions, and maintaining essential records crucial for successful claims."}
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
                src={filmImg} 
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
      
      <section className="py-5 bg-white">
        <div className="container py-4">
          <div className="text-center mb-5">
            <h3 className="fw-bold text-brand-dark mb-3">{"The Benefits Of Hiring An FTR Accountant"}</h3>
            <p className="text-secondary lead mx-auto" style={{ maxWidth: '800px' }}>{"Navigating HMRC's creative industry tax credits requires structured accounting and careful execution."}</p>
          </div>
          <div className="row g-4 justify-content-center">
            
              <div className="col-md-6 col-lg-4">
                <div className="card h-100 border-0 shadow-sm rounded-4 hover-lift" style={{ transition: 'transform 0.3s' }}>
                  <div className="card-body p-4">
                    <div className="bg-brand-light d-inline-flex align-items-center justify-content-center rounded-circle mb-3" style={{ width: '50px', height: '50px' }}>
                      <i className="fas fa-check text-brand-orange"></i>
                    </div>
                    <h5 className="fw-bold text-brand-dark mb-3">{"Eligibility Assessment"}</h5>
                    <p className="text-secondary small mb-0">{"We conduct a thorough assessment of your film project under HMRC guidelines, evaluating key criteria such as cultural significance, British certification, and core expenditure thresholds."}</p>
                  </div>
                </div>
              </div>
            
              <div className="col-md-6 col-lg-4">
                <div className="card h-100 border-0 shadow-sm rounded-4 hover-lift" style={{ transition: 'transform 0.3s' }}>
                  <div className="card-body p-4">
                    <div className="bg-brand-light d-inline-flex align-items-center justify-content-center rounded-circle mb-3" style={{ width: '50px', height: '50px' }}>
                      <i className="fas fa-check text-brand-orange"></i>
                    </div>
                    <h5 className="fw-bold text-brand-dark mb-3">{"Optimisation Strategy"}</h5>
                    <p className="text-secondary small mb-0">{"Based on the eligibility assessment, we develop a tailored strategy to optimise your FTR claim, maximising the financial benefits while maintaining strict compliance with all regulatory requirements."}</p>
                  </div>
                </div>
              </div>
            
              <div className="col-md-6 col-lg-4">
                <div className="card h-100 border-0 shadow-sm rounded-4 hover-lift" style={{ transition: 'transform 0.3s' }}>
                  <div className="card-body p-4">
                    <div className="bg-brand-light d-inline-flex align-items-center justify-content-center rounded-circle mb-3" style={{ width: '50px', height: '50px' }}>
                      <i className="fas fa-check text-brand-orange"></i>
                    </div>
                    <h5 className="fw-bold text-brand-dark mb-3">{"Application Management"}</h5>
                    <p className="text-secondary small mb-0">{"Our team manages the entire process of your FTR application to HMRC, compiling all necessary documentation, ensuring absolute accuracy, and adhering to strict deadlines to facilitate a smooth and timely approval."}</p>
                  </div>
                </div>
              </div>
            
              <div className="col-md-6 col-lg-4">
                <div className="card h-100 border-0 shadow-sm rounded-4 hover-lift" style={{ transition: 'transform 0.3s' }}>
                  <div className="card-body p-4">
                    <div className="bg-brand-light d-inline-flex align-items-center justify-content-center rounded-circle mb-3" style={{ width: '50px', height: '50px' }}>
                      <i className="fas fa-check text-brand-orange"></i>
                    </div>
                    <h5 className="fw-bold text-brand-dark mb-3">{"Expenditure Monitoring"}</h5>
                    <p className="text-secondary small mb-0">{"Throughout the production phase, we provide diligent monitoring of expenditures and activities to verify ongoing compliance, maintaining essential records and documentation to fully substantiate your claim."}</p>
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
                    question={"What is Film Tax Relief (FTR) in the UK?"} 
                    answer={"Film Tax Relief is a UK government tax incentive that allows qualifying film production companies to claim a cash rebate or a reduction in corporation tax based on their core production expenditure."} 
                    isOpen={openFaq === 0}
                    onClick={() => setOpenFaq(openFaq === 0 ? null : 0)}
                  />
                
                  <FAQItem 
                    question={"What qualifies a film as a \"British Film\" for FTR?"} 
                    answer={"A film must either pass the BFI Cultural Test (scoring a minimum number of points for cultural content, contribution, hubs, and practitioners) or be certified as an official co-production under a UK bilateral treaty."} 
                    isOpen={openFaq === 1}
                    onClick={() => setOpenFaq(openFaq === 1 ? null : 1)}
                  />
                
                  <FAQItem 
                    question={"What counts as \"Core Expenditure\" for Film Tax Relief?"} 
                    answer={"Core expenditure includes production costs incurred during pre-production, principal photography, and post-production. It explicitly excludes development costs, distribution, marketing, and financing costs."} 
                    isOpen={openFaq === 2}
                    onClick={() => setOpenFaq(openFaq === 2 ? null : 2)}
                  />
                
                  <FAQItem 
                    question={"How much cash rebate can a film production company claim?"} 
                    answer={"Under the current Audio-Visual Expenditure Credit (AVEC), film production companies can claim an effective credit rate of up to 34% (or 39% for children's television/animation) on qualifying core expenditure."} 
                    isOpen={openFaq === 3}
                    onClick={() => setOpenFaq(openFaq === 3 ? null : 3)}
                  />
                
                  <FAQItem 
                    question={"Can a company claim FTR if it makes a loss?"} 
                    answer={"Yes. If the film production company is loss-making, it can surrender the qualifying loss to HMRC in exchange for a cash payout (surrendered tax credit)."} 
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
