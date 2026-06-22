import React from 'react';
import ServiceRenderer from '../components/ServiceRenderer';

export default function PayrollServices() {
  return (
    <ServiceRenderer 
      title="Payroll Services" 
      subtitle="Complete outplacement of custom director and staff payslips, RTI filings, and P60s."
      bullets={[
        "Weekly or monthly PAYE payslip calculations",
        "Direct submissions to HMRC (Real Time Information - RTI)",
        "Assistance with new employee onboarding and student loan deductions",
        "P60 and P45 preparation and digital outplacement distributions"
      ]}
    >
      <p>
        Administering a payroll scheme is a time-sensitive task. From calculating statutory sick pay to submitting mandatory payroll reports on time, Taxaccolega streamlines your operations, ensuring your team is paid correctly.
      </p>
    </ServiceRenderer>
  );
}
