'use client';

import React from 'react';

const speaker = {
  initial: 'P',
  name: 'Fr Paul',
  role: 'A short address, after dinner',
  note: 'Ten minutes, no longer, before the tables are cleared for dancing.',
};

export default function Speakers() {
  return (
    <section id="guests" className="section">
      <div className="container">
        <div className="column">
        <div className="sec-head">
          <span className="label">Guest of the evening</span>
          <h2>Who is speaking</h2>
          <p>
            One short address, after dinner and before the dancing.
            The evening is not a conference.
          </p>
        </div>

        <div className="guest">
          <span className="initial display" aria-hidden="true">{speaker.initial}</span>
          <h3>{speaker.name}</h3>
          <span className="label label--quiet">{speaker.role}</span>
          <p className="small muted">{speaker.note}</p>
        </div>
        </div>
      </div>
    </section>
  );
}
