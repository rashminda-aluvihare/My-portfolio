import React from 'react';
import { ArrowRight, Briefcase, Landmark, FileText, Rocket, GitFork, RefreshCw, Layers, BarChart2, Send } from 'lucide-react';
import profileImg from '../assets/profile.jpg';
import HeroDotsCanvas from './HeroDotsCanvas';

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        minHeight: '92vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: 'transparent',
        paddingTop: '115px',
        paddingBottom: '60px',
      }}
    >
      {/* Interactive Micro-Dots Background Particle Animation */}
      <HeroDotsCanvas />

      {/* Soft Ambient Background Glows */}
      <div
        className="hero-ambient-glow-1"
        style={{
          position: 'absolute',
          top: '-10%',
          left: '-5%',
          width: '550px',
          height: '550px',
          borderRadius: '50%',
          filter: 'blur(50px)',
          pointerEvents: 'none',
        }}
      />
      <div
        className="hero-ambient-glow-2"
        style={{
          position: 'absolute',
          bottom: '-10%',
          right: '5%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="hero-grid-layout">
          {/* Left Column: Title, Subtitle, Capability Pills, CTA Buttons */}
          <div className="hero-left-content">
            {/* Top Status & Badge Row */}
            <div className="hero-top-status-row">
              <div className="hero-badge-pill">
                <FileText size={15} className="hero-badge-icon" />
                <span>BUSINESS ANALYST</span>
              </div>
              <div className="hero-status-indicator">
                <span className="hero-status-pulse-dot" />
                <span className="hero-status-text">Open to Opportunities</span>
              </div>
            </div>

            {/* Main Headline: Rashminda Aluvihare */}
            <h1 className="hero-headline-title">
              <span className="hero-first-name">Rashminda</span>
              <span className="hero-last-name-gradient">Aluvihare</span>
            </h1>

            {/* Narrative Description */}
            <p className="hero-description-text">
              Turning business requirements
              <br className="hero-desc-br" />
              into practical digital solutions
              <br className="hero-desc-br" />
              for a{' '}
              <span className="hero-highlight-phrase">
                better tomorrow.
                <svg className="phrase-underline-curve" viewBox="0 0 160 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 9C45 3 115 3 158 8.5" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />
                </svg>
              </span>
            </p>

            {/* 3 Domain & Capability Badges */}
            <div className="hero-capability-row">
              <div className="hero-pill-item hero-pill-blue">
                <BarChart2 size={16} className="hero-pill-icon-blue" />
                <span>Business Analysis</span>
              </div>
              <div className="hero-pill-item hero-pill-indigo">
                <Landmark size={16} className="hero-pill-icon-indigo" />
                <span>Banking Technology</span>
              </div>
              <div className="hero-pill-item hero-pill-purple">
                <GitFork size={16} className="hero-pill-icon-purple" />
                <span>Project Management</span>
              </div>
            </div>

            {/* Primary & Secondary Action Buttons Row */}
            <div className="hero-actions-row">
              <a href="#projects" className="hero-btn-primary">
                <span>View My Projects</span>
                <ArrowRight size={18} />
              </a>
              <a href="#contact" className="hero-btn-secondary">
                <span>Let's Connect</span>
                <Send size={15} />
              </a>
            </div>
          </div>

          {/* Center/Top Floating Cursive Annotations */}
          <div className="hero-handwritten-note-center">
            <div className="cursive-tag-text">
              Analyze<br />Plan<br />Build<br />Grow
            </div>
            <svg className="cursive-curve-line" width="60" height="40" viewBox="0 0 60 40" fill="none">
              <path d="M5 5 C 25 35, 45 10, 55 35" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeDasharray="3 3" />
            </svg>
          </div>

          {/* Right Column: Portrait Photo with Fluid Organic Blob + 4 Floating Glass Cards */}
          <div className="hero-right-visual">
            {/* Top-Right Cursive Annotation with Arrow */}
            <div className="hero-impact-note">
              <span>From Requirements to Real Impact</span>
              <svg width="40" height="24" viewBox="0 0 40 24" fill="none">
                <path d="M5 20 C 15 5, 25 5, 35 15" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" />
                <path d="M28 14 L35 15 L32 22" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            {/* Main Portrait Frame with Organic Blue Fluid Shape Backdrop */}
            <div className="hero-portrait-wrapper">
              <div className="hero-fluid-blob-backdrop" />
              <img
                src={profileImg}
                alt="Rashminda Aluvihare - Business Analyst & Project Manager"
                className="hero-portrait-image"
                loading="eager"
              />
            </div>

            {/* 4 Capability Cards Around Portrait */}
            <div className="hero-floating-cards-group">
              {/* Card 1: Requirements Analysis (Top Left) */}
              <div className="hero-floating-card card-pos-top-left float-card-1">
                <div className="floating-card-icon icon-bg-blue">
                  <FileText size={18} />
                </div>
                <div className="floating-card-text">
                  <strong>Requirements</strong>
                  <span>Analysis</span>
                </div>
              </div>

              {/* Card 2: BPMN / UML (Bottom Left) */}
              <div className="hero-floating-card card-pos-bottom-left float-card-2">
                <div className="floating-card-icon icon-bg-indigo">
                  <GitFork size={18} />
                </div>
                <div className="floating-card-text">
                  <strong>BPMN / UML</strong>
                </div>
              </div>

              {/* Card 3: Agile / Scrum (Top Right) */}
              <div className="hero-floating-card card-pos-top-right float-card-3">
                <div className="floating-card-icon icon-bg-sky">
                  <RefreshCw size={18} />
                </div>
                <div className="floating-card-text">
                  <strong>Agile / Scrum</strong>
                </div>
              </div>

              {/* Card 4: Banking Operations (Bottom Right) */}
              <div className="hero-floating-card card-pos-bottom-right float-card-4">
                <div className="floating-card-icon icon-bg-navy">
                  <Landmark size={18} />
                </div>
                <div className="floating-card-text">
                  <strong>Banking</strong>
                  <span>Operations</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-ambient-glow-1 {
          background: radial-gradient(circle, rgba(219, 234, 254, 0.65) 0%, rgba(255, 255, 255, 0) 70%);
        }
        [data-theme="dark"] .hero-ambient-glow-1 {
          background: radial-gradient(circle, rgba(37, 99, 235, 0.18) 0%, rgba(11, 15, 25, 0) 70%);
        }
        .hero-ambient-glow-2 {
          background: radial-gradient(circle, rgba(237, 233, 254, 0.55) 0%, rgba(255, 255, 255, 0) 70%);
        }
        [data-theme="dark"] .hero-ambient-glow-2 {
          background: radial-gradient(circle, rgba(124, 58, 237, 0.16) 0%, rgba(11, 15, 25, 0) 70%);
        }

        .hero-grid-layout {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          align-items: center;
          gap: 30px;
          position: relative;
        }

        .hero-left-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 16px;
          z-index: 3;
        }

        /* Top Status Row: Pill Badge + Open to Opportunities */
        .hero-top-status-row {
          display: inline-flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        .hero-badge-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 16px;
          background: rgba(239, 246, 255, 0.7);
          border: 1.5px solid rgba(59, 130, 246, 0.35);
          border-radius: 999px;
          color: #2563EB;
          font-family: var(--font-display);
          font-size: 0.76rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          box-shadow: 0 2px 10px rgba(37, 99, 235, 0.06);
          transition: all 0.25s ease;
        }

        .hero-badge-pill:hover {
          border-color: rgba(37, 99, 235, 0.6);
          background: rgba(239, 246, 255, 0.95);
        }

        .hero-badge-icon {
          color: #2563EB;
        }

        .hero-status-indicator {
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .hero-status-pulse-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #10B981;
          box-shadow: 0 0 10px rgba(16, 185, 129, 0.7);
          animation: statusPulse 2s infinite ease-in-out;
        }

        @keyframes statusPulse {
          0%, 100% { opacity: 1; transform: scale(1); box-shadow: 0 0 8px rgba(16, 185, 129, 0.7); }
          50% { opacity: 0.65; transform: scale(1.25); box-shadow: 0 0 14px rgba(16, 185, 129, 0.9); }
        }

        .hero-status-text {
          font-family: var(--font-display);
          font-size: 0.85rem;
          font-weight: 500;
          color: #475569;
          letter-spacing: -0.01em;
        }

        /* Large Display Titles */
        .hero-headline-title {
          font-size: clamp(3.2rem, 5.8vw, 5.2rem);
          font-weight: 900;
          line-height: 1.02;
          letter-spacing: -0.04em;
          margin: 0;
          display: flex;
          flex-direction: column;
        }

        .hero-first-name {
          color: #0F172A;
          font-weight: 900;
        }

        .hero-last-name-gradient {
          font-weight: 900;
          background: linear-gradient(90deg, #0070F3 0%, #2563EB 28%, #6366F1 62%, #8B5CF6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Narrative Description */
        .hero-description-text {
          font-size: clamp(1.05rem, 1.55vw, 1.22rem);
          font-weight: 500;
          color: #334155;
          line-height: 1.42;
          max-width: 520px;
          margin: 0;
          font-family: var(--font-body);
        }

        .hero-desc-br {
          display: block;
        }

        .hero-highlight-phrase {
          position: relative;
          display: inline-block;
          color: #7C3AED;
          font-weight: 800;
        }

        .phrase-underline-curve {
          position: absolute;
          left: 0;
          bottom: -7px;
          width: 100%;
          height: 10px;
          color: #6366F1;
          overflow: visible;
          pointer-events: none;
        }

        /* Capability Badges Row */
        .hero-capability-row {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin: 2px 0;
        }

        .hero-pill-item {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 8px 18px;
          border-radius: 999px;
          background: rgba(248, 250, 252, 0.88);
          border: 1px solid rgba(226, 232, 240, 0.95);
          font-family: var(--font-display);
          font-size: 0.84rem;
          font-weight: 600;
          color: #1E293B;
          box-shadow: 0 2px 8px rgba(15, 23, 42, 0.04);
          transition: all 0.25s ease;
        }

        .hero-pill-item:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(37, 99, 235, 0.12);
          border-color: rgba(37, 99, 235, 0.3);
        }

        .hero-pill-icon-blue { color: #2563EB; }
        .hero-pill-icon-indigo { color: #7C3AED; }
        .hero-pill-icon-purple { color: #6366F1; }

        /* Primary & Secondary Action Buttons */
        .hero-actions-row {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 6px;
        }

        .hero-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 13px 32px;
          background: linear-gradient(135deg, #1E6BFF 0%, #4338CA 50%, #7C3AED 100%);
          color: #FFFFFF !important;
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 0.96rem;
          border-radius: 999px;
          text-decoration: none;
          box-shadow: 0 10px 24px -2px rgba(37, 99, 235, 0.42), 0 4px 12px rgba(124, 58, 237, 0.25);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .hero-btn-primary:hover {
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 14px 32px rgba(37, 99, 235, 0.55);
        }

        .hero-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 12px 28px;
          background: rgba(255, 255, 255, 0.95);
          border: 1.8px solid #3B82F6;
          color: #2563EB !important;
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 0.96rem;
          border-radius: 999px;
          text-decoration: none;
          box-shadow: 0 4px 14px rgba(37, 99, 235, 0.08);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .hero-btn-secondary:hover {
          transform: translateY(-2px) scale(1.02);
          background: #EFF6FF;
          border-color: #2563EB;
          box-shadow: 0 8px 20px rgba(37, 99, 235, 0.18);
        }

        /* Dark Mode Overrides for Left Section */
        [data-theme="dark"] .hero-badge-pill {
          background: rgba(37, 99, 235, 0.15);
          border-color: rgba(96, 165, 250, 0.35);
          color: #60A5FA;
        }
        [data-theme="dark"] .hero-badge-icon {
          color: #60A5FA;
        }
        [data-theme="dark"] .hero-status-text {
          color: #94A3B8;
        }
        [data-theme="dark"] .hero-first-name {
          color: #F8FAFC;
        }
        [data-theme="dark"] .hero-description-text {
          color: #CBD5E1;
        }
        [data-theme="dark"] .hero-highlight-phrase {
          color: #A78BFA;
        }
        [data-theme="dark"] .phrase-underline-curve {
          color: #818CF8;
        }
        [data-theme="dark"] .hero-pill-item {
          background: rgba(15, 23, 42, 0.85);
          border-color: rgba(255, 255, 255, 0.1);
          color: #E2E8F0;
        }
        [data-theme="dark"] .hero-pill-item:hover {
          background: rgba(30, 41, 59, 0.95);
          border-color: rgba(96, 165, 250, 0.4);
        }
        [data-theme="dark"] .hero-btn-secondary {
          background: rgba(15, 23, 42, 0.85);
          border-color: #38BDF8;
          color: #38BDF8 !important;
        }
        [data-theme="dark"] .hero-btn-secondary:hover {
          background: rgba(56, 189, 248, 0.12);
          border-color: #60A5FA;
        }

        /* Center Cursive Note */
        .hero-handwritten-note-center {
          position: absolute;
          left: 45%;
          top: 10%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          pointer-events: none;
          z-index: 4;
        }

        .cursive-tag-text {
          font-family: var(--font-hand), 'Caveat', cursive, sans-serif;
          font-size: 1.5rem;
          font-weight: 700;
          color: #2563EB;
          line-height: 1.15;
          text-align: center;
          transform: rotate(-8deg);
          letter-spacing: 0.02em;
        }

        /* Right Column Visual Area */
        .hero-right-visual {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 520px;
        }

        .hero-impact-note {
          position: absolute;
          top: -15px;
          right: 25px;
          font-family: var(--font-hand), 'Caveat', cursive, sans-serif;
          font-size: 1.3rem;
          font-weight: 700;
          color: #2563EB;
          display: flex;
          flex-direction: column;
          align-items: center;
          transform: rotate(4deg);
          pointer-events: none;
          z-index: 5;
        }

        /* Portrait Photo Frame */
        .hero-portrait-wrapper {
          position: relative;
          width: 360px;
          height: 440px;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
        }

        .hero-fluid-blob-backdrop {
          position: absolute;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #3B82F6 0%, #6366F1 50%, #818CF8 100%);
          border-radius: 62% 38% 70% 30% / 45% 58% 42% 55%;
          box-shadow: 0 20px 50px rgba(59, 130, 246, 0.28);
          animation: blobPulse 8s ease-in-out infinite alternate;
        }

        @keyframes blobPulse {
          0% { border-radius: 62% 38% 70% 30% / 45% 58% 42% 55%; }
          100% { border-radius: 40% 60% 35% 65% / 58% 40% 60% 42%; }
        }

        .hero-portrait-image {
          position: relative;
          width: 340px;
          height: 420px;
          object-fit: cover;
          object-position: center top;
          border-radius: 56% 44% 65% 35% / 42% 54% 46% 58%;
          z-index: 2;
          box-shadow: 0 16px 36px rgba(15, 23, 42, 0.15);
        }

        /* 4 Floating Glass Cards */
        .hero-floating-card {
          position: absolute;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 18px;
          background: rgba(255, 255, 255, 0.94);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(226, 232, 240, 0.95);
          border-radius: 18px;
          box-shadow: 0 14px 34px rgba(15, 23, 42, 0.09), 0 2px 8px rgba(37, 99, 235, 0.06);
          z-index: 6;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .hero-floating-card:hover {
          transform: translateY(-4px) scale(1.03);
          box-shadow: 0 20px 40px rgba(37, 99, 235, 0.15);
          border-color: rgba(37, 99, 235, 0.3);
        }

        .floating-card-icon {
          width: 38px;
          height: 38px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .icon-bg-blue { background: #EFF6FF; color: #2563EB; }
        .icon-bg-indigo { background: #F5F3FF; color: #7C3AED; }
        .icon-bg-sky { background: #F0F9FF; color: #0284C7; }
        .icon-bg-navy { background: #EEF2FF; color: #1E40AF; }

        .floating-card-text {
          display: flex;
          flex-direction: column;
          font-family: var(--font-display);
          line-height: 1.25;
        }

        .floating-card-text strong {
          font-size: 0.86rem;
          font-weight: 800;
          color: #0F172A;
        }

        .floating-card-text span {
          font-size: 0.76rem;
          color: #64748B;
          font-weight: 600;
        }

        /* Specific Positions */
        .card-pos-top-left {
          top: 15px;
          left: -40px;
        }

        .card-pos-bottom-left {
          bottom: 45px;
          left: -50px;
        }

        .card-pos-top-right {
          top: 70px;
          right: -30px;
        }

        .card-pos-bottom-right {
          bottom: 25px;
          right: -35px;
        }

        /* Subtle Float Micro-Animations */
        .float-card-1 { animation: floatCard 5s ease-in-out infinite; }
        .float-card-2 { animation: floatCard 6s ease-in-out 1s infinite; }
        .float-card-3 { animation: floatCard 5.5s ease-in-out 0.5s infinite; }
        .float-card-4 { animation: floatCard 6.5s ease-in-out 1.5s infinite; }

        @keyframes floatCard {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-7px); }
        }

        /* Responsive Layout */
        @media (max-width: 1080px) {
          .hero-handwritten-note-center {
            display: none;
          }
          .hero-grid-layout {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .hero-left-content {
            align-items: center;
            text-align: center;
          }
          .hero-capability-row {
            justify-content: center;
          }
          .hero-right-visual {
            min-height: 480px;
          }
          .card-pos-top-left { left: 0; }
          .card-pos-bottom-left { left: -10px; }
          .card-pos-top-right { right: 0; }
          .card-pos-bottom-right { right: -10px; }
        }

        @media (max-width: 640px) {
          #home {
            padding-top: 86px !important;
            padding-bottom: 40px !important;
            min-height: auto !important;
          }
          .hero-top-status-row {
            justify-content: center;
          }
          .hero-headline-title {
            font-size: clamp(2.3rem, 10vw, 3.4rem);
          }
          .hero-desc-br {
            display: inline;
          }
          .hero-description-text {
            font-size: 0.98rem;
          }
          .hero-pill-item {
            font-size: 0.78rem;
            padding: 6px 14px;
          }
          .hero-actions-row {
            justify-content: center;
            width: 100%;
          }
          .hero-btn-primary, .hero-btn-secondary {
            padding: 12px 24px;
            font-size: 0.92rem;
          }
          .hero-right-visual {
            min-height: auto;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 16px;
          }
          .hero-portrait-wrapper {
            width: min(260px, 75vw);
            height: min(320px, 92vw);
          }
          .hero-portrait-image {
            width: min(240px, 70vw);
            height: min(300px, 86vw);
          }
          .hero-floating-cards-group {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            width: 100%;
            max-width: 340px;
            justify-content: center;
          }
          .hero-floating-card {
            position: static !important;
            animation: none !important;
            padding: 8px 12px !important;
            flex: 1 1 calc(50% - 10px);
            min-width: 140px;
            box-shadow: 0 4px 14px rgba(15, 23, 42, 0.05) !important;
          }
          .floating-card-icon {
            width: 32px;
            height: 32px;
          }
          .floating-card-text strong {
            font-size: 0.8rem;
          }
          .floating-card-text span {
            font-size: 0.7rem;
          }
          .hero-impact-note { display: none !important; }
        }
      `}</style>
    </section>
  );
}
