
import SeisTaxRelief from '../../../views/taxation/SeisTaxRelief';
import { metadataForTaxationSlug } from '../../../lib/seo-generators';

export async function generateMetadata() {
  return metadataForTaxationSlug('seis-tax-relief');
}

export default function Page() {
  return <SeisTaxRelief />;
}
