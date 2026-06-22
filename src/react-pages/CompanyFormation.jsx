import React from 'react';
import ServiceRenderer from '../components/ServiceRenderer';

export default function CompanyFormation() {
  return (
    <ServiceRenderer 
      title="Company Formation" 
      subtitle="Establish your private limited company (Ltd) or partnership within 24 hours."
      bullets={[
        "Name availability screening and Companies House registration",
        "Preparation of Articles of Association and Memorandum",
        "Registered office setup and share structure assignment",
        "Fast-track corporate banking introductions and guidance"
      ]}
    >
      <p>
        Starting a brand new venture is an exciting step. Making sure your company is legal, registered under appropriate commercial structures, and fully compliant is part of our business. Taxaccolega provides complete formation packages for UK entrepreneurs.
      </p>
    </ServiceRenderer>
  );
}
