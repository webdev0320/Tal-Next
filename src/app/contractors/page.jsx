import { metadataForPath } from '../../lib/seo';
import Contractors from '../../views/Contractors';

export const metadata = metadataForPath('/contractors');

export default function Page() {
  return <Contractors />;
}
