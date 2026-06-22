import React from 'react';
import ServiceRenderer from '../components/ServiceRenderer';

export default function SelfAssessment() {
  return (
    <ServiceRenderer 
      title="HMRC Self Assessment" 
      subtitle="Complete declaration of personal, rental, and overseas investment earnings before January 31st."
      bullets={[
        "Deduction checks to legally lower tax liabilities",
        "Clear computation of taxes owed plus Payments on Account",
        "Direct dynamic API filings to HMRC portals",
        "Stress-free defense against late filing HMRC penalties"
      ]}
    >
      <p>
        Personal tax returns can quickly become complex due to dividend payments, property rental income, or overseas assets. Taxaccolega prepares and files your Self Assessment return with absolute precision, ensuring you remain compliant.
      </p>
    </ServiceRenderer>
  );
}
