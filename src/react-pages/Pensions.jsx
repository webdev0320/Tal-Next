import React from 'react';
import ServiceRenderer from '../components/ServiceRenderer';

export default function Pensions() {
  return (
    <ServiceRenderer 
      title="Auto Enrolment Pensions" 
      subtitle="Ensuring limited companies fulfill their statutory workplace Nest or Smart Pension requirements."
      bullets={[
        "Fulfilling statutory declaration of compliance duties",
        "Setting up and calculating percentage employee contributions",
        "Direct API dashboard uploads to NEST or alternative providers",
        "Opt-out processing and audit-ready records preservation"
      ]}
    >
      <p>
        Under UK statutory regulations, employers must establish, check, and maintain automatic pension enrolment for eligible workers. Taxaccolega manages this entire workflow alongside standard payroll distributions to guarantee total compliance.
      </p>
    </ServiceRenderer>
  );
}
