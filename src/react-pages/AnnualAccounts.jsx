import React from 'react';
import ServiceRenderer from '../components/ServiceRenderer';

export default function AnnualAccounts() {
  return (
    <ServiceRenderer 
      title="Annual Accounts Preparation" 
      subtitle="Filing compliant year-end corporate records with Companies House and HMRC on time."
      bullets={[
        "Fulfilling full disclosures under FRS 102 & FRS 105",
        "Reconciling balance sheets, assets, bank balances, and P&L logs",
        "Minimising corporate tax exposure legally",
        "Submission of iXBRL tagged reports to HMRC gateways"
      ]}
    >
      <p>
        Your annual accounts are vital to showing the solvency of your limited company. Completing your records with accuracy and submitting them on time prevents Companies House late penalties. Taxaccolega takes complete charge of your year-end files.
      </p>
    </ServiceRenderer>
  );
}
