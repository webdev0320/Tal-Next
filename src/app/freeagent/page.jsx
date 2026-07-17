import { metadataForPath } from '../../lib/seo';
import Freeagent from '../../views/Freeagent';

export const metadata = metadataForPath('/freeagent');

export default function Page() {
  return <Freeagent />;
}
