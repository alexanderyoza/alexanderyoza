import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/projects.module.css';
import Reveal from '../../components/Reveal';

const PROJECTS = [
  {
    title: 'AGY',
    blurb: 'My independent software studio — products, experiments, and digital systems.',
    tech: ['next', 'react'],
    preview: '/projects/agy/preview.png',
    href: 'https://agyllc.com/',
    external: true,
  },
  {
    title: 'Trading Lab',
    blurb: 'Research, simulate, and score algorithmic trading strategies with sandboxed, validated plugins.',
    tech: ['python'],
    preview: '/projects/stockapi/stockapi-cover.png',
    soon: true,
  },
  {
    title: 'Union Hills Family Dentistry',
    blurb: 'Full-stack marketing site and patient-facing pages for a Phoenix dental practice.',
    tech: ['next', 'react', 'node'],
    preview: '/projects/uhfd/preview.png',
    href: 'https://unionhillsfamilydentistry.com/',
    external: true,
    detail: '/projects/uhfd',
  },
  {
    title: 'GSF LLC',
    blurb: 'Property and project showcase site for a Hawaii development company.',
    tech: ['svelte'],
    preview: '/projects/gsfhi/preview.png',
    href: 'https://gsfhi.com/',
    external: true,
    detail: '/projects/gsfhi',
  },
];

function CardInner({ p }) {
  return (
    <>
      <div className={styles.projectBackground}>
        <Image
          src={p.preview}
          alt={p.title}
          fill
          sizes="(max-width: 800px) 100vw, 1200px"
          className={styles.projectImage}
        />
      </div>
      <div className={styles.projectContent}>
        <div className={styles.projectInfo}>
          <h2>{p.title}</h2>
          <div className={styles.projectLine} />
          <p className={styles.blurb}>{p.blurb}</p>
          <div className={styles.projectSkills}>
            {p.tech.map((t) => (
              <span className={styles.imageContainer} key={t}>
                <Image
                  src={`/skills/${t}.png`}
                  alt={t}
                  fill
                  sizes="34px"
                  className={`${styles.skillImage} ${t === 'next' ? styles.skillImageLight : ''}`}
                />
              </span>
            ))}
          </div>
        </div>
        {p.external && <span className={styles.learnMore}>Visit site ↗</span>}
      </div>
      {p.soon && <span className={styles.badge}>Coming soon</span>}
      {p.external && <span className={styles.live}>Live ↗</span>}
    </>
  );
}

export default function Projects() {
  return (
    <main className="container">
      <header className={styles.head}>
        <span className="eyebrow">Projects</span>
        <h1 className={styles.title}>Things I&apos;ve built.</h1>
        <p className={styles.lede}>
          Shipped client work, products in progress, and experiments in between.
        </p>
      </header>

      <div className={styles.list}>
        {PROJECTS.map((p, i) => (
          <Reveal className={styles.item} key={p.title} delay={(i % 2) * 80}>
            {p.href ? (
              <a className={styles.project} href={p.href} target="_blank" rel="noopener noreferrer">
                <CardInner p={p} />
              </a>
            ) : (
              <div className={`${styles.project} ${styles.static}`}>
                <CardInner p={p} />
              </div>
            )}
            {p.detail && (
              <Link href={p.detail} className={styles.detail}>
                Gallery →
              </Link>
            )}
          </Reveal>
        ))}
      </div>
    </main>
  );
}
