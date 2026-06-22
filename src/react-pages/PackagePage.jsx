import React from 'react';
import { useParams } from 'react-router-dom';
import ServiceRenderer from '../components/ServiceRenderer';

function humanize(segment) {
  if (!segment) return 'Accounting Package';
  return segment
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export default function PackagePage() {
  const { slug } = useParams();
  const packageTitle = `${humanize(slug)} Pricing Plan`;

  return (
    <ServiceRenderer 
      title={packageTitle}
      subtitle={`Comprehensive, high-tier fixed fee accounting package for ${humanize(slug)} operations.`}
      bullets={[
        "Annual accounts filing and corporate tax returns (CT600)",
        "Making Tax Digital (MTD) compliant cloud software access",
        "Unlimited professional helpdesk support from chartered advisors",
        "Strict regulatory and Companies House secretarial coverage"
      ]}
    >
      <p>
        Investing in robust software, diligent reviews, and expert advisory protects your margins from compliance penalties. Our {humanize(slug)} fixed-fee packages are built to scale alongside your transactions, giving you predictable financial planning.
      </p>
    </ServiceRenderer>
  );
}
