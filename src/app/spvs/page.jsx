import { metadataForPath } from '../../lib/seo';
import Spvs from '../../views/Spvs';

export const metadata = metadataForPath('/spvs');

export default function Page() {
  return <Spvs />;
}
