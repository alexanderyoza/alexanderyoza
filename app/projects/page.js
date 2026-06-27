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
  },
  {
    title: 'GSF LLC',
    blurb: 'Property and project showcase site for a Hawaii development company.',
    tech: ['svelte'],
    preview: '/projects/gsfhi/preview.png',
    href: 'https://gsfhi.com/',
    external: true,
  },
];

function CardInner({ p }) {
  return (
    <>
      <div className={`${styles.thumb} ${p.preview ? styles.thumbCover : styles.thumbMark}`}>
        {p.preview ? (
          <Image src={p.preview} alt={p.title} fill sizes="(max-width: 800px) 100vw, 560px" />
        ) : (
          <span className={styles.markImg}>
            <Image src={p.logo} alt={p.title} fill sizes="120px" />
          </span>
        )}
        {p.soon && <span className={styles.badge}>Coming soon</span>}
        {p.external && <span className={styles.live}>Live ↗</span>}
      </div>
      <div className={styles.body}>
        <h3>{p.title}</h3>
        <p className={styles.blurb}>{p.blurb}</p>
        <div className={styles.tech}>
          {p.tech.map((t) => (
            <span className={`${styles.techIcon} ${t === 'next' ? styles.techIconLight : ''}`} key={t}>
              <Image src={`/skills/${t}.png`} alt="" fill sizes="22px" />
            </span>
          ))}
        </div>
      </div>
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

      <div className={styles.grid}>
        {PROJECTS.map((p, i) => (
          <Reveal key={p.title} delay={(i % 2) * 80}>
            {p.href ? (
              <a className={styles.card} href={p.href} target="_blank" rel="noopener noreferrer">
                <CardInner p={p} />
              </a>
            ) : (
              <div className={`${styles.card} ${styles.static}`}>
                <CardInner p={p} />
              </div>
            )}
          </Reveal>
        ))}
      </div>
    </main>
  );
}
