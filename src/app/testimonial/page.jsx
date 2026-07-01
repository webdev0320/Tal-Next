import { metadataForPath } from '../../lib/seo';
import Testimonial from '../../views/Testimonial';

export const metadata = metadataForPath('/testimonial');

export default function Page() {
  return <Testimonial />;
}
