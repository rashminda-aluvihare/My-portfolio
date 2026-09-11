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
              <div className="tab-title">Hero.jsx — Rashminda's Workspace</div>
            </div>

            {/* Monitor Screen Code Editor Content */}
            <div className="screen-code-body">
              <div className="code-line"><span className="code-kw">import</span> <span className="code-var">React</span> <span className="code-kw">from</span> <span className="code-str">'react'</span>;</div>
              <div className="code-line"><span className="code-kw">import</span> &#123; <span className="code-var">Fullstack</span>, <span className="code-var">FinTech</span> &#125; <span className="code-kw">from</span> <span className="code-str">'@rashminda/skills'</span>;</div>
              <div className="code-line">&nbsp;</div>
              <div className="code-line"><span className="code-kw">const</span> <span className="code-fn">DeveloperProfile</span> = () =&gt; &#123;</div>
              <div className="code-line indent"><span className="code-kw">return</span> (</div>
              <div className="code-line indent-2">&lt;<span className="code-tag">Developer</span></div>
              <div className="code-line indent-3"><span className="code-attr">name</span>=<span className="code-str">"Rashminda Aluvihare"</span></div>
              <div className="code-line indent-3"><span className="code-attr">role</span>=<span className="code-str">"Software Engineer & HNDIT"</span></div>
              <div className="code-line indent-3"><span className="code-attr">status</span>=<span className="code-str">"Building Scalable Solutions 🚀"</span></div>
              <div className="code-line indent-2">/&gt;</div>
              <div className="code-line indent">);</div>
              <div className="code-line">&#125;;</div>
              <div className="code-line"><span className="code-kw">export default</span> <span className="code-fn">DeveloperProfile</span>;</div>
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
              <span className="gpu-text">RTX AI POWERED</span>
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
        {/* RGB Keyboard */}
        <div className="keyboard-pad">
          <div className="rgb-glow-bar" />
        </div>
        {/* Optical Mouse */}
        <div className="mouse-device" />
      </div>

      {/* Animated Scroll Down Mouse Pill Indicator (Matches Woujoud Image) */}
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
          background: linear-gradient(180deg, #1e293b 0%, #0f172a 100%);
          border: 1px solid var(--card-border);
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
          border: 1.5px solid var(--accent-cyan);
          box-shadow: 0 0 10px var(--accent-cyan);
        }
        .driver-top { width: 16px; height: 16px; background: rgba(6, 182, 212, 0.3); }
        .driver-bottom { width: 24px; height: 24px; background: rgba(145, 94, 255, 0.3); border-color: var(--accent-purple); }

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
          background: #090d16;
          border: 2px solid rgba(145, 94, 255, 0.35);
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.6), 0 0 30px rgba(145, 94, 255, 0.2);
        }

        .screen-header {
          background: #111827;
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
        .dot.red { background: #ef4444; }
        .dot.yellow { background: #f59e0b; }
        .dot.green { background: #10b981; }

        .tab-title {
          font-size: 0.72rem;
          color: var(--text-secondary);
          font-family: monospace;
          font-weight: 600;
        }

        .screen-code-body {
          padding: 16px 20px;
          font-family: 'Fira Code', monospace, consolas;
          font-size: 0.8rem;
          line-height: 1.6;
          color: #e2e8f0;
          background: #030712;
          text-align: left;
          min-height: 220px;
        }

        .code-kw { color: #f43f5e; font-weight: 700; }
        .code-var { color: #38bdf8; }
        .code-str { color: #34d399; }
        .code-fn { color: #a78bfa; font-weight: 700; }
        .code-tag { color: #fb7185; }
        .code-attr { color: #fbbf24; }
        .indent { padding-left: 16px; }
        .indent-2 { padding-left: 32px; }
        .indent-3 { padding-left: 48px; }

        .monitor-stand-neck {
          width: 48px;
          height: 18px;
          background: linear-gradient(180deg, #334155 0%, #1e293b 100%);
        }

        .monitor-stand-base {
          width: 140px;
          height: 8px;
          background: #334155;
          border-radius: 4px 4px 0 0;
        }

        /* PC Tower */
        .pc-tower {
          width: 115px;
          height: 230px;
          background: #0b1120;
          border: 2px solid rgba(6, 182, 212, 0.4);
          border-radius: 12px;
          padding: 10px;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5), 0 0 25px rgba(6, 182, 212, 0.25);
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
          border: 3px solid #06b6d4;
          box-shadow: 0 0 15px #06b6d4, inset 0 0 10px #915eff;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: spinFan 4s linear infinite;
        }

        .fan-blades {
          width: 24px;
          height: 24px;
          background: radial-gradient(circle, #915eff 0%, transparent 70%);
          border-radius: 50%;
        }

        @keyframes spinFan {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .gpu-card {
          width: 90%;
          height: 22px;
          background: rgba(145, 94, 255, 0.2);
          border: 1px solid var(--accent-purple);
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .gpu-text {
          font-size: 0.58rem;
          font-weight: 800;
          color: #2563eb;
          letter-spacing: 0.5px;
        }

        /* Desk Surface */
        .desk-surface {
          width: 100%;
          height: 28px;
          background: linear-gradient(180deg, #1e293b 0%, #0f172a 100%);
          border-top: 2px solid var(--card-border);
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
          background: #090d16;
          border-radius: 3px;
          position: relative;
          overflow: hidden;
        }

        .rgb-glow-bar {
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, #ef4444, #f59e0b, #10b981, #06b6d4, #915eff);
          opacity: 0.7;
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
          border: 2px solid var(--accent-purple);
          border-radius: 20px;
          display: flex;
          justify-content: center;
          padding-top: 6px;
          box-shadow: 0 0 15px rgba(145, 94, 255, 0.3);
          transition: all 0.3s ease;
        }

        .scroll-mouse-pill:hover {
          border-color: var(--accent-cyan);
          box-shadow: 0 0 20px rgba(6, 182, 212, 0.5);
          transform: translateY(3px);
        }

        .scroll-wheel-dot {
          width: 4px;
          height: 8px;
          background: var(--accent-cyan);
          border-radius: 2px;
          animation: mouseScroll 1.8s ease-in-out infinite;
        }

        @keyframes mouseScroll {
          0% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(14px); }
        }

        @media (max-width: 768px) {
          .speaker { display: none; }
          .pc-tower { width: 90px; height: 180px; }
          .rgb-fan { width: 40px; height: 40px; }
          .screen-code-body { font-size: 0.72rem; padding: 12px; }
        }
      `}</style>
    </div>
  );
}
