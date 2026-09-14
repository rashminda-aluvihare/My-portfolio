import React from 'react';
import {
  Briefcase,
  GraduationCap,
  Target,
  Globe,
  FileText,
  Users,
  GitFork,
  Landmark,
  FileSpreadsheet,
  Code2,
  Search,
  RefreshCw,
} from 'lucide-react';

export default function About() {
  const competencies = [
    { label: 'Requirements Elicitation', icon: <FileText size={15} /> },
    { label: 'Stakeholder Coordination', icon: <Users size={15} /> },
    { label: 'BPMN & UML Modelling', icon: <GitFork size={15} /> },
    { label: 'Commercial Banking', icon: <Landmark size={15} /> },
    { label: 'SRS & BRD Documentation', icon: <FileSpreadsheet size={15} /> },
    { label: 'Full-Stack Development', icon: <Code2 size={15} /> },
    { label: 'Process & Gap Analysis', icon: <Search size={15} /> },
    { label: 'Agile & Scrum', icon: <RefreshCw size={15} /> },
  ];

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
      {/* Top-Right Decorative Fluid Gradient & Dot Matrix (matching reference image) */}
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
        <div className="about-editorial-grid">
          {/* Left Column: Narrative, Intro, Target Banner, Cursive Note */}
          <div className="about-left-column">
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
                fontSize: 'clamp(1.05rem, 1.8vw, 1.2rem)',
                fontWeight: 600,
                color: '#334155',
                lineHeight: 1.55,
                maxWidth: '560px',
                margin: '0 0 18px 0',
              }}
            >
              Turning business needs into clear requirements, efficient processes, and practical digital solutions.
            </p>

            {/* Narrative Body Description */}
            <p
              style={{
                fontSize: '0.96rem',
                color: '#475569',
                lineHeight: 1.75,
                maxWidth: '560px',
                margin: '0 0 26px 0',
              }}
            >
              Final-year HNDIT student at <strong style={{ color: '#0F172A' }}>SLIATE – ATI Dehiwala</strong> with a focus on{' '}
              <strong style={{ color: '#0F172A' }}>Business Analysis</strong>,{' '}
              <strong style={{ color: '#0F172A' }}>Requirements Engineering</strong>, and{' '}
              <strong style={{ color: '#0F172A' }}>Agile Project Management</strong>. Skilled in requirements elicitation, BPMN/UML modelling, process analysis, SRS/BRD documentation, and full-stack development.
            </p>

            {/* Target Opportunities Card (Exact match to reference) */}
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

          {/* Right Column: Sleek White Information & Competencies Card (Exact match to reference) */}
          <div className="about-right-card">
            {/* 1. Education Item */}
            <div className="about-info-row">
              <div className="about-info-icon-circle icon-circle-blue">
                <GraduationCap size={22} />
              </div>
              <div style={{ flex: 1 }}>
                <span className="about-info-label label-blue">EDUCATION</span>
                <h4 className="about-info-title">HNDIT – SLIATE</h4>
                <p className="about-info-subtitle">Diploma in Banking &amp; Finance – IBSL</p>
              </div>
            </div>

            <div className="about-row-divider" />

            {/* 2. Domain Focus Item */}
            <div className="about-info-row">
              <div className="about-info-icon-circle icon-circle-emerald">
                <Target size={22} />
              </div>
              <div style={{ flex: 1 }}>
                <span className="about-info-label label-emerald">DOMAIN FOCUS</span>
                <h4 className="about-info-title">
                  Commercial Banking <span style={{ color: '#10B981', margin: '0 4px' }}>•</span> Digital Financial Workflows
                </h4>
              </div>
            </div>

            <div className="about-row-divider" />

            {/* 3. Languages Item */}
            <div className="about-info-row">
              <div className="about-info-icon-circle icon-circle-purple">
                <Globe size={22} />
              </div>
              <div style={{ flex: 1 }}>
                <span className="about-info-label label-purple">LANGUAGES</span>
                <h4 className="about-info-title">
                  English (Professional) <span style={{ color: '#8B5CF6', margin: '0 4px' }}>•</span> Sinhala (Native)
                </h4>
              </div>
            </div>

            <div className="about-row-divider" />

            {/* 4. Key Competencies 2-Column Grid */}
            <div style={{ paddingTop: '4px' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: '#2563EB',
                  fontSize: '0.74rem',
                  fontWeight: 800,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  fontFamily: 'var(--font-display)',
                  marginBottom: '14px',
                }}
              >
                <span style={{ width: '16px', height: '2px', background: '#2563EB', display: 'inline-block' }} />
                KEY COMPETENCIES
              </div>

              <div className="about-competencies-grid">
                {competencies.map((item, idx) => (
                  <div key={idx} className="about-competency-pill">
                    <span className="about-competency-icon">{item.icon}</span>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-editorial-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 40px;
          align-items: center;
        }

        .about-left-column {
          position: relative;
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
          margin-top: 32px;
          padding-left: 20px;
        }

        .about-cursive-text {
          font-family: var(--font-hand), 'Caveat', cursive, sans-serif;
          font-size: 1.55rem;
          font-weight: 700;
          color: #3B82F6;
          line-height: 1.22;
          transform: rotate(-8deg);
          display: inline-block;
          letter-spacing: 0.02em;
        }

        /* Right Big Card */
        .about-right-card {
          background: #FFFFFF;
          border: 1px solid rgba(226, 232, 240, 0.95);
          border-radius: 26px;
          padding: 34px 36px;
          box-shadow: 0 12px 38px rgba(15, 23, 42, 0.05), 0 2px 6px rgba(15, 23, 42, 0.02);
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .about-info-row {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .about-info-icon-circle {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .icon-circle-blue {
          background: #EFF6FF;
          color: #2563EB;
          border: 1.5px solid rgba(191, 219, 254, 0.7);
        }

        .icon-circle-emerald {
          background: #ECFDF5;
          color: #059669;
          border: 1.5px solid rgba(167, 243, 208, 0.7);
        }

        .icon-circle-purple {
          background: #F5F3FF;
          color: #7C3AED;
          border: 1.5px solid rgba(221, 214, 254, 0.7);
        }

        .about-info-label {
          display: block;
          font-family: var(--font-display);
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 2px;
        }

        .label-blue { color: #2563EB; }
        .label-emerald { color: #059669; }
        .label-purple { color: #7C3AED; }

        .about-info-title {
          font-size: 0.98rem;
          font-weight: 800;
          color: #0F172A;
          margin: 0;
          line-height: 1.3;
        }

        .about-info-subtitle {
          font-size: 0.86rem;
          color: #64748B;
          font-weight: 500;
          margin: 2px 0 0 0;
        }

        .about-row-divider {
          height: 1px;
          background: #F1F5F9;
          width: 100%;
        }

        /* 2-Column Competencies Grid */
        .about-competencies-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
        }

        .about-competency-pill {
          background: #F0F5FF;
          border: 1px solid rgba(219, 234, 254, 0.85);
          border-radius: 12px;
          padding: 10px 14px;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.8rem;
          font-weight: 700;
          color: #1E293B;
          font-family: var(--font-display);
          transition: all 0.22s ease;
        }

        .about-competency-pill:hover {
          background: #FFFFFF;
          border-color: #2563EB;
          transform: translateY(-2px);
          box-shadow: 0 4px 14px rgba(37, 99, 235, 0.12);
          color: #2563EB;
        }

        .about-competency-icon {
          color: #2563EB;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        /* Responsive */
        @media (max-width: 980px) {
          .about-editorial-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .about-title-break {
            display: none;
          }
          .about-right-card {
            padding: 26px;
          }
        }

        @media (max-width: 600px) {
          .about-target-card {
            padding: 16px;
          }
          .about-target-icon-box {
            width: 42px;
            height: 42px;
          }
          .about-right-card {
            padding: 20px 16px;
            border-radius: 20px;
          }
          .about-competencies-grid {
            grid-template-columns: 1fr;
          }
          .about-dot-matrix {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
