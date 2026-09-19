'use client';

import React, { useEffect, useRef, useState } from 'react';

/* Set NEXT_PUBLIC_YOUTUBE_VIDEO_ID to play the film here: full width,
   autoplaying, looping on load. Accepts a bare video id or a full
   youtube.com/youtu.be URL; until it is set this renders a plain holder
   in its place.

   Browsers block autoplay with sound outright, so this starts muted (the
   only way any browser will autoplay it) and shows a "Turn on sound"
   button; tapping it unmutes the existing player in place via the
   YouTube IFrame API, rather than reloading/restarting the video. */
function extractVideoId(value: string | undefined): string | undefined {
  if (!value) return undefined;
  const match = value.match(/(?:v=|youtu\.be\/|embed\/)([\w-]{11})/);
  return match ? match[1] : value;
}
const YOUTUBE_ID = extractVideoId(process.env.NEXT_PUBLIC_YOUTUBE_VIDEO_ID);

declare global {
  interface Window {
    YT?: any;
    onYouTubeIframeAPIReady?: () => void;
  }
}

let apiPromise: Promise<void> | null = null;
function loadYouTubeApi(): Promise<void> {
  if (window.YT?.Player) return Promise.resolve();
  if (!apiPromise) {
    apiPromise = new Promise((resolve) => {
      const prev = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        prev?.();
        resolve();
      };
      if (!document.querySelector('script[src="https://www.youtube.com/iframe_api"]')) {
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        document.head.appendChild(tag);
      }
    });
  }
  return apiPromise;
}

export default function FilmFeature() {
  const mountRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<any>(null);
  const [muted, setMuted] = useState(true);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!YOUTUBE_ID || !mountRef.current) return;
    let cancelled = false;

    loadYouTubeApi().then(() => {
      if (cancelled || !mountRef.current) return;
      playerRef.current = new window.YT.Player(mountRef.current, {
        videoId: YOUTUBE_ID,
        playerVars: {
          autoplay: 1,
          mute: 1,
          loop: 1,
          playlist: YOUTUBE_ID,
          controls: 1,
          rel: 0,
          modestbranding: 1,
          playsinline: 1,
        },
        events: {
          onReady: () => { if (!cancelled) setReady(true); },
        },
      });
    });

    return () => {
      cancelled = true;
      playerRef.current?.destroy?.();
    };
  }, []);

  const unmute = () => {
    playerRef.current?.unMute?.();
    playerRef.current?.setVolume?.(100);
    setMuted(false);
  };

  return (
    <div className="film">
      {YOUTUBE_ID ? (
        <>
          <div ref={mountRef} />
          {ready && muted && (
            <button
              onClick={unmute}
              className="film-sound"
              aria-label="Turn on sound"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true">
                <path d="M4 9v6h4l5 5V4L8 9H4Z" fill="currentColor" />
                <path d="M16.5 8.5a5 5 0 0 1 0 7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
              Turn on sound
            </button>
          )}
        </>
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
