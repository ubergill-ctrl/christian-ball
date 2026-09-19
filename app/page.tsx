'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FilmFeature from '@/components/FilmFeature';
import Schedule from '@/components/Schedule';
import Menu from '@/components/Menu';
import Gallery from '@/components/Gallery';
import DressCode from '@/components/DressCode';
import VenueGuide from '@/components/VenueGuide';
import Accommodation from '@/components/Accommodation';
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

      {/* Why we hold it: a plain paragraph, not a mission statement. */}
      <section id="about" className="section">
        <div className="container">
          <div className="sec-head">
            <span className="label">Why we hold it</span>
            <h2>A dinner, a band, and a ceilidh</h2>
          </div>

          <div className="grid-2" style={{ alignItems: 'start' }}>
            <div className="stack">
              <p>
                This evening follows the Ascension Spring Ball, hosted at Strawberry
                Hill in London, which filled its room and sent people home asking
                when the next one would be. This is the next one, held in the north.
              </p>
              <p>
                It is also an evening about what it means to be Orthodox in Britain.
                British tradition, as we have inherited it, has been separated from
                Orthodoxy for more than a thousand years, since the Norman invasion,
                and the faith is only now returning to these isles.
              </p>
              <p className="muted">
                So the question the evening puts, without labouring it: how do we
                merge the traditions already present in this land with the
                re-emerging Orthodox faith? A ceilidh is a reasonable place to
                begin asking.
              </p>
            </div>

            <div className="ord">
              <div className="ord-item">
                <time>Dinner</time>
                <div>
                  <h4>Three courses, seated</h4>
                  <p>A set menu, pre-ordered, served at table, no fuss made of it.</p>
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
                  <h4>Formal, and kilts encouraged</h4>
                  <p>Ties optional. Kilts are always welcome.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Schedule />
      <Menu onOpenRsvp={openRsvp} />
      <Gallery />
      <DressCode />
      <VenueGuide />
      <Accommodation />
      <TicketBooking onOpenRsvp={openRsvp} />
      <Footer />

      <RsvpModal isOpen={rsvpOpen} onClose={() => setRsvpOpen(false)} />
    </main>
  );
}
