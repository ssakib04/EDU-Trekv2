import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useReveal, useScrollTop } from '../hooks/useAnimations';

export default function About() {
  useReveal();
  useScrollTop();

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
            <span className="section__label">About Us</span>
            <h1 className="section__title" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }}>
              About Edu Trek Travel
            </h1>
            <p className="section__subtitle">Your trusted partner in turning global dreams into reality</p>
          </motion.div>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="card" style={{ overflow: 'hidden' }}>
                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80" alt="Team collaboration" style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="section__label">Who We Are</span>
              <h2 className="section__title">Trust is the Foundation</h2>
              <p className="mb-3" style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                At Edu Trek Travel, trust is the foundation of everything we do. With years of experience and a strong record of successful student placements and visa processing, we have earned the confidence of students and families who rely on us to turn their international dreams into reality.
              </p>
              <p className="mb-3" style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                We understand that studying abroad is one of the biggest decisions in a student's life. Our mission goes beyond consultancy — we become a trusted partner throughout the entire journey.
              </p>
              <Link to="/register" className="btn btn--primary">Start Your Journey →</Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <motion.div
            className="text-center mb-4"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="section__label">Our Core Values</span>
            <h2 className="section__title">What Drives Us</h2>
          </motion.div>

          <div className="grid-3">
            {[
              { icon: '🛡️', title: 'Trust & Transparency', desc: 'Honesty and clarity in every interaction. We keep you informed at every step of your journey.' },
              { icon: '🤝', title: 'Dedicated Partnership', desc: "We're not just processors — we're your trusted partners committed to your success." },
              { icon: '✨', title: 'Ethical Service', desc: 'Commitment to integrity and responsible guidance for genuine outcomes.' },
            ].map((value, i) => (
              <motion.article
                key={i}
                className="card"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
              >
                <div className="card__body">
                  <div className="card__icon">{value.icon}</div>
                  <h3 className="card__title">{value.title}</h3>
                  <p className="card__text">{value.desc}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <motion.div
            className="text-center mb-4"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="section__label">Leadership</span>
            <h2 className="section__title">Meet the Founders</h2>
            <p className="section__subtitle">The people behind EDU Trek Travel — committed to transparency, trust, and your success.</p>
          </motion.div>

          <div className="grid-3">
            {[
              { name: 'Abir Reza', role: 'Co-Founder', bio: 'Study abroad strategy, admissions guidance, and ethical student support. Passionate about turning global dreams into real outcomes.', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80' },
              { name: 'Kaji Sadman Sakib', role: 'Founder', bio: 'Dedicated to making global opportunities accessible for every student. Leading EDU Trek with vision and commitment to excellence.', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80' },
              { name: 'Team Lead', role: 'Co-Founder', bio: 'Committed to ethical guidance and world-class consultancy service. Ensuring every client receives personalized attention.', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80' },
            ].map((founder, i) => (
              <motion.article
                key={i}
                className="card"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="card__img">
                  <img src={founder.img} alt={founder.name} />
                </div>
                <div className="card__body">
                  <h3 className="card__title">{founder.name}</h3>
                  <p style={{ color: 'var(--accent-cyan)', fontSize: '0.9rem', marginBottom: '1rem', fontWeight: 600 }}>{founder.role}</p>
                  <p className="card__text">{founder.bio}</p>
                </div>
              </motion.article>
            ))}
          </div>
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
            <h2>Your Dream • Our Guidance • A Future Without Borders</h2>
            <p>Let Edu Trek Travel be your trusted partner in creating pathways to global opportunities.</p>
            <Link to="/register" className="btn btn--primary">Start Your Journey Today →</Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
