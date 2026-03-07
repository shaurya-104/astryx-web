"use client";

import { useEffect, useRef, useState } from "react";

export default function HackathonPage() {
  const [showIntro, setShowIntro] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionsRef = useRef([]);

  useEffect(() => {
    // Load Google Fonts
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Exo+2:wght@300;400;500;600;700;800;900&family=IBM+Plex+Mono:wght@400;500;600&display=swap";
    document.head.appendChild(link);

    const introTimer = setTimeout(() => setShowIntro(true), 200);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    sectionsRef.current.forEach((s) => s && observer.observe(s));

    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      clearTimeout(introTimer);
      observer.disconnect();
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <main className="root">
      {/* Cursor glow */}
      <div
        className="cursor-glow"
        style={{ left: mousePos.x, top: mousePos.y }}
      />

      {/* Scanline overlay */}
      <div className="scanlines" />

      {/* Noise texture */}
      <div className="noise" />

      {/* Dot grid */}
      <div className="dot-grid" />

      {/* ═══════════════ HERO ═══════════════ */}
      <section className="hero">
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />

        <div className={`intro ${showIntro ? "show" : ""}`}>
          <div className="collab-badge">
            <span className="badge-dot" />
            ASTRYX × JHANKAR
            <span className="badge-dot" />
          </div>

          <p className="presents-text">— PRESENTS —</p>

          <div className="title-wrapper">
            <h1 className="hero-title">IGNITE</h1>
            <div className="title-glitch" aria-hidden="true">
              IGNITE
            </div>
            <div className="title-glitch-2" aria-hidden="true">
              IGNITE
            </div>
          </div>

          <p className="tagline">
            <span className="tagline-accent">From Screens</span> to Solutions.
          </p>

          <div className="hero-meta">
            <div className="hero-meta-item">
              <span className="meta-label">DATE</span>
              <span className="meta-value">15 MAR 2026</span>
            </div>
            <div className="hero-divider" />
            <div className="hero-meta-item">
              <span className="meta-label">VENUE</span>
              <span className="meta-value">PU CAMPUS</span>
            </div>
            <div className="hero-divider" />
            <div className="hero-meta-item">
              <span className="meta-label">FORMAT</span>
              <span className="meta-value">OFFLINE</span>
            </div>
          </div>

          <div className="prize-pill">
            <span className="prize-fire">🔥</span>
            <span>IGNITE the coder within you</span>
            <span className="prize-fire">🔥</span>
          </div>
        </div>

        <div className="scroll-hint">
          <div className="scroll-line" />
          <span>SCROLL</span>
        </div>
      </section>

      {/* ═══════════════ WHY PARTICIPATE ═══════════════ */}
      <section
        className="section fade"
        ref={(el) => el && (sectionsRef.current[0] = el)}
      >
        <div className="section-label">01 / WHY JOIN</div>
        <h2 className="section-title">Why Participate?</h2>
        <div className="why-grid">
          {[
            {
              icon: "🏆",
              color: "#FFD700",
              title: "Win Big Prizes",
              desc: "Compete for cash, exclusive goodies, and premium swag for your team.",
            },
            {
              icon: "💡",
              color: "#00FFD1",
              title: "Build Real Projects",
              desc: "Create innovative solutions that strengthen your developer portfolio.",
            },
            {
              icon: "🤝",
              color: "#FF4D00",
              title: "Network & Grow",
              desc: "Connect with top developers, mentors, and industry experts in person.",
            },
          ].map((card, i) => (
            <div className="why-card" key={i} style={{ "--accent": card.color }}>
              <div className="why-card-inner">
                <div className="why-icon-wrap">
                  <span className="why-icon">{card.icon}</span>
                </div>
                <h3 className="why-title">{card.title}</h3>
                <p className="why-desc">{card.desc}</p>
              </div>
              <div className="card-border-anim" />
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════ THEMES ═══════════════ */}
      <section
        className="section fade"
        ref={(el) => el && (sectionsRef.current[1] = el)}
      >
        <div className="section-label">02 / THEMES</div>
        <h2 className="section-title">Hackathon Themes</h2>
        <p className="section-sub">Choose your domain. Build the future.</p>

        <div className="classified">
          <span className="classified-icon">🔒</span>
          <span>
            <strong>Top Secret:</strong> Problem statements revealed on the day
            of the hackathon.
          </span>
        </div>

        <div className="themes-grid">
          {[
            {
              emoji: "🤖",
              title: "AI for Everyday Life",
              desc: "Build intelligent tools, automations, and bots that solve real, daily human problems using AI.",
              tag: "TRACK A",
            },
            {
              emoji: "☁️",
              title: "Cloud Computing",
              desc: "Architect highly scalable, secure, and accessible systems that leverage the true power of the cloud.",
              tag: "TRACK B",
            },
            {
              emoji: "💳",
              title: "FinTech",
              desc: "Innovate in digital finance, payment gateways, budget tracking, and economic empowerment.",
              tag: "TRACK C",
            },
            {
              emoji: "🌍",
              title: "Open Innovation",
              desc: "No limits. Have a crazy, impactful idea that doesn't fit the other tracks? Build it here.",
              tag: "TRACK D",
            },
          ].map((t, i) => (
            <div className="theme-card" key={i}>
              <div className="theme-tag">{t.tag}</div>
              <div className="theme-emoji">{t.emoji}</div>
              <h3 className="theme-title">{t.title}</h3>
              <p className="theme-desc">{t.desc}</p>
              <div className="theme-line" />
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════ REGISTRATION ═══════════════ */}
      <section
        className="section fade"
        ref={(el) => el && (sectionsRef.current[2] = el)}
      >
        <div className="section-label">03 / REGISTER</div>
        <h2 className="section-title">Event Details & Registration</h2>

        <div className="reg-panel">
          {/* Details col */}
          <div className="reg-left">
            <div className="reg-details-header">
              <span className="terminal-dot red" />
              <span className="terminal-dot yellow" />
              <span className="terminal-dot green" />
              <span className="terminal-title">event_info.sh</span>
            </div>
            <div className="reg-details-body">
              {[
                ["DATE", "15th March, 2026"],
                ["LOCATION", "Offline · PU Campus"],
                ["DEADLINE", "14th March, 2026"],
                ["ENTRY FEE", "₹200 per Team"],
              ].map(([label, value]) => (
                <div className="info-row" key={label}>
                  <span className="info-prompt">
                    <span className="prompt-arrow">›</span> {label}
                  </span>
                  <span className="info-value">{value}</span>
                </div>
              ))}
            </div>

            <div className="reg-cta">
              <p className="step-label">
                <span className="step-num">STEP 2</span> Fill the form & upload
                payment screenshot
              </p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeiiOMFIYDfAQvXJshzEELyW3QOdHmPGXNgIcsCRvgRaQ9R8Q/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="apply-btn"
              >
                <span className="apply-btn-text">Apply Now</span>
                <span className="apply-btn-arrow">→</span>
              </a>
            </div>
          </div>

          {/* Payment col */}
          <div className="reg-right">
            <p className="step-label">
              <span className="step-num">STEP 1</span> Scan to pay the
              registration fee
            </p>
            <div className="qr-frame">
              <div className="qr-corner tl" />
              <div className="qr-corner tr" />
              <div className="qr-corner bl" />
              <div className="qr-corner br" />
              <div className="qr-bg">
                <img
                  src="/payment/gpay-ignite.png.jpeg"
                  alt="UPI QR Code"
                  className="qr-img"
                />
              </div>
            </div>
            <div className="upi-row">
              <span className="upi-label">UPI ID</span>
              <span className="upi-val">samagrasaharia@okicici</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ TIMELINE ═══════════════ */}
      <section
        className="section fade"
        ref={(el) => el && (sectionsRef.current[3] = el)}
      >
        <div className="section-label">04 / TIMELINE</div>
        <h2 className="section-title">Hackathon Timeline</h2>

        <div className="timeline">
          <div className="tl-line" />

          <div className="tl-item">
            <div className="tl-node active-node">
              <div className="node-ring" />
            </div>
            <div className="tl-card">
              <div className="tl-card-header">
                <h3>Registration Opens</h3>
                <span className="live-badge">● LIVE NOW</span>
              </div>
              <p>Secure your spot before slots fill up. Team of 2–5 members.</p>
            </div>
          </div>

          <div className="tl-item">
            <div className="tl-node">
              <div className="node-ring-inactive" />
            </div>
            <div className="tl-card">
              <div className="tl-card-header">
                <h3>Hackathon Begins</h3>
                <span className="date-badge">15 MAR 2026</span>
              </div>
              <p>
                Problem statements revealed! Begin coding, building, and
                solving.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ RULES ═══════════════ */}
      <section
        className="section fade"
        ref={(el) => el && (sectionsRef.current[4] = el)}
      >
        <div className="section-label">05 / RULES</div>
        <h2 className="section-title">Ignite Rules</h2>

        <div className="rules-list">
          {[
            { icon: "👥", rule: "Team Size", detail: "2–5 members per team" },
            { icon: "🏢", rule: "Format", detail: "Offline / On-ground hackathon" },
            { icon: "🚫", rule: "Originality", detail: "No pre-built projects allowed" },
            { icon: "🌐", rule: "Resources", detail: "Internet usage permitted" },
            { icon: "⚖️", rule: "Verdict", detail: "Judges' decision will be final" },
          ].map((r, i) => (
            <div className="rule-item" key={i} style={{ "--delay": `${i * 80}ms` }}>
              <span className="rule-num">0{i + 1}</span>
              <div className="rule-icon">{r.icon}</div>
              <div className="rule-text">
                <strong>{r.rule}</strong>
                <span>{r.detail}</span>
              </div>
              <div className="rule-chevron">›</div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════ FOOTER ═══════════════ */}
      <footer className="footer">
        <div className="footer-logo">IGNITE</div>
        <div className="footer-divider" />
        <p className="footer-collab">ASTRYX × JHANKAR · Hackathon 2026</p>
        <p className="footer-copy">© 2026 Astryx Studio · All Rights Reserved</p>
      </footer>

      {/* ═══════════════ GLOBAL STYLES ═══════════════ */}
      <style jsx>{`
        /* ─── RESET & ROOT ─── */
        .root {
          position: relative;
          min-height: 100vh;
          background: #030508;
          color: #fff;
          overflow-x: hidden;
          font-family: "Exo 2", system-ui, sans-serif;
          padding-top: 80px;
          --orange: #ff4d00;
          --cyan: #00ffd1;
          --gold: #ffd700;
          --purple: #8b5cf6;
          --surface: rgba(255, 255, 255, 0.025);
          --border: rgba(255, 255, 255, 0.06);
        }

        /* ─── AMBIENT EFFECTS ─── */
        .cursor-glow {
          position: fixed;
          width: 320px;
          height: 320px;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(255, 77, 0, 0.06) 0%,
            transparent 70%
          );
          transform: translate(-50%, -50%);
          pointer-events: none;
          z-index: 0;
          transition: left 0.1s, top 0.1s;
        }

        .scanlines {
          position: fixed;
          inset: 0;
          background: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(0, 0, 0, 0.03) 2px,
            rgba(0, 0, 0, 0.03) 4px
          );
          pointer-events: none;
          z-index: 1000;
          opacity: 0.5;
        }

        .noise {
          position: fixed;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          opacity: 0.025;
          pointer-events: none;
          z-index: 1;
        }

        .dot-grid {
          position: fixed;
          inset: 0;
          background-image: radial-gradient(
            circle,
            rgba(255, 255, 255, 0.07) 1px,
            transparent 1px
          );
          background-size: 32px 32px;
          mask-image: radial-gradient(
            ellipse at center,
            rgba(0, 0, 0, 0.4) 0%,
            rgba(0, 0, 0, 0) 75%
          );
          pointer-events: none;
          z-index: 0;
        }

        /* ─── HERO ─── */
        .hero {
          position: relative;
          z-index: 2;
          min-height: 85vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 60px 24px 80px;
          overflow: hidden;
        }

        .hero-orb {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
        }
        .hero-orb-1 {
          width: 600px;
          height: 600px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -55%);
          background: radial-gradient(
            circle,
            rgba(255, 77, 0, 0.09) 0%,
            rgba(255, 77, 0, 0.03) 40%,
            transparent 70%
          );
          animation: breathe 6s ease-in-out infinite;
        }
        .hero-orb-2 {
          width: 400px;
          height: 400px;
          bottom: 0;
          right: 10%;
          background: radial-gradient(
            circle,
            rgba(0, 255, 209, 0.05) 0%,
            transparent 65%
          );
          animation: breathe 8s ease-in-out infinite reverse;
        }
        @keyframes breathe {
          0%,
          100% {
            transform: translate(-50%, -55%) scale(1);
            opacity: 1;
          }
          50% {
            transform: translate(-50%, -55%) scale(1.15);
            opacity: 0.75;
          }
        }

        .intro {
          position: relative;
          z-index: 2;
          opacity: 0;
          transform: translateY(36px);
          transition: opacity 1.1s cubic-bezier(0.16, 1, 0.3, 1),
            transform 1.1s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .intro.show {
          opacity: 1;
          transform: translateY(0);
        }

        .collab-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: rgba(139, 92, 246, 0.1);
          border: 1px solid rgba(139, 92, 246, 0.25);
          color: #a78bfa;
          padding: 7px 18px;
          border-radius: 4px;
          font-size: 12px;
          letter-spacing: 4px;
          font-weight: 600;
          margin-bottom: 20px;
          font-family: "IBM Plex Mono", monospace;
        }
        .badge-dot {
          width: 5px;
          height: 5px;
          background: #a78bfa;
          border-radius: 50%;
          display: inline-block;
          animation: blink 1.5s infinite;
        }
        @keyframes blink {
          0%,100% { opacity: 1; }
          50% { opacity: 0.2; }
        }

        .presents-text {
          color: rgba(255, 255, 255, 0.3);
          font-size: 13px;
          letter-spacing: 6px;
          margin-bottom: 16px;
          font-family: "IBM Plex Mono", monospace;
        }

        .title-wrapper {
          position: relative;
          display: inline-block;
          margin-bottom: 16px;
        }

        .hero-title {
          font-family: "Bebas Neue", sans-serif;
          font-size: clamp(100px, 20vw, 220px);
          line-height: 0.9;
          background: linear-gradient(
            135deg,
            #ff6a00 0%,
            #ff4d00 30%,
            #ffb347 70%,
            #ff6a00 100%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          position: relative;
          z-index: 2;
          letter-spacing: 4px;
        }

        .title-glitch,
        .title-glitch-2 {
          font-family: "Bebas Neue", sans-serif;
          font-size: clamp(100px, 20vw, 220px);
          line-height: 0.9;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          letter-spacing: 4px;
          -webkit-text-fill-color: transparent;
        }
        .title-glitch {
          -webkit-text-stroke: 1px rgba(0, 255, 209, 0.35);
          animation: glitch1 4s infinite;
        }
        .title-glitch-2 {
          -webkit-text-stroke: 1px rgba(255, 77, 0, 0.3);
          animation: glitch2 4s infinite;
        }

        @keyframes glitch1 {
          0%,80%,100% { clip-path: none; transform: none; opacity: 0; }
          82% { clip-path: polygon(0 15%,100% 15%,100% 30%,0 30%); transform: translate(-3px, 0); opacity: 1; }
          84% { clip-path: polygon(0 55%,100% 55%,100% 65%,0 65%); transform: translate(3px, 0); opacity: 1; }
          86% { clip-path: none; transform: none; opacity: 0; }
        }
        @keyframes glitch2 {
          0%,85%,100% { clip-path: none; transform: none; opacity: 0; }
          87% { clip-path: polygon(0 40%,100% 40%,100% 55%,0 55%); transform: translate(4px, 0); opacity: 1; }
          89% { clip-path: polygon(0 70%,100% 70%,100% 80%,0 80%); transform: translate(-2px, 0); opacity: 1; }
          91% { clip-path: none; transform: none; opacity: 0; }
        }

        .tagline {
          font-size: clamp(16px, 2.5vw, 24px);
          font-weight: 300;
          letter-spacing: 3px;
          color: rgba(255, 255, 255, 0.6);
          text-transform: uppercase;
          margin-bottom: 40px;
        }
        .tagline-accent {
          color: #00ffd1;
          font-weight: 600;
        }

        .hero-meta {
          display: inline-flex;
          align-items: center;
          gap: 0;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 6px;
          overflow: hidden;
          margin-bottom: 36px;
        }
        .hero-meta-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 16px 28px;
          gap: 6px;
        }
        .meta-label {
          font-size: 10px;
          letter-spacing: 2.5px;
          color: rgba(255, 255, 255, 0.35);
          font-family: "IBM Plex Mono", monospace;
        }
        .meta-value {
          font-size: 15px;
          font-weight: 700;
          color: #fff;
          letter-spacing: 1px;
        }
        .hero-divider {
          width: 1px;
          height: 40px;
          background: rgba(255, 255, 255, 0.07);
        }

        .prize-pill {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: linear-gradient(
            135deg,
            rgba(255, 215, 0, 0.07) 0%,
            rgba(255, 77, 0, 0.07) 100%
          );
          border: 1px solid rgba(255, 215, 0, 0.3);
          color: #ffd700;
          padding: 12px 28px;
          border-radius: 50px;
          font-size: 16px;
          font-weight: 700;
          letter-spacing: 0.5px;
          animation: floatY 3.5s ease-in-out infinite;
          backdrop-filter: blur(10px);
        }
        .prize-fire {
          font-size: 18px;
        }
        @keyframes floatY {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }

        .scroll-hint {
          position: absolute;
          bottom: 32px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          color: rgba(255, 255, 255, 0.2);
          font-size: 10px;
          letter-spacing: 3px;
          font-family: "IBM Plex Mono", monospace;
          animation: fadeInUp 2s ease 2s both;
        }
        .scroll-line {
          width: 1px;
          height: 40px;
          background: linear-gradient(to bottom, transparent, rgba(255,255,255,0.25));
          animation: scrollLine 1.8s ease-in-out infinite;
        }
        @keyframes scrollLine {
          0% { transform: scaleY(0); transform-origin: top; }
          50% { transform: scaleY(1); transform-origin: top; }
          51% { transform-origin: bottom; }
          100% { transform: scaleY(0); transform-origin: bottom; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateX(-50%) translateY(10px); }
          to { opacity: 1; transform: translateX(-50%) translateY(0); }
        }

        /* ─── SHARED SECTION ─── */
        .section {
          position: relative;
          z-index: 2;
          max-width: 1060px;
          margin: 0 auto;
          padding: 80px 24px;
        }

        .section-label {
          font-family: "IBM Plex Mono", monospace;
          font-size: 11px;
          letter-spacing: 3px;
          color: var(--cyan);
          text-transform: uppercase;
          margin-bottom: 14px;
          opacity: 0.7;
        }

        .section-title {
          font-size: clamp(28px, 5vw, 42px);
          font-weight: 800;
          color: #fff;
          letter-spacing: -0.5px;
          margin-bottom: 10px;
          line-height: 1.1;
        }

        .section-sub {
          color: rgba(255, 255, 255, 0.4);
          font-size: 16px;
          margin-bottom: 40px;
        }

        /* ─── ANIMATIONS ─── */
        .fade {
          opacity: 0;
          transform: translateY(50px);
          transition: opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1),
            transform 0.9s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .fade.visible {
          opacity: 1;
          transform: none;
        }

        /* ─── WHY CARDS ─── */
        .why-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 20px;
          margin-top: 48px;
        }

        .why-card {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          cursor: default;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .why-card:hover {
          transform: translateY(-10px);
        }
        .why-card:hover .card-border-anim {
          opacity: 1;
        }

        .why-card-inner {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 36px 30px;
          height: 100%;
          position: relative;
          z-index: 1;
          transition: background 0.4s ease, border-color 0.4s ease;
        }
        .why-card:hover .why-card-inner {
          background: rgba(255, 255, 255, 0.04);
          border-color: color-mix(in srgb, var(--accent) 40%, transparent);
        }

        .card-border-anim {
          position: absolute;
          inset: -1px;
          border-radius: 17px;
          background: conic-gradient(
            from 0deg,
            var(--accent),
            transparent 30%,
            transparent 70%,
            var(--accent)
          );
          opacity: 0;
          transition: opacity 0.5s ease;
          animation: rotateBorder 3s linear infinite;
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          padding: 1px;
          z-index: 0;
        }
        @keyframes rotateBorder {
          from { filter: hue-rotate(0deg); }
          to { filter: hue-rotate(360deg); }
        }

        .why-icon-wrap {
          width: 56px;
          height: 56px;
          border-radius: 12px;
          background: color-mix(in srgb, var(--accent) 10%, transparent);
          border: 1px solid color-mix(in srgb, var(--accent) 20%, transparent);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
          font-size: 26px;
        }

        .why-title {
          font-size: 20px;
          font-weight: 700;
          color: #fff;
          margin-bottom: 12px;
        }
        .why-desc {
          color: rgba(255, 255, 255, 0.45);
          font-size: 15px;
          line-height: 1.75;
        }

        /* ─── CLASSIFIED ─── */
        .classified {
          display: flex;
          align-items: center;
          gap: 12px;
          background: rgba(0, 255, 209, 0.05);
          border: 1px solid rgba(0, 255, 209, 0.2);
          border-left: 3px solid #00ffd1;
          color: rgba(255, 255, 255, 0.7);
          padding: 14px 20px;
          border-radius: 6px;
          font-size: 14px;
          margin-bottom: 48px;
          font-family: "IBM Plex Mono", monospace;
        }
        .classified strong {
          color: #00ffd1;
        }
        .classified-icon {
          font-size: 18px;
          flex-shrink: 0;
        }

        /* ─── THEMES ─── */
        .themes-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
          gap: 16px;
        }

        .theme-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border);
          border-radius: 14px;
          padding: 30px 24px;
          position: relative;
          overflow: hidden;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .theme-card:hover {
          background: rgba(255, 77, 0, 0.04);
          border-color: rgba(255, 77, 0, 0.25);
          transform: translateY(-6px);
        }
        .theme-card:hover .theme-line {
          width: 100%;
        }

        .theme-tag {
          font-family: "IBM Plex Mono", monospace;
          font-size: 10px;
          letter-spacing: 2.5px;
          color: var(--orange);
          margin-bottom: 20px;
          opacity: 0.7;
        }
        .theme-emoji {
          font-size: 32px;
          margin-bottom: 16px;
          display: block;
        }
        .theme-title {
          font-size: 17px;
          font-weight: 700;
          color: #fff;
          margin-bottom: 12px;
          line-height: 1.3;
        }
        .theme-desc {
          color: rgba(255, 255, 255, 0.4);
          font-size: 13.5px;
          line-height: 1.65;
        }
        .theme-line {
          position: absolute;
          bottom: 0;
          left: 0;
          height: 2px;
          width: 0;
          background: linear-gradient(90deg, var(--orange), var(--cyan));
          transition: width 0.5s ease;
        }

        /* ─── REGISTRATION ─── */
        .reg-panel {
          display: flex;
          gap: 32px;
          background: rgba(255, 255, 255, 0.015);
          border: 1px solid var(--border);
          border-radius: 20px;
          overflow: hidden;
          margin-top: 48px;
        }

        .reg-left {
          flex: 1;
          padding: 36px;
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .reg-details-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 20px;
          padding-bottom: 16px;
          border-bottom: 1px solid var(--border);
        }
        .terminal-dot {
          width: 11px;
          height: 11px;
          border-radius: 50%;
        }
        .terminal-dot.red { background: #ff5f57; }
        .terminal-dot.yellow { background: #febc2e; }
        .terminal-dot.green { background: #28c840; }
        .terminal-title {
          font-family: "IBM Plex Mono", monospace;
          font-size: 12px;
          color: rgba(255, 255, 255, 0.3);
          margin-left: 8px;
        }

        .reg-details-body {
          display: flex;
          flex-direction: column;
          gap: 0;
          margin-bottom: 32px;
        }

        .info-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 13px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.04);
          font-family: "IBM Plex Mono", monospace;
          font-size: 13.5px;
        }
        .info-prompt {
          color: rgba(255, 255, 255, 0.35);
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .prompt-arrow {
          color: var(--cyan);
          font-size: 16px;
        }
        .info-value {
          color: #fff;
          font-weight: 500;
        }

        .step-label {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.35);
          margin-bottom: 16px;
          font-family: "IBM Plex Mono", monospace;
        }
        .step-num {
          color: var(--orange);
          font-weight: 700;
          margin-right: 6px;
        }

        .apply-btn {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: var(--orange);
          color: #fff;
          padding: 16px 36px;
          border-radius: 8px;
          font-weight: 700;
          font-size: 16px;
          text-decoration: none;
          letter-spacing: 0.5px;
          transition: all 0.3s ease;
          box-shadow: 0 4px 24px rgba(255, 77, 0, 0.25);
          position: relative;
          overflow: hidden;
        }
        .apply-btn::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.15) 0%,
            transparent 50%
          );
        }
        .apply-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(255, 77, 0, 0.4);
          background: #ff6520;
        }
        .apply-btn-arrow {
          font-size: 20px;
          transition: transform 0.3s ease;
        }
        .apply-btn:hover .apply-btn-arrow {
          transform: translateX(4px);
        }

        .reg-right {
          flex: 0 0 300px;
          background: rgba(0, 0, 0, 0.3);
          border-left: 1px solid var(--border);
          padding: 36px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0;
        }
        .reg-right .step-label {
          margin-bottom: 24px;
          text-align: center;
        }

        .qr-frame {
          position: relative;
          margin-bottom: 24px;
        }
        .qr-corner {
          position: absolute;
          width: 20px;
          height: 20px;
          border-color: var(--cyan);
          border-style: solid;
        }
        .qr-corner.tl { top: -4px; left: -4px; border-width: 2px 0 0 2px; }
        .qr-corner.tr { top: -4px; right: -4px; border-width: 2px 2px 0 0; }
        .qr-corner.bl { bottom: -4px; left: -4px; border-width: 0 0 2px 2px; }
        .qr-corner.br { bottom: -4px; right: -4px; border-width: 0 2px 2px 0; }

        .qr-bg {
          background: #fff;
          padding: 12px;
          border-radius: 10px;
        }
        .qr-img {
          width: 160px;
          height: 160px;
          object-fit: cover;
          border-radius: 4px;
          display: block;
        }

        .upi-row {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          background: rgba(0, 255, 209, 0.05);
          border: 1px solid rgba(0, 255, 209, 0.15);
          padding: 12px 20px;
          border-radius: 8px;
          width: 100%;
          margin-top: 24px;
        }
        .upi-label {
          font-family: "IBM Plex Mono", monospace;
          font-size: 10px;
          letter-spacing: 2px;
          color: rgba(255, 255, 255, 0.3);
        }
        .upi-val {
          font-family: "IBM Plex Mono", monospace;
          font-size: 13px;
          color: var(--cyan);
          font-weight: 600;
        }

        /* ─── TIMELINE ─── */
        .timeline {
          position: relative;
          margin-top: 56px;
          padding-left: 48px;
        }
        .tl-line {
          position: absolute;
          left: 11px;
          top: 12px;
          bottom: 12px;
          width: 2px;
          background: linear-gradient(
            to bottom,
            var(--cyan) 0%,
            rgba(0, 255, 209, 0.15) 100%
          );
        }

        .tl-item {
          position: relative;
          margin-bottom: 48px;
          display: flex;
          align-items: flex-start;
          gap: 24px;
        }
        .tl-item:last-child {
          margin-bottom: 0;
        }

        .tl-node {
          position: absolute;
          left: -48px;
          top: 14px;
        }
        .active-node::after {
          content: "";
          position: absolute;
          inset: -4px;
          background: rgba(0, 255, 209, 0.1);
          border-radius: 50%;
        }
        .node-ring {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: var(--cyan);
          box-shadow: 0 0 0 4px rgba(0, 255, 209, 0.15),
            0 0 16px rgba(0, 255, 209, 0.5);
          animation: nodePulse 2s ease-in-out infinite;
        }
        @keyframes nodePulse {
          0%,100% { box-shadow: 0 0 0 4px rgba(0,255,209,0.15), 0 0 16px rgba(0,255,209,0.5); }
          50% { box-shadow: 0 0 0 8px rgba(0,255,209,0.07), 0 0 24px rgba(0,255,209,0.3); }
        }
        .node-ring-inactive {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          border: 2px solid rgba(255, 255, 255, 0.2);
        }

        .tl-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border);
          border-radius: 14px;
          padding: 24px 28px;
          flex: 1;
          transition: all 0.3s ease;
        }
        .tl-card:hover {
          background: rgba(255, 255, 255, 0.04);
          border-color: rgba(0, 255, 209, 0.15);
        }
        .tl-card-header {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 10px;
          flex-wrap: wrap;
        }
        .tl-card h3 {
          font-size: 18px;
          font-weight: 700;
          color: #fff;
          margin: 0;
        }
        .tl-card p {
          color: rgba(255, 255, 255, 0.4);
          font-size: 14px;
          line-height: 1.65;
          margin: 0;
        }

        .live-badge {
          background: rgba(16, 185, 129, 0.1);
          color: #10b981;
          border: 1px solid rgba(16, 185, 129, 0.25);
          font-size: 10px;
          font-weight: 800;
          padding: 4px 12px;
          border-radius: 4px;
          letter-spacing: 1.5px;
          font-family: "IBM Plex Mono", monospace;
          animation: livePulse 2s ease-in-out infinite;
        }
        @keyframes livePulse {
          0%,100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        .date-badge {
          background: rgba(255, 179, 71, 0.08);
          color: #ffb347;
          border: 1px solid rgba(255, 179, 71, 0.2);
          font-size: 10px;
          font-weight: 700;
          padding: 4px 12px;
          border-radius: 4px;
          letter-spacing: 1.5px;
          font-family: "IBM Plex Mono", monospace;
        }

        /* ─── RULES ─── */
        .rules-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: 48px;
          max-width: 760px;
          margin-left: auto;
          margin-right: auto;
        }
        .rule-item {
          display: flex;
          align-items: center;
          gap: 20px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 18px 24px;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: default;
        }
        .rule-item:hover {
          background: rgba(255, 77, 0, 0.04);
          border-color: rgba(255, 77, 0, 0.2);
          transform: translateX(6px);
          box-shadow: -3px 0 0 0 var(--orange);
        }
        .rule-num {
          font-family: "IBM Plex Mono", monospace;
          font-size: 11px;
          color: rgba(255, 255, 255, 0.15);
          letter-spacing: 1px;
          min-width: 24px;
        }
        .rule-icon {
          font-size: 22px;
          width: 44px;
          height: 44px;
          background: rgba(255, 255, 255, 0.04);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .rule-text {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .rule-text strong {
          font-size: 15px;
          font-weight: 700;
          color: #fff;
        }
        .rule-text span {
          font-size: 13.5px;
          color: rgba(255, 255, 255, 0.4);
        }
        .rule-chevron {
          color: rgba(255, 255, 255, 0.15);
          font-size: 20px;
          transition: transform 0.3s ease, color 0.3s ease;
        }
        .rule-item:hover .rule-chevron {
          transform: translateX(3px);
          color: var(--orange);
        }

        /* ─── FOOTER ─── */
        .footer {
          position: relative;
          z-index: 2;
          text-align: center;
          padding: 60px 24px;
          border-top: 1px solid var(--border);
          margin-top: 40px;
        }
        .footer-logo {
          font-family: "Bebas Neue", sans-serif;
          font-size: 56px;
          letter-spacing: 8px;
          background: linear-gradient(135deg, rgba(255,77,0,0.4), rgba(255,255,255,0.1));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 24px;
        }
        .footer-divider {
          width: 48px;
          height: 1px;
          background: var(--border);
          margin: 0 auto 20px;
        }
        .footer-collab {
          color: rgba(255, 255, 255, 0.35);
          font-size: 14px;
          letter-spacing: 2px;
          margin-bottom: 8px;
        }
        .footer-copy {
          color: rgba(255, 255, 255, 0.15);
          font-size: 12px;
          font-family: "IBM Plex Mono", monospace;
        }

        /* ─── RESPONSIVE ─── */
        @media (max-width: 768px) {
          .hero {
            min-height: 90vh;
          }
          .hero-meta {
            flex-direction: column;
            gap: 0;
          }
          .hero-divider {
            width: 60px;
            height: 1px;
          }
          .reg-panel {
            flex-direction: column;
          }
          .reg-right {
            flex: 1;
            border-left: none;
            border-top: 1px solid var(--border);
          }
          .rule-item:hover {
            transform: translateY(-3px) translateX(0);
            box-shadow: 0 -3px 0 0 var(--orange);
          }
          .timeline {
            padding-left: 36px;
          }
        }
      `}</style>
    </main>
  );
}
