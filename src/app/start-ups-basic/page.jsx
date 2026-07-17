import { metadataForPath } from '../../lib/seo';
import StartUpsBasic from '../../views/StartUpsBasic';

export const metadata = metadataForPath('/start-ups-basic');

export default function Page() {
  return <StartUpsBasic />;
}
