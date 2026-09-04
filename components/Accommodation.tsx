'use client';

import React from 'react';

const VENUE = process.env.NEXT_PUBLIC_EVENT_VENUE || 'Hillbark Hotel & Spa';
const VENUE_URL = 'https://hillbarkhotel.co.uk';
const EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'fatherpaul@newmartyr.info';

export default function Accommodation() {
  return (
    <section id="stay" className="section">
      <div className="container">
        <div className="sec-head">
          <span className="label">Staying over</span>
          <h2>Accommodation</h2>
          <p>
            Accommodation is not included in the ticket, and guests book it
            independently. We are glad to suggest places to stay, and if cost is a
            real obstacle for you or for your group, do ask and we will look at the
            alternatives with you.
          </p>
        </div>

        <div className="grid-2">
          <div className="panel panel--lead">
            <span className="label label--quiet">At the venue</span>
            <h3 style={{ margin: '0.5rem 0 0.75rem' }}>{VENUE}</h3>
            <p className="small muted" style={{ marginBottom: '1.5rem' }}>
              The simplest option, since the ball is held there and there is no
              journey home at midnight. Rooms are booked directly with the hotel
              and go quickly on a Saturday.
            </p>
            <a
              className="btn btn--line btn--block"
              href={VENUE_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Book at Hillbark
            </a>
          </div>

          <div className="ord" style={{ borderTop: '1px solid var(--rule)' }}>
            <div className="ord-item">
              <time>Nearby</time>
              <div>
                <h4>Around the Wirral</h4>
                <p>
                  West Kirby, Hoylake and Heswall are all within fifteen minutes
                  and hold a good number of guest houses and small hotels.
                </p>
              </div>
            </div>
            <div className="ord-item">
              <time>Further</time>
              <div>
                <h4>Liverpool and Chester</h4>
                <p>
                  Twenty to twenty-five minutes by car, with the wider range of
                  hotels you would expect, often at a lower price.
                </p>
              </div>
            </div>
            <div className="ord-item">
              <time>Ask</time>
              <div>
                <h4>If cost is a difficulty</h4>
                <p>
                  Write to us at{' '}
                  <a href={`mailto:${EMAIL}`}>{EMAIL}</a> and we will suggest
                  cheaper alternatives, or help a group share between them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
