'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';

const images = [
  { src: '/gallery/1.webp', alt: 'A set of dancers turning through a ceilidh figure' },
  { src: '/gallery/2.webp', alt: 'Guests laughing together beside a candlelit mantel' },
  { src: '/gallery/3.webp', alt: 'A country house lit for the evening' },
  { src: '/gallery/4.webp', alt: 'A crowded floor mid-dance, hands joined' },
  { src: '/gallery/5.webp', alt: 'A panelled drawing room, set for the evening' },
  { src: '/gallery/6.webp', alt: 'Guests turning beneath a mantel mirror' },
];

const HOLD_MS = 6000;

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const pausedRef = useRef(false);

  const restart = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      if (!pausedRef.current) setIndex((i) => (i + 1) % images.length);
    }, HOLD_MS);
  }, []);

  useEffect(() => {
    restart();
    const onVisibility = () => { pausedRef.current = document.hidden; };
    document.addEventListener('visibilitychange', onVisibility);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, [restart]);

  const goTo = (i: number) => {
    setIndex(i);
    restart();
  };

  return (
    <div
      className="gallery"
      onMouseEnter={() => { pausedRef.current = true; }}
      onMouseLeave={() => { pausedRef.current = false; }}
    >
      {images.map((img, i) => (
        <img
          key={img.src}
          src={img.src}
          alt={img.alt}
          className="gallery__slide"
          style={{ opacity: i === index ? 1 : 0 }}
          aria-hidden={i === index ? undefined : true}
        />
      ))}

      <div className="gallery__dots" role="tablist" aria-label="Photographs of the evening">
        {images.map((_, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={`Show photograph ${i + 1} of ${images.length}`}
            className="gallery__dot"
            data-active={i === index}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </div>
  );
}
