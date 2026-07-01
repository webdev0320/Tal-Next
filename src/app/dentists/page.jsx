import { metadataForPath } from '../../lib/seo';
import Dentists from '../../views/Dentists';

export const metadata = metadataForPath('/dentists');

export default function Page() {
  return <Dentists />;
}
