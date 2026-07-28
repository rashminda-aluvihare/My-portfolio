import { Briefcase, Calendar, CheckSquare, Award, FileText, Globe, Layers } from 'lucide-react';
import peoplesBankLogo from '../assets/peoplesbank.jpg';
import decodeLogo from '../assets/decode.png';

export default function Experience() {
  const experiences = [
    {
      role: 'Full Stack Developer Intern',
      company: 'Decodelabs',
      logo: decodeLogo,
      companyType: 'Software Agency / Tech Internship',
      location: 'Remote',
      duration: 'Jun 2026 · 1 mo',
      type: 'Developer Internship',
      skills: 'Full-Stack Development, REST API Integration & MERN Architecture',
      certificate: 'Internship Certificate',
      personalContribution: 'Engineered responsive web component interfaces using React 19, designed REST API endpoints, integrated MongoDB database models, and optimized front-end state management.',
      tools: ['React 19', 'JavaScript (ES6+)', 'Node.js', 'Express', 'MongoDB', 'Git / GitHub', 'REST APIs'],
      responsibilities: [
        'Translated client user requirements into technical web architecture and functional specifications.',
        'Designed normalized database schemas and implemented REST API endpoints for seamless frontend data consumption.',
        'Collaborated with senior engineers using Agile Scrum sprint workflows, code reviews, and Git version control.',
        'Diagnosed and fixed UI responsiveness bugs and optimized rendering performance across desktop and mobile viewports.',
      ],
      badgeColor: 'var(--accent-cyan)',
      bgAlpha: 'rgba(0, 242, 254, 0.1)',
      borderAlpha: 'rgba(0, 242, 254, 0.25)',
    },
    {
      role: 'Internship Trainee - Branch Banking Operations',
      company: "People's Bank Sri Lanka",
      logo: peoplesBankLogo,
      companyType: 'Commercial Banking Institution',
      location: 'Ukuwela Branch, Sri Lanka',
      duration: 'Jan 2024 - Jul 2024 · 7 mos',
      type: 'Bank Internship',
      skills: 'Branch Banking Operations & Core Financial Workflows',
      certificate: 'Service Letter',
      personalContribution: 'Assisted branch staff with daily core banking operations, customer onboarding verification, savings & loan document audits, and digital settlement queries.',
      tools: ['Core Banking Terminal', 'Customer Onboarding Systems', 'KYC Compliance Protocols', 'Financial Clearing Systems'],
      responsibilities: [
        'Supported end-to-end daily branch banking transactions, cash settlement protocols, and account management.',
        'Assisted retail and business customers with digital banking app onboarding and branch service resolution.',
        'Enforced strict banking regulatory compliance, Know Your Customer (KYC) guidelines, and document verification.',
        'Gained deep domain knowledge in Sri Lankan retail banking, fixed deposit management, and credit processes (leveraged directly in building FinTech software projects).',
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
                        loading="lazy"
                        decoding="async"
                        width="48"
                        height="48"
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

              {/* Individual Contribution Highlight */}
              {exp.personalContribution && (
                <div
                  style={{
                    background: 'rgba(0, 242, 254, 0.04)',
                    borderLeft: `3px solid ${exp.badgeColor}`,
                    padding: '12px 16px',
                    borderRadius: '0 10px 10px 0',
                    fontSize: '0.92rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.5,
                  }}
                >
                  <strong style={{ color: 'var(--text-primary)', display: 'block', marginBottom: '4px' }}>
                    My Individual Contribution:
                  </strong>
                  {exp.personalContribution}
                </div>
              )}

              {/* Technologies & Tools Used */}
              {exp.tools && exp.tools.length > 0 && (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {exp.tools.map((tool, tIdx) => (
                    <span
                      key={tIdx}
                      style={{
                        fontSize: '0.78rem',
                        fontWeight: 600,
                        color: exp.badgeColor,
                        background: exp.bgAlpha,
                        border: `1px solid ${exp.borderAlpha}`,
                        padding: '4px 10px',
                        borderRadius: '6px',
                      }}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              )}
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

