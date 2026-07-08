import React from 'react'
import styles from '../../../styles/projectInfo.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Reveal from '../../../components/Reveal';

const SHOTS = [
  ['/projects/gsfhi/landing.png', 'GSF LLC landing page'],
  ['/projects/gsfhi/about.png', 'GSF LLC about page'],
  ['/projects/gsfhi/projects.png', 'GSF LLC projects page'],
];

export default function Gsfhi() {
  return (
    <main className="container">
      <Reveal className={styles.header}>
        <h1 className={styles.title}>
          GSF LLC — <a href="https://gsfhi.com/" target="_blank" rel="noopener noreferrer">Housing Development Company Website</a>
        </h1>
        <div className={styles.meta}>
          <div className={styles.skills}>
            <span className={styles.skillIcon}>
              <Image src="/skills/svelte.png" alt="Svelte" fill sizes="28px" />
            </span>
          </div>
          <span className={styles.date}>December 2024</span>
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
        <Link href="/work" className={styles.back}>← Back to experience</Link>
      </Reveal>
    </main>
  )
}
