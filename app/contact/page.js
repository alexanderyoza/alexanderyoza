import React from 'react';
import styles from '../../styles/contact.module.css';
import Reveal from '../../components/Reveal';

const ICONS = {
  email: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.07 1.4-2.07 2.85V21H9z" />
    </svg>
  ),
  github: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.46-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05A9.36 9.36 0 0 1 12 6.84c.85 0 1.71.12 2.51.34 1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.82 0 .27.18.6.69.49A10.04 10.04 0 0 0 22 12.25C22 6.58 17.52 2 12 2z" />
    </svg>
  ),
};

const LINKS = [
  { label: 'Email', value: 'alex.yoza@gmail.com', href: 'mailto:alex.yoza@gmail.com', icon: 'email' },
  { label: 'LinkedIn', value: '/in/alex-yoza', href: 'https://www.linkedin.com/in/alex-yoza/', external: true, icon: 'linkedin' },
  { label: 'GitHub', value: '@alexanderyoza', href: 'https://github.com/alexanderyoza?tab=repositories', external: true, icon: 'github' },
];

export default function Contact() {
  return (
    <main className="container">
      <div className={styles.wrap}>
        <Reveal>
          <h1 className={styles.title}>Let&apos;s build something.</h1>
          <p className={styles.lede}>
            Open to interesting problems, collaborations, and good conversation.
            The fastest way to reach me is below.
          </p>
        </Reveal>

        <div className={styles.links}>
          {LINKS.map((l, i) => (
            <Reveal key={l.label} delay={i * 70}>
              <a
                className={styles.row}
                href={l.href}
                {...(l.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                <span className={styles.rowIcon}>{ICONS[l.icon]}</span>
                <span className={styles.rowLabel}>{l.label}</span>
                <span className={styles.rowValue}>{l.value}</span>
                <span className={styles.rowArrow}>→</span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </main>
  );
}
