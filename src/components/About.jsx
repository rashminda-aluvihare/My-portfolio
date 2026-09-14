import React from 'react';
import aboutProfileImg from '../assets/image34354.jpeg';

/**
 * About Component
 * Re-designed to precisely match the user's reference design:
 * Left side: Geometric portrait composition with concentric arches, dot matrix, striped circle, and bottom podium card.
 * Right side: Editorial "About Me" with Personal Profile, Objective timeline nodes, and Values.
 */
export default function About() {
  const objectives = [
    'Translate complex business requirements and banking workflows into practical, high-impact digital solutions.',
    'Bridge the communication gap between business stakeholders, operational teams, and software developers.',
    'Deliver rigorous SRS, BRD, and BPMN 2.0 process models for reliable enterprise and FinTech platforms.',
  ];

  const values = [
    'Analytical Rigour & Process Precision in all financial models and requirement specifications.',
    'Stakeholder-Centric Collaboration with an adaptive Agile and Scrum mindset.',
    'Continuous Professional Growth across modern digital banking systems and project governance.',
  ];

  return (
    <section
      id="about"
      className="section section-light about-custom-section"
      style={{
        position: 'relative',
        overflow: 'hidden',
        padding: '95px 0',
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="about-custom-grid">
          {/* ── Left Column: Geometric Modern Portrait Composition ── */}
          <div className="about-visual-column">
            <div className="about-portrait-stage">
              {/* Geometric Accent 1: Triangular / Diamond Dot Grid (Top Left) */}
              <div className="about-geom-dots" aria-hidden="true">
                {[...Array(20)].map((_, i) => (
                  <span key={i} className="geom-dot" />
                ))}
              </div>

              {/* Geometric Accent 2: Diagonal Striped Circle (Top Right) */}
              <div className="about-geom-striped-circle" aria-hidden="true" />

              {/* Geometric Accent 3: Blue Plus / Cross Markers */}
              <div className="about-geom-cross cross-top-right" aria-hidden="true">×</div>
              <div className="about-geom-cross cross-bottom-left" aria-hidden="true">×</div>
              <div className="about-geom-cross cross-bottom-right" aria-hidden="true">+</div>

              {/* Bold Arch / Circular Gradient Backdrop behind portrait */}
              <div className="about-arch-backdrop" />
              <div className="about-arch-ring" />

              {/* Portrait Frame & Image */}
              <div className="about-portrait-frame">
                <img
                  src={aboutProfileImg}
                  alt="Rashminda Aluvihare - Business Analyst"
                  className="about-portrait-img"
                  loading="eager"
                />
              </div>

              {/* Bottom Overlapping Curved Podium Card */}
              <div className="about-podium-card">
                <h3 className="about-podium-name">Rashminda Aluvihare</h3>
                <p className="about-podium-role">Business Analyst &amp; Aspiring IT Project Manager</p>
              </div>
            </div>
          </div>

          {/* ── Right Column: Editorial Structured Information ── */}
          <div className="about-content-column">
            {/* Section Main Title */}
            <div className="about-title-wrap">
              <h2 className="about-main-title">About Me</h2>
            </div>

            {/* 1. Personal Profile */}
            <div className="about-content-block">
              <h3 className="about-block-heading">Personal Profile</h3>
              <p className="about-profile-text">
                Final-year HNDIT undergraduate at <strong style={{ color: '#0F172A' }}>SLIATE – ATI Dehiwala</strong> and{' '}
                <strong style={{ color: '#0F172A' }}>IBSL DBF</strong> diploma holder with practical experience in commercial banking operations at People's Bank. Specializing in Requirements Engineering, BPMN/UML workflow modeling, SRS/BRD documentation, and Agile project coordination to bridge business vision with software delivery.
              </p>
            </div>

            {/* 2. Objective */}
            <div className="about-content-block">
              <h3 className="about-block-heading">Objective</h3>
              <div className="about-timeline-list">
                {objectives.map((obj, i) => (
                  <div key={i} className="about-timeline-item">
                    <div className="about-timeline-marker">
                      <span className="timeline-node node-blue" />
                      {i < objectives.length - 1 && <span className="timeline-connector" />}
                    </div>
                    <div className="about-timeline-content">
                      <p>{obj}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Values */}
            <div className="about-content-block">
              <h3 className="about-block-heading">Values</h3>
              <div className="about-timeline-list">
                {values.map((val, i) => (
                  <div key={i} className="about-timeline-item">
                    <div className="about-timeline-marker">
                      <span className="timeline-node node-indigo" />
                      {i < values.length - 1 && <span className="timeline-connector" />}
                    </div>
                    <div className="about-timeline-content">
                      <p>{val}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-custom-section {
          background-color: transparent;
        }

        .about-custom-grid {
          display: grid;
          grid-template-columns: 0.95fr 1.05fr;
          gap: 50px;
          align-items: center;
        }

        /* ── Left Side Portrait Stage ── */
        .about-visual-column {
          display: flex;
          justifyContent: center;
          align-items: center;
          position: relative;
        }

        .about-portrait-stage {
          position: relative;
          width: 100%;
          max-width: 440px;
          height: 520px;
          display: flex;
          align-items: flex-end;
          justify-content: center;
        }

        /* Geometric Accents */
        .about-geom-dots {
          position: absolute;
          top: 15px;
          left: 5px;
          display: grid;
          grid-template-columns: repeat(4, 8px);
          gap: 12px;
          opacity: 0.45;
          z-index: 1;
        }

        .geom-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #2563EB;
        }

        .about-geom-striped-circle {
          position: absolute;
          top: 25px;
          right: 15px;
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: repeating-linear-gradient(
            -45deg,
            rgba(37, 99, 235, 0.45),
            rgba(37, 99, 235, 0.45) 2px,
            transparent 2px,
            transparent 9px
          );
          z-index: 1;
        }

        .about-geom-cross {
          position: absolute;
          font-family: var(--font-display);
          font-weight: 900;
          color: #2563EB;
          font-size: 1.35rem;
          line-height: 1;
          opacity: 0.55;
          z-index: 2;
          pointer-events: none;
        }

        .cross-top-right {
          top: 120px;
          right: -10px;
          transform: rotate(15deg);
        }

        .cross-bottom-left {
          bottom: 120px;
          left: 5px;
          font-size: 1.5rem;
          transform: rotate(-10deg);
        }

        .cross-bottom-right {
          bottom: 75px;
          right: 25px;
          font-size: 1.4rem;
        }

        /* Arch / Circular Backdrop */
        .about-arch-backdrop {
          position: absolute;
          top: 30px;
          left: 30px;
          right: 30px;
          bottom: 50px;
          border-radius: 200px 200px 100px 100px;
          background: linear-gradient(145deg, #2563EB 0%, #4F46E5 60%, #7C3AED 100%);
          box-shadow: 0 20px 45px rgba(37, 99, 235, 0.22);
          z-index: 1;
        }

        .about-arch-ring {
          position: absolute;
          top: 12px;
          left: 12px;
          right: 12px;
          bottom: 32px;
          border-radius: 210px 210px 110px 110px;
          border: 2px dashed rgba(37, 99, 235, 0.3);
          z-index: 1;
        }

        /* Portrait Frame & Photo */
        .about-portrait-frame {
          position: relative;
          z-index: 2;
          width: 86%;
          height: 90%;
          border-radius: 180px 180px 30px 30px;
          overflow: hidden;
          display: flex;
          align-items: flex-end;
          justify-content: center;
        }

        .about-portrait-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 20%;
          display: block;
          filter: contrast(1.02) brightness(1.01);
        }

        /* Bottom Curved Podium Card */
        .about-podium-card {
          position: absolute;
          bottom: 0px;
          left: 50%;
          transform: translateX(-50%);
          width: 92%;
          background: #FFFFFF;
          border: 1px solid rgba(226, 232, 240, 0.95);
          border-radius: 24px;
          padding: 16px 20px;
          text-align: center;
          box-shadow: 0 12px 32px rgba(15, 23, 42, 0.08);
          z-index: 5;
        }

        .about-podium-name {
          font-family: var(--font-display);
          font-size: 1.35rem;
          font-weight: 900;
          color: #0F172A;
          letter-spacing: -0.025em;
          margin: 0;
        }

        .about-podium-role {
          font-family: var(--font-body);
          font-size: 0.84rem;
          font-style: italic;
          color: #475569;
          font-weight: 600;
          margin: 3px 0 0 0;
        }

        /* ── Right Side Content Column ── */
        .about-content-column {
          display: flex;
          flex-direction: column;
          gap: 26px;
        }

        .about-title-wrap {
          margin-bottom: 2px;
        }

        .about-main-title {
          font-size: clamp(2.3rem, 4.4vw, 3.4rem);
          font-weight: 900;
          color: #0F172A;
          letter-spacing: -0.035em;
          line-height: 1.12;
          margin: 0;
        }

        .about-content-block {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .about-block-heading {
          font-size: 1.22rem;
          font-weight: 800;
          color: #0F172A;
          letter-spacing: -0.02em;
          margin: 0;
        }

        .about-profile-text {
          font-size: 0.98rem;
          color: #475569;
          line-height: 1.72;
          margin: 0;
        }

        /* Timeline / Connected Nodes */
        .about-timeline-list {
          display: flex;
          flex-direction: column;
          margin-top: 4px;
        }

        .about-timeline-item {
          display: flex;
          align-items: stretch;
          gap: 14px;
        }

        .about-timeline-marker {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 16px;
          flex-shrink: 0;
        }

        .timeline-node {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          margin-top: 5px;
          flex-shrink: 0;
        }

        .node-blue {
          background: #2563EB;
          box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.18);
        }

        .node-indigo {
          background: #4F46E5;
          box-shadow: 0 0 0 4px rgba(79, 70, 229, 0.18);
        }

        .timeline-connector {
          width: 2px;
          background: rgba(203, 213, 225, 0.8);
          flex-grow: 1;
          margin: 4px 0;
        }

        .about-timeline-content {
          padding-bottom: 12px;
        }

        .about-timeline-content p {
          font-size: 0.92rem;
          color: #334155;
          line-height: 1.55;
          margin: 0;
          font-weight: 500;
        }

        /* Responsive */
        @media (max-width: 960px) {
          .about-custom-grid {
            grid-template-columns: 1fr;
            gap: 46px;
          }
          .about-portrait-stage {
            max-width: 380px;
            height: 460px;
          }
        }

        @media (max-width: 600px) {
          .about-portrait-stage {
            max-width: 320px;
            height: 410px;
          }
          .about-podium-name {
            font-size: 1.18rem;
          }
          .about-podium-role {
            font-size: 0.78rem;
          }
          .about-geom-striped-circle {
            width: 60px;
            height: 60px;
          }
        }
      `}</style>
    </section>
  );
}
