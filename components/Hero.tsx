'use client';

import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Sparkles, ArrowRight, ShieldCheck, Heart } from 'lucide-react';

interface CountdownState {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Hero({ onOpenRsvp }: { onOpenRsvp: () => void }) {
  const [timeLeft, setTimeLeft] = useState<CountdownState>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const targetDate = new Date(process.env.NEXT_PUBLIC_EVENT_DATE || '2026-11-21T18:00:00').getTime();

    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      paddingTop: '120px',
      paddingBottom: '5rem',
      overflow: 'hidden',
    }}>
      {/* Background Decorative Rings */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px',
        height: '600px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(212, 175, 55, 0.12) 0%, rgba(5, 8, 17, 0) 70%)',
        pointerEvents: 'none',
        zIndex: 0,
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        
        {/* Top Badge */}
        <div style={{ display: 'inline-flex', marginBottom: '1.75rem' }}>
          <div className="pill-badge">
            <Sparkles size={16} />
            The Premier Gala of Faith & Celebration
          </div>
        </div>

        {/* Main Title */}
        <h1 className="font-serif" style={{
          fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
          fontWeight: 900,
          lineHeight: 1.15,
          marginBottom: '1.25rem',
          maxWidth: '960px',
          margin: '0 auto 1.5rem',
        }}>
          A Night of Sovereign Grace & <span className="gold-gradient-text">Radiant Fellowship</span>
        </h1>

        {/* Subtitle */}
        <p style={{
          fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
          color: 'var(--text-secondary)',
          maxWidth: '740px',
          margin: '0 auto 2.5rem',
          fontWeight: 300,
          lineHeight: 1.7,
        }}>
          You are cordially invited to an illustrious evening of royal hospitality, gourmet banquet dining, inspirational addresses, and dignified ballroom dance to the glory of God.
        </p>

        {/* Event Quick Meta Bar */}
        <div style={{
          display: 'inline-flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '1.5rem',
          background: 'rgba(255, 255, 255, 0.03)',
          border: '1px solid var(--border-gold)',
          borderRadius: 'var(--radius-full)',
          padding: '0.8rem 1.8rem',
          marginBottom: '3rem',
          backdropFilter: 'blur(10px)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#fff', fontSize: '0.95rem' }}>
            <Calendar size={18} color="var(--gold-400)" />
            <span>Saturday, November 21, 2026 • 6:00 PM</span>
          </div>
          <div style={{ width: '1px', background: 'var(--border-gold)', height: '20px' }} className="meta-divider" />
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#fff', fontSize: '0.95rem' }}>
            <MapPin size={18} color="var(--gold-400)" />
            <span>The Grand Monarch Ballroom • Westminster, London</span>
          </div>
        </div>

        {/* Countdown Timer */}
        {mounted && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1rem',
            maxWidth: '560px',
            margin: '0 auto 3.5rem',
          }}>
            {[
              { label: 'Days', value: timeLeft.days },
              { label: 'Hours', value: timeLeft.hours },
              { label: 'Minutes', value: timeLeft.minutes },
              { label: 'Seconds', value: timeLeft.seconds },
            ].map((unit, index) => (
              <div
                key={index}
                className="glass-panel"
                style={{
                  padding: '1.25rem 0.5rem',
                  textAlign: 'center',
                  background: 'rgba(11, 17, 34, 0.65)',
                }}
              >
                <span className="font-serif" style={{
                  fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                  fontWeight: 700,
                  color: 'var(--gold-300)',
                  display: 'block',
                  lineHeight: 1,
                  marginBottom: '0.35rem',
                }}>
                  {String(unit.value).padStart(2, '0')}
                </span>
                <span style={{
                  fontSize: '0.75rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                  color: 'var(--text-muted)',
                  fontWeight: 600,
                }}>
                  {unit.label}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Action Buttons */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.2rem', flexWrap: 'wrap' }}>
          <a href="#tickets" className="btn-gold" style={{ fontSize: '1.1rem', padding: '1rem 2.2rem' }}>
            Reserve Your Place
            <ArrowRight size={18} />
          </a>
          <button onClick={onOpenRsvp} className="btn-secondary" style={{ fontSize: '1.1rem', padding: '1rem 2.2rem' }}>
            RSVP & Inquiries
          </button>
        </div>

        {/* Trust Badges */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '2.5rem',
          marginTop: '3.5rem',
          color: 'var(--text-muted)',
          fontSize: '0.85rem',
          flexWrap: 'wrap',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <ShieldCheck size={16} color="var(--gold-400)" />
            <span>Black-Tie & Modest Formal</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <Heart size={16} color="var(--gold-400)" />
            <span>Supporting Christian Youth Charities</span>
          </div>
        </div>

      </div>

      <style jsx>{`
        @media (max-width: 640px) {
          .meta-divider {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
