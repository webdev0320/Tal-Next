import { metadataForPath } from '../../lib/seo';
import Monzo from '../../views/Monzo';

export const metadata = metadataForPath('/monzo');

export default function Page() {
  return <Monzo />;
}
