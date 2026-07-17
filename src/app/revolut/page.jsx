import { metadataForPath } from '../../lib/seo';
import Revolut from '../../views/Revolut';

export const metadata = metadataForPath('/revolut');

export default function Page() {
  return <Revolut />;
}
