'use client';

import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { href: '#about', label: 'The Ball' },
  { href: '#order', label: 'The Evening' },
  { href: '#dress', label: 'Dress' },
  { href: '#venue', label: 'Getting there' },
];

export default function Navbar({ onOpenRsvp }: { onOpenRsvp: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="site-head" data-scrolled={scrolled || open}>
      <div className="container inner">
        <a href="#" className="wordmark">
          <span className="name">Saint Gabriel&rsquo;s Ceilidh</span>
          <span className="year">Wirral &middot; 7th November 2026</span>
        </a>

        <nav className="nav-links" aria-label="Primary">
          {links.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
          <a href="#places" className="btn btn--line btn--small">Take a place</a>
        </nav>

        <button
          className="nav-toggle"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
        </button>
      </div>

      {open && (
        <div className="nav-drawer">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
          <a
            href="#places"
            onClick={() => setOpen(false)}
            className="btn btn--fill btn--block"
          >
            Take a place
          </a>
        </div>
      )}
    </header>
  );
}
