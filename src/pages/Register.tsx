import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useReveal, useScrollTop } from '../hooks/useAnimations';
import { EDU_TREK_CONFIG } from '../config';

export default function Register() {
  useReveal();
  useScrollTop();

  const [paymentConfirmed, setPaymentConfirmed] = useState(false);
  const [paymentRef, setPaymentRef] = useState('');
  const [currentStep, setCurrentStep] = useState(0);
  const [statusMsg, setStatusMsg] = useState('');
  const [statusType, setStatusType] = useState<'pending' | 'success' | 'error' | ''>('');
  const [submitted, setSubmitted] = useState(false);

  const handlePayment = async () => {
    const form = document.getElementById('registration-form') as HTMLFormElement;
    if (!form?.checkValidity()) {
      form?.reportValidity();
      return;
    }
    setCurrentStep(1);
    setStatusType('pending');
    setStatusMsg('Demo mode: Simulating bKash payment…');

    await new Promise(r => setTimeout(r, 2200));
    const ref = `DEMO-BK${Date.now().toString(36).toUpperCase()}`;
    setPaymentRef(ref);
    setPaymentConfirmed(true);
    setCurrentStep(2);
    setStatusType('success');
    setStatusMsg(`Payment confirmed! Reference: ${ref}`);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!paymentConfirmed) {
      setStatusType('error');
      setStatusMsg('Please complete bKash payment before submitting.');
      return;
    }
    setCurrentStep(3);
    setSubmitted(true);
    setStatusType('success');
    setStatusMsg('Registration submitted successfully! We will contact you shortly.');
  };

  const stepClass = (i: number) => {
    if (i < currentStep) return 'payment-step done';
    if (i === currentStep) return 'payment-step active';
    return 'payment-step';
  };

  return (
    <>
      <header className="page-header">
        <div className="container">
          <h1 className="page-header__title">Register</h1>
          <p className="page-header__breadcrumb"><Link to="/">Home</Link> / Register</p>
        </div>
      </header>

      <section className="section">
        <div className="container form-section">
          <div className="text-center mb-4 reveal">
            <span className="section__label">Get Started</span>
            <h2 className="section__title">Begin Your Journey</h2>
            <p className="section__subtitle" style={{ margin: '0 auto' }}>Fill in your details, complete payment via bKash, and our team will reach out within 24 hours.</p>
          </div>

          {submitted && (
            <div className="form-card reveal visible mb-3" style={{ textAlign: 'center', border: '2px solid var(--success)' }}>
              <h3 style={{ color: 'var(--success)', marginBottom: '0.5rem' }}>Registration Complete!</h3>
              <p style={{ color: 'var(--gray)' }}>Thank you for registering. Our counsellors will contact you soon.</p>
            </div>
          )}

          <div className="form-card reveal">
            <form id="registration-form" onSubmit={handleSubmit} noValidate>
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="full_name">Full Name <span className="required">*</span></label>
                  <input type="text" id="full_name" name="full_name" required placeholder="Your full name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email <span className="required">*</span></label>
                  <input type="email" id="email" name="email" required placeholder="you@email.com" />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone (bKash number) <span className="required">*</span></label>
                  <input type="tel" id="phone" name="phone" required placeholder="01XXXXXXXXX" pattern="01[0-9]{9}" />
                </div>
                <div className="form-group">
                  <label htmlFor="service_type">Service Type <span className="required">*</span></label>
                  <select id="service_type" name="service_type" required>
                    <option value="">Select a service</option>
                    <option value="study_abroad">Study Abroad Consultancy</option>
                    <option value="travel">Travel Package</option>
                    <option value="visa">Visa Assistance</option>
                    <option value="both">Study + Travel</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="destination">Preferred Destination</label>
                  <input type="text" id="destination" name="destination" placeholder="e.g. Australia, UK, Canada" />
                </div>
                <div className="form-group">
                  <label htmlFor="education_level">Education Level</label>
                  <select id="education_level" name="education_level">
                    <option value="">Select level</option>
                    <option value="hsc">HSC / A-Level</option>
                    <option value="bachelor">Bachelor's</option>
                    <option value="master">Master's</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-group form-group--full">
                  <label htmlFor="message">Tell Us About Your Goals</label>
                  <textarea id="message" name="message" placeholder="Share your plans, preferred intake, budget range, or any questions…"></textarea>
                </div>
              </div>

              {/* Payment */}
              <div className="payment-panel">
                <div className="payment-panel__header">
                  <svg className="payment-panel__logo" viewBox="0 0 80 32" xmlns="http://www.w3.org/2000/svg" aria-label="bKash">
                    <rect width="80" height="32" rx="6" fill="#e2136e"/>
                    <text x="40" y="21" textAnchor="middle" fill="white" fontFamily="system-ui" fontWeight="700" fontSize="14">bKash</text>
                  </svg>
                  <div>
                    <h3>Registration Fee</h3>
                    <p style={{ fontSize: '0.9rem', color: 'var(--gray)' }}>Pay securely to confirm your registration</p>
                  </div>
                </div>

                <div className="payment-steps">
                  <div className={stepClass(0)}>1. Fill Form</div>
                  <div className={stepClass(1)}>2. Pay bKash</div>
                  <div className={stepClass(2)}>3. Confirm</div>
                  <div className={stepClass(3)}>4. Done</div>
                </div>

                <p className="payment-panel__amount">৳{EDU_TREK_CONFIG.registrationFee}</p>

                {statusMsg && (
                  <div className={`payment-status visible payment-status--${statusType}`} role="status">
                    {statusMsg}
                  </div>
                )}

                <button type="button" className="btn btn--bkash" style={{ width: '100%', marginBottom: '1rem' }}
                  onClick={handlePayment} disabled={paymentConfirmed}>
                  {paymentConfirmed ? 'Payment Complete ✓' : 'Pay with bKash'}
                </button>

                <button type="submit" className="btn btn--primary" style={{ width: '100%' }} disabled={!paymentConfirmed || submitted}>
                  Submit Registration
                </button>

                <p className="hint" style={{ marginTop: '1rem', textAlign: 'center', fontSize: '0.8rem', color: 'var(--gray)' }}>
                  Complete bKash payment first, then submit. Demo mode is active until merchant credentials are added.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
