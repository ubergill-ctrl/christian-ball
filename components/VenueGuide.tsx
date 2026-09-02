'use client';

import React from 'react';
import { MapPin, Navigation, Car, Train, Hotel } from 'lucide-react';

export default function VenueGuide() {
  return (
    <section id="venue" className="section-spacing">
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="pill-badge" style={{ marginBottom: '1rem' }}>
            <MapPin size={16} />
            The Location
          </div>
          <h2 className="font-serif" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1rem' }}>
            The Venue & <span className="gold-gradient-text">Directions</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '620px', margin: '0 auto' }}>
            A historic, magnificent setting designed to provide an unforgettable atmosphere of grandeur and hospitality.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2.5rem',
          alignItems: 'stretch',
        }}>
          {/* Venue Card */}
          <div className="glass-panel" style={{ padding: '2.5rem 2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{
                display: 'inline-flex',
                padding: '0.35rem 0.9rem',
                borderRadius: 'var(--radius-full)',
                background: 'rgba(212, 175, 55, 0.15)',
                color: 'var(--gold-300)',
                fontSize: '0.8rem',
                fontWeight: 600,
                marginBottom: '1rem'
              }}>
                Historic Ballroom
              </div>

              <h3 className="font-serif" style={{ fontSize: '1.75rem', color: '#fff', marginBottom: '0.5rem' }}>
                The Grand Monarch Ballroom
              </h3>
              
              <p style={{ color: 'var(--gold-400)', fontSize: '1rem', marginBottom: '1.25rem' }}>
                Westminster Hall Estate, London SW1P 3JA
              </p>

              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                Featuring soaring 30-foot gold-leaf ceilings, crystal chandeliers, a marble dance floor, and state-of-the-art acoustic sound engineering for our live symphony and speakers.
              </p>
            </div>

            <a
              href="https://maps.google.com/?q=Westminster+Hall+London"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <Navigation size={18} />
              Open in Google Maps
            </a>
          </div>

          {/* Travel & Accommodation Tips */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            
            <div className="glass-panel" style={{ padding: '1.5rem', display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
              <div style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                background: 'rgba(212, 175, 55, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <Train size={22} color="var(--gold-400)" />
              </div>
              <div>
                <h4 className="font-serif" style={{ fontSize: '1.1rem', color: '#fff', marginBottom: '0.2rem' }}>Public Transit</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.5 }}>
                  5-minute walk from Westminster & St. James’s Park Underground stations (Jubilee, Circle & District lines).
                </p>
              </div>
            </div>

            <div className="glass-panel" style={{ padding: '1.5rem', display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
              <div style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                background: 'rgba(212, 175, 55, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <Car size={22} color="var(--gold-400)" />
              </div>
              <div>
                <h4 className="font-serif" style={{ fontSize: '1.1rem', color: '#fff', marginBottom: '0.2rem' }}>Valet & Parking</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.5 }}>
                  Complimentary valet parking available at the main entrance portico for all ticket holders.
                </p>
              </div>
            </div>

            <div className="glass-panel" style={{ padding: '1.5rem', display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
              <div style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                background: 'rgba(212, 175, 55, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <Hotel size={22} color="var(--gold-400)" />
              </div>
              <div>
                <h4 className="font-serif" style={{ fontSize: '1.1rem', color: '#fff', marginBottom: '0.2rem' }}>Partner Hotels</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.5 }}>
                  Discounted room rates available at The Westminster Curio Hotel using code <strong style={{ color: 'var(--gold-300)' }}>XIANBALL26</strong>.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
