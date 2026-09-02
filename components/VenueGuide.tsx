'use client';

import React from 'react';

const VENUE = process.env.NEXT_PUBLIC_EVENT_VENUE || 'Hillbark Hotel & Spa';
const VENUE_URL = 'https://hillbarkhotel.co.uk';

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
              Royden Park, Frankby, Wirral, CH48 1NP
            </p>
            <p className="small muted" style={{ marginBottom: '1.5rem' }}>
              A country house on the edge of the Wirral countryside, twenty minutes
              from Liverpool city centre and five from the M53.
            </p>
            <a
              className="btn btn--line btn--block"
              href="https://www.google.com/maps/search/?api=1&query=Hillbark+Hotel+Royden+Park+Frankby+Wirral+CH48+1NP"
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
                <p>Liverpool Lime Street is around twenty minutes away by car or taxi; Chester about twenty-five.</p>
              </div>
            </div>
            <div className="ord-item">
              <time>Car</time>
              <div>
                <h4>Parking</h4>
                <p>Ample parking on site, no need to hunt for a space or a meter.</p>
              </div>
            </div>
            <div className="ord-item">
              <time>Bed</time>
              <div>
                <h4>Staying over</h4>
                <p>
                  Hillbark is itself a hotel; rooms can be booked directly with them at{' '}
                  <a href={VENUE_URL} target="_blank" rel="noopener noreferrer">hillbarkhotel.co.uk</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
