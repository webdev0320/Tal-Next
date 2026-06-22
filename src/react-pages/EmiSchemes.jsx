import React from 'react';
import ServiceRenderer from '../components/ServiceRenderer';

export default function EmiSchemesPage() {
  return (
    <ServiceRenderer 
      title="Enterprise Management Incentives (EMI) Schemes" 
      subtitle="Exquisite advice on HMRC-approved share option plans designed to retain and reward small business employees."
      bullets={[
        "HMRC valuation requests and option scheme drafting",
        "Significant capital gains and corporation tax reliefs guidance",
        "Custom vesting schedules matching performance thresholds",
        "Submission of annual share schemes reports to HMRC"
      ]}
    >
      <p>
        The Enterprise Management Incentive (EMI) scheme is a highly tax-efficient share option program backed by the UK government. It allows small businesses to award options to key staff, keeping them motivated without heavy income tax burdens.
      </p>
    </ServiceRenderer>
  );
}
