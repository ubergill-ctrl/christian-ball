'use client';

import React from 'react';

const VENUE = process.env.NEXT_PUBLIC_EVENT_VENUE || 'Hillbark Hotel';
const CITY = process.env.NEXT_PUBLIC_EVENT_CITY || 'Wirral';

export default function Hero({ onOpenRsvp }: { onOpenRsvp: () => void }) {
  return (
    <section className="container hero">
      <span className="label">
        Saturday, the seventh of November
      </span>

      <h1>
        Saint Gabriel&rsquo;s
        <span className="yr">Orthodox Youth Ceilidh</span>
      </h1>

      <hr className="gilt-rule" />

      <p className="invitation narrow">
        You are warmly invited to an evening of dinner, music and dancing at Hillbark,
        with a five-piece ceilidh band and a caller to see you through the steps.
        Regional and national dress is as welcome as a jacket &mdash; come as you would
        to a good parish gathering, not a formal ball.
      </p>

      <div className="hero-meta">
        <span><b>Six o&rsquo;clock</b> &middot; reception</span>
        <span><b>{VENUE}</b> &middot; {CITY}</span>
        <span><b>Regional dress or smart casual</b></span>
      </div>

      <div className="row">
        <a href="#places" className="btn btn--fill">Take a place</a>
        <button onClick={onOpenRsvp} className="btn btn--line">Write to Fr Paul</button>
      </div>

      <p className="small quiet" style={{ maxWidth: '46ch' }}>
        The list closes on Friday 30 October, or sooner if the room is full.
      </p>
    </section>
  );
}
