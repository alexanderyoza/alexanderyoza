import React from 'react';
import Link from 'next/link';
import styles from '../../styles/workOverview.module.css';
import Reveal from '../../components/Reveal';

const EDUCATION = [
  {
    dates: '2021 – 2024', title: 'University of California, San Diego',
    desc: 'B.S. Computer Science · La Jolla, California',
  },
  {
    dates: '2024', title: 'International Christian University',
    desc: 'Exchange program · Mitaka, Tokyo, Japan',
  },
];

// One combined index — roles, projects, and studio work.
const WORK = [
  {
    dates: 'Feb 2026 – Present', title: 'Capital One',
    role: 'Associate Software Engineer',
    desc: 'Core modernization and common capability tooling on team StreamPro, on a service that handles over a billion requests a day.',
  },
  {
    dates: 'Jan 2026 – Present', title: 'Nisatsu',
    role: 'Founder and Engineer',
    desc: 'An AI language learning app, built end to end.',
    soon: true,
  },
  {
    dates: 'Sep 2025 – Present', title: 'Ponzu',
    role: 'CTO and Cofounder',
    desc: 'An AI workflow orchestration platform.',
    soon: true,
  },
  {
    dates: '2025 – Present', title: 'Trading Lab',
    role: 'Creator',
    desc: 'Research, simulate, and score algorithmic trading strategies with sandboxed, validated plugins.',
    soon: true,
  },
  {
    dates: 'Jun 2024 – Aug 2024', title: 'San Diego Supercomputer Center',
    role: 'Developer Intern',
    desc: 'Led a full stack platform in React, Node, and Firebase to help students discover places around them.',
    href: '/work/sdsc',
  },
  {
    dates: '2023 – Present', title: 'AGY',
    role: 'Founder',
    desc: 'My independent software studio for products, experiments, and digital systems.',
    href: 'https://agyllc.com/', external: true,
  },
  {
    dates: 'Jun 2023 – Present', title: 'SitesByAlex',
    role: 'Web Developer and Consultant',
    desc: 'Client websites and web apps for small businesses.',
    href: '/work/sitesbyalex',
  },
  {
    dates: 'Jun 2022 – Aug 2022', title: 'Bank of Hawaii',
    role: 'eSolutions Development Intern',
    desc: 'Automated bank processes, saving over 1,500 hours a year.',
    href: '/work/boh',
  },
];

function Row({ item }) {
  const arrow = item.soon ? 'Soon' : item.external ? '↗' : item.href ? '→' : '';
  const inner = (
    <>
      <span className={styles.rowYear}>{item.dates}</span>
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
        <Reveal>
          <h1 className={styles.title}>My experience</h1>
        </Reveal>
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
          {WORK.map((item, i) => (
            <Reveal key={item.title} delay={Math.min(i, 5) * 45}>
              <Row item={item} />
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
