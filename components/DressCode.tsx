'use client';

import React from 'react';
import { Sparkles, CheckCircle2, ShieldAlert } from 'lucide-react';

export default function DressCode() {
  return (
    <section id="dress-code" className="section-spacing" style={{ background: 'rgba(5, 8, 17, 0.7)' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="pill-badge" style={{ marginBottom: '1rem' }}>
            <Sparkles size={16} />
            Elegance & Reverence
          </div>
          <h2 className="font-serif" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1rem' }}>
            Attire & <span className="gold-gradient-text">Dress Code</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '650px', margin: '0 auto' }}>
            Our standard is <strong>Black-Tie & Modest Formal</strong> — celebrating royal beauty, honor, and modesty.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem',
          maxWidth: '1000px',
          margin: '0 auto',
        }}>
          {/* Gentlemen Card */}
          <div className="glass-panel" style={{ padding: '2.5rem 2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'rgba(212, 175, 55, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <span className="font-serif" style={{ color: 'var(--gold-300)', fontWeight: 700 }}>G</span>
              </div>
              <h3 className="font-serif" style={{ fontSize: '1.4rem', color: '#fff' }}>For Gentlemen</h3>
            </div>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <CheckCircle2 size={18} color="var(--gold-400)" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                  <strong>Black-Tie Tuxedo or Tailored Dark Suit</strong> (Midnight Navy, Charcoal, or Classic Black).
                </span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <CheckCircle2 size={18} color="var(--gold-400)" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                  Crisp white dress shirt with black or gold bow tie / formal necktie.
                </span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <CheckCircle2 size={18} color="var(--gold-400)" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                  Polished formal leather dress shoes or patent oxfords.
                </span>
              </li>
            </ul>
          </div>

          {/* Ladies Card */}
          <div className="glass-panel" style={{ padding: '2.5rem 2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'rgba(212, 175, 55, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <span className="font-serif" style={{ color: 'var(--gold-300)', fontWeight: 700 }}>L</span>
              </div>
              <h3 className="font-serif" style={{ fontSize: '1.4rem', color: '#fff' }}>For Ladies</h3>
            </div>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <CheckCircle2 size={18} color="var(--gold-400)" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                  <strong>Floor-length Evening Gown or Elegant Formal Dress</strong> in royal tones, gold, emerald, or jewel palettes.
                </span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <CheckCircle2 size={18} color="var(--gold-400)" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                  Modest neckline and sophisticated silhouette reflecting dignity and grace.
                </span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <CheckCircle2 size={18} color="var(--gold-400)" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                  Evening shawls, capes, and formal footwear suitable for ballroom dancing.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Note / Guidance */}
        <div style={{
          maxWidth: '700px',
          margin: '2.5rem auto 0',
          background: 'rgba(212, 175, 55, 0.08)',
          border: '1px solid rgba(212, 175, 55, 0.3)',
          borderRadius: 'var(--radius-md)',
          padding: '1.25rem 1.75rem',
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
        }}>
          <ShieldAlert size={24} color="var(--gold-400)" style={{ flexShrink: 0 }} />
          <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
            <strong>Please Note:</strong> Casual clothing, sportswear, and trainers are strictly prohibited. We appreciate your adherence to honoring our high standard of reverence and celebration.
          </p>
        </div>

      </div>
    </section>
  );
}
