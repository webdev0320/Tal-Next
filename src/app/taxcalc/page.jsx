import { metadataForPath } from '../../lib/seo';
import Taxcalc from '../../views/Taxcalc';

export const metadata = metadataForPath('/taxcalc');

export default function Page() {
  return <Taxcalc />;
}
