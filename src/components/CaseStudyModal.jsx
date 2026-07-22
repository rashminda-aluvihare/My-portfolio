import { useEffect } from 'react';
import { X, AlertTriangle, Layers, Trophy, ExternalLink, Calendar, CheckCircle2, Sparkles } from 'lucide-react';

export default function CaseStudyModal({ caseStudy, onClose, onOpenDemo }) {
  if (!caseStudy) return null;

  // Handle ESC key press to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    // Disable background page scroll when modal is open
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  return (
    <div
      className="case-study-overlay"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: 'rgba(3, 6, 14, 0.88)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 999999, // Highest z-index above floating navbar
        padding: '16px',
        animation: 'modalFadeIn 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
      onClick={onClose}
    >
      {/* Modal Dialog Box */}
      <div
        className="glass-panel case-study-modal-box"
        style={{
          width: '100%',
          maxWidth: '880px',
          height: '88vh',
          maxHeight: '820px',
          background: 'var(--card-bg, rgba(10, 14, 24, 0.95))',
          border: '1px solid var(--card-border, rgba(255, 255, 255, 0.12))',
          borderRadius: '24px',
          boxShadow: '0 30px 70px -15px rgba(0, 0, 0, 0.7), 0 0 40px rgba(0, 242, 254, 0.15)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          animation: 'modalSlideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          position: 'relative',
        }}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
      >
        {/* ================= FIXED HEADER (Non-Scrolling) ================= */}
        <div
          style={{
            padding: '20px 28px',
            background: 'var(--nav-bg, rgba(8, 11, 20, 0.95))',
            borderBottom: '1px solid var(--card-border, rgba(255, 255, 255, 0.1))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            flexShrink: 0,
            zIndex: 20,
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', minWidth: 0 }}>
            {/* Category & Date badges */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
              <span
                style={{
                  fontSize: '0.72rem',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  color: 'var(--accent-cyan)',
                  background: 'rgba(0, 242, 254, 0.12)',
                  border: '1px solid rgba(0, 242, 254, 0.3)',
                  padding: '4px 12px',
                  borderRadius: '20px',
                }}
              >
                {caseStudy.category}
              </span>
              <span
                style={{
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  color: 'var(--text-muted)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                }}
              >
                <Calendar size={13} />
                {caseStudy.date}
              </span>
            </div>

            {/* Title */}
            <h2
              style={{
                fontSize: '1.6rem',
                fontWeight: 800,
                color: 'var(--text-primary)',
                lineHeight: 1.2,
                margin: 0,
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {caseStudy.title}
            </h2>
          </div>

          {/* Close (X) Button */}
          <button
            onClick={onClose}
            aria-label="Close Case Study Modal"
            style={{
              background: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid var(--card-border, rgba(255, 255, 255, 0.15))',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.25s ease',
              flexShrink: 0,
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(239, 68, 68, 0.25)';
              e.currentTarget.style.color = '#ff4d4d';
              e.currentTarget.style.borderColor = '#ff4d4d';
              e.currentTarget.style.transform = 'rotate(90deg) scale(1.08)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
              e.currentTarget.style.color = 'var(--text-primary)';
              e.currentTarget.style.borderColor = 'var(--card-border, rgba(255, 255, 255, 0.15))';
              e.currentTarget.style.transform = 'none';
            }}
          >
            <X size={22} />
          </button>
        </div>

        {/* ================= SCROLLABLE CONTENT BODY ================= */}
        <div
          className="case-study-body"
          style={{
            padding: '28px',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            flex: 1,
          }}
        >
          {/* Overview Subtitle & Banner Image */}
          <div>
            <p
              style={{
                fontSize: '1.05rem',
                fontWeight: 500,
                color: 'var(--text-secondary)',
                marginBottom: '16px',
                lineHeight: 1.6,
              }}
            >
              {caseStudy.subtitle}
            </p>

            {caseStudy.image && (
              <div
                style={{
                  borderRadius: '16px',
                  overflow: 'hidden',
                  maxHeight: '260px',
                  position: 'relative',
                  border: '1px solid var(--card-border, rgba(255, 255, 255, 0.1))',
                  boxShadow: '0 12px 30px rgba(0, 0, 0, 0.4)',
                }}
              >
                <img
                  src={caseStudy.image}
                  alt={caseStudy.title}
                  style={{
                    width: '100%',
                    height: '260px',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
              </div>
            )}
          </div>

          {/* SECTION 1: PROBLEM STATEMENT */}
          <div
            style={{
              background: 'rgba(239, 68, 68, 0.06)',
              border: '1px solid rgba(239, 68, 68, 0.25)',
              borderRadius: '18px',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div
                style={{
                  background: 'rgba(239, 68, 68, 0.16)',
                  color: '#ff6b6b',
                  padding: '10px',
                  borderRadius: '12px',
                  display: 'flex',
                  boxShadow: '0 0 15px rgba(239, 68, 68, 0.2)',
                }}
              >
                <AlertTriangle size={22} />
              </div>
              <div>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#ff6b6b' }}>
                  01. Challenge & Problem
                </span>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-primary)', marginTop: '2px' }}>
                  {caseStudy.problem.title}
                </h3>
              </div>
            </div>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.96rem', lineHeight: 1.65 }}>
              {caseStudy.problem.description}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '6px' }}>
              {caseStudy.problem.points.map((pt, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: '#ff6b6b',
                      marginTop: '9px',
                      flexShrink: 0,
                    }}
                  />
                  <span style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--text-primary)', lineHeight: 1.5 }}>
                    {pt}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* SECTION 2: DEVELOPMENT PROCESS & ARCHITECTURE */}
          <div
            style={{
              background: 'rgba(155, 81, 224, 0.06)',
              border: '1px solid rgba(155, 81, 224, 0.25)',
              borderRadius: '18px',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div
                style={{
                  background: 'rgba(155, 81, 224, 0.16)',
                  color: '#c084fc',
                  padding: '10px',
                  borderRadius: '12px',
                  display: 'flex',
                  boxShadow: '0 0 15px rgba(155, 81, 224, 0.2)',
                }}
              >
                <Layers size={22} />
              </div>
              <div>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#c084fc' }}>
                  02. Architecture & Solution
                </span>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-primary)', marginTop: '2px' }}>
                  {caseStudy.process.title}
                </h3>
              </div>
            </div>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.96rem', lineHeight: 1.65 }}>
              {caseStudy.process.description}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '6px' }}>
              {caseStudy.process.points.map((pt, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <CheckCircle2 size={18} style={{ color: '#c084fc', flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--text-primary)', lineHeight: 1.5 }}>
                    {pt}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* SECTION 3: KEY OUTCOMES & IMPACT */}
          <div
            style={{
              background: 'rgba(0, 242, 254, 0.06)',
              border: '1px solid rgba(0, 242, 254, 0.25)',
              borderRadius: '18px',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div
                style={{
                  background: 'rgba(0, 242, 254, 0.16)',
                  color: 'var(--accent-cyan)',
                  padding: '10px',
                  borderRadius: '12px',
                  display: 'flex',
                  boxShadow: '0 0 15px rgba(0, 242, 254, 0.2)',
                }}
              >
                <Trophy size={22} />
              </div>
              <div>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--accent-cyan)' }}>
                  03. Results & Impact
                </span>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-primary)', marginTop: '2px' }}>
                  {caseStudy.outcome.title}
                </h3>
              </div>
            </div>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.96rem', lineHeight: 1.65 }}>
              {caseStudy.outcome.description}
            </p>

            {/* Quantitative Metrics Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
                gap: '14px',
                marginTop: '6px',
              }}
            >
              {caseStudy.outcome.metrics.map((m, idx) => (
                <div
                  key={idx}
                  style={{
                    background: 'rgba(0, 0, 0, 0.3)',
                    border: '1px solid var(--card-border, rgba(255, 255, 255, 0.08))',
                    borderRadius: '14px',
                    padding: '16px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                  }}
                >
                  <span
                    style={{
                      fontSize: '1.45rem',
                      fontWeight: 800,
                      color: 'var(--accent-cyan)',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {m.value}
                  </span>
                  <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '4px' }}>
                    {m.label}
                  </span>
                  <span style={{ fontSize: '0.74rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                    {m.subtext}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Badges */}
          <div style={{ marginTop: '4px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <Sparkles size={16} style={{ color: 'var(--accent-cyan)' }} />
              <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-primary)', margin: 0 }}>
                Technologies & Architecture Stack
              </h4>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {caseStudy.tags.map((t, idx) => (
                <span
                  key={idx}
                  style={{
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid var(--card-border, rgba(255, 255, 255, 0.12))',
                    padding: '5px 14px',
                    borderRadius: '10px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ================= FIXED FOOTER (Non-Scrolling) ================= */}
        <div
          style={{
            padding: '18px 28px',
            background: 'var(--nav-bg, rgba(8, 11, 20, 0.95))',
            borderTop: '1px solid var(--card-border, rgba(255, 255, 255, 0.1))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '14px',
            flexWrap: 'wrap',
            flexShrink: 0,
            zIndex: 20,
          }}
        >
          {/* GitHub Repository Link */}
          <a
            href={caseStudy.github}
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '11px 20px',
              borderRadius: '12px',
              background: 'rgba(255, 255, 255, 0.07)',
              border: '1px solid var(--card-border, rgba(255, 255, 255, 0.15))',
              color: 'var(--text-primary)',
              fontSize: '0.95rem',
              fontWeight: 700,
              textDecoration: 'none',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.07)';
              e.currentTarget.style.borderColor = 'var(--card-border, rgba(255, 255, 255, 0.15))';
            }}
          >
            <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
            <span>GitHub Code</span>
          </a>

          {/* Action buttons */}
          <div style={{ display: 'flex', gap: '12px', marginLeft: 'auto', alignItems: 'center' }}>
            {caseStudy.demo && (
              <button
                onClick={() => {
                  onClose();
                  if (caseStudy.demo.startsWith('http')) {
                    window.open(caseStudy.demo, '_blank');
                  } else if (onOpenDemo) {
                    onOpenDemo(caseStudy.demo);
                  }
                }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '11px 22px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, var(--accent-cyan), #0070f3)',
                  border: 'none',
                  color: '#fff',
                  fontSize: '0.92rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  boxShadow: '0 4px 20px rgba(0, 242, 254, 0.35)',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 25px rgba(0, 242, 254, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 242, 254, 0.35)';
                }}
              >
                <span>{caseStudy.demo.startsWith('http') ? 'Launch Live App' : 'Run Simulator'}</span>
                <ExternalLink size={16} />
              </button>
            )}

            <button
              onClick={onClose}
              style={{
                padding: '11px 20px',
                borderRadius: '12px',
                background: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid var(--card-border, rgba(255, 255, 255, 0.12))',
                color: 'var(--text-secondary)',
                fontSize: '0.92rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--text-primary)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-secondary)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)';
              }}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
