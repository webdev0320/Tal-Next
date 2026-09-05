import IndustryRoutePage from '../IndustryRoutePage';
import { metadataForIndustrySlug } from '../../../lib/seo-generators';
import { industryPages } from '../../../data/industryPages/index.js';

export const metadata = {
  ...metadataForIndustrySlug("retail-accountants"),
  robots: {
    index: false,
    follow: true,
  },
};

export default function Page() {
  return <IndustryRoutePage slug="retail-accountants" />;
}
