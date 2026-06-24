import IndustryRoutePage from '../IndustryRoutePage';
import { metadataForIndustrySlug } from '../../../lib/seo-generators';

export const metadata = metadataForIndustrySlug('charity');

export default function Page() {
  return <IndustryRoutePage slug="charity" />;
}
