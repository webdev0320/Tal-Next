
import VatAccountants from '../../../views/taxation/VatAccountants';
import { metadataForTaxationSlug } from '../../../lib/seo-generators';

export async function generateMetadata() {
  return metadataForTaxationSlug('vat-accountants');
}

export default function Page() {
  return <VatAccountants />;
}
