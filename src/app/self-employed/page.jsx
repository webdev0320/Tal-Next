import { metadataForPath } from '../../lib/seo';
import SelfEmployed from '../../views/SelfEmployed';

export const metadata = metadataForPath('/self-employed');

export default function Page() {
  return <SelfEmployed />;
}
