import React from 'react';
import ServiceRenderer from '../components/ServiceRenderer';

export default function RegisteredAddress() {
  return (
    <ServiceRenderer 
      title="Registered Address Services" 
      subtitle="Protect your private workspace with a professional, prestigious London-based registered office address."
      bullets={[
        "Prestige Central London mailing address for public registers",
        "Secure handling and forwarding of statutory HMRC mail",
        "Prevention of unsolicited marketing letters to your residence",
        "Compliant registered registry lists for Companies House filings"
      ]}
    >
      <p>
        Under UK law, all companies must provide a public registered office address. Using your home address compromises privacy and leads to unsolicited visitors and mailing logs. Our office services provide secure forwarding, keeping your data confidential.
      </p>
    </ServiceRenderer>
  );
}
