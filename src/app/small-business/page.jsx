import { metadataForPath } from '../../lib/seo';
import SmallBusiness from '../../views/SmallBusiness';

export const metadata = metadataForPath('/small-business');

export default function Page() {
  return <SmallBusiness />;
}
