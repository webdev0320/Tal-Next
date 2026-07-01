
import EstatePropertyTaxPlanning from '../../../views/taxation/EstatePropertyTaxPlanning';
import { metadataForTaxationSlug } from '../../../lib/seo-generators';

export async function generateMetadata() {
  return metadataForTaxationSlug('estate-property-tax-planning');
}

export default function Page() {
  return <EstatePropertyTaxPlanning />;
}
