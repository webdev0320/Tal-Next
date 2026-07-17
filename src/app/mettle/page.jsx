import { metadataForPath } from '../../lib/seo';
import Mettle from '../../views/Mettle';

export const metadata = metadataForPath('/mettle');

export default function Page() {
  return <Mettle />;
}
