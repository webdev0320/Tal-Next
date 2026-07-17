

"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import TaxationLinksBar from '../../components/TaxationLinksBar';
import ContactForm from '../../components/ContactForm';
import FAQItem from '../../components/FAQItem';
import inheritanceTaxImg from '../../assets/taxation-inheritance-tax.png';


export default function InheritanceTaxPlanning() {
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
                {"Inheritance Tax Planning"}
              </h1>
              <p className="lead text-white-50 mb-4" style={{ maxWidth: '680px', fontSize: '1.1rem', lineHeight: 1.6 }}>
                {"Preserving Your Wealth for Future Generations"}
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
                {"Inheritance Tax (IHT) can significantly erode the value of the estate you pass on to your loved ones. Effective and timely planning is crucial to minimise this burden and ensure your legacy is preserved according to your wishes."}
              </p>
              
              <p className="text-secondary mb-5" style={{ lineHeight: 1.8 }}>
                {"Our specialist Inheritance Tax advisors provide comprehensive and tailored planning advice. We guide you through the complexities of IHT rules, helping you understand available reliefs, exemptions, and strategies such as trusts and lifetime giving, to legally reduce your IHT liability. Our goal is to ensure that your beneficiaries receive the maximum possible inheritance."}
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
                src={inheritanceTaxImg} 
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
              <h3 className="fw-bold text-brand-dark mb-3">{"Challenges in Inheritance Tax Planning"}</h3>
              <h5 className="text-secondary mb-4">{"IHT rules are intricate and often misunderstood, leading to unexpected tax liabilities."}</h5>
              <div className="bg-white p-4 rounded-4 shadow-sm text-start border-start border-4 border-danger">
                <p className="mb-3 text-secondary">{"Many individuals are unaware of the various ways their estate could be subject to IHT, or they miss opportunities to plan effectively. This can result in a significant portion of their wealth being paid in tax rather than benefiting their family."}</p>
                <ul className="list-unstyled mb-4">
                  
                    <li className="mb-2 d-flex align-items-start">
                      <i className="fas fa-exclamation-triangle text-danger mt-1 me-3"></i>
                      <span className="text-secondary">{"Understanding the Nil-Rate Band and Residence Nil-Rate Band"}</span>
                    </li>
                  
                    <li className="mb-2 d-flex align-items-start">
                      <i className="fas fa-exclamation-triangle text-danger mt-1 me-3"></i>
                      <span className="text-secondary">{"Effective use of gifts and exemptions (e.g., annual exemption, normal expenditure out of income)"}</span>
                    </li>
                  
                    <li className="mb-2 d-flex align-items-start">
                      <i className="fas fa-exclamation-triangle text-danger mt-1 me-3"></i>
                      <span className="text-secondary">{"The complexities of different types of trusts (e.g., discretionary, bare, interest in possession)"}</span>
                    </li>
                  
                    <li className="mb-2 d-flex align-items-start">
                      <i className="fas fa-exclamation-triangle text-danger mt-1 me-3"></i>
                      <span className="text-secondary">{"Planning for business property relief (BPR) and agricultural property relief (APR)"}</span>
                    </li>
                  
                    <li className="mb-2 d-flex align-items-start">
                      <i className="fas fa-exclamation-triangle text-danger mt-1 me-3"></i>
                      <span className="text-secondary">{"Addressing overseas assets, domicile status, and international implications"}</span>
                    </li>
                  
                    <li className="mb-2 d-flex align-items-start">
                      <i className="fas fa-exclamation-triangle text-danger mt-1 me-3"></i>
                      <span className="text-secondary">{"Reviewing wills and ensuring they align with IHT planning objectives"}</span>
                    </li>
                  
                </ul>
                <p className="mb-0 fw-bold text-brand-dark small p-3 bg-light rounded">{"Proactive and expert Inheritance Tax planning is not merely about tax avoidance; it's about responsible wealth management and ensuring your intentions for your estate are realised, protecting your family's future."}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-white">
        <div className="container py-4">
          <div className="text-center mb-5">
            <h3 className="fw-bold text-brand-dark mb-3">{"Our Comprehensive IHT Planning Services"}</h3>
            <p className="text-secondary lead mx-auto" style={{ maxWidth: '800px' }}>{"We offer a holistic approach to Inheritance Tax planning, providing peace of mind and financial security for your family."}</p>
          </div>
          <div className="row g-4 justify-content-center">
            
              <div className="col-md-6 col-lg-4">
                <div className="card h-100 border-0 shadow-sm rounded-4 hover-lift" style={{ transition: 'transform 0.3s' }}>
                  <div className="card-body p-4">
                    <div className="bg-brand-light d-inline-flex align-items-center justify-content-center rounded-circle mb-3" style={{ width: '50px', height: '50px' }}>
                      <i className="fas fa-check text-brand-orange"></i>
                    </div>
                    <h5 className="fw-bold text-brand-dark mb-3">{"Estate Review & Valuation"}</h5>
                    <p className="text-secondary small mb-0">{"A thorough analysis of your assets, liabilities, and current will to assess potential IHT exposure."}</p>
                  </div>
                </div>
              </div>
            
              <div className="col-md-6 col-lg-4">
                <div className="card h-100 border-0 shadow-sm rounded-4 hover-lift" style={{ transition: 'transform 0.3s' }}>
                  <div className="card-body p-4">
                    <div className="bg-brand-light d-inline-flex align-items-center justify-content-center rounded-circle mb-3" style={{ width: '50px', height: '50px' }}>
                      <i className="fas fa-check text-brand-orange"></i>
                    </div>
                    <h5 className="fw-bold text-brand-dark mb-3">{"Tax-Efficient Gifting Strategies"}</h5>
                    <p className="text-secondary small mb-0">{"Advising on making lifetime gifts, utilising exemptions, and navigating the 7-year rule to reduce your estate for IHT."}</p>
                  </div>
                </div>
              </div>
            
              <div className="col-md-6 col-lg-4">
                <div className="card h-100 border-0 shadow-sm rounded-4 hover-lift" style={{ transition: 'transform 0.3s' }}>
                  <div className="card-body p-4">
                    <div className="bg-brand-light d-inline-flex align-items-center justify-content-center rounded-circle mb-3" style={{ width: '50px', height: '50px' }}>
                      <i className="fas fa-check text-brand-orange"></i>
                    </div>
                    <h5 className="fw-bold text-brand-dark mb-3">{"Trust Creation & Management"}</h5>
                    <p className="text-secondary small mb-0">{"Guidance on establishing suitable trusts (e.g., bare, discretionary) to protect assets and control their distribution."}</p>
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
                    question={"What is Inheritance Tax (IHT)?"} 
                    answer={"Inheritance Tax is a tax on the value of a person's estate (their property, money, and possessions) when they die. It can also be charged on certain gifts made during their lifetime."} 
                    isOpen={openFaq === 0}
                    onClick={() => setOpenFaq(openFaq === 0 ? null : 0)}
                  />
                
                  <FAQItem 
                    question={"What is the IHT Nil-Rate Band?"} 
                    answer={"The Nil-Rate Band (NRB) is the threshold up to which an estate pays no IHT. For the 2024/25 tax year, this is £325,000. Any unused NRB can often be transferred to a surviving spouse or civil partner."} 
                    isOpen={openFaq === 1}
                    onClick={() => setOpenFaq(openFaq === 1 ? null : 1)}
                  />
                
                  <FAQItem 
                    question={"What is the Residence Nil-Rate Band (RNRB)?"} 
                    answer={"The Residence Nil-Rate Band is an additional IHT allowance available when a main residence is passed to direct descendants (children, grandchildren, etc.). For 2024/25, this is £175,000 per individual."} 
                    isOpen={openFaq === 2}
                    onClick={() => setOpenFaq(openFaq === 2 ? null : 2)}
                  />
                
                  <FAQItem 
                    question={"How do gifts affect Inheritance Tax?"} 
                    answer={"Gifts made more than 7 years before death are generally exempt from IHT. Gifts made within 7 years may be subject to IHT, with the tax reducing on a sliding scale (taper relief) after 3 years."} 
                    isOpen={openFaq === 3}
                    onClick={() => setOpenFaq(openFaq === 3 ? null : 3)}
                  />
                
                  <FAQItem 
                    question={"Can I use a trust to reduce IHT?"} 
                    answer={"Yes, trusts can be an effective tool for IHT planning, allowing you to legally remove assets from your estate while retaining some control or specifying how they are to be used. The rules surrounding trusts are complex, and professional advice is essential."} 
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
