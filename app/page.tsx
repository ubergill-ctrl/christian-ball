'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Schedule from '@/components/Schedule';
import Speakers from '@/components/Speakers';
import DressCode from '@/components/DressCode';
import VenueGuide from '@/components/VenueGuide';
import TicketBooking from '@/components/TicketBooking';
import RsvpModal from '@/components/RsvpModal';
import Footer from '@/components/Footer';
import { Sparkles, Heart, Award } from 'lucide-react';

export default function Home() {
  const [rsvpOpen, setRsvpOpen] = useState(false);

  return (
    <main style={{ minHeight: '100vh', position: 'relative' }}>
      <Navbar onOpenRsvp={() => setRsvpOpen(true)} />
      
      <Hero onOpenRsvp={() => setRsvpOpen(true)} />

      {/* About / Vision Highlight Banner */}
      <section id="about" className="section-spacing" style={{ position: 'relative' }}>
        <div className="container">
          <div className="glass-panel" style={{
            padding: '3.5rem 2.5rem',
            background: 'linear-gradient(135deg, rgba(14, 22, 42, 0.95) 0%, rgba(7, 12, 26, 0.98) 100%)',
            border: '1px solid var(--border-gold)',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center' }}>
              <div className="pill-badge" style={{ marginBottom: '1.25rem' }}>
                <Sparkles size={16} /> Our Sacred Calling & Purpose
              </div>
              <h2 className="font-serif" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', marginBottom: '1.5rem', lineHeight: 1.3 }}>
                A Celebration of Kingdom Unity & Excellence
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '2rem' }}>
                The Christian Ball was established to create a sanctuary of elevated refinement, honoring the beauty of holy matrimony, fellowship, and Christian leadership. In a world of noise, we gather in regal splendor to rejoice, break bread, and raise essential funds for vulnerable families and community youth programs.
              </p>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '1.5rem',
                marginTop: '2.5rem',
                textAlign: 'left',
              }}>
                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid rgba(212,175,55,0.15)' }}>
                  <Award size={24} color="var(--gold-400)" style={{ marginBottom: '0.5rem' }} />
                  <h4 className="font-serif" style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '0.3rem' }}>Gourmet Feast</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Three-course fine dining curated by Master Chefs.</p>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid rgba(212,175,55,0.15)' }}>
                  <Sparkles size={24} color="var(--gold-400)" style={{ marginBottom: '0.5rem' }} />
                  <h4 className="font-serif" style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '0.3rem' }}>Royal Waltz</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Live 12-piece chamber orchestra & ballroom floor.</p>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid rgba(212,175,55,0.15)' }}>
                  <Heart size={24} color="var(--gold-400)" style={{ marginBottom: '0.5rem' }} />
                  <h4 className="font-serif" style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '0.3rem' }}>Benevolent Giving</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>All net proceeds to underprivileged youth charities.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Schedule />
      <Speakers />
      <DressCode />
      <VenueGuide />
      <TicketBooking onOpenRsvp={() => setRsvpOpen(true)} />
      <Footer />

      <RsvpModal isOpen={rsvpOpen} onClose={() => setRsvpOpen(false)} />
    </main>
  );
}
