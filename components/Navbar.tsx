'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Ticket } from 'lucide-react';

interface NavbarProps {
  onOpenRsvp: () => void;
}

export default function Navbar({ onOpenRsvp }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(5, 8, 17, 0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(212, 175, 55, 0.2)' : '1px solid transparent',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '80px' }}>
        {/* Brand */}
        <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <div style={{
            width: '38px',
            height: '38px',
            borderRadius: '50%',
            background: 'var(--gold-gradient)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 15px rgba(212, 175, 55, 0.5)'
          }}>
            <Sparkles size={20} color="#050811" />
          </div>
          <div>
            <span className="font-serif" style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff', letterSpacing: '0.08em', display: 'block' }}>
              THE CHRISTIAN BALL
            </span>
            <span style={{ fontSize: '0.65rem', color: 'var(--gold-400)', letterSpacing: '0.2em', textTransform: 'uppercase', display: 'block' }}>
              ANNUAL GALA 2026
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav style={{ display: 'none', alignItems: 'center', gap: '2rem' }} className="desktop-nav">
          <a href="#about" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 500, transition: 'color 0.2s' }}>About</a>
          <a href="#schedule" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 500, transition: 'color 0.2s' }}>Schedule</a>
          <a href="#speakers" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 500, transition: 'color 0.2s' }}>Keynotes</a>
          <a href="#dress-code" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 500, transition: 'color 0.2s' }}>Dress Code</a>
          <a href="#venue" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 500, transition: 'color 0.2s' }}>Venue</a>
          <a href="#tickets" className="btn-gold" style={{ padding: '0.6rem 1.4rem', fontSize: '0.9rem' }}>
            <Ticket size={16} />
            Get Tickets
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            background: 'transparent',
            border: 'none',
            color: '#fff',
            cursor: 'pointer',
            padding: '0.5rem',
            display: 'block'
          }}
          className="mobile-btn"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div style={{
          background: 'rgba(7, 11, 24, 0.98)',
          borderBottom: '1px solid var(--border-gold)',
          padding: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.2rem',
        }}>
          <a onClick={() => setMobileMenuOpen(false)} href="#about" style={{ color: '#fff', textDecoration: 'none', fontSize: '1.1rem' }}>About the Ball</a>
          <a onClick={() => setMobileMenuOpen(false)} href="#schedule" style={{ color: '#fff', textDecoration: 'none', fontSize: '1.1rem' }}>Schedule</a>
          <a onClick={() => setMobileMenuOpen(false)} href="#speakers" style={{ color: '#fff', textDecoration: 'none', fontSize: '1.1rem' }}>Keynote Guests</a>
          <a onClick={() => setMobileMenuOpen(false)} href="#dress-code" style={{ color: '#fff', textDecoration: 'none', fontSize: '1.1rem' }}>Dress Code</a>
          <a onClick={() => setMobileMenuOpen(false)} href="#venue" style={{ color: '#fff', textDecoration: 'none', fontSize: '1.1rem' }}>Venue & Travel</a>
          <a onClick={() => setMobileMenuOpen(false)} href="#tickets" className="btn-gold" style={{ width: '100%', marginTop: '0.5rem' }}>
            <Ticket size={18} />
            Get Tickets
          </a>
        </div>
      )}

      <style jsx>{`
        @media (min-width: 900px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-btn {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
