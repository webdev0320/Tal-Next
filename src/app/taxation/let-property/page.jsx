
import LetProperty from '../../../views/taxation/LetProperty';
import { metadataForTaxationSlug } from '../../../lib/seo-generators';

export async function generateMetadata() {
  return metadataForTaxationSlug('let-property');
}

export default function Page() {
  return <LetProperty />;
}
