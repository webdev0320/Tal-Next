
import EstateAndPropertyTaxPlanningAccountants from '../../../views/taxation/EstateAndPropertyTaxPlanningAccountants';
import { metadataForTaxationSlug } from '../../../lib/seo-generators';

export async function generateMetadata() {
  return metadataForTaxationSlug('estate-and-property-tax-planning-accountants');
}

export default function Page() {
  return <EstateAndPropertyTaxPlanningAccountants />;
}
