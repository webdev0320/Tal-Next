import { metadataForPath } from '../../lib/seo';
import PaymentFailed from '../../views/PaymentFailed';

export const metadata = metadataForPath('/payment-failed');

export default function Page() {
  return <PaymentFailed />;
}
