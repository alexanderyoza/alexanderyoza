'use client';

import React, { useEffect, useRef, useState } from 'react';
import styles from '../styles/components/backgroundVideo.module.css';

/**
 * Fixed full-page background video, scrubbed by whole-page scroll progress
 * (frame 0 at the top of the page → last frame at the bottom). Sits behind all
 * content for the entire scroll. Falls back to the animated mesh/grid with no
 * src / on error / reduced-motion.
 */
export default function BackgroundScrubVideo({ src = null, poster = null }) {
  const videoRef = useRef(null);
  const rafRef = useRef(0);
  const target = useRef(0);
  const current = useRef(0);
  const [failed, setFailed] = useState(false);
  const [reduced, setReduced] = useState(false);
  const useVideo = Boolean(src) && !failed;
  const scrub = useVideo && !reduced;

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const apply = () => setReduced(mq.matches);
    apply();
    mq.addEventListener('change', apply);
    return () => mq.removeEventListener('change', apply);
  }, []);

  useEffect(() => {
    if (!scrub) return;
    const video = videoRef.current;
    if (!video) return;

    video.pause();

    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight || 1;
      const progress = Math.min(1, Math.max(0, window.scrollY / max));
      const dur = video.duration || 0;
      if (dur) target.current = progress * dur;
    };

    const tick = () => {
      current.current += (target.current - current.current) * 0.1;
      if (video.readyState >= 2 && Math.abs(target.current - current.current) > 0.001) {
        try {
          video.currentTime = current.current;
        } catch (_) {}
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, [scrub]);

  return (
    <div className={styles.bg} aria-hidden="true">
      {useVideo ? (
        <video
          ref={videoRef}
          className={styles.bgVideo}
          src={src}
          poster={poster || undefined}
          muted
          playsInline
          preload="auto"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className={styles.fallback}>
          <div className={styles.mesh} />
          <div className={styles.grid} />
          <div className={styles.scan} />
        </div>
      )}
      <div className={styles.bgOverlay} />
    </div>
  );
}
