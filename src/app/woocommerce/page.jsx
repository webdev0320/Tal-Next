import { metadataForPath } from '../../lib/seo';
import Woocommerce from '../../views/Woocommerce';

export const metadata = metadataForPath('/woocommerce');

export default function Page() {
  return <Woocommerce />;
}
