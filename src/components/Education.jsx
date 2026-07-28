import { GraduationCap, Calendar, CheckCircle2 } from 'lucide-react';
import ibslLogo from '../assets/ibsl.png';
import sliateLogo from '../assets/SLIATE_LOGO2.png';

export default function Education() {
  const educations = [
    {
      degree: 'Higher National Diploma in Information Technology (HNDIT)',
      institution: 'Sri Lanka Institute of Advanced Technological Education (SLIATE)',
      specialization: 'Software Engineering, Business Analysis, IT Project Management & Database Architecture',
      logo: sliateLogo,
      location: 'Matale / Colombo, Sri Lanka',
      duration: 'Aug 2024 - Aug 2026',
      status: 'Undergraduate',
      color: '#00f2fe',
    },
    {
      degree: 'Diploma in Banking & Finance (DBF Level I)',
      institution: 'Institute of Bankers of Sri Lanka (IBSL)',
      specialization: 'Commercial Banking Operations, Digital Financial Systems & Credit Management',
      logo: ibslLogo,
      location: 'Sri Lanka',
      duration: 'Reading / Ongoing',
      status: 'Banking & Finance Student',
      passedSubject: 'IT, Digital Banking and Settlements',
      color: '#9b51e0',
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
                      background: edu.logo ? '#ffffff' : 'rgba(0, 242, 254, 0.1)',
                      border: '1px solid rgba(0, 242, 254, 0.3)',
                      borderRadius: '14px',
                      padding: edu.logo ? '6px' : '12px',
                      width: '54px',
                      height: '54px',
                      color: 'var(--accent-cyan)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      boxShadow: '0 4px 14px rgba(0, 0, 0, 0.15)',
                      overflow: 'hidden',
                    }}
                  >
                    {edu.logo ? (
                      <img
                        src={edu.logo}
                        alt={edu.institution}
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
                      <GraduationCap size={24} />
                    )}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                      {edu.degree}
                    </h3>
                    <h4 style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
                      {edu.institution}
                    </h4>
                    {edu.specialization && (
                      <p style={{ fontSize: '0.88rem', color: 'var(--accent-cyan)', fontWeight: 600, marginTop: '4px' }}>
                        <span style={{ color: 'var(--text-secondary)', fontWeight: 600 }}>Specialization:</span> {edu.specialization}
                      </p>
                    )}
                    {edu.passedSubject && (
                      <div
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '8px',
                          background: 'rgba(56, 239, 125, 0.1)',
                          border: '1px solid rgba(56, 239, 125, 0.35)',
                          padding: '6px 14px',
                          borderRadius: '8px',
                          marginTop: '10px',
                        }}
                      >
                        <CheckCircle2 size={16} style={{ color: '#38ef7d', flexShrink: 0 }} />
                        <span style={{ fontSize: '0.86rem', fontWeight: 700, color: '#38ef7d' }}>
                          Passed Subject: <span style={{ color: 'var(--text-primary)' }}>{edu.passedSubject}</span>
                        </span>
                      </div>
                    )}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
