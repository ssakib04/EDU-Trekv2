import { Link } from 'react-router-dom';
import { useReveal, useCounters, useScrollTop } from '../hooks/useAnimations';

export default function Home() {
  useReveal();
  useCounters();
  useScrollTop();

  return (
    <>
      {/* Hero */}
      <header className="hero hero--home">
        <div className="hero__bg">
          <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&q=80" alt="Travel and study abroad" />
        </div>
        <div className="hero__overlay"></div>
        <div className="container hero__content">
          <div className="hero__badge">
            <span className="hero__badge-dot"></span>
            Trusted Travel & Education Consultancy
          </div>
          <h1 className="hero__title">
            Explore the World.<br />
            <span>Shape Your Future.</span>
          </h1>
          <p className="hero__text">
            From study-abroad counselling to curated travel experiences — EDU Trek Travel guides you every step of the way with expert advice and personalized support.
          </p>
          <div className="hero__actions">
            <Link to="/register" className="btn btn--primary">Start Your Journey</Link>
            <Link to="/about" className="btn btn--white">Learn More</Link>
          </div>
          <div className="hero__stats">
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
          </div>
        </div>
        <div className="hero__float">
          <div className="hero__float-grid">
            <Link to="/register" className="hero__mini-card">
              <img src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=600&q=80" alt="Study in Australia" />
              <h4>Study in Australia</h4>
              <p>Free consultation</p>
            </Link>
            <Link to="/register" className="hero__mini-card">
              <img src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&q=80" alt="Study in UK" />
              <h4>Study in UK</h4>
              <p>Top universities</p>
            </Link>
            <Link to="/register" className="hero__mini-card">
              <img src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=600&q=80" alt="Study in Canada" />
              <h4>Study in Canada</h4>
              <p>Affordable pathways</p>
            </Link>
            <Link to="/about" className="hero__mini-card">
              <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80" alt="Study in Malaysia" />
              <h4>Study in Malaysia</h4>
              <p>Growing destinations</p>
            </Link>
            <Link to="/about" className="hero__mini-card">
              <img src="https://images.unsplash.com/photo-1562774053-701939374585?w=600&q=80" alt="Visa assistance" />
              <h4>Visa Assistance</h4>
              <p>Student & tourist</p>
            </Link>
            <Link to="/portfolio" className="hero__mini-card">
              <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600&q=80" alt="Travel packages" />
              <h4>Travel Packages</h4>
              <p>Curated tours</p>
            </Link>
          </div>
        </div>
      </header>

      {/* Trust bar */}
      <div className="trust-bar">
        <div className="container trust-bar__inner">
          <div className="trust-bar__item"><span className="trust-bar__icon">✓</span> Certified Counsellors</div>
          <div className="trust-bar__item"><span className="trust-bar__icon">✓</span> Free Consultation</div>
          <div className="trust-bar__item"><span className="trust-bar__icon">✓</span> Visa & Documentation</div>
          <div className="trust-bar__item"><span className="trust-bar__icon">✓</span> Premium Travel Packages</div>
        </div>
      </div>

      {/* Services */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-4 reveal">
            <span className="section__label">What We Offer</span>
            <h2 className="section__title">Everything You Need in One Place</h2>
            <p className="section__subtitle" style={{ margin: '0 auto' }}>Expert consultancy for education abroad and premium travel planning — tailored to your dreams.</p>
          </div>
          <div className="grid-4 mt-4">
            <article className="card card--premium reveal">
              <div className="card__body">
                <div className="card__icon card__icon--blue">🎓</div>
                <h3 className="card__title">Study Abroad</h3>
                <p className="card__text">University selection, applications, SOP guidance, and visa support for your international education.</p>
              </div>
            </article>
            <article className="card card--premium reveal">
              <div className="card__body">
                <div className="card__icon card__icon--purple">✈️</div>
                <h3 className="card__title">Travel Packages</h3>
                <p className="card__text">Curated tours and travel experiences — from educational trips to adventure getaways worldwide.</p>
              </div>
            </article>
            <article className="card card--premium reveal">
              <div className="card__body">
                <div className="card__icon card__icon--orange">📋</div>
                <h3 className="card__title">Visa Assistance</h3>
                <p className="card__text">End-to-end documentation support and interview preparation for student and tourist visas.</p>
              </div>
            </article>
            <article className="card card--premium reveal">
              <div className="card__body">
                <div className="card__icon card__icon--green">💬</div>
                <h3 className="card__title">Free Consultation</h3>
                <p className="card__text">Speak with certified counsellors who understand your goals and guide you with confidence.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="section" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
        <div className="container reveal">
          <blockquote className="quote-block">
            "Imagine arriving abroad knowing you've made the right decision. That's the confidence we build from day one."
          </blockquote>
        </div>
      </section>

      {/* Partners */}
      <section className="partners-strip reveal">
        <div className="container">
          <p className="partners-strip__label">Trusted pathways worldwide</p>
          <div className="partners-strip__logos">
            <span>AUSTRALIA</span><span>•</span>
            <span>UNITED KINGDOM</span><span>•</span>
            <span>CANADA</span><span>•</span>
            <span>USA</span><span>•</span>
            <span>EUROPE</span>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section" style={{ background: 'var(--gradient-soft)' }}>
        <div className="container">
          <div className="text-center mb-4 reveal">
            <span className="section__label">How It Works</span>
            <h2 className="section__title">Three Simple Steps to Your Dream</h2>
          </div>
          <div className="steps reveal">
            <div className="step">
              <h3>Discover</h3>
              <p>Explore programs, destinations, and opportunities that match your goals and budget.</p>
            </div>
            <div className="step">
              <h3>Connect</h3>
              <p>Meet our expert counsellors for personalized advice — online or in person.</p>
            </div>
            <div className="step">
              <h3>Apply & Go</h3>
              <p>We handle applications, visas, and travel — so you can focus on your future.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured destinations */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-4 reveal">
            <span className="section__label">Destinations</span>
            <h2 className="section__title">Popular Study & Travel Destinations</h2>
          </div>
          <div className="grid-3">
            <article className="card reveal">
              <div className="card__img">
                <img src="https://images.unsplash.com/photo-1562774053-701939374585?w=600&q=80" alt="Australia" />
              </div>
              <div className="card__body">
                <h3 className="card__title">Australia</h3>
                <p className="card__text">World-class universities and vibrant student life.</p>
              </div>
            </article>
            <article className="card reveal">
              <div className="card__img">
                <img src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&q=80" alt="United Kingdom" />
              </div>
              <div className="card__body">
                <h3 className="card__title">United Kingdom</h3>
                <p className="card__text">Historic institutions and rich cultural heritage.</p>
              </div>
            </article>
            <article className="card reveal">
              <div className="card__img">
                <img src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=600&q=80" alt="Canada" />
              </div>
              <div className="card__body">
                <h3 className="card__title">Canada</h3>
                <p className="card__text">Affordable education and welcoming communities.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container">
          <div className="text-center mb-4 reveal">
            <span className="section__label">Testimonials</span>
            <h2 className="section__title">What Our Clients Say</h2>
          </div>
          <div className="grid-3">
            <blockquote className="testimonial reveal">
              <p className="testimonial__stars">★★★★★</p>
              <p className="testimonial__text">"EDU Trek made my study abroad dream a reality. From university selection to visa — they were with me every step."</p>
              <footer className="testimonial__author">
                <img className="testimonial__avatar" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&q=80" alt="" />
                <div>
                  <p className="testimonial__name">Sarah Ahmed</p>
                  <p className="testimonial__role">Student, Melbourne</p>
                </div>
              </footer>
            </blockquote>
            <blockquote className="testimonial reveal">
              <p className="testimonial__stars">★★★★★</p>
              <p className="testimonial__text">"Our family tour was perfectly organized. Beautiful destinations, smooth logistics, and amazing memories."</p>
              <footer className="testimonial__author">
                <img className="testimonial__avatar" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&q=80" alt="" />
                <div>
                  <p className="testimonial__name">Karim Hassan</p>
                  <p className="testimonial__role">Travel Client</p>
                </div>
              </footer>
            </blockquote>
            <blockquote className="testimonial reveal">
              <p className="testimonial__stars">★★★★★</p>
              <p className="testimonial__text">"Professional, transparent, and genuinely caring. I recommend EDU Trek to anyone planning to go abroad."</p>
              <footer className="testimonial__author">
                <img className="testimonial__avatar" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&q=80" alt="" />
                <div>
                  <p className="testimonial__name">Nadia Rahman</p>
                  <p className="testimonial__role">Student, Toronto</p>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container reveal">
          <div className="cta-banner">
            <h2>Ready to Begin Your Journey?</h2>
            <p>Register today and get expert guidance from our certified counsellors.</p>
            <Link to="/register" className="btn btn--white">Register Now</Link>
          </div>
        </div>
      </section>
    </>
  );
}
