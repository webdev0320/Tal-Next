import IndustryRoutePage from '../IndustryRoutePage';
import { metadataForIndustrySlug } from '../../../lib/seo-generators';

export const metadata = metadataForIndustrySlug('wholesellers-retailers');

export default function Page() {
  return <IndustryRoutePage slug="wholesellers-retailers" />;
}
