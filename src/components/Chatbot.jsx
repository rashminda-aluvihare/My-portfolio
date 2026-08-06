import { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, Sparkles, RefreshCw, MessageSquare, ArrowRight, User, ExternalLink, Mail, Phone } from 'lucide-react';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMsg, setInputMsg] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);

  // Initial welcome message
  const initialMessages = [
    {
      id: 1,
      sender: 'bot',
      text: "👋 Subha Dawsak / Hi there! I'm **Rashminda's AI Assistant**.\n\nYou can ask me anything about Rashminda's background, technical skills, projects, experience, or contact details!",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      suggestions: [
        '👨‍💻 Who is Rashminda?',
        '⚡ Technical Skills',
        '🚀 Projects & Work',
        '💼 Work Experience',
        '📩 How to Contact?'
      ]
    }
  ];

  const [messages, setMessages] = useState(initialMessages);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Auto scroll to latest message
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setHasUnread(false);
      setTimeout(() => inputRef.current?.focus(), 200);
    }
  }, [isOpen, messages, isTyping]);

  // Knowledge base responses generator
  const getBotResponse = (userText) => {
    const text = userText.toLowerCase().trim();

    // Greeting matching
    if (text.match(/^(hi|hello|hey|hii|hola|subha|sugandhi|halo|ayubowan|greetings)/i)) {
      return {
        text: "👋 Hello! Great to meet you! How can I help you learn more about Rashminda today?",
        suggestions: ['👨‍💻 Who is Rashminda?', '⚡ Technical Skills', '🚀 Projects', '📩 Contact Details']
      };
    }

    // 1. Projects / Case Studies / Work (check before generic about/rashminda)
    if (text.match(/(project|work|app|portfolio|system|loan|fund|furniture|demo|built|make|created)/i)) {
      return {
        text: "🚀 **Featured Projects & Web Apps**:\n\n1. 🏦 **Bank Loan Management System**: Streamlined loan origination, credit evaluation, and repayment tracking.\n2. 💰 **Fund Management Platform**: Enterprise system for portfolio tracking and capital allocation.\n3. 🛋️ **E-Commerce Furniture Store**: Modern online store with dynamic catalogue & order workflow.\n4. 🌐 **Personal Interactive Portfolio**: Glassmorphism UI built with React 19 & Vite.\n5. 🔗 **Blockchain Simulation**: Interactive network nodes visualization.",
        actionBtn: { label: 'Go to Projects Section', targetId: 'projects' },
        suggestions: ['⚡ Tech Stack', '💼 Experience', '📩 Contact Info']
      };
    }

    // 2. Skills / Tech Stack
    if (text.match(/(skill|tech|stack|language|framework|code|java|react|php|mysql|node|business analysis)/i)) {
      return {
        text: "⚡ **Rashminda's Tech Stack & Capabilities**:\n\n🔹 **Frontend**: React 19, Next.js, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Glassmorphism UI\n🔹 **Backend & Databases**: Node.js, Java SE, PHP, MySQL RDBMS, REST APIs\n🔹 **Business Analysis**: SRS / BRD Documentation, BPMN 2.0 Process Mapping, Requirements Engineering\n🔹 **Tools & Methodologies**: Git/GitHub, Agile / Scrum Delivery, Vite, Web3Forms",
        suggestions: ['🚀 View Projects', '🎓 Education', '💼 Work Experience']
      };
    }

    // 3. Work Experience / Employment
    if (text.match(/(experience|job|bank|peoples|decode|decodelabs|work history|role)/i)) {
      return {
        text: "💼 **Professional Experience**:\n\n• 🏢 **Decodelabs** — Full-Stack Software Developer\n  - Built responsive React & Next.js frontend interfaces and integrated backend REST APIs.\n\n• 🏦 **People's Bank Sri Lanka** — Banking Operations Trainee / Assistant\n  - Hands-on experience with customer financial workflows, account management, and core banking operations.",
        suggestions: ['🎓 Education', '🚀 View Projects', '📩 Get in Touch']
      };
    }

    // 4. Education / Qualifications
    if (text.match(/(education|degree|sliate|ibsl|study|hndit|diploma|qualification|school)/i)) {
      return {
        text: "🎓 **Educational Qualifications**:\n\n• 🎓 **HNDIT (Higher National Diploma in Information Technology)** — SLIATE (Sri Lanka Institute of Advanced Technological Education)\n• 🏛️ **Diploma in Banking & Finance (DBF)** — IBSL (Institute of Bankers of Sri Lanka)",
        suggestions: ['⚡ Skills', '💼 Work Experience', '📩 Contact Info']
      };
    }

    // 5. Contact / Hire / Phone / Email / WhatsApp
    if (text.match(/(contact|hire|email|phone|whatsapp|number|reach|message|call|mail|connect)/i)) {
      return {
        text: "📩 **Contact Information**:\n\n• 📧 **Email**: rashmindaluvihare@gmail.com\n• 📱 **WhatsApp / Direct Line**: +94 77 974 3901\n• 📍 **Location**: Sri Lanka\n\nYou can also send a direct message through the Contact section on this website!",
        actionBtn: { label: 'Open Contact Form', targetId: 'contact' },
        suggestions: ['👨‍💻 Who is Rashminda?', '🚀 View Projects']
      };
    }

    // 6. Who is Rashminda / About / Profile / Overview
    if (text.match(/(who|about|profile|wishtr|wisthra|wisathara|kauda|kuda|bio|developer|rashminda)/i)) {
      return {
        text: "👨‍💻 **About Rashminda Aluvihare**:\n\n• **Current Role**: HNDIT Undergraduate at **SLIATE** & Banking & Finance Student at **IBSL**.\n• **Specialization**: Full-Stack Web Development, FinTech Systems, and Technical Business Analysis (SRS/BRD).\n• **Experience**: Banking operations at **People's Bank Sri Lanka** & Full-Stack Development at **Decodelabs**.\n• **Career Goal**: Seeking a **Business Analyst / IT Project Management / Full-Stack Developer** opportunity to build impactful solutions.",
        suggestions: ['⚡ Key Skills', '🚀 Explore Projects', '💼 Work History', '🎓 Education']
      };
    }

    // Sinhala / Singlish friendly responses
    if (text.match(/(mokada|moko|kohomada|sinhala|srilanka|lanka|monawada|vistara)/i)) {
      return {
        text: "🇱🇰 Subha Dawsak! Rashminda kiyanne **SLIATE HNDIT** & **IBSL Banking** undergraduate kenek. Eyageth Full-stack web development & FinTech application spetialization thiyanaw. Oyata rashmindageth skills, projects, hari contact details denagann one nam me pathatn select karann!",
        suggestions: ['👨‍💻 Who is Rashminda?', '⚡ Technical Skills', '🚀 Projects', '📩 Contact Details']
      };
    }

    // Default fallback response
    return {
      text: "I'd be happy to help you with that! You can choose from one of the common topics below, or ask me directly about Rashminda's skills, projects, work experience, or contact details.",
      suggestions: [
        '👨‍💻 Who is Rashminda?',
        '⚡ Technical Skills',
        '🚀 Projects & Work',
        '💼 Work Experience',
        '📩 How to Contact?'
      ]
    };
  };

  // Handle send message
  const handleSend = (textToSend = null) => {
    const messageText = textToSend || inputMsg;
    if (!messageText.trim()) return;

    const userMessage = {
      id: Date.now(),
      sender: 'user',
      text: messageText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMessage]);
    if (!textToSend) setInputMsg('');
    setIsTyping(true);

    // Bot reply delay for realistic typing effect
    setTimeout(() => {
      const responseData = getBotResponse(messageText);
      const botMessage = {
        id: Date.now() + 1,
        sender: 'bot',
        text: responseData.text,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        suggestions: responseData.suggestions,
        actionBtn: responseData.actionBtn
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 700);
  };

  // Handle resetting chat conversation
  const handleReset = () => {
    setMessages(initialMessages);
  };

  // Quick scroll to section helper
  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Format message markdown bold text into React nodes
  const renderFormattedText = (text) => {
    if (!text) return null;
    return text.split('\n').map((line, idx) => {
      const parts = line.split(/(\*\*.*?\*\*)/g);
      return (
        <p key={idx} style={{ margin: '0 0 6px 0', lineHeight: 1.5 }}>
          {parts.map((part, pIdx) => {
            if (part.startsWith('**') && part.endsWith('**')) {
              return <strong key={pIdx} style={{ color: 'var(--text-primary)', fontWeight: 700 }}>{part.slice(2, -2)}</strong>;
            }
            return part;
          })}
        </p>
      );
    });
  };

  return (
    <>
      {/* Floating Chat Trigger Icon (Bottom Right) */}
      <div
        style={{
          position: 'fixed',
          bottom: '30px',
          right: '85px', // Next to scroll-top button
          zIndex: 1000,
        }}
        className="chatbot-trigger-wrapper"
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle AI Assistant Chat"
          style={{
            position: 'relative',
            width: '54px',
            height: '54px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, var(--accent-cyan), #0070f3)',
            color: '#ffffff',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: isOpen
              ? '0 0 25px rgba(0, 242, 254, 0.8)'
              : '0 6px 20px rgba(0, 242, 254, 0.45)',
            transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            outline: 'none',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.08)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          {isOpen ? (
            <X size={26} style={{ transition: 'transform 0.3s' }} />
          ) : (
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Bot size={28} />
              <Sparkles
                size={14}
                style={{
                  position: 'absolute',
                  top: '-4px',
                  right: '-6px',
                  color: '#ffd700',
                  animation: 'pulse 1.5s infinite alternate'
                }}
              />
            </div>
          )}

          {/* Unread Indicator Badge */}
          {!isOpen && hasUnread && (
            <span
              style={{
                position: 'absolute',
                top: '-2px',
                right: '-2px',
                width: '14px',
                height: '14px',
                backgroundColor: '#ff4757',
                border: '2px solid var(--bg-primary)',
                borderRadius: '50%',
              }}
            />
          )}
        </button>

        {/* Floating tooltip label when closed */}
        {!isOpen && (
          <div
            className="chatbot-tooltip"
            style={{
              position: 'absolute',
              right: '65px',
              top: '50%',
              transform: 'translateY(-50%)',
              whiteSpace: 'nowrap',
              background: 'var(--card-bg)',
              backdropFilter: 'blur(12px)',
              border: '1px solid var(--card-border)',
              color: 'var(--text-primary)',
              padding: '6px 14px',
              borderRadius: '20px',
              fontSize: '0.82rem',
              fontWeight: 600,
              boxShadow: '0 4px 15px rgba(0,0,0,0.15)',
              pointerEvents: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#38ef7d' }}></span>
            Chat with Rashminda AI
          </div>
        )}
      </div>

      {/* Main Chatbot Window Popup */}
      {isOpen && (
        <div
          className="chatbot-window glass-panel"
          style={{
            position: 'fixed',
            bottom: '95px',
            right: '25px',
            width: '380px',
            maxWidth: 'calc(100vw - 35px)',
            height: '530px',
            maxHeight: 'calc(100vh - 120px)',
            borderRadius: '24px',
            zIndex: 1001,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.35), 0 0 30px rgba(0, 242, 254, 0.15)',
            border: '1px solid var(--card-border)',
            background: 'var(--card-bg)',
            backdropFilter: 'blur(20px)',
            animation: 'chatbotPopIn 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          {/* Header Bar */}
          <div
            style={{
              padding: '16px 20px',
              background: 'linear-gradient(135deg, rgba(0, 242, 254, 0.12), rgba(155, 81, 224, 0.12))',
              borderBottom: '1px solid var(--card-border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div
                style={{
                  position: 'relative',
                  width: '40px',
                  height: '40px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, var(--accent-cyan), var(--accent-purple))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                }}
              >
                <Bot size={22} />
                <span
                  style={{
                    position: 'absolute',
                    bottom: '-1px',
                    right: '-1px',
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    background: '#38ef7d',
                    border: '2px solid var(--card-bg)',
                  }}
                />
              </div>

              <div>
                <h4 style={{ margin: 0, fontSize: '0.98rem', fontWeight: 700, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  Rashminda AI <Sparkles size={14} style={{ color: 'var(--accent-cyan)' }} />
                </h4>
                <p style={{ margin: 0, fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                  Always active • Ask me anything
                </p>
              </div>
            </div>

            {/* Header Controls */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <button
                onClick={handleReset}
                title="Reset Chat"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid var(--card-border)',
                  color: 'var(--text-secondary)',
                  borderRadius: '8px',
                  width: '32px',
                  height: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-cyan)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
              >
                <RefreshCw size={15} />
              </button>

              <button
                onClick={() => setIsOpen(false)}
                title="Close"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid var(--card-border)',
                  color: 'var(--text-secondary)',
                  borderRadius: '8px',
                  width: '32px',
                  height: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#ff4757')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Messages Scroll Area */}
          <div
            style={{
              flex: 1,
              padding: '16px',
              overflowY: 'auto',
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
            }}
          >
            {messages.map((msg) => (
              <div
                key={msg.id}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                }}
              >
                {/* Message Bubble */}
                <div
                  style={{
                    maxWidth: '85%',
                    padding: '12px 16px',
                    borderRadius: msg.sender === 'user' ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
                    background: msg.sender === 'user'
                      ? 'linear-gradient(135deg, var(--accent-cyan), #0070f3)'
                      : 'var(--bg-secondary)',
                    color: msg.sender === 'user' ? '#ffffff' : 'var(--text-secondary)',
                    border: msg.sender === 'user' ? 'none' : '1px solid var(--card-border)',
                    fontSize: '0.88rem',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                  }}
                >
                  {renderFormattedText(msg.text)}

                  {/* Action Link button if present */}
                  {msg.actionBtn && (
                    <button
                      onClick={() => {
                        scrollToSection(msg.actionBtn.targetId);
                        setIsOpen(false);
                      }}
                      style={{
                        marginTop: '8px',
                        padding: '6px 12px',
                        borderRadius: '8px',
                        background: 'rgba(0, 242, 254, 0.15)',
                        border: '1px solid rgba(0, 242, 254, 0.4)',
                        color: 'var(--accent-cyan)',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        transition: 'all 0.2s',
                      }}
                    >
                      <span>{msg.actionBtn.label}</span>
                      <ExternalLink size={13} />
                    </button>
                  )}
                </div>

                {/* Timestamp */}
                <span style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', marginTop: '4px', opacity: 0.7 }}>
                  {msg.timestamp}
                </span>

                {/* Suggested Action Pills */}
                {msg.suggestions && msg.suggestions.length > 0 && (
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '6px',
                      marginTop: '10px',
                      maxWidth: '100%',
                    }}
                  >
                    {msg.suggestions.map((sug, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSend(sug)}
                        style={{
                          padding: '6px 12px',
                          borderRadius: '16px',
                          background: 'rgba(0, 242, 254, 0.08)',
                          border: '1px solid rgba(0, 242, 254, 0.25)',
                          color: 'var(--accent-cyan)',
                          fontSize: '0.78rem',
                          fontWeight: 600,
                          cursor: 'pointer',
                          transition: 'all 0.2s',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = 'rgba(0, 242, 254, 0.2)';
                          e.currentTarget.style.transform = 'translateY(-1px)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'rgba(0, 242, 254, 0.08)';
                          e.currentTarget.style.transform = 'none';
                        }}
                      >
                        {sug}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '8px 12px', background: 'var(--bg-secondary)', borderRadius: '16px', width: 'fit-content', border: '1px solid var(--card-border)' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-cyan)', animation: 'bounce 1s infinite 0.1s' }}></span>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-cyan)', animation: 'bounce 1s infinite 0.2s' }}></span>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-cyan)', animation: 'bounce 1s infinite 0.3s' }}></span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Footer Input Box */}
          <div
            style={{
              padding: '12px 16px',
              borderTop: '1px solid var(--card-border)',
              background: 'var(--bg-secondary)',
            }}
          >
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
            >
              <input
                ref={inputRef}
                type="text"
                value={inputMsg}
                onChange={(e) => setInputMsg(e.target.value)}
                placeholder="Ask about Rashminda..."
                style={{
                  flex: 1,
                  background: 'var(--card-bg)',
                  border: '1px solid var(--card-border)',
                  borderRadius: '20px',
                  padding: '10px 16px',
                  color: 'var(--text-primary)',
                  fontSize: '0.88rem',
                  outline: 'none',
                }}
                onFocus={(e) => (e.target.style.borderColor = 'var(--accent-cyan)')}
                onBlur={(e) => (e.target.style.borderColor = 'var(--card-border)')}
              />
              <button
                type="submit"
                disabled={!inputMsg.trim()}
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: inputMsg.trim() ? 'var(--accent-cyan)' : 'rgba(255,255,255,0.1)',
                  color: inputMsg.trim() ? '#000' : 'var(--text-secondary)',
                  border: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: inputMsg.trim() ? 'pointer' : 'default',
                  transition: 'all 0.2s',
                  flexShrink: 0,
                }}
              >
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Embedded Styles for smooth animations */}
      <style>{`
        @keyframes chatbotPopIn {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        @media (max-width: 480px) {
          .chatbot-window {
            right: 15px !important;
            left: 15px !important;
            width: auto !important;
            bottom: 85px !important;
            height: 480px !important;
          }
          .chatbot-trigger-wrapper {
            right: 20px !important;
            bottom: 20px !important;
          }
          .chatbot-tooltip {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
