
import NonUkResident from '../../../views/taxation/NonUkResident';
import { metadataForTaxationSlug } from '../../../lib/seo-generators';

export async function generateMetadata() {
  return metadataForTaxationSlug('non-uk-resident');
}

export default function Page() {
  return <NonUkResident />;
}
