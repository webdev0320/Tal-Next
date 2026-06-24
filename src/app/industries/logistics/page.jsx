import IndustryRoutePage from '../IndustryRoutePage';
import { metadataForIndustrySlug } from '../../../lib/seo-generators';

export const metadata = metadataForIndustrySlug('logistics');

export default function Page() {
  return <IndustryRoutePage slug="logistics" />;
}
