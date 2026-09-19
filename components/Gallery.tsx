'use client';

import React from 'react';

const image = {
  src: '/gallery/1.webp',
  alt: 'A set of dancers turning through a ceilidh figure',
};

export default function Gallery() {
  return (
    <div className="gallery">
      <img src={image.src} alt={image.alt} className="gallery__slide" style={{ opacity: 1 }} />
    </div>
  );
}
