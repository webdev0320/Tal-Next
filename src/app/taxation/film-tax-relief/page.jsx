
import FilmTaxRelief from '../../../views/taxation/FilmTaxRelief';
import { metadataForTaxationSlug } from '../../../lib/seo-generators';

export async function generateMetadata() {
  return metadataForTaxationSlug('film-tax-relief');
}

export default function Page() {
  return <FilmTaxRelief />;
}
