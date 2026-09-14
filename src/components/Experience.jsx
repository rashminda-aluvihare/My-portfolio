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
      companyType: 'Commercial Banking Institution',
      location: 'Ukuwela Branch, Sri Lanka',
      duration: 'Jan 2024 - Jul 2024',
      type: 'Bank Internship',
      skills: 'Branch Banking Operations, Financial Workflows & Staff Coordination',
      certificate: 'Service Letter',
    },
  ];

  return (
    <section id="experience" className="section section-white" style={{ backgroundColor: '#FFFFFF', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: '44px' }}>
          <h2 style={{ fontSize: 'clamp(2.1rem, 4vw, 3.2rem)', fontWeight: 900, color: '#0F172A', letterSpacing: '-0.03em', lineHeight: 1.15, margin: 0 }}>
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
                background: '#FFFFFF',
                border: '1px solid rgba(226, 232, 240, 0.9)',
                boxShadow: '0 4px 20px rgba(15, 23, 42, 0.04)',
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
                    style={{
                      background: '#FFFFFF',
                      border: '1px solid rgba(226, 232, 240, 0.9)',
                      borderRadius: '14px',
                      padding: '4px',
                      width: '56px',
                      height: '56px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      overflow: 'hidden',
                      boxShadow: '0 2px 8px rgba(15, 23, 42, 0.04)',
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
                      <Briefcase size={26} color="#2563EB" />
                    )}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.02em' }}>
                      {exp.role}
                    </h3>
                    <h4 style={{ fontSize: '1.02rem', color: '#475569', fontWeight: 600, marginTop: '2px' }}>
                      {exp.company} &bull; <span style={{ color: '#64748B' }}>{exp.companyType}</span>
                    </h4>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span
                    style={{
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      color: '#2563EB',
                      background: '#EFF6FF',
                      border: '1px solid rgba(37, 99, 235, 0.2)',
                      padding: '5px 14px',
                      borderRadius: '999px',
                      fontFamily: 'var(--font-display)',
                    }}
                  >
                    {exp.type}
                  </span>
                  <span className="card-index" style={{ color: '#2563EB' }}>{exp.index}</span>
                </div>
              </div>

              {/* Meta information row (Duration, Location) */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', padding: '12px 16px', background: '#F8FAFC', borderRadius: '10px', border: '1px solid rgba(226, 232, 240, 0.8)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.88rem', color: '#475569' }}>
                  <Calendar size={15} style={{ color: '#2563EB' }} />
                  <span>{exp.duration}</span>
                </div>
                {exp.location && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.88rem', color: '#475569' }}>
                    <Globe size={15} style={{ color: '#2563EB' }} />
                    <span>{exp.location}</span>
                  </div>
                )}
                {exp.skills && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.88rem', color: '#0F172A', fontWeight: 600 }}>
                    <Layers size={15} style={{ color: '#2563EB' }} />
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
