import { MapPin, Heart, Code2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="section" style={{ background: 'var(--bg-secondary)', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800 }} className="gradient-text">
            About Me
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', marginTop: '10px' }}>
            Get to know my coding philosophy, values, and location.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '40px' }}>
          
          {/* Left Column: Philosophy */}
          <div className="glass-panel" style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Code2 style={{ color: 'var(--accent-cyan)' }} size={24} />
              My Management & Technical Philosophy
            </h3>
            
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              As an HNDIT undergraduate specializing in Business Analysis and Project Management, I bridge the critical gap between business vision and software execution. I excel at translating complex business requirements into clear functional specs, UML/BPMN models, and actionable Agile backlogs.
            </p>

            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              Having hands-on software development experience across Next.js, React, Java, PHP, and SQL allows me to collaborate effectively with engineering teams, perform precise feasibility analysis, and lead data-driven software solutions like <strong>FinBridge AI</strong>.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '10px' }}>
              <span style={{ padding: '6px 12px', background: 'rgba(155, 81, 224, 0.1)', border: '1px solid rgba(155, 81, 224, 0.2)', borderRadius: '8px', fontSize: '0.85rem', color: 'var(--accent-purple)', fontWeight: 600 }}>
                Agile / Scrum Facilitator
              </span>
              <span style={{ padding: '6px 12px', background: 'rgba(0, 242, 254, 0.1)', border: '1px solid rgba(0, 242, 254, 0.2)', borderRadius: '8px', fontSize: '0.85rem', color: 'var(--accent-cyan)', fontWeight: 600 }}>
                Requirements Engineer
              </span>
              <span style={{ padding: '6px 12px', background: 'rgba(0, 112, 243, 0.1)', border: '1px solid rgba(0, 112, 243, 0.2)', borderRadius: '8px', fontSize: '0.85rem', color: 'var(--accent-blue)', fontWeight: 600 }}>
                Technical BA & PM
              </span>
            </div>
          </div>

          {/* Right Column: Info & Location */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', justifyContent: 'center' }}>
            {/* Quick Bio Info */}
            <div className="glass-panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)' }}>Quick Profile</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                <strong>Role:</strong> Aspiring Project Manager & Business Analyst
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                <strong>Core Focus:</strong> Requirements Engineering, Agile Scrum, System Analysis, FinTech
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                <strong>Technical Depth:</strong> Next.js, React, TypeScript, PHP, MySQL, Java SE
              </p>
            </div>

            {/* Colombo Sri Lanka Card */}
            <div
              className="glass-panel"
              style={{
                padding: '24px',
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                background: 'linear-gradient(135deg, rgba(13, 18, 31, 0.8), rgba(5, 7, 10, 0.9))',
              }}
            >
              <div
                style={{
                  background: 'rgba(255, 0, 0, 0.05)',
                  border: '1px solid rgba(255, 0, 0, 0.1)',
                  borderRadius: '12px',
                  width: '50px',
                  height: '50px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <MapPin style={{ color: '#ff4757' }} size={24} />
              </div>
              <div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700 }}>Colombo, Sri Lanka</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', fontFamily: 'monospace' }}>
                  6.9271° N, 79.8612° E
                </p>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  Working remotely & open to local collaboration.
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
