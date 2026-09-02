'use client';

import React from 'react';
import { Sparkles, Mail, Phone, MapPin, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{
      background: 'rgba(3, 5, 11, 0.98)',
      borderTop: '1px solid var(--border-gold)',
      paddingTop: '5rem',
      paddingBottom: '3rem',
    }}>
      <div className="container">
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '3rem',
          marginBottom: '4rem',
        }}>
          {/* Brand Col */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: 'var(--gold-gradient)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <Sparkles size={16} color="#050811" />
              </div>
              <span className="font-serif" style={{ fontSize: '1.15rem', fontWeight: 700, color: '#fff', letterSpacing: '0.05em' }}>
                THE CHRISTIAN BALL
              </span>
            </div>

            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              An evening honoring faith, heritage, and benevolent community stewardship. Bringing believers together for high fellowship and celebration.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--gold-400)', fontSize: '0.85rem' }}>
              <Heart size={15} />
              <span>100% of net proceeds support charitable missions.</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif" style={{ fontSize: '1.1rem', color: '#fff', marginBottom: '1.25rem' }}>
              Navigation
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li><a href="#about" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>About the Gala</a></li>
              <li><a href="#schedule" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>Evening Itinerary</a></li>
              <li><a href="#speakers" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>Keynote Speakers</a></li>
              <li><a href="#dress-code" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>Dress Code Guidelines</a></li>
              <li><a href="#tickets" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>Ticket Tiers & Stripe</a></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="font-serif" style={{ fontSize: '1.1rem', color: '#fff', marginBottom: '1.25rem' }}>
              Committee & Inquiries
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                <Mail size={16} color="var(--gold-400)" />
                <span>{process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'rsvp@christianball.org'}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                <Phone size={16} color="var(--gold-400)" />
                <span>{process.env.NEXT_PUBLIC_CONTACT_PHONE || '+44 20 7946 0920'}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                <MapPin size={16} color="var(--gold-400)" />
                <span>Westminster, London, United Kingdom</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid var(--border-subtle)',
          paddingTop: '2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          color: 'var(--text-muted)',
          fontSize: '0.85rem',
        }}>
          <p>© 2026 The Christian Ball Gala Committee. All Rights Reserved.</p>
          <p>Powered by Next.js & Vercel</p>
        </div>

      </div>
    </footer>
  );
}
