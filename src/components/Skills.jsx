import React from 'react';

export default function Skills() {
  // Track 1: Cloud, DevOps & Engineering Stacks (matching Image 2 & CV)
  const track1Skills = [
    {
      name: 'Google Cloud',
      icon: (
        <svg viewBox="0 0 24 24" width="34" height="34" fill="none">
          <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" fill="#4285F4"/>
          <path d="M19 14.5c0 2.48-2.02 4.5-4.5 4.5H6c-2.76 0-5-2.24-5-5 0-2.52 1.86-4.59 4.3-4.94.7-2.64 3.09-4.56 5.95-4.56 3.1 0 5.68 2.22 6.27 5.18 2.06.34 3.48 2.16 3.48 4.32z" fill="#EA4335" opacity="0.15"/>
          <path d="M12 5.5c2.4 0 4.4 1.6 5 3.8l.3 1.2 1.2.1c1.5.1 2.5 1.3 2.5 2.8 0 1.6-1.3 2.9-2.9 2.9H6.2c-1.8 0-3.2-1.4-3.2-3.2 0-1.7 1.3-3.1 3-3.2l1.3-.1.5-1.2C8.6 6.8 10.2 5.5 12 5.5m0-1.5C9.1 4 6.6 5.6 5.4 8 2.3 8.4 0 10.9 0 14c0 3.3 2.7 6 6 6h13c2.8 0 5-2.2 5-5 0-2.6-2-4.8-4.6-5-1-3.5-4-6-7.4-6z" fill="#FBBC05"/>
          <circle cx="12" cy="11.5" r="3" fill="#34A853"/>
        </svg>
      ),
    },
    {
      name: 'PostgreSQL',
      icon: (
        <svg viewBox="0 0 24 24" width="34" height="34" fill="none">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="#336791"/>
          <path d="M16.5 8.5c-.5-1.5-2-2.5-4.5-2.5-3 0-5 2-5 5 0 2.5 1.5 4.5 4 4.5 1.5 0 3-.5 4-1.5v-2h-3v-1.5h4.5v4c-1.5 1.5-3.5 2-5.5 2-3.5 0-6-2.5-6-6s2.5-6.5 6.5-6.5c3 0 5 1.5 5.5 3.5h-1.5z" fill="#ffffff"/>
        </svg>
      ),
    },
    {
      name: 'MongoDB',
      icon: (
        <svg viewBox="0 0 24 24" width="34" height="34" fill="none">
          <path d="M12 1.5s-4.5 4.5-4.5 10.5c0 4.2 3.1 7.8 4.2 9.2.1.1.2.2.3.3.1-.1.2-.2.3-.3 1.1-1.4 4.2-5 4.2-9.2C16.5 6 12 1.5 12 1.5z" fill="#47A248"/>
          <path d="M12 21.5v-20s4.5 4.5 4.5 10.5c0 4.2-3.1 7.8-4.2 9.2-.1.1-.2.2-.3.3z" fill="#499D4A"/>
          <path d="M12 21.8c-.3 0-.5-.2-.5-.5v-4.5c0-.3.2-.5.5-.5s.5.2.5.5v4.5c0 .3-.2.5-.5.5z" fill="#FFFFFF" opacity="0.6"/>
        </svg>
      ),
    },
    {
      name: 'Node.js',
      icon: (
        <svg viewBox="0 0 24 24" width="34" height="34" fill="#339933">
          <path d="M12 2l9 5.2v10.4L12 23l-9-5.4V7.2L12 2zm0 2.3L4.8 8.4v7.2L12 19.8l7.2-4.2V8.4L12 4.3z"/>
        </svg>
      ),
    },
    {
      name: 'Tailwind CSS',
      icon: (
        <svg viewBox="0 0 24 24" width="34" height="34" fill="#06B6D4">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.335 6.182 14.974 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.335 13.382 8.974 12 6.001 12z"/>
        </svg>
      ),
    },
    {
      name: 'React.js',
      icon: (
        <svg viewBox="0 0 24 24" width="34" height="34" fill="none">
          <ellipse cx="12" cy="12" rx="3.5" ry="9" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(30 12 12)"/>
          <ellipse cx="12" cy="12" rx="3.5" ry="9" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(90 12 12)"/>
          <ellipse cx="12" cy="12" rx="3.5" ry="9" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(150 12 12)"/>
          <circle cx="12" cy="12" r="2" fill="#61DAFB"/>
        </svg>
      ),
    },
    {
      name: 'Next.js',
      icon: (
        <svg viewBox="0 0 24 24" width="34" height="34" fill="none">
          <circle cx="12" cy="12" r="11" fill="#000000"/>
          <path d="M15.5 17.5L8.2 8.2V16.5H6.5V6.5H8.2L15.5 15.8V6.5H17.2V17.5H15.5Z" fill="#FFFFFF"/>
        </svg>
      ),
    },
    {
      name: 'TypeScript',
      icon: (
        <svg viewBox="0 0 24 24" width="34" height="34">
          <rect width="24" height="24" rx="4" fill="#3178C6"/>
          <path d="M12.5 13.5c.3 1.4 1.4 2.2 2.8 2.2 1.3 0 2.2-.6 2.2-1.6 0-1.1-.9-1.5-2.2-2l-.7-.3c-1.8-.7-3-1.6-3-3.4 0-2 1.6-3.4 3.9-3.4 2.1 0 3.6 1.1 4 2.9l-1.9.8c-.2-1-.9-1.6-2.1-1.6-1.1 0-1.8.6-1.8 1.4 0 .9.7 1.3 1.8 1.7l.7.3c2.1.8 3.4 1.8 3.4 3.7 0 2.2-1.7 3.6-4.3 3.6-2.6 0-4.3-1.4-4.7-3.4l1.9-.9zM4 7h6.5v2H8.3v8.5H6V9H4V7z" fill="#ffffff"/>
        </svg>
      ),
    },
    {
      name: 'JavaScript',
      icon: (
        <svg viewBox="0 0 24 24" width="34" height="34">
          <rect width="24" height="24" rx="4" fill="#F7DF1E"/>
          <path d="M6 17.5l2-1.2c.4.8.8 1.4 1.6 1.4.8 0 1.3-.3 1.3-1.4V9h2.3v7.3c0 2.3-1.4 3.4-3.4 3.4-1.8 0-3-1-3.8-2.2zm7.6-.4l2-1.2c.5.9 1.2 1.6 2.3 1.6 1 0 1.6-.5 1.6-1.2 0-.8-.7-1.1-1.8-1.6l-.7-.3c-2-.9-3.3-2-3.3-4.2 0-2.1 1.6-3.7 4.1-3.7 1.8 0 3.1.7 3.9 2.2l-1.9 1.2c-.4-.8-1-1.2-1.9-1.2-.9 0-1.5.5-1.5 1.1 0 .7.5 1 1.5 1.4l.7.3c2.4 1 3.7 2.1 3.7 4.4 0 2.5-1.9 3.9-4.5 3.9-2.5 0-4.1-1.2-4.8-2.7z" fill="#000000"/>
        </svg>
      ),
    },
  ];

  // Track 2: BA, Project Management & Banking Tools
  const track2Skills = [
    {
      name: 'Jira',
      icon: (
        <svg viewBox="0 0 24 24" width="34" height="34">
          <path d="M11.53 2c0 2.4-1.97 4.35-4.4 4.35H2.8A2.8 2.8 0 0 1 0 3.55C0 1.59 1.59 0 3.55 0h4.43c2.4 0 4.35 1.95 4.35 4.35v-2.35z" fill="#0052CC" transform="translate(6, 4)"/>
          <path d="M8.73 6.35c0-2.4 1.95-4.35 4.35-4.35H17.5A2.8 2.8 0 0 1 20.3 4.8c0 1.96-1.59 3.55-3.55 3.55h-4.42c-2.4 0-4.35-1.95-4.35-4.35v2.35z" fill="#2684FF" transform="translate(3, 8)"/>
          <path d="M5.93 10.7c0-2.4 1.95-4.35 4.35-4.35H14.7a2.8 2.8 0 0 1 2.8 2.8c0 1.96-1.59 3.55-3.55 3.55H9.53c-2.4 0-4.35-1.95-4.35-4.35v2.35z" fill="#0052CC" transform="translate(0, 12)"/>
        </svg>
      ),
    },
    {
      name: 'Power BI',
      icon: (
        <svg viewBox="0 0 24 24" width="34" height="34" fill="none">
          <rect x="2" y="12" width="4" height="10" rx="1.5" fill="#F2C811"/>
          <rect x="8" y="7" width="4" height="15" rx="1.5" fill="#E8B007"/>
          <rect x="14" y="3" width="4" height="19" rx="1.5" fill="#D69700"/>
          <rect x="20" y="9" width="3" height="13" rx="1.5" fill="#BA7F00"/>
        </svg>
      ),
    },
    {
      name: 'Figma',
      icon: (
        <svg viewBox="0 0 38 57" width="32" height="36" fill="none">
          <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" fill="#1ABCFE"/>
          <path d="M0 47.5a9.5 9.5 0 0 1 9.5-9.5H19v9.5a9.5 9.5 0 1 1-19 0z" fill="#0ACF83"/>
          <path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" fill="#FF7262"/>
          <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="#F24E1E"/>
          <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="#A259FF"/>
        </svg>
      ),
    },
    {
      name: 'Draw.io',
      icon: (
        <svg viewBox="0 0 24 24" width="34" height="34" fill="none">
          <rect x="3" y="3" width="7" height="7" rx="1.5" fill="#F08705"/>
          <rect x="14" y="3" width="7" height="7" rx="1.5" fill="#DF6800"/>
          <rect x="8.5" y="14" width="7" height="7" rx="1.5" fill="#EB7200"/>
          <path d="M6.5 10v2.5a2 2 0 0 0 2 2H12m5.5-4.5v2.5a2 2 0 0 1-2 2H12" stroke="#DF6800" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      name: 'MS Excel',
      icon: (
        <svg viewBox="0 0 24 24" width="34" height="34">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" fill="#107C41"/>
          <path d="M14 2v6h6" fill="#185C37" opacity="0.6"/>
          <path d="M7 11.5l3.5 5.5m0-5.5L7 17" stroke="#ffffff" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      name: 'GitHub',
      icon: (
        <svg viewBox="0 0 24 24" width="34" height="34" fill="#24292E">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
        </svg>
      ),
    },
    {
      name: 'BPMN 2.0',
      icon: (
        <svg viewBox="0 0 24 24" width="34" height="34" fill="none">
          <circle cx="5" cy="12" r="3.5" stroke="#2563EB" strokeWidth="2" fill="rgba(37, 99, 235, 0.1)"/>
          <rect x="15" y="8.5" width="7" height="7" rx="1.5" stroke="#2563EB" strokeWidth="2" fill="rgba(37, 99, 235, 0.1)"/>
          <path d="M8.5 12h6.5m-2.5-3l3 3-3 3" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      name: 'Agile & Scrum',
      icon: (
        <svg viewBox="0 0 24 24" width="34" height="34" fill="none">
          <circle cx="12" cy="12" r="8.5" stroke="#10B981" strokeWidth="2" strokeDasharray="4 2"/>
          <path d="M12 7v5l3.5 3.5" stroke="#10B981" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="12" cy="12" r="2" fill="#10B981"/>
        </svg>
      ),
    },
    {
      name: 'UML Modeling',
      icon: (
        <svg viewBox="0 0 24 24" width="34" height="34" fill="none">
          <rect x="3" y="3" width="7" height="5" rx="1" fill="#8B5CF6"/>
          <rect x="14" y="3" width="7" height="5" rx="1" fill="#8B5CF6"/>
          <rect x="8.5" y="15" width="7" height="6" rx="1" fill="#6D28D9"/>
          <path d="M6.5 8v3.5h11V8M12 11.5V15" stroke="#8B5CF6" strokeWidth="1.8"/>
        </svg>
      ),
    },
    {
      name: 'SRS & BRD',
      icon: (
        <svg viewBox="0 0 24 24" width="34" height="34" fill="none">
          <path d="M6 3h8.5L19 7.5V20a1.5 1.5 0 0 1-1.5 1.5H6A1.5 1.5 0 0 1 4.5 20V4.5A1.5 1.5 0 0 1 6 3z" fill="#0EA5E9" fillOpacity="0.15" stroke="#0EA5E9" strokeWidth="1.8"/>
          <path d="M8 12l2.5 2.5 5.5-5.5" stroke="#0EA5E9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      name: 'Core Banking',
      icon: (
        <svg viewBox="0 0 24 24" width="34" height="34" fill="none">
          <path d="M3 9.5L12 4l9 5.5v1.5H3V9.5zM5 11v7M9.5 11v7M14.5 11v7M19 11v7M2 18h20v2.5H2V18z" stroke="#D97706" strokeWidth="1.8" fill="rgba(217, 119, 6, 0.15)" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      name: 'Digital Banking',
      icon: (
        <svg viewBox="0 0 24 24" width="34" height="34" fill="none">
          <rect x="2" y="5" width="20" height="14" rx="3" stroke="#059669" strokeWidth="1.8" fill="rgba(5, 150, 105, 0.1)"/>
          <path d="M2 9.5h20M6 15h4" stroke="#059669" strokeWidth="1.8" strokeLinecap="round"/>
        </svg>
      ),
    },
  ];

  // Quadruple arrays for smooth continuous seamless infinite marquee loop
  const marquee1 = [...track1Skills, ...track1Skills, ...track1Skills, ...track1Skills];
  const marquee2 = [...track2Skills, ...track2Skills, ...track2Skills, ...track2Skills];

  const renderIconCard = (skill, idx) => (
    <div key={`${skill.name}-${idx}`} className="skill-logo-card">
      <div className="skill-logo-icon">
        {skill.icon}
      </div>
      <span className="skill-logo-name">
        {skill.name}
      </span>
    </div>
  );

  return (
    <section id="skills" className="section section-white" style={{ position: 'relative', overflow: 'hidden', padding: '90px 0' }}>
      <div className="container" style={{ marginBottom: '44px' }}>
        {/* Section Header */}
        <div style={{ maxWidth: '850px' }}>
          <h2 style={{ fontSize: 'clamp(2.1rem, 4vw, 3.2rem)', fontWeight: 900, color: 'var(--color-text-primary)', letterSpacing: '-0.03em', lineHeight: 1.15, margin: 0 }}>
            Functional &amp; Technical Competencies
          </h2>
        </div>
      </div>

      {/* Clean White Background Horizontal Infinite Marquee Stream (Matching Image 2 Reference) */}
      <div className="skills-marquee-wrapper-light">
        {/* Track 1: Scrolling Left slowly */}
        <div className="skills-marquee-row-light">
          <div className="skills-track-light track-left-slow">
            {marquee1.map((skill, idx) => renderIconCard(skill, idx))}
          </div>
        </div>

        {/* Track 2: Scrolling Right slowly */}
        <div className="skills-marquee-row-light" style={{ marginTop: '16px' }}>
          <div className="skills-track-light track-right-slow">
            {marquee2.map((skill, idx) => renderIconCard(skill, idx))}
          </div>
        </div>
      </div>

      <style>{`
        .skills-marquee-wrapper-light {
          display: flex;
          flex-direction: column;
          gap: 6px;
          width: 100%;
          position: relative;
          overflow: hidden;
          mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
        }

        .skills-marquee-row-light {
          overflow: hidden;
          position: relative;
          width: 100%;
          display: flex;
          padding: 10px 0;
        }

        .skills-track-light {
          display: flex;
          gap: 18px;
          width: max-content;
          will-change: transform;
        }

        .track-left-slow {
          animation: marqueeLeftLight 55s linear infinite;
        }

        .track-right-slow {
          animation: marqueeRightLight 60s linear infinite;
        }

        .skills-marquee-wrapper-light:hover .skills-track-light {
          animation-play-state: paused;
        }

        /* Minimalist Rounded Square Card matching Reference Image 2 */
        .skill-logo-card {
          width: 116px;
          height: 116px;
          flex-shrink: 0;
          background: #FFFFFF;
          border: 1px solid rgba(0, 0, 0, 0.07);
          border-radius: 20px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
          display: flex;
          flex-direction: column;
          align-items: center;
          justifyContent: center;
          gap: 10px;
          padding: 14px 8px;
          text-align: center;
          transition: all 0.28s cubic-bezier(0.34, 1.56, 0.64, 1);
          cursor: pointer;
          user-select: none;
        }

        .skill-logo-card:hover {
          transform: translateY(-6px) scale(1.05);
          box-shadow: 0 14px 28px rgba(37, 99, 235, 0.12);
          border-color: #2563EB;
        }

        .skill-logo-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 38px;
          width: 38px;
          transition: transform 0.25s ease;
        }

        .skill-logo-card:hover .skill-logo-icon {
          transform: scale(1.12);
        }

        .skill-logo-name {
          font-family: var(--font-display);
          font-size: 0.76rem;
          font-weight: 600;
          color: #374151;
          letter-spacing: -0.01em;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 102px;
        }

        @keyframes marqueeLeftLight {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }

        @keyframes marqueeRightLight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }

        @media (max-width: 768px) {
          .skill-logo-card {
            width: 98px;
            height: 98px;
            border-radius: 16px;
            gap: 8px;
            padding: 10px 6px;
          }
          .skill-logo-icon {
            height: 32px;
            width: 32px;
          }
          .skill-logo-icon svg {
            width: 28px;
            height: 28px;
          }
          .skill-logo-name {
            font-size: 0.72rem;
            max-width: 86px;
          }
        }
      `}</style>
    </section>
  );
}

