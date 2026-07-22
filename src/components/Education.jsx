import { GraduationCap, Calendar, BookOpen, CheckCircle2, Award } from 'lucide-react';

export default function Education() {
  const educations = [
    {
      degree: 'Diploma in Banking & Finance (DBF Level I)',
      institution: 'Institute of Bankers of Sri Lanka (IBSL)',
      location: 'Sri Lanka',
      duration: 'Reading / Ongoing',
      status: 'Banking & Finance Student',
      modules: [
        'IT, Digital Banking and Settlements (Passed Subject)',
        'Financial Systems & Commercial Banking Operations',
        'International Trade & Digital Banking Regulations',
        'Credit Management & Risk Analysis',
        'Monetary Economics & Financial Services',
      ],
      color: '#9b51e0',
    },
    {
      degree: 'Higher National Diploma in Information Technology (HNDIT)',
      institution: 'Sri Lanka Institute of Advanced Technological Education (SLIATE)',
      location: 'Matale / Colombo, Sri Lanka',
      duration: 'Aug 2024 - Aug 2026',
      status: 'Undergraduate',
      modules: [
        'Software Engineering Methods & System Analysis',
        'Object-Oriented Programming (Java SE & OOP Logic)',
        'Database Management Systems (MySQL RDBMS & Query Design)',
        'Web Application Development (PHP, HTML, CSS, JavaScript)',
        'Network Infrastructure & Data Communication',
      ],
      color: '#00f2fe',
    },
  ];

  return (
    <section id="education" className="section" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800 }} className="gradient-text">
            Education & Academic Background
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', marginTop: '10px' }}>
            My theoretical study paths and specialized software engineering courses.
          </p>
        </div>

        {/* Education List */}
        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {educations.map((edu, idx) => (
            <div
              key={idx}
              className="glass-panel"
              style={{
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                position: 'relative',
              }}
            >
              {/* Header */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  flexWrap: 'wrap',
                  gap: '12px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div
                    style={{
                      background: 'rgba(0, 242, 254, 0.1)',
                      border: '1px solid rgba(0, 242, 254, 0.2)',
                      borderRadius: '12px',
                      padding: '12px',
                      color: 'var(--accent-cyan)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                      {edu.degree}
                    </h3>
                    <h4 style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
                      {edu.institution}
                    </h4>
                  </div>
                </div>

                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-end',
                    gap: '4px',
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      color: 'var(--accent-cyan)',
                      background: 'rgba(0, 242, 254, 0.1)',
                      border: '1px solid rgba(0, 242, 254, 0.25)',
                      padding: '4px 12px',
                      borderRadius: '999px',
                    }}
                  >
                    {edu.status}
                  </span>
                  <span
                    style={{
                      fontSize: '0.85rem',
                      color: 'var(--text-muted)',
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      marginTop: '4px',
                    }}
                  >
                    <Calendar size={14} />
                    {edu.duration}
                  </span>
                </div>
              </div>

              {/* Modules */}
              <div style={{ borderTop: '1px solid var(--card-border)', paddingTop: '20px' }}>
                <h4
                  style={{
                    fontSize: '1rem',
                    fontWeight: 700,
                    marginBottom: '12px',
                    color: 'var(--text-primary)',
                  }}
                >
                  Specialized Modules & Technologies Studied:
                </h4>
                <ul
                  style={{
                    listStyle: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                  }}
                >
                  {edu.modules.map((mod, mIdx) => {
                    const isPassed = mod.includes('(Passed Subject)');
                    return (
                      <li
                        key={mIdx}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          gap: '10px',
                          color: isPassed ? '#38ef7d' : 'var(--text-secondary)',
                          fontWeight: isPassed ? 700 : 500,
                          fontSize: '0.95rem',
                          lineHeight: 1.5,
                          background: isPassed ? 'rgba(56, 239, 125, 0.06)' : 'transparent',
                          border: isPassed ? '1px solid rgba(56, 239, 125, 0.25)' : 'none',
                          padding: isPassed ? '8px 12px' : '0',
                          borderRadius: isPassed ? '8px' : '0',
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          {isPassed ? (
                            <CheckCircle2 size={18} style={{ color: '#38ef7d', flexShrink: 0 }} />
                          ) : (
                            <BookOpen size={16} style={{ color: 'var(--accent-cyan)', flexShrink: 0 }} />
                          )}
                          <span>{isPassed ? mod.replace(' (Passed Subject)', '') : mod}</span>
                        </div>
                        {isPassed && (
                          <span
                            style={{
                              fontSize: '0.75rem',
                              fontWeight: 800,
                              color: '#38ef7d',
                              background: 'rgba(56, 239, 125, 0.15)',
                              border: '1px solid rgba(56, 239, 125, 0.4)',
                              padding: '3px 10px',
                              borderRadius: '999px',
                            }}
                          >
                            PASSED SUBJECT
                          </span>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
