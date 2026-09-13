import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/workOverview.module.css';
import Reveal from '../../components/Reveal';

// One combined index — roles, projects, and studio work.
const WORK = [
  {
    from: 'Feb 2026', to: 'Present', title: 'Capital One',
    role: 'Associate Software Engineer',
    desc: 'Core modernization and common capability tooling on team StreamPro, on a service that handles over a billion requests a day.',
    logo: '/work/capitalone/icon.jpg', logoFull: true,
  },
  {
    from: 'Jan 2026', to: 'Present', title: 'Nisatsu',
    role: 'Founder and Engineer',
    desc: 'An AI language learning app, built end to end.',
    soon: true, href: 'https://www.nisatsu.com/', external: true,
    logo: '/work/nisatsu/logo.png',
  },
  {
    from: 'Sep 2025', to: 'Present', title: 'Ponzu',
    role: 'CTO and Cofounder',
    desc: 'An AI workflow orchestration platform.',
    soon: true, href: 'https://www.ponzu.so/', external: true,
    logo: '/work/ponzu/logo.png',
  },
  {
    from: 'Jun 2025', to: 'Present', title: 'Crucible',
    role: 'Creator',
    desc: 'Research, simulate, and score algorithmic trading strategies with sandboxed, validated plugins.',
    soon: true,
    logo: '/work/crucible/logo.png',
  },
  {
    from: 'Jun 2024', to: 'Aug 2024', title: 'San Diego Supercomputer Center',
    role: 'Developer Intern',
    desc: 'Led a full stack platform in React, Node, and Firebase to help students discover places around them.',
    href: '/work/sdsc',
    logo: '/work/sdsc.jpeg',
  },
  {
    from: 'Oct 2021', to: 'Present', title: 'AGY',
    role: 'Founder',
    desc: 'My independent software studio for products, experiments, and digital systems.',
    href: 'https://agyllc.com/', external: true,
    logo: '/projects/agy/logo.png', logoInvert: true,
  },
  {
    from: 'Jun 2023', to: 'Present', title: 'SitesByAlex',
    role: 'Web Developer and Consultant',
    desc: 'Client websites and web apps for small businesses.',
    href: 'https://sitesbyalex.com/', external: true,
    logo: '/work/sitesbyalex/logo.png', logoInvert: true,
  },
  {
    from: 'Jun 2022', to: 'Aug 2022', title: 'Bank of Hawaii',
    role: 'eSolutions Development Intern',
    desc: 'Automated bank processes, saving over 1,500 hours a year.',
    href: '/work/boh',
    logo: '/work/boh.png',
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

function Card({ item }) {
  const arrow = item.external ? '\u2197\uFE0E' : item.href ? '\u2192' : '';
  const inner = (
    <>
      <span className={styles.cardLogo} aria-hidden="true">
        {item.logo ? (
          <Image
            src={item.logo}
            alt=""
            width={72}
            height={72}
            className={`${item.logoFull ? styles.cardLogoImgFull : styles.cardLogoImg}${item.logoInvert ? ` ${styles.cardLogoInvert}` : ''}${item.logoLift ? ` ${styles.cardLogoLift}` : ''}`}
          />
        ) : (
          <span className={styles.cardLogoFallback}>{item.title[0]}</span>
        )}
      </span>
      <h3 className={styles.cardTitle}>{item.title}</h3>
      {item.role && <h4 className={styles.cardRole}>{item.role}</h4>}
      <p className={styles.cardDesc}>{item.desc}</p>
      <span className={styles.cardDate}>
        {item.from}{item.to ? ` \u2013 ${item.to}` : ''}
      </span>
      {item.soon
        ? <span className={styles.cardBadge}>Coming soon</span>
        : arrow && (
            <span className={styles.cardMore}>
              {item.external ? 'Visit site' : 'Learn more'} {arrow}
            </span>
          )}
    </>
  );
  if (item.href && item.external) {
    return <a className={styles.card} href={item.href} target="_blank" rel="noopener noreferrer">{inner}</a>;
  }
  if (item.href) {
    return <Link className={styles.card} href={item.href}>{inner}</Link>;
  }
  return <div className={`${styles.card} ${styles.cardStatic}`}>{inner}</div>;
}

export default function Experience() {
  return (
    <main className="container">
      <header className={styles.head}>
        <h1 className={styles.title}><span className={styles.titleInner}>My experience</span></h1>
      </header>

      <section className={styles.group}>
        <Reveal>
          <h2 className={styles.groupLabel}><span className="sectionLabel">Work</span></h2>
        </Reveal>
        <div className={styles.grid}>
          {orderedWork.map((item, i) => (
            <Reveal className={styles.cell} key={item.title} delay={Math.min(i, 5) * 45}>
              <Card item={item} />
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
