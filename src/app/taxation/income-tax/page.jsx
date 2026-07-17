
import IncomeTax from '../../../views/taxation/IncomeTax';
import { metadataForTaxationSlug } from '../../../lib/seo-generators';

export async function generateMetadata() {
  return metadataForTaxationSlug('income-tax');
}

export default function Page() {
  return <IncomeTax />;
}
