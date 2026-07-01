import { metadataForPath } from '../../lib/seo';
import Tide from '../../views/Tide';

export const metadata = metadataForPath('/tide');

export default function Page() {
  return <Tide />;
}
