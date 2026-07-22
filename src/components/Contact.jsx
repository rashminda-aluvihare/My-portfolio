import { useState } from 'react';
import { Mail, Send, Sparkles, CheckCircle2 } from 'lucide-react';

// To receive client messages in your email, get a free Access Key from https://web3forms.com
// Enter your email on their home page, copy the key from your inbox, and paste it below:
const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('idle'); // idle, sending, success, error

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('sending');

    // If key is not configured, fallback to simulation for demo purposes
    if (WEB3FORMS_ACCESS_KEY === "YOUR_ACCESS_KEY_HERE" || !WEB3FORMS_ACCESS_KEY) {
      setTimeout(() => {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      }, 1200);
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          subject: formData.subject || "Contact Form Submission",
          message: formData.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="section" style={{ background: 'var(--bg-secondary)', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800 }} className="gradient-text">
            Get In Touch
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', marginTop: '10px' }}>
            Have a project in mind, want to collaborate, or just say hello?
          </p>
        </div>

        {/* Contact Form Container */}
        <div style={{ maxWidth: '750px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* Direct Email & WhatsApp Contact Options */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }} className="contact-direct-grid">
            {/* Direct Email Card */}
            <a
              href="mailto:rashmindaluvihare@gmail.com"
              className="glass-panel"
              style={{
                padding: '16px 20px',
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                textDecoration: 'none',
                color: 'var(--text-primary)',
                background: 'rgba(155, 81, 224, 0.08)',
                border: '1px solid rgba(155, 81, 224, 0.25)',
                borderRadius: '16px',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(155, 81, 224, 0.16)';
                e.currentTarget.style.borderColor = 'var(--accent-purple)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(155, 81, 224, 0.08)';
                e.currentTarget.style.borderColor = 'rgba(155, 81, 224, 0.25)';
                e.currentTarget.style.transform = 'none';
              }}
            >
              <div
                style={{
                  background: 'rgba(155, 81, 224, 0.15)',
                  padding: '10px',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Mail size={20} style={{ color: 'var(--accent-purple)' }} />
              </div>
              <div style={{ overflow: 'hidden' }}>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 800 }}>Send Direct Email</h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
                  rashmindaluvihare@gmail.com
                </p>
              </div>
            </a>

            {/* Direct WhatsApp Card */}
            <a
              href="https://wa.me/94779743901?text=Hi%20Rashminda,%20I%20saw%20your%20portfolio!"
              target="_blank"
              rel="noreferrer"
              className="glass-panel"
              style={{
                padding: '16px 20px',
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                textDecoration: 'none',
                color: 'var(--text-primary)',
                background: 'rgba(37, 211, 102, 0.08)',
                border: '1px solid rgba(37, 211, 102, 0.25)',
                borderRadius: '16px',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(37, 211, 102, 0.16)';
                e.currentTarget.style.borderColor = '#25D366';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(37, 211, 102, 0.08)';
                e.currentTarget.style.borderColor = 'rgba(37, 211, 102, 0.25)';
                e.currentTarget.style.transform = 'none';
              }}
            >
              <div
                style={{
                  background: 'rgba(37, 211, 102, 0.15)',
                  padding: '10px',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style={{ color: '#25D366' }}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413"/></svg>
              </div>
              <div style={{ overflow: 'hidden' }}>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 800 }}>Chat on WhatsApp</h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Instant Direct Chat</p>
              </div>
            </a>
          </div>

          <div className="glass-panel" style={{ padding: '36px' }}>
            {status === 'success' ? (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  padding: '40px 0',
                  gap: '16px',
                }}
              >
                <div
                  style={{
                    background: 'rgba(0, 242, 254, 0.1)',
                    padding: '16px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    animation: 'float 3s ease-in-out infinite',
                  }}
                >
                  <CheckCircle2 size={48} style={{ color: 'var(--accent-cyan)' }} />
                </div>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 800 }}>Message Sent Successfully!</h3>
                <p style={{ color: 'var(--text-secondary)', maxWidth: '400px' }}>
                  Thank you for reaching out. I've received your message and will respond to you as soon as possible.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="btn-premium secondary"
                  style={{ marginTop: '12px' }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '8px' }}>Send a Message</h3>
                
                {status === 'error' && (
                  <div
                    style={{
                      padding: '12px 16px',
                      background: 'rgba(239, 68, 68, 0.1)',
                      border: '1px solid rgba(239, 68, 68, 0.2)',
                      borderRadius: '8px',
                      color: '#ef4444',
                      fontSize: '0.9rem',
                      fontWeight: 600,
                    }}
                  >
                    Error sending message. Please verify your access key or connection and try again.
                  </div>
                )}
                
                {/* Name */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label htmlFor="name" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    style={{
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid var(--card-border)',
                      color: 'var(--text-primary)',
                      padding: '14px',
                      borderRadius: '8px',
                      outline: 'none',
                      fontSize: '0.95rem',
                      transition: 'var(--transition-smooth)',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--accent-cyan)')}
                    onBlur={(e) => (e.target.style.borderColor = 'var(--card-border)')}
                    placeholder="Enter your name"
                  />
                </div>

                {/* Email */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label htmlFor="email" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    style={{
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid var(--card-border)',
                      color: 'var(--text-primary)',
                      padding: '14px',
                      borderRadius: '8px',
                      outline: 'none',
                      fontSize: '0.95rem',
                      transition: 'var(--transition-smooth)',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--accent-cyan)')}
                    onBlur={(e) => (e.target.style.borderColor = 'var(--card-border)')}
                    placeholder="name@example.com"
                  />
                </div>

                {/* Subject */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label htmlFor="subject" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    style={{
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid var(--card-border)',
                      color: 'var(--text-primary)',
                      padding: '14px',
                      borderRadius: '8px',
                      outline: 'none',
                      fontSize: '0.95rem',
                      transition: 'var(--transition-smooth)',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--accent-cyan)')}
                    onBlur={(e) => (e.target.style.borderColor = 'var(--card-border)')}
                    placeholder="Topic of discussion"
                  />
                </div>

                {/* Message */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label htmlFor="message" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    style={{
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid var(--card-border)',
                      color: 'var(--text-primary)',
                      padding: '14px',
                      borderRadius: '8px',
                      outline: 'none',
                      fontSize: '0.95rem',
                      resize: 'none',
                      fontFamily: 'inherit',
                      transition: 'var(--transition-smooth)',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--accent-cyan)')}
                    onBlur={(e) => (e.target.style.borderColor = 'var(--card-border)')}
                    placeholder="Write your message here..."
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn-premium primary"
                  style={{
                    alignSelf: 'flex-start',
                    marginTop: '8px',
                    width: '100%',
                    justifyContent: 'center',
                  }}
                >
                  {status === 'sending' ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
      <style>{`
        @media (max-width: 850px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
