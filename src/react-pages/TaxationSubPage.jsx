import React from 'react';
import { useParams } from 'react-router-dom';
import TaxationRenderer from '../components/TaxationRenderer';
import ServiceRenderer from '../components/ServiceRenderer';

export default function TaxationSubPage() {
  const { slug } = useParams();

  // If we have config defined in taxationConfig, use the rich TaxationRenderer
  const validKeys = [
    'worldwide-disclosure-facility',
    'cryptocurrency',
    'film-tax-relief',
    'let-property-campaign',
    'personal-income-tax',
    'company-tax-return-accountants',
    'vat-accountants',
    'inheritance-tax-planning',
    'tax-investigation-insurance'
  ];

  if (validKeys.includes(slug)) {
    return <TaxationRenderer configKey={slug} />;
  }

  // Fallback to high-quality service card matching the title
  return (
    <ServiceRenderer 
      title={`Taxation Assistance - ${slug}`} 
      subtitle="Exquisite advice from top-tier London chartered tax and accounting advisory."
      bullets={[
        "Regulatory reporting matching modern statutory rules",
        "Checking structural reliefs and claims thresholds",
        "Direct connection to HMRC filing gateways",
        "Robust defense against audit or tax review inquiries"
      ]}
    >
      <p>
        The UK taxation matrix is strict and ever-changing. We support individuals, corporate groups, and trusts in making sure all liabilities are resolved.
      </p>
    </ServiceRenderer>
  );
}
