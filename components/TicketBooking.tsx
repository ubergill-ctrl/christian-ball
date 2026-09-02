'use client';

import React from 'react';
import { Ticket, Check, Sparkles, ExternalLink, ShieldCheck } from 'lucide-react';

interface TicketBookingProps {
  onOpenRsvp: () => void;
}

const tiers = [
  {
    name: 'Individual Patron',
    tagline: 'Single guest general admission',
    price: '£65',
    originalPrice: '£85',
    badge: 'Popular',
    features: [
      'Welcome Red Carpet reception & mocktails',
      'Three-course plated gourmet banquet dinner',
      'Admission to Keynote presentations',
      'Access to full Ballroom dance & live orchestra',
      'Commemorative event booklet',
    ],
    stripeLink: process.env.NEXT_PUBLIC_STRIPE_INDIVIDUAL_LINK || 'https://buy.stripe.com/test_individual_pass',
    isPrimary: false,
  },
  {
    name: 'Couples Gala Pass',
    tagline: 'Reserved pair seating & celebration',
    price: '£120',
    originalPrice: '£150',
    badge: 'Best Value',
    features: [
      'All Individual Patron perks for 2 guests',
      'Guaranteed paired reserved table seating',
      '1x Complimentary professional gala portrait',
      'Artisan gift box from Christian artisans',
      'Full evening banquet & ballroom access',
    ],
    stripeLink: process.env.NEXT_PUBLIC_STRIPE_COUPLES_LINK || 'https://buy.stripe.com/test_couples_pass',
    isPrimary: true,
  },
  {
    name: 'Patron Benefactor Table',
    tagline: 'Dedicated table for 8 + VIP Reception',
    price: '£480',
    originalPrice: '£600',
    badge: 'VIP Table',
    features: [
      'Private table for 8 honored guests',
      'Exclusive Pre-Gala VIP Meet & Greet with Speakers',
      'Premium banquet front-tier positioning',
      'Special mention in gala program & tribute',
      'Full luxury gift package for each attendee',
    ],
    stripeLink: process.env.NEXT_PUBLIC_STRIPE_VIP_LINK || 'https://buy.stripe.com/test_vip_table',
    isPrimary: false,
  },
];

export default function TicketBooking({ onOpenRsvp }: TicketBookingProps) {
  return (
    <section id="tickets" className="section-spacing" style={{ position: 'relative' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="pill-badge" style={{ marginBottom: '1rem' }}>
            <Ticket size={16} />
            Secure Your Seat
          </div>
          <h2 className="font-serif" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1rem' }}>
            Ticket Tiers & <span className="gold-gradient-text">Reservations</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '640px', margin: '0 auto' }}>
            Seats are strictly limited to preserve the intimate banquet atmosphere. Powered by secure Stripe checkout.
          </p>
        </div>

        {/* Pricing Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
          gap: '2rem',
          alignItems: 'stretch',
        }}>
          {tiers.map((tier, index) => (
            <div
              key={index}
              className="glass-panel"
              style={{
                padding: '2.5rem 2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                border: tier.isPrimary ? '2px solid var(--gold-400)' : '1px solid var(--border-gold)',
                background: tier.isPrimary ? 'rgba(18, 28, 55, 0.9)' : 'var(--bg-surface)',
                transform: tier.isPrimary ? 'scale(1.02)' : 'none',
              }}
            >
              {/* Badge */}
              <div style={{
                position: 'absolute',
                top: '-14px',
                right: '24px',
                background: tier.isPrimary ? 'var(--gold-gradient)' : 'rgba(212, 175, 55, 0.2)',
                color: tier.isPrimary ? '#050811' : 'var(--gold-300)',
                padding: '0.3rem 0.9rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.75rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                border: tier.isPrimary ? 'none' : '1px solid var(--border-gold)',
              }}>
                {tier.badge}
              </div>

              <div>
                <h3 className="font-serif" style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '0.35rem' }}>
                  {tier.name}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginBottom: '1.5rem' }}>
                  {tier.tagline}
                </p>

                {/* Price Display */}
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.6rem', marginBottom: '2rem' }}>
                  <span className="font-serif" style={{ fontSize: '2.75rem', fontWeight: 700, color: 'var(--gold-300)', lineHeight: 1 }}>
                    {tier.price}
                  </span>
                  <span style={{ color: 'var(--text-muted)', textDecoration: 'line-through', fontSize: '1.1rem' }}>
                    {tier.originalPrice}
                  </span>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>/ booking</span>
                </div>

                {/* Features List */}
                <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1.5rem', marginBottom: '2rem' }}>
                  <p style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--gold-400)', letterSpacing: '0.1em', fontWeight: 600, marginBottom: '1rem' }}>
                    What&apos;s Included:
                  </p>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                    {tier.features.map((feature, fIndex) => (
                      <li key={fIndex} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                        <Check size={16} color="var(--gold-400)" style={{ flexShrink: 0, marginTop: '3px' }} />
                        <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.4 }}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <a
                  href={tier.stripeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={tier.isPrimary ? 'btn-gold' : 'btn-secondary'}
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <Sparkles size={16} />
                  Buy with Stripe
                  <ExternalLink size={14} style={{ opacity: 0.7 }} />
                </a>

                <button
                  onClick={onOpenRsvp}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: 'var(--text-muted)',
                    fontSize: '0.82rem',
                    cursor: 'pointer',
                    padding: '0.4rem',
                    textDecoration: 'underline',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                >
                  Or Request Invoice / Dietary RSVP
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Security / Stripe Trust Footer */}
        <div style={{
          marginTop: '3.5rem',
          textAlign: 'center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '0.5rem',
          color: 'var(--text-muted)',
          fontSize: '0.88rem',
        }}>
          <ShieldCheck size={18} color="var(--gold-400)" />
          <span>Encrypted 256-Bit SSL Checkout powered by <strong>Stripe Payments</strong>. Instant email ticket confirmation.</span>
        </div>

      </div>
    </section>
  );
}
