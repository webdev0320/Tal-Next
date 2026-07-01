
import InheritanceTax from '../../../views/taxation/InheritanceTax';
import { metadataForTaxationSlug } from '../../../lib/seo-generators';

export async function generateMetadata() {
  return metadataForTaxationSlug('inheritance-tax');
}

export default function Page() {
  return <InheritanceTax />;
}
