import React, { useState } from 'react';

export default function ContactUs() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl font-extrabold sm:text-5xl tracking-tight mb-4 text-[#1d3c45]">
          Contact Us
        </h1>
        <p className="text-lg text-gray-600">
          Have a question or want to get a custom quote? Fill out the form or speak directly with our team.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Info and Card */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-[#1d3c45] mb-4">Get In Touch</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We look forward to handling your small business accounting, personal tax, payroll, or corporate returns. Our team is available online, via phone, or at our office.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <span className="p-3 bg-orange-50 text-[#d2601a] rounded-xl font-bold">📞</span>
              <div>
                <dt className="text-sm font-semibold text-gray-500">Phone</dt>
                <dd className="text-lg font-bold text-[#1d3c45]"><a href="tel:02081270728" className="hover:underline">020 8127 0728</a></dd>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="p-3 bg-orange-50 text-[#d2601a] rounded-xl font-bold">💬</span>
              <div>
                <dt className="text-sm font-semibold text-gray-500">WhatsApp</dt>
                <dd className="text-lg font-bold text-[#1d3c45]"><a href="https://wa.me/447471170484" target="_blank" rel="noopener noreferrer" className="hover:underline">074 7117 0484</a></dd>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="p-3 bg-orange-50 text-[#d2601a] rounded-xl font-bold">📍</span>
              <div>
                <dt className="text-sm font-semibold text-gray-500">Office Address</dt>
                <dd className="text-gray-700 font-medium">187a London Road, Croydon, Surrey, CR0 2RJ</dd>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm">
          {submitted ? (
            <div className="text-center py-12">
              <span className="text-4xl">🎉</span>
              <h3 className="text-xl font-bold text-[#1d3c45] mt-4 mb-2">Message Sent Successfully!</h3>
              <p className="text-gray-600 text-sm">Thank you for contacting Taxaccolega. One of our chartered accountants will get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                <input required type="text" className="w-full p-3 border border-gray-200 rounded-xl bg-white" placeholder="Name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
                <input required type="email" className="w-full p-3 border border-gray-200 rounded-xl bg-white" placeholder="Email" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Your Phone</label>
                <input required type="tel" className="w-full p-3 border border-gray-200 rounded-xl bg-white" placeholder="Phone Number" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                <textarea required rows={4} className="w-full p-3 border border-gray-200 rounded-xl bg-white" placeholder="How can we help you?"></textarea>
              </div>
              <button type="submit" className="w-full py-3 text-white font-semibold rounded-xl transition-all" style={{ backgroundColor: '#d2601a' }}>
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
