'use client';

import React from 'react';

export default function DressCode() {
  return (
    <section id="dress" className="section section--tint">
      <div className="container">
        <div className="column">
        <div className="sec-head">
          <span className="label">Dress</span>
          <h2>Regional dress, or smart casual</h2>
          <p>
            This is not a black-tie evening. Come as you would to a good parish
            gathering &mdash; a jacket is welcome, national and regional dress more
            welcome still, and nobody will be turned away over either.
          </p>
        </div>

        <div className="grid-2">
          <div>
            <h3 style={{ marginBottom: '1rem' }}>For men</h3>
            <ul className="marked">
              <li>A jacket, or the regional dress of your own tradition.</li>
              <li>Shoes you can dance a ceilidh in &mdash; the floor gets used.</li>
              <li>Clergy: cassock or clerical dress is entirely welcome.</li>
            </ul>
          </div>

          <div>
            <h3 style={{ marginBottom: '1rem' }}>For women</h3>
            <ul className="marked">
              <li>Smart casual, or the national dress of your own tradition.</li>
              <li>Flat or low shoes are worth it &mdash; the ceilidh is not gentle.</li>
              <li>Bring a wrap; the hall is cool before dinner.</li>
            </ul>
          </div>
        </div>

        <p className="small muted" style={{ marginTop: '2.5rem', maxWidth: '54ch' }}>
          National dress, and the customary dress of any tradition represented in the
          room, is warmly welcome and always has been.
        </p>
        </div>
      </div>
    </section>
  );
}
