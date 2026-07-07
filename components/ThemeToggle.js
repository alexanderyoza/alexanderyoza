'use client';

import React, { useEffect, useState } from 'react';
import styles from '../styles/components/themeToggle.module.css';

const Sun = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
  </svg>
);

const Moon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
  </svg>
);

/** Light/dark toggle. Persists to localStorage; the no-flash script in the
 *  layout head applies the stored value before first paint. */
export default function ThemeToggle() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    let stored = null;
    try { stored = localStorage.getItem('theme'); } catch (_) {}
    const sys = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    setTheme(stored === 'light' || stored === 'dark' ? stored : sys);
  }, []);

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (_) {}
  };

  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={toggle}
      aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
      title="Toggle theme"
    >
      <span className={styles.icon} suppressHydrationWarning>
        {theme === 'dark' ? Sun : theme === 'light' ? Moon : null}
      </span>
    </button>
  );
}
