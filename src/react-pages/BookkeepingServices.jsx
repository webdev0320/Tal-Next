import React from 'react';
import ServiceRenderer from '../components/ServiceRenderer';

export default function BookkeepingServices() {
  return (
    <ServiceRenderer 
      title="Bookkeeping Services" 
      subtitle="Accurate digital recording of receipts, expenses, sales, and banking reconciliations."
      bullets={[
        "Continuous recording of all taxable transactions",
        "Expense classification matching strict HMRC rules",
        "VAT-ready ledger logs to support quick submissions",
        "Elimination of shoebox receipt filing headaches"
      ]}
    >
      <p>
        Accurate bookkeeping is the foundation of precise statutory accountancy. Taxaccolega provides ongoing cloud bookkeeping, assuring every invoice is matched and categorised, saving you critical time during annual filings.
      </p>
    </ServiceRenderer>
  );
}
