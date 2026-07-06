import React from 'react'
import styles from '../../../styles/work.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Reveal from '../../../components/Reveal';

const POINTS = [
  'Assumed a leadership role in planning and developing a full-stack web application, driving project direction and team collaboration.',
  'Improved team efficiency by applying agile development practices, ensuring a smooth workflow.',
  'Built a web platform using React.js, Node.js, and Google Firebase to help college students discover age-appropriate locations, integrating seamless functionality and a user-friendly interface.',
];

export default function SDSC() {
  return (
    <main className="container">
      <Reveal className={styles.header}>
        <span className="eyebrow">Experience</span>
        <div className={styles.top}>
          <span className={styles.logoMark}>
            <Image src="/work/sdsc.jpeg" alt="San Diego Supercomputer Center" width={44} height={44} className={styles.logoImg} />
          </span>
          <span className={styles.date}>June 2024 – August 2024</span>
        </div>
      </Reveal>

      <Reveal className={styles.heroWrap} delay={60}>
        <div className={styles.hero}>
          <Image src="/work/sdsc-work.png" alt="San Diego Supercomputer Center project sample" fill sizes="(max-width: 1200px) 100vw, 1152px" />
        </div>
      </Reveal>

      <div className={styles.content}>
        <Reveal className={styles.titleRow}>
          <div>
            <h1 className={styles.company}>San Diego Supercomputer Center</h1>
            <p className={styles.position}>SDSC Developer Intern</p>
          </div>
          <span className={styles.location}>San Diego, California</span>
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
