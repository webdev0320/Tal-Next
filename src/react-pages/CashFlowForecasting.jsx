import React from 'react';
import ServiceRenderer from '../components/ServiceRenderer';

export default function CashFlowForecasting() {
  return (
    <ServiceRenderer 
      title="Cash Flow Forecasting" 
      subtitle="Ensuring your business maintains robust liquidity and optimal runways for strategic maneuvers."
      bullets={[
        "Historical transaction run-rate assessments",
        "Predicting seasonal trends and accounts receivable cycles",
        "Assisting with buffer levels planning for corporate security",
        "Structured reports for banks and financial institutions"
      ]}
    >
      <p>
        Cash is the lifeblood of business survival. Proactively forecasting expected collections and upcoming tax payments prevents liquidity shortfalls.
      </p>
    </ServiceRenderer>
  );
}
