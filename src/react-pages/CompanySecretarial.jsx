import React from 'react';
import ServiceRenderer from '../components/ServiceRenderer';

export default function CompanySecretarial() {
  return (
    <ServiceRenderer 
      title="Company Secretarial" 
      subtitle="Complete maintenance of statutory corporate registers, minutes, and confirmation statements."
      bullets={[
        "Filing annual Confirmation Statements (CS01)",
        "Maintaining director, secretary, and PSC register logs",
        "Drafting board meeting minutes and corporate resolutions",
        "Updating registries following structural changes"
      ]}
    >
      <p>
        Accurate administrative maintenance is mandated for restricted limited models in the UK. Neglecting database updates can prompt heavy fines or corporate dissolution registry checks. Taxaccolega provides ongoing administrative peace of mind.
      </p>
    </ServiceRenderer>
  );
}
