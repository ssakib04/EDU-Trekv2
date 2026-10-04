import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=100&q=80" alt="EDU Trek Travel" />
            <p>Your trusted partner for study abroad consultancy and premium travel experiences.</p>
            <div className="footer__social">
              <a href="https://web.facebook.com/Edutrektravel" aria-label="Facebook">f</a>
              <a href="#" aria-label="Instagram">in</a>
              <a href="#" aria-label="WhatsApp">w</a>
            </div>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/register">Register</Link></li>
            </ul>
          </div>
          <div>
            <h4>Services</h4>
            <ul>
              <li><Link to="/about">Study Abroad</Link></li>
              <li><Link to="/about">Travel Packages</Link></li>
              <li><Link to="/about">Visa Assistance</Link></li>
              <li><Link to="/contact">Consultation</Link></li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li>Chattogram, Bangladesh</li>
              <li><a href="mailto:info@edutrektravel.com">info@edutrektravel.com</a></li>
              <li><a href="tel:+8801805513942">+8801805513942</a></li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <p>&copy; 2026 EDU Trek. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
