import React from 'react';
import ServiceRenderer from '../components/ServiceRenderer';

export default function Software() {
  return (
    <ServiceRenderer 
      title="Accounting Software & Integration" 
      subtitle="Complete configuration and mentoring on Making Tax Digital (MTD) compliant software."
      bullets={[
        "Certified Xero and QuickBooks setup and synchronization",
        "Automated bank feed links to minimize manual entry errors",
        "Real-time payroll or pension software outplacement links",
        "Expert customer support and bespoke training modules"
      ]}
    >
      <p>
        Digital software transforms how fast small business owners can see their cash flow performance. Taxaccolega ensures you are utilizing optimized tools such as Xero or FreeAgent properly, keeping your transaction ledger up-to-date.
      </p>
    </ServiceRenderer>
  );
}
