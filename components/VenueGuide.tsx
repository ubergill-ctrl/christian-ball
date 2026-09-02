'use client';

import React from 'react';

/* TODO — confirm venue, address, nearest stations and any hotel arrangement. */
const VENUE = process.env.NEXT_PUBLIC_EVENT_VENUE || 'Venue to be confirmed';

export default function VenueGuide() {
  return (
    <section id="venue" className="section">
      <div className="container">
        <div className="sec-head">
          <span className="label">Getting there</span>
          <h2>The room, and how to reach it</h2>
        </div>

        <div className="grid-2" style={{ alignItems: 'start' }}>
          <div className="panel panel--lead">
            <span className="label label--quiet">The venue</span>
            <h3 style={{ margin: '0.5rem 0 0.35rem' }}>{VENUE}</h3>
            <p className="small" style={{ color: 'var(--gilt)', marginBottom: '1rem' }}>
              Address to be confirmed &middot; London
            </p>
            <p className="small muted" style={{ marginBottom: '1.5rem' }}>
              A sprung floor, a gallery for the reception, and a room that holds a
              hundred and eighty at table without anyone shouting.
            </p>
            <a
              className="btn btn--line btn--block"
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open in maps
            </a>
          </div>

          <div className="ord" style={{ borderTop: '1px solid var(--rule)' }}>
            <div className="ord-item">
              <time>Rail</time>
              <div>
                <h4>By Underground</h4>
                <p>Nearest stations to be confirmed. Five minutes on foot either way.</p>
              </div>
            </div>
            <div className="ord-item">
              <time>Car</time>
              <div>
                <h4>Parking</h4>
                <p>No parking at the venue. The nearest car park is a short walk; a taxi rank sits on the corner.</p>
              </div>
            </div>
            <div className="ord-item">
              <time>Bed</time>
              <div>
                <h4>Staying over</h4>
                <p>Two hotels within ten minutes hold a small block for guests. Details to follow with your confirmation.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
