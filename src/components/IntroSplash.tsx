import { useState, useEffect } from 'react';

const INTRO_KEY = 'edutrek_intro_seen';

const ITEMS = [
  'Study Abroad Consultancy',
  'Visa & Documentation',
  'Travel Packages & Ticketing',
  'Free Consultation',
  'Register & Pay (bKash)',
  'Browse Portfolio & Contact Us',
];

export default function IntroSplash() {
  const [visible, setVisible] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [currentLine, setCurrentLine] = useState(0);

  useEffect(() => {
    if (sessionStorage.getItem(INTRO_KEY)) {
      return;
    }
    setVisible(true);
    document.body.classList.add('no-scroll');

    const interval = setInterval(() => {
      setCurrentLine((prev) => (prev + 1) % ITEMS.length);
    }, 420);

    const timeout = setTimeout(() => {
      clearInterval(interval);
      setHidden(true);
      document.body.classList.remove('no-scroll');
      sessionStorage.setItem(INTRO_KEY, '1');
    }, 2800);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className={`intro-splash ${hidden ? 'hidden' : ''}`} aria-hidden="true">
      <div className="intro-splash__logo-wrap">
        <div className="intro-splash__ring"></div>
        <div className="intro-splash__logo" style={{
          width: 'min(320px, 85vw)',
          height: 'auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '2rem',
          fontWeight: 800,
          color: '#d4a85a',
          fontFamily: 'var(--font-display)',
          textShadow: '0 12px 40px rgba(0,0,0,0.35)',
        }}>
          EDU Trek
        </div>
      </div>
      <p className="intro-splash__tagline">Your Vision, Our Direction</p>
      <p className={`intro-splash__lines intro-splash__lines--in`}>{ITEMS[currentLine]}</p>
      <p className="intro-splash__text">Loading your journey</p>
      <div className="intro-splash__bar">
        <div className="intro-splash__bar-fill"></div>
      </div>
    </div>
  );
}
