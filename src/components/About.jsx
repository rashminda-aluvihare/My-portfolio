import React from 'react';
import { Briefcase } from 'lucide-react';

export default function About() {
  return (
    <section
      id="about"
      className="section section-light"
      style={{
        backgroundColor: '#F8FAFC',
        position: 'relative',
        overflow: 'hidden',
        padding: '95px 0',
      }}
    >
      {/* Top-Right Decorative Fluid Gradient */}
      <div
        style={{
          position: 'absolute',
          top: '-6%',
          right: '-4%',
          width: '420px',
          height: '420px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(219, 234, 254, 0.7) 0%, rgba(238, 242, 255, 0.4) 50%, transparent 75%)',
          filter: 'blur(30px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Decorative Dot Matrix on top right */}
      <div
        className="about-dot-matrix"
        style={{
          position: 'absolute',
          top: '35px',
          right: '45px',
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 6px)',
          gap: '12px',
          opacity: 0.35,
          pointerEvents: 'none',
          zIndex: 1,
        }}
      >
        {Array.from({ length: 15 }).map((_, i) => (
          <span
            key={i}
            style={{
              width: '5px',
              height: '5px',
              borderRadius: '50%',
              backgroundColor: '#2563EB',
            }}
          />
        ))}
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="about-editorial-wrap">
          {/* Section Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              color: '#2563EB',
              fontSize: '0.82rem',
              fontWeight: 800,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              fontFamily: 'var(--font-display)',
              marginBottom: '14px',
            }}
          >
            <span style={{ width: '22px', height: '2px', background: '#2563EB', display: 'inline-block' }} />
            ABOUT ME
          </div>

          {/* Display Headline */}
          <h2
            style={{
              fontSize: 'clamp(2.3rem, 4.2vw, 3.6rem)',
              fontWeight: 900,
              color: '#0F172A',
              letterSpacing: '-0.035em',
              lineHeight: 1.15,
              margin: '0 0 18px 0',
            }}
          >
            Bridging Business Requirements &amp;{' '}
            <br className="about-title-break" />
            <span
              style={{
                background: 'linear-gradient(135deg, #2563EB 0%, #4F46E5 50%, #7C3AED 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Digital Solutions
            </span>
          </h2>

          {/* Sub-headline / Core Value Proposition */}
          <p
            style={{
              fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)',
              fontWeight: 600,
              color: '#334155',
              lineHeight: 1.55,
              maxWidth: '780px',
              margin: '0 0 18px 0',
            }}
          >
            Turning business needs into clear requirements, efficient processes, and practical digital solutions.
          </p>

          {/* Narrative Body Description */}
          <p
            style={{
              fontSize: '1rem',
              color: '#475569',
              lineHeight: 1.8,
              maxWidth: '820px',
              margin: '0 0 28px 0',
            }}
          >
            Final-year HNDIT student at <strong style={{ color: '#0F172A' }}>SLIATE – ATI Dehiwala</strong> with a focus on{' '}
            <strong style={{ color: '#0F172A' }}>Business Analysis</strong>,{' '}
            <strong style={{ color: '#0F172A' }}>Requirements Engineering</strong>, and{' '}
            <strong style={{ color: '#0F172A' }}>Agile Project Management</strong>. Skilled in requirements elicitation, BPMN/UML modelling, process analysis, SRS/BRD documentation, and full-stack development.
          </p>

          {/* Target Opportunities Card & Cursive Note in a Row */}
          <div className="about-target-row">
            {/* Target Opportunities Card */}
            <div className="about-target-card">
              <div className="about-target-icon-box">
                <Briefcase size={22} />
              </div>
              <div>
                <span className="about-target-label">
                  TARGET OPPORTUNITIES
                </span>
                <p className="about-target-title">
                  Business Analyst Intern <span style={{ color: '#3B82F6', margin: '0 4px' }}>•</span> Project Management Intern
                </p>
              </div>
            </div>

            {/* Cursive Handwritten Annotation Note */}
            <div className="about-cursive-note-wrapper">
              <div className="about-cursive-text">
                Business<br />
                Analysis<br />
                Project Management<br />
                Digital Solutions
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-editorial-wrap {
          max-width: 860px;
          margin: 0 auto;
          position: relative;
        }

        .about-target-row {
          display: flex;
          align-items: center;
          gap: 32px;
          flex-wrap: wrap;
          margin-top: 10px;
        }

        /* Target Opportunities Card */
        .about-target-card {
          background: linear-gradient(135deg, #EFF6FF 0%, #EEF2FF 100%);
          border: 1px solid rgba(191, 219, 254, 0.7);
          border-radius: 18px;
          padding: 18px 24px;
          display: flex;
          align-items: center;
          gap: 16px;
          box-shadow: 0 4px 18px rgba(37, 99, 235, 0.05);
          max-width: 540px;
        }

        .about-target-icon-box {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          background: #DBEAFE;
          color: #2563EB;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 2px 8px rgba(37, 99, 235, 0.12);
        }

        .about-target-label {
          display: block;
          font-family: var(--font-display);
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #2563EB;
          margin-bottom: 2px;
        }

        .about-target-title {
          font-size: clamp(0.92rem, 1.4vw, 1.05rem);
          font-weight: 800;
          color: #0F172A;
          margin: 0;
          line-height: 1.35;
        }

        /* Cursive Note */
        .about-cursive-note-wrapper {
          padding-left: 10px;
        }

        .about-cursive-text {
          font-family: var(--font-hand), 'Caveat', cursive, sans-serif;
          font-size: 1.5rem;
          font-weight: 700;
          color: #3B82F6;
          line-height: 1.22;
          transform: rotate(-6deg);
          display: inline-block;
          letter-spacing: 0.02em;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .about-title-break {
            display: none;
          }
          .about-target-row {
            gap: 20px;
          }
        }

        @media (max-width: 600px) {
          .about-target-card {
            padding: 16px;
            width: 100%;
          }
          .about-target-icon-box {
            width: 42px;
            height: 42px;
          }
          .about-cursive-note-wrapper {
            padding-left: 0;
            width: 100%;
          }
          .about-dot-matrix {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
