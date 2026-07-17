import { metadataForPath } from '../../lib/seo';
import ContractorsInsurance from '../../views/ContractorsInsurance';

export const metadata = metadataForPath('/contractors-insurance');

export default function Page() {
  return <ContractorsInsurance />;
}
