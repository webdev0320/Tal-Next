import React from 'react';
import ServiceRenderer from '../components/ServiceRenderer';

export default function ShareTransfer() {
  return (
    <ServiceRenderer 
      title="Share Transfers & Restructuring" 
      subtitle="Exquisite guidance on changing shareholder allocations, stock gifting, and restructuring."
      bullets={[
        "Preparation of J30 stock transfer forms",
        "Submission of updated PSC registers to Companies House",
        "Calculating double transfer tax or stamp duty exemptions",
        "Re-issuing share certificates and updating company book files"
      ]}
    >
      <p>
        Bringing in new partners or reorganizing family holdings calls for proper equity movements. Failing to log stock allocations properly can invalidate key corporate votes. Taxaccolega ensures every transaction is correctly executed.
      </p>
    </ServiceRenderer>
  );
}
