import React from 'react';
import worldVideoAsset from '../assets/worldvideo.mp4';

export default function Globe3DCanvas() {
  return (
    <div className="world-video-wrapper" style={{ width: '100%', height: '100%', minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
      {/* Ambient Spotlight Aura Behind Video */}
      <div
        style={{
          position: 'absolute',
          width: '85%',
          height: '85%',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(20, 184, 166, 0.25) 0%, rgba(15, 118, 110, 0.1) 50%, transparent 75%)',
          filter: 'blur(40px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Video Container Frame with Teal Ring */}
      <div
        className="world-video-frame"
        style={{
          position: 'relative',
          zIndex: 1,
          width: '100%',
          maxWidth: '440px',
          aspectRatio: '1 / 1',
          borderRadius: '50%',
          overflow: 'hidden',
          border: '2.5px solid rgba(20, 184, 166, 0.65)',
          boxShadow: '0 15px 40px rgba(0, 0, 0, 0.6), 0 0 35px rgba(20, 184, 166, 0.35)',
          transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.4s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.04) translateY(-6px)';
          e.currentTarget.style.boxShadow = '0 20px 50px rgba(0, 0, 0, 0.8), 0 0 45px rgba(20, 184, 166, 0.55)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'none';
          e.currentTarget.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.6), 0 0 35px rgba(20, 184, 166, 0.35)';
        }}
      >
        <video
          src={worldVideoAsset}
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
        />
      </div>
    </div>
  );
}
