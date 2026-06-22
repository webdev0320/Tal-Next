"use client";

import React from 'react';
import dynamic from 'next/dynamic';

const NextPageWrapper = dynamic(() => import('@/src/components/NextPageWrapper'), { ssr: false });
const ConsolidatedAccounts = dynamic(() => import('@/src/react-pages/ConsolidatedAccounts').then(mod => mod.default || mod), { ssr: false });

export default function Page() {
  return (
    <NextPageWrapper>
      <ConsolidatedAccounts />
    </NextPageWrapper>
  );
}
