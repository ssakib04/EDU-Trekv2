import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollTop } from '../hooks/useAnimations';

const PORTFOLIO_ITEMS = [
  { category: 'education', img: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80', tag: 'Study Abroad', title: 'Melbourne, Australia', desc: 'MBA Program Placement' },
  { category: 'education', img: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&q=80', tag: 'Study Abroad', title: 'London, UK', desc: 'Undergraduate Admissions' },
  { category: 'travel', img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80', tag: 'Travel', title: 'Swiss Alps Tour', desc: 'Group Adventure Package' },
  { category: 'travel', img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600&q=80', tag: 'Travel', title: 'Bali, Indonesia', desc: 'Family Holiday Package' },
  { category: 'events', img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80', tag: 'Events', title: 'Study Abroad Fair', desc: 'Dhaka — 200+ Attendees' },
  { category: 'education', img: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=600&q=80', tag: 'Study Abroad', title: 'Toronto, Canada', desc: 'Engineering Program' },
  { category: 'events', img: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&q=80', tag: 'Events', title: 'Visa Workshop', desc: 'Student Preparation Session' },
  { category: 'travel', img: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&q=80', tag: 'Travel', title: 'European Road Trip', desc: 'Custom Itinerary' },
  { category: 'education', img: 'https://images.unsplash.com/photo-1562774053-701939374585?w=600&q=80', tag: 'Study Abroad', title: 'Sydney, Australia', desc: 'IT & Computer Science' },
];

export default function Portfolio() {
  const [filter, setFilter] = useState('all');
  useScrollTop();

  const filtered = filter === 'all' ? PORTFOLIO_ITEMS : PORTFOLIO_ITEMS.filter(item => item.category === filter);

  return (
    <>
      <header className="hero" style={{ minHeight: '60vh', paddingTop: '10rem' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="section__label">Our Portfolio</span>
            <h1 className="section__title" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }}>
              Success Stories
            </h1>
            <p className="section__subtitle">A glimpse of study abroad placements and travel experiences we've delivered</p>
          </motion.div>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <motion.div
            className="portfolio-filters"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {['all', 'education', 'travel', 'events'].map((f) => (
              <button
                key={f}
                className={`filter-btn ${filter === f ? 'active' : ''}`}
                onClick={() => setFilter(f)}
              >
                {f === 'all' ? 'All' : f === 'education' ? 'Study Abroad' : f.charAt(0).toUpperCase() + f.slice(1)}
              </button>
            ))}
          </motion.div>

          <motion.div className="grid-3" layout>
            <AnimatePresence mode="popLayout">
              {filtered.map((item, i) => (
                <motion.article
                  key={item.title}
                  className="portfolio-item"
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <img src={item.img} alt={item.title} />
                  <div className="portfolio-item__overlay">
                    <span className="portfolio-item__tag">{item.tag}</span>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <motion.div
            className="cta-banner"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2>Want to Be Our Next Success Story?</h2>
            <p>Join hundreds of students and travellers who trusted EDU Trek.</p>
            <Link to="/register" className="btn btn--primary">Get Started →</Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
