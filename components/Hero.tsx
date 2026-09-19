'use client';

import React from 'react';

const VENUE = process.env.NEXT_PUBLIC_EVENT_VENUE || 'Hulme Hall';
const CITY = process.env.NEXT_PUBLIC_EVENT_CITY || 'Wirral';

export default function Hero({ onOpenRsvp }: { onOpenRsvp: () => void }) {
  return (
    <section className="container hero">
      <span className="label">
        Saturday, the seventh of November 2026
      </span>

      <h1>
        Saint Gabriel&rsquo;s
        <span className="yr">Orthodox Youth Ceilidh Ball</span>
      </h1>

      <hr className="gilt-rule" />

      <p className="invitation narrow">
        You are warmly invited to an evening of dinner, music and dancing at Hulme
        Hall, Port Sunlight, with a five-piece ceilidh band and a caller to see you
        through the steps. Dress is formal, with layers to take on or off at
        your discretion, and kilts are encouraged.
      </p>

      <div className="hero-meta">
        <span className="hero-meta__date"><b>Saturday 7 November 2026</b></span>
        <span><b>Six o&rsquo;clock</b> &middot; reception</span>
        <span><b>{VENUE}</b> &middot; {CITY}</span>
        <span><b>Formal</b> &middot; kilts encouraged</span>
      </div>

      <div className="row">
        <a href="#places" className="btn btn--fill">Take a place</a>
        <button onClick={onOpenRsvp} className="btn btn--line">Write to Father Paul</button>
      </div>

      <p className="small quiet" style={{ maxWidth: '46ch' }}>
        The list closes on Friday 30 October, or sooner if the room is full.
      </p>
    </section>
  );
}
