import React from 'react';
import Link from 'next/link';
import styles from '../../styles/workOverview.module.css';
import Reveal from '../../components/Reveal';

// One combined index — roles, projects, studio and client work, merged.
const ENTRIES = [
  {
    year: '2026', title: 'Capital One', kind: 'Role',
    desc: 'Associate Software Engineer on team StreamPro — core modernization and common capability & tooling on a service handling a billion+ requests a day.',
  },
  {
    year: '2026', title: 'Nisatsu', kind: 'Project',
    desc: 'Founder & engineer — an AI language-learning app, built end to end.',
    soon: true,
  },
  {
    year: '2025', title: 'Ponzu', kind: 'Project',
    desc: 'CTO & co-founder — an AI workflow-orchestration platform.',
    soon: true,
  },
  {
    year: '2025', title: 'Union Hills Family Dentistry', kind: 'Client',
    desc: 'Full-stack marketing site and patient-facing pages for a Phoenix dental practice.',
    href: '/projects/uhfd',
  },
  {
    year: '2024', title: 'GSF LLC', kind: 'Client',
    desc: 'Property and project showcase site for a Hawaii housing-development company.',
    href: '/projects/gsfhi',
  },
  {
    year: '2024', title: 'San Diego Supercomputer Center', kind: 'Role',
    desc: 'Developer intern — led a full-stack platform in React, Node, and Firebase.',
    href: '/work/sdsc',
  },
  {
    year: '2023', title: 'AGY', kind: 'Studio',
    desc: 'My independent software studio — products, experiments, and digital systems.',
    href: 'https://agyllc.com/', external: true,
  },
  {
    year: '2023', title: 'SitesByAlex', kind: 'Studio',
    desc: 'Web developer & consultant — client websites and web apps.',
    href: '/work/sitesbyalex',
  },
  {
    year: '2023', title: 'Trading Lab', kind: 'Project',
    desc: 'Research, simulate, and score algorithmic trading strategies with sandboxed, validated plugins.',
    soon: true,
  },
  {
    year: '2022', title: 'Bank of Hawaii', kind: 'Role',
    desc: 'eSolutions development intern — automated bank processes, saving 1,500+ hours a year.',
    href: '/work/boh',
  },
];

function Row({ item }) {
  const arrow = item.soon ? 'Soon' : item.external ? '↗' : item.href ? '→' : '';
  const inner = (
    <>
      <span className={styles.rowYear}>{item.year}</span>
      <span className={styles.rowMain}>
        <span className={styles.rowTitle}>{item.title}</span>
        <span className={styles.rowDesc}>{item.desc}</span>
      </span>
      <span className={styles.rowMeta}>
        <span className={styles.rowKind}>{item.kind}</span>
        <span className={styles.rowArrow}>{arrow}</span>
      </span>
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
          <span className="eyebrow">Experience</span>
        </Reveal>
        <Reveal delay={60}>
          <h1 className={styles.title}>Roles &amp; things I&apos;ve built.</h1>
        </Reveal>
        <Reveal delay={120}>
          <p className={styles.lede}>
            From banking automation to a billion-request-a-day service — plus the
            studios, clients, and companies I&apos;m building. Roles and projects,
            in one place.
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
