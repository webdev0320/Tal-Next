
import CapitalGainsTaxAccountant from '../../../views/taxation/CapitalGainsTaxAccountant';
import { metadataForTaxationSlug } from '../../../lib/seo-generators';

export async function generateMetadata() {
  return metadataForTaxationSlug('capital-gains-tax-accountant');
}

export default function Page() {
  return <CapitalGainsTaxAccountant />;
}
