import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    document.body.classList.remove('no-scroll');
  }, [location]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <Link to="/" className="navbar__logo" aria-label="EDU Trek Travel Home">
        <span className="navbar__logo-badge">
          <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=100&q=80" alt="EDU Trek Travel" />
        </span>
      </Link>
      <div className="navbar__inner container">
        <button
          className={`navbar__toggle ${menuOpen ? 'open' : ''}`}
          aria-label="Toggle menu"
          onClick={() => {
            setMenuOpen(!menuOpen);
            document.body.classList.toggle('no-scroll', !menuOpen);
          }}
        >
          <span></span><span></span><span></span>
        </button>
        <ul className={`navbar__links ${menuOpen ? 'open' : ''}`}>
          <li><Link to="/" className={isActive('/') ? 'active' : ''}>Home</Link></li>
          <li><Link to="/about" className={isActive('/about') ? 'active' : ''}>About</Link></li>
          <li><Link to="/portfolio" className={isActive('/portfolio') ? 'active' : ''}>Portfolio</Link></li>
          <li><Link to="/contact" className={isActive('/contact') ? 'active' : ''}>Contact</Link></li>
          <li><Link to="/register" className={`navbar__cta ${isActive('/register') ? 'active' : ''}`}>Register</Link></li>
        </ul>
      </div>
    </nav>
  );
}
