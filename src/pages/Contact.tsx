import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useScrollTop } from '../hooks/useAnimations';
import { EDU_TREK_CONFIG } from '../config';

export default function Contact() {
  useScrollTop();

  const [status, setStatus] = useState('');
  const [statusColor, setStatusColor] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    if (!EDU_TREK_CONFIG.web3forms?.enabled || EDU_TREK_CONFIG.web3forms.accessKey === 'YOUR_WEB3FORMS_ACCESS_KEY') {
      setStatus('Configure Web3Forms to enable contact emails.');
      setStatusColor('var(--accent-gold)');
      return;
    }

    setStatus('Sending…');
    setStatusColor('var(--text-secondary)');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: EDU_TREK_CONFIG.web3forms.accessKey,
          subject: `[EDU Trek Contact] ${(data.subject as string) || 'New message'}`,
          ...data,
        }),
      });
      const json = await res.json();
      if (json.success) {
        setStatus("Message sent! We'll get back to you soon.");
        setStatusColor('var(--accent-cyan)');
        form.reset();
      } else throw new Error();
    } catch {
      setStatus('Failed to send. Please try again or email us directly.');
      setStatusColor('var(--accent-pink)');
    }
  };

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
            <span className="section__label">Get in Touch</span>
            <h1 className="section__title" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }}>
              Contact Us
            </h1>
            <p className="section__subtitle">We'd love to hear from you. Reach out anytime.</p>
          </motion.div>
        </div>
      </header>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="grid-2" style={{ gap: '4rem' }}>
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="section__title" style={{ fontSize: '2.5rem' }}>Let's Connect</h2>
              <p className="mb-4" style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                Have questions about studying abroad or planning your next trip? Reach out — our team responds within one business day.
              </p>

              {[
                { icon: '📍', title: 'Office', desc: 'Chattogram, Bangladesh' },
                { icon: '📧', title: 'Email', desc: 'info@edutrektravel.com', link: 'mailto:info@edutrektravel.com' },
                { icon: '📱', title: 'Phone / WhatsApp', desc: '+8801805513942', link: 'tel:+8801805513942' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="card mb-3"
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="card__body" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                    <div className="card__icon" style={{ margin: 0, fontSize: '2rem' }}>{item.icon}</div>
                    <div>
                      <h3 className="card__title" style={{ marginBottom: '0.5rem' }}>{item.title}</h3>
                      {item.link ? (
                        <a href={item.link} style={{ color: 'var(--accent-cyan)' }}>{item.desc}</a>
                      ) : (
                        <p className="card__text">{item.desc}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="form-card"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', fontFamily: 'var(--font-display)' }}>Send a Message</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="contact_name">Name <span className="required">*</span></label>
                  <input type="text" id="contact_name" name="name" required placeholder="Your name" />
                </div>
                <div className="form-group">
                  <label htmlFor="contact_email">Email <span className="required">*</span></label>
                  <input type="email" id="contact_email" name="email" required placeholder="you@email.com" />
                </div>
                <div className="form-group">
                  <label htmlFor="contact_subject">Subject</label>
                  <input type="text" id="contact_subject" name="subject" placeholder="What's this about?" />
                </div>
                <div className="form-group">
                  <label htmlFor="contact_message">Message <span className="required">*</span></label>
                  <textarea id="contact_message" name="message" required placeholder="Tell us what's on your mind…"></textarea>
                </div>
                <button type="submit" className="btn btn--primary" style={{ width: '100%' }}>Send Message →</button>
                {status && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ marginTop: '1.5rem', textAlign: 'center', color: statusColor }}
                  >
                    {status}
                  </motion.p>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
