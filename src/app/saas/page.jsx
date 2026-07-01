import { metadataForPath } from '../../lib/seo';
import Saas from '../../views/Saas';

export const metadata = metadataForPath('/saas');

export default function Page() {
  return <Saas />;
}
