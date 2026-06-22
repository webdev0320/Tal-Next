import React, { useState } from 'react';

export default function ScheduleCall() {
  const [success, setSuccess] = useState(false);

  const handleBook = (e) => {
    e.preventDefault();
    setSuccess(true);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="text-4xl font-extrabold text-[#1d3c45] mb-4">Schedule a Consultation</h1>
        <p className="text-gray-600">
          Book a 1-on-1 diagnostic call with a senior Chartered Accountant to review your limited company structure, taxation liabilities, or self assessment logs.
        </p>
      </div>

      <div className="bg-white border border-gray-100 p-8 sm:p-12 rounded-3xl shadow-sm max-w-xl mx-auto">
        {success ? (
          <div className="text-center py-8">
            <span className="text-4xl">🗓️</span>
            <h3 className="text-xl font-bold text-[#1d3c45] mt-4 mb-2">Meeting Requested</h3>
            <p className="text-sm text-gray-500">We will verify our availability and email you an official calendar invitation within 4 business hours.</p>
          </div>
        ) : (
          <form onSubmit={handleBook} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Select Service Topic</label>
              <select className="w-full p-3 border border-gray-200 rounded-xl bg-white" required>
                <option value="">-- Choose a Topic --</option>
                <option value="limited">Ltd Company Setup & Corporate Return</option>
                <option value="tax">Personal Tax & Property Disclosures</option>
                <option value="vat">VAT & MTD Bookkeeping Setup</option>
                <option value="payroll">Payroll Outplacement</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Preferred Date</label>
                <input required type="date" className="w-full p-3 border border-gray-200 rounded-xl bg-white" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Preferred Time Block</label>
                <select className="w-full p-3 border border-gray-200 rounded-xl bg-white" required>
                  <option value="morning">Morning (9:00 am - 12:00 pm)</option>
                  <option value="afternoon">Afternoon (12:00 pm - 4:00 pm)</option>
                  <option value="late">Late PM (4:00 pm - 5:00 pm)</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
                <input required type="text" className="w-full p-3 border border-gray-200 rounded-xl bg-white" placeholder="Name" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Contact Phone</label>
                <input required type="tel" className="w-full p-3 border border-gray-200 rounded-xl bg-white" placeholder="Phone Number" />
              </div>
            </div>

            <button type="submit" className="w-full py-3 text-white font-bold rounded-xl" style={{ backgroundColor: '#d2601a' }}>
              Confirm Meeting Request
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
