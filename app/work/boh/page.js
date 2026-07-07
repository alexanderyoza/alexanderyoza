import React from 'react'
import styles from '../../../styles/work.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Reveal from '../../../components/Reveal';

const POINTS = [
  'Automated redundant bank processes using Microsoft Power Automate, streamlining workflows and enhancing operational efficiency.',
  'Collaborated with the Software Engineering team to break down and delegate project tasks, ensuring timely completion and team alignment.',
  'Saved 1,500+ hours annually by automating manual bank reporting and processing tasks.',
  'Created Python scripts to process thousands of daily bank transactions and generate accurate reports.',
];

export default function Boh() {
  return (
    <main className="container">
      <Reveal className={styles.header}>
        <div className={styles.top}>
          <span className={styles.logoMark}>
            <Image src="/work/boh.png" alt="Bank of Hawaii" width={44} height={44} className={styles.logoImg} />
          </span>
          <span className={styles.date}>June 2022 – August 2022</span>
        </div>
      </Reveal>

      <Reveal className={styles.heroWrap} delay={60}>
        <div className={styles.hero}>
          <Image src="/work/boh-work.jpg" alt="Bank of Hawaii project sample" fill sizes="(max-width: 1200px) 100vw, 1152px" />
        </div>
      </Reveal>

      <div className={styles.content}>
        <Reveal className={styles.titleRow}>
          <div>
            <h1 className={styles.company}>Bank of Hawaii</h1>
            <p className={styles.position}>eSolutions Development Intern</p>
          </div>
          <span className={styles.location}>Honolulu, Hawaii</span>
        </Reveal>
        <Reveal>
          <ul className={styles.description}>
            {POINTS.map((p) => <li key={p}>{p}</li>)}
          </ul>
        </Reveal>
      </div>

      <Reveal>
        <Link href="/work" className={styles.back}>← Back to experience</Link>
      </Reveal>
    </main>
  )
}
