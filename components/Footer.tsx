'use client';

import React from 'react';

const EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'fatherpaul@newmartyr.info';
const PHONE = process.env.NEXT_PUBLIC_CONTACT_PHONE || '';

export default function Footer() {
  return (
    <footer className="site-foot">
      <div className="container">
        <div className="foot-cols">
          <div>
            <span className="display" style={{ fontSize: '1.25rem', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              Saint Gabriel&rsquo;s Ceilidh Ball
            </span>
            <hr className="gilt-rule" style={{ margin: '1rem 0' }} />
            <p className="small muted">
              An evening of dinner, music and dancing for Orthodox young people,
              held at Hulme Hall, Port Sunlight. Organised by Father Paul; no one
              is paid out of the ticket price.
            </p>
          </div>

          <div>
            <h4>The evening</h4>
            <ul>
              <li><a href="#about">The evening</a></li>
              <li><a href="#order">Order of the evening</a></li>
              <li><a href="#menu">Menu</a></li>
              <li><a href="#dress">Dress</a></li>
              <li><a href="#venue">Getting there</a></li>
              <li><a href="#stay">Accommodation</a></li>
              <li><a href="#places">Places at table</a></li>
            </ul>
          </div>

          <div>
            <h4>Father Paul</h4>
            <ul>
              <li><a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
              {PHONE ? <li><span className="small muted">{PHONE}</span></li> : null}
              <li><span className="small muted">Wirral</span></li>
            </ul>
          </div>
        </div>

        <div className="foot-bar">
          <span>&copy; 2026 Saint Gabriel&rsquo;s Orthodox Youth Ceilidh Ball.</span>
          <span>Saturday 7 November 2026</span>
        </div>
      </div>
    </footer>
  );
}
