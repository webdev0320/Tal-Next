import React from 'react';
import ServiceRenderer from '../components/ServiceRenderer';

export default function ManagementAccounts() {
  return (
    <ServiceRenderer 
      title="Management Accounts" 
      subtitle="Periodic (monthly or quarterly) financial reports to steer your business with absolute clarity."
      bullets={[
        "Real-time Profit & Loss statement breakdowns",
        "Aging accounts receivable and payable reports",
        "Key performance indicator (KPI) tracking metrics",
        "Strategic consulting based on actual performance logs"
      ]}
    >
      <p>
        Waiting until the year ends to review your financial records is risky. Periodic management accounts provide real-time indicators regarding cash buffers, performance margins, and tax liabilities, helping you make informed decisions.
      </p>
    </ServiceRenderer>
  );
}
