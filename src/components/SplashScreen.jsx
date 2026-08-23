import { useEffect, useState, useRef } from 'react';

/**
 * SplashScreen Component
 * Premium intro animation:
 *  1. "Rashminda Aluvihare" types out letter by letter (no RA initials)
 *  2. Subtitle fades in + progress bar fills
 *  3. Entire screen fades out revealing the portfolio
 */
export default function SplashScreen({ onComplete }) {
  const [nameChars, setNameChars] = useState(0);      // how many chars of name typed
  const [showName, setShowName] = useState(false);    // slide name section in
  const [showSub, setShowSub] = useState(false);      // fade in subtitle
  const [progress, setProgress] = useState(0);        // 0-100 loading bar
  const [exiting, setExiting] = useState(false);      // trigger fade-out

  const fullName = 'Rashminda Aluvihare';
  const subtitle = 'Business Analyst · FinTech Enthusiast';
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    let rafId;
    let cancelled = false;

    function delay(ms) {
      return new Promise((res) => {
        rafId = setTimeout(res, ms);
      });
    }

    async function runSequence() {
      // Phase 1: brief pause, then reveal name
      await delay(400);
      if (cancelled) return;
      setShowName(true);

      await delay(200);
      if (cancelled) return;

      // Phase 2: typewriter - one char every 55ms
      for (let i = 1; i <= fullName.length; i++) {
        await delay(55);
        if (cancelled) return;
        setNameChars(i);
      }

      // Phase 3: short pause, then show subtitle
      await delay(300);
      if (cancelled) return;
      setShowSub(true);

      // Phase 4: animate progress bar 0→100 over ~1100ms
      const steps = 60;
      const stepMs = 1100 / steps;
      for (let s = 1; s <= steps; s++) {
        await delay(stepMs);
        if (cancelled) return;
        setProgress(Math.round((s / steps) * 100));
      }

      // Phase 5: brief pause then exit
      await delay(300);
      if (cancelled) return;
      setExiting(true);

      // Phase 6: wait for CSS transition then call onComplete
      await delay(700);
      if (!cancelled) onCompleteRef.current();
    }

    runSequence();

    return () => {
      cancelled = true;
      clearTimeout(rafId);
    };
  }, []);

  return (
    <div
      role="status"
      aria-label="Loading portfolio"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: '#030712',
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
      <div style={orb('#06b6d4', '-18%', '-12%', '480px', '9s')} />
      <div style={orb('#10b981', '72%', '70%', '420px', '11s')} />
      <div style={orb('#34d399', '78%', '-8%', '360px', '13s')} />

      {/* ── Name + Subtitle section ── */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '12px',
          textAlign: 'center',
          opacity: showName ? 1 : 0,
          transform: showName ? 'translateY(0)' : 'translateY(24px)',
          transition: 'opacity 0.55s ease, transform 0.55s ease',
        }}
      >
        {/* Full name with blinking cursor */}
        <h1
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: 'clamp(2rem, 6vw, 3.8rem)',
            fontWeight: 800,
            color: '#ffffff',
            letterSpacing: '-0.025em',
            lineHeight: 1.15,
            whiteSpace: 'nowrap',
          }}
        >
          {/* "Hi, I'm" prefix with subtle color */}
          <span style={{ color: '#9ca3af', fontWeight: 500, fontSize: '0.6em' }}>
            Hi, I&apos;m&nbsp;
          </span>
          {/* Gradient name */}
          <span
            style={{
              background: 'linear-gradient(135deg, #06b6d4 0%, #10b981 50%, #34d399 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {fullName.slice(0, nameChars)}
          </span>
          {/* Blinking cursor */}
          <span
            style={{
              display: 'inline-block',
              width: '3px',
              height: '1em',
              background: '#06b6d4',
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
            background: 'linear-gradient(90deg, #06b6d4, #10b981, #34d399)',
            borderRadius: '99px',
            transition: 'width 0.05s linear',
            boxShadow: '0 0 12px rgba(6,182,212,0.65)',
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
