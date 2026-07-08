'use client';

import React, { useEffect, useRef, useState } from 'react';

/** Fade-up on scroll into view. Honors prefers-reduced-motion (instant). */
export default function Reveal({ children, as: Tag = 'div', className = '', delay = 0, ...rest }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      typeof IntersectionObserver === 'undefined'
    ) {
      setVisible(true);
      return;
    }
    // Safety net: content must never stay stranded at opacity 0 if the
    // observer never fires (CRIT-001).
    const fallback = setTimeout(() => setVisible(true), 3000);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0, rootMargin: '0px 0px 12% 0px' }
    );
    io.observe(el);
    return () => {
      clearTimeout(fallback);
      io.disconnect();
    };
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'isVisible' : ''} ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
