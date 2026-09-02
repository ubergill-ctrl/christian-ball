'use client';

import React from 'react';

export default function DressCode() {
  return (
    <section id="dress" className="section section--tint">
      <div className="container">
        <div className="column">
        <div className="sec-head">
          <span className="label">Dress</span>
          <h2>Black tie, or the dress of your own tradition</h2>
          <p>
            Come as you would to a wedding you cared about. Nobody will be turned
            away at the door over a lounge suit.
          </p>
        </div>

        <div className="grid-2">
          <div>
            <h3 style={{ marginBottom: '1rem' }}>For men</h3>
            <ul className="marked">
              <li>Dinner jacket and black tie, or a dark suit if you have not got one.</li>
              <li>White shirt. Polished shoes you can dance in.</li>
              <li>Clergy: cassock or clerical dress is entirely welcome.</li>
            </ul>
          </div>

          <div>
            <h3 style={{ marginBottom: '1rem' }}>For women</h3>
            <ul className="marked">
              <li>Long or cocktail-length; whatever you would wear to a good wedding.</li>
              <li>Shoes for a sprung floor. There will be a polka.</li>
              <li>The gallery is cool before dinner &mdash; a wrap is worth bringing.</li>
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
