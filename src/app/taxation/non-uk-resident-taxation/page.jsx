
import NonUkResidentTaxation from '../../../views/taxation/NonUkResidentTaxation';
import { metadataForTaxationSlug } from '../../../lib/seo-generators';

export async function generateMetadata() {
  return metadataForTaxationSlug('non-uk-resident-taxation');
}

export default function Page() {
  return <NonUkResidentTaxation />;
}
