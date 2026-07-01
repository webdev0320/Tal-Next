import { metadataForPath } from '../../lib/seo';
import AmazonSeller from '../../views/AmazonSeller';

export const metadata = metadataForPath('/amazon-seller');

export default function Page() {
  return <AmazonSeller />;
}
