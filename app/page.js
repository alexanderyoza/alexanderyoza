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
            I’m a software engineer building <span className="serif italic">AI workflows</span>,
            scalable systems, and applications people can actually use.
          </p>
          <div className={styles.ctaRow}>
            <Link href="/work" className={`${styles.cta} ${styles.ctaPrimary}`}>View experience →</Link>
            <Link href="/contact" className={styles.cta}>Get in touch →</Link>
          </div>
          <div className={styles.facts}>
            <div className={styles.metaBlock}>
              <span className={styles.metaLabel}>Associate SWE</span>
              <span className={styles.metaValue}>Capital One</span>
            </div>
            <div className={styles.metaBlock}>
              <span className={styles.metaLabel}>Currently based</span>
              <span className={styles.metaValue}>Richmond, Virginia</span>
            </div>
          </div>
        </div>
        <div className={styles.portrait}>
          <Image src="/portrait.png" alt="Alex Yoza" fill sizes="(max-width: 860px) 70vw, 380px" priority />
        </div>
      </header>

      <hr className="rule" />

      {/* ---- intro blurb ---- */}
      <section className={styles.about}>
        <Reveal>
          <span className="sectionLabel">About</span>
        </Reveal>
        <Reveal className={styles.aboutBody}>
          <p>
            Hello, I’m a UC San Diego computer science graduate working at Capital One
            on core modernization, common capabilities, and internal tools.
          </p>
          <p>
            My favorite problems sit between complicated systems and the people who have
            to use them. I like turning repetitive workflows into tools that feel clear,
            reliable, and maintainable long after the first release.
          </p>
          <p>
            Outside of work, I’m building Nisatsu, a language learning app, and Ponzu, an
            AI workflow orchestration platform. That work has made me especially
            interested in using AI throughout the development process, from planning and
            implementation to testing and content work, without giving up quality or
            control.
          </p>
        </Reveal>
      </section>
    </main>
  );
}
