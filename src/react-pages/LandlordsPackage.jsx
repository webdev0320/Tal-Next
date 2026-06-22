import React from 'react';
import ServiceRenderer from '../components/ServiceRenderer';

export default function LandlordsPackage() {
  return (
    <ServiceRenderer 
      title="Landlord Accounting Package" 
      subtitle="Comprehensive property income tracking for single residential units and multi-property landlord portfolios."
      bullets={[
        "Filing property rental income under SA105 forms",
        "Assisting with HMRC Let Property Campaign voluntary disclosures",
        "Optimising mortgage interest relief restrictions and allowable deductions",
        "Strategic advice on buying properties via SPVs"
      ]}
    >
      <p>
        Property taxation has seen significant regulatory alterations. Keeping record tracking consistent across portfolios helps you stay optimized. We manage your property income tax returns perfectly.
      </p>
    </ServiceRenderer>
  );
}
