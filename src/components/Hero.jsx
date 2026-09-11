import React from 'react';
import HeroBlockchainCanvas from './HeroBlockchainCanvas';
import DeveloperWorkstation from './DeveloperWorkstation';

export default function Hero() {
  return (
    <section
      id="home"
      className="hero-woujoud-section"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: '130px',
        paddingBottom: '40px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Topological Sine-Wave Line Grid Canvas Background */}
      <HeroBlockchainCanvas />

      <div className="container" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
        {/* Top Left Main Heading & Tagline Block (Matching Woujoud Interface) */}
        <div className="hero-woujoud-header">
          {/* Vertical Purple Accent Indicator Bar */}
          <div className="hero-woujoud-indicator">
            <span className="indicator-dot" />
            <div className="indicator-line" />
          </div>

          <div className="hero-woujoud-title-block">
            <h1 className="hero-woujoud-main-title">
              Hi, I'm <span className="woujoud-gradient-text">Rashminda</span>
            </h1>
            <h2 className="hero-woujoud-subtitle">
              Software Engineer & HNDIT Undergraduate,
            </h2>
            <p className="hero-woujoud-tagline">
              bridging tech innovation, fullstack engineering and scalable solutions
            </p>
          </div>
        </div>

        {/* Center Interactive Developer Workstation Setup (Monitor, Code, RGB Tower PC, Desk & Scroll Mouse) */}
        <DeveloperWorkstation />
      </div>

      <style>{`
        .hero-woujoud-header {
          display: flex;
          align-items: flex-start;
          gap: 20px;
          text-align: left;
          max-width: 900px;
          margin-bottom: 10px;
        }

        .hero-woujoud-indicator {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          padding-top: 14px;
        }

        .indicator-dot {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: #915eff;
          box-shadow: 0 0 16px #915eff;
        }

        .indicator-line {
          width: 4px;
          height: 120px;
          background: linear-gradient(180deg, #915eff 0%, rgba(145, 94, 255, 0.05) 100%);
          border-radius: 2px;
        }

        .hero-woujoud-title-block {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .hero-woujoud-main-title {
          font-size: clamp(3rem, 5.5vw, 4.8rem);
          font-weight: 900;
          line-height: 1.1;
          letter-spacing: -0.03em;
          color: var(--text-primary);
        }

        .woujoud-gradient-text {
          background: linear-gradient(135deg, #915eff 0%, #a855f7 40%, #06b6d4 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-woujoud-subtitle {
          font-size: clamp(1.4rem, 2.8vw, 2.2rem);
          font-weight: 700;
          color: var(--text-primary);
          line-height: 1.25;
        }

        .hero-woujoud-tagline {
          font-size: clamp(1.1rem, 2vw, 1.6rem);
          font-weight: 600;
          color: var(--text-secondary);
          line-height: 1.35;
          max-width: 780px;
        }

        @media (max-width: 768px) {
          .hero-woujoud-indicator {
            display: none;
          }

          .hero-woujoud-header {
            text-align: center;
            justify-content: center;
          }

          .hero-woujoud-title-block {
            align-items: center;
          }
        }
      `}</style>
    </section>
  );
}
