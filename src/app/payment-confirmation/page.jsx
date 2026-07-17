import { metadataForPath } from '../../lib/seo';
import PaymentConfirmation from '../../views/PaymentConfirmation';

export const metadata = metadataForPath('/payment-confirmation');

export default function Page() {
  return <PaymentConfirmation />;
}
