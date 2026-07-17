import IndustryRoutePage from '../IndustryRoutePage';
import { metadataForIndustrySlug } from '../../../lib/seo-generators';

export const metadata = metadataForIndustrySlug('leisure-industry');

export default function Page() {
  return <IndustryRoutePage slug="leisure-industry" />;
}
