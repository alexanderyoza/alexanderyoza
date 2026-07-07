import React from 'react';
import Link from 'next/link';
import styles from '../styles/page.module.css';
import Reveal from '../components/Reveal';

// Merged experience + projects — roles and things built, one index.
const WORK = [
  {
    year: '2026', title: 'Capital One', kind: 'Role',
    desc: 'Associate Software Engineer — core modernization and common capability & tooling.',
    href: '/work',
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
    year: '2024', title: 'San Diego Supercomputer Center', kind: 'Role',
    desc: 'Developer intern — led a full-stack platform in React, Node, and Firebase.',
    href: '/work/sdsc',
  },
  {
    year: '2023', title: 'SitesByAlex', kind: 'Studio',
    desc: 'Web developer & consultant — client sites and web apps.',
    href: 'https://sitesbyalex.com/', external: true,
  },
  {
    year: '2023', title: 'AGY', kind: 'Project',
    desc: 'My independent software studio — products and experiments.',
    href: 'https://agyllc.com/', external: true,
  },
];

const EDUCATION = [
  {
    year: '2021–24', school: 'University of California, San Diego',
    detail: 'B.S. Computer Science · La Jolla, CA',
  },
  {
    year: '2024', school: 'International Christian University',
    detail: 'Exchange program · Mitaka, Tokyo, Japan',
  },
];

function Row({ item }) {
  const inner = (
    <>
      <span className={styles.rowYear}>{item.year}</span>
      <span className={styles.rowMain}>
        <span className={styles.rowTitle}>{item.title}</span>
        <span className={styles.rowDesc}>{item.desc}</span>
      </span>
      <span className={styles.rowMeta}>
        <span className={styles.rowKind}>{item.kind}</span>
        <span className={styles.rowArrow}>{item.soon ? 'Soon' : item.external ? '↗' : '→'}</span>
      </span>
    </>
  );
  if (item.soon) return <div className={`${styles.row} ${styles.rowStatic}`}>{inner}</div>;
  if (item.external) return <a className={styles.row} href={item.href} target="_blank" rel="noopener noreferrer">{inner}</a>;
  return <Link className={styles.row} href={item.href}>{inner}</Link>;
}

export default function Home() {
  return (
    <main className="container">
      {/* ---- masthead ---- */}
      <header className={styles.masthead}>
        <Reveal>
          <span className="eyebrow">Software Engineer · Richmond, VA</span>
        </Reveal>
        <Reveal delay={60}>
          <h1 className={styles.name}>Alex Yoza</h1>
        </Reveal>
        <Reveal delay={120}>
          <p className={styles.lede}>
            I build <span className="serif italic">software that stays up</span> and
            interfaces that feel inevitable.
          </p>
        </Reveal>
        <Reveal delay={180}>
          <p className={styles.support}>
            Core modernization and common capability &amp; tooling at Capital One, plus
            AI-assisted workflows and full-stack products — from the architecture to the
            last pixel.
          </p>
        </Reveal>
      </header>

      <hr className="rule" />

      {/* ---- about ---- */}
      <section className={styles.about}>
        <Reveal className={styles.aboutBody}>
          <p>
            UCSD computer science grad now working on core modernization and common
            capability &amp; tooling at Capital One. On the side I&apos;m building a
            language-learning app (Nisatsu) and an AI workflow-orchestration platform
            (Ponzu). I care about systems that stay up and interfaces that feel inevitable.
          </p>
        </Reveal>
        <Reveal className={styles.aboutMeta} delay={80}>
          <div className={styles.metaBlock}>
            <span className={styles.metaLabel}>Now</span>
            <span className={styles.metaValue}>Capital One · Assoc. SWE</span>
          </div>
          <div className={styles.metaBlock}>
            <span className={styles.metaLabel}>Based</span>
            <span className={styles.metaValue}>Richmond, Virginia</span>
          </div>
          <div className={styles.metaBlock}>
            <span className={styles.metaLabel}>Elsewhere</span>
            <span className={styles.metaLinks}>
              <a href="https://www.linkedin.com/in/alex-yoza/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://github.com/alexanderyoza?tab=repositories" target="_blank" rel="noopener noreferrer">GitHub</a>
            </span>
          </div>
        </Reveal>
      </section>

      <hr className="rule" />

      {/* ---- selected work (roles + projects, merged) ---- */}
      <section className={styles.section}>
        <Reveal className={styles.sectionHead}>
          <h2 className={styles.sectionTitle}>Selected work</h2>
          <span className={styles.sectionNote}>Roles &amp; projects</span>
        </Reveal>
        <div className={styles.index}>
          {WORK.map((item, i) => (
            <Reveal key={item.title} delay={Math.min(i, 4) * 50}>
              <Row item={item} />
            </Reveal>
          ))}
        </div>
        <Reveal>
          <Link href="/work" className={styles.moreLink}>View all experience →</Link>
        </Reveal>
      </section>

      <hr className="rule" />

      {/* ---- education ---- */}
      <section className={styles.section}>
        <Reveal className={styles.sectionHead}>
          <h2 className={styles.sectionTitle}>Education</h2>
        </Reveal>
        <div className={styles.index}>
          {EDUCATION.map((e) => (
            <Reveal key={e.school}>
              <div className={`${styles.row} ${styles.rowStatic}`}>
                <span className={styles.rowYear}>{e.year}</span>
                <span className={styles.rowMain}>
                  <span className={styles.rowTitle}>{e.school}</span>
                  <span className={styles.rowDesc}>{e.detail}</span>
                </span>
                <span className={styles.rowMeta} />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <hr className="rule" />

      {/* ---- contact ---- */}
      <section className={styles.contact}>
        <Reveal>
          <span className="eyebrow">Contact</span>
          <h2 className={styles.contactTitle}>Let&apos;s build something.</h2>
          <p className={styles.contactLede}>
            Open to interesting problems and good conversation. The fastest way to reach
            me is email.
          </p>
          <a href="mailto:alex.yoza@gmail.com" className={styles.contactEmail}>alex.yoza@gmail.com</a>
        </Reveal>
      </section>
    </main>
  );
}
