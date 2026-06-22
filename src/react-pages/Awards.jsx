import React from 'react';
import ServiceRenderer from '../components/ServiceRenderer';

export default function Awards() {
  return (
    <ServiceRenderer 
      title="Accreditations & Awards" 
      subtitle="Industry recognition and stringent compliance standards approved across Surrey, London, and the wider UK."
      bullets={[
        "Accredited under modern chartered practices guidance",
        "Supervisory authorization with strict statutory bodies",
        "Top-level digital reporting and secure cloud architectures",
        "Over 187 verified five-star Google customer reviews"
      ]}
    >
      <p>
        Trust and accountability are everything when reporting corporate portfolios or private wealth. Taxaccolega maintains complete transparency, licensed operations, and rigorous audit trails that ensure you remain clean, compliant, and optimized under statutory tests.
      </p>
    </ServiceRenderer>
  );
}
