
import PersonalIncomeTax from '../../../views/taxation/PersonalIncomeTax';
import { metadataForTaxationSlug } from '../../../lib/seo-generators';

export async function generateMetadata() {
  return metadataForTaxationSlug('personal-income-tax');
}

export default function Page() {
  return <PersonalIncomeTax />;
}
