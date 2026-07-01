import { metadataForPath } from '../../lib/seo';
import Anna from '../../views/Anna';

export const metadata = metadataForPath('/anna');

export default function Page() {
  return <Anna />;
}
