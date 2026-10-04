import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import IntroSplash from './components/IntroSplash';
import ParticleBackground from './components/ParticleBackground';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Register from './pages/Register';
import Contact from './pages/Contact';
import './styles/edu-trek.css';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <ParticleBackground />
      <IntroSplash />
      <Navbar />
      <main style={{ position: 'relative', zIndex: 1 }}>
        <AnimatedRoutes />
      </main>
      <Footer />
      <Chatbot />
    </Router>
  );
}
