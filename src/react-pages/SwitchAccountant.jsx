import React from 'react';
import ServiceRenderer from '../components/ServiceRenderer';

export default function SwitchAccountant() {
  return (
    <ServiceRenderer 
      title="Switch Accountant" 
      subtitle="Changing your accountant is simple, effortless, and has no disruption to your UK filing schedules."
      bullets={[
        "We notify your previous accountant and coordinate transfer",
        "Retrieve historical accounts records and general ledger logs",
        "Set up seamlessly under statutory agent authorities",
        "No gaps, no penalty exposure throughout transition"
      ]}
    >
      <p>
        Many corporate directors and property business owners stay with underperforming accounting firms simply because of the perceived pain of switching. In reality, modern UK statutory protocols make transitioning your professional records simple. At Taxaccolega, we handle all correspondence for you.
      </p>
    </ServiceRenderer>
  );
}
