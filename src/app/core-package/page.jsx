import { metadataForPath } from '../../lib/seo';
import CorePackage from '../../views/CorePackage';

export const metadata = metadataForPath('/core-package');

export default function Page() {
  return <CorePackage />;
}
