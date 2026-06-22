"use client";

import React from 'react';
import dynamic from 'next/dynamic';

const NextPageWrapper = dynamic(() => import('@/src/components/NextPageWrapper'), { ssr: false });
const LtdCompanyPackage = dynamic(() => import('@/src/react-pages/LtdCompanyPackage').then(mod => mod.default || mod), { ssr: false });

export default function Page() {
  return (
    <NextPageWrapper>
      <LtdCompanyPackage />
    </NextPageWrapper>
  );
}
