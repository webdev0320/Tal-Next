"use client";

import React from 'react';
import dynamic from 'next/dynamic';
import { Routes, Route } from 'react-router-dom';

const NextPageWrapper = dynamic(() => import('@/src/components/NextPageWrapper'), { ssr: false });
const PackagePage = dynamic(() => import('@/src/react-pages/PackagePage').then(mod => mod.default || mod), { ssr: false });

export default function Page() {
  return (
    <NextPageWrapper>
      <Routes>
        <Route path="/packages/:slug" element={<PackagePage />} />
      </Routes>
    </NextPageWrapper>
  );
}
