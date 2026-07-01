
import SeedEnterpriseInvestmentSchemeTaxRelief from '../../../views/taxation/SeedEnterpriseInvestmentSchemeTaxRelief';
import { metadataForTaxationSlug } from '../../../lib/seo-generators';

export async function generateMetadata() {
  return metadataForTaxationSlug('seed-enterprise-investment-scheme-tax-relief');
}

export default function Page() {
  return <SeedEnterpriseInvestmentSchemeTaxRelief />;
}
