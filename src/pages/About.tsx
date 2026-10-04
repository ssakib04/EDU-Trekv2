import { Link } from 'react-router-dom';
import { useReveal, useScrollTop } from '../hooks/useAnimations';

export default function About() {
  useReveal();
  useScrollTop();

  return (
    <>
      <header className="page-header">
        <div className="container">
          <h1 className="page-header__title">About Edu Trek Travel</h1>
          <p className="page-header__breadcrumb"><Link to="/">Home</Link> / About</p>
        </div>
      </header>

      <section className="section">
        <div className="container about-split">
          <div className="about-split__img reveal">
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80" alt="Team collaboration" />
            <div className="about-split__badge">
              <strong>10+</strong>
              <span>Years Experience</span>
            </div>
          </div>
          <div className="reveal">
            <span className="section__label">Who We Are</span>
            <h2 className="section__title">Trust is the Foundation</h2>
            <p className="mb-2" style={{ color: 'var(--gray)' }}>At Edu Trek Travel, trust is the foundation of everything we do. With years of experience and a strong record of successful student placements and visa processing, we have earned the confidence of students and families who rely on us to turn their international dreams into reality.</p>
            <p className="mb-2" style={{ color: 'var(--gray)' }}>We understand that studying abroad is one of the biggest decisions in a student's life. Our mission goes beyond consultancy — we become a trusted partner throughout the entire journey. From choosing the right destination and institution to admission support, student visa processing, tourist visas, and air ticketing services, our experienced team provides professional guidance with honesty, transparency, and dedication.</p>
            <p className="mb-3" style={{ color: 'var(--gray)' }}>Specializing in study opportunities across English-speaking countries, Malaysia, and Europe, we have successfully helped many students begin their educational and career journeys abroad. Our proven experience, personalized support, and commitment to ethical service have made us a reliable name for genuine guidance and successful outcomes.</p>
            <Link to="/register" className="btn btn--primary">Start Your Journey</Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--gradient-soft)' }}>
        <div className="container">
          <div className="text-center mb-4 reveal">
            <span className="section__label">Our Core Values</span>
            <h2 className="section__title">What Drives Us</h2>
          </div>
          <div className="grid-3">
            <article className="card reveal">
              <div className="card__body">
                <div className="card__icon card__icon--blue">🛡️</div>
                <h3 className="card__title">Trust & Transparency</h3>
                <p className="card__text">Honesty and clarity in every interaction. We keep you informed at every step of your journey.</p>
              </div>
            </article>
            <article className="card reveal">
              <div className="card__body">
                <div className="card__icon card__icon--purple">🤝</div>
                <h3 className="card__title">Dedicated Partnership</h3>
                <p className="card__text">We're not just processors — we're your trusted partners committed to your success.</p>
              </div>
            </article>
            <article className="card reveal">
              <div className="card__body">
                <div className="card__icon card__icon--orange">✨</div>
                <h3 className="card__title">Ethical Service</h3>
                <p className="card__text">Commitment to integrity and responsible guidance for genuine outcomes.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section founders-section">
        <div className="container">
          <div className="text-center mb-4 reveal">
            <span className="section__label">Leadership</span>
            <h2 className="section__title">Meet the Founders</h2>
            <p className="section__subtitle" style={{ margin: '0 auto' }}>The people behind EDU Trek Travel — committed to transparency, trust, and your success.</p>
          </div>
          <div className="founders-grid reveal">
            <article className="founder-card">
              <div className="founder-card__img-wrap">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80" alt="Abir Reza — Co-Founder" />
                <div className="founder-card__overlay"></div>
                <span className="founder-card__role-tag">Co-Founder</span>
              </div>
              <div className="founder-card__body">
                <h3 className="founder-card__name">Abir Reza</h3>
                <p className="founder-card__bio">Study abroad strategy, admissions guidance, and ethical student support. Passionate about turning global dreams into real outcomes.</p>
              </div>
            </article>
            <article className="founder-card">
              <div className="founder-card__img-wrap">
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80" alt="Founder — EDU Trek Travel" />
                <div className="founder-card__overlay"></div>
                <span className="founder-card__role-tag">Founder</span>
              </div>
              <div className="founder-card__body">
                <h3 className="founder-card__name">Kaji Sadman Sakib</h3>
                <p className="founder-card__bio">Dedicated to making global opportunities accessible for every student. Leading EDU Trek with vision and commitment to excellence.</p>
              </div>
            </article>
            <article className="founder-card">
              <div className="founder-card__img-wrap">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80" alt="Co-Founder — EDU Trek Travel" />
                <div className="founder-card__overlay"></div>
                <span className="founder-card__role-tag">Co-Founder</span>
              </div>
              <div className="founder-card__body">
                <h3 className="founder-card__name">Team Lead</h3>
                <p className="founder-card__bio">Committed to ethical guidance and world-class consultancy service. Ensuring every client receives personalized attention.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="text-center mb-4 reveal">
            <span className="section__label">Our Services</span>
            <h2 className="section__title">Comprehensive Support</h2>
            <p className="section__subtitle" style={{ margin: '0 auto' }}>From admission support to travel arrangements — complete guidance for your global journey.</p>
          </div>
          <div className="grid-3">
            <article className="card reveal">
              <div className="card__body">
                <div className="card__icon card__icon--blue">🎓</div>
                <h3 className="card__title">Education Consultancy</h3>
                <p className="card__text">Admission support and guidance for English-speaking countries, Malaysia, and Europe.</p>
              </div>
            </article>
            <article className="card reveal">
              <div className="card__body">
                <div className="card__icon card__icon--purple">📋</div>
                <h3 className="card__title">Visa & Documentation</h3>
                <p className="card__text">Student visa and tourist visa processing with professional guidance and support.</p>
              </div>
            </article>
            <article className="card reveal">
              <div className="card__body">
                <div className="card__icon card__icon--orange">✈️</div>
                <h3 className="card__title">Travel Services</h3>
                <p className="card__text">Air ticketing and travel arrangement services to complete your journey.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container reveal">
          <div className="cta-banner">
            <h2>Your Dream • Our Guidance • A Future Without Borders</h2>
            <p>Let Edu Trek Travel be your trusted partner in creating pathways to global opportunities.</p>
            <Link to="/register" className="btn btn--white">Start Your Journey Today</Link>
          </div>
        </div>
      </section>
    </>
  );
}
