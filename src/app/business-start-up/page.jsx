import { metadataForPath } from '../../lib/seo';
import BusinessStartUp from '../../views/BusinessStartUp';

export const metadata = metadataForPath('/business-start-up');

export default function Page() {
  return <BusinessStartUp />;
}
