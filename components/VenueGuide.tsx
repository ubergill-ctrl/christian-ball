'use client';

import React from 'react';

const VENUE = process.env.NEXT_PUBLIC_EVENT_VENUE || 'Hulme Hall';

export default function VenueGuide() {
  return (
    <section id="venue" className="section">
      <div className="container">
        <div className="sec-head">
          <span className="label">Getting there</span>
          <h2>The venue, and how to reach it</h2>
        </div>

        <div className="grid-2">
          <div className="panel panel--lead venue-card">
            <span className="label label--quiet">The venue</span>
            <h3 style={{ margin: '0.5rem 0 0.35rem' }}>{VENUE}</h3>
            <p className="small" style={{ color: 'var(--gilt)', marginBottom: '1rem' }}>
              23 Bolton Rd, Bebington, Wirral CH62 5DH
            </p>
            <p className="small muted" style={{ marginBottom: '1.5rem' }}>
              A Grade II listed hall in Port Sunlight village, with a separate
              lounge for dinner and ball room for the ceilidh, so there is no
              turnaround between the two.
            </p>
            <a
              className="btn btn--line btn--block"
              href="https://www.google.com/maps/search/?api=1&query=23+Bolton+Rd%2C+Bebington%2C+Wirral+CH62+5DH"
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
                <h4>By train</h4>
                <p>Port Sunlight has its own railway station, a short walk from the hall, on the Wirral Line from Liverpool.</p>
              </div>
            </div>
            <div className="ord-item">
              <time>Car</time>
              <div>
                <h4>Parking</h4>
                <p>Ample car parking on site; the hall opens at 10am, with plenty of time to arrive and settle in.</p>
              </div>
            </div>
            <div className="ord-item">
              <time>Bed</time>
              <div>
                <h4>Staying over</h4>
                <p>
                  Hulme Hall does not have rooms of its own, but there is plenty
                  nearby.{' '}
                  <a href="#stay">Accommodation is set out below</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
