'use client';

import React from 'react';

/* TODO — confirm before launch: venue name, address, and the date the list closes. */
const VENUE = process.env.NEXT_PUBLIC_EVENT_VENUE || 'Venue to be confirmed';
const CITY = process.env.NEXT_PUBLIC_EVENT_CITY || 'London';

export default function Hero({ onOpenRsvp }: { onOpenRsvp: () => void }) {
  return (
    <section className="container hero">
      <span className="label">
        Saturday, the twenty-first of November &middot; the Feast of the Entry
      </span>

      <h1>
        The Christian Ball
        <span className="yr">MMXXVI</span>
      </h1>

      <hr className="gilt-rule" />

      <p className="invitation narrow">
        You are warmly invited to an evening of dinner, music and dancing, held in aid
        of our nominated charity. The ball falls on the feast of the Entry of the
        Theotokos and on the eve of Christ the King &mdash; one evening that both
        calendars keep. Guests of every English tradition are welcome at table.
      </p>

      <div className="hero-meta">
        <span><b>Six o&rsquo;clock</b> &middot; reception</span>
        <span><b>{VENUE}</b> &middot; {CITY}</span>
        <span><b>Black tie</b></span>
      </div>

      <div className="row">
        <a href="#places" className="btn btn--fill">Take a place</a>
        <button onClick={onOpenRsvp} className="btn btn--line">Write to the committee</button>
      </div>

      <p className="small quiet" style={{ maxWidth: '46ch' }}>
        The list closes on Friday 30 October, or sooner if the room is full.
      </p>
    </section>
  );
}
