import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/page.module.css';
import Reveal from '../components/Reveal';
import BackgroundWaves from '../components/BackgroundWaves';

/* order and labels as they were on the original landing page */
const SKILLS = [
  ['java', 'Java'], ['cpp', 'C++'], ['c', 'C'], ['python', 'Python'],
  ['svelte', 'Svelte'], ['react', 'React.js'], ['next', 'Next.js'], ['firebase', 'Firebase'],
  ['angular', 'Angular'], ['node', 'Node.js'], ['mongo', 'MongoDB'], ['git', 'git'],
];

const COURSES = [
  'Artificial Intelligence', 'Object Oriented Design', 'Data Structures',
  'Computer Architecture', 'Software Engineering', 'Database Systems',
  'Algorithms Design', 'Cryptography', 'Operating Systems',
];

export default function Home() {
  return (
    <main className="container">
      {/* fixed wave field, scrubbed across the whole page scroll */}
      <BackgroundWaves />

      {/* ---- intro: text left, square framed portrait right, skills strip below ---- */}
      <section className={styles.introductionContainer}>
        <div className={styles.sectionContent}>
          <div className={styles.introText}>
            <h1 className={styles.name}>
              <span className={styles.nameInner}>Alex Yoza</span>
            </h1>
            <h2 className={styles.lede}>
              I&rsquo;m a software engineer building <span className="serif italic">AI workflows</span>,
              scalable systems, and applications people can actually use.
            </h2>
            <div className={styles.facts}>
              <span className={styles.fact}>
                <span className={styles.factLabel}>Associate SWE</span>
                <span className={styles.factValue}>Capital One</span>
              </span>
              <span className={styles.fact}>
                <span className={styles.factLabel}>Currently based</span>
                <span className={styles.factValue}>Richmond, Virginia</span>
              </span>
            </div>
            <div className={styles.ctaRow}>
              <Link href="/work" className={`${styles.cta} ${styles.ctaPrimary}`}>View experience →</Link>
              <Link href="/contact" className={styles.cta}>Get in touch →</Link>
            </div>
          </div>
          <div className={styles.introImage}>
            <Image src="/portrait.png" alt="Alex Yoza" fill sizes="(max-width: 1000px) 62vw, 40vh" priority />
          </div>
        </div>

        {/* hover a mark for its name */}
        <div className={styles.skills}>
          {SKILLS.map(([file, label]) => (
            <div className={styles.popupContainer} key={file}>
              <div className={styles.popup}>{label}</div>
              <div className={styles.skillImageContainer}>
                <Image
                  src={`/skills/${file}.png`}
                  alt={label}
                  fill
                  sizes="100px"
                  className={`${styles.skillImage} ${file === 'next' ? styles.skillImageInvert : ''}`}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---- about ---- */}
      <section className={styles.aboutContainer}>
        <Reveal className={styles.aboutBody}>
          <p>
            Hello, I&rsquo;m a UC San Diego computer science graduate working at Capital One
            on core modernization, common capabilities, and internal tools.
          </p>
          <p>
            My favorite problems sit between complicated systems and the people who have
            to use them. I like turning repetitive workflows into tools that feel clear,
            reliable, and maintainable long after the first release.
          </p>
          <p>
            Outside of work, I&rsquo;m building Nisatsu, a language learning app, and Ponzu, an
            AI workflow orchestration platform. That work has made me especially
            interested in using AI throughout the development process, from planning and
            implementation to testing and content work, without giving up quality or
            control.
          </p>
        </Reveal>
      </section>

      {/* ---- education ---- */}
      <section className={styles.schoolContainer}>
        <div className={styles.sectionContent}>
          <div className={styles.schoolText}>
            <h2>University of California San Diego</h2>
            <h3>La Jolla, California</h3>
            <h3>Bachelor of Science, Computer Science</h3>
            <h4>September 2021 &ndash; December 2024</h4>
          </div>
          <div className={`${styles.introImage} ${styles.logoPlate}`}>
            <Image src="/ucsd.png" alt="UC San Diego" fill sizes="(max-width: 1000px) 62vw, 40vh" />
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
      </section>

      <section className={styles.schoolContainer}>
        <div className={styles.sectionContent}>
          <div className={styles.schoolText}>
            <h2>International Christian University</h2>
            <h3>Mitaka, Tokyo, Japan</h3>
            <h3>One-Term Exchange Program</h3>
            <h4>August 2024 &ndash; November 2024</h4>
          </div>
          <div className={`${styles.introImage} ${styles.logoPlate}`}>
            <Image src="/icu.png" alt="International Christian University" fill sizes="(max-width: 1000px) 62vw, 40vh" />
          </div>
        </div>
      </section>
    </main>
  );
}
