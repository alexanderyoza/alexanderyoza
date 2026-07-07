import React from 'react'
import styles from '../../../styles/projectInfo.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Reveal from '../../../components/Reveal';

const STACK = [
  ['/skills/next.png', 'Next.js', true],
  ['/skills/react.png', 'React', false],
  ['/skills/node.png', 'Node.js', false],
];

const SHOTS = [
  ['/projects/uhfd/landing.png', 'Union Hills Family Dentistry landing page'],
  ['/projects/uhfd/services.png', 'Union Hills Family Dentistry services page'],
  ['/projects/uhfd/appointment.png', 'Union Hills Family Dentistry appointment page'],
];

export default function Uhfd() {
  return (
    <main className="container">
      <Reveal className={styles.header}>
        <h1 className={styles.title}>
          Union Hills Family Dentistry — <a href="https://www.unionhillsfamilydentistry.com/" target="_blank" rel="noopener noreferrer">Dental Practice Website</a>
        </h1>
        <div className={styles.meta}>
          <div className={styles.skills}>
            {STACK.map(([src, label, light]) => (
              <span className={`${styles.skillIcon} ${light ? styles.skillIconLight : ''}`} key={src}>
                <Image src={src} alt={label} fill sizes="28px" />
              </span>
            ))}
          </div>
          <span className={styles.date}>January 2025</span>
        </div>
      </Reveal>

      <section className={styles.gallery}>
        <Reveal>
          <span className="eyebrow">Gallery</span>
        </Reveal>
        <div className={styles.galleryGrid}>
          {SHOTS.map(([src, alt], i) => (
            <Reveal className={styles.shotReveal} key={src} delay={(i % 2) * 80}>
              <div className={styles.shot}>
                <Image src={src} alt={alt} fill sizes="(max-width: 800px) 100vw, 620px" />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal>
        <Link href="/projects" className={styles.back}>← Back to projects</Link>
      </Reveal>
    </main>
  )
}
