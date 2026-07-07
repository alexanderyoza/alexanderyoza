import React from 'react';
import Link from 'next/link';
import styles from '../../styles/workOverview.module.css';
import Reveal from '../../components/Reveal';

const EDUCATION = [
  {
    from: 'Sep 2021', to: 'Dec 2024', title: 'University of California, San Diego',
    desc: 'B.S. Computer Science · La Jolla, California',
  },
  {
    from: 'Aug 2024', to: 'Nov 2024', title: 'International Christian University',
    desc: 'Exchange program · Mitaka, Tokyo, Japan',
  },
];

// One combined index — roles, projects, and studio work.
const WORK = [
  {
    from: 'Feb 2026', to: 'Present', title: 'Capital One',
    role: 'Associate Software Engineer',
    desc: 'Core modernization and common capability tooling on team StreamPro, on a service that handles over a billion requests a day.',
  },
  {
    from: 'Jan 2026', to: 'Present', title: 'Nisatsu',
    role: 'Founder and Engineer',
    desc: 'An AI language learning app, built end to end.',
    soon: true,
  },
  {
    from: 'Sep 2025', to: 'Present', title: 'Ponzu',
    role: 'CTO and Cofounder',
    desc: 'An AI workflow orchestration platform.',
    soon: true,
  },
  {
    from: 'Jun 2025', to: 'Present', title: 'Trading Lab',
    role: 'Creator',
    desc: 'Research, simulate, and score algorithmic trading strategies with sandboxed, validated plugins.',
    soon: true,
  },
  {
    from: 'Jun 2024', to: 'Aug 2024', title: 'San Diego Supercomputer Center',
    role: 'Developer Intern',
    desc: 'Led a full stack platform in React, Node, and Firebase to help students discover places around them.',
    href: '/work/sdsc',
  },
  {
    from: 'Oct 2021', to: 'Present', title: 'AGY',
    role: 'Founder',
    desc: 'My independent software studio for products, experiments, and digital systems.',
    href: 'https://agyllc.com/', external: true,
  },
  {
    from: 'Jun 2023', to: 'Present', title: 'SitesByAlex',
    role: 'Web Developer and Consultant',
    desc: 'Client websites and web apps for small businesses.',
    href: 'https://sitesbyalex.com/', external: true,
  },
  {
    from: 'Jun 2022', to: 'Aug 2022', title: 'Bank of Hawaii',
    role: 'eSolutions Development Intern',
    desc: 'Automated bank processes, saving over 1,500 hours a year.',
    href: '/work/boh',
  },
];

// Ongoing (…– Present) first, then finished; each most-recent-first by start date.
const MONTHS = { Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5, Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11 };
const startKey = (item) => {
  const parts = item.from.split(' ');
  const month = parts.length > 1 ? (MONTHS[parts[0]] ?? 0) : 0;
  const year = Number(parts[parts.length - 1]);
  return year * 12 + month;
};
const orderedWork = [...WORK].sort((a, b) => {
  const aActive = a.to === 'Present';
  const bActive = b.to === 'Present';
  if (aActive !== bActive) return aActive ? -1 : 1;
  return startKey(b) - startKey(a);
});

function Row({ item }) {
  const arrow = item.soon ? 'Coming soon' : item.external ? '↗' : item.href ? '→' : '';
  const inner = (
    <>
      <span className={styles.rowYear}>
        <span className={styles.rowDate}>{item.from}</span>
        {item.to && (
          <>
            <span className={styles.rowDateSep}>to</span>
            <span className={styles.rowDate}>{item.to}</span>
          </>
        )}
      </span>
      <span className={styles.rowMain}>
        <span className={styles.rowTitle}>{item.title}</span>
        {item.role && <span className={styles.rowRole}>{item.role}</span>}
        <span className={styles.rowDesc}>{item.desc}</span>
      </span>
      <span className={styles.rowArrow}>{arrow}</span>
    </>
  );
  if (item.href && item.external) {
    return <a className={styles.row} href={item.href} target="_blank" rel="noopener noreferrer">{inner}</a>;
  }
  if (item.href) {
    return <Link className={styles.row} href={item.href}>{inner}</Link>;
  }
  return <div className={`${styles.row} ${styles.rowStatic}`}>{inner}</div>;
}

export default function Experience() {
  return (
    <main className="container">
      <header className={styles.head}>
        <h1 className={styles.title}><span className={styles.titleInner}>My experience</span></h1>
      </header>

      <section className={styles.group}>
        <Reveal>
          <h2 className={styles.groupLabel}>Education</h2>
        </Reveal>
        <div className={styles.index}>
          {EDUCATION.map((item) => (
            <Reveal key={item.title}>
              <Row item={item} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className={styles.group}>
        <Reveal>
          <h2 className={styles.groupLabel}>Work</h2>
        </Reveal>
        <div className={styles.index}>
          {orderedWork.map((item, i) => (
            <Reveal key={item.title} delay={Math.min(i, 5) * 45}>
              <Row item={item} />
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
