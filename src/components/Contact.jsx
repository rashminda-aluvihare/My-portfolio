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

        {/* Contact Grid */}
        <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '0.8fr 1.2fr', gap: '40px' }}>
          
          {/* Left Column: Direct info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div className="glass-panel" style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700 }}>Contact Information</h3>
              
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                Feel free to connect with me via email or through my social media channels. I am active on LinkedIn and always open to discuss development opportunities!
              </p>

              {/* Info Items */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <a
                  href="mailto:rashmindaluvihare@gmail.com"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    textDecoration: 'none',
                    color: 'var(--text-primary)',
                    padding: '12px',
                    borderRadius: '12px',
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid var(--card-border)',
                    transition: 'var(--transition-smooth)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--accent-cyan)';
                    e.currentTarget.style.transform = 'translateX(4px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--card-border)';
                    e.currentTarget.style.transform = 'none';
                  }}
                >
                  <Mail style={{ color: 'var(--accent-cyan)' }} size={20} />
                  <div>
                    <h4 style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 700 }}>EMAIL</h4>
                    <span style={{ fontSize: '0.9rem', wordBreak: 'break-all' }}>rashmindaluvihare@gmail.com</span>
                  </div>
                </a>

                <a
                  href="https://linkedin.com/in/rashminda-aluvihare-98604532b"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    textDecoration: 'none',
                    color: 'var(--text-primary)',
                    padding: '12px',
                    borderRadius: '12px',
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid var(--card-border)',
                    transition: 'var(--transition-smooth)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--accent-blue)';
                    e.currentTarget.style.transform = 'translateX(4px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--card-border)';
                    e.currentTarget.style.transform = 'none';
                  }}
                >
                  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--accent-blue)', display: 'inline-block' }}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  <div>
                    <h4 style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 700 }}>LINKEDIN</h4>
                    <span style={{ fontSize: '0.9rem' }}>in/rashminda-aluvihare</span>
                  </div>
                </a>

                <a
                  href="https://github.com/rashminda-aluvihare"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    textDecoration: 'none',
                    color: 'var(--text-primary)',
                    padding: '12px',
                    borderRadius: '12px',
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid var(--card-border)',
                    transition: 'var(--transition-smooth)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--accent-purple)';
                    e.currentTarget.style.transform = 'translateX(4px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--card-border)';
                    e.currentTarget.style.transform = 'none';
                  }}
                >
                  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--accent-purple)', display: 'inline-block' }}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                  <div>
                    <h4 style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 700 }}>GITHUB</h4>
                    <span style={{ fontSize: '0.9rem' }}>github/rashminda-aluvihare</span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="glass-panel" style={{ padding: '32px' }}>
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
