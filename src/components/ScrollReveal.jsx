"use client";
import { useEffect, useRef, useState } from 'react';

export default function ScrollReveal({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 600,
  threshold = 0.1,
  className = '',
  once = true,
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, once]);

  return (
  <div
    ref={ref}
    className={`max-w-7xl mx-auto px-4 scroll-reveal scroll-reveal--${animation} ${isVisible ? 'scroll-reveal--visible' : ''} ${className}`}
    style={{
      '--scroll-delay': `${delay}ms`,
      '--scroll-duration': `${duration}ms`,
    }}
  >
    {children}
  </div>
);
}
