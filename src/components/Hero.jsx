import React from 'react';
import { ArrowRight, Briefcase, Landmark, FileText, Rocket, GitFork, RefreshCw, Layers, BarChart2, Send, Mail } from 'lucide-react';
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
              <path d="M5 5 C 25 35, 45 10, 55 35" stroke="#2DD4BF" strokeWidth="2" strokeLinecap="round" strokeDasharray="3 3" />
            </svg>
          </div>

          {/* Right Column: Portrait Photo with Fluid Organic Blob + 4 Floating Glass Cards */}
          <div className="hero-right-visual">
            {/* Top-Right Cursive Annotation with Arrow */}
            <div className="hero-impact-note">
              <span>From Requirements to Real Impact</span>
              <svg width="40" height="24" viewBox="0 0 40 24" fill="none">
                <path d="M5 20 C 15 5, 25 5, 35 15" stroke="#2DD4BF" strokeWidth="2" strokeLinecap="round" />
                <path d="M28 14 L35 15 L32 22" stroke="#2DD4BF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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

            {/* Mobile Social Links Row (< 768px only) */}
            <div className="hero-mobile-social-dock">
              <span className="hero-mobile-social-title">Connect With Me</span>
              <div className="hero-mobile-social-icons">
                <a
                  href="https://www.linkedin.com/in/rashminda-aluvihare/"
                  target="_blank"
                  rel="noreferrer"
                  className="hero-mobile-social-btn"
                  aria-label="LinkedIn Profile"
                >
                  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
                <a
                  href="https://github.com/rashminda-aluvihare"
                  target="_blank"
                  rel="noreferrer"
                  className="hero-mobile-social-btn"
                  aria-label="GitHub Profile"
                >
                  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </a>
                <a
                  href="mailto:rashmindaluvihare@gmail.com"
                  className="hero-mobile-social-btn"
                  aria-label="Send Email"
                >
                  <Mail size={20} strokeWidth={2.2} />
                </a>
                <a
                  href="https://wa.me/94779743901?text=Hi%20Rashminda,%20I%20saw%20your%20portfolio!"
                  target="_blank"
                  rel="noreferrer"
                  className="hero-mobile-social-btn"
                  aria-label="WhatsApp Chat"
                >
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-ambient-glow-1 {
          background: radial-gradient(circle, rgba(20, 184, 166, 0.18) 0%, rgba(11, 20, 25, 0) 70%);
        }
        [data-theme="dark"] .hero-ambient-glow-1 {
          background: radial-gradient(circle, rgba(20, 184, 166, 0.18) 0%, rgba(11, 20, 25, 0) 70%);
        }
        .hero-ambient-glow-2 {
          background: radial-gradient(circle, rgba(15, 118, 110, 0.16) 0%, rgba(11, 20, 25, 0) 70%);
        }
        [data-theme="dark"] .hero-ambient-glow-2 {
          background: radial-gradient(circle, rgba(15, 118, 110, 0.16) 0%, rgba(11, 20, 25, 0) 70%);
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
          background: rgba(20, 184, 166, 0.12);
          border: 1.5px solid rgba(20, 184, 166, 0.35);
          border-radius: 999px;
          color: #14B8A6;
          font-family: var(--font-display);
          font-size: 0.76rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          box-shadow: 0 2px 10px rgba(20, 184, 166, 0.08);
          transition: all 0.25s ease;
        }

        .hero-badge-pill:hover {
          border-color: #14B8A6;
          background: rgba(20, 184, 166, 0.2);
        }

        .hero-badge-icon {
          color: #14B8A6;
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
          background: #14B8A6;
          box-shadow: 0 0 10px #14B8A6, 0 0 20px #14B8A6;
          animation: pulseGlow 2s infinite;
        }

        @keyframes statusPulse {
          0%, 100% { opacity: 1; transform: scale(1); box-shadow: 0 0 8px rgba(20, 184, 166, 0.7); }
          50% { opacity: 0.65; transform: scale(1.25); box-shadow: 0 0 14px rgba(20, 184, 166, 0.9); }
        }

        .hero-status-text {
          font-family: var(--font-display);
          font-size: 0.88rem;
          color: #94A3B8;
          font-weight: 600;
        }

        /* Headline Name */
        .hero-headline-title {
          font-family: var(--font-display);
          font-size: clamp(3.2rem, 5.2vw, 5.2rem);
          font-weight: 900;
          line-height: 1.02;
          letter-spacing: -0.035em;
          margin: 0;
          display: flex;
          flex-direction: column;
        }

        .hero-first-name {
          color: #F8FAFC;
        }

        [data-theme="light"] .hero-first-name {
          color: #0F172A;
        }

        .hero-last-name-gradient {
          background: linear-gradient(135deg, #14B8A6 0%, #2DD4BF 55%, #0F766E 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          filter: drop-shadow(0 4px 18px rgba(20, 184, 166, 0.25));
        }

        /* Description */
        .hero-description-text {
          font-size: 1.15rem;
          line-height: 1.55;
          color: #94A3B8;
          font-weight: 500;
          margin: 0;
          max-width: 520px;
        }

        [data-theme="light"] .hero-description-text {
          color: #334155;
        }

        .hero-desc-br {
          display: block;
        }

        .hero-highlight-phrase {
          color: #14B8A6;
          font-weight: 800;
          position: relative;
          display: inline-block;
        }

        .phrase-underline-curve {
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 100%;
          height: 9px;
          color: #2DD4BF;
          overflow: visible;
        }

        /* 3 Pill Badges */
        .hero-capability-row {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
          margin-top: 4px;
        }

        .hero-pill-item {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border-radius: 999px;
          font-family: var(--font-display);
          font-size: 0.82rem;
          font-weight: 700;
          border: 1px solid #1E3A3A;
          background: rgba(17, 28, 34, 0.85);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          transition: all 0.25s ease;
          color: #F8FAFC;
        }

        [data-theme="light"] .hero-pill-item {
          background: rgba(255, 255, 255, 0.9);
          border-color: rgba(226, 232, 240, 0.95);
          color: #0F172A;
        }

        .hero-pill-blue { border-color: rgba(20, 184, 166, 0.35); }
        .hero-pill-indigo { border-color: rgba(15, 118, 110, 0.4); }
        .hero-pill-purple { border-color: rgba(45, 212, 191, 0.35); }

        .hero-pill-icon-blue { color: #14B8A6; }
        .hero-pill-icon-indigo { color: #2DD4BF; }
        .hero-pill-icon-purple { color: #14B8A6; }

        /* Action Buttons */
        .hero-actions-row {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-top: 8px;
        }

        .hero-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: linear-gradient(135deg, #14B8A6 0%, #0F766E 100%);
          color: #FFFFFF;
          font-family: var(--font-display);
          font-size: 0.96rem;
          font-weight: 700;
          padding: 13px 28px;
          border-radius: 999px;
          text-decoration: none;
          box-shadow: 0 8px 24px rgba(20, 184, 166, 0.42);
          transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .hero-btn-primary:hover {
          transform: translateY(-2px) scale(1.03);
          box-shadow: 0 12px 30px rgba(20, 184, 166, 0.55);
        }

        .hero-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(17, 28, 34, 0.85);
          color: #14B8A6;
          font-family: var(--font-display);
          font-size: 0.94rem;
          font-weight: 700;
          padding: 12px 24px;
          border-radius: 999px;
          border: 1px solid rgba(20, 184, 166, 0.35);
          text-decoration: none;
          transition: all 0.25s ease;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }

        [data-theme="light"] .hero-btn-secondary {
          background: rgba(255, 255, 255, 0.9);
          border-color: rgba(20, 184, 166, 0.4);
          color: #0F766E;
        }

        .hero-btn-secondary:hover {
          background: rgba(20, 184, 166, 0.12);
          border-color: #14B8A6;
          transform: translateY(-2px);
        }

        /* Handwritten Center Note */
        .hero-handwritten-note-center {
          position: absolute;
          top: 80px;
          left: 49%;
          transform: translateX(-50%);
          z-index: 4;
          display: flex;
          flex-direction: column;
          align-items: center;
          pointer-events: none;
        }

        .cursive-tag-text {
          font-family: var(--font-hand), 'Caveat', cursive, sans-serif;
          font-size: 1.45rem;
          font-weight: 700;
          line-height: 1.15;
          color: #2DD4BF;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
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
          color: #2DD4BF;
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
          background: linear-gradient(135deg, #14B8A6 0%, #0F766E 50%, #2DD4BF 100%);
          border-radius: 62% 38% 70% 30% / 45% 58% 42% 55%;
          box-shadow: 0 20px 50px rgba(20, 184, 166, 0.28);
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
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.35);
        }

        /* 4 Floating Glass Cards */
        .hero-floating-card {
          position: absolute;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 18px;
          background: rgba(17, 28, 34, 0.94);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid #1E3A3A;
          border-radius: 18px;
          box-shadow: 0 14px 34px rgba(0, 0, 0, 0.45), 0 2px 8px rgba(20, 184, 166, 0.08);
          z-index: 6;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        [data-theme="light"] .hero-floating-card {
          background: rgba(255, 255, 255, 0.95);
          border-color: rgba(226, 232, 240, 0.95);
          box-shadow: 0 10px 30px rgba(15, 23, 42, 0.1);
        }

        [data-theme="light"] .floating-card-text strong {
          color: #0F172A;
        }

        [data-theme="light"] .floating-card-text span {
          color: #64748B;
        }

        .hero-floating-card:hover {
          transform: translateY(-4px) scale(1.03);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.55), 0 0 16px rgba(45, 212, 191, 0.15);
          border-color: #0F766E;
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

        .icon-bg-blue { background: rgba(20, 184, 166, 0.16); color: #14B8A6; }
        .icon-bg-indigo { background: rgba(15, 118, 110, 0.22); color: #2DD4BF; }
        .icon-bg-sky { background: rgba(45, 212, 191, 0.18); color: #2DD4BF; }
        .icon-bg-navy { background: rgba(30, 58, 58, 0.4); color: #14B8A6; }

        .floating-card-text {
          display: flex;
          flex-direction: column;
          font-family: var(--font-display);
          line-height: 1.25;
        }

        .floating-card-text strong {
          font-size: 0.86rem;
          font-weight: 800;
          color: #F8FAFC;
        }

        .floating-card-text span {
          font-size: 0.76rem;
          color: #94A3B8;
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

        /* Default: Mobile Social Dock hidden on Desktop/Laptop/Tablet */
        .hero-mobile-social-dock {
          display: none;
        }

        /* ── TABLET / MEDIUM DESKTOP (768px - 1080px) ── */
        /* Desktops, Laptops, Tabs maintain 2-column layout */
        @media (min-width: 768px) and (max-width: 1080px) {
          .hero-handwritten-note-center {
            display: none;
          }
          .hero-grid-layout {
            grid-template-columns: 1.15fr 0.85fr;
            gap: 20px;
          }
          .hero-portrait-wrapper {
            width: 300px;
            height: 380px;
          }
          .hero-portrait-image {
            width: 285px;
            height: 360px;
          }
          .card-pos-top-left { left: -15px; }
          .card-pos-bottom-left { left: -15px; }
          .card-pos-top-right { right: -15px; }
          .card-pos-bottom-right { right: -15px; }
        }

        /* ── MOBILE SCREENS (< 768px) ONLY ── */
        /* All 7 Mobile Responsiveness guidelines strictly applied */
        @media (max-width: 767px) {
          #home {
            padding-top: 84px !important;
            padding-bottom: 40px !important;
            min-height: auto !important;
          }

          /* 1. Hero Layout – Stack Everything Vertically */
          .hero-grid-layout {
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            gap: 26px !important;
          }

          /* Text Content First */
          .hero-left-content {
            order: 1 !important;
            align-items: center !important;
            text-align: center !important;
            width: 100% !important;
            gap: 15px !important;
          }

          .hero-top-status-row {
            justify-content: center !important;
            gap: 10px !important;
          }

          /* Typography & Scaling */
          .hero-headline-title {
            font-size: clamp(2.35rem, 9.2vw, 3.15rem) !important;
            text-align: center !important;
            line-height: 1.08 !important;
          }

          .hero-desc-br {
            display: inline !important;
          }

          .hero-description-text {
            font-size: 0.98rem !important;
            line-height: 1.6 !important;
            text-align: center !important;
            max-width: 94% !important;
            margin: 0 auto !important;
          }

          /* Skill Pills Wrapping Nicely (2-3 per row max) */
          .hero-capability-row {
            justify-content: center !important;
            gap: 8px !important;
            flex-wrap: wrap !important;
            width: 100% !important;
            max-width: 360px !important;
            margin: 0 auto !important;
          }

          .hero-pill-item {
            font-size: 0.78rem !important;
            padding: 7px 14px !important;
          }

          /* Call-to-Action Buttons Stacked Full-Width */
          .hero-actions-row {
            display: flex !important;
            flex-direction: column !important;
            width: 100% !important;
            max-width: 320px !important;
            gap: 12px !important;
            margin: 6px auto 0 !important;
          }

          .hero-btn-primary,
          .hero-btn-secondary {
            width: 100% !important;
            justify-content: center !important;
            min-height: 48px !important;
            font-size: 0.95rem !important;
            box-sizing: border-box !important;
          }

          /* Hide overlapping cursive notes on mobile */
          .hero-handwritten-note-center,
          .hero-impact-note {
            display: none !important;
          }

          /* Right Visual Stacked Second */
          .hero-right-visual {
            order: 2 !important;
            min-height: auto !important;
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            width: 100% !important;
            margin-top: 4px !important;
          }

          /* Circular Photo (~240px diameter, glowing teal ring) */
          .hero-portrait-wrapper {
            position: relative !important;
            width: 240px !important;
            height: 240px !important;
            border-radius: 50% !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            margin: 0 auto !important;
          }

          .hero-fluid-blob-backdrop {
            position: absolute !important;
            width: 240px !important;
            height: 240px !important;
            border-radius: 50% !important;
            border: 3.5px solid #14B8A6 !important;
            animation: none !important;
            box-shadow: 0 0 28px rgba(20, 184, 166, 0.45) !important;
            background: transparent !important;
          }

          .hero-portrait-image {
            width: 226px !important;
            height: 226px !important;
            border-radius: 50% !important;
            object-fit: cover !important;
            object-position: center 15% !important;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5) !important;
          }

          /* Floating Badges Moved Below Photo in 2×2 Grid */
          .hero-floating-cards-group {
            position: static !important;
            display: grid !important;
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 10px !important;
            width: 100% !important;
            max-width: 340px !important;
            margin: 20px auto 0 !important;
          }

          .hero-floating-card {
            position: static !important;
            animation: none !important;
            width: 100% !important;
            padding: 10px 12px !important;
            border-radius: 14px !important;
            gap: 10px !important;
            box-sizing: border-box !important;
          }

          .floating-card-icon {
            width: 34px !important;
            height: 34px !important;
            border-radius: 10px !important;
          }

          .floating-card-text strong {
            font-size: 0.82rem !important;
          }

          .floating-card-text span {
            font-size: 0.72rem !important;
          }

          /* Mobile Horizontal Social Dock (Bottom of Hero) */
          .hero-mobile-social-dock {
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            gap: 10px !important;
            margin-top: 24px !important;
            width: 100% !important;
          }

          .hero-mobile-social-title {
            font-size: 0.76rem !important;
            font-weight: 800 !important;
            letter-spacing: 0.08em !important;
            text-transform: uppercase !important;
            color: #94A3B8 !important;
            font-family: var(--font-display) !important;
          }

          .hero-mobile-social-icons {
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            gap: 14px !important;
          }

          .hero-mobile-social-btn {
            width: 44px !important;
            height: 44px !important;
            border-radius: 50% !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            background: #16252E !important;
            border: 1px solid #1E3A3A !important;
            color: #94A3B8 !important;
            text-decoration: none !important;
            box-shadow: 0 4px 14px rgba(0, 0, 0, 0.3) !important;
            transition: all 0.2s ease !important;
          }

          .hero-mobile-social-btn:hover,
          .hero-mobile-social-btn:active {
            color: #FFFFFF !important;
            background: #14B8A6 !important;
            border-color: #14B8A6 !important;
            transform: translateY(-2px) !important;
          }

          [data-theme="light"] .hero-mobile-social-btn {
            background: #FFFFFF !important;
            border-color: rgba(226, 232, 240, 0.95) !important;
            color: #475569 !important;
            box-shadow: 0 4px 14px rgba(15, 23, 42, 0.08) !important;
          }

          [data-theme="light"] .hero-mobile-social-btn:hover,
          [data-theme="light"] .hero-mobile-social-btn:active {
            background: #14B8A6 !important;
            color: #FFFFFF !important;
          }
        }

        /* ── VERY SMALL MOBILE SCREENS (< 375px) ── */
        @media (max-width: 374px) {
          .hero-portrait-wrapper {
            width: 210px !important;
            height: 210px !important;
          }
          .hero-fluid-blob-backdrop {
            width: 210px !important;
            height: 210px !important;
          }
          .hero-portrait-image {
            width: 198px !important;
            height: 198px !important;
          }
          .hero-floating-cards-group {
            grid-template-columns: 1fr !important;
            max-width: 280px !important;
          }
        }
      `}</style>
    </section>
  );
}
