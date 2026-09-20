import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import {
  Award,
  CheckCircle2,
  Eye,
  Calendar,
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  ExternalLink,
  ArrowUpRight,
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
      status: 'Verified Credential',
      verifyUrl: 'https://alison.com/certification/check/3163b669af',
    },
    {
      id: 'cisco-it-essentials',
      order: '02',
      title: 'IT Essentials',
      fullTitle: 'Cisco IT Essentials',
      issuer: 'Cisco Networking Academy',
      completionDate: '28 Jul 2025',
      image: ciscoItEssentials,
      status: 'Verified Credential',
      verifyUrl: 'https://www.credly.com/badges/22d6a0fd-20df-465d-b2db-998b431f3e6d/public_url',
    },
    {
      id: 'cisco-networking-essentials',
      order: '03',
      title: 'Networking Essentials',
      fullTitle: 'Cisco Networking Essentials',
      issuer: 'Cisco Networking Academy',
      completionDate: '24 Jan 2025',
      image: ciscoNetworkingEssentials,
      status: 'Verified Credential',
      verifyUrl: 'https://www.credly.com/badges/5a80766c-2f83-4444-ad34-d87d74868f79/public_url',
    },
  ];

  // Active certificate index in the single-card showcase
  const [selectedCertIndex, setSelectedCertIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Side Drawer state for "View All Certifications"
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Fullscreen Lightbox Modal state
  const [activeCertIndex, setActiveCertIndex] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(1);

  // Auto-scroll / auto-advance every 4.5 seconds
  useEffect(() => {
    if (activeCertIndex !== null || isDrawerOpen || isHovered) {
      return;
    }

    const timer = setInterval(() => {
      setSelectedCertIndex((prev) => (prev + 1) % certifications.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [activeCertIndex, isDrawerOpen, isHovered, certifications.length]);

  const openModal = (index) => {
    setActiveCertIndex(index);
    setZoomLevel(1);
    window.history.pushState({ modalType: 'cert-preview' }, '');
  };

  const closeModal = () => {
    if (activeCertIndex !== null) {
      setActiveCertIndex(null);
      setZoomLevel(1);
      if (window.history.state?.modalType === 'cert-preview') {
        window.history.back();
      }
    }
  };

  // Lock background scroll when either drawer or lightbox is open
  useEffect(() => {
    if (activeCertIndex !== null || isDrawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [activeCertIndex, isDrawerOpen]);

  // Handle browser back button (popstate)
  useEffect(() => {
    const handlePopState = () => {
      if (activeCertIndex !== null) {
        setActiveCertIndex(null);
        setZoomLevel(1);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [activeCertIndex]);

  // Handle Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (activeCertIndex !== null) {
          closeModal();
        } else if (isDrawerOpen) {
          setIsDrawerOpen(false);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeCertIndex, isDrawerOpen]);

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

  const activeFeaturedCert = certifications[selectedCertIndex] || certifications[0];
  const currentCert = activeCertIndex !== null ? certifications[activeCertIndex] : null;

  return (
    <section
      id="certifications"
      className="section section-white"
      style={{
        backgroundColor: '#FFFFFF',
        position: 'relative',
        padding: 'clamp(60px, 8vw, 90px) 0',
      }}
    >
      <div className="container" style={{ maxWidth: '1280px' }}>
        {/* Section Header with Side "View All Certifications" Button */}
        <div className="cert-section-header">
          <div>
            <h2
              style={{
                fontSize: 'clamp(1.85rem, 4vw, 3.2rem)',
                fontWeight: 900,
                color: '#0F172A',
                letterSpacing: '-0.03em',
                lineHeight: 1.15,
                margin: 0,
              }}
            >
              Verified Professional Certifications
            </h2>
          </div>

          {/* Side "View All Certifications" Button */}
          <button
            onClick={() => setIsDrawerOpen(true)}
            className="view-all-cert-header-btn"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              padding: '11px 22px',
              borderRadius: '999px',
              background: '#EFF6FF',
              border: '1.5px solid rgba(37, 99, 235, 0.3)',
              color: '#2563EB',
              fontWeight: 700,
              fontSize: '0.94rem',
              cursor: 'pointer',
              transition: 'all 0.25s ease',
              fontFamily: 'var(--font-display)',
              boxShadow: '0 2px 10px rgba(37, 99, 235, 0.08)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#2563EB';
              e.currentTarget.style.color = '#FFFFFF';
              e.currentTarget.style.borderColor = '#2563EB';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 18px rgba(37, 99, 235, 0.25)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#EFF6FF';
              e.currentTarget.style.color = '#2563EB';
              e.currentTarget.style.borderColor = 'rgba(37, 99, 235, 0.3)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 2px 10px rgba(37, 99, 235, 0.08)';
            }}
          >
            <span>View All Certifications</span>
            <ArrowUpRight size={17} strokeWidth={2.4} />
          </button>
        </div>

        {/* Single Certificate Showcase Card */}
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <div
            key={activeFeaturedCert.id}
            className="card-flat single-cert-showcase"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
              borderRadius: '24px',
              background: '#FFFFFF',
              border: '1px solid rgba(226, 232, 240, 0.95)',
              overflow: 'hidden',
              boxShadow: '0 10px 35px rgba(15, 23, 42, 0.06)',
              position: 'relative',
              animation: 'certCardFadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            {/* Certificate Preview Image Box */}
            <div
              onClick={() => openModal(selectedCertIndex)}
              className="cert-img-container cert-showcase-img-box"
              style={{
                position: 'relative',
                width: '100%',
                minHeight: '340px',
                height: '100%',
                background: '#F1F5F9',
                cursor: 'pointer',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '16px',
              }}
            >
              <img
                src={activeFeaturedCert.image}
                alt={`${activeFeaturedCert.title} Certificate`}
                loading="eager"
                style={{
                  width: '100%',
                  height: '100%',
                  maxHeight: '360px',
                  objectFit: 'contain',
                  borderRadius: '10px',
                  background: '#FFFFFF',
                  border: '1px solid rgba(226, 232, 240, 0.9)',
                  boxShadow: '0 6px 22px rgba(15, 23, 42, 0.08)',
                  transition: 'transform 0.3s ease',
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
                    width: '50px',
                    height: '50px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 0 20px rgba(37, 99, 235, 0.6)',
                  }}
                >
                  <Eye size={24} />
                </div>
                <span
                  style={{
                    fontWeight: 700,
                    fontSize: '0.92rem',
                    letterSpacing: '0.02em',
                    fontFamily: 'var(--font-display)',
                  }}
                >
                  Click to Preview Certificate
                </span>
              </div>

              {/* Certificate Number Badge */}
              <div
                style={{
                  position: 'absolute',
                  top: '14px',
                  left: '14px',
                  background: '#FFFFFF',
                  border: '1px solid rgba(37, 99, 235, 0.25)',
                  color: '#2563EB',
                  padding: '4px 11px',
                  borderRadius: '8px',
                  fontSize: '0.8rem',
                  fontWeight: 800,
                  fontFamily: 'var(--font-display)',
                  boxShadow: '0 2px 10px rgba(15, 23, 42, 0.1)',
                  zIndex: 2,
                }}
              >
                #{activeFeaturedCert.order}
              </div>
            </div>

            {/* Card Content Body */}
            <div className="cert-showcase-body">
              <div>
                {/* Status Badge */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    marginBottom: '16px',
                    flexWrap: 'wrap',
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      color: '#2563EB',
                      background: '#EFF6FF',
                      border: '1px solid rgba(37, 99, 235, 0.2)',
                      padding: '4px 12px',
                      borderRadius: '999px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontFamily: 'var(--font-display)',
                    }}
                  >
                    <CheckCircle2 size={13} />
                    {activeFeaturedCert.status}
                  </span>
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontSize: 'clamp(1.3rem, 2.5vw, 1.7rem)',
                    fontWeight: 800,
                    color: '#0F172A',
                    lineHeight: '1.25',
                    marginBottom: '10px',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {activeFeaturedCert.title}
                </h3>

                {/* Issuer */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: '#2563EB',
                    fontWeight: 700,
                    fontSize: '0.98rem',
                    fontFamily: 'var(--font-display)',
                    marginBottom: '8px',
                  }}
                >
                  <Award size={18} />
                  <span>{activeFeaturedCert.issuer}</span>
                </div>
              </div>

              {/* Action Buttons Row */}
              <div className="cert-showcase-actions">
                <button
                  onClick={() => openModal(selectedCertIndex)}
                  className="btn-primary"
                  style={{
                    flex: '1 1 140px',
                    padding: '11px 20px',
                    fontSize: '0.88rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                  }}
                >
                  <Eye size={17} />
                  <span>Preview</span>
                </button>

                {activeFeaturedCert.verifyUrl && (
                  <a
                    href={activeFeaturedCert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline"
                    style={{
                      flex: '1 1 140px',
                      padding: '11px 20px',
                      fontSize: '0.86rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                    }}
                    title={`Verify online credential issued by ${activeFeaturedCert.issuer}`}
                  >
                    <ExternalLink size={16} />
                    <span>Verify</span>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* ── Bullet Indicators Underneath the Card with Auto-Scroll ── */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              marginTop: '26px',
            }}
          >
            {certifications.map((_, idx) => {
              const isActive = selectedCertIndex === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedCertIndex(idx)}
                  aria-label={`Go to certificate ${idx + 1}`}
                  title={`View Certificate ${idx + 1}`}
                  style={{
                    width: isActive ? '34px' : '10px',
                    height: '10px',
                    borderRadius: '999px',
                    background: isActive
                      ? 'linear-gradient(135deg, #2563EB, #1D4ED8)'
                      : 'rgba(203, 213, 225, 0.85)',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0,
                    transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                    boxShadow: isActive ? '0 2px 10px rgba(37, 99, 235, 0.35)' : 'none',
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* ── SIDE DRAWER: ALL CERTIFICATIONS ── */}
      {isDrawerOpen &&
        createPortal(
          <div
            className="cert-drawer-backdrop"
            onClick={() => setIsDrawerOpen(false)}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 999999,
              background: 'rgba(15, 23, 42, 0.65)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              display: 'flex',
              justifyContent: 'flex-end',
              animation: 'fadeInBackdrop 0.25s ease-out',
            }}
          >
            <div
              className="cert-drawer-panel"
              onClick={(e) => e.stopPropagation()}
              style={{
                height: '100vh',
                background: '#F8FAFC',
                borderLeft: '1px solid rgba(226, 232, 240, 0.95)',
                boxShadow: '-15px 0 50px rgba(15, 23, 42, 0.25)',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                animation: 'slideInDrawer 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              {/* Drawer Header */}
              <div
                className="cert-drawer-header"
                style={{
                  background: '#FFFFFF',
                  borderBottom: '1px solid rgba(226, 232, 240, 0.9)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexShrink: 0,
                  gap: '12px',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <h3
                      style={{
                        fontSize: 'clamp(1.2rem, 3vw, 1.4rem)',
                        fontWeight: 900,
                        color: '#0F172A',
                        letterSpacing: '-0.02em',
                        margin: 0,
                      }}
                    >
                      All Certifications
                    </h3>
                    <span
                      style={{
                        background: '#EFF6FF',
                        color: '#2563EB',
                        fontSize: '0.78rem',
                        fontWeight: 800,
                        padding: '3px 10px',
                        borderRadius: '999px',
                        border: '1px solid rgba(37, 99, 235, 0.2)',
                        fontFamily: 'var(--font-display)',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {certifications.length} Credentials
                    </span>
                  </div>
                  <p style={{ margin: '4px 0 0', color: '#64748B', fontSize: '0.84rem' }}>
                    Verified academic and technical qualifications
                  </p>
                </div>

                <button
                  onClick={() => setIsDrawerOpen(false)}
                  aria-label="Close certifications drawer"
                  style={{
                    background: '#F1F5F9',
                    border: '1px solid rgba(226, 232, 240, 0.9)',
                    borderRadius: '50%',
                    width: '38px',
                    height: '38px',
                    minWidth: '38px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#0F172A',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#0F172A';
                    e.currentTarget.style.color = '#FFFFFF';
                    e.currentTarget.style.transform = 'rotate(90deg)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#F1F5F9';
                    e.currentTarget.style.color = '#0F172A';
                    e.currentTarget.style.transform = 'rotate(0deg)';
                  }}
                >
                  <X size={19} />
                </button>
              </div>

              {/* Drawer Scrollable List with All Certificates */}
              <div
                className="cert-drawer-body"
                style={{
                  overflowY: 'auto',
                  flexGrow: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px',
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
                      overflow: 'hidden',
                      boxShadow: '0 4px 18px rgba(15, 23, 42, 0.04)',
                      display: 'flex',
                      flexDirection: 'column',
                      transition: 'all 0.25s ease',
                    }}
                  >
                    {/* Certificate Preview Image Banner */}
                    <div
                      onClick={() => openModal(index)}
                      className="cert-img-container cert-drawer-img-banner"
                      style={{
                        position: 'relative',
                        width: '100%',
                        height: '240px',
                        minHeight: '240px',
                        flexShrink: 0,
                        background: '#F1F5F9',
                        borderBottom: '1px solid rgba(226, 232, 240, 0.85)',
                        cursor: 'pointer',
                        overflow: 'hidden',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '12px',
                      }}
                    >
                      <img
                        src={cert.image}
                        alt={`${cert.title} Certificate`}
                        loading="eager"
                        style={{
                          width: '100%',
                          height: '100%',
                          maxHeight: '100%',
                          objectFit: 'contain',
                          borderRadius: '8px',
                          background: '#FFFFFF',
                          border: '1px solid rgba(226, 232, 240, 0.9)',
                          boxShadow: '0 4px 16px rgba(15, 23, 42, 0.08)',
                          transition: 'transform 0.3s ease',
                        }}
                      />

                      {/* Hover overlay */}
                      <div
                        className="cert-hover-overlay"
                        style={{
                          position: 'absolute',
                          inset: 0,
                          background: 'rgba(15, 23, 42, 0.72)',
                          backdropFilter: 'blur(4px)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '8px',
                          opacity: 0,
                          transition: 'opacity 0.2s ease',
                          color: '#FFFFFF',
                          fontWeight: 700,
                          fontSize: '0.88rem',
                          fontFamily: 'var(--font-display)',
                        }}
                      >
                        <Eye size={20} />
                        <span>Preview Certificate</span>
                      </div>

                      {/* Order Badge */}
                      <div
                        style={{
                          position: 'absolute',
                          top: '12px',
                          left: '12px',
                          background: '#FFFFFF',
                          border: '1px solid rgba(37, 99, 235, 0.25)',
                          color: '#2563EB',
                          padding: '3px 9px',
                          borderRadius: '6px',
                          fontSize: '0.74rem',
                          fontWeight: 800,
                          fontFamily: 'var(--font-display)',
                          boxShadow: '0 2px 8px rgba(15, 23, 42, 0.08)',
                          zIndex: 2,
                        }}
                      >
                        #{cert.order}
                      </div>
                    </div>

                    {/* Card Content */}
                    <div style={{ padding: 'clamp(16px, 3vw, 20px)' }}>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          gap: '8px',
                          marginBottom: '12px',
                          flexWrap: 'wrap',
                        }}
                      >
                        <span
                          style={{
                            fontSize: '0.74rem',
                            fontWeight: 700,
                            color: '#2563EB',
                            background: '#EFF6FF',
                            border: '1px solid rgba(37, 99, 235, 0.2)',
                            padding: '3px 9px',
                            borderRadius: '999px',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '5px',
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

                      <h4
                        style={{
                          fontSize: '1.18rem',
                          fontWeight: 800,
                          color: '#0F172A',
                          lineHeight: '1.3',
                          marginBottom: '6px',
                          letterSpacing: '-0.01em',
                        }}
                      >
                        {cert.title}
                      </h4>

                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                          color: '#2563EB',
                          fontWeight: 700,
                          fontSize: '0.86rem',
                          marginBottom: '16px',
                          fontFamily: 'var(--font-display)',
                        }}
                      >
                        <Award size={15} />
                        <span>{cert.issuer}</span>
                      </div>

                      {/* Actions Responsive Layout */}
                      <div className="cert-drawer-actions">
                        <button
                          onClick={() => openModal(index)}
                          className="btn-primary"
                          style={{
                            padding: '9px 14px',
                            fontSize: '0.85rem',
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '6px',
                          }}
                        >
                          <Eye size={15} />
                          <span>Preview</span>
                        </button>

                        {cert.verifyUrl && (
                          <a
                            href={cert.verifyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-outline"
                            style={{
                              padding: '9px 14px',
                              fontSize: '0.85rem',
                              display: 'inline-flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              gap: '6px',
                            }}
                            title={`Verify credential`}
                          >
                            <ExternalLink size={14} />
                            <span>Verify</span>
                          </a>
                        )}

                        <button
                          onClick={() => {
                            setSelectedCertIndex(index);
                            setIsDrawerOpen(false);
                          }}
                          className="cert-drawer-btn-feature"
                          style={{
                            padding: '9px 12px',
                            borderRadius: '8px',
                            background: selectedCertIndex === index ? '#EFF6FF' : '#F1F5F9',
                            border:
                              selectedCertIndex === index
                                ? '1px solid #2563EB'
                                : '1px solid rgba(226, 232, 240, 0.9)',
                            color: selectedCertIndex === index ? '#2563EB' : '#475569',
                            fontSize: '0.82rem',
                            fontWeight: 700,
                            cursor: 'pointer',
                            fontFamily: 'var(--font-display)',
                            transition: 'all 0.2s ease',
                          }}
                          title="Show this certificate in the main section"
                        >
                          {selectedCertIndex === index ? 'Featured' : 'Show in section'}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Drawer Footer */}
              <div
                className="cert-drawer-footer"
                style={{
                  background: '#FFFFFF',
                  borderTop: '1px solid rgba(226, 232, 240, 0.9)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexShrink: 0,
                }}
              >
                <span style={{ fontSize: '0.82rem', color: '#64748B', fontWeight: 500 }}>
                  Showing {certifications.length} of {certifications.length} credentials
                </span>
                <button
                  onClick={() => setIsDrawerOpen(false)}
                  style={{
                    padding: '8px 20px',
                    borderRadius: '999px',
                    background: '#0F172A',
                    color: '#FFFFFF',
                    border: 'none',
                    fontWeight: 700,
                    fontSize: '0.85rem',
                    cursor: 'pointer',
                    fontFamily: 'var(--font-display)',
                    transition: 'background 0.2s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = '#2563EB')}
                  onMouseLeave={(e) => (e.currentTarget.style.background = '#0F172A')}
                >
                  Done
                </button>
              </div>
            </div>
          </div>,
          document.body
        )}

      {/* ── FULLSCREEN PREVIEW LIGHTBOX MODAL ── */}
      {currentCert &&
        createPortal(
          <div
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 9999999,
              background: 'rgba(15, 23, 42, 0.94)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: 'clamp(10px, 2.5vw, 24px)',
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
                gap: '10px',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
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
                      fontSize: '0.84rem',
                      textDecoration: 'none',
                      transition: 'all 0.2s ease',
                      fontFamily: 'var(--font-display)',
                      boxShadow: '0 2px 10px rgba(37, 99, 235, 0.4)',
                    }}
                    title="Verify online credential"
                  >
                    <ExternalLink size={15} />
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
                margin: '12px 0',
                overflow: 'hidden',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={prevCert}
                className="cert-modal-nav-btn cert-modal-nav-prev"
                style={{
                  ...navArrowStyle,
                  left: 'max(8px, 2vw)',
                }}
                aria-label="Previous Certificate"
              >
                <ChevronLeft size={24} />
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
                  padding: '6px',
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
                className="cert-modal-nav-btn cert-modal-nav-next"
                style={{
                  ...navArrowStyle,
                  right: 'max(8px, 2vw)',
                }}
                aria-label="Next Certificate"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Modal Footer Controls */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '16px',
                zIndex: 10,
                flexWrap: 'wrap',
                marginTop: '4px',
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

      {/* ── RESPONSIVE COMPONENT STYLES ── */}
      <style>{`
        /* Header responsiveness */
        .cert-section-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 18px;
          margin-bottom: 38px;
        }

        /* Showcase Card Desktop (>= 860px) */
        .single-cert-showcase {
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          align-items: stretch;
        }
        .cert-showcase-img-box {
          border-right: 1px solid rgba(226, 232, 240, 0.85);
          border-bottom: none;
        }
        .cert-showcase-body {
          padding: clamp(24px, 3.5vw, 36px);
          display: flex;
          flex-direction: column;
          justifyContent: space-between;
          gap: 22px;
          background: #FFFFFF;
        }
        .cert-showcase-actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        /* Side Drawer Desktop default */
        .cert-drawer-panel {
          width: min(560px, 92vw);
        }
        .cert-drawer-header {
          padding: 22px 28px;
        }
        .cert-drawer-body {
          padding: 24px 28px;
        }
        .cert-drawer-footer {
          padding: 16px 28px;
        }
        .cert-drawer-actions {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }
        .cert-drawer-actions button,
        .cert-drawer-actions a {
          flex: 1 1 auto;
        }

        /* Tablet & Mobile Breakpoint (<= 860px) */
        @media (max-width: 860px) {
          .single-cert-showcase {
            grid-template-columns: 1fr !important;
          }
          .cert-showcase-img-box {
            min-height: 220px !important;
            height: 260px !important;
            border-right: none !important;
            border-bottom: 1px solid rgba(226, 232, 240, 0.85) !important;
            padding: 12px !important;
          }
          .cert-showcase-body {
            padding: 22px 18px !important;
          }
          .cert-showcase-actions {
            display: grid !important;
            grid-template-columns: 1fr 1fr !important;
            width: 100% !important;
          }
          .cert-showcase-actions button,
          .cert-showcase-actions a {
            width: 100% !important;
            justify-content: center !important;
          }
        }

        /* Mobile Phone Breakpoint (<= 640px) */
        @media (max-width: 640px) {
          .cert-section-header {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 14px !important;
            margin-bottom: 26px !important;
          }
          .view-all-cert-header-btn {
            width: 100% !important;
            justify-content: center !important;
            padding: 10px 18px !important;
            font-size: 0.88rem !important;
          }
          .cert-drawer-panel {
            width: 100vw !important;
          }
          .cert-drawer-header {
            padding: 16px 18px !important;
          }
          .cert-drawer-img-banner {
            height: 200px !important;
            min-height: 200px !important;
            padding: 8px !important;
          }
          .cert-drawer-body {
            padding: 14px 12px !important;
            gap: 14px !important;
          }
          .cert-drawer-footer {
            padding: 12px 16px !important;
          }
          .cert-drawer-actions {
            display: grid !important;
            grid-template-columns: 1fr 1fr !important;
            gap: 8px !important;
          }
          .cert-drawer-btn-feature {
            grid-column: 1 / -1 !important;
            width: 100% !important;
            text-align: center !important;
          }
          .cert-modal-nav-btn {
            width: 38px !important;
            height: 38px !important;
          }
          .cert-modal-nav-prev {
            left: 6px !important;
          }
          .cert-modal-nav-next {
            right: 6px !important;
          }
        }

        .cert-img-container:hover .cert-hover-overlay {
          opacity: 1 !important;
        }
        .cert-img-container:hover img {
          transform: scale(1.03);
        }
        @keyframes certCardFadeIn {
          from { opacity: 0.88; transform: scale(0.995); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeInBackdrop {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideInDrawer {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
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
