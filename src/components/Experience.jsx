import React from 'react';
import { Briefcase, Calendar, Globe, Layers } from 'lucide-react';
import peoplesBankLogo from '../assets/peoplesbank.jpg';

export default function Experience() {
  const experiences = [
    {
      index: '01',
      role: 'Internship Trainee',
      company: "People's Bank Sri Lanka",
      logo: peoplesBankLogo,
      location: 'Ukuwela Branch, Sri Lanka',
      duration: 'Jan 2024 - Jul 2024',
      type: 'Bank Internship',
      skills: 'Branch Banking Operations, Financial Workflows & Staff Coordination',
      certificate: 'Service Letter',
    },
  ];

  return (
    <section id="experience" className="section section-white" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: '44px' }}>
          <h2 style={{ fontSize: 'clamp(2.1rem, 4vw, 3.2rem)', fontWeight: 900, color: 'var(--color-text-primary)', letterSpacing: '-0.03em', lineHeight: 1.15, margin: 0 }}>
            Professional Experience
          </h2>
        </div>

        {/* Experience Cards */}
        <div style={{ maxWidth: '960px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '28px' }}>
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="card-flat"
              style={{
                padding: '36px',
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
              }}
            >
              {/* Header Row */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  flexWrap: 'wrap',
                  gap: '16px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
                  <div
                    className="experience-logo-box"
                    style={{
                      background: '#FFFFFF',
                      border: '1px solid var(--color-border)',
                      borderRadius: '14px',
                      padding: '5px',
                      width: '56px',
                      height: '56px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      overflow: 'hidden',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.12)',
                    }}
                  >
                    {exp.logo ? (
                      <img
                        src={exp.logo}
                        alt={exp.company}
                        loading="lazy"
                        decoding="async"
                        width="50"
                        height="50"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'contain',
                          borderRadius: '8px',
                        }}
                      />
                    ) : (
                      <Briefcase size={26} color="#14B8A6" />
                    )}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--color-text-primary)', letterSpacing: '-0.02em' }}>
                      {exp.role}
                    </h3>
                    <h4 style={{ fontSize: '1.02rem', color: 'var(--color-text-secondary)', fontWeight: 600, marginTop: '2px' }}>
                      {exp.company}
                    </h4>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span
                    style={{
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      color: 'var(--color-accent)',
                      background: 'var(--color-accent-subtle)',
                      border: '1px solid var(--color-border)',
                      padding: '5px 14px',
                      borderRadius: '999px',
                      fontFamily: 'var(--font-display)',
                    }}
                  >
                    {exp.type}
                  </span>
                  <span className="card-index">{exp.index}</span>
                </div>
              </div>

              {/* Meta information row (Duration, Location) */}
              <div className="experience-meta-row" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', padding: '12px 16px', background: 'var(--color-bg-alt)', borderRadius: '10px', border: '1px solid var(--color-border)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.88rem', color: 'var(--color-text-secondary)' }}>
                  <Calendar size={15} style={{ color: 'var(--color-accent)' }} />
                  <span>{exp.duration}</span>
                </div>
                {exp.location && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.88rem', color: 'var(--color-text-secondary)' }}>
                    <Globe size={15} style={{ color: 'var(--color-accent)' }} />
                    <span>{exp.location}</span>
                  </div>
                )}
                {exp.skills && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.88rem', color: 'var(--color-text-primary)', fontWeight: 600 }}>
                    <Layers size={15} style={{ color: 'var(--color-accent)' }} />
                    <span>{exp.skills}</span>
                  </div>
                )}
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
