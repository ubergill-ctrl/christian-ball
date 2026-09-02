'use client';

import React from 'react';
import { Users, Quote, Sparkles } from 'lucide-react';

const speakers = [
  {
    name: 'Rev. Dr. Arthur Kensington',
    role: 'Keynote Speaker & Author',
    topic: '“Living as Light in Modern Times”',
    bio: 'Renowned theologian, international speaker, and author dedicated to inspiring Christians to lead with wisdom and integrity.',
    initials: 'AK',
  },
  {
    name: 'Lady Eleanor Montgomery',
    role: 'Patron & Philanthropist',
    topic: '“The Ministry of Stewardship & Hospitality”',
    bio: 'Founding trustee of the Kingdom Children’s Initiative and champion for charitable outreach across Europe and Africa.',
    initials: 'EM',
  },
  {
    name: 'Pastor Samuel & Grace Adebayo',
    role: 'Hosts & Pastoral Leadership',
    topic: '“Building Faith-Centered Families & Unity”',
    bio: 'Pastors with over 20 years of ministry leadership, fostering interdenominational fellowship and community transformation.',
    initials: 'SA',
  },
];

export default function Speakers() {
  return (
    <section id="speakers" className="section-spacing">
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="pill-badge" style={{ marginBottom: '1rem' }}>
            <Users size={16} />
            Distinguished Guests
          </div>
          <h2 className="font-serif" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1rem' }}>
            Keynote Speakers & <span className="gold-gradient-text">Ministers</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '620px', margin: '0 auto' }}>
            Hear from leaders of faith whose insights and lives inspire deeper fellowship, integrity, and purpose.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
        }}>
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="glass-panel"
              style={{
                padding: '2.5rem 2rem',
                textAlign: 'center',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                {/* Avatar / Monogram */}
                <div style={{
                  width: '90px',
                  height: '90px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, rgba(212,175,55,0.2) 0%, rgba(18,26,47,0.9) 100%)',
                  border: '2px solid var(--gold-400)',
                  margin: '0 auto 1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 0 20px rgba(212,175,55,0.25)',
                }}>
                  <span className="font-serif" style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--gold-300)' }}>
                    {speaker.initials}
                  </span>
                </div>

                <h3 className="font-serif" style={{ fontSize: '1.35rem', color: '#fff', marginBottom: '0.35rem' }}>
                  {speaker.name}
                </h3>
                
                <p style={{ color: 'var(--gold-400)', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem' }}>
                  {speaker.role}
                </p>

                <div style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(212, 175, 55, 0.15)',
                  borderRadius: 'var(--radius-md)',
                  padding: '0.75rem 1rem',
                  marginBottom: '1.25rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                }}>
                  <Quote size={14} color="var(--gold-400)" />
                  <span style={{ fontSize: '0.85rem', fontStyle: 'italic', color: '#e2e8f0' }}>
                    {speaker.topic}
                  </span>
                </div>

                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                  {speaker.bio}
                </p>
              </div>

              <div style={{ marginTop: '1.75rem', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--gold-300)', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                  <Sparkles size={14} /> Evening Address
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
