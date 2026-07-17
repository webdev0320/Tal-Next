

"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import TaxationLinksBar from '../../components/TaxationLinksBar';
import ContactForm from '../../components/ContactForm';
import FAQItem from '../../components/FAQItem';
import cryptoImg from '../../assets/taxation-cryptocurrency.png';


export default function Cryptocurrency() {
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
                {"Cryptocurrency Taxation"}
              </h1>
              <p className="lead text-white-50 mb-4" style={{ maxWidth: '680px', fontSize: '1.1rem', lineHeight: 1.6 }}>
                {"Confidently navigate cryptocurrency with Taxaccolega’s expertise"}
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
                {"Crypto investors seldom realise the tax problem when the profit happens. They usually realise it later, sometimes months or even years later, after moving funds between wallets or converting one token into another without cashing out a single pound."}
              </p>
              
              <p className="text-secondary mb-5" style={{ lineHeight: 1.8 }}>
                {"Throughout that entire period, cryptocurrency activity rarely feels connected to normal taxation. However, HMRC does not see crypto as detached. In many situations, UK tax obligations begin long before money is ever withdrawn into a bank account. At Taxaccolega, we help individuals and businesses across London and the UK understand how crypto tax actually works in practice — not just theoretically, but in relation to real transaction histories, fragmented records, and HMRC reporting."}
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
                src={cryptoImg} 
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
              <h3 className="fw-bold text-brand-dark mb-3">{"Why Crypto Becomes Difficult to Report"}</h3>
              <h5 className="text-secondary mb-4">{"The technical side of cryptocurrency often moves faster than the reporting side."}</h5>
              <div className="bg-white p-4 rounded-4 shadow-sm text-start border-start border-4 border-danger">
                <p className="mb-3 text-secondary">{"People focus on markets, pricing, timing, and volatility rather than transaction reconstruction or future tax reporting. By the time gains become significant or HMRC letters arrive, the transaction trail is rarely simple."}</p>
                <ul className="list-unstyled mb-4">
                  
                    <li className="mb-2 d-flex align-items-start">
                      <i className="fas fa-exclamation-triangle text-danger mt-1 me-3"></i>
                      <span className="text-secondary">{"Moved assets across multiple exchanges and offshore platforms"}</span>
                    </li>
                  
                    <li className="mb-2 d-flex align-items-start">
                      <i className="fas fa-exclamation-triangle text-danger mt-1 me-3"></i>
                      <span className="text-secondary">{"Transferred tokens between personal or decentralised wallets"}</span>
                    </li>
                  
                    <li className="mb-2 d-flex align-items-start">
                      <i className="fas fa-exclamation-triangle text-danger mt-1 me-3"></i>
                      <span className="text-secondary">{"Used decentralised finance (DeFi) platforms and liquidity pools"}</span>
                    </li>
                  
                    <li className="mb-2 d-flex align-items-start">
                      <i className="fas fa-exclamation-triangle text-danger mt-1 me-3"></i>
                      <span className="text-secondary">{"Received staking rewards, mining income, or airdrops"}</span>
                    </li>
                  
                    <li className="mb-2 d-flex align-items-start">
                      <i className="fas fa-exclamation-triangle text-danger mt-1 me-3"></i>
                      <span className="text-secondary">{"Swapped or traded tokens without converting to GBP"}</span>
                    </li>
                  
                    <li className="mb-2 d-flex align-items-start">
                      <i className="fas fa-exclamation-triangle text-danger mt-1 me-3"></i>
                      <span className="text-secondary">{"Lost access to historic exchange transaction data or account keys"}</span>
                    </li>
                  
                    <li className="mb-2 d-flex align-items-start">
                      <i className="fas fa-exclamation-triangle text-danger mt-1 me-3"></i>
                      <span className="text-secondary">{"Mixed personal investment and business trading activity together"}</span>
                    </li>
                  
                </ul>
                <p className="mb-0 fw-bold text-brand-dark small p-3 bg-light rounded">{"The result is that cryptocurrency taxes stop being about \"one gain\" and become a reconstruction exercise. This is where generic crypto calculators and software tools start falling short: they process raw data but cannot always apply HMRC's specific rules to unusual patterns or incomplete records."}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-white">
        <div className="container py-4">
          <div className="text-center mb-5">
            <h3 className="fw-bold text-brand-dark mb-3">{"How HMRC Views Cryptocurrency and Taxes"}</h3>
            <p className="text-secondary lead mx-auto" style={{ maxWidth: '800px' }}>{"One of the biggest misunderstandings surrounding tax on cryptocurrency UK issues is the belief that tax only applies when profits are cashed out into pounds."}</p>
          </div>
          <div className="row g-4 justify-content-center">
            
              <div className="col-md-6 col-lg-4">
                <div className="card h-100 border-0 shadow-sm rounded-4 hover-lift" style={{ transition: 'transform 0.3s' }}>
                  <div className="card-body p-4">
                    <div className="bg-brand-light d-inline-flex align-items-center justify-content-center rounded-circle mb-3" style={{ width: '50px', height: '50px' }}>
                      <i className="fas fa-check text-brand-orange"></i>
                    </div>
                    <h5 className="fw-bold text-brand-dark mb-3">{"Disposals & Capital Gains"}</h5>
                    <p className="text-secondary small mb-0">{"A disposal occurs through selling, swapping one token for another, gifting, or spending assets. This creates a Capital Gains Tax (CGT) liability without ever cashing out to a bank account."}</p>
                  </div>
                </div>
              </div>
            
              <div className="col-md-6 col-lg-4">
                <div className="card h-100 border-0 shadow-sm rounded-4 hover-lift" style={{ transition: 'transform 0.3s' }}>
                  <div className="card-body p-4">
                    <div className="bg-brand-light d-inline-flex align-items-center justify-content-center rounded-circle mb-3" style={{ width: '50px', height: '50px' }}>
                      <i className="fas fa-check text-brand-orange"></i>
                    </div>
                    <h5 className="fw-bold text-brand-dark mb-3">{"Staking & Staking Income"}</h5>
                    <p className="text-secondary small mb-0">{"Staking rewards, mining, and token receipts are typically classified as Income Tax events upon receipt, and are subject to Capital Gains Tax when subsequently disposed of."}</p>
                  </div>
                </div>
              </div>
            
              <div className="col-md-6 col-lg-4">
                <div className="card h-100 border-0 shadow-sm rounded-4 hover-lift" style={{ transition: 'transform 0.3s' }}>
                  <div className="card-body p-4">
                    <div className="bg-brand-light d-inline-flex align-items-center justify-content-center rounded-circle mb-3" style={{ width: '50px', height: '50px' }}>
                      <i className="fas fa-check text-brand-orange"></i>
                    </div>
                    <h5 className="fw-bold text-brand-dark mb-3">{"Corporation Tax on Crypto"}</h5>
                    <p className="text-secondary small mb-0">{"If a company holds cryptocurrency as treasury assets or uses it for business transactions, it is subject to corporation tax, custom statutory accounting, and strict valuation rules."}</p>
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
                    question={"Do you have to pay tax on cryptocurrency in the UK?"} 
                    answer={"Yes. HMRC does not treat cryptocurrency as currency or money, but as assets. Depending on your activity (trading, mining, swapping, staking), you may be liable for Capital Gains Tax, Income Tax, or Corporation Tax."} 
                    isOpen={openFaq === 0}
                    onClick={() => setOpenFaq(openFaq === 0 ? null : 0)}
                  />
                
                  <FAQItem 
                    question={"Is cryptocurrency taxed even if I did not withdraw money?"} 
                    answer={"Yes. Swapping one cryptocurrency for another (e.g. Bitcoin to Ethereum) or using crypto to purchase goods is treated as a disposal for Capital Gains Tax. You do not need to convert to GBP for a tax liability to arise."} 
                    isOpen={openFaq === 1}
                    onClick={() => setOpenFaq(openFaq === 1 ? null : 1)}
                  />
                
                  <FAQItem 
                    question={"How is cryptocurrency taxed in the UK?"} 
                    answer={"If you hold cryptocurrency as a personal investment, you will pay Capital Gains Tax on any gains above your annual tax-free allowance when you dispose of it. If you are treated as a professional trader, or receive crypto as payment, mining, or staking, it is subject to Income Tax."} 
                    isOpen={openFaq === 2}
                    onClick={() => setOpenFaq(openFaq === 2 ? null : 2)}
                  />
                
                  <FAQItem 
                    question={"Can HMRC track cryptocurrency transactions?"} 
                    answer={"Yes. HMRC works closely with major crypto exchanges (including Coinbase, Binance, and others) and receives transaction reports containing UK user details. They also use sophisticated blockchain analytics software to trace wallet transactions."} 
                    isOpen={openFaq === 3}
                    onClick={() => setOpenFaq(openFaq === 3 ? null : 3)}
                  />
                
                  <FAQItem 
                    question={"Do staking rewards create tax liabilities?"} 
                    answer={"Yes. Staking rewards are generally treated as miscellaneous income at the point of receipt, valued at the fair market value in GBP. When you eventually sell or swap those rewards, they are also subject to Capital Gains Tax."} 
                    isOpen={openFaq === 4}
                    onClick={() => setOpenFaq(openFaq === 4 ? null : 4)}
                  />
                
                  <FAQItem 
                    question={"What happens if previous cryptocurrency gains were not reported?"} 
                    answer={"You should make a voluntary disclosure to HMRC as soon as possible. Making an unprompted disclosure significantly reduces penalties and interest charges. Our accountants can help you prepare and submit a Worldwide Disclosure Facility (WDF) filing."} 
                    isOpen={openFaq === 5}
                    onClick={() => setOpenFaq(openFaq === 5 ? null : 5)}
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
