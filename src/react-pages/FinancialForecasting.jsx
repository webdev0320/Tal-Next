import React from 'react';
import ServiceRenderer from '../components/ServiceRenderer';

export default function FinancialForecasting() {
  return (
    <ServiceRenderer 
      title="Financial Forecasting" 
      subtitle="Data-driven projections of company assets, profits, and commercial outcomes."
      bullets={[
        "Custom cash-runway analysis and credit planning",
        "Plausible high/low revenue scenario mapping models",
        "Forecasting reports suitable for SBA or local bank applications",
        "Performance optimization workshops with a senior consultant"
      ]}
    >
      <p>
        Building a viable path forward requires looking ahead. We construct clean and structured projection dashboards that reflect historical metrics alongside future business plans.
      </p>
    </ServiceRenderer>
  );
}
