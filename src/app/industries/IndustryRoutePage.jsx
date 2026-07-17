import { notFound } from 'next/navigation';

import IndustryPage from '../../views/IndustryPage';
import { getIndustryPageData } from '../../lib/industry-pages';

export default function IndustryRoutePage({ slug }) {
  const pageData = getIndustryPageData(slug);

  if (!pageData) {
    notFound();
  }

  return <IndustryPage pageData={pageData} />;
}
