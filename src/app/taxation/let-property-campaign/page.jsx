
import LetPropertyCampaign from '../../../views/taxation/LetPropertyCampaign';
import { metadataForTaxationSlug } from '../../../lib/seo-generators';

export async function generateMetadata() {
  return metadataForTaxationSlug('let-property-campaign');
}

export default function Page() {
  return <LetPropertyCampaign />;
}
