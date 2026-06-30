import TaxationSubPage from '../../../views/TaxationSubPage';
import { metadataForTaxationSlug } from '../../../lib/seo-generators';

// Known taxation slugs not already covered by static pages
export function generateStaticParams() {
  return [
    { slug: 'worldwide-disclosure-facility' },
    { slug: 'film-tax-relief' },
    { slug: 'let-property-campaign' },
    { slug: 'personal-income-tax' },
    { slug: 'company-tax-return-accountants' },
    { slug: 'vat-accountants' },
    { slug: 'inheritance-tax-planning' },
    { slug: 'tax-investigation-insurance' },
    { slug: 'emi-schemes' },
    { slug: 'cryptocurrency' },
    { slug: 'personal-income-tax-professionals-and-chartered-accountants' },
  ];
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  return metadataForTaxationSlug(slug);
}

export default function Page({ params }) {
  return <TaxationSubPage params={params} />;
}
