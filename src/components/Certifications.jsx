import { Award, CheckCircle2, Network, Cpu, ShieldCheck, Server, ExternalLink, BookOpen } from 'lucide-react';

export default function Certifications() {
  const certifications = [
    {
      id: 'cisco-it-essentials',
      title: 'Cisco IT Essentials',
      issuer: 'Cisco Networking Academy',
      credentialType: 'Professional Certification',
      badgeColor: '#00bceb', // Cisco Cyan/Blue
      gradient: 'linear-gradient(135deg, rgba(0, 188, 235, 0.15) 0%, rgba(0, 112, 243, 0.05) 100%)',
      borderColor: 'rgba(0, 188, 235, 0.3)',
      icon: <Cpu size={28} />,
      status: 'Verified Credential',
      description:
        'Comprehensive technical certification covering computer hardware, operating systems, software installation, mobile devices, security protocols, and operational IT troubleshooting procedures.',
      skills: [
        'Hardware & PC Architecture',
        'Windows & Linux OS Configuration',
        'IT Troubleshooting & Diagnostics',
        'Cybersecurity Fundamentals',
        'Network Setup & Peripherals',
        'Virtualization & Mobile Devices',
      ],
      highlights: [
        'Demonstrated hands-on proficiency in building, configuring, and troubleshooting computer hardware systems.',
        'Mastered operating system maintenance, security practices, and preventative maintenance workflows.',
      ],
    },
    {
      id: 'cisco-networking-essentials',
      title: 'Networking Essentials',
      issuer: 'Cisco Networking Academy',
      credentialType: 'Professional Certification',
      badgeColor: '#00f2fe', // Cyan Accent
      gradient: 'linear-gradient(135deg, rgba(0, 242, 254, 0.15) 0%, rgba(155, 81, 224, 0.05) 100%)',
      borderColor: 'rgba(0, 242, 254, 0.3)',
      icon: <Network size={28} />,
      status: 'Verified Credential',
      description:
        'In-depth networking certification covering core concepts of network architecture, IP addressing & subnetting, router & switch configurations, network security principles, and OSI/TCP-IP models.',
      skills: [
        'IPv4 & IPv6 Address Planning',
        'Subnetting & VLSM Design',
        'Switch & Router Configuration',
        'Network Architecture & Topologies',
        'OSI & TCP/IP Protocol Stacks',
        'Network Security & Firewalls',
      ],
      highlights: [
        'Aquired essential knowledge in designing, building, and troubleshooting local area networks (LANs) and internetworks.',
        'Applied practical skills using packet analysis and network diagnostics tools (Ping, Traceroute, Cisco Packet Tracer).',
      ],
    },
  ];

  return (
    <section id="certifications" className="section" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              borderRadius: '999px',
              background: 'rgba(0, 242, 254, 0.1)',
              border: '1px solid rgba(0, 242, 254, 0.25)',
              fontSize: '0.85rem',
              fontWeight: 700,
              color: 'var(--accent-cyan)',
              marginBottom: '12px',
            }}
          >
            <Award size={16} />
            <span>ACCREDITED CREDENTIALS</span>
          </div>

          <h2 style={{ fontSize: '2.5rem', fontWeight: 800 }} className="gradient-text">
            Certifications & Qualifications
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginTop: '8px', fontSize: '1rem', maxWidth: '650px', margin: '8px auto 0' }}>
            Industry-recognized certifications certified by Cisco Networking Academy validating core IT infrastructure, networking, and system diagnostics expertise.
          </p>
        </div>

        {/* Certifications Grid */}
        <div
          style={{
            maxWidth: '1000px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '28px',
          }}
        >
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="glass-panel"
              style={{
                padding: '32px',
                borderRadius: '20px',
                background: cert.gradient,
                border: `1px solid ${cert.borderColor}`,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = `0 12px 30px ${cert.borderColor}`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Decorative Background Watermark Icon */}
              <div
                style={{
                  position: 'absolute',
                  top: '-15px',
                  right: '-15px',
                  opacity: 0.05,
                  color: cert.badgeColor,
                  pointerEvents: 'none',
                  transform: 'scale(2.5)',
                }}
              >
                {cert.icon}
              </div>

              <div>
                {/* Header Badge & Title */}
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '16px', marginBottom: '20px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div
                      style={{
                        width: '56px',
                        height: '56px',
                        borderRadius: '16px',
                        background: `rgba(10, 13, 20, 0.6)`,
                        border: `1px solid ${cert.borderColor}`,
                        color: cert.badgeColor,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: `0 4px 15px ${cert.borderColor}`,
                        flexShrink: 0,
                      }}
                    >
                      {cert.icon}
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-primary)', lineHeight: '1.2' }}>
                        {cert.title}
                      </h3>
                      <p style={{ fontSize: '0.9rem', color: cert.badgeColor, fontWeight: 700, marginTop: '4px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <BookOpen size={14} />
                        {cert.issuer}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Status Pill */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '18px' }}>
                  <span
                    style={{
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      color: '#38ef7d',
                      background: 'rgba(56, 239, 125, 0.1)',
                      border: '1px solid rgba(56, 239, 125, 0.3)',
                      padding: '4px 12px',
                      borderRadius: '999px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                    }}
                  >
                    <CheckCircle2 size={13} />
                    {cert.status}
                  </span>
                  <span
                    style={{
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      color: 'var(--text-muted)',
                      background: 'rgba(255, 255, 255, 0.05)',
                      padding: '4px 12px',
                      borderRadius: '999px',
                      border: '1px solid var(--card-border)',
                    }}
                  >
                    {cert.credentialType}
                  </span>
                </div>

                {/* Description */}
                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '22px' }}>
                  {cert.description}
                </p>

                {/* Key Skills Covered */}
                <div style={{ marginBottom: '20px' }}>
                  <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', marginBottom: '10px', fontWeight: 700 }}>
                    Core Competencies Covered:
                  </h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {cert.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        style={{
                          fontSize: '0.8rem',
                          fontWeight: 600,
                          color: 'var(--text-primary)',
                          background: 'var(--card-bg)',
                          border: '1px solid var(--card-border)',
                          padding: '5px 12px',
                          borderRadius: '8px',
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Highlights */}
                <div style={{ borderTop: '1px dashed var(--card-border)', paddingTop: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {cert.highlights.map((highlight, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.86rem', color: 'var(--text-secondary)' }}>
                      <ShieldCheck size={16} style={{ color: cert.badgeColor, flexShrink: 0, marginTop: '2px' }} />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
