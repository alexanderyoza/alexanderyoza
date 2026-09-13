'use client';

import React, { useEffect, useRef } from 'react';
import Logo from './Logo';
import styles from '../styles/components/introCurtain.module.css';

/**
 * Opening curtain for the landing page. The viewport starts as a solid field
 * of the wave blue with the monogram centred on it; page-coloured waves then
 * wash up from the bottom until the blue is gone, and the curtain fades out to
 * reveal the nav and page underneath.
 *
 * The fade-out and the monogram fade are CSS, not JS, so the curtain always
 * clears itself even if this script never runs — the worst case is a blue
 * screen that fades, never one that sticks.
 */

const WASH_START_MS = 180;
const WASH_MS = 1000;

/* page-coloured bands that rise to cover the blue */
const BANDS = [
  { amp: 30, len: 920, speed: 0.55, lead: 0.00 },
  { amp: 22, len: 610, speed: 0.78, lead: 0.07 },
  { amp: 15, len: 370, speed: 1.05, lead: 0.14 },
];

export default function IntroCurtain() {
  const canvasRef = useRef(null);
  const rafRef = useRef(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let w = 0;
    let h = 0;
    let blue = '#0A6FD8';
    let paper = '#F5F5F5';

    const readTheme = () => {
      const cs = getComputedStyle(document.documentElement);
      blue = cs.getPropertyValue('--wave').trim() || blue;
      paper = cs.getPropertyValue('--bg').trim() || paper;
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    readTheme();
    resize();
    window.addEventListener('resize', resize);

    let start = 0;
    const tick = (ts) => {
      if (!start) start = ts;
      const elapsed = ts - start;
      const raw = Math.min(1, Math.max(0, (elapsed - WASH_START_MS) / WASH_MS));
      // easeInOutCubic so the wash leaves and arrives gently
      const wash =
        raw < 0.5 ? 4 * raw * raw * raw : 1 - Math.pow(-2 * raw + 2, 3) / 2;
      const t = ts / 1000;

      ctx.fillStyle = blue;
      ctx.fillRect(0, 0, w, h);

      ctx.fillStyle = paper;
      BANDS.forEach((B) => {
        // the crest line travels from below the fold to above the top
        const base = h * (1.18 - (wash + B.lead) * 1.36);
        ctx.beginPath();
        ctx.moveTo(0, h);
        ctx.lineTo(0, base);
        for (let x = 0; x <= w; x += 8) {
          const k = (x / B.len) * Math.PI * 2;
          const y =
            base +
            Math.sin(k + t * B.speed) * B.amp +
            Math.sin(k * 0.5 + t * B.speed * 1.7) * B.amp * 0.4;
          ctx.lineTo(x, y);
        }
        ctx.lineTo(w, h);
        ctx.closePath();
        ctx.fill();
      });

      // stop once the curtain has finished fading; nothing left to draw
      if (elapsed < WASH_START_MS + WASH_MS + 500) {
        rafRef.current = requestAnimationFrame(tick);
      }
    };
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className={styles.curtain} aria-hidden="true">
      <canvas ref={canvasRef} className={styles.canvas} />
      <span className={styles.mark}>
        <Logo size={92} />
      </span>
    </div>
  );
}
