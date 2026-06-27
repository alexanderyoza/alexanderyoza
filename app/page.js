import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/page.module.css';
import BackgroundScrubVideo from '../components/BackgroundScrubVideo';
import Reveal from '../components/Reveal';

const SKILLS = [
  ['java', 'Java'], ['cpp', 'C++'], ['c', 'C'], ['python', 'Python'],
  ['react', 'React'], ['next', 'Next.js'], ['node', 'Node.js'], ['svelte', 'Svelte'],
  ['angular', 'Angular'], ['firebase', 'Firebase'], ['mongo', 'MongoDB'], ['git', 'Git'],
];

const STACK = {
  Languages: ['TypeScript', 'Python', 'Go', 'Java', 'C / C++', 'SQL'],
  'Frameworks & UI': ['React', 'Next.js', 'React Native', 'FastAPI', 'Node.js', 'Tailwind'],
  'Cloud & infra': ['AWS', 'AWS CDK', 'Docker', 'CI/CD', 'Developer Tooling', 'PostgreSQL'],
};

const COURSES = [
  'Artificial Intelligence', 'Operating Systems', 'Data Structures', 'Computer Architecture',
  'Software Engineering', 'Database Systems', 'Algorithms', 'Cryptography',
];

export default function Home() {
  return (
    <main>
      {/* ---- fixed full-page background video, scrubbed across the whole scroll ---- */}
      <BackgroundScrubVideo src="/hero/hero.mp4" poster={null} />

      <div className={styles.page}>
      <section className={styles.heroSection}>
        <div className={styles.hero}>
          <span className="eyebrow">Software Engineer · Richmond, VA</span>
          <h1 className={styles.heroTitle}>
            Alex <span className="gradientText">Yoza</span>
          </h1>
          <p className={styles.heroSub}>
            I work on core modernization and common capability and tooling at
            Capital One, plus AI-assisted workflows and full-stack products from
            the architecture to the last pixel.
          </p>
          <div className={styles.heroCtas}>
            <Link href="/work" className={styles.btnPrimary}>View experience</Link>
            <Link href="/projects" className={styles.btnGhost}>See projects</Link>
          </div>
        </div>
        <div className={styles.scrollCue} aria-hidden="true">
          <span>Scroll</span>
          <div className={styles.scrollLine} />
        </div>
      </section>

      <div className="container">
        {/* ---- intro ---- */}
        <section className={styles.intro}>
          <Reveal className={styles.introText}>
            <span className="eyebrow">About</span>
            <h2 className={styles.aboutHeadline}>
              <span>SWE at <strong>Capital One</strong>.</span>
            </h2>
            <p>
              UCSD computer science grad now working on core modernization and
              common capability and tooling at Capital One. On the side I'm
              working on a language-learning app and an AI workflow
              orchestration platform.
              I care about systems that stay up and interfaces that feel
              inevitable.
            </p>
            <div className={styles.introLinks}>
              <Link href="/contact" className={styles.btnPrimary}>Get in touch</Link>
              <Link href="/work" className={styles.textLink}>View my experience →</Link>
            </div>
          </Reveal>
          <Reveal className={styles.portrait} delay={80}>
            <Image src="/portrait.png" alt="Alex Yoza" fill sizes="(max-width: 800px) 80vw, 420px" />
            <div className={styles.portraitGlow} aria-hidden="true" />
          </Reveal>
        </section>

        {/* ---- skills marquee ---- */}
        <section className={styles.skillsSection}>
          <Reveal>
            <span className="eyebrow">Tools I reach for</span>
          </Reveal>
          <div className={styles.marquee}>
            <div className={styles.marqueeTrack}>
              {[...SKILLS, ...SKILLS].map(([file, label], i) => (
                <div className={styles.chip} key={`${file}-${i}`}>
                  <span className={`${styles.chipIcon} ${file === 'next' ? styles.chipIconLight : ''}`}>
                    <Image src={`/skills/${file}.png`} alt="" fill sizes="40px" />
                  </span>
                  {label}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---- full stack ---- */}
        <section className={styles.stackSection}>
          {Object.entries(STACK).map(([group, items], gi) => (
            <Reveal className={styles.stackGroup} key={group} delay={gi * 60}>
              <h3 className={styles.stackHeading}>{group}</h3>
              <div className={styles.tags}>
                {items.map((t) => (
                  <span className={styles.tag} key={t}>{t}</span>
                ))}
              </div>
            </Reveal>
          ))}
        </section>

        {/* ---- education ---- */}
        <section className={styles.eduSection}>
          <Reveal>
            <h2 className={styles.eduTitle}>Education</h2>
          </Reveal>
          <div className={styles.eduGrid}>
            <Reveal className={styles.eduCard}>
              <div className={styles.eduLogo}>
                <Image src="/ucsd.png" alt="UC San Diego" fill sizes="64px" />
              </div>
              <h3>University of California, San Diego</h3>
              <p className={styles.eduMeta}>B.S. Computer Science · La Jolla, CA</p>
              <p className={styles.eduMeta}>Sep 2021 – Dec 2024</p>
              <div className={styles.courseTags}>
                {COURSES.map((c) => <span className={styles.tag} key={c}>{c}</span>)}
              </div>
            </Reveal>
            <Reveal className={styles.eduCard} delay={80}>
              <div className={styles.eduLogo}>
                <Image src="/icu.png" alt="International Christian University" fill sizes="64px" />
              </div>
              <h3>International Christian University</h3>
              <p className={styles.eduMeta}>Exchange Program · Mitaka, Tokyo, Japan</p>
              <p className={styles.eduMeta}>Aug 2024 – Nov 2024</p>
              <div className={styles.courseTags}>
                <span className={styles.tag}>Japanese (Conversational)</span>
              </div>
            </Reveal>
          </div>
        </section>
      </div>
      </div>
    </main>
  );
}
