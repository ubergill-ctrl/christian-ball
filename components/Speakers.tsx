'use client';

/* Guests of the evening.
   TODO — replace with two real names before launch. Two real guests read
   better than three invented ones; leave the third entry out if need be. */

import React from 'react';

const guests = [
  {
    initial: 'A',
    name: 'Name to be announced',
    role: 'Address after dinner',
    note:
      'The committee is confirming a speaker. Whoever it is will have ten minutes and not a moment more.',
  },
  {
    initial: 'B',
    name: 'Name to be announced',
    role: 'The appeal',
    note:
      'A short word on behalf of the charity, from someone who works there rather than someone who patrons it.',
  },
];

export default function Speakers() {
  return (
    <section id="guests" className="section">
      <div className="container">
        <div className="column">
        <div className="sec-head">
          <span className="label">Guests of the evening</span>
          <h2>Who is speaking</h2>
          <p>
            Two short addresses, both after dinner, both before the dancing.
            The evening is not a conference.
          </p>
        </div>

        <div className="grid-2">
          {guests.map((g) => (
            <div className="guest" key={g.role}>
              <span className="initial display" aria-hidden="true">{g.initial}</span>
              <h3>{g.name}</h3>
              <span className="label label--quiet">{g.role}</span>
              <p className="small muted">{g.note}</p>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}
