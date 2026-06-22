import React from 'react';
import ServiceRenderer from '../components/ServiceRenderer';

export default function Taxation() {
  return (
    <ServiceRenderer 
      title="Taxation Advisory" 
      subtitle="Comprehensive personal, property, and corporate tax structuring to keep you optimized and compliant."
      bullets={[
        "Worldwide Disclosure Facility voluntary compliance support",
        "Let Property Campaign for residential landlords",
        "VAT return assistance and Making Tax Digital (MTD) migration",
        "Inheritance Tax planning and wealth preservation audits"
      ]}
    >
      <p>
        The UK tax system is under constant transformation. From cryptocurrency calculations to changes in capital gains and corporate allowances, staying compliant is about being proactive. Taxaccolega ensures you or your business navigate these statutory changes with professional composure.
      </p>
    </ServiceRenderer>
  );
}
