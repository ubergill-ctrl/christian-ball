'use client';

import React from 'react';

/* TODO: set NEXT_PUBLIC_YOUTUBE_VIDEO_ID (the id from a youtube.com/watch?v=<id>
   URL) to play the film here: full width, muted, looping on load. Until then
   this renders a plain holder in its place. */
const YOUTUBE_ID = process.env.NEXT_PUBLIC_YOUTUBE_VIDEO_ID;

export default function FilmFeature() {
  return (
    <div className="film">
      {YOUTUBE_ID ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_ID}?autoplay=1&mute=1&loop=1&playlist=${YOUTUBE_ID}&controls=1&rel=0&modestbranding=1`}
          title="A film of the ceilidh"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <div className="film-holder">
          <span className="film-holder__mark" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
              <path d="M8 5L19 12L8 19V5Z" fill="currentColor" />
            </svg>
          </span>
          <span className="label label--gilt">Film of the evening</span>
          <p>A short film follows shortly.</p>
        </div>
      )}
    </div>
  );
}
