import { metadataForPath } from '../../lib/seo';
import HotelsRestaurantsBars from '../../views/HotelsRestaurantsBars';

export const metadata = metadataForPath('/hotels-restaurants-bars');

export default function Page() {
  return <HotelsRestaurantsBars />;
}
