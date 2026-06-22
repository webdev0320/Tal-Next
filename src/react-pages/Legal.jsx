import React from 'react';
import ServiceRenderer from '../components/ServiceRenderer';

export default function Legal() {
  return (
    <ServiceRenderer 
      title="Company Secretarial & Corporate Legal Services" 
      subtitle="Ensuring corporate structures remain fully compliant with statutory Companies House registries."
      bullets={[
        "Company formations and dynamic registered office addresses",
        "Statutory book maintenance and share transfers",
        "Preparation of directors' employment contracts",
        "Timely submission of annual Confirmation Statements"
      ]}
    >
      <p>
        Running a business involves strict administrative regulations. Fulfilling company secretarial services, recording board transfers, and updating statutory registers requires complete attention to detail. At Taxaccolega, we shield you from legal oversight.
      </p>
    </ServiceRenderer>
  );
}
