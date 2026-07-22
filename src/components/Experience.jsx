import { Briefcase, Calendar, CheckSquare } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      role: 'Internship Trainee',
      company: "People's Bank Sri Lanka",
      location: 'Matale / Colombo Branches, Sri Lanka',
      duration: 'Jan 2024 - Jul 2024 (7 Months)',
      type: 'Bank Internship',
      responsibilities: [
        'Supported branch banking operations, transactions, and daily account management logs.',
        'Assisted customers in handling account openings, deposit services, and digital loan requests.',
        'Gained exposure to secure enterprise bank databases and transactional software systems.',
        'Collaborated with division heads to streamline front-desk operations and customer queues.',
      ],
      color: '#9b51e0',
    },
  ];

  return (
    <section id="experience" className="section" style={{ background: 'var(--bg-secondary)', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800 }} className="gradient-text">
            Professional Experience
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', marginTop: '10px' }}>
            My internship journey in the banking and finance industry.
          </p>
        </div>

        {/* Experience List */}
        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="glass-panel animate-float"
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
                      background: 'rgba(155, 81, 224, 0.1)',
                      border: '1px solid rgba(155, 81, 224, 0.2)',
                      borderRadius: '12px',
                      padding: '12px',
                      color: 'var(--accent-purple)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Briefcase size={24} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                      {exp.role}
                    </h3>
                    <h4 style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
                      {exp.company}
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
                      color: 'var(--accent-purple)',
                      background: 'rgba(155, 81, 224, 0.1)',
                      border: '1px solid rgba(155, 81, 224, 0.25)',
                      padding: '4px 12px',
                      borderRadius: '999px',
                    }}
                  >
                    {exp.type}
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
                    {exp.duration}
                  </span>
                </div>
              </div>

              {/* Responsibilities */}
              <div style={{ borderTop: '1px solid var(--card-border)', paddingTop: '20px' }}>
                <h4
                  style={{
                    fontSize: '1rem',
                    fontWeight: 700,
                    marginBottom: '12px',
                    color: 'var(--text-primary)',
                  }}
                >
                  Key Operations & Exposure:
                </h4>
                <ul
                  style={{
                    listStyle: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                  }}
                >
                  {exp.responsibilities.map((resp, rIdx) => (
                    <li
                      key={rIdx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '10px',
                        color: 'var(--text-secondary)',
                        fontSize: '0.95rem',
                        lineHeight: 1.5,
                      }}
                    >
                      <CheckSquare
                        size={16}
                        style={{ color: 'var(--accent-purple)', marginTop: '3px', flexShrink: 0 }}
                      />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
