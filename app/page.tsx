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

export default function Home() {
  const [rsvpOpen, setRsvpOpen] = useState(false);
  const openRsvp = () => setRsvpOpen(true);

  return (
    <main>
      <Navbar onOpenRsvp={openRsvp} />
      <Hero onOpenRsvp={openRsvp} />

      {/* Why we hold it — a plain paragraph, not a mission statement. */}
      <section id="about" className="section section--ruled">
        <div className="container">
          <div className="sec-head">
            <span className="label">Why we hold it</span>
            <h2>A dinner, a band, and a collection</h2>
          </div>

          <div className="grid-2" style={{ alignItems: 'start' }}>
            <div className="stack">
              <p>
                The ball began as a handful of parishes deciding that the Saturday
                before Advent ought to be spent at a table with people they liked,
                and that if a hundred and eighty of us were going to have dinner
                anyway, the surplus might as well go somewhere useful.
              </p>
              <p className="muted">
                {/* TODO — replace with last year's real figure and charity. */}
                Last year the evening raised a sum the committee published in full
                the following week, as it does every year. Nobody on the committee
                is paid, and the ticket price covers the room and the food before
                it covers anything else.
              </p>
            </div>

            <div className="ord">
              <div className="ord-item">
                <time>Dinner</time>
                <div>
                  <h4>Three courses, seated</h4>
                  <p>Cooked properly, served at table, finished before the speeches.</p>
                </div>
              </div>
              <div className="ord-item">
                <time>Music</time>
                <div>
                  <h4>A band, and a caller</h4>
                  <p>Waltz, polka and the Gay Gordons. You need not know the steps.</p>
                </div>
              </div>
              <div className="ord-item">
                <time>Appeal</time>
                <div>
                  <h4>Ten minutes, once</h4>
                  <p>One appeal, after dinner. No auction, no raffle at every table.</p>
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
