import { metadataForPath } from '../../lib/seo';
import FurnishedHolidayLetting from '../../views/FurnishedHolidayLetting';

export const metadata = metadataForPath('/furnished-holiday-letting');

export default function Page() {
  return <FurnishedHolidayLetting />;
}
