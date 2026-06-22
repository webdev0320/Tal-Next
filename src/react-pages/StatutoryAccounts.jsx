import React from 'react';
import ServiceRenderer from '../components/ServiceRenderer';

export default function StatutoryAccounts() {
  return (
    <ServiceRenderer 
      title="Statutory Accounts" 
      subtitle="Ensuring corporate year-end files strictly match Companies House statutory frameworks."
      bullets={[
        "Filing compliant abbreviated balance sheets",
        "Expert reconciliation of general ledgers",
        "Submissions to HM Revenue and Customs and Companies House",
        "Ongoing support and audit defense"
      ]}
    >
      <p>
        Statutory accounting requires strict adherence to corporate law and disclosure requirements. Taxaccolega ensures your reports are correct, complete, and filed on time.
      </p>
    </ServiceRenderer>
  );
}
