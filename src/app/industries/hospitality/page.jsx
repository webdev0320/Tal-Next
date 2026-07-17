import IndustryRoutePage from '../IndustryRoutePage';
import { metadataForIndustrySlug } from '../../../lib/seo-generators';

export const metadata = metadataForIndustrySlug('hospitality');

export default function Page() {
  return <IndustryRoutePage slug="hospitality" />;
}
