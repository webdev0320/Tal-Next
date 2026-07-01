"use client";
import React, { useEffect } from 'react';
import Link from 'next/link';

const PaymentFailed = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="d-flex align-items-center justify-content-center" style={{ minHeight: '70vh' }}>
      <div className="text-center px-4">
        <div className="mb-4" style={{ fontSize: '4rem' }}>❌</div>
        <h1 className="display-5 fw-bold mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>
          Payment Failed
        </h1>
        <p className="text-secondary fs-5 mb-4">
          Something went wrong with your payment. Please try again<br />
          or contact us and we will help you complete your order.
        </p>
        <div className="d-flex gap-3 justify-content-center">
          <Link href="/contact-us" className="btn btn-brand px-5 py-2 fw-bold">Contact Us</Link>
          <Link href="/pricing" className="btn btn-brand-outline px-5 py-2 fw-bold">View Pricing</Link>
        </div>
      </div>
    </div>
  );
};
export default PaymentFailed;
