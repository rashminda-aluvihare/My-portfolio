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
        <div style={{ maxWidth: '750px', margin: '0 auto' }}>
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
