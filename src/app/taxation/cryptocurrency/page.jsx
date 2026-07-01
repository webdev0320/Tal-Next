
import Cryptocurrency from '../../../views/taxation/Cryptocurrency';
import { metadataForTaxationSlug } from '../../../lib/seo-generators';

export async function generateMetadata() {
  return metadataForTaxationSlug('cryptocurrency');
}

export default function Page() {
  return <Cryptocurrency />;
}
