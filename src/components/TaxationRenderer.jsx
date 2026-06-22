"use client";

import React, { useState } from 'react';
import { taxationConfig } from '../legacy-templates/taxationConfig';

export default function TaxationRenderer({ configKey }) {
  const data = taxationConfig[configKey];
  const [activeFaq, setActiveFaq] = useState(null);

  if (!data) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-24 text-center">
        <h1 className="text-2xl font-bold text-[#1d3c45] mb-4">Service Details Not Found</h1>
        <p className="text-gray-500">The requested service structure is currently being updated by our chartered accountants.</p>
      </div>
    );
  }

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Banner Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50/30 border-b border-gray-100 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-orange-600 rounded-full bg-orange-50">
                UK Tax & Advisory
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-[#1d3c45] tracking-tight leading-tight">
                {data.title}
              </h1>
              <p className="text-xl font-medium text-orange-600">
                {data.subtitle}
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                {data.heroIntro}
              </p>
              <div className="pt-2 text-gray-600 leading-relaxed border-t border-gray-200">
                {data.heroDetails}
              </div>
            </div>
            
            <div className="lg:col-span-5 relative">
              <div className="aspect-[4/3] w-full relative rounded-2xl overflow-hidden border border-gray-100 shadow-md">
                <img 
                  src={data.img || 'https://placehold.co/800x600?text=Taxaccolega+Tax+Advisory'} 
                  alt={data.title} 
                  className="object-cover w-full h-full"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Render Sections Dynamically based on taxationConfig.js */}
      {data.sections && data.sections.map((section, idx) => {
        if (section.type === 'difficult') {
          return (
            <section key={idx} className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-100">
              <div className="max-w-3xl mb-12">
                <h2 className="text-3xl font-extrabold text-[#1d3c45] mb-2">{section.title}</h2>
                <p className="text-lg font-medium text-orange-600 mb-4">{section.subtitle}</p>
                <p className="text-gray-600 leading-relaxed">{section.content}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {section.bullets && section.bullets.map((bullet, bidx) => (
                  <div key={bidx} className="flex gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100 items-start">
                    <span className="p-1 bg-orange-100 text-[#d2601a] rounded-full text-xs font-bold font-mono">✓</span>
                    <span className="text-gray-700 text-sm font-medium leading-relaxed">{bullet}</span>
                  </div>
                ))}
              </div>

              {section.footer && (
                <div className="p-4 bg-orange-50/50 rounded-xl border border-orange-100/50 text-xs font-medium text-orange-800 leading-relaxed">
                  {section.footer}
                </div>
              )}
            </section>
          );
        }

        if (section.type === 'cards') {
          return (
            <section key={idx} className="py-16 bg-gray-50 border-b border-gray-100">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mb-12">
                  <h2 className="text-3xl font-extrabold text-[#1d3c45] mb-4">{section.title}</h2>
                  <p className="text-gray-600 leading-relaxed">{section.intro}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {section.cards && section.cards.map((card, cidx) => (
                    <div key={cidx} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm space-y-4">
                      <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-xl font-bold text-[#d2601a]">
                        {cidx + 1}
                      </div>
                      <h3 className="text-xl font-bold text-[#1d3c45]">{card.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{card.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          );
        }

        if (section.type === 'table') {
          return (
            <section key={idx} className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-100">
              <div className="max-w-3xl mb-8">
                <h2 className="text-3xl font-extrabold text-[#1d3c45] mb-2">{section.title}</h2>
                <p className="text-gray-500 text-sm">{section.subtitle}</p>
              </div>

              <div className="overflow-x-auto rounded-xl border border-gray-100 shadow-sm">
                <table className="min-w-full divide-y divide-gray-100">
                  <thead className="bg-[#1d3c45] text-white">
                    <tr>
                      {section.headers && section.headers.map((h, hidx) => (
                        <th key={hidx} className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-100 text-gray-700 text-sm">
                    {section.rows && section.rows.map((row, rowIdx) => (
                      <tr key={rowIdx} className="hover:bg-slate-50">
                        {row.map((cell, cellIdx) => (
                          <td key={cellIdx} className="px-6 py-4 whitespace-normal align-top leading-relaxed">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          );
        }

        return null;
      })}

      {/* Accordion FAQs Section */}
      {data.faqs && data.faqs.length > 0 && (
        <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center text-[#1d3c45] mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {data.faqs.map((faq, index) => (
              <div key={index} className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
                <button
                  className="flex justify-between items-center w-full px-6 py-5 text-left font-bold text-lg bg-gray-50 hover:bg-gray-100/80 transition-colors"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={activeFaq === index}
                >
                  <span className="text-[#1d3c45] pr-4">{faq.q}</span>
                  <span className="text-orange-600 font-extrabold shrink-0">
                    {activeFaq === index ? '−' : '+'}
                  </span>
                </button>
                {activeFaq === index && (
                  <div className="px-6 py-5 text-gray-600 bg-white leading-relaxed text-sm border-t border-gray-50">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Structured CTA Bottom Card */}
      <section className="max-w-5xl mx-auto px-4 py-8 mb-16">
        <div className="bg-gradient-to-r from-[#1d3c45] to-[#254d58] text-white p-8 sm:p-12 rounded-3xl relative overflow-hidden">
          <div className="relative z-10 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Need expert tax support?</h2>
            <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
              Don’t let tax deadlines and complicated calculations cloud your peace of mind. Partner with our designated tax advisors and Chartered Accountants.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a href="/contact-us" className="px-8 py-3 bg-white text-[#1d3c45] font-bold rounded-full transition-all hover:bg-orange-50">
                Book free Consultancy
              </a>
              <a href="tel:02081270728" className="px-8 py-3 bg-transparent border-2 border-white text-white font-bold rounded-full transition-all hover:bg-white/10">
                Call 020 8127 0728
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
