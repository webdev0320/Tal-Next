import { metadataForPath } from '../../lib/seo';
import Xero from '../../views/Xero';

export const metadata = metadataForPath('/xero');

export default function Page() {
  return <Xero />;
}
