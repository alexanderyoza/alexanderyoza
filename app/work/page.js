import React from 'react';
import Link from 'next/link';
import styles from '../../styles/workOverview.module.css';
import Reveal from '../../components/Reveal';

// One combined index — roles, projects, studio work, merged.
const ENTRIES = [
  {
    dates: 'Feb 2026 – Present', title: 'Capital One',
    desc: 'Associate Software Engineer on team StreamPro — core modernization and common capability & tooling on a service handling a billion+ requests a day.',
  },
  {
    dates: 'Jan 2026 – Present', title: 'Nisatsu',
    desc: 'Founder & engineer — an AI language-learning app, built end to end.',
    soon: true,
  },
  {
    dates: 'Sep 2025 – Present', title: 'Ponzu',
    desc: 'CTO & co-founder — an AI workflow-orchestration platform.',
    soon: true,
  },
  {
    dates: '2025 – Present', title: 'Trading Lab',
    desc: 'Research, simulate, and score algorithmic trading strategies with sandboxed, validated plugins.',
    soon: true,
  },
  {
    dates: 'Jun 2024 – Aug 2024', title: 'San Diego Supercomputer Center',
    desc: 'Developer intern — led a full-stack platform in React, Node, and Firebase.',
    href: '/work/sdsc',
  },
  {
    dates: '2023 – Present', title: 'AGY',
    desc: 'My independent software studio — products, experiments, and digital systems.',
    href: 'https://agyllc.com/', external: true,
  },
  {
    dates: 'Jun 2023 – Present', title: 'SitesByAlex',
    desc: 'Web developer & consultant — client websites and web apps.',
    href: '/work/sitesbyalex',
  },
  {
    dates: 'Jun 2022 – Aug 2022', title: 'Bank of Hawaii',
    desc: 'eSolutions development intern — automated bank processes, saving 1,500+ hours a year.',
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
          <h1 className={styles.title}>Roles &amp; things I&apos;ve built.</h1>
        </Reveal>
        <Reveal delay={80}>
          <p className={styles.lede}>
            From banking automation to a billion-request-a-day service — plus the
            studios and companies I&apos;m building. Roles and projects, in one place.
          </p>
        </Reveal>
      </header>

      <div className={styles.index}>
        {ENTRIES.map((item, i) => (
          <Reveal key={item.title} delay={Math.min(i, 5) * 45}>
            <Row item={item} />
          </Reveal>
        ))}
      </div>
    </main>
  );
}
