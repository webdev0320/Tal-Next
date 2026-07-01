import { metadataForPath } from '../../lib/seo';
import BtcSoftware from '../../views/BtcSoftware';

export const metadata = metadataForPath('/btc-software');

export default function Page() {
  return <BtcSoftware />;
}
