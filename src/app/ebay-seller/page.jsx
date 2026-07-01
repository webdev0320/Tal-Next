import { metadataForPath } from '../../lib/seo';
import EbaySeller from '../../views/EbaySeller';

export const metadata = metadataForPath('/ebay-seller');

export default function Page() {
  return <EbaySeller />;
}
