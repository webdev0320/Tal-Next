
import TaxInvestigation from '../../../views/taxation/TaxInvestigation';
import { metadataForTaxationSlug } from '../../../lib/seo-generators';

export async function generateMetadata() {
  return metadataForTaxationSlug('tax-investigation');
}

export default function Page() {
  return <TaxInvestigation />;
}
