import React from 'react';

export default function AboutUs() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl font-extrabold sm:text-5xl tracking-tight mb-4 text-[#1d3c45]">
          About Our Team
        </h1>
        <p className="text-lg text-gray-600">
          Professional, reliable, and proactively supporting London and UK-wide businesses with custom chartered accounting solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-3xl font-bold mb-4 text-[#1d3c45]">Our Mission</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            At Taxaccolega, we strive to take the stress, confusion, and complexity out of tax compliance. Our seasoned chartered accountants and registered tax advisors work side-by-side with limited company owners, contractors, landlords, and sole traders.
          </p>
          <p className="text-gray-600 leading-relaxed">
            We do more than count numbers. We identify tax-saving opportunities, manage deadlines, and establish robust financial setups to let you focus on what you do best.
          </p>
        </div>
        <div>
          <img 
            src="https://placehold.co/800x600?text=Taxaccolega+Professionals" 
            alt="Taxaccolega Team" 
            className="rounded-2xl shadow-md border border-gray-100"
          />
        </div>
      </div>

      {/* Trust & Accreditations Info */}
      <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 text-center">
        <h3 className="text-xl font-bold text-[#1d3c45] mb-2">Our Accreditations</h3>
        <p className="text-sm text-gray-500 max-w-2xl mx-auto mb-4">
          Licensed under statutory regulations, registered with supervisory bodies, and maintaining top marks for compliance and audit-ready execution.
        </p>
        <span className="text-sm font-semibold text-orange-600 uppercase tracking-wider">ICAEW & CTA Partners</span>
      </div>
    </div>
  );
}
