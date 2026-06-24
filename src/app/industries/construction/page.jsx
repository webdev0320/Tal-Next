import IndustryRoutePage from '../IndustryRoutePage';
import { metadataForIndustrySlug } from '../../../lib/seo-generators';

export const metadata = metadataForIndustrySlug('construction');

export default function Page() {
  return <IndustryRoutePage slug="construction" />;
}
