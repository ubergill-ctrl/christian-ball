'use client';

import React from 'react';
import { Clock, Wine, Mic, Music, Award, HeartHandshake } from 'lucide-react';

const scheduleItems = [
  {
    time: '18:00 - 18:45',
    title: 'Red Carpet Reception & Welcome Mocktails',
    description: 'Arrival, red carpet photography, sparkling botanical beverages, and introductory violin prelude.',
    icon: Wine,
  },
  {
    time: '19:00 - 20:30',
    title: 'Opening Prayer & Three-Course Grand Banquet',
    description: 'Invocation by esteemed leadership followed by an artisan, multi-course fine dining feast.',
    icon: Award,
  },
  {
    time: '20:30 - 21:15',
    title: 'Keynote Addresses & Vision of Hope',
    description: 'Heartfelt speeches, ministry reflections, and special charitable presentation for youth education.',
    icon: Mic,
  },
  {
    time: '21:15 - 22:30',
    title: 'Ballroom Dancing & Chamber Orchestra',
    description: 'Classical waltz, lively fellowship dance, and contemporary praise ensemble in the grand ballroom.',
    icon: Music,
  },
  {
    time: '22:30 - 23:00',
    title: 'Benediction & Parting Gifts',
    description: 'Closing corporate blessing, commemorative token distribution, and final fellowship.',
    icon: HeartHandshake,
  },
];

export default function Schedule() {
  return (
    <section id="schedule" className="section-spacing" style={{ background: 'rgba(5, 8, 17, 0.6)' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="pill-badge" style={{ marginBottom: '1rem' }}>
            <Clock size={16} />
            The Itinerary
          </div>
          <h2 className="font-serif" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1rem' }}>
            Order of the <span className="gold-gradient-text">Evening</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
            A thoughtfully curated evening balancing dignified reverence, joy, and memorable fellowship.
          </p>
        </div>

        {/* Timeline List */}
        <div style={{ maxWidth: '850px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {scheduleItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="glass-panel"
                style={{
                  padding: '1.75rem',
                  display: 'flex',
                  gap: '1.5rem',
                  alignItems: 'flex-start',
                }}
              >
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '14px',
                  background: 'rgba(212, 175, 55, 0.15)',
                  border: '1px solid var(--border-gold)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <Icon size={24} color="var(--gold-400)" />
                </div>

                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.4rem' }}>
                    <h3 className="font-serif" style={{ fontSize: '1.25rem', color: '#fff', fontWeight: 600 }}>
                      {item.title}
                    </h3>
                    <span style={{
                      fontSize: '0.85rem',
                      color: 'var(--gold-300)',
                      fontWeight: 600,
                      background: 'rgba(212, 175, 55, 0.1)',
                      padding: '0.2rem 0.75rem',
                      borderRadius: 'var(--radius-full)',
                      border: '1px solid rgba(212, 175, 55, 0.25)'
                    }}>
                      {item.time}
                    </span>
                  </div>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
