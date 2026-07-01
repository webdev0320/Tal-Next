import { metadataForPath } from '../../lib/seo';
import Pricing from '../../views/Pricing';

export const metadata = metadataForPath('/pricing');

export default function Page() {
  return <Pricing />;
}
