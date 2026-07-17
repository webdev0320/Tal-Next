
import CompanyTaxReturnAccountants from '../../../views/taxation/CompanyTaxReturnAccountants';
import { metadataForTaxationSlug } from '../../../lib/seo-generators';

export async function generateMetadata() {
  return metadataForTaxationSlug('company-tax-return-accountants');
}

export default function Page() {
  return <CompanyTaxReturnAccountants />;
}
