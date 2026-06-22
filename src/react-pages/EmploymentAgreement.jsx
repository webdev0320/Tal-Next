import React from 'react';
import ServiceRenderer from '../components/ServiceRenderer';

export default function EmploymentAgreement() {
  return (
    <ServiceRenderer 
      title="Employment Agreements" 
      subtitle="Excellence in drafting key director employment protocols and customized contracts."
      bullets={[
        "Compliant director service contracts under UK labor law",
        "Salary, bonus, and options allocation structures details",
        "Statutory terms, garden leave, and notice layouts",
        "Minimising litigation risk via solid contractual documentation"
      ]}
    >
      <p>
        Having structured contracts between a business and its senior executives is vital to corporate security. Our legal accountants help draft clear agreements ensuring both personal and corporate goals remain harmoniously secured.
      </p>
    </ServiceRenderer>
  );
}
