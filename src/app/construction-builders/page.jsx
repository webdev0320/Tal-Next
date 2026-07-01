import { metadataForPath } from '../../lib/seo';
import ConstructionBuilders from '../../views/ConstructionBuilders';

export const metadata = metadataForPath('/construction-builders');

export default function Page() {
  return <ConstructionBuilders />;
}
