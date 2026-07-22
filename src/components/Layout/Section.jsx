"use client";
import React from 'react';

const Section = ({ children, bg = 'bg-white', className = '' }) => (
  <section className={`${bg} py-16 px-4 ${className}`}>
    <div className="max-w-7xl mx-auto">{children}</div>
  </section>
);

export default Section;
