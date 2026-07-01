
import TaxAdvisors from '../../../views/taxation/TaxAdvisors';
import { metadataForTaxationSlug } from '../../../lib/seo-generators';

export async function generateMetadata() {
  return metadataForTaxationSlug('tax-advisors');
}

export default function Page() {
  return <TaxAdvisors />;
}
