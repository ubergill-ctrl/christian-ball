'use client';

import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';

interface RsvpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'fatherpaul@newmartyr.info';

const STARTERS = [
  { id: 'soup', label: 'Homemade soup' },
  { id: 'pate', label: 'Brandy and orange pâté' },
  { id: 'salmon', label: 'Smoked salmon and cream cheese tart' },
];
const MAINS = [
  { id: 'chicken', label: 'Roasted breast of chicken' },
  { id: 'pie', label: 'Steak and kidney pie' },
  { id: 'pork', label: 'Pork loin, wild mushroom sauce' },
];
const DESSERTS = [
  { id: 'crumble', label: 'Apple and cinnamon crumble' },
  { id: 'trifle', label: 'Banana and Baileys trifle' },
  { id: 'profiteroles', label: 'Profiteroles' },
];
const label = (list: { id: string; label: string }[], id: string) =>
  list.find((o) => o.id === id)?.label || '(not chosen)';

type Diner = { starter: string; main: string; dessert: string };
const emptyDiner: Diner = { starter: '', main: '', dessert: '' };

const emptyForm = {
  name: '',
  email: '',
  phone: '',
  guests: '1',
  parish: '',
  notes: '',
};

function resizeDiners(diners: Diner[], count: number): Diner[] {
  const next = diners.slice(0, count);
  while (next.length < count) next.push({ ...emptyDiner });
  return next;
}

export default function RsvpModal({ isOpen, onClose }: RsvpModalProps) {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState(emptyForm);
  const [diners, setDiners] = useState<Diner[]>([{ ...emptyDiner }]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const setGuests = (guests: string) => {
    setForm({ ...form, guests });
    setDiners((prev) => resizeDiners(prev, Number(guests)));
  };

  const setDiner = (index: number, patch: Partial<Diner>) => {
    setDiners((prev) => prev.map((d, i) => (i === index ? { ...d, ...patch } : d)));
  };

  /* No backend yet: this hands off to the guest's own mail client with the
     message pre-filled, so it reaches Father Paul's inbox without one.
     Swap for a fetch() to Formspree (or a Vercel route handler) once a
     proper endpoint exists — the body below is already structured for it. */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const dinerLines = diners
      .map((d, i) => {
        const who = diners.length > 1 ? `Guest ${i + 1}` : form.name || 'Guest';
        return `${who}: ${label(STARTERS, d.starter)} / ${label(MAINS, d.main)} / ${label(DESSERTS, d.dessert)}`;
      })
      .join('\n');

    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      form.phone ? `Telephone: ${form.phone}` : null,
      `Guests: ${form.guests}`,
      form.parish ? `Parish or organisation: ${form.parish}` : null,
      '',
      'Menu choices (starter / main / dessert):',
      dinerLines,
      '',
      form.notes ? `Notes: ${form.notes}` : null,
    ].filter(Boolean).join('\n');

    const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(
      `Ceilidh RSVP — ${form.name || 'a guest'}`
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    setSent(true);
  };

  const close = () => {
    setSent(false);
    setForm(emptyForm);
    setDiners([{ ...emptyDiner }]);
    onClose();
  };

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
            <span className="label">Almost there</span>
            <h3>Your mail app should now be open</h3>
            <hr className="gilt-rule" />
            <p className="muted">
              We&rsquo;ve filled in a message to Father Paul with everything
              you entered. Just hit send from there, {form.name || 'friend'} —
              if nothing opened, write to us directly at{' '}
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
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
                    onChange={(e) => setGuests(e.target.value)}
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

              <div className="stack" style={{ gap: '1rem' }}>
                <label style={{ marginBottom: 0 }}>
                  Menu choices{diners.length > 1 ? `, for each of your ${diners.length} guests` : ''}
                </label>
                {diners.map((diner, i) => (
                  <div key={i} className="field-row" style={{ alignItems: 'flex-end' }}>
                    {diners.length > 1 && (
                      <span className="small quiet" style={{ minWidth: '4.5rem' }}>Guest {i + 1}</span>
                    )}
                    <div className="field">
                      <select
                        aria-label={`Starter, guest ${i + 1}`}
                        value={diner.starter}
                        onChange={(e) => setDiner(i, { starter: e.target.value })}
                      >
                        <option value="">Starter</option>
                        {STARTERS.map((o) => <option key={o.id} value={o.id}>{o.label}</option>)}
                      </select>
                    </div>
                    <div className="field">
                      <select
                        aria-label={`Main, guest ${i + 1}`}
                        value={diner.main}
                        onChange={(e) => setDiner(i, { main: e.target.value })}
                      >
                        <option value="">Main</option>
                        {MAINS.map((o) => <option key={o.id} value={o.id}>{o.label}</option>)}
                      </select>
                    </div>
                    <div className="field">
                      <select
                        aria-label={`Dessert, guest ${i + 1}`}
                        value={diner.dessert}
                        onChange={(e) => setDiner(i, { dessert: e.target.value })}
                      >
                        <option value="">Dessert</option>
                        {DESSERTS.map((o) => <option key={o.id} value={o.id}>{o.label}</option>)}
                      </select>
                    </div>
                  </div>
                ))}
              </div>

              <div className="field">
                <label htmlFor="rsvp-notes">Anything we should know</label>
                <textarea
                  id="rsvp-notes"
                  rows={3}
                  placeholder="Dietary requirements, access, or who you would like to sit with"
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
