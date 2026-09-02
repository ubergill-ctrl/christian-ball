'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FilmFeature from '@/components/FilmFeature';
import Schedule from '@/components/Schedule';
import Speakers from '@/components/Speakers';
import DressCode from '@/components/DressCode';
import VenueGuide from '@/components/VenueGuide';
import TicketBooking from '@/components/TicketBooking';
import RsvpModal from '@/components/RsvpModal';
import Footer from '@/components/Footer';

export default function Home() {
  const [rsvpOpen, setRsvpOpen] = useState(false);
  const openRsvp = () => setRsvpOpen(true);

  return (
    <main>
      <Navbar onOpenRsvp={openRsvp} />
      <Hero onOpenRsvp={openRsvp} />
      <FilmFeature />

      {/* Why we hold it — a plain paragraph, not a mission statement. */}
      <section id="about" className="section">
        <div className="container">
          <div className="sec-head">
            <span className="label">Why we hold it</span>
            <h2>A dinner, a band, and a ceilidh</h2>
          </div>

          <div className="grid-2" style={{ alignItems: 'start' }}>
            <div className="stack">
              <p>
                The evening began as a handful of Orthodox parishes deciding that
                their young people ought to have a proper night out together &mdash;
                dinner, a live band, and dancing that does not require a partner
                you already know.
              </p>
              <p className="muted">
                It is deliberately laid-back: no dress code to fret over, no set
                menu to agonise about, and a caller who will have you through a
                Gay Gordons whether you have danced one before or not.
              </p>
            </div>

            <div className="ord">
              <div className="ord-item">
                <time>Dinner</time>
                <div>
                  <h4>Two courses, seated</h4>
                  <p>Chef&rsquo;s choice, served at table, no fuss made of it.</p>
                </div>
              </div>
              <div className="ord-item">
                <time>Music</time>
                <div>
                  <h4>A five-piece ceilidh band, and a caller</h4>
                  <p>Every dance talked through first. You need not know the steps.</p>
                </div>
              </div>
              <div className="ord-item">
                <time>Dress</time>
                <div>
                  <h4>Regional dress, or smart casual</h4>
                  <p>A jacket is welcome. A black tie is not required.</p>
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
      <TicketBooking onOpenRsvp={openRsvp} />
      <Footer />

      <RsvpModal isOpen={rsvpOpen} onClose={() => setRsvpOpen(false)} />
    </main>
  );
}
