
import InheritanceTaxPlanning from '../../../views/taxation/InheritanceTaxPlanning';
import { metadataForTaxationSlug } from '../../../lib/seo-generators';

export async function generateMetadata() {
  return metadataForTaxationSlug('inheritance-tax-planning');
}

export default function Page() {
  return <InheritanceTaxPlanning />;
}
