import React from 'react'
import styles from '../../../styles/projectInfo.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Reveal from '../../../components/Reveal';

const STACK = [
  ['/skills/react.png', 'React Native', false],
  ['/skills/firebase.png', 'Firebase', false],
];

const SHOTS = [
  ['/projects/language-app/home.png', 'Flashcard app home screen'],
  ['/projects/language-app/set.png', 'Flashcard app set screen'],
  ['/projects/language-app/english.png', 'Flashcard app English side'],
  ['/projects/language-app/japanese.png', 'Flashcard app Japanese side'],
];

export default function LanguageApp() {
  return (
    <main className="container">
      <Reveal className={styles.header}>
        <span className="eyebrow">Project</span>
        <h1 className={styles.title}>Flashcard Mobile App</h1>
        <div className={styles.meta}>
          <div className={styles.skills}>
            {STACK.map(([src, label, light]) => (
              <span className={`${styles.skillIcon} ${light ? styles.skillIconLight : ''}`} key={src}>
                <Image src={src} alt={label} fill sizes="28px" />
              </span>
            ))}
          </div>
          <span className={styles.date}>August 2023</span>
        </div>
      </Reveal>

      <section className={styles.gallery}>
        <Reveal>
          <span className="eyebrow">Gallery</span>
        </Reveal>
        <div className={styles.galleryGrid}>
          {SHOTS.map(([src, alt], i) => (
            <Reveal className={`${styles.shotReveal} ${styles.shotRevealTall}`} key={src} delay={(i % 2) * 80}>
              <div className={`${styles.shot} ${styles.shotTall}`}>
                <Image src={src} alt={alt} fill sizes="(max-width: 800px) 45vw, 300px" />
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
