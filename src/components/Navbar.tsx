import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

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

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
    }
  };

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="navbar__inner">
        <Link to="/" className="navbar__logo">
          EDU Trek
        </Link>
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
    </motion.nav>
  );
}
