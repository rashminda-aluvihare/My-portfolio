import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import {
  Award,
  CheckCircle2,
  Network,
  Cpu,
  ShieldCheck,
  Eye,
  Calendar,
  User,
  Building2,
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  Maximize2,
  Database,
  ExternalLink,
} from 'lucide-react';
import ciscoItEssentials from '../assets/cisco_it_essentials.png';
import ciscoNetworkingEssentials from '../assets/cisco_networking_essentials.png';
import alisonMis from '../assets/alison_management_information_systems.png';

export default function Certifications() {
  const certifications = [
    {
      id: 'alison-mis',
      order: 1,
      title: 'Management Information Systems',
      fullTitle: 'Management Information Systems (MIS)',
      issuer: 'Alison (CPD Certified)',
      offeredBy: 'Alison Empower Yourself',
      instructor: 'Maeve Richardson (Director of Certification)',
      completionDate: '02 Feb 2025',
      image: alisonMis,
      badgeColor: '#00f2fe',
      gradient: 'linear-gradient(135deg, rgba(0, 242, 254, 0.12) 0%, rgba(0, 188, 235, 0.04) 100%)',
      borderColor: 'rgba(0, 242, 254, 0.35)',
      icon: <Database size={24} />,
      status: 'Verified Credential',
      credentialId: '3274-46019840',
      verifyUrl: 'https://alison.com/certification/check/3163b669af',
      description:
        'Professional certification in Management Information Systems (MIS), covering information technology management, enterprise information systems, data analytics, business intelligence, IT governance, and strategic decision making.',
      skills: ['Information Systems', 'Enterprise IT Strategy', 'Data Analytics', 'Business Intelligence', 'Systems Analysis', 'Database Management'],
    },
    {
      id: 'cisco-it-essentials',
      order: 2,
      title: 'IT Essentials',
      fullTitle: 'Cisco IT Essentials',
      issuer: 'Cisco Networking Academy',
      offeredBy: 'Invictus Systems',
      instructor: 'Indrajith Bandara',
      completionDate: '28 Jul 2025',
      image: ciscoItEssentials,
      badgeColor: '#00f2fe',
      gradient: 'linear-gradient(135deg, rgba(0, 242, 254, 0.12) 0%, rgba(0, 188, 235, 0.04) 100%)',
      borderColor: 'rgba(0, 242, 254, 0.35)',
      icon: <Cpu size={24} />,
      status: 'Verified Credential',
      verifyUrl: 'https://www.credly.com/badges/22d6a0fd-20df-465d-b2db-998b431f3e6d/public_url',
      description:
        'Comprehensive technical certification covering computer hardware architecture, OS installation and maintenance (Windows & Linux), operational safety, cybersecurity, and IT troubleshooting.',
      skills: ['Hardware Architecture', 'OS Installation & Config', 'Cybersecurity Basics', 'IT Troubleshooting', 'System Maintenance'],
    },
    {
      id: 'cisco-networking-essentials',
      order: 3,
      title: 'Networking Essentials',
      fullTitle: 'Cisco Networking Essentials',
      issuer: 'Cisco Networking Academy',
      offeredBy: 'Innovate IT Institute',
      instructor: 'K.K.Chameera Jayarukshan Pradeep',
      completionDate: '24 Jan 2025',
      image: ciscoNetworkingEssentials,
      badgeColor: '#00f2fe',
      gradient: 'linear-gradient(135deg, rgba(0, 242, 254, 0.12) 0%, rgba(0, 188, 235, 0.04) 100%)',
      borderColor: 'rgba(0, 242, 254, 0.35)',
      icon: <Network size={24} />,
      status: 'Verified Credential',
      verifyUrl: 'https://www.credly.com/badges/5a80766c-2f83-4444-ad34-d87d74868f79/public_url',
      description:
        'In-depth networking certification covering core principles of network architecture, IPv4 & IPv6 addressing, router and switch configuration, network security protocols, and OSI model operations.',
      skills: ['Network Architecture', 'IPv4 & IPv6 Subnetting', 'Router & Switch Config', 'OSI & TCP/IP Models', 'Network Security'],
    },
  ];

  // Lightbox Modal state
  const [activeCertIndex, setActiveCertIndex] = useState(null); // index or null
  const [zoomLevel, setZoomLevel] = useState(1);

  const openModal = (index) => {
    setActiveCertIndex(index);
    setZoomLevel(1);
    document.body.style.overflow = 'hidden';

    // Push browser history state so pressing Back button or swipe back closes modal instead of leaving page
    window.history.pushState({ modalType: 'cert-preview' }, '');
  };

  const closeModal = () => {
    if (activeCertIndex !== null) {
      setActiveCertIndex(null);
      setZoomLevel(1);
      document.body.style.overflow = 'auto';

      // Clean up browser history state if modal state exists
      if (window.history.state?.modalType === 'cert-preview') {
        window.history.back();
      }
    }
  };

  // Popstate event listener for browser Back button / mobile swipe gesture
  useEffect(() => {
    const handlePopState = () => {
      if (activeCertIndex !== null) {
        setActiveCertIndex(null);
        setZoomLevel(1);
        document.body.style.overflow = 'auto';
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [activeCertIndex]);

  // Close lightbox on Escape key & Arrow navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeCertIndex === null) return;
      if (e.key === 'Escape') {
        closeModal();
      } else if (e.key === 'ArrowRight') {
        nextCert();
      } else if (e.key === 'ArrowLeft') {
        prevCert();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeCertIndex]);

  const nextCert = () => {
    if (activeCertIndex === null) return;
    setActiveCertIndex((prev) => (prev + 1) % certifications.length);
    setZoomLevel(1);
  };

  const prevCert = () => {
    if (activeCertIndex === null) return;
    setActiveCertIndex((prev) => (prev - 1 + certifications.length) % certifications.length);
    setZoomLevel(1);
  };

  const currentCert = activeCertIndex !== null ? certifications[activeCertIndex] : null;

  return (
    <section id="certifications" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
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
            <span>GLOBAL CERTIFICATIONS & CREDENTIALS</span>
          </div>

          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 800 }} className="gradient-text">
            Certifications & Qualifications
          </h2>
          <p
            style={{
              color: 'var(--text-secondary)',
              marginTop: '8px',
              fontSize: '1rem',
              maxWidth: '650px',
              margin: '8px auto 0',
              padding: '0 15px',
            }}
          >
            Official certificates awarded through recognized global bodies including Alison (CPD Certified) and Cisco Networking Academy. Click any certificate to open the high-resolution interactive preview.
          </p>
        </div>

        {/* Certifications Cards Grid */}
        <div
          style={{
            maxWidth: '1050px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
            gap: '28px',
            padding: '0 10px',
          }}
        >
          {certifications.map((cert, index) => (
            <div
              key={cert.id}
              className="glass-panel"
              style={{
                borderRadius: '20px',
                background: cert.gradient,
                border: `1px solid ${cert.borderColor}`,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.25)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = `0 16px 36px ${cert.borderColor}`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.25)';
              }}
            >
              <div>
                {/* Certificate Preview Image Container */}
                <div
                  onClick={() => openModal(index)}
                  style={{
                    position: 'relative',
                    width: '100%',
                    aspectRatio: '1.4 / 1',
                    background: '#0d1117',
                    borderBottom: `1px solid ${cert.borderColor}`,
                    cursor: 'pointer',
                    overflow: 'hidden',
                  }}
                  className="cert-img-container"
                >
                  <img
                    src={cert.image}
                    alt={`${cert.title} Certificate`}
                    loading="lazy"
                    decoding="async"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease',
                    }}
                  />

                  {/* Hover Overlay */}
                  <div
                    className="cert-hover-overlay"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'rgba(5, 7, 10, 0.65)',
                      backdropFilter: 'blur(4px)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '10px',
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                      color: '#ffffff',
                    }}
                  >
                    <div
                      style={{
                        background: cert.badgeColor,
                        color: '#05070a',
                        borderRadius: '50%',
                        width: '48px',
                        height: '48px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: `0 0 20px ${cert.borderColor}`,
                      }}
                    >
                      <Eye size={24} />
                    </div>
                    <span style={{ fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.02em' }}>
                      Click to Preview Certificate
                    </span>
                  </div>

                  {/* Certificate Number Badge */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      background: 'rgba(5, 7, 10, 0.85)',
                      backdropFilter: 'blur(8px)',
                      border: `1px solid ${cert.borderColor}`,
                      color: cert.badgeColor,
                      padding: '4px 10px',
                      borderRadius: '8px',
                      fontSize: '0.75rem',
                      fontWeight: 800,
                    }}
                  >
                    #{cert.order} Certificate
                  </div>
                </div>

                {/* Card Content Body */}
                <div style={{ padding: '24px' }}>
                  {/* Status & Issuer */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '8px',
                      marginBottom: '14px',
                      flexWrap: 'wrap',
                    }}
                  >
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
                        fontSize: '0.8rem',
                        color: 'var(--text-muted)',
                        fontWeight: 600,
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '5px',
                      }}
                    >
                      <Calendar size={13} />
                      {cert.completionDate}
                    </span>
                  </div>

                  {/* Certificate Title */}
                  <h3
                    style={{
                      fontSize: '1.4rem',
                      fontWeight: 800,
                      color: 'var(--text-primary)',
                      lineHeight: '1.3',
                      marginBottom: '8px',
                    }}
                  >
                    {cert.title}
                  </h3>

                  {/* Program & Institute info */}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '6px',
                      marginBottom: '16px',
                      fontSize: '0.88rem',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: cert.badgeColor, fontWeight: 700 }}>
                      <Award size={16} />
                      <span>{cert.issuer}</span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Building2 size={15} style={{ color: 'var(--text-muted)' }} />
                      <span>
                        Offered by: <strong style={{ color: 'var(--text-primary)' }}>{cert.offeredBy}</strong>
                      </span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <User size={15} style={{ color: 'var(--text-muted)' }} />
                      <span>
                        Instructor / Signatory: <strong style={{ color: 'var(--text-primary)' }}>{cert.instructor}</strong>
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: '0.9rem',
                      color: 'var(--text-secondary)',
                      lineHeight: '1.6',
                      marginBottom: '20px',
                    }}
                  >
                    {cert.description}
                  </p>

                  {/* Skills Covered Tags */}
                  {cert.skills && cert.skills.length > 0 && (
                    <div>
                      <h4
                        style={{
                          fontSize: '0.78rem',
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em',
                          color: 'var(--text-muted)',
                          marginBottom: '10px',
                          fontWeight: 700,
                        }}
                      >
                        Key Competencies:
                      </h4>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                        {cert.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            style={{
                              fontSize: '0.78rem',
                              fontWeight: 600,
                              color: 'var(--text-primary)',
                              background: 'var(--card-bg)',
                              border: '1px solid var(--card-border)',
                              padding: '4px 10px',
                              borderRadius: '8px',
                            }}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Action Buttons at bottom */}
              <div style={{ padding: '0 24px 24px', display: 'flex', gap: '10px' }}>
                <button
                  onClick={() => openModal(index)}
                  style={{
                    flex: 1,
                    padding: '12px',
                    borderRadius: '12px',
                    background: cert.badgeColor,
                    color: '#05070a',
                    border: 'none',
                    fontWeight: 700,
                    fontSize: '0.92rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    transition: 'var(--transition-smooth)',
                    boxShadow: `0 4px 14px ${cert.borderColor}`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.filter = 'brightness(1.15)';
                    e.currentTarget.style.transform = 'scale(1.02)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.filter = 'none';
                    e.currentTarget.style.transform = 'none';
                  }}
                >
                  <Eye size={18} />
                  <span>Preview</span>
                </button>

                {cert.verifyUrl && (
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      padding: '12px 16px',
                      borderRadius: '12px',
                      background: 'rgba(255, 255, 255, 0.06)',
                      border: `1px solid ${cert.borderColor}`,
                      color: cert.badgeColor,
                      fontWeight: 700,
                      fontSize: '0.88rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                      textDecoration: 'none',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)';
                      e.currentTarget.style.transform = 'scale(1.02)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)';
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                    title={`Verify online credential issued by ${cert.issuer}`}
                  >
                    <ExternalLink size={16} />
                    <span>Verify</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FULLSCREEN PREVIEW LIGHTBOX MODAL (PORTAL TO DOCUMENT.BODY) */}
      {currentCert &&
        createPortal(
          <div
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 9999999,
              background: 'rgba(5, 7, 10, 0.95)',
              backdropFilter: 'blur(16px)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: 'clamp(12px, 3vw, 24px)',
              animation: 'fadeIn 0.25s ease forwards',
            }}
            onClick={closeModal}
          >
            {/* Modal Header Controls */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                width: '100%',
                maxWidth: '1200px',
                margin: '0 auto',
                zIndex: 10,
                gap: '12px',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Action Bar */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                {currentCert.verifyUrl && (
                  <a
                    href={currentCert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '8px 14px',
                      borderRadius: '10px',
                      background: 'rgba(0, 242, 254, 0.15)',
                      border: '1px solid rgba(0, 242, 254, 0.35)',
                      color: '#00f2fe',
                      fontWeight: 700,
                      fontSize: '0.85rem',
                      textDecoration: 'none',
                      transition: 'all 0.2s ease',
                    }}
                    title="Verify online credential"
                  >
                    <ExternalLink size={16} />
                    <span>Verify Online</span>
                  </a>
                )}

                <button
                  onClick={() => setZoomLevel((prev) => Math.min(prev + 0.3, 2.5))}
                  style={modalControlBtnStyle}
                  title="Zoom In"
                >
                  <ZoomIn size={18} />
                </button>

                <button
                  onClick={() => setZoomLevel((prev) => Math.max(prev - 0.3, 1))}
                  style={modalControlBtnStyle}
                  title="Zoom Out"
                >
                  <ZoomOut size={18} />
                </button>
              </div>
            </div>

            {/* Modal Main View (Image + Prev/Next controls) */}
            <div
              style={{
                position: 'relative',
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '16px 0',
                overflow: 'hidden',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Prev Button */}
              <button
                onClick={prevCert}
                style={{
                  ...navArrowStyle,
                  left: 'max(10px, 2vw)',
                }}
                aria-label="Previous Certificate"
              >
                <ChevronLeft size={28} />
              </button>

              {/* Certificate Display Area */}
              <div
                style={{
                  maxWidth: '1000px',
                  maxHeight: '75vh',
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'auto',
                  padding: '10px',
                }}
              >
                <img
                  src={currentCert.image}
                  alt={`${currentCert.title} High Resolution Certificate`}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '72vh',
                    objectFit: 'contain',
                    borderRadius: '12px',
                    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.8)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    transform: `scale(${zoomLevel})`,
                    transition: 'transform 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: zoomLevel > 1 ? 'grab' : 'default',
                  }}
                />
              </div>

              {/* Next Button */}
              <button
                onClick={nextCert}
                style={{
                  ...navArrowStyle,
                  right: 'max(10px, 2vw)',
                }}
                aria-label="Next Certificate"
              >
                <ChevronRight size={28} />
              </button>
            </div>

            {/* Modal Footer Controls */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '18px',
                zIndex: 10,
                flexWrap: 'wrap',
                marginTop: '6px',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '8px 20px',
                  borderRadius: '999px',
                  background: 'rgba(255, 68, 68, 0.2)',
                  border: '1px solid rgba(255, 68, 68, 0.45)',
                  color: '#ff6b6b',
                  fontWeight: 700,
                  fontSize: '0.88rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 4px 15px rgba(255, 68, 68, 0.2)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 68, 68, 0.35)';
                  e.currentTarget.style.transform = 'scale(1.04)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 68, 68, 0.2)';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <X size={18} />
                <span>Close Preview</span>
              </button>
            </div>
          </div>,
          document.body
        )}

      {/* Embedded CSS for Cert hover overlay and responsive styling */}
      <style>{`
        .cert-img-container:hover .cert-hover-overlay {
          opacity: 1 !important;
        }
        .cert-img-container:hover img {
          transform: scale(1.04);
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @media (max-width: 600px) {
          .modal-arrow-nav {
            width: 38px !important;
            height: 38px !important;
          }
        }
      `}</style>
    </section>
  );
}

// Button styles for Modal
const modalControlBtnStyle = {
  background: 'rgba(255, 255, 255, 0.08)',
  border: '1px solid rgba(255, 255, 255, 0.15)',
  color: '#ffffff',
  width: '38px',
  height: '38px',
  borderRadius: '10px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
};

const navArrowStyle = {
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  background: 'rgba(10, 13, 20, 0.75)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  color: '#ffffff',
  width: '46px',
  height: '46px',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  zIndex: 20,
  backdropFilter: 'blur(8px)',
  boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
  transition: 'all 0.2s ease',
};
