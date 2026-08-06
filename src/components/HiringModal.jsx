import { useState } from 'react';
import { X, Check, Copy, Send, Sparkles, Briefcase, Code, Landmark, Mail, Phone, Calendar } from 'lucide-react';

export default function HiringModal({ isOpen, onClose }) {
  const [selectedRole, setSelectedRole] = useState('ba');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: 'Hi Rashminda, we are interested in discussing an opportunity for a Business Analyst / IT Project Management role with you.',
  });
  const [copied, setCopied] = useState(false);
  const [sentStatus, setSentStatus] = useState(false);

  if (!isOpen) return null;

  const rolesList = [
    {
      id: 'ba',
      title: 'Business Analyst / IT PM',
      icon: Briefcase,
      color: 'var(--accent-cyan)',
      defaultMsg: 'Hi Rashminda, we are interested in discussing an opportunity for a Business Analyst / IT Project Management role with you.',
    },
    {
      id: 'dev',
      title: 'Full-Stack Software Dev',
      icon: Code,
      color: 'var(--accent-purple)',
      defaultMsg: 'Hi Rashminda, we reviewed your portfolio and would like to invite you for a Full-Stack Software Developer interview.',
    },
    {
      id: 'fintech',
      title: 'FinTech Solutions',
      icon: Landmark,
      color: '#38ef7d',
      defaultMsg: 'Hi Rashminda, we are looking for a developer with Banking & Finance domain knowledge for a FinTech project.',
    },
  ];

  const handleRoleSelect = (role) => {
    setSelectedRole(role.id);
    setFormData((prev) => ({
      ...prev,
      message: role.defaultMsg,
    }));
  };

  const copyContactDetails = () => {
    const text = `Rashminda Aluvihare\nEmail: rashmindaluvihare@gmail.com\nPhone/WhatsApp: +94 77 974 3901\nLinkedIn: https://linkedin.com/in/rashminda-aluvihare-98604532b`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSentStatus(true);
    setTimeout(() => {
      setSentStatus(false);
      onClose();
    }, 2000);
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 2000,
        background: 'rgba(0, 0, 0, 0.75)',
        backdropFilter: 'blur(12px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        animation: 'fadeIn 0.25s ease-out',
      }}
      onClick={onClose}
    >
      <div
        className="glass-panel"
        style={{
          width: '100%',
          maxWidth: '650px',
          background: 'var(--card-bg)',
          border: '1px solid var(--card-border)',
          borderRadius: '24px',
          padding: '32px',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.5), 0 0 35px rgba(0, 242, 254, 0.15)',
          position: 'relative',
          overflow: 'hidden',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '4px 12px',
                borderRadius: '20px',
                background: 'rgba(56, 239, 125, 0.12)',
                border: '1px solid rgba(56, 239, 125, 0.3)',
                color: '#38ef7d',
                fontSize: '0.78rem',
                fontWeight: 700,
                marginBottom: '10px',
              }}
            >
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#38ef7d', animation: 'pulse 1.5s infinite' }}></span>
              <span>Open to Opportunities (2026)</span>
            </div>

            <h3 style={{ fontSize: '1.6rem', fontWeight: 800, margin: 0, color: 'var(--text-primary)' }}>
              Quick Hiring & Collaboration Inquiry
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', margin: '4px 0 0 0' }}>
              Select your hiring intent or send a direct quick message to Rashminda.
            </p>
          </div>

          <button
            onClick={onClose}
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid var(--card-border)',
              color: 'var(--text-secondary)',
              borderRadius: '50%',
              width: '34px',
              height: '34px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Role Intent Selection Pills */}
        <div style={{ display: 'flex', gap: '10px', marginBottom: '24px', flexWrap: 'wrap' }}>
          {rolesList.map((r) => {
            const IconComp = r.icon;
            const isSelected = selectedRole === r.id;
            return (
              <button
                key={r.id}
                type="button"
                onClick={() => handleRoleSelect(r)}
                style={{
                  flex: 1,
                  minWidth: '150px',
                  padding: '12px 14px',
                  borderRadius: '14px',
                  background: isSelected ? 'rgba(0, 242, 254, 0.15)' : 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid ' + (isSelected ? r.color : 'var(--card-border)'),
                  color: isSelected ? 'var(--text-primary)' : 'var(--text-secondary)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '0.82rem',
                  fontWeight: isSelected ? 700 : 500,
                  transition: 'all 0.2s',
                }}
              >
                <IconComp size={16} style={{ color: r.color }} />
                <span>{r.title}</span>
              </button>
            );
          })}
        </div>

        {/* Form Body */}
        {sentStatus ? (
          <div style={{ textAlign: 'center', padding: '30px 0' }}>
            <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(56, 239, 125, 0.15)', color: '#38ef7d', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 14px' }}>
              <Check size={28} />
            </div>
            <h4 style={{ fontSize: '1.3rem', fontWeight: 800 }}>Inquiry Received!</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              Thank you for reaching out. Rashminda will respond to your email promptly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }} className="hiring-form-grid">
              <input
                type="text"
                required
                placeholder="Your Name *"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                style={{
                  padding: '12px 14px',
                  borderRadius: '10px',
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--card-border)',
                  color: 'var(--text-primary)',
                  outline: 'none',
                  fontSize: '0.88rem',
                }}
              />
              <input
                type="email"
                required
                placeholder="Work Email *"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                style={{
                  padding: '12px 14px',
                  borderRadius: '10px',
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--card-border)',
                  color: 'var(--text-primary)',
                  outline: 'none',
                  fontSize: '0.88rem',
                }}
              />
            </div>

            <textarea
              rows={3}
              required
              placeholder="Message details..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              style={{
                padding: '12px 14px',
                borderRadius: '10px',
                background: 'var(--bg-secondary)',
                border: '1px solid var(--card-border)',
                color: 'var(--text-primary)',
                outline: 'none',
                fontSize: '0.88rem',
                resize: 'none',
                fontFamily: 'inherit',
              }}
            />

            <div style={{ display: 'flex', gap: '10px', marginTop: '6px' }}>
              <button
                type="submit"
                className="btn-premium primary"
                style={{ flex: 1, justifyContent: 'center' }}
              >
                <span>Send Quick Inquiry</span>
                <Send size={16} />
              </button>

              <button
                type="button"
                onClick={copyContactDetails}
                className="btn-premium secondary"
                style={{ padding: '0 16px' }}
                title="Copy Rashminda's Contact Info"
              >
                {copied ? <Check size={16} style={{ color: '#38ef7d' }} /> : <Copy size={16} />}
                <span>{copied ? 'Copied!' : 'Copy Info'}</span>
              </button>
            </div>
          </form>
        )}

        {/* Quick Contact Footer Bar */}
        <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid var(--card-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Mail size={14} style={{ color: 'var(--accent-purple)' }} /> rashmindaluvihare@gmail.com
          </span>
          <a
            href="https://wa.me/94779743901"
            target="_blank"
            rel="noreferrer"
            style={{ color: '#25D366', textDecoration: 'none', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}
          >
            <Phone size={14} /> WhatsApp Chat ↗
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .hiring-form-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
