import { metadataForPath } from '../../lib/seo';
import Shopify from '../../views/Shopify';

export const metadata = metadataForPath('/shopify');

export default function Page() {
  return <Shopify />;
}
