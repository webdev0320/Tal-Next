import React from 'react';
import { useParams } from 'react-router-dom';
import ServiceRenderer from '../components/ServiceRenderer';

const SPECIAL_WORDS = {
  'it': 'IT',
  'saas': 'SaaS',
};

function humanize(segment) {
  if (!segment) return 'Industry Support';
  return segment
    .split('-')
    .map(word => {
      const lower = word.toLowerCase();
      if (SPECIAL_WORDS[lower]) return SPECIAL_WORDS[lower];
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
}

export default function IndustryPage({ slug: propSlug }) {
  const params = useParams();
  const slug = propSlug || params.slug || 'business';
  const displayTitle = `${humanize(slug)} Sector Accounting`;

  return (
    <ServiceRenderer 
      title={displayTitle} 
      subtitle={`Specialised chartered accountancy and regulatory compliance for the ${humanize(slug)} industry.`}
      bullets={[
        `Industry-specific expense claims compliance audits`,
        "Custom VAT scheme optimization and margin tracking",
        "Statutory accounting reporting matching industry benchmarks",
        "Expert consultations on structural tax deductions"
      ]}
    >
      <p>
        Every business sector has unique operational models, VAT regulations, or capital expenditure requirements. We understand the specific demands of the {humanize(slug)} industry, giving you a custom financial configuration suited to your growth.
      </p>
    </ServiceRenderer>
  );
}
