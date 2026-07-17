import { metadataForPath } from '../../lib/seo';
import ECommerce from '../../views/ECommerce';

export const metadata = metadataForPath('/e-commerce');

export default function Page() {
  return <ECommerce />;
}
