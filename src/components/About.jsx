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

          {/* Left Column: Philosophy */}
          <div className="glass-panel" style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700 }}>
              My Management & Technical Philosophy
            </h3>

            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              As an HNDIT undergraduate aspiring to build a career in Project Management and Business Analysis, I am passionate about connecting business goals with technology-driven solutions. I enjoy analyzing business needs, gathering requirements, and transforming them into clear functional specifications, UML/BPMN models, user stories, and well-structured Agile backlogs.
            </p>

            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              My technical foundation in Next.js, React, Java, PHP, and SQL enables me to communicate effectively with development teams, understand technical constraints, and support informed decision-making throughout the project lifecycle. I believe successful projects are driven by effective communication, stakeholder collaboration, structured planning, and continuous improvement.
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

          {/* Right Column: Quick Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', justifyContent: 'center' }}>
            {/* Quick Bio Info */}
            <div className="glass-panel" style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '16px', height: '100%', justifyContent: 'center' }}>
              <h4 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)' }}>Quick Profile</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem', lineHeight: 1.6 }}>
                <strong style={{ color: 'var(--accent-cyan)' }}>Role:</strong> Aspiring Project Manager & Business Analyst
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem', lineHeight: 1.6 }}>
                <strong style={{ color: 'var(--accent-cyan)' }}>Core Focus:</strong> Requirements Engineering, Agile Scrum, System Analysis, FinTech
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem', lineHeight: 1.6 }}>
                <strong style={{ color: 'var(--accent-cyan)' }}>Technical Depth:</strong> Next.js, React 19, TypeScript, PHP, MySQL, Java SE
              </p>
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
