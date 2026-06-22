"use client";

import React, { useState } from 'react';

export default function MainLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans text-gray-900">
      {/* Dynamic Navigation Bar */}
      <nav className="border-b border-gray-100 sticky top-0 bg-white z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/" className="flex items-center gap-2">
                <span className="text-2xl font-extrabold tracking-tight" style={{ color: '#1d3c45' }}>
                  Taxac<span style={{ color: '#d2601a' }}>colega</span>
                </span>
              </a>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-6">
              <a href="/" className="text-gray-600 hover:text-orange-600 font-medium transition-colors">Home</a>
              <a href="/about-us" className="text-gray-600 hover:text-orange-600 font-medium transition-colors">About Us</a>
              <a href="/blog" className="text-gray-600 hover:text-orange-600 font-medium transition-colors">Blog</a>
              <a href="/contact-us" className="text-gray-600 hover:text-orange-600 font-medium transition-colors">Contact</a>
              <a href="/switch-accountant" className="text-gray-600 hover:text-orange-600 font-medium transition-colors">Switch Accountant</a>
              <a href="/refer-and-earn" className="text-gray-600 hover:text-orange-600 font-medium transition-colors">Refer & Earn</a>
              <a href="/contact-us" className="px-4 py-2 text-white font-semibold rounded-full transition-all hover:opacity-90" style={{ backgroundColor: '#d2601a' }}>
                Get a Quote
              </a>
            </div>

            {/* Mobile Nav Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-600 hover:text-orange-600 focus:outline-none"
                aria-label="Toggle Menu"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-b border-gray-100 px-4 pt-2 pb-4 space-y-2">
            <a href="/" className="block text-gray-700 hover:text-orange-600 font-medium py-1">Home</a>
            <a href="/about-us" className="block text-gray-700 hover:text-orange-600 font-medium py-1">About Us</a>
            <a href="/blog" className="block text-gray-700 hover:text-orange-600 font-medium py-1">Blog</a>
            <a href="/contact-us" className="block text-gray-700 hover:text-orange-600 font-medium py-1">Contact</a>
            <a href="/switch-accountant" className="block text-gray-700 hover:text-orange-600 font-medium py-1">Switch Accountant</a>
            <a href="/refer-and-earn" className="block text-gray-700 hover:text-orange-600 font-medium py-1">Refer & Earn</a>
            <div className="pt-2 border-t border-gray-100">
              <a href="/contact-us" className="block text-center w-full py-2 text-white font-semibold rounded-full" style={{ backgroundColor: '#d2601a' }}>
                Get a Quote
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content Area */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Premium Footer */}
      <footer className="border-t border-gray-100 bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <span className="text-xl font-bold tracking-tight" style={{ color: '#1d3c45' }}>
                Taxac<span style={{ color: '#d2601a' }}>colega</span>
              </span>
              <p className="text-sm text-gray-500">
                Chartered Accountants and Registered Tax Advisors. Delivering peace of mind and tailored financial services across London and the UK.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold tracking-wider uppercase mb-4" style={{ color: '#1d3c45' }}>Core Services</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="/accounts/hmrc-self-assessment-tax-returns-accountant" className="hover:text-orange-600 transition-colors">Self Assessment</a></li>
                <li><a href="/accounts/payroll-services" className="hover:text-orange-600 transition-colors">Payroll Outsourcing</a></li>
                <li><a href="/taxation/company-tax-return-accountants" className="hover:text-orange-600 transition-colors">Corporation Tax</a></li>
                <li><a href="/taxation/vat-accountants" className="hover:text-orange-600 transition-colors">VAT Returns</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold tracking-wider uppercase mb-4" style={{ color: '#1d3c45' }}>Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="/about-us" className="hover:text-orange-600 transition-colors">About Our Team</a></li>
                <li><a href="/blog" className="hover:text-orange-600 transition-colors">Blogs & News</a></li>
                <li><a href="/privacy-policy" className="hover:text-orange-600 transition-colors">Privacy Policy</a></li>
                <li><a href="/refer-and-earn" className="hover:text-orange-600 transition-colors">Refer and Earn</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold tracking-wider uppercase mb-4" style={{ color: '#1d3c45' }}>Contact Details</h4>
              <p className="text-sm text-gray-600 mb-2">
                <strong>Phone:</strong> <a href="tel:02081270728" className="hover:text-orange-600 transition-colors">020 8127 0728</a>
              </p>
              <p className="text-sm text-gray-600">
                <strong>Address:</strong> London, United Kingdom
              </p>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-xs text-gray-500">
              &copy; {new Date().getFullYear()} Taxaccolega. All rights reserved. Registered in England & Wales.
            </p>
            <div className="flex space-x-4 mt-4 sm:mt-0">
              <span className="text-xs text-gray-500">Professional Excellence</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
