import { useEffect } from 'react';
import { X, AlertCircle, Cpu, Award, ExternalLink, Calendar, CheckCircle2, ArrowRight } from 'lucide-react';

export default function CaseStudyModal({ caseStudy, onClose, onOpenDemo }) {
  if (!caseStudy) return null;

  // Handle ESC key press to close modal easily
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    // Prevent body scroll when modal is open
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
        right: 0,
        bottom: 0,
        background: 'rgba(5, 7, 14, 0.82)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10000,
        padding: '20px',
        animation: 'modalFadeIn 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
      onClick={onClose}
    >
      <div
        className="glass-panel case-study-container"
        style={{
          width: '100%',
          maxWidth: '850px',
          maxHeight: '90vh',
          background: 'var(--card-bg, rgba(12, 16, 26, 0.95))',
          border: '1px solid var(--card-border, rgba(255, 255, 255, 0.1))',
          borderRadius: '24px',
          boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.6), 0 0 30px rgba(0, 242, 254, 0.12)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          animation: 'modalSlideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          position: 'relative',
        }}
        onClick={(e) => e.stopPropagation()} // Prevent close on modal body click
      >
        {/* Modal Sticky Header */}
        <div
          style={{
            padding: '20px 28px',
            borderBottom: '1px solid var(--card-border, rgba(255, 255, 255, 0.08))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: 'rgba(10, 13, 22, 0.6)',
            backdropFilter: 'blur(10px)',
            position: 'sticky',
            top: 0,
            zIndex: 10,
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span
                style={{
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  color: 'var(--accent-cyan)',
                  background: 'rgba(0, 242, 254, 0.1)',
                  border: '1px solid rgba(0, 242, 254, 0.25)',
                  padding: '3px 10px',
                  borderRadius: '6px',
                }}
              >
                {caseStudy.category}
              </span>
              <span
                style={{
                  fontSize: '0.78rem',
                  color: 'var(--text-muted)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                }}
              >
                <Calendar size={13} />
                {caseStudy.date}
              </span>
            </div>
            <h2
              style={{
                fontSize: '1.5rem',
                fontWeight: 800,
                color: 'var(--text-primary)',
                lineHeight: 1.2,
                marginTop: '4px',
              }}
            >
              {caseStudy.title}
            </h2>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close Case Study"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid var(--card-border, rgba(255, 255, 255, 0.1))',
              color: 'var(--text-secondary)',
              cursor: 'pointer',
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s ease',
              flexShrink: 0,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(239, 68, 68, 0.18)';
              e.currentTarget.style.color = '#ef4444';
              e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.3)';
              e.currentTarget.style.transform = 'rotate(90deg)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
              e.currentTarget.style.color = 'var(--text-secondary)';
              e.currentTarget.style.borderColor = 'var(--card-border, rgba(255, 255, 255, 0.1))';
              e.currentTarget.style.transform = 'none';
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Scrollable Body */}
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
          {/* Subtitle & Image Banner */}
          <div>
            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '16px', lineHeight: 1.5 }}>
              {caseStudy.subtitle}
            </p>
            {caseStudy.image && (
              <div
                style={{
                  borderRadius: '16px',
                  overflow: 'hidden',
                  maxHeight: '220px',
                  position: 'relative',
                  border: '1px solid var(--card-border, rgba(255, 255, 255, 0.08))',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)',
                }}
              >
                <img
                  src={caseStudy.image}
                  alt={caseStudy.title}
                  style={{
                    width: '100%',
                    height: '220px',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, transparent 50%, rgba(5, 7, 14, 0.7) 100%)',
                  }}
                />
              </div>
            )}
          </div>

          {/* 1. PROBLEM STATEMENT CARD */}
          <div
            style={{
              background: 'rgba(239, 68, 68, 0.04)',
              border: '1px solid rgba(239, 68, 68, 0.18)',
              borderRadius: '16px',
              padding: '20px 24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div
                style={{
                  background: 'rgba(239, 68, 68, 0.12)',
                  color: '#f87171',
                  padding: '8px',
                  borderRadius: '10px',
                  display: 'flex',
                }}
              >
                <AlertCircle size={20} />
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#f87171' }}>
                {caseStudy.problem.title}
              </h3>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.94rem', lineHeight: 1.6 }}>
              {caseStudy.problem.description}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '4px' }}>
              {caseStudy.problem.points.map((pt, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <span style={{ color: '#f87171', fontSize: '1.1rem', lineHeight: 1 }}>•</span>
                  <span style={{ fontSize: '0.88rem', color: 'var(--text-primary)' }}>{pt}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 2. PROCESS & SOLUTION CARD */}
          <div
            style={{
              background: 'rgba(155, 81, 224, 0.04)',
              border: '1px solid rgba(155, 81, 224, 0.18)',
              borderRadius: '16px',
              padding: '20px 24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div
                style={{
                  background: 'rgba(155, 81, 224, 0.12)',
                  color: '#c084fc',
                  padding: '8px',
                  borderRadius: '10px',
                  display: 'flex',
                }}
              >
                <Cpu size={20} />
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#c084fc' }}>
                {caseStudy.process.title}
              </h3>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.94rem', lineHeight: 1.6 }}>
              {caseStudy.process.description}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '4px' }}>
              {caseStudy.process.points.map((pt, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <CheckCircle2 size={16} style={{ color: '#c084fc', flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ fontSize: '0.88rem', color: 'var(--text-primary)' }}>{pt}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 3. OUTCOME & IMPACT CARD */}
          <div
            style={{
              background: 'rgba(0, 242, 254, 0.04)',
              border: '1px solid rgba(0, 242, 254, 0.18)',
              borderRadius: '16px',
              padding: '20px 24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div
                style={{
                  background: 'rgba(0, 242, 254, 0.12)',
                  color: 'var(--accent-cyan)',
                  padding: '8px',
                  borderRadius: '10px',
                  display: 'flex',
                }}
              >
                <Award size={20} />
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--accent-cyan)' }}>
                {caseStudy.outcome.title}
              </h3>
            </div>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.94rem', lineHeight: 1.6 }}>
              {caseStudy.outcome.description}
            </p>

            {/* Key Metrics Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
                gap: '12px',
                marginTop: '4px',
              }}
            >
              {caseStudy.outcome.metrics.map((m, idx) => (
                <div
                  key={idx}
                  style={{
                    background: 'rgba(0, 0, 0, 0.25)',
                    border: '1px solid var(--card-border, rgba(255, 255, 255, 0.06))',
                    borderRadius: '12px',
                    padding: '14px 16px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                  }}
                >
                  <span style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--accent-cyan)' }}>
                    {m.value}
                  </span>
                  <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '2px' }}>
                    {m.label}
                  </span>
                  <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                    {m.subtext}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Tags */}
          <div>
            <h4 style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '10px' }}>
              Technologies & Tools Used
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {caseStudy.tags.map((t, idx) => (
                <span
                  key={idx}
                  style={{
                    fontSize: '0.78rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid var(--card-border, rgba(255, 255, 255, 0.08))',
                    padding: '4px 12px',
                    borderRadius: '8px',
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div
          style={{
            padding: '16px 28px',
            background: 'rgba(10, 13, 22, 0.7)',
            borderTop: '1px solid var(--card-border, rgba(255, 255, 255, 0.08))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px',
            flexWrap: 'wrap',
          }}
        >
          <a
            href={caseStudy.github}
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 18px',
              borderRadius: '12px',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid var(--card-border, rgba(255, 255, 255, 0.1))',
              color: 'var(--text-primary)',
              fontSize: '0.88rem',
              fontWeight: 700,
              textDecoration: 'none',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
              e.currentTarget.style.borderColor = 'var(--card-border, rgba(255, 255, 255, 0.1))';
            }}
          >
            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
            <span>GitHub Code</span>
          </a>

          <div style={{ display: 'flex', gap: '12px', marginLeft: 'auto' }}>
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
                  padding: '10px 20px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, var(--accent-cyan), #0070f3)',
                  border: 'none',
                  color: '#fff',
                  fontSize: '0.88rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  boxShadow: '0 4px 15px rgba(0, 242, 254, 0.3)',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 242, 254, 0.45)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 242, 254, 0.3)';
                }}
              >
                <span>{caseStudy.demo.startsWith('http') ? 'Launch Live App' : 'Run Simulator'}</span>
                <ExternalLink size={15} />
              </button>
            )}

            <button
              onClick={onClose}
              style={{
                padding: '10px 18px',
                borderRadius: '12px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid var(--card-border, rgba(255, 255, 255, 0.1))',
                color: 'var(--text-secondary)',
                fontSize: '0.88rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
