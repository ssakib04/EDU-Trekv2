import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

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
    }, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  if (!visible) return null;

  return (
    <motion.div
      className={`intro-splash ${hidden ? 'hidden' : ''}`}
      aria-hidden="true"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="intro-splash__logo"
        initial={{ scale: 0.5, rotateY: 180, filter: 'blur(20px)' }}
        animate={{ scale: 1, rotateY: 0, filter: 'blur(0px)' }}
        transition={{ duration: 1.5, ease: [0.34, 1.56, 0.64, 1] }}
      >
        EDU Trek
      </motion.div>
      <motion.p
        className="intro-splash__tagline"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Your Vision, Our Direction
      </motion.p>
      <motion.p
        className="intro-splash__lines"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        key={currentLine}
      >
        {ITEMS[currentLine]}
      </motion.p>
      <div className="intro-splash__bar">
        <motion.div
          className="intro-splash__bar-fill"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 2.5, ease: 'easeInOut' }}
        />
      </div>
    </motion.div>
  );
}
