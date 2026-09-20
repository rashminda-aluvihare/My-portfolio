import React from 'react';
import { GraduationCap, Calendar, Globe, Layers, Award } from 'lucide-react';
import ibslLogo from '../assets/ibsl.png';
import sliateLogo from '../assets/SLIATE_LOGO2.png';
import stcLogo from '../assets/stc.png';

export default function Education() {
  const educations = [
    {
      degree: 'Higher National Diploma in Information Technology (HNDIT)',
      institution: 'Advanced Technological Institute (ATI), Dehiwala - SLIATE',
      location: 'Dehiwala / Colombo, Sri Lanka',
      duration: '2024 - 2026',
      qualificationLevel: 'NVQ Level 6 Equivalent',
      logo: sliateLogo,
    },
    {
      degree: 'Diploma in Banking & Finance (DBF)',
      institution: 'Institute of Bankers of Sri Lanka - IBSL',
      location: 'Colombo, Sri Lanka',
      duration: '2025 - Present',
      status: 'Ongoing Studies',
      qualificationLevel: 'Passed: IT, Digital Banking & Electronic Settlements',
      logo: ibslLogo,
    },
    {
      degree: 'G.C.E Advanced Level – Bio System Technology Stream',
      institution: "St. Thomas' College, Matale",
      location: 'Matale, Sri Lanka',
      duration: '2022 - 2023',
      status: 'Completed',
      result: 'B1 C2',
      qualificationLevel: 'Bio System Technology • Science for Technology • ICT',
      logo: stcLogo,
    },
  ];

  return (
    <section id="education" className="section section-white" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: '44px' }}>
          <h2 style={{ fontSize: 'clamp(2.1rem, 4vw, 3.2rem)', fontWeight: 900, color: 'var(--color-text-primary)', letterSpacing: '-0.03em', lineHeight: 1.15, margin: 0 }}>
            Education &amp; Qualifications
          </h2>
        </div>

        {/* Education Cards */}
        <div style={{ maxWidth: '960px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {educations.map((edu, idx) => (
            <div
              key={idx}
              className="card-flat"
              style={{
                padding: '30px 34px',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                borderRadius: '20px',
              }}
            >
              {/* Header Row */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  gap: '16px',
                  flexWrap: 'wrap',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '18px', flex: '1 1 500px', minWidth: 0 }}>
                  <div
                    className="education-logo-box"
                    style={{
                      background: 'var(--card-bg)',
                      border: '1px solid var(--color-border)',
                      borderRadius: '14px',
                      padding: '4px',
                      width: '56px',
                      height: '56px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      overflow: 'hidden',
                      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
                    }}
                  >
                    {edu.logo ? (
                      <img
                        src={edu.logo}
                        alt={edu.institution}
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
                      <GraduationCap size={28} color="#2563EB" />
                    )}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <h3 style={{ fontSize: 'clamp(1.15rem, 2vw, 1.35rem)', fontWeight: 800, color: 'var(--color-text-primary)', letterSpacing: '-0.02em', margin: 0, lineHeight: 1.25 }}>
                      {edu.degree}
                    </h3>
                    <h4 style={{ fontSize: '0.98rem', color: 'var(--color-text-secondary)', fontWeight: 600, marginTop: '4px', margin: 0 }}>
                      {edu.institution}
                    </h4>
                  </div>
                </div>

                {edu.status && (
                  <div style={{ display: 'flex', alignItems: 'center', flexShrink: 0, alignSelf: 'flex-start' }}>
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
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {edu.status}
                    </span>
                  </div>
                )}
              </div>

              {/* Meta information row (Duration, Location, Qualification Level in 2-tier layout) */}
              <div
                className="education-meta-row"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                  padding: '12px 18px',
                  background: 'var(--color-bg-alt)',
                  borderRadius: '10px',
                  border: '1px solid var(--color-border)',
                }}
              >
                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '20px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.88rem', color: 'var(--color-text-secondary)' }}>
                    <Calendar size={15} style={{ color: 'var(--color-accent)', flexShrink: 0 }} />
                    <span>{edu.duration}</span>
                  </div>
                  {edu.location && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.88rem', color: 'var(--color-text-secondary)' }}>
                      <Globe size={15} style={{ color: 'var(--color-accent)', flexShrink: 0 }} />
                      <span>{edu.location}</span>
                    </div>
                  )}
                  {edu.result && (
                    <div
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '0.82rem',
                        fontWeight: 700,
                        color: 'var(--color-accent)',
                        background: 'var(--color-accent-subtle)',
                        border: '1px solid var(--color-border)',
                        padding: '3px 10px',
                        borderRadius: '6px',
                        fontFamily: 'var(--font-display)',
                      }}
                    >
                      <Award size={14} style={{ color: 'var(--color-accent)', flexShrink: 0 }} />
                      <span>Results: {edu.result}</span>
                    </div>
                  )}
                </div>
                {edu.qualificationLevel && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.88rem', color: 'var(--color-text-primary)', fontWeight: 600 }}>
                    <Layers size={15} style={{ color: 'var(--color-accent)', flexShrink: 0 }} />
                    <span>{edu.qualificationLevel}</span>
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
