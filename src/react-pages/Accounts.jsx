import React from 'react';
import ServiceRenderer from '../components/ServiceRenderer';

export default function Accounts() {
  return (
    <ServiceRenderer 
      title="Corporate & Small Business Accounts" 
      subtitle="Complete management of annual files, statutory statements, bookkeeper workflows, and balance sheets."
      bullets={[
        "Annual accounts preparation under modern FRS regulations",
        "HMRC Corporation Tax (CT600) digital filings",
        "Real-time tracking of capital allowances and write-offs",
        "Regular statutory feedback and performance analytics"
      ]}
    >
      <p>
        Accurately prepared general ledgers provide a detailed window into your business trajectory. Taxaccolega manages your bookkeeping, statutory reviews, and yearly accounts files, guaranteeing complete accuracy and peace of mind.
      </p>
    </ServiceRenderer>
  );
}
