'use client';

import React, { useState } from 'react';
import { X, CheckCircle2, Sparkles, Send } from 'lucide-react';
import confetti from 'canvas-confetti';

interface RsvpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RsvpModal({ isOpen, onClose }: RsvpModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    guestsCount: '1',
    dietaryRestrictions: '',
    churchAffiliation: '',
    notes: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#d4af37', '#ffffff', '#b8860b'],
      });
    } catch {
      // ignore
    }
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(5, 8, 17, 0.85)',
      backdropFilter: 'blur(12px)',
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1.5rem',
    }}>
      <div
        className="glass-panel"
        style={{
          width: '100%',
          maxWidth: '560px',
          maxHeight: '90vh',
          overflowY: 'auto',
          padding: '2.5rem 2rem',
          position: 'relative',
          background: 'rgba(11, 17, 34, 0.96)',
          border: '1px solid var(--border-gold)',
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'transparent',
            border: 'none',
            color: 'var(--text-muted)',
            cursor: 'pointer',
            padding: '0.4rem',
          }}
          aria-label="Close Modal"
        >
          <X size={22} />
        </button>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
            <div style={{
              width: '70px',
              height: '70px',
              borderRadius: '50%',
              background: 'rgba(212, 175, 55, 0.2)',
              border: '2px solid var(--gold-400)',
              margin: '0 auto 1.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <CheckCircle2 size={36} color="var(--gold-400)" />
            </div>

            <h3 className="font-serif" style={{ fontSize: '1.75rem', color: '#fff', marginBottom: '0.75rem' }}>
              RSVP Received with Grace
            </h3>

            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '2rem' }}>
              Thank you, <strong>{formData.fullName}</strong>. Our gala host team has received your registration details. We will send an official confirmation to <strong>{formData.email}</strong>.
            </p>

            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="btn-gold"
              style={{ width: '100%' }}
            >
              Close Window
            </button>
          </div>
        ) : (
          <>
            <div style={{ marginBottom: '1.75rem' }}>
              <div className="pill-badge" style={{ marginBottom: '0.5rem' }}>
                <Sparkles size={14} /> RSVP & Pre-Registration
              </div>
              <h3 className="font-serif" style={{ fontSize: '1.65rem', color: '#fff' }}>
                Guest Registration & Inquiry
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>
                Please provide your contact and dining preferences for the Christian Ball committee.
              </p>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.4rem', fontWeight: 500 }}>
                  Full Name *
                </label>
                <input
                  required
                  type="text"
                  placeholder="Lord / Lady / Pastor / Mr / Mrs..."
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid var(--border-gold)',
                    borderRadius: 'var(--radius-sm)',
                    color: '#fff',
                    outline: 'none',
                    fontSize: '0.95rem',
                  }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.4rem', fontWeight: 500 }}>
                    Email Address *
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="you@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid var(--border-gold)',
                      borderRadius: 'var(--radius-sm)',
                      color: '#fff',
                      outline: 'none',
                      fontSize: '0.95rem',
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.4rem', fontWeight: 500 }}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+44 7000 000000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid var(--border-gold)',
                      borderRadius: 'var(--radius-sm)',
                      color: '#fff',
                      outline: 'none',
                      fontSize: '0.95rem',
                    }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.4rem', fontWeight: 500 }}>
                    Number of Attendees
                  </label>
                  <select
                    value={formData.guestsCount}
                    onChange={(e) => setFormData({ ...formData, guestsCount: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      background: '#0e162b',
                      border: '1px solid var(--border-gold)',
                      borderRadius: 'var(--radius-sm)',
                      color: '#fff',
                      outline: 'none',
                      fontSize: '0.95rem',
                    }}
                  >
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests (Couple)</option>
                    <option value="4">4 Guests</option>
                    <option value="8">8 Guests (Full Table)</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.4rem', fontWeight: 500 }}>
                    Church / Organization
                  </label>
                  <input
                    type="text"
                    placeholder="Home fellowship..."
                    value={formData.churchAffiliation}
                    onChange={(e) => setFormData({ ...formData, churchAffiliation: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid var(--border-gold)',
                      borderRadius: 'var(--radius-sm)',
                      color: '#fff',
                      outline: 'none',
                      fontSize: '0.95rem',
                    }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.4rem', fontWeight: 500 }}>
                  Dietary Requirements & Notes
                </label>
                <textarea
                  rows={3}
                  placeholder="Vegetarian, Halal, Gluten-Free, Nut Allergies, or Seating requests..."
                  value={formData.dietaryRestrictions}
                  onChange={(e) => setFormData({ ...formData, dietaryRestrictions: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid var(--border-gold)',
                    borderRadius: 'var(--radius-sm)',
                    color: '#fff',
                    outline: 'none',
                    fontSize: '0.95rem',
                    resize: 'none',
                  }}
                />
              </div>

              <button type="submit" className="btn-gold" style={{ width: '100%', marginTop: '0.75rem' }}>
                <Send size={16} />
                Submit RSVP & Inquiry
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
