import { metadataForPath } from '../../lib/seo';
import Freelancers from '../../views/Freelancers';

export const metadata = metadataForPath('/freelancers');

export default function Page() {
  return <Freelancers />;
}
