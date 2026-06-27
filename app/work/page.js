import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/workOverview.module.css';
import Reveal from '../../components/Reveal';

const WORK = [
  {
    title: 'Capital One',
    role: 'Associate Software Engineer',
    meta: 'Team StreamPro, Core Modernization',
    date: 'Feb 2026 – Present',
    logo: '/work/capitalone/logo.png',
    wordmark: true,
    whiten: true,
  },
  {
    title: 'Ponzu',
    role: 'CTO & Co-Founder',
    meta: 'AI workflow orchestration platform',
    date: 'Sep 2025 – Present',
    logo: '/work/ponzu/logo.png',
    soon: true,
  },
  {
    title: 'Nisatsu',
    role: 'Founder & Software Engineer',
    meta: 'AI language-learning app',
    date: 'Jan 2026 – Present',
    logo: '/work/nisatsu/logo.png',
    soon: true,
  },
  {
    title: 'SitesByAlex',
    role: 'Web Developer & Consultant',
    meta: 'Client websites & web apps',
    date: 'Jun 2023 – Present',
    preview: '/work/sitesbyalex/preview.png',
    href: 'https://sitesbyalex.com/',
    external: true,
  },
  {
    title: 'San Diego Supercomputer Center',
    role: 'SDSC Developer Intern',
    meta: 'React · Node · Firebase',
    date: 'Jun 2024 – Aug 2024',
    preview: '/work/sdsc.jpeg',
    href: '/work/sdsc',
  },
  {
    title: 'Bank of Hawaii',
    role: 'eSolutions Development Intern',
    meta: 'Power Automate · Python automation',
    date: 'Jun 2022 – Aug 2022',
    preview: '/work/boh.png',
    href: '/work/boh',
  },
];

function CardInner({ item }) {
  return (
    <>
      <div className={`${styles.thumb} ${item.preview ? styles.thumbCover : styles.thumbMark}`}>
        {item.preview ? (
          <Image src={item.preview} alt={item.title} fill sizes="(max-width: 800px) 100vw, 380px" />
        ) : item.logo ? (
          <span className={`${styles.markImg} ${item.wordmark ? styles.markWide : ''} ${item.whiten ? styles.markWhite : ''}`}>
            <Image src={item.logo} alt={item.title} fill sizes="200px" />
          </span>
        ) : (
          <span className={styles.markText}>{item.mark?.text}</span>
        )}
        {item.soon && <span className={styles.badge}>Coming soon</span>}
        {item.external && <span className={styles.live}>Live ↗</span>}
      </div>
      <div className={styles.body}>
        <h3>{item.title}</h3>
        <p className={styles.role}>{item.role}</p>
        <p className={styles.meta}>{item.meta}</p>
        <span className={styles.date}>{item.date}</span>
      </div>
    </>
  );
}

export default function Work() {
  return (
    <main className="container">
      <header className={styles.head}>
        <h1 className={styles.title}>Experience</h1>
        <p className={styles.lede}>
          From banking automation to a billion-request-a-day service — plus the
          companies I&apos;m building.
        </p>
      </header>

      <div className={styles.grid}>
        {WORK.map((item, i) => (
          <Reveal key={item.title} delay={(i % 3) * 70}>
            {item.href ? (
              item.external ? (
                <a className={styles.card} href={item.href} target="_blank" rel="noopener noreferrer">
                  <CardInner item={item} />
                </a>
              ) : (
                <Link className={styles.card} href={item.href}>
                  <CardInner item={item} />
                </Link>
              )
            ) : (
              <div className={`${styles.card} ${styles.static}`}>
                <CardInner item={item} />
              </div>
            )}
          </Reveal>
        ))}
      </div>
    </main>
  );
}
