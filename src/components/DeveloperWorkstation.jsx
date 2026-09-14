import React from 'react';

export default function DeveloperWorkstation() {
  return (
    <div className="workstation-container">
      {/* 3D Desk & Tech Setup Container */}
      <div className="workstation-scene">
        {/* Dual Studio Monitor Speakers (Left & Right) */}
        <div className="speaker speaker-left">
          <div className="speaker-driver driver-top" />
          <div className="speaker-driver driver-bottom" />
        </div>

        {/* Center Main IDE Monitor */}
        <div className="monitor-wrapper">
          <div className="monitor-frame">
            {/* Monitor Screen Top Header */}
            <div className="screen-header">
              <div className="window-dots">
                <span className="dot red" />
                <span className="dot yellow" />
                <span className="dot green" />
              </div>
              <div className="tab-title">Profile.jsx — Rashminda's Workspace</div>
            </div>

            {/* Monitor Screen Code Editor Content */}
            <div className="screen-code-body">
              <div className="code-line"><span className="code-kw">import</span> <span className="code-var">React</span> <span className="code-kw">from</span> <span className="code-str">'react'</span>;</div>
              <div className="code-line"><span className="code-kw">import</span> &#123; <span className="code-var">BusinessAnalysis</span>, <span className="code-var">AgilePM</span>, <span className="code-var">FinTech</span> &#125; <span className="code-kw">from</span> <span className="code-str">'@rashminda/skills'</span>;</div>
              <div className="code-line">&nbsp;</div>
              <div className="code-line"><span className="code-kw">const</span> <span className="code-fn">ProfessionalProfile</span> = () =&gt; &#123;</div>
              <div className="code-line indent"><span className="code-kw">return</span> (</div>
              <div className="code-line indent-2">&lt;<span className="code-tag">Candidate</span></div>
              <div className="code-line indent-3"><span className="code-attr">name</span>=<span className="code-str">"Rashminda Aluvihare"</span></div>
              <div className="code-line indent-3"><span className="code-attr">role</span>=<span className="code-str">"Business Analyst &amp; Project Management Intern"</span></div>
              <div className="code-line indent-3"><span className="code-attr">status</span>=<span className="code-str">"Bridging Requirements &amp; Agile Delivery 🚀"</span></div>
              <div className="code-line indent-2">/&gt;</div>
              <div className="code-line indent">);</div>
              <div className="code-line">&#125;;</div>
              <div className="code-line"><span className="code-kw">export default</span> <span className="code-fn">ProfessionalProfile</span>;</div>
            </div>
          </div>
          <div className="monitor-stand-neck" />
          <div className="monitor-stand-base" />
        </div>

        {/* RGB Desktop PC Tower (Right) */}
        <div className="pc-tower">
          <div className="pc-glass-panel">
            <div className="rgb-fan fan-1">
              <div className="fan-blades" />
            </div>
            <div className="rgb-fan fan-2">
              <div className="fan-blades" />
            </div>
            <div className="gpu-card">
              <span className="gpu-text">ORANGE CORE RTX</span>
            </div>
          </div>
        </div>

        <div className="speaker speaker-right">
          <div className="speaker-driver driver-top" />
          <div className="speaker-driver driver-bottom" />
        </div>
      </div>

      {/* Sleek Desk Surface */}
      <div className="desk-surface">
        {/* Keyboard */}
        <div className="keyboard-pad">
          <div className="rgb-glow-bar" />
        </div>
        {/* Optical Mouse */}
        <div className="mouse-device" />
      </div>

      {/* Animated Scroll Down Mouse Pill Indicator */}
      <div className="scroll-indicator-wrapper">
        <a href="#about" aria-label="Scroll down to About section">
          <div className="scroll-mouse-pill">
            <div className="scroll-wheel-dot" />
          </div>
        </a>
      </div>

      <style>{`
        .workstation-container {
          position: relative;
          width: 100%;
          max-width: 860px;
          margin: 30px auto 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          z-index: 2;
        }

        .workstation-scene {
          display: flex;
          align-items: flex-end;
          justify-content: center;
          gap: 18px;
          width: 100%;
          position: relative;
        }

        /* Speakers */
        .speaker {
          width: 42px;
          height: 100px;
          background: #141619;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 10px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-around;
          padding: 8px 0;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
        }

        .speaker-driver {
          border-radius: 50%;
          border: 1.5px solid #FF4D2D;
          box-shadow: 0 0 8px rgba(255, 77, 45, 0.4);
        }
        .driver-top { width: 16px; height: 16px; background: rgba(255, 77, 45, 0.2); }
        .driver-bottom { width: 24px; height: 24px; background: rgba(255, 77, 45, 0.25); border-color: #FF4D2D; }

        /* Main Monitor */
        .monitor-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          flex: 1;
          max-width: 540px;
        }

        .monitor-frame {
          width: 100%;
          background: #0B0C0E;
          border: 1.5px solid rgba(255, 77, 45, 0.35);
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.6), 0 0 25px rgba(255, 77, 45, 0.15);
        }

        .screen-header {
          background: #141619;
          padding: 8px 14px;
          display: flex;
          align-items: center;
          gap: 12px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .window-dots {
          display: flex;
          gap: 6px;
        }

        .dot { width: 9px; height: 9px; border-radius: 50%; }
        .dot.red { background: #FF4D2D; }
        .dot.yellow { background: #f59e0b; }
        .dot.green { background: #10b981; }

        .tab-title {
          font-size: 0.72rem;
          color: #9CA3AF;
          font-family: monospace;
          font-weight: 600;
        }

        .screen-code-body {
          padding: 16px 20px;
          font-family: 'JetBrains Mono', monospace, consolas;
          font-size: 0.8rem;
          line-height: 1.6;
          color: #e2e8f0;
          background: #0B0C0E;
          text-align: left;
          min-height: 220px;
        }

        .code-kw { color: #FF4D2D; font-weight: 700; }
        .code-var { color: #38bdf8; }
        .code-str { color: #34d399; }
        .code-fn { color: #FFAA33; font-weight: 700; }
        .code-tag { color: #FF4D2D; }
        .code-attr { color: #fbbf24; }
        .indent { padding-left: 16px; }
        .indent-2 { padding-left: 32px; }
        .indent-3 { padding-left: 48px; }

        .monitor-stand-neck {
          width: 48px;
          height: 18px;
          background: linear-gradient(180deg, #1e293b 0%, #141619 100%);
        }

        .monitor-stand-base {
          width: 140px;
          height: 8px;
          background: #1e293b;
          border-radius: 4px 4px 0 0;
        }

        /* PC Tower */
        .pc-tower {
          width: 115px;
          height: 230px;
          background: #141619;
          border: 1.5px solid rgba(255, 77, 45, 0.3);
          border-radius: 12px;
          padding: 10px;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5), 0 0 20px rgba(255, 77, 45, 0.15);
          display: flex;
          flex-direction: column;
          justify-content: space-around;
        }

        .pc-glass-panel {
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-around;
        }

        .rgb-fan {
          width: 54px;
          height: 54px;
          border-radius: 50%;
          border: 2px solid #FF4D2D;
          box-shadow: 0 0 12px rgba(255, 77, 45, 0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          animation: spinFan 4s linear infinite;
        }

        .fan-blades {
          width: 24px;
          height: 24px;
          background: radial-gradient(circle, #FF4D2D 0%, transparent 70%);
          border-radius: 50%;
        }

        @keyframes spinFan {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .gpu-card {
          width: 90%;
          height: 22px;
          background: rgba(255, 77, 45, 0.15);
          border: 1px solid rgba(255, 77, 45, 0.4);
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .gpu-text {
          font-size: 0.55rem;
          font-weight: 800;
          color: #FF4D2D;
          letter-spacing: 0.5px;
        }

        /* Desk Surface */
        .desk-surface {
          width: 100%;
          height: 28px;
          background: #141619;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 6px;
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          margin-top: -2px;
        }

        .keyboard-pad {
          width: 180px;
          height: 10px;
          background: #0B0C0E;
          border-radius: 3px;
          position: relative;
          overflow: hidden;
        }

        .rgb-glow-bar {
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, #FF4D2D, #FFAA33, #FF4D2D);
          opacity: 0.8;
          animation: rgbShift 5s linear infinite;
        }

        @keyframes rgbShift {
          0% { filter: hue-rotate(0deg); }
          100% { filter: hue-rotate(360deg); }
        }

        .mouse-device {
          width: 16px;
          height: 12px;
          background: #334155;
          border-radius: 5px;
        }

        /* Scroll Mouse Pill Indicator */
        .scroll-indicator-wrapper {
          margin-top: 25px;
          display: flex;
          justify-content: center;
        }

        .scroll-mouse-pill {
          width: 24px;
          height: 40px;
          border: 2px solid #FF4D2D;
          border-radius: 20px;
          display: flex;
          justify-content: center;
          padding-top: 6px;
          box-shadow: 0 0 15px rgba(255, 77, 45, 0.35);
          transition: all 0.3s ease;
        }

        .scroll-mouse-pill:hover {
          border-color: #FF6647;
          box-shadow: 0 0 20px rgba(255, 77, 45, 0.6);
          transform: translateY(3px);
        }

        .scroll-wheel-dot {
          width: 4px;
          height: 8px;
          background: #FF4D2D;
          border-radius: 2px;
          animation: mouseScroll 1.8s ease-in-out infinite;
        }

        @keyframes mouseScroll {
          0% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(14px); }
        }

        /* Fluid Device Responsiveness */
        @media (max-width: 768px) {
          .workstation-scene {
            gap: 10px;
          }
          .speaker {
            width: 26px;
            height: 65px;
            padding: 4px 0;
            border-radius: 6px;
          }
          .driver-top { width: 10px; height: 10px; }
          .driver-bottom { width: 14px; height: 14px; }

          .pc-tower { width: 85px; height: 170px; padding: 6px; }
          .rgb-fan { width: 36px; height: 36px; border-width: 2px; }
          .fan-blades { width: 16px; height: 16px; }
          .gpu-card { height: 16px; }
          .gpu-text { font-size: 0.45rem; }

          .screen-code-body { font-size: 0.68rem; padding: 10px; min-height: 170px; }
          .tab-title { font-size: 0.65rem; }

          .keyboard-pad { width: 130px; height: 8px; }
          .mouse-device { width: 12px; height: 10px; }
        }

        @media (max-width: 480px) {
          .workstation-scene {
            gap: 6px;
          }
          .speaker {
            width: 20px;
            height: 52px;
          }
          .driver-top { width: 8px; height: 8px; }
          .driver-bottom { width: 11px; height: 11px; }

          .pc-tower { width: 70px; height: 145px; }
          .rgb-fan { width: 30px; height: 30px; }
          .screen-code-body { font-size: 0.58rem; padding: 8px; min-height: 140px; }
        }
      `}</style>
    </div>
  );
}
