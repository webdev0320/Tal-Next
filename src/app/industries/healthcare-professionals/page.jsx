import IndustryRoutePage from '../IndustryRoutePage';
import { metadataForIndustrySlug } from '../../../lib/seo-generators';

export const metadata = metadataForIndustrySlug('healthcare-professionals');

export default function Page() {
  return <IndustryRoutePage slug="healthcare-professionals" />;
}
