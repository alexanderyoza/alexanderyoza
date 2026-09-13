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
  'Cloud & infra': ['AWS', 'AWS CDK', 'Docker', 'CI/CD', 'Developer Tooling', 'PostgreSQL'],
};

const COURSES = [
  'Artificial Intelligence', 'Operating Systems', 'Data Structures', 'Computer Architecture',
  'Software Engineering', 'Database Systems', 'Algorithms', 'Cryptography',
];

export default function Home() {
  return (
    <main className="container">
      {/* ---------------------------------------------------------------- hero */}
      <section className={styles.introductionContainer}>
        <div className={styles.sectionContent}>
          <div className={styles.introText}>
            <span className={`eyebrow ${styles.eyebrowSpacer}`}>
              Software Engineer · Richmond, VA
            </span>
            <h1 className={styles.heroTitle}>
              Alex <span className="accentText">Yoza</span>
            </h1>
            <p className={styles.heroSub}>
              I work on core modernization and common capability and tooling at
              Capital One, plus AI-assisted workflows and full-stack products
              from the architecture to the last pixel.
            </p>
            <div className={styles.heroCtas}>
              <Link href="/work" className={styles.btnPrimary}>View experience</Link>
              <Link href="/projects" className={styles.btnGhost}>See projects</Link>
            </div>
          </div>
          <div className={styles.introImage}>
            <Image src="/portrait.png" alt="Alex Yoza" fill sizes="(max-width: 1000px) 200px, 440px" />
          </div>
        </div>

        <div className={styles.scrollCue} aria-hidden="true">
          <span>Scroll</span>
          <div className={styles.scrollLine} />
        </div>

        {/* skills strip — hover a mark for its name */}
        <div className={styles.skills}>
          {SKILLS.map(([file, label]) => (
            <div className={styles.popupContainer} key={file}>
              <div className={styles.popup}>{label}</div>
              <div className={styles.skillImageContainer}>
                <Image src={`/skills/${file}.png`} alt={label} fill sizes="100px" className={styles.skillImage} />
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* --------------------------------------------------------------- about */}
      <section className={styles.aboutSection}>
        <Reveal className={styles.aboutHead}>
          <span className="eyebrow">About</span>
          <h2 className={styles.aboutHeadline}>
            SWE at <strong>Capital One</strong>.
          </h2>
        </Reveal>
        <Reveal>
          <div className="rule" />
        </Reveal>
        <Reveal className={styles.aboutBody} delay={80}>
          <p>
            UCSD computer science grad now working on core modernization and
            common capability and tooling at Capital One. On the side I&apos;m
            working on a language-learning app and an AI workflow orchestration
            platform. I care about systems that stay up and interfaces that feel
            inevitable.
          </p>
          <div className={styles.introLinks}>
            <Link href="/contact" className={styles.btnPrimary}>Get in touch</Link>
            <Link href="/work" className={styles.textLink}>View my experience →</Link>
          </div>
        </Reveal>
      </section>

      {/* ---------------------------------------------------------- full stack */}
      <section className={styles.stackSection}>
        <Reveal className={styles.stackHead}>
          <span className="eyebrow">Tools I reach for</span>
          <h2 className={styles.stackTitle}>Full stack</h2>
        </Reveal>
        <div className={styles.stackGrid}>
          {Object.entries(STACK).map(([group, items], gi) => (
            <Reveal className={styles.stackGroup} key={group} delay={gi * 70}>
              <h3 className={styles.stackHeading}>{group}</h3>
              <div className={styles.tags}>
                {items.map((t) => (
                  <span className={styles.tag} key={t}>{t}</span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ----------------------------------------------------------- education */}
      <section className={styles.eduSection}>
        <Reveal className={styles.eduHead}>
          <span className="eyebrow">School</span>
          <h2 className={styles.eduTitle}>Education</h2>
        </Reveal>

        <div className={styles.schoolContainer}>
          <div className={styles.sectionContent}>
            <div className={styles.schoolText}>
              <h3>University of California, San Diego</h3>
              <p className={styles.schoolMeta}>La Jolla, California</p>
              <p className={styles.schoolMeta}>Bachelor of Science, Computer Science</p>
              <p className={styles.schoolMeta}>September 2021 – December 2024</p>
            </div>
            <div className={`${styles.introImage} ${styles.logoPlate}`}>
              <Image src="/ucsd.png" alt="UC San Diego" fill sizes="(max-width: 1000px) 200px, 440px" />
            </div>
          </div>
          <div className={styles.relevantCourses}>
            <div className={styles.tickerContainer1}>
              {COURSES.map((c) => <span key={c}>{c}</span>)}
            </div>
            <div className={styles.tickerContainer2}>
              {COURSES.map((c) => <span key={c}>{c}</span>)}
            </div>
          </div>
        </div>

        <div className={styles.schoolContainer}>
          <div className={styles.sectionContent}>
            <div className={styles.schoolText}>
              <h3>International Christian University</h3>
              <p className={styles.schoolMeta}>Mitaka, Tokyo, Japan</p>
              <p className={styles.schoolMeta}>One-Term Exchange Program</p>
              <p className={styles.schoolMeta}>August 2024 – November 2024</p>
            </div>
            <div className={`${styles.introImage} ${styles.logoPlate}`}>
              <Image src="/icu.png" alt="International Christian University" fill sizes="(max-width: 1000px) 200px, 440px" />
            </div>
          </div>
          <div className={styles.courseTags}>
            <span className={styles.tag}>Japanese (Conversational)</span>
          </div>
        </div>
      </section>
    </main>
  );
}
