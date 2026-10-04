import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useReveal, useScrollTop } from '../hooks/useAnimations';
import { EDU_TREK_CONFIG } from '../config';

export default function Contact() {
  useReveal();
  useScrollTop();

  const [status, setStatus] = useState('');
  const [statusColor, setStatusColor] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    if (!EDU_TREK_CONFIG.web3forms?.enabled || EDU_TREK_CONFIG.web3forms.accessKey === 'YOUR_WEB3FORMS_ACCESS_KEY') {
      setStatus('Configure Web3Forms to enable contact emails.');
      setStatusColor('#92400e');
      return;
    }

    setStatus('Sending…');
    setStatusColor('var(--gray)');
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
        setStatusColor('var(--success)');
        form.reset();
      } else throw new Error();
    } catch {
      setStatus('Failed to send. Please try again or email us directly.');
      setStatusColor('#ef4444');
    }
  };

  return (
    <>
      <header className="page-header">
        <div className="container">
          <h1 className="page-header__title">Contact Us</h1>
          <p className="page-header__breadcrumb"><Link to="/">Home</Link> / Contact</p>
        </div>
      </header>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-split">
            <div className="reveal">
              <span className="section__label">Get in Touch</span>
              <h2 className="section__title">We'd Love to Hear From You</h2>
              <p className="mb-3">Have questions about studying abroad or planning your next trip? Reach out — our team responds within one business day.</p>

              <div className="card" style={{ marginBottom: '1rem' }}>
                <div className="card__body" style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '1.5rem' }}>📍</span>
                  <div>
                    <h3 className="card__title">Office</h3>
                    <p className="card__text">Chattogram, Bangladesh<br /><em>(Full address coming soon)</em></p>
                  </div>
                </div>
              </div>
              <div className="card" style={{ marginBottom: '1rem' }}>
                <div className="card__body" style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '1.5rem' }}>📧</span>
                  <div>
                    <h3 className="card__title">Email</h3>
                    <p className="card__text"><a href="mailto:info@edutrektravel.com">info@edutrektravel.com</a></p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card__body" style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '1.5rem' }}>📱</span>
                  <div>
                    <h3 className="card__title">Phone / WhatsApp</h3>
                    <p className="card__text"><a href="tel:+8801805513942">+8801805513942</a></p>
                  </div>
                </div>
              </div>
            </div>

            <div className="form-card reveal">
              <h3 className="mb-3">Send a Message</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="contact_name">Name <span className="required">*</span></label>
                  <input type="text" id="contact_name" name="name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="contact_email">Email <span className="required">*</span></label>
                  <input type="email" id="contact_email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="contact_subject">Subject</label>
                  <input type="text" id="contact_subject" name="subject" />
                </div>
                <div className="form-group">
                  <label htmlFor="contact_message">Message <span className="required">*</span></label>
                  <textarea id="contact_message" name="message" required></textarea>
                </div>
                <button type="submit" className="btn btn--primary" style={{ width: '100%' }}>Send Message</button>
                {status && <p className="hint mt-4" style={{ textAlign: 'center', color: statusColor }}>{status}</p>}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
