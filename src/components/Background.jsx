export default function Background() {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
    >
      {/* Top-left subtle ambient glow */}
      <div
        style={{
          position: 'absolute',
          top: '-150px',
          left: '-150px',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(155, 81, 224, 0.08) 0%, rgba(0, 0, 0, 0) 70%)',
          filter: 'blur(40px)',
        }}
      />
      {/* Bottom-right subtle ambient glow */}
      <div
        style={{
          position: 'absolute',
          bottom: '-150px',
          right: '-150px',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 242, 254, 0.06) 0%, rgba(0, 0, 0, 0) 70%)',
          filter: 'blur(50px)',
        }}
      />
    </div>
  );
}
