'use client';

import React, { useEffect, useRef, useState } from 'react';
import styles from '../styles/components/backgroundWaves.module.css';

/**
 * Fixed full-page ocean drawn to canvas and scrubbed by page scroll: the swell
 * rises and the crests travel as you move down the page, easing toward the
 * scroll target rather than snapping to it.
 *
 * Colours come from the theme tokens, so it follows the light/dark toggle.
 * Honours prefers-reduced-motion by drawing one static frame and stopping.
 */

/* how long the opening swell takes to settle to its resting position */
const INTRO_MS = 1800;

/* band: amplitude px, wavelength px, drift speed, resting height, opacity */
const LAYERS = [
  { amp: 26, len: 1180, speed: 0.016, rest: 0.63, alpha: 0.055 },
  { amp: 34, len: 860, speed: 0.024, rest: 0.71, alpha: 0.065 },
  { amp: 24, len: 600, speed: 0.034, rest: 0.79, alpha: 0.075 },
  { amp: 30, len: 410, speed: 0.046, rest: 0.87, alpha: 0.085 },
  { amp: 18, len: 260, speed: 0.060, rest: 0.95, alpha: 0.10 },
];

function rgba(hex, alpha) {
  const h = hex.replace('#', '').trim();
  const full = h.length === 3 ? h.split('').map((c) => c + c).join('') : h;
  const n = parseInt(full, 16);
  if (Number.isNaN(n)) return `rgba(0, 123, 255, ${alpha})`;
  return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${alpha})`;
}

export default function BackgroundWaves() {
  const canvasRef = useRef(null);
  const rafRef = useRef(0);
  const target = useRef(0);
  const current = useRef(0);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const apply = () => setReduced(mq.matches);
    apply();
    mq.addEventListener('change', apply);
    return () => mq.removeEventListener('change', apply);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let w = 0;
    let h = 0;
    let accent = '#007BFF';

    const readTheme = () => {
      const cs = getComputedStyle(document.documentElement);
      accent =
        cs.getPropertyValue('--wave').trim() ||
        cs.getPropertyValue('--secondary').trim() ||
        '#007BFF';
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

    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight || 1;
      target.current = Math.min(1, Math.max(0, window.scrollY / max));
    };

    const draw = (t, intro = 1) => {
      const p = current.current;
      ctx.clearRect(0, 0, w, h);

      // on first load the whole viewport is water; it sinks to rest as the
      // page comes in, swelling a little higher on the way down
      const lift = (1 - intro) * 0.66;
      const swell = 1 + (1 - intro) * 0.35;

      LAYERS.forEach((L, i) => {
        // scroll lifts the swell and carries the crests sideways
        const base = h * (L.rest - lift - p * 0.24);
        // Crests travel sideways as you scroll and as the opening swell settles.
        // The intro term is a fixed fraction of a wavelength per band rather
        // than a distance divided by it — dividing made the short-wavelength
        // bands sweep ~9 wavelengths in 1.8s, which read as thrashing.
        const phase =
          t * L.speed +
          p * ((760 + i * 280) / L.len) * Math.PI * 2 +
          (1 - intro) * (0.55 + i * 0.12) * Math.PI * 2;

        ctx.beginPath();
        ctx.moveTo(0, h);
        ctx.lineTo(0, base);
        for (let x = 0; x <= w; x += 8) {
          const k = (x / L.len) * Math.PI * 2;
          const amp = L.amp * swell;
          const y =
            base +
            Math.sin(k + phase) * amp +
            Math.sin(k * 0.5 + phase * 1.7) * amp * 0.45;
          ctx.lineTo(x, y);
        }
        ctx.lineTo(w, h);
        ctx.closePath();
        ctx.fillStyle = rgba(accent, L.alpha);
        ctx.fill();
      });
    };

    readTheme();
    resize();
    onScroll();

    // repaint on theme change (toggle sets data-theme; system pref may flip too)
    const themeObserver = new MutationObserver(() => {
      readTheme();
      if (reduced) draw(0, 1);
    });
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });
    const scheme = window.matchMedia('(prefers-color-scheme: dark)');
    const onScheme = () => {
      readTheme();
      if (reduced) draw(0, 1);
    };
    scheme.addEventListener('change', onScheme);

    const onResize = () => {
      resize();
      onScroll();
      if (reduced) draw(0, 1);
    };
    window.addEventListener('resize', onResize);

    if (reduced) {
      current.current = target.current;
      draw(0, 1);
    } else {
      // paint the opening frame up front — a full screen of water — so the
      // field is never blank while waiting on the first animation frame
      current.current = target.current;
      draw(0, 0);
      window.addEventListener('scroll', onScroll, { passive: true });

      let start = 0;
      const tick = (ts) => {
        if (!start) start = ts;
        const raw = Math.min(1, (ts - start) / INTRO_MS);
        const intro = 1 - Math.pow(1 - raw, 3); // easeOutCubic
        current.current += (target.current - current.current) * 0.08;
        draw(ts / 1000, intro);
        rafRef.current = requestAnimationFrame(tick);
      };
      rafRef.current = requestAnimationFrame(tick);
    }

    return () => {
      themeObserver.disconnect();
      scheme.removeEventListener('change', onScheme);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, [reduced]);

  return (
    <div className={styles.bg} aria-hidden="true">
      <canvas ref={canvasRef} className={styles.canvas} />
      <div className={styles.veil} />
    </div>
  );
}
