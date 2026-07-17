
import WorldwideDisclosureFacility from '../../../views/taxation/WorldwideDisclosureFacility';
import { metadataForTaxationSlug } from '../../../lib/seo-generators';

export async function generateMetadata() {
  return metadataForTaxationSlug('worldwide-disclosure-facility');
}

export default function Page() {
  return <WorldwideDisclosureFacility />;
}
