
import TaxInvestigationInsurance from '../../../views/taxation/TaxInvestigationInsurance';
import { metadataForTaxationSlug } from '../../../lib/seo-generators';

export async function generateMetadata() {
  return metadataForTaxationSlug('tax-investigation-insurance');
}

export default function Page() {
  return <TaxInvestigationInsurance />;
}
