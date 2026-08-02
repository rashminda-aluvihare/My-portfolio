import { useEffect, useState, useRef, useCallback } from 'react';

/**
 * SplashScreen Component
 * Premium intro animation:
 *  1. "RA" initials scale in with glow
 *  2. Full name "Rashminda Aluvihare" types out letter by letter
 *  3. Subtitle fades in + progress bar fills
 *  4. Entire screen fades out revealing the portfolio
 */
export default function SplashScreen({ onComplete }) {
  const [nameChars, setNameChars] = useState(0);      // how many chars of name typed
  const [showName, setShowName] = useState(false);    // slide name section in
  const [showSub, setShowSub] = useState(false);      // fade in subtitle
  const [progress, setProgress] = useState(0);        // 0-100 loading bar
  const [exiting, setExiting] = useState(false);      // trigger fade-out

  const fullName = 'Rashminda Aluvihare';
  const subtitle = 'Full Stack Developer · FinTech Enthusiast';
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    let rafId;
    let cancelled = false;

    function delay(ms) {
      return new Promise((res) => {
        const id = setTimeout(res, ms);
        // store so we can cancel - not strictly needed since we use cancelled flag
        rafId = id;
      });
    }

    async function runSequence() {
      // Phase 1: wait for "RA" pop-in to settle (900ms)
      await delay(900);
      if (cancelled) return;

      // Phase 2: reveal name section
      setShowName(true);
      await delay(200); // let slide-in start
      if (cancelled) return;

      // Phase 3: typewriter - one char every 55ms
      const typingDelay = 55;
      for (let i = 1; i <= fullName.length; i++) {
        await delay(typingDelay);
        if (cancelled) return;
        setNameChars(i);
      }

      // Phase 4: short pause, then show subtitle
      await delay(300);
      if (cancelled) return;
      setShowSub(true);

      // Phase 5: animate progress bar 0→100 over ~1100ms
      const steps = 60;
      const stepMs = 1100 / steps;
      for (let s = 1; s <= steps; s++) {
        await delay(stepMs);
        if (cancelled) return;
        setProgress(Math.round((s / steps) * 100));
      }

      // Phase 6: brief pause then exit
      await delay(300);
      if (cancelled) return;
      setExiting(true);

      // Phase 7: wait for CSS transition (700ms) then call onComplete
      await delay(700);
      if (!cancelled) onCompleteRef.current();
    }

    runSequence();

    return () => {
      cancelled = true;
      clearTimeout(rafId);
    };
  }, []); // runs once on mount

  return (
    <div
      role="status"
      aria-label="Loading portfolio"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: '#05070a',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '24px',
        overflow: 'hidden',
        opacity: exiting ? 0 : 1,
        transform: exiting ? 'scale(1.04)' : 'scale(1)',
        transition: exiting ? 'opacity 0.65s ease, transform 0.65s ease' : 'none',
        pointerEvents: exiting ? 'none' : 'all',
      }}
    >
      {/* Ambient glow orbs */}
      <div style={orb('#00f2fe', '-18%', '-12%', '480px', '9s')} />
      <div style={orb('#9b51e0', '72%', '70%', '420px', '11s')} />
      <div style={orb('#0070f3', '78%', '-8%', '360px', '13s')} />

      {/* ── RA Initials ── */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '2px',
          animation: 'raPopIn 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275) both, raGlow 2.5s ease-in-out infinite',
          transform: showName ? 'scale(0.52) translateY(-14px)' : 'scale(1)',
          transition: showName ? 'transform 0.55s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.1s' : 'none',
        }}
      >
        <span style={{ ...initialLetter, color: '#00f2fe' }}>R</span>
        <span style={{ ...initialLetter, color: '#9b51e0' }}>A</span>
      </div>

      {/* ── Name + Subtitle section ── */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '10px',
          textAlign: 'center',
          opacity: showName ? 1 : 0,
          transform: showName ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.5s ease, transform 0.5s ease',
        }}
      >
        {/* Full name with blinking cursor */}
        <h1 style={nameTitleStyle}>
          {fullName.slice(0, nameChars)}
          <span
            style={{
              display: 'inline-block',
              width: '2.5px',
              height: '1em',
              background: '#00f2fe',
              marginLeft: '5px',
              verticalAlign: 'middle',
              borderRadius: '2px',
              opacity: nameChars >= fullName.length ? 0 : 1,
              animation: nameChars < fullName.length ? 'cursorBlink 0.65s step-end infinite' : 'none',
              transition: 'opacity 0.3s ease',
            }}
          />
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: 'clamp(0.8rem, 1.8vw, 0.95rem)',
            fontWeight: 500,
            color: '#9ca3af',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            opacity: showSub ? 1 : 0,
            transform: showSub ? 'translateY(0)' : 'translateY(10px)',
            transition: 'opacity 0.55s ease 0.1s, transform 0.55s ease 0.1s',
          }}
        >
          {subtitle}
        </p>
      </div>

      {/* ── Progress bar ── */}
      <div
        style={{
          width: 'min(300px, 68vw)',
          height: '3px',
          background: 'rgba(255,255,255,0.07)',
          borderRadius: '99px',
          overflow: 'hidden',
          opacity: showSub ? 1 : 0,
          transition: 'opacity 0.4s ease',
          marginTop: '4px',
        }}
      >
        <div
          style={{
            height: '100%',
            width: `${progress}%`,
            background: 'linear-gradient(90deg, #00f2fe, #9b51e0)',
            borderRadius: '99px',
            transition: 'width 0.05s linear',
            boxShadow: '0 0 12px rgba(0,242,254,0.65)',
          }}
        />
      </div>

      {/* Percentage label */}
      <span
        style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: '0.75rem',
          fontWeight: 700,
          color: '#6b7280',
          letterSpacing: '0.12em',
          marginTop: '-14px',
          opacity: showSub ? 1 : 0,
          transition: 'opacity 0.4s ease 0.2s',
        }}
      >
        {progress}%
      </span>

      <style>{`
        @keyframes raPopIn {
          0%   { opacity: 0; transform: scale(0.25) rotate(-10deg); }
          65%  { transform: scale(1.14) rotate(2deg); }
          100% { opacity: 1; transform: scale(1) rotate(0deg); }
        }
        @keyframes raGlow {
          0%, 100% { filter: drop-shadow(0 0 16px rgba(0,242,254,0.55)); }
          50%       { filter: drop-shadow(0 0 36px rgba(0,242,254,0.95)); }
        }
        @keyframes cursorBlink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
        @keyframes orbFloat {
          0%, 100% { transform: translate(0,0); }
          50%       { transform: translate(18px,-18px); }
        }
      `}</style>
    </div>
  );
}

// ── Shared style objects ───────────────────────────────────────────────────

const initialLetter = {
  fontFamily: "'Outfit', sans-serif",
  fontSize: 'clamp(4.5rem, 13vw, 8.5rem)',
  fontWeight: 800,
  lineHeight: 1,
  letterSpacing: '-0.04em',
};

const nameTitleStyle = {
  fontFamily: "'Outfit', sans-serif",
  fontSize: 'clamp(1.9rem, 5.5vw, 3.2rem)',
  fontWeight: 800,
  color: '#ffffff',
  letterSpacing: '-0.025em',
  lineHeight: 1.15,
  whiteSpace: 'nowrap',
};

function orb(color, left, top, size, duration) {
  return {
    position: 'absolute',
    left,
    top,
    width: size,
    height: size,
    borderRadius: '50%',
    background: color,
    opacity: 0.055,
    filter: 'blur(90px)',
    animation: `orbFloat ${duration} ease-in-out infinite`,
    pointerEvents: 'none',
  };
}
