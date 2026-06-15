import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import CommandPalette from './CommandPalette';
import './Navbar.css';

const navLinks = [
  { num: '01', label: 'Home', path: '/home' },
  { num: '02', label: 'About', path: '/about' },
  { num: '03', label: 'Projects', path: '/projects' },
  { num: '04', label: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  // Ctrl+K / Cmd+K shortcut
  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setPaletteOpen((v) => !v);
      }
      if (e.key === 'Escape') setPaletteOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  };

  // Restore theme on load
  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved) document.documentElement.setAttribute('data-theme', saved);
  }, []);

  return (
    <>
      <header className={`topbar${scrolled ? ' scrolled' : ''}`} role="banner">
        <NavLink to="/home" className="brand" aria-label="Subhash — home">
          <span className="brand-mark" aria-hidden="true">S</span>
          <span className="brand-mono">subhash.v</span>
        </NavLink>

        <nav className={`topnav${mobileOpen ? ' open' : ''}`} aria-label="Primary">
          {navLinks.map((l) => (
            <NavLink
              key={l.path}
              to={l.path}
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              onClick={() => setMobileOpen(false)}
            >
              <span className="num">{l.num}</span> {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="topbar-actions">
          <button
            className="kbd-hint"
            onClick={() => setPaletteOpen(true)}
            aria-label="Open command palette"
          >
            <kbd>Ctrl</kbd><kbd>K</kbd>
          </button>

          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            <span className="theme-toggle-track" aria-hidden="true"></span>
          </button>

          <button
            className={`hamburger${mobileOpen ? ' open' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
            aria-expanded={mobileOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      <CommandPalette isOpen={paletteOpen} onClose={() => setPaletteOpen(false)} />

      {mobileOpen && (
        <div className="mobile-overlay" onClick={() => setMobileOpen(false)} />
      )}
    </>
  );
};

export default Navbar;