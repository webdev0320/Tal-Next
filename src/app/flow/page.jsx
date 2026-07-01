import { metadataForPath } from '../../lib/seo';
import Flow from '../../views/Flow';

export const metadata = metadataForPath('/flow');

export default function Page() {
  return <Flow />;
}
