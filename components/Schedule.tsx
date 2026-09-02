'use client';

import React from 'react';

const order = [
  {
    time: '6.00',
    title: 'Reception',
    note: 'Guests received in the long gallery. Sherry, elderflower and a string trio.',
  },
  {
    time: '7.00',
    title: 'Grace and dinner',
    note: 'Grace said by the chaplain, followed by three courses at table.',
  },
  {
    time: '8.45',
    title: 'The address and the appeal',
    note: 'A short address, then the appeal on behalf of the charity. Ten minutes, no longer.',
  },
  {
    time: '9.15',
    title: 'Dancing',
    note: 'A small band. Waltz, polka and the Gay Gordons; a caller for those who need one.',
  },
  {
    time: '11.30',
    title: 'Compline and carriages',
    note: 'Compline sung for those who wish to stay. The rest of us find our coats.',
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
            Dinner is served promptly at seven. If you are coming from the office,
            the reception runs the full hour before it.
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
