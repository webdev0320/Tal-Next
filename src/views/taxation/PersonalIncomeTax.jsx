

"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import TaxationLinksBar from '../../components/TaxationLinksBar';
import ContactForm from '../../components/ContactForm';
import FAQItem from '../../components/FAQItem';
import personalIncomeImg from '../../assets/taxation-personal-income-tax-professionals-and-chartered-accountants.png';


export default function PersonalIncomeTax() {
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
                {"Personal Income Tax"}
              </h1>
              <p className="lead text-white-50 mb-4" style={{ maxWidth: '680px', fontSize: '1.1rem', lineHeight: 1.6 }}>
                {"Expert Personal Income Tax Accountants"}
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
                {"Income tax problems usually begin long before the tax return is filed. Very few people wake up one morning and realise their tax position has become complicated. It happens gradually: a director starts taking dividends alongside salary, a rental property starts generating profit, or freelance work slowly grows into a regular business."}
              </p>
              
              <p className="text-secondary mb-5" style={{ lineHeight: 1.8 }}>
                {"Nothing feels especially serious while each part is happening individually. The problem appears later when all of it has to be brought together. That is the point where people notice that income tax is not simply about earnings; it is about how different sources interact, allowances, and structures. Taxaccolega supports individuals, company directors, landlords, and business owners across London and the UK with comprehensive personal income tax returns, structuring, and strategic tax planning."}
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
                src={personalIncomeImg} 
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
              <h3 className="fw-bold text-brand-dark mb-3">{"Income Tax for Complex and Multi-Source Income"}</h3>
              <h5 className="text-secondary mb-4">{"PAYE employment is straightforward, but multi-source income requires professional care."}</h5>
              <div className="bg-white p-4 rounded-4 shadow-sm text-start border-start border-4 border-danger">
                <p className="mb-3 text-secondary">{"When income starts arriving from several directions, the UK tax position changes completely. Different types of income follow entirely different rules and interact with tax bands, allowances, and reporting obligations."}</p>
                <ul className="list-unstyled mb-4">
                  
                    <li className="mb-2 d-flex align-items-start">
                      <i className="fas fa-exclamation-triangle text-danger mt-1 me-3"></i>
                      <span className="text-secondary">{"Directors taking a combination of salary, dividends, and loans"}</span>
                    </li>
                  
                    <li className="mb-2 d-flex align-items-start">
                      <i className="fas fa-exclamation-triangle text-danger mt-1 me-3"></i>
                      <span className="text-secondary">{"Self-employed sole traders and freelancers navigating allowable business expenses"}</span>
                    </li>
                  
                    <li className="mb-2 d-flex align-items-start">
                      <i className="fas fa-exclamation-triangle text-danger mt-1 me-3"></i>
                      <span className="text-secondary">{"Landlords managing rental portfolios and interest deductions"}</span>
                    </li>
                  
                    <li className="mb-2 d-flex align-items-start">
                      <i className="fas fa-exclamation-triangle text-danger mt-1 me-3"></i>
                      <span className="text-secondary">{"Individuals receiving investment dividends and capital gains"}</span>
                    </li>
                  
                    <li className="mb-2 d-flex align-items-start">
                      <i className="fas fa-exclamation-triangle text-danger mt-1 me-3"></i>
                      <span className="text-secondary">{"Consultants and professionals with dual employment or side businesses"}</span>
                    </li>
                  
                    <li className="mb-2 d-flex align-items-start">
                      <i className="fas fa-exclamation-triangle text-danger mt-1 me-3"></i>
                      <span className="text-secondary">{"High earners losing their personal allowance over the £100,000 threshold"}</span>
                    </li>
                  
                    <li className="mb-2 d-flex align-items-start">
                      <i className="fas fa-exclamation-triangle text-danger mt-1 me-3"></i>
                      <span className="text-secondary">{"Expatriates and non-UK residents with overseas income and international assets"}</span>
                    </li>
                  
                </ul>
                <p className="mb-0 fw-bold text-brand-dark small p-3 bg-light rounded">{"A personal income tax accountant does not simply calculate tax after the year ends. The real value comes from identifying how your income flows, where tax inefficiencies exist, and establishing a structured, compliant personal tax plan."}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-white">
        <div className="container py-4">
          <div className="text-center mb-5">
            <h3 className="fw-bold text-brand-dark mb-3">{"Who We Assist with Personal Income Tax"}</h3>
            <p className="text-secondary lead mx-auto" style={{ maxWidth: '800px' }}>{"We provide specialized support tailored to your unique financial situation."}</p>
          </div>
          <div className="row g-4 justify-content-center">
            
              <div className="col-md-6 col-lg-4">
                <div className="card h-100 border-0 shadow-sm rounded-4 hover-lift" style={{ transition: 'transform 0.3s' }}>
                  <div className="card-body p-4">
                    <div className="bg-brand-light d-inline-flex align-items-center justify-content-center rounded-circle mb-3" style={{ width: '50px', height: '50px' }}>
                      <i className="fas fa-check text-brand-orange"></i>
                    </div>
                    <h5 className="fw-bold text-brand-dark mb-3">{"Company Directors"}</h5>
                    <p className="text-secondary small mb-0">{"Optimising the balance between salary, dividends, and director loans to ensure maximum tax efficiency and fully compliant withdrawals."}</p>
                  </div>
                </div>
              </div>
            
              <div className="col-md-6 col-lg-4">
                <div className="card h-100 border-0 shadow-sm rounded-4 hover-lift" style={{ transition: 'transform 0.3s' }}>
                  <div className="card-body p-4">
                    <div className="bg-brand-light d-inline-flex align-items-center justify-content-center rounded-circle mb-3" style={{ width: '50px', height: '50px' }}>
                      <i className="fas fa-check text-brand-orange"></i>
                    </div>
                    <h5 className="fw-bold text-brand-dark mb-3">{"High Earners & Professionals"}</h5>
                    <p className="text-secondary small mb-0">{"Helping individuals with income over £100k navigate the tapering of the personal allowance, pension contributions, and annual tax-free allowances."}</p>
                  </div>
                </div>
              </div>
            
              <div className="col-md-6 col-lg-4">
                <div className="card h-100 border-0 shadow-sm rounded-4 hover-lift" style={{ transition: 'transform 0.3s' }}>
                  <div className="card-body p-4">
                    <div className="bg-brand-light d-inline-flex align-items-center justify-content-center rounded-circle mb-3" style={{ width: '50px', height: '50px' }}>
                      <i className="fas fa-check text-brand-orange"></i>
                    </div>
                    <h5 className="fw-bold text-brand-dark mb-3">{"Sole Traders & Freelancers"}</h5>
                    <p className="text-secondary small mb-0">{"Preparing annual Self Assessment returns, calculating allowable business expenses, and managing Payment on Account obligations."}</p>
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
                    question={"Who needs to file a UK Self Assessment tax return?"} 
                    answer={"You must file a tax return if you are self-employed with earnings over £1,000, a director of a limited company, have rental income, have income over £100,000, or have undisclosed foreign income."} 
                    isOpen={openFaq === 0}
                    onClick={() => setOpenFaq(openFaq === 0 ? null : 0)}
                  />
                
                  <FAQItem 
                    question={"How are dividends taxed in the UK?"} 
                    answer={"Dividends have their own tax-free allowance (£500 for the 24/25 tax year). Above this allowance, they are taxed at dividend tax rates (8.75% for basic rate, 33.75% for higher rate, and 39.35% for additional rate taxpayers)."} 
                    isOpen={openFaq === 1}
                    onClick={() => setOpenFaq(openFaq === 1 ? null : 1)}
                  />
                
                  <FAQItem 
                    question={"What is the Personal Savings Allowance?"} 
                    answer={"The Personal Savings Allowance allows basic rate taxpayers to earn up to £1,000 in savings interest tax-free. Higher rate taxpayers have an allowance of £500, while additional rate taxpayers have no allowance."} 
                    isOpen={openFaq === 2}
                    onClick={() => setOpenFaq(openFaq === 2 ? null : 2)}
                  />
                
                  <FAQItem 
                    question={"Can I claim expenses if I work from home as a sole trader?"} 
                    answer={"Yes. You can either claim a proportion of your actual home utility bills based on the hours worked or use HMRC's simplified flat-rate expenses for working from home."} 
                    isOpen={openFaq === 3}
                    onClick={() => setOpenFaq(openFaq === 3 ? null : 3)}
                  />
                
                  <FAQItem 
                    question={"What happens if I miss the Self Assessment filing deadline?"} 
                    answer={"Missing the January 31st online deadline results in an immediate £100 penalty. After 3 months, daily penalties of £10 are charged. Interest also accrues on any unpaid tax liabilities from the due date."} 
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
