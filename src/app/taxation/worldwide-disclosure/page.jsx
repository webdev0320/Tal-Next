
import WorldwideDisclosure from '../../../views/taxation/WorldwideDisclosure';
import { metadataForTaxationSlug } from '../../../lib/seo-generators';

export async function generateMetadata() {
  return metadataForTaxationSlug('worldwide-disclosure');
}

export default function Page() {
  return <WorldwideDisclosure />;
}
