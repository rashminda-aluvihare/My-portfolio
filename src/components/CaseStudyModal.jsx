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
        background: 'rgba(0, 0, 0, 0.75)', // Solid dimmed backdrop overlay without blur
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 999999, // Highest z-index above navbar
        padding: '16px',
        animation: 'modalFadeIn 0.2s ease-out',
      }}
      onClick={onClose}
    >
      {/* Modal Dialog Box (Solid Opaque Container) */}
      <div
        className="case-study-modal-box"
        style={{
          width: '100%',
          maxWidth: '880px',
          height: '88vh',
          maxHeight: '820px',
          background: 'var(--bg-primary)', // Solid background matching active theme
          border: '1px solid var(--card-border)',
          borderRadius: '24px',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.5)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          animation: 'modalSlideUp 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
          position: 'relative',
        }}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
      >
        {/* ================= FIXED HEADER (Non-Scrolling & Solid) ================= */}
        <div
          style={{
            padding: '20px 28px',
            background: 'var(--bg-secondary)', // Solid secondary header background
            borderBottom: '1px solid var(--card-border)',
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
                  background: 'rgba(0, 242, 254, 0.1)',
                  border: '1px solid var(--accent-cyan)',
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
              background: 'var(--bg-primary)',
              border: '1px solid var(--card-border)',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s ease',
              flexShrink: 0,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#ef4444';
              e.currentTarget.style.color = '#ffffff';
              e.currentTarget.style.borderColor = '#ef4444';
              e.currentTarget.style.transform = 'rotate(90deg)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--bg-primary)';
              e.currentTarget.style.color = 'var(--text-primary)';
              e.currentTarget.style.borderColor = 'var(--card-border)';
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
            background: 'var(--bg-primary)',
          }}
        >
          {/* Subtitle & Image Banner */}
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
                  border: '1px solid var(--card-border)',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
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
              background: 'var(--bg-secondary)',
              border: '1px solid rgba(239, 68, 68, 0.4)',
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
                  background: 'rgba(239, 68, 68, 0.15)',
                  color: '#ef4444',
                  padding: '10px',
                  borderRadius: '12px',
                  display: 'flex',
                }}
              >
                <AlertTriangle size={22} />
              </div>
              <div>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#ef4444' }}>
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
                      width: '7px',
                      height: '7px',
                      borderRadius: '50%',
                      background: '#ef4444',
                      marginTop: '9px',
                      flexShrink: 0,
                    }}
                  />
                  <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)', lineHeight: 1.5 }}>
                    {pt}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* SECTION 2: KEY OUTCOMES & IMPACT */}
          <div
            style={{
              background: 'var(--bg-secondary)',
              border: '1px solid rgba(0, 242, 254, 0.4)',
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
                  background: 'rgba(0, 242, 254, 0.15)',
                  color: 'var(--accent-cyan)',
                  padding: '10px',
                  borderRadius: '12px',
                  display: 'flex',
                }}
              >
                <Trophy size={22} />
              </div>
              <div>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--accent-cyan)' }}>
                  02. Results & Impact
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
                    background: 'var(--bg-primary)',
                    border: '1px solid var(--card-border)',
                    borderRadius: '14px',
                    padding: '16px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
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
                    background: 'var(--bg-secondary)',
                    border: '1px solid var(--card-border)',
                    padding: '6px 14px',
                    borderRadius: '10px',
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ================= FIXED FOOTER (Non-Scrolling & Solid) ================= */}
        <div
          style={{
            padding: '18px 28px',
            background: 'var(--bg-secondary)', // Solid footer background
            borderTop: '1px solid var(--card-border)',
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
              background: 'var(--bg-primary)',
              border: '1px solid var(--card-border)',
              color: 'var(--text-primary)',
              fontSize: '0.95rem',
              fontWeight: 700,
              textDecoration: 'none',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--accent-cyan)';
              e.currentTarget.style.color = 'var(--accent-cyan)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--card-border)';
              e.currentTarget.style.color = 'var(--text-primary)';
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
                  background: 'var(--accent-cyan)',
                  border: 'none',
                  color: '#000000',
                  fontSize: '0.92rem',
                  fontWeight: 800,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'none';
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
                background: 'var(--bg-primary)',
                border: '1px solid var(--card-border)',
                color: 'var(--text-secondary)',
                fontSize: '0.92rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--text-primary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-secondary)';
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
