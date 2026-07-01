
import CapitalGainsTax from '../../../views/taxation/CapitalGainsTax';
import { metadataForTaxationSlug } from '../../../lib/seo-generators';

export async function generateMetadata() {
  return metadataForTaxationSlug('capital-gains-tax');
}

export default function Page() {
  return <CapitalGainsTax />;
}
