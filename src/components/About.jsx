import { Download } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="section" style={{ background: 'var(--bg-secondary)', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800 }} className="gradient-text">
            About Me
          </h2>

        </div>

        {/* Grid Layout */}
        <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '40px' }}>

          {/* Left Column: Philosophy & Career Direction */}
          <div className="glass-panel" style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700 }}>
              Professional Profile & Career Direction
            </h3>

            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              I am an <strong style={{ color: 'var(--text-primary)' }}>HNDIT Undergraduate (SLIATE)</strong> and <strong style={{ color: 'var(--text-primary)' }}>IBSL Banking & Finance Student</strong> specializing in Full-Stack Software Development and Technical Business Analysis. My objective is to bridge business strategy with technical implementation by translating complex domain requirements into robust, user-centric software applications.
            </p>

            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              Having gained hands-on experience in banking operations at <strong style={{ color: 'var(--accent-cyan)' }}>People's Bank Sri Lanka</strong>
            </p>

            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              <strong style={{ color: 'var(--accent-cyan)' }}>Career Goal:</strong> Actively seeking a <strong style={{ color: 'var(--text-primary)' }}>Business Analyst / IT Project Management</strong> internship/junior role where I can contribute to building high-impact FinTech solutions and enterprise web applications.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '10px' }}>
              <span style={{ padding: '6px 12px', background: 'rgba(0, 242, 254, 0.1)', border: '1px solid rgba(0, 242, 254, 0.25)', borderRadius: '8px', fontSize: '0.85rem', color: 'var(--accent-cyan)', fontWeight: 600 }}>
                Full-Stack Web Dev
              </span>
              <span style={{ padding: '6px 12px', background: 'rgba(155, 81, 224, 0.1)', border: '1px solid rgba(155, 81, 224, 0.25)', borderRadius: '8px', fontSize: '0.85rem', color: 'var(--accent-purple)', fontWeight: 600 }}>
                Business Analysis (SRS/BRD)
              </span>
              <span style={{ padding: '6px 12px', background: 'rgba(0, 112, 243, 0.1)', border: '1px solid rgba(0, 112, 243, 0.25)', borderRadius: '8px', fontSize: '0.85rem', color: 'var(--accent-blue)', fontWeight: 600 }}>
                FinTech & Banking Ops
              </span>
              <span style={{ padding: '6px 12px', background: 'rgba(56, 239, 125, 0.1)', border: '1px solid rgba(56, 239, 125, 0.25)', borderRadius: '8px', fontSize: '0.85rem', color: '#38ef7d', fontWeight: 600 }}>
                Agile / Scrum Delivery
              </span>
              <span style={{ padding: '6px 12px', background: 'rgba(255, 170, 0, 0.1)', border: '1px solid rgba(255, 170, 0, 0.25)', borderRadius: '8px', fontSize: '0.85rem', color: '#ffaa00', fontWeight: 600 }}>
                Database Design (MySQL)
              </span>
            </div>
          </div>

          {/* Right Column: Quick Profile Summary */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', justifyContent: 'center' }}>
            <div className="glass-panel" style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '16px', height: '100%', justifyContent: 'center' }}>
              <h4 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)' }}>Key Snapshot</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem', lineHeight: 1.6 }}>
                <strong style={{ color: 'var(--accent-cyan)' }}>Target Opportunity:</strong> Business Analyst / IT Project Management Intern
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem', lineHeight: 1.6 }}>
                <strong style={{ color: 'var(--accent-cyan)' }}>Key Specializations:</strong> FinTech Engines, Requirements Engineering, BPMN 2.0, Web Apps
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem', lineHeight: 1.6 }}>
                <strong style={{ color: 'var(--accent-cyan)' }}>Core Tech Stack:</strong> React 19, Next.js, Node.js, Java SE, PHP, MySQL, REST APIs
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem', lineHeight: 1.6 }}>
                <strong style={{ color: 'var(--accent-cyan)' }}>Education:</strong> HNDIT (SLIATE) & DBF (IBSL)
              </p>

              <div style={{ marginTop: '12px', paddingTop: '16px', borderTop: '1px solid var(--card-border)' }}>
                <a
                  href="/assets/Rashminda Aluvihare CV.pdf"
                  download="Rashminda Aluvihare CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-premium secondary"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 20px', borderRadius: '10px', fontSize: '0.9rem', fontWeight: 700, textDecoration: 'none' }}
                >
                  <Download size={18} style={{ color: 'var(--accent-cyan)' }} />
                  <span>Download Full CV</span>
                </a>
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
