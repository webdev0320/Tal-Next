
import CapitalGainsTaxAccountants from '../../../views/taxation/CapitalGainsTaxAccountants';
import { metadataForTaxationSlug } from '../../../lib/seo-generators';

export async function generateMetadata() {
  return metadataForTaxationSlug('capital-gains-tax-accountants');
}

export default function Page() {
  return <CapitalGainsTaxAccountants />;
}
