import React from 'react';
import ServiceRenderer from '../components/ServiceRenderer';

export default function Banks() {
  return (
    <ServiceRenderer 
      title="Corporate Banking & Connections" 
      subtitle="Bespoke setups linking your general ledgers with modern, high-tier fintech bank feeds."
      bullets={[
        "Guided setup of direct bank digital feeds",
        "Assistance with digital business account applications",
        "Daily reconciliation of bank transactions with invoices",
        "Proactive cash buffer planning and audit review assistance"
      ]}
    >
      <p>
        Connecting your business bank accounts to real-time general ledger software accelerates your reporting processes. We support connections to major institutions, including Tide, Mettle, Wise, HSBC, and Barclays.
      </p>
    </ServiceRenderer>
  );
}
