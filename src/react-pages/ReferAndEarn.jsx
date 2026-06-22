import React from 'react';
import ServiceRenderer from '../components/ServiceRenderer';

export default function ReferAndEarn() {
  return (
    <ServiceRenderer 
      title="Refer and Earn" 
      subtitle="Recommend Taxaccolega to partners or business associates and earn handsome financial referrals."
      bullets={[
        "No complex program rules, just straightforward payouts",
        "Introduce unlimited new clients and corporate accounts",
        "High percentage payouts once referees confirm signed models",
        "Dedicated tracking and reporting of your referral earnings"
      ]}
    >
      <p>
        Know someone who is not satisfied with their current accountant, or is launching a brand-new UK business? Taxaccolega's Refer and Earn program welcomes visitors, customers, and business professionals. We take the utmost care of your friends' finances while rewarding you generously.
      </p>
    </ServiceRenderer>
  );
}
