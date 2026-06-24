import IndustryRoutePage from '../IndustryRoutePage';
import { metadataForIndustrySlug } from '../../../lib/seo-generators';

export const metadata = metadataForIndustrySlug('it-professionals');

export default function Page() {
  return <IndustryRoutePage slug="it-professionals" />;
}
