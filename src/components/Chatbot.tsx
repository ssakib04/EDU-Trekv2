import { useState, useRef, useEffect } from 'react';
import { EDU_TREK_CONFIG } from '../config';

const SUGGESTIONS = [
  'How do I register?',
  'How do I contact you?',
  'Where is your address?',
  'What services do you offer?',
  'Where is the portfolio?',
  'How does payment work?',
];

const CONTACT = {
  city: 'Chattogram, Bangladesh',
  email: 'info@edutrektravel.com',
  phoneDisplay: '+8801805513942',
  phoneTel: '+8801805513942',
  whatsappWa: 'https://wa.me/8801805513942',
};

function routeAnswer(qRaw: string): string {
  const q = String(qRaw || '').toLowerCase().replace(/[^\w\s?]/g, ' ').replace(/\s+/g, ' ').trim();
  const go = (label: string, href: string) => `You can find this on the <a href="${href}">${label}</a> page.`;

  if (q.includes('contact') || q.includes('email') || q.includes('phone') || q.includes('whatsapp')) {
    return `You can reach us anytime:<br><strong>Email:</strong> <a href="mailto:${CONTACT.email}">${CONTACT.email}</a><br><strong>Phone/WhatsApp:</strong> <a href="tel:${CONTACT.phoneTel}">${CONTACT.phoneDisplay}</a><br><strong>Location:</strong> ${CONTACT.city}<br><a href="${CONTACT.whatsappWa}" target="_blank" rel="noopener">Open WhatsApp</a> or ${go('Contact', '/contact')}`;
  }
  if (q.includes('address') || q.includes('location') || q.includes('office')) {
    return `Our office is in <strong>${CONTACT.city}</strong>. ${go('Contact', '/contact')}`;
  }
  if (q.includes('register') || q.includes('apply') || q.includes('appointment') || q.includes('consultation')) {
    return `To register:<br>1) Open <a href="/register">Register</a><br>2) Fill the form<br>3) Complete payment (bKash demo is currently enabled)<br>4) Submit — we'll contact you within 24 hours.`;
  }
  if (q.includes('payment') || q.includes('bkash') || q.includes('b-kash')) {
    const fee = EDU_TREK_CONFIG.registrationFee;
    return `Payment is handled via <strong>bKash</strong>.<br><strong>Fee:</strong> ৳${fee}<br>For now the site uses <em>demo mode</em> until merchant credentials are enabled.<br>${go('Register', '/register')}`;
  }
  if (q.includes('portfolio')) return go('Portfolio', '/portfolio');
  if (q.includes('about')) return go('About', '/about');
  if (q.includes('home')) return go('Home', '/');
  if (q.includes('service') || q.includes('offer') || q.includes('visa') || q.includes('travel') || q.includes('study')) {
    return `We offer:<ul><li><strong>Study Abroad Consultancy</strong> (admission & guidance)</li><li><strong>Visa & Documentation</strong> (student & tourist)</li><li><strong>Travel Services</strong> (packages & ticketing)</li><li><strong>Free Consultation</strong></li></ul>${go('About', '/about')}`;
  }
  return `I can help you navigate the site. Try one of these:<ul>${SUGGESTIONS.slice(0, 5).map((s) => `<li>${s}</li>`).join('')}</ul>Or ask in your own words (example: "Where do I register?").`;
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<{ who: 'bot' | 'user'; html: string }[]>([
    { who: 'bot', html: 'Hi! I can help you find anything on this site. Try a quick question below.' },
  ]);
  const messagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    setMessages((prev) => [...prev, { who: 'user', html: text }]);
    setMessages((prev) => [...prev, { who: 'bot', html: routeAnswer(text) }]);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = e.currentTarget.querySelector('input');
    if (input && input.value.trim()) {
      sendMessage(input.value.trim());
      input.value = '';
    }
  };

  return (
    <div className={`chatbot ${open ? 'open' : ''}`}>
      <button className="chatbot__fab" onClick={() => setOpen(!open)} aria-label="Open chat help">
        💬
      </button>
      <div className="chatbot__panel" role="dialog" aria-label="Site help chatbot">
        <div className="chatbot__header">
          <div>
            <div className="chatbot__title">EDU Trek Help</div>
            <div className="chatbot__subtitle">Ask anything about using this website</div>
          </div>
          <button className="chatbot__close" onClick={() => setOpen(false)} aria-label="Close chat">×</button>
        </div>
        <div className="chatbot__body">
          <div className="chatbot__messages" ref={messagesRef}>
            {messages.map((msg, i) => (
              <div key={i} className={`chatbot__msg chatbot__msg--${msg.who}`} dangerouslySetInnerHTML={{ __html: msg.html }} />
            ))}
          </div>
          <div className="chatbot__suggestions">
            {SUGGESTIONS.map((s) => (
              <button key={s} className="chatbot__chip" onClick={() => sendMessage(s)}>{s}</button>
            ))}
          </div>
        </div>
        <form className="chatbot__composer" onSubmit={handleSubmit}>
          <input className="chatbot__input" type="text" placeholder="Type a question…" autoComplete="off" />
          <button className="chatbot__send" type="submit">→</button>
        </form>
      </div>
    </div>
  );
}
