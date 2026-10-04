import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useReveal, useScrollTop } from '../hooks/useAnimations';

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
  useReveal();
  useScrollTop();

  const filtered = filter === 'all' ? PORTFOLIO_ITEMS : PORTFOLIO_ITEMS.filter(item => item.category === filter);

  return (
    <>
      <header className="page-header">
        <div className="container">
          <h1 className="page-header__title">Our Portfolio</h1>
          <p className="page-header__breadcrumb"><Link to="/">Home</Link> / Portfolio</p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="text-center mb-4 reveal">
            <span className="section__label">Success Stories</span>
            <h2 className="section__title">Journeys We've Shaped</h2>
            <p className="section__subtitle" style={{ margin: '0 auto' }}>A glimpse of study abroad placements and travel experiences we've delivered.</p>
          </div>

          <div className="portfolio-filters reveal">
            <button className={`filter-btn ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>All</button>
            <button className={`filter-btn ${filter === 'education' ? 'active' : ''}`} onClick={() => setFilter('education')}>Study Abroad</button>
            <button className={`filter-btn ${filter === 'travel' ? 'active' : ''}`} onClick={() => setFilter('travel')}>Travel</button>
            <button className={`filter-btn ${filter === 'events' ? 'active' : ''}`} onClick={() => setFilter('events')}>Events</button>
          </div>

          <div className="grid-3">
            {filtered.map((item, i) => (
              <article key={i} className="portfolio-item reveal visible">
                <img src={item.img} alt={item.title} />
                <div className="portfolio-item__overlay">
                  <span className="portfolio-item__tag">{item.tag}</span>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container reveal">
          <div className="cta-banner">
            <h2>Want to Be Our Next Success Story?</h2>
            <p>Join hundreds of students and travellers who trusted EDU Trek.</p>
            <Link to="/register" className="btn btn--white">Get Started</Link>
          </div>
        </div>
      </section>
    </>
  );
}
