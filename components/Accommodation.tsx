'use client';

import React, { useState } from 'react';

const EMAIL = process.env.NEXT_PUBLIC_ACCOMMODATION_EMAIL || process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'fatherpaul@newmartyr.info';

const empty = { name: '', email: '', notes: '' };

export default function Accommodation() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState(empty);

  /* TODO: this form does not send anywhere yet. Wire it to a Vercel route
     handler, Formspree, or Harry's inbox before launch. */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="stay" className="section">
      <div className="container">
        <div className="sec-head">
          <span className="label">Staying over</span>
          <h2>Accommodation</h2>
          <p>
            Accommodation is not included in the ticket. It can be booked
            independently, or arranged through the church if that is easier.
            If the cost of staying over is a concern, do get in touch and we
            will look at the alternatives with you.
          </p>
        </div>

        <div className="grid-2">
          <div className="panel panel--lead">
            <span className="label label--quiet">Closest to the hall</span>
            <h3 style={{ margin: '0.5rem 0 0.75rem' }}>Recommended hotels</h3>
            <p className="small muted" style={{ marginBottom: '1.5rem' }}>
              Hulme Hall does not have rooms of its own. The two closest and
              most straightforward options are Village Hotel Wirral and
              Travelodge Bromborough, both a short drive or taxi from the
              hall.
            </p>
            <div className="stack" style={{ gap: '0.75rem' }}>
              <a
                className="btn btn--line btn--block"
                href="https://www.google.com/maps/search/?api=1&query=Village+Hotel+Wirral"
                target="_blank"
                rel="noopener noreferrer"
              >
                Village Hotel Wirral
              </a>
              <a
                className="btn btn--line btn--block"
                href="https://www.google.com/maps/search/?api=1&query=Travelodge+Bromborough"
                target="_blank"
                rel="noopener noreferrer"
              >
                Travelodge Bromborough
              </a>
            </div>
          </div>

          <div className="ord" style={{ borderTop: '1px solid var(--rule)' }}>
            <div className="ord-item">
              <time>Easiest</time>
              <div>
                <h4>Staying in Liverpool</h4>
                <p>
                  Liverpool has the widest choice of hotels and the most
                  availability. Stay somewhere close to a Liverpool train
                  station: there are direct trains from Liverpool to Port
                  Sunlight, and direct buses to St Elisabeth&rsquo;s.
                </p>
              </div>
            </div>
            <div className="ord-item">
              <time>Parking</time>
              <div>
                <h4>Coming by car</h4>
                <p>
                  There is ample car parking on site at Hulme Hall, if you
                  would rather drive.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="panel" style={{ marginTop: '2.5rem' }}>
          <span className="label label--quiet">If cost is a difficulty</span>
          <h3 style={{ margin: '0.5rem 0 0.75rem' }}>Get in touch</h3>

          {sent ? (
            <p className="muted">
              Thank you, {form.name || 'friend'}. Someone will write back to{' '}
              {form.email || 'you'} shortly.
            </p>
          ) : (
            <>
              <p className="small muted" style={{ marginBottom: '1.5rem', maxWidth: '54ch' }}>
                Tell us a little about your situation and we will suggest
                cheaper alternatives, help a group share a room, or look at
                what the church can arrange.
              </p>
              <form onSubmit={handleSubmit} className="stack">
                <div className="field-row">
                  <div className="field">
                    <label htmlFor="stay-name">Your name</label>
                    <input
                      id="stay-name"
                      required
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="stay-email">Email</label>
                    <input
                      id="stay-email"
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="stay-notes">Tell us about your situation</label>
                  <textarea
                    id="stay-notes"
                    rows={3}
                    placeholder="Group size, dates, or anything that would help us suggest the right option"
                    value={form.notes}
                    onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  />
                </div>
                <button type="submit" className="btn btn--fill btn--block" style={{ marginTop: '0.5rem' }}>
                  Send
                </button>
              </form>
              <p className="small quiet" style={{ marginTop: '1rem' }}>
                Or write to us directly at{' '}
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
