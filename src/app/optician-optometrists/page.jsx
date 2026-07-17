import { metadataForPath } from '../../lib/seo';
import OpticianOptometrists from '../../views/OpticianOptometrists';

export const metadata = metadataForPath('/optician-optometrists');

export default function Page() {
  return <OpticianOptometrists />;
}
