import { useEffect, useState, useRef } from 'react';

/**
 * SplashScreen Component
 * CreativeXLab style intro animation with electric orange accents
 */
export default function SplashScreen({ onComplete }) {
  const [nameChars, setNameChars] = useState(0);
  const [showName, setShowName] = useState(false);
  const [showSub, setShowSub] = useState(false);
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);

  const fullName = 'Rashminda Aluvihare';
  const subtitle = 'Business Analyst & Project Management Intern';
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
      await delay(350);
      if (cancelled) return;
      setShowName(true);

      await delay(150);
      if (cancelled) return;

      for (let i = 1; i <= fullName.length; i++) {
        await delay(50);
        if (cancelled) return;
        setNameChars(i);
      }

      await delay(250);
      if (cancelled) return;
      setShowSub(true);

      const steps = 50;
      const stepMs = 900 / steps;
      for (let s = 1; s <= steps; s++) {
        await delay(stepMs);
        if (cancelled) return;
        setProgress(Math.round((s / steps) * 100));
      }

      await delay(250);
      if (cancelled) return;
      setExiting(true);

      await delay(600);
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
        background: '#0B1419',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '20px',
        overflow: 'hidden',
        opacity: exiting ? 0 : 1,
        transform: exiting ? 'scale(1.03)' : 'scale(1)',
        transition: exiting ? 'opacity 0.6s ease, transform 0.6s ease' : 'none',
        pointerEvents: exiting ? 'none' : 'all',
      }}
    >
      {/* Name + Subtitle section */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '12px',
          textAlign: 'center',
          opacity: showName ? 1 : 0,
          transform: showName ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.5s ease, transform 0.5s ease',
        }}
      >
        <h1
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 'clamp(2rem, 5.5vw, 3.6rem)',
            fontWeight: 900,
            color: '#F8FAFC',
            letterSpacing: '-0.04em',
            lineHeight: 1.15,
            whiteSpace: 'nowrap',
          }}
        >
          <span style={{ color: '#94A3B8', fontWeight: 500, fontSize: '0.6em' }}>
            Hi, I&apos;m&nbsp;
          </span>
          <span style={{ color: '#14B8A6' }}>
            {fullName.slice(0, nameChars)}
          </span>
          <span
            style={{
              display: 'inline-block',
              width: '2.5px',
              height: '0.9em',
              background: '#14B8A6',
              marginLeft: '4px',
              verticalAlign: 'middle',
              borderRadius: '2px',
              opacity: nameChars >= fullName.length ? 0 : 1,
              animation: nameChars < fullName.length ? 'cursorBlink 0.65s step-end infinite' : 'none',
              transition: 'opacity 0.2s ease',
            }}
          />
        </h1>

        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 'clamp(0.75rem, 1.8vw, 0.88rem)',
            fontWeight: 700,
            color: '#9CA3AF',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            opacity: showSub ? 1 : 0,
            transform: showSub ? 'translateY(0)' : 'translateY(8px)',
            transition: 'opacity 0.5s ease 0.1s, transform 0.5s ease 0.1s',
          }}
        >
          {subtitle}
        </p>
      </div>

      {/* Progress bar */}
      <div
        style={{
          width: 'min(280px, 65vw)',
          height: '3px',
          background: 'rgba(255,255,255,0.08)',
          borderRadius: '99px',
          overflow: 'hidden',
          opacity: showSub ? 1 : 0,
          transition: 'opacity 0.35s ease',
          marginTop: '6px',
        }}
      >
        <div
          style={{
            height: '100%',
            width: `${progress}%`,
            background: 'linear-gradient(90deg, #14B8A6, #2DD4BF)',
            borderRadius: '99px',
            transition: 'width 0.05s linear',
            boxShadow: '0 0 10px rgba(20, 184, 166, 0.8)',
          }}
        />
      </div>

      <span
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '0.74rem',
          fontWeight: 700,
          color: '#94A3B8',
          letterSpacing: '0.1em',
          marginTop: '-12px',
          opacity: showSub ? 1 : 0,
          transition: 'opacity 0.35s ease 0.1s',
        }}
      >
        {progress}%
      </span>

      <style>{`
        @keyframes cursorBlink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
      `}</style>
    </div>
  );
}
