import React from 'react';
import ServiceRenderer from '../components/ServiceRenderer';

export default function CharitiesPackage() {
  return (
    <ServiceRenderer 
      title="Charity & Trust Package" 
      subtitle="Complete accounting support matching Charities Commission regulations and SORP standards."
      bullets={[
        "Filing independent examiner reports and statutory accounts",
        "Assisting with Gift Aid claims and tax recovery submissions",
        "Reconciling restricted and unrestricted charity funds",
        "Verification reviews matching strict financial guidelines"
      ]}
    >
      <p>
        Charities have rigorous public disclosure requirements. Our services ensure your trustees remain fully compliant with Charity Commission mandates while maximizing Gift Aid allocations.
      </p>
    </ServiceRenderer>
  );
}
