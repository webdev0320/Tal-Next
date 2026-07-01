import { metadataForPath } from '../../lib/seo';
import Quickbooks from '../../views/Quickbooks';

export const metadata = metadataForPath('/quickbooks');

export default function Page() {
  return <Quickbooks />;
}
