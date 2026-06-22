import React from 'react';
import ServiceRenderer from '../components/ServiceRenderer';

export default function SoleTraderPackage() {
  return (
    <ServiceRenderer 
      title="Sole Trader Package" 
      subtitle="Complete accounting compliance and annual self assessment planning for self-employed professionals."
      bullets={[
        "Annual Self Assessment (SA100) preparation and direct HMRC filing",
        "Unlimited professional tax advisory and support",
        "Expense claim optimization matching strict HMRC criteria",
        "Continuous support for Making Tax Digital (MTD) migration"
      ]}
    >
      <p>
        Running as a sole trader is simple, but staying audit-compliant calls for properly documented ledgers. We calculate your self assessment, payments on account, and allowable expenses seamlessly.
      </p>
    </ServiceRenderer>
  );
}
