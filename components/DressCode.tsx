'use client';

import React from 'react';

export default function DressCode() {
  return (
    <section id="dress" className="section section--tint">
      <div className="container">
        <div className="column">
        <div className="sec-head">
          <span className="label">Dress</span>
          <h2>Formal</h2>
          <p>
            Dress as you would for a formal dinner, with layers to take on or
            off at your discretion. Kilts are encouraged.
          </p>
        </div>

        <div className="grid-2">
          <div>
            <h3 style={{ marginBottom: '1rem' }}>For men</h3>
            <ul className="marked">
              <li>Suit trousers or smart trousers, worn with a shirt.</li>
              <li>Ties are optional, and not expected.</li>
              <li>Shoes you can dance a ceilidh in; the floor gets used.</li>
              <li>Clergy: cassock or clerical dress is entirely welcome.</li>
            </ul>
          </div>

          <div>
            <h3 style={{ marginBottom: '1rem' }}>For women</h3>
            <ul className="marked">
              <li>Midi dresses are generally the easiest thing to wear.</li>
              <li>
                Flats or low heels are worth it: there is a great deal of
                movement in the dancing.
              </li>
              <li>Bring a wrap; the hall is cool before dinner.</li>
            </ul>
          </div>
        </div>

        <p className="small muted" style={{ marginTop: '2.5rem', maxWidth: '54ch' }}>
          Kilts are always encouraged and always welcome.
        </p>
        </div>
      </div>
    </section>
  );
}
