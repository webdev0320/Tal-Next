'use client';

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MainLayout from './Layout/MainLayout.jsx';

export default function NextPageWrapper({ children }) {
  return (
    <BrowserRouter>
      <MainLayout>
        {children}
      </MainLayout>
    </BrowserRouter>
  );
}
