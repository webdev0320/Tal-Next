import React from 'react';

export default function ServiceRenderer({ title, subtitle, bullets = [], children }) {
  return (
    <div className="bg-white min-h-screen">
      {/* Banner */}
      <section className="bg-gradient-to-br from-slate-50 to-[#1d3c45]/5 py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-orange-600 rounded-full bg-orange-50 mb-4">
            Taxaccolega Chartered Accountants
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#1d3c45] tracking-tight mb-4">
            {title}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
            {subtitle || 'Expert corporate compliance, tax filing, and strategy tailored for modern UK businesses.'}
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="text-gray-700 leading-relaxed text-lg space-y-6">
              {children || (
                <p>
                  Completing your {title} requirements on time is critical to safeguarding performance and compliance. Our seasoned chartered advisers manage all filings with HMRC and Companies House seamlessly, optimizing for structural tax reliefs.
                </p>
              )}
            </div>

            {bullets.length > 0 && (
              <div className="space-y-6 pt-6 border-t border-gray-100">
                <h3 className="text-2xl font-bold text-[#1d3c45]">Key Features & Support</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {bullets.map((el, idx) => (
                    <div key={idx} className="flex gap-3 bg-slate-50 p-4 rounded-xl border border-gray-100 items-start">
                      <span className="text-[#d2601a] font-bold">✓</span>
                      <p className="text-sm font-semibold text-gray-700">{el}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Side Info Box / Lead Form */}
          <div className="space-y-6">
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-[#1d3c45] mb-4">Standard Service</h3>
              <p className="text-sm text-gray-500 mb-6">
                Receive round-the-clock advisory, continuous digital record checks, and timely compliance declarations under statutory requirements.
              </p>
              <div className="space-y-2">
                <a href="/contact-us" className="block text-center w-full py-3 text-white text-sm font-semibold rounded-xl" style={{ backgroundColor: '#d2601a' }}>
                  Get Free Quote
                </a>
              </div>
            </div>

            <div className="bg-[#1d3c45] text-white p-6 rounded-2xl">
              <h3 className="text-lg font-bold mb-2">Speak to Advisor</h3>
              <p className="text-gray-300 text-xs mb-4">Discuss {title} requirements directly with our senior accountancy team.</p>
              <p className="text-sm font-semibold">📞 020 8127 0728</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
