
import InheritanceTaxPlanningAdvisors from '../../../views/taxation/InheritanceTaxPlanningAdvisors';
import { metadataForTaxationSlug } from '../../../lib/seo-generators';

export async function generateMetadata() {
  return metadataForTaxationSlug('inheritance-tax-planning-advisors');
}

export default function Page() {
  return <InheritanceTaxPlanningAdvisors />;
}
