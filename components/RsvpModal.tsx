'use client';

import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';

interface RsvpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const empty = {
  name: '',
  email: '',
  phone: '',
  guests: '1',
  parish: '',
  starter: '',
  main: '',
  dessert: '',
  notes: '',
};

export default function RsvpModal({ isOpen, onClose }: RsvpModalProps) {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState(empty);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  /* TODO: this form does not send anywhere yet. Wire it to a Vercel route
     handler, Formspree, or Father Paul's inbox before launch. */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const close = () => { setSent(false); setForm(empty); onClose(); };

  return (
    <div
      className="modal-veil"
      role="dialog"
      aria-modal="true"
      aria-label="Write to Father Paul"
      onClick={(e) => { if (e.target === e.currentTarget) close(); }}
    >
      <div className="modal">
        <button className="modal-close" onClick={close} aria-label="Close">
          <X size={20} strokeWidth={1.5} />
        </button>

        {sent ? (
          <div className="stack">
            <span className="label">Thank you</span>
            <h3>Your note has reached Father Paul</h3>
            <hr className="gilt-rule" />
            <p className="muted">
              Thank you, {form.name || 'friend'}. Someone will write back to{' '}
              {form.email || 'you'} within a few days, sooner if you have asked
              about a table.
            </p>
            <button onClick={close} className="btn btn--fill btn--block" style={{ marginTop: '0.5rem' }}>
              Close
            </button>
          </div>
        ) : (
          <>
            <span className="label">Write to Father Paul</span>
            <h3 style={{ margin: '0.5rem 0 0.4rem' }}>Menu choices, questions and dietary notes</h3>
            <p className="small muted" style={{ marginBottom: '1.5rem' }}>
              This is not a booking. Once you have taken a place at table, use
              this to send your menu choices and any dietary requirements; it
              reaches Father Paul, who will write back.
            </p>

            <form onSubmit={handleSubmit} className="stack">
              <div className="field">
                <label htmlFor="rsvp-name">Your name</label>
                <input
                  id="rsvp-name"
                  required
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>

              <div className="field-row">
                <div className="field">
                  <label htmlFor="rsvp-email">Email</label>
                  <input
                    id="rsvp-email"
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>
                <div className="field">
                  <label htmlFor="rsvp-phone">Telephone (optional)</label>
                  <input
                    id="rsvp-phone"
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className="field-row">
                <div className="field">
                  <label htmlFor="rsvp-guests">How many of you</label>
                  <select
                    id="rsvp-guests"
                    value={form.guests}
                    onChange={(e) => setForm({ ...form, guests: e.target.value })}
                  >
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="10">A table of ten</option>
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="rsvp-parish">Parish or organisation (optional)</label>
                  <input
                    id="rsvp-parish"
                    type="text"
                    value={form.parish}
                    onChange={(e) => setForm({ ...form, parish: e.target.value })}
                  />
                </div>
              </div>

              <div className="field-row">
                <div className="field">
                  <label htmlFor="rsvp-starter">Starter</label>
                  <select
                    id="rsvp-starter"
                    value={form.starter}
                    onChange={(e) => setForm({ ...form, starter: e.target.value })}
                  >
                    <option value="">Choose a starter</option>
                    <option value="soup">Homemade soup</option>
                    <option value="pate">Brandy and orange pâté</option>
                    <option value="salmon">Smoked salmon and cream cheese tart</option>
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="rsvp-main">Main</label>
                  <select
                    id="rsvp-main"
                    value={form.main}
                    onChange={(e) => setForm({ ...form, main: e.target.value })}
                  >
                    <option value="">Choose a main</option>
                    <option value="chicken">Roasted breast of chicken</option>
                    <option value="pie">Steak and kidney pie</option>
                    <option value="pork">Pork loin, wild mushroom sauce</option>
                  </select>
                </div>
              </div>

              <div className="field">
                <label htmlFor="rsvp-dessert">Dessert</label>
                <select
                  id="rsvp-dessert"
                  value={form.dessert}
                  onChange={(e) => setForm({ ...form, dessert: e.target.value })}
                >
                  <option value="">Choose a dessert</option>
                  <option value="crumble">Apple and cinnamon crumble</option>
                  <option value="trifle">Banana and Baileys trifle</option>
                  <option value="profiteroles">Profiteroles</option>
                </select>
              </div>

              <div className="field">
                <label htmlFor="rsvp-notes">Anything we should know</label>
                <textarea
                  id="rsvp-notes"
                  rows={3}
                  placeholder="Dietary requirements, access, who you would like to sit with, or menu choices for other guests on your booking"
                  value={form.notes}
                  onChange={(e) => setForm({ ...form, notes: e.target.value })}
                />
              </div>

              <button type="submit" className="btn btn--fill btn--block" style={{ marginTop: '0.5rem' }}>
                Send to Father Paul
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
