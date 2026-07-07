import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/page.module.css';
import Reveal from '../components/Reveal';

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

export default function Home() {
  return (
    <main className="container">
      {/* ---- masthead ---- */}
      <header className={styles.masthead}>
        <div className={styles.mastheadText}>
          <Reveal>
            <h1 className={styles.name}>Alex Yoza</h1>
          </Reveal>
          <Reveal delay={80}>
            <p className={styles.lede}>
              I build <span className="serif italic">software that stays up</span> and
              interfaces that feel inevitable.
            </p>
          </Reveal>
          <Reveal delay={140}>
            <div className={styles.ctaRow}>
              <Link href="/work" className={styles.cta}>View experience →</Link>
              <Link href="/contact" className={styles.cta}>Get in touch →</Link>
            </div>
          </Reveal>
        </div>
        <Reveal className={styles.portrait} delay={120}>
          <Image src="/portrait.png" alt="Alex Yoza" fill sizes="(max-width: 860px) 70vw, 380px" priority />
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

      {/* ---- education ---- */}
      <section className={styles.section}>
        <Reveal>
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
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
