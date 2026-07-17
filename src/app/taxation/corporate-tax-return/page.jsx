
import CorporateTaxReturn from '../../../views/taxation/CorporateTaxReturn';
import { metadataForTaxationSlug } from '../../../lib/seo-generators';

export async function generateMetadata() {
  return metadataForTaxationSlug('corporate-tax-return');
}

export default function Page() {
  return <CorporateTaxReturn />;
}
