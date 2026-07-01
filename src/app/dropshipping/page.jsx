import { metadataForPath } from '../../lib/seo';
import Dropshipping from '../../views/Dropshipping';

export const metadata = metadataForPath('/dropshipping');

export default function Page() {
  return <Dropshipping />;
}
