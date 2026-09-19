'use client';

import React from 'react';

/* TODO: replace the placeholder Stripe payment links in .env before launch. */
const tiers = [
  {
    name: 'Single ticket',
    note: 'A single place',
    price: '£60',
    per: 'per guest, dinner included',
    includes: [
      'Reception and a three-course set menu at table',
      'A choice of dishes per course, pre-ordered ahead of the evening',
      'The ceilidh band and dancing, and the order of the evening',
    ],
    link: process.env.NEXT_PUBLIC_STRIPE_INDIVIDUAL_LINK,
    lead: false,
  },
  {
    name: 'Double ticket',
    note: 'A pair, at a discount',
    price: '£110',
    per: 'for two guests, £10 less than two single tickets',
    includes: [
      'Everything above, for two, at a discounted rate',
      'Seated together, on a table of your choosing where possible',
      'Both guests’ menu choices taken together',
    ],
    link: process.env.NEXT_PUBLIC_STRIPE_COUPLES_LINK,
    lead: true,
  },
  {
    name: 'Parish ticket',
    note: 'A table of ten, for a parish or a group',
    price: '£500',
    per: 'for ten guests, dinner included',
    includes: [
      'A table of ten, named as you wish',
      'Your parish or group named in the programme',
      'Menu choices and dietary requirements collected for the whole table',
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
          If the price is the thing standing in your way, do write to us;
          a number of places are held back each year for exactly that reason.
        </p>
      </div>
    </section>
  );
}
