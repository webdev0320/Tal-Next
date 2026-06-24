import IndustryRoutePage from '../IndustryRoutePage';
import { metadataForIndustrySlug } from '../../../lib/seo-generators';

export const metadata = metadataForIndustrySlug('non-uk-resident-taxation');

export default function Page() {
  return <IndustryRoutePage slug="non-uk-resident-taxation" />;
}
