import { metadataForPath } from '../../lib/seo';
import Dext from '../../views/Dext';

export const metadata = metadataForPath('/dext');

export default function Page() {
  return <Dext />;
}
