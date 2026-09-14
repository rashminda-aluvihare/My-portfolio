import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import {
  Award,
  CheckCircle2,
  Network,
  Cpu,
  Eye,
  Calendar,
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
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
      order: '01',
      title: 'Management Information Systems',
      fullTitle: 'Management Information Systems (MIS)',
      issuer: 'Alison (CPD Certified)',
      completionDate: '02 Feb 2025',
      image: alisonMis,
      icon: <Database size={22} />,
      status: 'Verified Credential',
      credentialId: '3274-46019840',
      verifyUrl: 'https://alison.com/certification/check/3163b669af',
      description:
        'Professional certification in Management Information Systems (MIS), covering information technology management, enterprise information systems, data analytics, business intelligence, IT governance, and strategic decision making.',
    },
    {
      id: 'cisco-it-essentials',
      order: '02',
      title: 'IT Essentials',
      fullTitle: 'Cisco IT Essentials',
      issuer: 'Cisco Networking Academy',
      completionDate: '28 Jul 2025',
      image: ciscoItEssentials,
      icon: <Cpu size={22} />,
      status: 'Verified Credential',
      verifyUrl: 'https://www.credly.com/badges/22d6a0fd-20df-465d-b2db-998b431f3e6d/public_url',
      description:
        'Comprehensive technical certification covering computer hardware architecture, OS installation and maintenance (Windows & Linux), operational safety, cybersecurity, and IT troubleshooting.',
    },
    {
      id: 'cisco-networking-essentials',
      order: '03',
      title: 'Networking Essentials',
      fullTitle: 'Cisco Networking Essentials',
      issuer: 'Cisco Networking Academy',
      completionDate: '24 Jan 2025',
      image: ciscoNetworkingEssentials,
      icon: <Network size={22} />,
      status: 'Verified Credential',
      verifyUrl: 'https://www.credly.com/badges/5a80766c-2f83-4444-ad34-d87d74868f79/public_url',
      description:
        'In-depth networking certification covering core principles of network architecture, IPv4 & IPv6 addressing, router and switch configuration, network security protocols, and OSI model operations.',
    },
  ];

  // Lightbox Modal state
  const [activeCertIndex, setActiveCertIndex] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(1);

  const openModal = (index) => {
    setActiveCertIndex(index);
    setZoomLevel(1);
    document.body.style.overflow = 'hidden';
    window.history.pushState({ modalType: 'cert-preview' }, '');
  };

  const closeModal = () => {
    if (activeCertIndex !== null) {
      setActiveCertIndex(null);
      setZoomLevel(1);
      document.body.style.overflow = 'auto';

      if (window.history.state?.modalType === 'cert-preview') {
        window.history.back();
      }
    }
  };

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

  const nextCert = (e) => {
    e.stopPropagation();
    setActiveCertIndex((prev) => (prev + 1) % certifications.length);
    setZoomLevel(1);
  };

  const prevCert = (e) => {
    e.stopPropagation();
    setActiveCertIndex((prev) => (prev - 1 + certifications.length) % certifications.length);
    setZoomLevel(1);
  };

  const currentCert = activeCertIndex !== null ? certifications[activeCertIndex] : null;

  return (
    <section id="certifications" className="section section-white" style={{ backgroundColor: '#FFFFFF', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: '44px' }}>
          <div className="section-label" style={{ marginBottom: '12px' }}>
            CERTIFICATIONS / 06
          </div>
          <h2 style={{ fontSize: 'clamp(2.1rem, 4vw, 3.2rem)', fontWeight: 900, color: '#0F172A', letterSpacing: '-0.03em', lineHeight: 1.15 }}>
            Verified Professional Certifications
          </h2>
          <p style={{ color: '#475569', fontSize: '1.05rem', marginTop: '10px', maxWidth: '750px', lineHeight: 1.6 }}>
            Industry-standard qualifications validating enterprise management information systems, hardware architectures, and network protocols.
          </p>
        </div>

        {/* Certifications Cards Grid */}
        <div
          style={{
            maxWidth: '1100px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: '24px',
          }}
        >
          {certifications.map((cert, index) => (
            <div
              key={cert.id}
              className="card-flat"
              style={{
                borderRadius: '18px',
                background: '#FFFFFF',
                border: '1px solid rgba(226, 232, 240, 0.9)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(15, 23, 42, 0.04)',
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
                    background: '#F1F5F9',
                    borderBottom: '1px solid rgba(226, 232, 240, 0.9)',
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
                      transition: 'transform 0.4s ease',
                    }}
                  />

                  {/* Hover Overlay */}
                  <div
                    className="cert-hover-overlay"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'rgba(15, 23, 42, 0.72)',
                      backdropFilter: 'blur(4px)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '10px',
                      opacity: 0,
                      transition: 'opacity 0.25s ease',
                      color: '#ffffff',
                    }}
                  >
                    <div
                      style={{
                        background: 'linear-gradient(135deg, #2563EB, #7C3AED)',
                        color: '#FFFFFF',
                        borderRadius: '50%',
                        width: '46px',
                        height: '46px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 0 20px rgba(37, 99, 235, 0.6)',
                      }}
                    >
                      <Eye size={22} />
                    </div>
                    <span style={{ fontWeight: 700, fontSize: '0.88rem', letterSpacing: '0.02em', fontFamily: 'var(--font-display)' }}>
                      Click to Preview Certificate
                    </span>
                  </div>

                  {/* Certificate Number Badge */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      background: '#FFFFFF',
                      border: '1px solid rgba(37, 99, 235, 0.25)',
                      color: '#2563EB',
                      padding: '4px 10px',
                      borderRadius: '6px',
                      fontSize: '0.75rem',
                      fontWeight: 800,
                      fontFamily: 'var(--font-display)',
                      boxShadow: '0 2px 8px rgba(15, 23, 42, 0.08)',
                    }}
                  >
                    #{cert.order}
                  </div>
                </div>

                {/* Card Content Body */}
                <div style={{ padding: '24px' }}>
                  {/* Status & Date */}
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
                        fontSize: '0.76rem',
                        fontWeight: 700,
                        color: '#2563EB',
                        background: '#EFF6FF',
                        border: '1px solid rgba(37, 99, 235, 0.2)',
                        padding: '3px 10px',
                        borderRadius: '999px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontFamily: 'var(--font-display)',
                      }}
                    >
                      <CheckCircle2 size={12} />
                      {cert.status}
                    </span>

                    <span
                      style={{
                        fontSize: '0.78rem',
                        color: '#64748B',
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

                  {/* Title */}
                  <h3
                    style={{
                      fontSize: '1.22rem',
                      fontWeight: 800,
                      color: '#0F172A',
                      lineHeight: '1.3',
                      marginBottom: '8px',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {cert.title}
                  </h3>

                  {/* Issuer */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      color: '#2563EB',
                      fontWeight: 700,
                      fontSize: '0.88rem',
                      marginBottom: '12px',
                      fontFamily: 'var(--font-display)',
                    }}
                  >
                    <Award size={16} />
                    <span>{cert.issuer}</span>
                  </div>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: '0.88rem',
                      color: '#475569',
                      lineHeight: '1.6',
                      marginBottom: '16px',
                    }}
                  >
                    {cert.description}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ padding: '0 24px 24px', display: 'flex', gap: '10px' }}>
                <button
                  onClick={() => openModal(index)}
                  className="btn-primary"
                  style={{
                    flex: 1,
                    padding: '10px',
                    fontSize: '0.88rem',
                  }}
                >
                  <Eye size={16} />
                  <span>Preview</span>
                </button>

                {cert.verifyUrl && (
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline"
                    style={{
                      padding: '10px 16px',
                      fontSize: '0.85rem',
                    }}
                    title={`Verify online credential issued by ${cert.issuer}`}
                  >
                    <ExternalLink size={15} />
                    <span>Verify</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FULLSCREEN PREVIEW LIGHTBOX MODAL */}
      {currentCert &&
        createPortal(
          <div
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 9999999,
              background: 'rgba(15, 23, 42, 0.92)',
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
                      padding: '8px 16px',
                      borderRadius: '999px',
                      background: 'linear-gradient(135deg, #2563EB, #7C3AED)',
                      color: '#FFFFFF',
                      fontWeight: 700,
                      fontSize: '0.85rem',
                      textDecoration: 'none',
                      transition: 'all 0.2s ease',
                      fontFamily: 'var(--font-display)',
                      boxShadow: '0 2px 10px rgba(37, 99, 235, 0.4)',
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

            {/* Modal Main View */}
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
              <button
                onClick={prevCert}
                style={{
                  ...navArrowStyle,
                  left: 'max(10px, 2vw)',
                }}
                aria-label="Previous Certificate"
              >
                <ChevronLeft size={26} />
              </button>

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

              <button
                onClick={nextCert}
                style={{
                  ...navArrowStyle,
                  right: 'max(10px, 2vw)',
                }}
                aria-label="Next Certificate"
              >
                <ChevronRight size={26} />
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
                  padding: '8px 22px',
                  borderRadius: '999px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  color: '#FFFFFF',
                  fontWeight: 700,
                  fontSize: '0.88rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  fontFamily: 'var(--font-display)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#2563EB';
                  e.currentTarget.style.borderColor = '#2563EB';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                }}
              >
                <X size={18} />
                <span>Close Preview</span>
              </button>
            </div>
          </div>,
          document.body
        )}

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
      `}</style>
    </section>
  );
}

const modalControlBtnStyle = {
  background: 'rgba(255, 255, 255, 0.1)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  color: '#ffffff',
  width: '38px',
  height: '38px',
  borderRadius: '50%',
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
  background: 'rgba(15, 23, 42, 0.88)',
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
