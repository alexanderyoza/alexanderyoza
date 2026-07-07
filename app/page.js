import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/page.module.css';
import Reveal from '../components/Reveal';

const SKILLS = [
  ['java', 'Java'], ['cpp', 'C++'], ['c', 'C'], ['python', 'Python'],
  ['react', 'React'], ['next', 'Next.js'], ['node', 'Node.js'], ['svelte', 'Svelte'],
  ['angular', 'Angular'], ['firebase', 'Firebase'], ['mongo', 'MongoDB'], ['git', 'Git'],
];

const STACK = {
  Languages: ['TypeScript', 'Python', 'Go', 'Java', 'C / C++', 'SQL'],
  'Frameworks & UI': ['React', 'Next.js', 'React Native', 'FastAPI', 'Node.js', 'Tailwind'],
  'Cloud & infra': ['AWS', 'AWS CDK', 'Docker', 'CI/CD', 'Dev Tooling', 'PostgreSQL'],
};

const COURSES = [
  'Artificial Intelligence', 'Operating Systems', 'Data Structures', 'Computer Architecture',
  'Software Engineering', 'Database Systems', 'Algorithms', 'Cryptography',
];

export default function Home() {
  return (
    <main className="container">
      {/* ---- hero bento ---- */}
      <section className={`${styles.bento} ${styles.heroBento}`}>
        <Reveal className={`tile ${styles.intro}`}>
          <span className="eyebrow">Software Engineer · Richmond, VA</span>
          <h1 className={styles.name}>Alex <span className="accentText">Yoza</span></h1>
          <p className={styles.lede}>
            I work on core modernization and common capability &amp; tooling at
            Capital One — plus AI-assisted workflows and full-stack products, from
            the architecture to the last pixel.
          </p>
          <div className={styles.ctaRow}>
            <Link href="/work" className={styles.btnPrimary}>View experience</Link>
            <Link href="/projects" className={styles.btnGhost}>See projects</Link>
          </div>
        </Reveal>

        <Reveal className={`tile ${styles.portraitTile}`} delay={60}>
          <Image src="/portrait.png" alt="Alex Yoza" fill sizes="(max-width: 900px) 100vw, 300px" />
        </Reveal>

        <Reveal className={`tile ${styles.nowTile}`} delay={100}>
          <span className="eyebrow">Now</span>
          <span className={styles.nowLogo}>
            <Image src="/work/capitalone/logo.png" alt="Capital One" fill sizes="140px" />
          </span>
          <p className={styles.nowRole}>Associate Software Engineer</p>
        </Reveal>

        <Reveal className={`tile ${styles.statTile} ${styles.tileA}`} delay={140}>
          <span className={styles.statNum}>1B+</span>
          <span className={styles.statLabel}>requests a day on the service I build on</span>
        </Reveal>
      </section>

      {/* ---- about bento ---- */}
      <section className={styles.bento}>
        <Reveal className={`tile ${styles.bioTile}`}>
          <span className="eyebrow">About</span>
          <p className={styles.bio}>
            UCSD computer science grad now working on core modernization and common
            capability &amp; tooling at Capital One. On the side I&apos;m building a
            language-learning app (Nisatsu) and an AI workflow-orchestration platform
            (Ponzu). I care about systems that stay up and interfaces that feel
            inevitable.
          </p>
          <div className={styles.bioLinks}>
            <Link href="/contact" className={styles.btnPrimary}>Get in touch</Link>
            <Link href="/work" className={styles.textLink}>View my experience →</Link>
          </div>
        </Reveal>

        <Reveal className={`tile ${styles.statTile} ${styles.tileC}`} delay={60}>
          <span className={styles.statNum}>1,500+</span>
          <span className={styles.statLabel}>hours a year automated at Bank of Hawaii</span>
        </Reveal>

        <Reveal className={`tile ${styles.statTile} ${styles.tileD}`} delay={100}>
          <span className={styles.statNum}>2</span>
          <span className={styles.statLabel}>companies I&apos;m building — Nisatsu &amp; Ponzu</span>
        </Reveal>
      </section>

      {/* ---- skills ---- */}
      <section className={styles.section}>
        <Reveal><span className="eyebrow">Tools I reach for</span></Reveal>
        <Reveal className={`tile ${styles.skillsTile}`} delay={40}>
          <div className={styles.skillGrid}>
            {SKILLS.map(([file, label]) => (
              <span className={styles.skillChip} key={file}>
                <span className={`${styles.skillIcon} ${file === 'next' ? styles.skillIconLight : ''}`}>
                  <Image src={`/skills/${file}.png`} alt="" fill sizes="28px" />
                </span>
                {label}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ---- full stack ---- */}
      <section className={styles.section}>
        <Reveal><span className="eyebrow">Full stack</span></Reveal>
        <div className={styles.stackGrid}>
          {Object.entries(STACK).map(([group, items], gi) => (
            <Reveal className={`tile ${styles.stackTile}`} key={group} delay={gi * 60}>
              <h3 className={styles.stackHeading}>{group}</h3>
              <div className={styles.tags}>
                {items.map((t) => <span className={styles.tag} key={t}>{t}</span>)}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---- education ---- */}
      <section className={styles.section}>
        <Reveal><h2 className={styles.eduTitle}>Education</h2></Reveal>
        <div className={styles.eduGrid}>
          <Reveal className={`tile ${styles.eduCard}`}>
            <span className={styles.eduLogo}>
              <Image src="/ucsd.png" alt="UC San Diego" fill sizes="56px" />
            </span>
            <h3>University of California, San Diego</h3>
            <p className={styles.eduMeta}>B.S. Computer Science · La Jolla, CA</p>
            <p className={styles.eduMeta}>Sep 2021 – Dec 2024</p>
            <div className={styles.courseTags}>
              {COURSES.map((c) => <span className={styles.tag} key={c}>{c}</span>)}
            </div>
          </Reveal>
          <Reveal className={`tile ${styles.eduCard}`} delay={80}>
            <span className={styles.eduLogo}>
              <Image src="/icu.png" alt="International Christian University" fill sizes="56px" />
            </span>
            <h3>International Christian University</h3>
            <p className={styles.eduMeta}>Exchange Program · Mitaka, Tokyo, Japan</p>
            <p className={styles.eduMeta}>Aug 2024 – Nov 2024</p>
            <div className={styles.courseTags}>
              <span className={styles.tag}>Japanese (Conversational)</span>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
