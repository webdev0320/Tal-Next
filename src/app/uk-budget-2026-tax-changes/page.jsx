import { metadataForPath } from '../../lib/seo';
import UkBudget2026 from '../../views/UkBudget2026';

export const metadata = {
  ...metadataForPath('/uk-budget-2026-tax-changes'),
  title: { absolute: 'UK Budget 2026: Tax Changes and What They Mean for You' },
};

export default function Page() {
  return <UkBudget2026 />;
}
