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
            I build <span className="serif italic">reliable systems</span> and clear,
            useful interfaces.
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
            <span className={styles.metaLabel}>Associate SWE</span>
            <span className={styles.metaValue}>Capital One</span>
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
            Hello, I’m a UC San Diego Computer Science graduate currently working at
            Capital One on core modernization, common capabilities, and internal tooling.
          </p>
          <p>
            My experience spans automation, web development, and product engineering, with
            a focus on building reliable systems and clear, useful interfaces. I enjoy
            taking complex or repetitive workflows and turning them into tools that are
            easier to use, easier to maintain, and better suited to real world needs.
          </p>
          <p>
            Outside of work, I’m building Nisatsu, a language learning app, and Ponzu, an
            AI workflow orchestration platform. I’m especially interested in using AI to
            augment software development through workflows that support planning,
            implementation, testing, content generation, and faster iteration without
            losing quality or control.
          </p>
        </Reveal>
      </section>
    </main>
  );
}
