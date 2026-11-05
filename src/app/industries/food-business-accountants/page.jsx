import IndustryRoutePage from '../IndustryRoutePage';
import { metadataForIndustrySlug } from '../../../lib/seo-generators';
import { industryPages } from '../../../data/industryPages/index.js';

export const metadata = {
  ...metadataForIndustrySlug("food-business-accountants"),
};

export default function Page() {
  return <IndustryRoutePage slug="food-business-accountants" />;
}
