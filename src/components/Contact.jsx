import { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import WorldConnectingGlobe from './WorldConnectingGlobe';


const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE";
const FORMSUBMIT_TOKEN = "a72d1214c02e65062ba2c310682b6764";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('idle');
  const [emailError, setEmailError] = useState('');

  const isValidGmail = (val) => {
    return /^[a-zA-Z0-9._%+-]+@gmail\.com$/i.test(val.trim());
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === 'email' && emailError) {
      if (!value.trim() || isValidGmail(value)) {
        setEmailError('');
      }
    }
  };

  const handleEmailBlur = (e) => {
    const val = e.target.value.trim();
    if (val && !isValidGmail(val)) {
      setEmailError('Please enter a valid Gmail address (must end with @gmail.com)');
    } else {
      setEmailError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailVal = formData.email.trim();
    if (!formData.name.trim() || !emailVal || !formData.message.trim()) return;

    if (!isValidGmail(emailVal)) {
      setEmailError('Please enter a valid Gmail address (must end with @gmail.com)');
      return;
    }

    setEmailError('');
    setStatus('sending');

    try {
      // 1. If Web3Forms access key is configured and valid, use Web3Forms
      if (WEB3FORMS_ACCESS_KEY && WEB3FORMS_ACCESS_KEY !== "YOUR_ACCESS_KEY_HERE") {
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
            subject: formData.subject || `Portfolio Message from ${formData.name}`,
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
          return;
        }
      }

      // 2. Direct endpoint: Delivers emails directly to rashmindaluvihare@gmail.com
      const response = await fetch(`https://formsubmit.co/ajax/${FORMSUBMIT_TOKEN}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: `Portfolio Message: ${formData.subject || 'New Contact'} (from ${formData.name})`,
          message: formData.message,
          _template: "table",
          _captcha: "false",
        }),
      });

      const result = await response.json();
      if (result.success === true || result.success === "true") {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      } else if (result.message && result.message.toLowerCase().includes("activation")) {
        setStatus('activation_pending');
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus('error');
    }
  };

  return (
    <section
      id="contact"
      className="section section-light contact-section"
      style={{
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Soft Ambient Light Glows */}
      <div
        className="contact-ambient-glow-1"
        style={{
          position: 'absolute',
          top: '-10%',
          right: '5%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />
      <div
        className="contact-ambient-glow-2"
        style={{
          position: 'absolute',
          bottom: '-10%',
          left: '5%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <div style={{ marginBottom: '38px' }}>
          <h2 style={{ fontSize: 'clamp(1.9rem, 4vw, 3.2rem)', fontWeight: 900, color: 'var(--color-text-primary)', letterSpacing: '-0.03em', lineHeight: 1.15, margin: 0 }}>
            Let's Build Something Together
          </h2>
        </div>

        {/* 2-Column Clean Light Layout */}
        <div className="contact-main-grid">
          {/* Left Column: Crisp Light Form Card */}
          <div className="contact-card-white">
            {status === 'activation_pending' ? (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  padding: '45px 20px',
                  gap: '16px',
                }}
              >
                <div
                  style={{
                    background: '#FEF3C7',
                    padding: '18px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1.5px solid rgba(217, 119, 6, 0.3)',
                    boxShadow: '0 8px 24px rgba(217, 119, 6, 0.15)',
                  }}
                >
                  <Send size={44} style={{ color: '#D97706' }} />
                </div>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--color-text-primary)', margin: 0 }}>
                  Activation Email Sent to Gmail!
                </h3>
                <p style={{ color: 'var(--color-text-secondary)', maxWidth: '420px', fontSize: '0.94rem', lineHeight: 1.6 }}>
                  FormSubmit needs a one-time activation. Please open your Gmail (<strong>rashmindaluvihare@gmail.com</strong>) or Spam folder, and click the <strong>"Activate Form"</strong> link in the latest email.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="btn-primary"
                  style={{ marginTop: '10px' }}
                >
                  Back to Form
                </button>
              </div>
            ) : status === 'success' ? (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  padding: '50px 20px',
                  gap: '16px',
                }}
              >
                <div
                  style={{
                    background: 'rgba(20, 184, 166, 0.12)',
                    padding: '18px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1.5px solid rgba(20, 184, 166, 0.25)',
                    boxShadow: '0 8px 24px rgba(20, 184, 166, 0.2)',
                  }}
                >
                  <CheckCircle2 size={46} style={{ color: '#14B8A6' }} />
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-text-primary)', margin: 0 }}>Message Sent Successfully!</h3>
                <p style={{ color: 'var(--color-text-secondary)', maxWidth: '420px', fontSize: '0.96rem', lineHeight: 1.6 }}>
                  Thank you for reaching out, Rashminda has received your message and will respond promptly.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="btn-primary"
                  style={{ marginTop: '12px' }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--color-text-primary)', letterSpacing: '-0.02em', margin: 0 }}>
                    Send a Message
                  </h3>
                </div>

                {status === 'error' && (
                  <div
                    style={{
                      padding: '12px 16px',
                      background: '#FEF2F2',
                      border: '1px solid #FECACA',
                      borderRadius: '10px',
                      color: '#DC2626',
                      fontSize: '0.9rem',
                      fontWeight: 600,
                    }}
                  >
                    Error sending message. Please reach out directly via email or WhatsApp.
                  </div>
                )}

                {/* Name */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label htmlFor="name" style={{ fontSize: '0.8rem', color: 'var(--color-text-primary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="contact-input-light"
                    placeholder="Kasun Perera"
                  />
                </div>

                {/* Email */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label htmlFor="email" style={{ fontSize: '0.8rem', color: 'var(--color-text-primary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    pattern="[a-zA-Z0-9._%+\-]+@gmail\.com"
                    title="Please enter a valid Gmail address (must end with @gmail.com)"
                    value={formData.email}
                    onChange={handleInputChange}
                    onBlur={handleEmailBlur}
                    className={`contact-input-light ${emailError ? 'contact-input-error' : ''}`}
                    placeholder="kasun@gmail.com"
                  />
                  {emailError && (
                    <span className="contact-error-msg">
                      {emailError}
                    </span>
                  )}
                </div>

                {/* Subject */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label htmlFor="subject" style={{ fontSize: '0.8rem', color: 'var(--color-text-primary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="contact-input-light"
                    placeholder="Project inquiry or discussion"
                  />
                </div>

                {/* Message */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label htmlFor="message" style={{ fontSize: '0.8rem', color: 'var(--color-text-primary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="contact-input-light"
                    placeholder="Write your message here..."
                    style={{ resize: 'vertical' }}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="contact-submit-btn"
                >
                  <Send size={18} />
                  <span>{status === 'sending' ? 'Sending Message...' : 'Send Message'}</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Interactive 3D Real Earth Globe */}
          <div
            className="contact-globe-column"
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
            }}
          >
            <WorldConnectingGlobe />
          </div>
        </div>
      </div>

      <style>{`
        .contact-section {
          padding: 95px 0;
        }

        .contact-ambient-glow-1 {
          background: radial-gradient(circle, rgba(219, 234, 254, 0.45) 0%, rgba(255, 255, 255, 0) 70%);
        }
        [data-theme="dark"] .contact-ambient-glow-1 {
          background: radial-gradient(circle, rgba(20, 184, 166, 0.16) 0%, rgba(11, 20, 25, 0) 70%);
        }
        .contact-ambient-glow-2 {
          background: radial-gradient(circle, rgba(237, 233, 254, 0.45) 0%, rgba(255, 255, 255, 0) 70%);
        }
        [data-theme="dark"] .contact-ambient-glow-2 {
          background: radial-gradient(circle, rgba(15, 118, 110, 0.16) 0%, rgba(11, 20, 25, 0) 70%);
        }

        .contact-main-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 36px;
          align-items: start;
        }

        .contact-card-white {
          background: #FFFFFF;
          border: 1px solid rgba(226, 232, 240, 0.95);
          border-radius: 20px;
          padding: 38px;
          box-shadow: 0 8px 30px rgba(15, 23, 42, 0.04), 0 1px 3px rgba(15, 23, 42, 0.02);
        }

        [data-theme="dark"] .contact-card-white {
          background: #111C22;
          border-color: #1E3A3A;
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.45);
        }

        [data-theme="dark"] .contact-card-white label {
          color: #CBD5E1 !important;
        }

        .direct-channels-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          width: 100%;
        }

        .contact-input-light {
          width: 100%;
          box-sizing: border-box;
          background: #F8FAFC;
          border: 1.5px solid #E2E8F0;
          color: #0F172A;
          padding: 13px 16px;
          border-radius: 12px;
          outline: none;
          font-size: 1rem;
          font-family: inherit;
          transition: border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
        }

        [data-theme="dark"] .contact-input-light {
          background: #0B1419;
          border-color: #1E3A3A;
          color: #F8FAFC;
        }

        .contact-input-light:focus {
          background: #FFFFFF;
          border-color: #14B8A6;
          box-shadow: 0 0 0 3.5px rgba(20, 184, 166, 0.15);
        }

        [data-theme="dark"] .contact-input-light:focus {
          background: #111C22;
          border-color: #14B8A6;
          box-shadow: 0 0 0 3.5px rgba(20, 184, 166, 0.25);
        }

        .contact-input-error,
        .contact-input-error:focus {
          border-color: #EF4444 !important;
          box-shadow: 0 0 0 3.5px rgba(239, 68, 68, 0.2) !important;
        }

        .contact-error-msg {
          color: #EF4444;
          font-size: 0.8rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 5px;
          animation: fadeIn 0.2s ease-in-out;
        }

        .contact-submit-btn {
          width: 100%;
          padding: 15px;
          font-size: 0.98rem;
          font-weight: 700;
          font-family: var(--font-display);
          color: #FFFFFF;
          background: linear-gradient(135deg, #14B8A6 0%, #0F766E 100%);
          border: none;
          border-radius: 12px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          box-shadow: 0 8px 24px rgba(20, 184, 166, 0.35);
          transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
          margin-top: 4px;
        }

        .contact-submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(20, 184, 166, 0.48);
        }

        .channel-card-link {
          background: #FFFFFF;
          border: 1px solid rgba(226, 232, 240, 0.95);
          border-radius: 16px;
          padding: 16px 18px;
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          color: #0F172A;
          box-shadow: 0 4px 18px rgba(15, 23, 42, 0.03);
          transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
          position: relative;
          min-width: 0;
        }

        [data-theme="dark"] .channel-card-link {
          background: #111C22;
          border-color: #1E3A3A;
          color: #F8FAFC;
          box-shadow: 0 4px 18px rgba(0, 0, 0, 0.3);
        }

        [data-theme="dark"] .channel-val {
          color: #F8FAFC !important;
        }

        [data-theme="dark"] .channel-label {
          color: #94A3B8 !important;
        }

        [data-theme="dark"] .box-blue {
          background: rgba(20, 184, 166, 0.18) !important;
          color: #14B8A6 !important;
        }

        [data-theme="dark"] .box-emerald {
          background: rgba(45, 212, 191, 0.18) !important;
          color: #2DD4BF !important;
        }

        .channel-card-link:hover {
          transform: translateY(-3px);
          border-color: #14B8A6;
          box-shadow: 0 10px 25px rgba(20, 184, 166, 0.15);
        }

        .channel-card-link:hover .channel-arrow {
          transform: translateX(3px);
          color: #14B8A6;
        }

        .channel-icon-box {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .box-blue { background: rgba(20, 184, 166, 0.1); color: #14B8A6; }
        .box-emerald { background: rgba(15, 118, 110, 0.1); color: #0F766E; }

        .channel-label {
          display: block;
          font-family: var(--font-display);
          font-size: 0.74rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          color: #64748B;
        }

        .channel-val {
          margin: 2px 0 0 0;
          font-size: 0.86rem;
          font-weight: 700;
          color: #0F172A;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .channel-arrow {
          margin-left: auto;
          color: #94A3B8;
          transition: all 0.2s ease;
          flex-shrink: 0;
        }

        @media (max-width: 960px) {
          .contact-section {
            padding: 65px 0;
          }
          .contact-main-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
        }

        @media (max-width: 640px) {
          .contact-section {
            padding: 50px 0;
          }
          .contact-card-white {
            padding: 22px 16px;
            border-radius: 16px;
          }
          .direct-channels-grid {
            grid-template-columns: 1fr;
            gap: 10px;
          }
          .channel-card-link {
            padding: 14px 14px;
          }
          .channel-icon-box {
            width: 38px;
            height: 38px;
          }
          .channel-val {
            font-size: 0.82rem;
          }
        }
      `}</style>
    </section>
  );
}
