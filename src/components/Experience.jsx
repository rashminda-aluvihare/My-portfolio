import { Briefcase, Calendar, CheckSquare, Award, FileText, Globe, Layers } from 'lucide-react';
import peoplesBankLogo from '../assets/peoplesbank.jpg';

export default function Experience() {
  const experiences = [
    {
      role: 'Full Stack Developer',
      company: 'Decodelabs',
      companyType: 'Internship',
      location: 'Remote',
      duration: 'Jun 2026 · 1 mo',
      type: 'Developer Internship',
      skills: 'Full-Stack Development and MERN Stack',
      certificate: 'Internship Certificate',
      responsibilities: [
        'Developed scalable full-stack web applications utilizing modern MERN stack architecture.',
        'Engineered responsive user interfaces and robust RESTful API endpoints.',
        'Collaborated remotely with development team to build production-grade features.',
        'Practiced Git version control, component design patterns, and code optimization.',
      ],
      badgeColor: 'var(--accent-cyan)',
      bgAlpha: 'rgba(0, 242, 254, 0.1)',
      borderAlpha: 'rgba(0, 242, 254, 0.25)',
    },
    {
      role: 'Internship Trainee',
      company: "People's Bank Sri Lanka",
      logo: peoplesBankLogo,
      companyType: 'Internship',
      location: 'Ukuwela Branch, Sri Lanka',
      duration: 'Jan 2024 - Jul 2024 · 7 mos',
      type: 'Bank Internship',
      skills: 'Branch Banking Operations',
      certificate: 'Service Letter',
      responsibilities: [
        'Supported branch banking operations, financial transactions, and daily account management logs.',
        'Assisted customers in handling account openings, deposit services, and digital loan requests.',
        'Gained hands-on exposure to secure enterprise banking databases and transactional software.',
        'Collaborated with senior staff to streamline front-desk banking operations.',
      ],
      badgeColor: 'var(--accent-purple)',
      bgAlpha: 'rgba(155, 81, 224, 0.1)',
      borderAlpha: 'rgba(155, 81, 224, 0.25)',
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
            My internship journey in software engineering and banking operations.
          </p>
        </div>

        {/* Experience List */}
        <div style={{ maxWidth: '850px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {experiences.map((exp, idx) => (
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
                      background: exp.logo ? '#ffffff' : exp.bgAlpha,
                      border: `1px solid ${exp.logo ? 'rgba(255, 255, 255, 0.2)' : exp.borderAlpha}`,
                      borderRadius: '14px',
                      padding: exp.logo ? '4px' : '12px',
                      width: '54px',
                      height: '54px',
                      color: exp.badgeColor,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      boxShadow: '0 4px 14px rgba(0, 0, 0, 0.15)',
                      overflow: 'hidden',
                    }}
                  >
                    {exp.logo ? (
                      <img
                        src={exp.logo}
                        alt={exp.company}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'contain',
                          borderRadius: '8px',
                        }}
                      />
                    ) : (
                      <Briefcase size={24} />
                    )}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                      {exp.role}
                    </h3>
                    <h4 style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
                      {exp.company} · <span style={{ opacity: 0.8 }}>{exp.companyType}</span>
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
                      color: exp.badgeColor,
                      background: exp.bgAlpha,
                      border: `1px solid ${exp.borderAlpha}`,
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
                  {exp.location && (
                    <span
                      style={{
                        fontSize: '0.8rem',
                        color: 'var(--text-muted)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                      }}
                    >
                      <Globe size={13} />
                      {exp.location}
                    </span>
                  )}
                </div>
              </div>

              {/* Skill Specialization Badge */}
              {exp.skills && (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    background: 'rgba(255, 255, 255, 0.02)',
                    padding: '10px 14px',
                    borderRadius: '10px',
                    border: '1px solid var(--card-border)',
                  }}
                >
                  <Layers size={15} style={{ color: exp.badgeColor }} />
                  <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
                    {exp.skills}
                  </span>
                </div>
              )}




              {/* Responsibilities */}
              <div style={{ borderTop: '1px solid var(--card-border)', paddingTop: '16px' }}>
                <h4
                  style={{
                    fontSize: '0.95rem',
                    fontWeight: 700,
                    marginBottom: '12px',
                    color: 'var(--text-primary)',
                  }}
                >
                  Key Operations & Highlights:
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
                        style={{ color: exp.badgeColor, marginTop: '3px', flexShrink: 0 }}
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

