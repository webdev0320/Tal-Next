import React from 'react';
import { useLocation } from 'react-router-dom';

const SPECIAL_WORDS = {
  'ir35': 'IR35',
  'vat': 'VAT',
  'ltd': 'Ltd',
  'spvs': 'SPVs',
  'emi': 'EMI',
  'hmrc': 'HMRC',
  'saas': 'SaaS',
};

function humanize(segment) {
  return segment
    .split('-')
    .map(word => {
      const lower = word.toLowerCase();
      if (SPECIAL_WORDS[lower]) {
        return SPECIAL_WORDS[lower];
      }
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
}

export default function DynamicWpPage() {
  const location = useLocation();
  const path = location.pathname;
  
  const segments = path.split('/').filter(Boolean);
  const lastSegment = segments[segments.length - 1] || 'Services';
  const humanTitle = humanize(lastSegment);

  return (
    <div className="max-w-5xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      {/* Dynamic breadcrumb */}
      <div className="mb-6 text-sm text-gray-500">
        <a href="/" className="hover:text-orange-600">Home</a> &gt; <span className="text-gray-900">{humanTitle}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Side */}
        <div className="lg:col-span-2 space-y-8">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-orange-600">Taxaccolega Advisory</span>
            <h1 className="text-4xl font-extrabold text-[#1d3c45] mt-2 mb-6 tracking-tight leading-tight">
              {humanTitle}
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed font-normal mb-6">
              Empowering your financial journey with reliable corporate and personal tax solutions. Our specialized chartered accountants ensure seamless compliance with HMRC guidelines.
            </p>
          </div>

          <div className="border-t border-gray-100 pt-8 space-y-4">
            <h2 className="text-2xl font-bold text-[#1d3c45]">How We Assist</h2>
            <p className="text-gray-600 leading-relaxed">
              Managing complex regulations requires rigorous organization. At Taxaccolega, we perform dynamic risk assessments, prepare all filings with absolute precision, and actively monitor expenditure thresholds.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Meticulous documentation and records keeping.</li>
              <li>Year-round deadline tracking to avoid penalties.</li>
              <li>Tailored tax-planning and structural optimization strategies.</li>
            </ul>
          </div>

          <div className="bg-orange-50/50 p-6 rounded-2xl border border-orange-100/50 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-bold text-[#1d3c45]">Professional Consultation</h3>
              <p className="text-sm text-gray-500">Discuss {humanTitle} requirements with a senior certified advisor.</p>
            </div>
            <a href="/contact-us" className="px-6 py-3 text-white font-bold rounded-xl whitespace-nowrap text-sm" style={{ backgroundColor: '#d2601a' }}>
              Speak to our Team
            </a>
          </div>
        </div>

        {/* Sidebar Widgets */}
        <div className="space-y-6">
          {/* Why Taxaccolega card */}
          <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
            <h3 className="text-lg font-bold text-[#1d3c45] mb-4">Why Choose Us?</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-center gap-2">
                <span className="text-green-500">✔</span>
                <span>Highly Rated Chartered Accountants</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✔</span>
                <span>Proactive, Eye-Safe Digital Record-keeping</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✔</span>
                <span>Compliant with modern UK HMRC guidelines</span>
              </li>
            </ul>
          </div>

          {/* Quick Contact widget */}
          <div className="bg-[#1d3c45] text-white rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-3">Instant Help</h3>
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              Speak directly with an onboarding expert to receive immediate assistance.
            </p>
            <div className="space-y-2 text-sm font-semibold">
              <p>📞 Phone: 020 8127 0728</p>
              <p>💬 WhatsApp: 074 7117 0484</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
