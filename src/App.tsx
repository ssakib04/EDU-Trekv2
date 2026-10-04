import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import IntroSplash from './components/IntroSplash';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Register from './pages/Register';
import Contact from './pages/Contact';
import './styles/edu-trek.css';

export default function App() {
  return (
    <Router>
      <IntroSplash />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <Chatbot />
    </Router>
  );
}
