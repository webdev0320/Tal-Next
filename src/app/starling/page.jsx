import { metadataForPath } from '../../lib/seo';
import Starling from '../../views/Starling';

export const metadata = metadataForPath('/starling');

export default function Page() {
  return <Starling />;
}
