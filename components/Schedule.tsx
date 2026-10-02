'use client';

import React from 'react';

const order = [
  {
    time: '3.00',
    title: 'Reception',
    note: 'Guests received as they arrive. Something to drink, and the band tuning up.',
  },
  {
    time: '4.00',
    title: 'Grace and dinner',
    note: 'Grace said, followed by a relaxed three-course set menu at table, pre-ordered.',
  },
  {
    time: '5.15',
    title: 'A short address',
    note: 'A few words from Father Paul. Ten minutes, no longer.',
  },
  {
    time: '5.45',
    title: 'The ceilidh',
    note: 'A five-piece band and a caller. Every dance talked through before it starts.',
  },
  {
    time: '8.30',
    title: 'Carriages',
    note: 'The band plays out, and we find our coats.',
  },
];

export default function Schedule() {
  return (
    <section id="order" className="section section--tint">
      <div className="container">
        <div className="column">
        <div className="sec-head">
          <span className="label">Order of the evening</span>
          <h2>The evening, hour by hour</h2>
          <p>
            Dinner is served promptly at four. The reception runs the hour
            before it, from three.
          </p>
        </div>

        <div className="ord">
          {order.map((item) => (
            <div className="ord-item" key={item.time}>
              <time>{item.time}</time>
              <div>
                <h3>{item.title}</h3>
                <p>{item.note}</p>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}
