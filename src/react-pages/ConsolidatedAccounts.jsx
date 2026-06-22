import React from 'react';
import ServiceRenderer from '../components/ServiceRenderer';

export default function ConsolidatedAccounts() {
  return (
    <ServiceRenderer 
      title="Consolidated Accounts" 
      subtitle="Structured group accounting combining subsidiary and holding company ledgers."
      bullets={[
        "Fulfilling group disclosures and corporate parent filings",
        "Inter-company transaction exclusions and balancing",
        "Consolidated balance sheets and dynamic P&L ledgers",
        "Clear compliance reporting suited for medium-sized business groups"
      ]}
    >
      <p>
        Managing complex holding structures requires combining several general ledgers under group thresholds. Taxaccolega ensures all statutory group filings are reconciled correctly.
      </p>
    </ServiceRenderer>
  );
}
