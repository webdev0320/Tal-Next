"use client";
import React, { useEffect } from 'react';
import Link from 'next/link';

const PaymentConfirmation = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="d-flex align-items-center justify-content-center" style={{ minHeight: '70vh' }}>
      <div className="text-center px-4">
        <div className="mb-4" style={{ fontSize: '4rem' }}>✅</div>
        <h1 className="display-5 fw-bold mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>
          Payment Confirmed
        </h1>
        <p className="text-secondary fs-5 mb-4">
          Thank you! Your payment has been received successfully.<br />
          Our team will be in touch shortly.
        </p>
        <Link href="/" className="btn btn-brand px-5 py-2 fw-bold">Back to Home</Link>
      </div>
    </div>
  );
};
export default PaymentConfirmation;
