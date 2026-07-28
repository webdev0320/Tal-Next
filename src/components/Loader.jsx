'use client';

import { useState, useEffect } from 'react';

export default function Loader() {
  const [visible, setVisible] = useState(true);
  const [phase, setPhase] = useState('enter');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const minTimer = setTimeout(() => {
      setPhase('exit');
      setTimeout(() => setVisible(false), 700);
    }, 2000);

    const handleLoad = () => {
      clearTimeout(minTimer);
      setPhase('exit');
      setTimeout(() => setVisible(false), 700);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }

    return () => clearTimeout(minTimer);
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`loader-overlay ${phase === 'exit' ? 'loader-exit' : ''}`}
      aria-label="Loading"
      role="status"
    >
      <div className="loader-bg-pattern" />

      <div className="loader-center">
        <div className="loader-ring loader-ring--1" />
        <div className="loader-ring loader-ring--2" />
        <div className="loader-ring loader-ring--3" />

        <div className="loader-logo-wrap">
          <img
            src="/images/logo/Tal Logo.png"
            alt="Taxaccolega"
            className="loader-logo"
            draggable={false}
          />
        </div>

        <div className="loader-glow" />
      </div>

      <div className="loader-bottom">
        <div className="loader-tagline">Chartered Accountants</div>
        <div className="loader-bar-track">
          <div className="loader-bar-fill" />
        </div>
      </div>

      {mounted && [...Array(12)].map((_, i) => (
        <div
          key={i}
          className="loader-particle"
          style={{
            '--i': i,
            '--x': `${15 + Math.random() * 70}%`,
            '--y': `${10 + Math.random() * 80}%`,
            '--size': `${2 + Math.random() * 4}px`,
            '--dur': `${1.5 + Math.random() * 2}s`,
            '--delay': `${Math.random() * 1.5}s`,
          }}
        />
      ))}
    </div>
  );
}
