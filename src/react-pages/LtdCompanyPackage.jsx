import React from 'react';
import ServiceRenderer from '../components/ServiceRenderer';

export default function LtdCompanyPackage() {
  return (
    <ServiceRenderer 
      title="Limited Company Package" 
      subtitle="Complete accounting compliance covering annual reports, CT600s, bookkeeping, and advisory."
      bullets={[
        "Filing annual statutory accounts with Companies House",
        "Preparing and submitting HMRC Corporation Tax returns",
        "Managing director salary setup and dividend tax plans",
        "Unlimited email and phone advice with our chartered accountants"
      ]}
    >
      <p>
        Stay legally compliant under all UK corporate requirements. Our packages include cloud software synchronization, quarterly reviews, and complete year-end statutory reports.
      </p>
    </ServiceRenderer>
  );
}
