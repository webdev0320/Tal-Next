"use client";

import React from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the main App with SSR disabled to keep it fully client-side (SPA style)
const App = dynamic(() => import('../App'), { ssr: false });

export default function Page() {
  return <App />;
}
