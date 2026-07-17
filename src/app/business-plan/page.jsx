import { metadataForPath } from '../../lib/seo';
import BusinessPlan from '../../views/BusinessPlan';

export const metadata = metadataForPath('/business-plan');

export default function Page() {
  return <BusinessPlan />;
}
