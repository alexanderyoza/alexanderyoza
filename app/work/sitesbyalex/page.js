import React from 'react'
import styles from '../../../styles/work.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Reveal from '../../../components/Reveal';
import Logo from '../../../components/Logo';

const POINTS = [
  "Strengthened communication skills by effectively understanding and aligning with clients' business goals, using Firebase and Next.js to build responsive, scalable solutions.",
  'Researched and applied design techniques to create visually engaging, simple, and effective website designs.',
  'Studied website testing methods to improve consistency and user experience while minimizing errors.',
];

export default function Freelance() {
  return (
    <main className="container">
      <Reveal className={styles.header}>
        <div className={styles.top}>
          <span className={styles.logoMark}>
            <Logo size={44} />
          </span>
          <span className={styles.date}>June 2023 – Present</span>
        </div>
      </Reveal>

      <Reveal className={styles.heroWrap} delay={60}>
        <div className={styles.hero}>
          <Image src="/work/freelance-work.png" alt="SitesByAlex client work sample" fill sizes="(max-width: 1200px) 100vw, 1152px" />
        </div>
      </Reveal>

      <div className={styles.content}>
        <Reveal className={styles.titleRow}>
          <div>
            <h1 className={styles.company}>SitesByAlex</h1>
            <p className={styles.position}>Web Developer</p>
          </div>
          <span className={styles.location}>Phoenix, Arizona</span>
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
