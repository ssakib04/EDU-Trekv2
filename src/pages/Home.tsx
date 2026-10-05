import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useReveal, useCounters, useScrollTop } from '../hooks/useAnimations';

export default function Home() {
  useReveal();
  useCounters();
  useScrollTop();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] }
    }
  };

  return (
    <>
      {/* Hero Section */}
      <header className="hero hero--home">
        <div className="hero__bg">
          <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&q=80" alt="Travel and study abroad" />
        </div>
        <div className="container hero__content">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="hero__badge" variants={itemVariants}>
              <span className="hero__badge-dot"></span>
              Trusted Travel & Education Consultancy
            </motion.div>

            <motion.h1 className="hero__title" variants={itemVariants}>
              Explore the World.
              <br />
              <span className="hero__title-gradient">Shape Your Future.</span>
            </motion.h1>

            <motion.p className="hero__text" variants={itemVariants}>
              From study-abroad counselling to curated travel experiences — EDU Trek Travel guides you every step of the way with expert advice and personalized support.
            </motion.p>

            <motion.div className="hero__actions" variants={itemVariants}>
              <Link to="/register" className="btn btn--primary">Start Your Journey →</Link>
              <Link to="/about" className="btn btn--secondary">Learn More</Link>
            </motion.div>

            <motion.div className="hero__stats" variants={itemVariants}>
              <div className="hero__stat">
                <strong data-count="500" data-suffix="+">0</strong>
                <span>Students Guided</span>
              </div>
              <div className="hero__stat">
                <strong data-count="15" data-suffix="+">0</strong>
                <span>Countries</span>
              </div>
              <div className="hero__stat">
                <strong data-count="98" data-suffix="%">0</strong>
                <span>Success Rate</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </header>

      {/* Services Section */}
      <section className="section">
        <div className="container">
          <motion.div
            className="text-center mb-4"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="section__label">What We Offer</span>
            <h2 className="section__title">Everything You Need in One Place</h2>
            <p className="section__subtitle">Expert consultancy for education abroad and premium travel planning — tailored to your dreams.</p>
          </motion.div>

          <div className="grid-4">
            {[
              { icon: '🎓', title: 'Study Abroad', desc: 'University selection, applications, SOP guidance, and visa support for your international education.', color: 'var(--accent-purple)' },
              { icon: '✈️', title: 'Travel Packages', desc: 'Curated tours and travel experiences — from educational trips to adventure getaways worldwide.', color: 'var(--accent-pink)' },
              { icon: '📋', title: 'Visa Assistance', desc: 'End-to-end documentation support and interview preparation for student and tourist visas.', color: 'var(--accent-cyan)' },
              { icon: '💬', title: 'Free Consultation', desc: 'Speak with certified counsellors who understand your goals and guide you with confidence.', color: 'var(--accent-orange)' },
            ].map((service, i) => (
              <motion.article
                key={i}
                className="card card--premium"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
              >
                <div className="card__body">
                  <div className="card__icon" style={{ background: service.color }}>
                    {service.icon}
                  </div>
                  <h3 className="card__title">{service.title}</h3>
                  <p className="card__text">{service.desc}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <motion.div
            className="text-center mb-4"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="section__label">How It Works</span>
            <h2 className="section__title">Three Simple Steps to Your Dream</h2>
          </motion.div>

          <div className="steps">
            {[
              { title: 'Discover', desc: 'Explore programs, destinations, and opportunities that match your goals and budget.' },
              { title: 'Connect', desc: 'Meet our expert counsellors for personalized advice — online or in person.' },
              { title: 'Apply & Go', desc: 'We handle applications, visas, and travel — so you can focus on your future.' },
            ].map((step, i) => (
              <motion.div
                key={i}
                className="step"
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="section">
        <div className="container">
          <motion.div
            className="text-center mb-4"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="section__label">Destinations</span>
            <h2 className="section__title">Popular Study & Travel Destinations</h2>
          </motion.div>

          <div className="grid-3">
            {[
              { img: 'https://images.unsplash.com/photo-1562774053-701939374585?w=600&q=80', title: 'Australia', desc: 'World-class universities and vibrant student life.' },
              { img: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&q=80', title: 'United Kingdom', desc: 'Historic institutions and rich cultural heritage.' },
              { img: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=600&q=80', title: 'Canada', desc: 'Affordable education and welcoming communities.' },
            ].map((dest, i) => (
              <motion.article
                key={i}
                className="card"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
              >
                <div className="card__img">
                  <img src={dest.img} alt={dest.title} />
                </div>
                <div className="card__body">
                  <h3 className="card__title">{dest.title}</h3>
                  <p className="card__text">{dest.desc}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <motion.div
            className="text-center mb-4"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="section__label">Testimonials</span>
            <h2 className="section__title">What Our Clients Say</h2>
          </motion.div>

          <div className="grid-3">
            {[
              { text: '"EDU Trek made my study abroad dream a reality. From university selection to visa — they were with me every step."', name: 'Sarah Ahmed', role: 'Student, Melbourne', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&q=80' },
              { text: '"Our family tour was perfectly organized. Beautiful destinations, smooth logistics, and amazing memories."', name: 'Karim Hassan', role: 'Travel Client', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&q=80' },
              { text: '"Professional, transparent, and genuinely caring. I recommend EDU Trek to anyone planning to go abroad."', name: 'Nadia Rahman', role: 'Student, Toronto', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&q=80' },
            ].map((testimonial, i) => (
              <motion.blockquote
                key={i}
                className="testimonial"
                initial={{ opacity: 0, y: 60, rotate: -2 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ scale: 1.05, rotate: 1 }}
              >
                <p className="testimonial__stars">★★★★★</p>
                <p className="testimonial__text">{testimonial.text}</p>
                <footer className="testimonial__author">
                  <img className="testimonial__avatar" src={testimonial.avatar} alt="" />
                  <div>
                    <p className="testimonial__name">{testimonial.name}</p>
                    <p className="testimonial__role">{testimonial.role}</p>
                  </div>
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <motion.div
            className="cta-banner"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2>Ready to Begin Your Journey?</h2>
            <p>Register today and get expert guidance from our certified counsellors.</p>
            <Link to="/register" className="btn btn--primary">Register Now →</Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
