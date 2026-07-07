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
          <h1 className={styles.name}><span className={styles.nameInner}>Alex Yoza</span></h1>
          <p className={styles.lede}>
            I build <span className="serif italic">software that stays up</span> and
            interfaces that feel inevitable.
          </p>
          <div className={styles.ctaRow}>
            <Link href="/work" className={`${styles.cta} ${styles.ctaPrimary}`}>View experience →</Link>
            <Link href="/contact" className={styles.cta}>Get in touch →</Link>
          </div>
        </div>
        <div className={styles.portrait}>
          <Image src="/portrait.png" alt="Alex Yoza" fill sizes="(max-width: 860px) 70vw, 380px" priority />
        </div>
      </header>

      <hr className="rule" />

      {/* ---- facts ---- */}
      <section>
        <Reveal className={styles.facts}>
          <div className={styles.metaBlock}>
            <span className={styles.metaLabel}>Now</span>
            <span className={styles.metaValue}>Associate SWE</span>
            <span className={styles.metaSub}>Capital One</span>
          </div>
          <div className={styles.metaBlock}>
            <span className={styles.metaLabel}>Currently based</span>
            <span className={styles.metaValue}>Richmond, Virginia</span>
          </div>
        </Reveal>
      </section>

      <hr className="rule" />

      {/* ---- intro blurb ---- */}
      <section className={styles.about}>
        <Reveal className={styles.aboutBody}>
          <p>
            UCSD computer science grad now working on core modernization and common
            capability and tooling at Capital One. On the side I&apos;m building a language
            learning app (Nisatsu) and an AI workflow orchestration platform (Ponzu). I care
            about systems that stay up and interfaces that feel inevitable.
          </p>
        </Reveal>
      </section>
    </main>
  );
}
