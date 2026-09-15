"use client";
import React from 'react';
import Link from 'next/link';
import Partners from '../components/Partners';
import ReviewsSlider from '../components/ReviewsSlider';
import ContactForm from '../components/ContactForm';
import ScrollReveal from '../components/ScrollReveal';
import StaggerReveal from '../components/StaggerReveal';
import { industriesMenuData } from '../components/IndustriesMegaMenu';

const Industries = () => (
  <div>
    {/* Hero */}
    <header
      className="position-relative text-white d-flex align-items-center"
      style={{
        minHeight: '280px',
        backgroundImage: "url('/images/young-asian.webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div
        className="position-absolute top-0 start-0 w-100 h-100 bg-brand-dark"
        style={{ opacity: 0.65, zIndex: 1 }}
      />
      <div className="container position-relative py-5" style={{ zIndex: 2 }}>
        <h1 className="display-3 fw-bold text-white mb-2 hero-enter">Industries</h1>
        <p className="lead text-white-50 mb-4 mb-lg-5 hero-enter-delay-1" style={{ maxWidth: '640px' }}>
          Specialist accountants who understand your industry and help your business thrive.
        </p>
        <div className="d-flex flex-wrap gap-3 hero-enter-delay-2">
          <Link href="/contact-us/" className="btn btn-lg btn-brand px-5">
            Contact Us
          </Link>
          <Link href="/taxation/" className="btn btn-lg btn-outline-light px-5">
            Explore Services
          </Link>
        </div>
      </div>
    </header>

    {/* Breadcrumb */}
    <div className="bg-white border-bottom py-2">
      <div className="container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb mb-0 small">
            <li className="breadcrumb-item">
              <a href="/" className="text-decoration-none" style={{ color: '#e07b39' }}>
                Home
              </a>
            </li>
            <li className="breadcrumb-item active text-secondary">Industries</li>
          </ol>
        </nav>
      </div>
    </div>

    {/* Who We Assist intro */}
    <section className="py-5 bg-white">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-5">
            <ScrollReveal animation="fade-left">
              <img
                src="/images/2025/08/Who-Do-We-help-300x268.webp"
                alt="Who do we help"
                className="img-fluid rounded-3 shadow"
              />
            </ScrollReveal>
          </div>
          <div className="col-lg-7">
            <ScrollReveal animation="fade-right">
              <h2 className="fw-bold mb-3 text-brand-dark">
                Who do we<br />
                <span className="text-brand-orange">help?</span>
              </h2>
              <p className="text-secondary mb-4" style={{ lineHeight: 1.8 }}>
                We provide specialist accounting, tax and business services to businesses and
                professionals across every major UK industry. From IT contractors and property
                investors to restaurants, charities and e-commerce sellers, our team understands
                the unique financial challenges of your sector and builds practical solutions
                around them.
              </p>
              <p className="text-secondary mb-4" style={{ lineHeight: 1.8 }}>
                Explore the industries we serve below, or get in touch for a free, no-obligation
                consultation with a dedicated accountant who knows your market.
              </p>
              <Link
                href="/contact-us/"
                className="btn btn-lg px-5 btn-brand"
              >
                Book a Consultation
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>

    {/* Industry links - all sub pages */}
    <section className="py-5" style={{ background: '#f8f9fa' }}>
      <div className="container">
        <ScrollReveal animation="fade-up">
          <h2 className="text-center fw-bold mb-2 text-brand-dark" style={{ color: '#1D3C45', fontFamily: '"Montserrat Alternates", Sans-serif', fontSize: '40px', fontWeight: '600' }}>
            <span className="text-muted fw-normal">— </span>Industries we serve<span className="text-muted fw-normal"> —</span>
          </h2>
          <p className="text-center text-secondary mb-4" style={{ maxWidth: '720px', margin: '0 auto 2rem' }}>
            Click any industry to discover the tailored accounting services we provide.
          </p>
        </ScrollReveal>
        <StaggerReveal className="d-flex flex-wrap gap-3 justify-content-center">
          {Object.entries(industriesMenuData).map(([category, data]) => (
            <Link key={category} href={data.to} className="accounts-link-pill btn btn-brand pill-hover-lift">
              {category}
            </Link>
          ))}
        </StaggerReveal>
      </div>
    </section>

    {/* Specialist categories grid */}
    <section className="py-5 bg-white">
      <div className="container">
        <ScrollReveal animation="fade-up">
          <h2 className="text-center fw-bold mb-2 text-brand-dark" style={{ color: '#1D3C45', fontFamily: '"Montserrat Alternates", Sans-serif', fontSize: '40px', fontWeight: '600' }}>
            <span className="text-muted fw-normal">— </span>Specialist Accountants<span className="text-muted fw-normal"> —</span>
          </h2>
          <p className="text-center text-secondary mb-4" style={{ maxWidth: '720px', margin: '0 auto 2.5rem' }}>
            We go deeper than general practice. Each industry has a dedicated team and dedicated services.
          </p>
        </ScrollReveal>

        <StaggerReveal className="row g-4">
          {Object.entries(industriesMenuData).map(([category, data]) => {
            const items = data.sections.flatMap((s) => s.items);
            return (
              <div className="col-md-6 col-lg-4" key={category}>
                <div className="card h-100 border shadow-sm card-hover-lift">
                  <div className="card-body d-flex flex-column">
                    <div className="d-flex align-items-center gap-2 mb-3">
                      <span className="d-inline-flex align-items-center justify-content-center rounded-3 bg-brand text-white card-brand-icon" style={{ width: 38, height: 38 }}>
                        {React.cloneElement(data.icon, { size: 18 })}
                      </span>
                      <h5 className="fw-bold text-brand-dark mb-0">{category}</h5>
                    </div>
                    <ul className="list-unstyled mb-4 flex-grow-1">
                      {items.slice(0, 6).map((item) => (
                        <li key={item.label} className="mb-2">
                          <Link href={item.to} className="text-decoration-none text-secondary small" style={{ lineHeight: 1.5, transition: 'color 0.2s ease' }}>
                            <span style={{ color: '#e07b39' }}>› </span>
                            {item.label}
                          </Link>
                        </li>
                      ))}
                      {items.length > 6 && (
                        <li className="text-secondary small mb-2">+ {items.length - 6} more services</li>
                      )}
                    </ul>
                    <Link href={data.to} className="btn btn-sm btn-brand align-self-start">
                      View category →
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </StaggerReveal>
      </div>
    </section>

    {/* Partners */}
    <Partners />

    {/* Reviews */}
    <ReviewsSlider />

    {/* Contact form */}
    <ContactForm source="Industries" />
  </div>
);

export default Industries;