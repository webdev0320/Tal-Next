
import Rd from '../../../views/taxation/Rd';
import { metadataForTaxationSlug } from '../../../lib/seo-generators';

export async function generateMetadata() {
  return metadataForTaxationSlug('rd');
}

export default function Page() {
  return <Rd />;
}
