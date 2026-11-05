import IndustryRoutePage from '../IndustryRoutePage';
import { metadataForIndustrySlug } from '../../../lib/seo-generators';
import { industryPages } from '../../../data/industryPages/index.js';

export const metadata = {
  ...metadataForIndustrySlug("automotive-accountants"),
};

export default function Page() {
  return <IndustryRoutePage slug="automotive-accountants" />;
}
