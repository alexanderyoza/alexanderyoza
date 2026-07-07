import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/page.module.css';
import Reveal from '../components/Reveal';

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
            capability and tooling at Capital One. On the side I&apos;m building a language
            learning app (Nisatsu) and an AI workflow orchestration platform (Ponzu). I care
            about systems that stay up and interfaces that feel inevitable.
          </p>
        </Reveal>
        <Reveal className={styles.aboutMeta} delay={80}>
          <div className={styles.metaBlock}>
            <span className={styles.metaLabel}>Now</span>
            <span className={styles.metaValue}>Capital One · Associate SWE</span>
          </div>
          <div className={styles.metaBlock}>
            <span className={styles.metaLabel}>Currently based</span>
            <span className={styles.metaValue}>Richmond, Virginia</span>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
