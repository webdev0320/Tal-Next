import { metadataForPath } from '../../lib/seo';
import PropertyLandlords from '../../views/PropertyLandlords';

export const metadata = metadataForPath('/property-landlords');

export default function Page() {
  return <PropertyLandlords />;
}
