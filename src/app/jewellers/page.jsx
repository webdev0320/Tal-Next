import { metadataForPath } from '../../lib/seo';
import Jewellers from '../../views/Jewellers';

export const metadata = metadataForPath('/jewellers');

export default function Page() {
  return <Jewellers />;
}
