import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6">
      <h1 className="text-4xl font-extrabold text-[#1d3c45] mb-6 tracking-tight">Privacy Policy</h1>
      <p className="text-gray-500 text-sm mb-8">Effective Date: June 22, 2026</p>

      <div className="space-y-6 text-gray-700 leading-relaxed text-sm">
        <section className="space-y-2">
          <h2 className="text-xl font-bold text-[#1d3c45]">1. Introduction</h2>
          <p>
            Taxaccolega Chartered Accountants (“we”, “us”, or “our”) is committed to protecting and respecting your privacy in compliance with UK GDPR and the Data Protection Act 2018. This Privacy Policy details how we collect, process, and protect your personal information when you use our website or register as a client.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-bold text-[#1d3c45]">2. Personal Data We Collect</h2>
          <p>We may collect and process the following information:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Contact details: Name, email address, mailing address, phone number.</li>
            <li>Statutory details: National Insurance number, date of birth, Companies House directors codes.</li>
            <li>Financial info: Tax summaries, details of business profit and expenses.</li>
            <li>Verification uploads: Passport copies, utility bills, other identification files.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-bold text-[#1d3c45]">3. How We Use Your Data</h2>
          <p>We use your personal data to:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Verify identity under statutory anti-money laundering (AML) laws.</li>
            <li>Prepare and file tax returns and annual accounts under your direct instructions.</li>
            <li>Respond to your enquiries and provide tailored tax advisory letters.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-bold text-[#1d3c45]">4. Retention of Information</h2>
          <p>
            We retain personal information for only as long as is necessary to satisfy legal, reporting, or auditing requirements. Standard customer records are stored securely for up to 6 years following file completion in compliance with UK professional regulations.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-bold text-[#1d3c45]">5. Your Rights</h2>
          <p>
            Under UK GDPR, you have the right to request access to, correction of, or deletion of your personal data. You also have the right to restrict processing or withdraw consent at any time.
          </p>
        </section>

        <p className="pt-4 border-t border-gray-100 text-[#d2601a] font-bold">
          If you have any questions, contact our GDPR Officer at info@taxaccolega.co.uk.
        </p>
      </div>
    </div>
  );
}
