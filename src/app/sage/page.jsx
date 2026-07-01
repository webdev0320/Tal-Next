import { metadataForPath } from '../../lib/seo';
import Sage from '../../views/Sage';

export const metadata = metadataForPath('/sage');

export default function Page() {
  return <Sage />;
}
