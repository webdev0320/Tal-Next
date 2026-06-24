import IndustryRoutePage from '../IndustryRoutePage';
import { metadataForIndustrySlug } from '../../../lib/seo-generators';

export const metadata = metadataForIndustrySlug('real-estate');

export default function Page() {
  return <IndustryRoutePage slug="real-estate" />;
}
