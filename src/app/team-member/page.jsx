import { metadataForPath } from '../../lib/seo';
import TeamMember from '../../views/TeamMember';

export const metadata = metadataForPath('/team-member');

export default function Page() {
  return <TeamMember />;
}
