
import EstateTax from '../../../views/taxation/EstateTax';
import { metadataForTaxationSlug } from '../../../lib/seo-generators';

export async function generateMetadata() {
  return metadataForTaxationSlug('estate-tax');
}

export default function Page() {
  return <EstateTax />;
}
