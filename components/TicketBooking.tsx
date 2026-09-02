'use client';

import React from 'react';

/* TODO: replace the placeholder Stripe payment links in .env before launch. */
const tiers = [
  {
    name: 'One at table',
    note: 'A single place',
    price: '£65',
    per: 'per guest, dinner included',
    includes: [
      'Reception and two courses at table',
      'Dancing until half eleven',
      'Programme and order of the evening',
    ],
    link: process.env.NEXT_PUBLIC_STRIPE_INDIVIDUAL_LINK,
    lead: false,
  },
  {
    name: 'Two at table',
    note: 'A pair, seated together',
    price: '£120',
    per: 'for two guests, dinner included',
    includes: [
      'Everything above, for two',
      'Seated together, on a table of your choosing where possible',
      'A photograph, taken during the reception',
    ],
    link: process.env.NEXT_PUBLIC_STRIPE_COUPLES_LINK,
    lead: true,
  },
  {
    name: 'A table of eight',
    note: 'For a parish or a firm',
    price: '£480',
    per: 'for eight guests, dinner included',
    includes: [
      'A table of eight, named as you wish',
      'Your parish or company named in the programme',
      'A word with Father Paul before dinner, if you would like one',
    ],
    link: process.env.NEXT_PUBLIC_STRIPE_VIP_LINK,
    lead: false,
  },
];

export default function TicketBooking({ onOpenRsvp }: { onOpenRsvp: () => void }) {
  return (
    <section id="places" className="section section--tint">
      <div className="container">
        <div className="sec-head">
          <span className="label">Places at table</span>
          <h2>Taking a place</h2>
          <p>
            Every price includes dinner and the ceilidh band. Take a single place,
            a pair, or a table for your parish or youth group.
          </p>
        </div>

        <div className="grid-3" style={{ alignItems: 'stretch' }}>
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={tier.lead ? 'panel panel--lead tier' : 'panel tier'}
            >
              <span className="label label--quiet">{tier.note}</span>
              <h3 style={{ margin: '0.5rem 0 0' }}>{tier.name}</h3>

              <p className="price" style={{ marginTop: '1.1rem' }}>{tier.price}</p>
              <p className="small muted" style={{ marginTop: '0.3rem' }}>{tier.per}</p>

              <ul className="marked">
                {tier.includes.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>

              <div className="foot">
                {tier.link ? (
                  <a
                    href={tier.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={tier.lead ? 'btn btn--fill btn--block' : 'btn btn--line btn--block'}
                  >
                    Take this place
                  </a>
                ) : (
                  <button className="btn btn--line btn--block" disabled title="Booking opens shortly">
                    Booking opens shortly
                  </button>
                )}
                <button onClick={onOpenRsvp} className="btn-text">
                  Or ask for an invoice
                </button>
              </div>
            </div>
          ))}
        </div>

        <p className="small quiet" style={{ marginTop: '2.5rem' }}>
          Payment is handled by Stripe; we never see your card details.
          If the price is the thing standing in your way, write to Father Paul;
          a number of places are held back each year for exactly that reason.
        </p>
      </div>
    </section>
  );
}
