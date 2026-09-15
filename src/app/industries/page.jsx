import { metadataForPath } from '../../lib/seo';
import Industries from '../../views/Industries';

export const metadata = metadataForPath('/industries');

export default function Page() {
  return <Industries />;
}