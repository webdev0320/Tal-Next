import React from 'react';
import ServiceRenderer from '../components/ServiceRenderer';

export default function ContractorLtdPackage() {
  return (
    <ServiceRenderer 
      title="Contractor accounting plan" 
      subtitle="Specifically designed for UK independent contractors, featuring IR35 status checks and fast payroll."
      bullets={[
        "Fulfilling all annual company and personal tax filings",
        "Expert IR35 review and contract compliance audits",
        "Efficient monthly director salary and dividend distributions",
        "Integration with standard Xero and FreeAgent accounts"
      ]}
    >
      <p>
        Contractor accounting has unique demands, particularly concerning IR35 regulations and business structure optimization. We ensure you manage your contractor limited company efficiently.
      </p>
    </ServiceRenderer>
  );
}
