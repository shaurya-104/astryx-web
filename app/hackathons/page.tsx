"use client";

import { useEffect, useRef, useState } from "react";

const REGISTERED = 14;
const TOTAL = 25;

function polarToCartesian(cx: number, cy: number, r: number, deg: number) {
  const rad = ((deg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}
function arcPath(cx: number, cy: number, r: number, startDeg: number, endDeg: number) {
  const clamped = Math.min(endDeg, startDeg + 279.9);
  const s = polarToCartesian(cx, cy, r, startDeg);
  const e = polarToCartesian(cx, cy, r, clamped);
  const large = clamped - startDeg > 180 ? 1 : 0;
  return `M ${s.x} ${s.y} A ${r} ${r} 0 ${large} 1 ${e.x} ${e.y}`;
}

export default function HackathonPage() {
  const [showIntro, setShowIntro] = useState(false);
  const [displayCount, setDisplayCount] = useState(0);
  const [filledPills, setFilledPills] = useState(0);
  const [arcProgress, setArcProgress] = useState(0);
  const [glitch, setGlitch] = useState(false);
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  const pct = REGISTERED / TOTAL;
  const arcDeg = pct * 280;

  useEffect(() => {
    const introTimer = setTimeout(() => setShowIntro(true), 150);

    let frame = 0;
    const totalFrames = 60;
    const counterInterval = setInterval(() => {
      frame++;
      const ease = 1 - Math.pow(1 - frame / totalFrames, 3);
      setDisplayCount(Math.round(ease * REGISTERED));
      setArcProgress(ease * arcDeg);
      if (frame >= totalFrames) clearInterval(counterInterval);
    }, 20);

    Array.from({ length: REGISTERED }).forEach((_, i) => {
      setTimeout(() => setFilledPills(i + 1), 300 + i * 70);
    });

    const glitchTimer = setTimeout(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 500);
    }, 1600);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    sectionsRef.current.forEach((s) => s && observer.observe(s));

    return () => {
      clearTimeout(introTimer);
      clearTimeout(glitchTimer);
      clearInterval(counterInterval);
      observer.disconnect();
    };
  }, []);

  const dotPos = polarToCartesian(80, 80, 62, -140 + arcProgress);

  return (
    <main className="ignite-root">
      <div className="bg-grid" />

      {/* ═══ HERO ═══ */}
      <section className="ignite-hero">
        <div className="hero-glow" />
        <div className={`ignite-intro ${showIntro ? "show" : ""}`}>
          <div className="badge-collab">ASTRYX × JHANKAR</div>
          <p className="ignite-subtitle">PRESENTS</p>
          <h1 className="ignite-title">IGNITE</h1>
          <p className="ignite-tagline">From Screens to Solutions.</p>
          <div className="hero-prize-badge">
            <span className="prize-icon">🏆</span>
            IGNITE the coder within you
          </div>
        </div>
      </section>

      {/* ═══ REGISTRATION COUNTER ═══ */}
      <section
        className="ignite-section fade slots-section"
        ref={(el) => el && (sectionsRef.current[99] = el)}
      >
        <div className="hud-card">
          <span className="corner tl" /><span className="corner tr" />
          <span className="corner bl" /><span className="corner br" />
          <div className="scanlines" />

          {/* Top bar */}
          <div className="hud-topbar">
            <span className="hud-tag hud-tag-hide">SYS // IGNITE-2026</span>
            <span className="hud-tag live-tag"><span className="live-dot" />LIVE FEED</span>
            <span className="hud-tag hud-tag-hide">REG_MONITOR_v1.4</span>
          </div>

          {/* Body */}
          <div className="hud-body">

            {/* Arc gauge */}
            <div className="arc-col">
              <div className="arc-wrap">
                <svg viewBox="0 0 160 160" className="arc-svg">
                  {/* Track */}
                  <path
                    d={arcPath(80,80,62,-140,140)}
                    fill="none"
                    stroke="rgba(255,255,255,0.07)"
                    strokeWidth="8"
                    strokeLinecap="round"
                  />
                  {/* Glow layer */}
                  <path
                    d={arcPath(80,80,62,-140,-140+arcProgress)}
                    fill="none"
                    stroke="rgba(255,140,40,0.25)"
                    strokeWidth="18"
                    strokeLinecap="round"
                    style={{ filter: "blur(8px)" }}
                  />
                  {/* Fill */}
                  <path
                    d={arcPath(80,80,62,-140,-140+arcProgress)}
                    fill="none"
                    stroke="url(#arcGrad)"
                    strokeWidth="8"
                    strokeLinecap="round"
                  />
                  {/* Moving dot */}
                  {arcProgress > 4 && (
                    <circle cx={dotPos.x} cy={dotPos.y} r="6" fill="#ffb347">
                      <animate attributeName="r" values="6;8;6" dur="1.6s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="1;0.5;1" dur="1.6s" repeatCount="indefinite" />
                    </circle>
                  )}
                  {/* Glow dot */}
                  {arcProgress > 4 && (
                    <circle cx={dotPos.x} cy={dotPos.y} r="12" fill="rgba(255,150,50,0.3)">
                      <animate attributeName="r" values="12;16;12" dur="1.6s" repeatCount="indefinite" />
                    </circle>
                  )}
                  <defs>
                    <linearGradient id="arcGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ff6a00" />
                      <stop offset="100%" stopColor="#ffb347" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="arc-center">
                  <span className="arc-pct">{Math.round(pct * 100)}%</span>
                  <span className="arc-pct-label">FULL</span>
                </div>
              </div>
            </div>

            {/* Big counter */}
            <div className="counter-col">
              <p className="counter-eyebrow">// TEAMS REGISTERED</p>
              <div className={`counter-display ${glitch ? "glitch" : ""}`}>
                <span className="counter-main">{String(displayCount).padStart(2, "0")}</span>
                <span className="counter-sep">/</span>
                <span className="counter-total">{TOTAL}</span>
              </div>
              <p className="counter-sub">
                <span className="slots-left-num">{TOTAL - REGISTERED}</span>&nbsp;slots remaining
              </p>
            </div>

            {/* Slot matrix */}
            <div className="slot-col">
              <p className="slot-grid-label">SLOT ALLOCATION MATRIX</p>
              <div className="slot-grid">
                {Array.from({ length: TOTAL }).map((_, i) => (
                  <div key={i} className={`slot-cell ${i < filledPills ? "on" : "off"}`}>
                    <span className="slot-shimmer" />
                  </div>
                ))}
              </div>
              <div className="slot-legend">
                <span className="legend-dot on" />
                <span>registered</span>
                <span className="legend-dot off" />
                <span>available</span>
              </div>
            </div>

          </div>

          {/* Bottom bar */}
          <div className="hud-bottombar">
            <span className="bottom-tag">⬡ REG DEADLINE: 14 MARCH 2026</span>
            <span className="bottom-tag warn">⚠ SLOTS LIMITED — REGISTER NOW</span>
          </div>
        </div>
      </section>

      {/* ═══ WHY PARTICIPATE ═══ */}
      <section className="ignite-section fade" ref={(el) => el && (sectionsRef.current[0] = el)}>
        <h2 className="section-title">Why Participate?</h2>
        <div className="cards-grid">
          {[
            { icon:"🏆", title:"Win Big Prizes", desc:"Compete for prizes, including cash, exclusive goodies, and premium swag." },
            { icon:"💡", title:"Build Real Projects", desc:"Create innovative solutions and strengthen your developer portfolio." },
            { icon:"🤝", title:"Network", desc:"Connect with top developers, experienced mentors, and industry experts." },
          ].map(({ icon, title, desc }) => (
            <div className="premium-card" key={title}>
              <div className="card-icon">{icon}</div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ THEMES ═══ */}
      <section className="ignite-section fade" ref={(el) => el && (sectionsRef.current[1] = el)}>
        <h2 className="section-title">Hackathon Themes</h2>
        <p className="section-subtitle">Choose your domain. Build the future.</p>
        <div className="classified-badge">
          🔒 <strong>Top Secret:</strong> Problem statements will be revealed on the day of the hackathon!
        </div>
        <div className="themes-grid">
          {[
            { e:"🤖", t:"AI for Everyday Life", d:"Build intelligent tools, automations, and bots that solve real daily human problems using AI." },
            { e:"☁️", t:"Cloud Computing", d:"Architect highly scalable, secure, and accessible systems leveraging the power of the cloud." },
            { e:"💳", t:"FinTech", d:"Innovate in digital finance, payment gateways, budget tracking, and economic empowerment." },
            { e:"🌍", t:"Open Innovation", d:"No limits. Have a crazy, impactful idea that doesn't fit the other tracks? Build it here." },
          ].map(({ e, t, d }) => (
            <div className="theme-card" key={t}>
              <div className="theme-header"><span className="theme-emoji">{e}</span><h3>{t}</h3></div>
              <p>{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ REGISTRATION & PAYMENT ═══ */}
      <section className="ignite-section fade" ref={(el) => el && (sectionsRef.current[2] = el)}>
        <h2 className="section-title">Event Details & Registration</h2>
        <div className="premium-card registration-dashboard">
          <div className="reg-details">
            <h3 className="reg-heading">Join the Hackathon</h3>
            {[
              ["Date","15th March, 2026"],
              ["Location","Offline (PU Campus)"],
              ["Deadline","14th March, 2026"],
              ["Entry Fee","₹200 per Team"],
            ].map(([l, v]) => (
              <div className="detail-item" key={l}>
                <span className="cyan-label">{l}</span>
                <span className="detail-value">{v}</span>
              </div>
            ))}
            <div className="reg-actions">
              <p className="step-text"><strong>Step 2:</strong> Fill the form & upload screenshot</p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeiiOMFIYDfAQvXJshzEELyW3QOdHmPGXNgIcsCRvgRaQ9R8Q/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glow-cyan"
              >Apply Now</a>
            </div>
          </div>
          <div className="reg-payment">
            <p className="step-text"><strong>Step 1:</strong> Scan to pay the fee</p>
            <div className="qr-wrapper">
              <img src="/payment/gpay-ignite.png.jpeg" alt="UPI Payment QR" className="qr-image" />
            </div>
            <div className="upi-details">
              <span className="upi-label">UPI ID</span>
              <span className="upi-id">samagrasaharia@okicici</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ TIMELINE ═══ */}
      <section className="ignite-section fade" ref={(el) => el && (sectionsRef.current[3] = el)}>
        <h2 className="section-title">Hackathon Timeline</h2>
        <div className="premium-card timeline-container">
          <div className="timeline-track">
            <div className="timeline-node">
              <div className="node-content">
                <div className="node-header"><h3>Registration Opens</h3><span className="badge-live">LIVE</span></div>
                <p className="node-desc">Secure your spot before slots fill up.</p>
              </div>
            </div>
            <div className="timeline-node">
              <div className="node-content">
                <h3>Hackathon Begins</h3>
                <p className="node-date">15th March, 2026</p>
                <p className="node-desc">Problem statements revealed! Begin coding, building, and solving.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ RULES ═══ */}
      <section className="ignite-section fade" ref={(el) => el && (sectionsRef.current[4] = el)}>
        <h2 className="section-title">Ignite Rules</h2>
        <div className="rules-vertical">
          {[
            ["👥","Team size:","2–5 members"],
            ["🏢","Format:","Offline / On-ground hackathon"],
            ["🚫","Originality:","No pre-built projects allowed"],
            ["🌐","Resources:","Internet usage permitted"],
            ["⚖️","Verdict:","Judges' decision will be final"],
          ].map(([icon, label, val]) => (
            <div className="rule-row" key={String(label)}>
              <div className="rule-icon-box">{icon}</div>
              <div className="rule-text"><strong>{label}</strong> {val}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="ignite-footer">
        <div className="footer-content">
          <p>ASTRYX × JHANKAR · Ignite Hackathon</p>
          <p className="footer-copyright">© 2026 Astryx Studio | All Rights Reserved</p>
        </div>
      </footer>

      <style jsx>{`
        /* ─────────────────── CSS RESET & VARS ─────────────────── */
        *, *::before, *::after {
          box-sizing: border-box;
          -webkit-tap-highlight-color: transparent;
        }

        .ignite-root {
          position: relative;
          background-color: #05070d;
          background-image:
            radial-gradient(circle at 50% 0%, rgba(11,15,26,1) 0%, rgba(5,7,13,1) 70%),
            radial-gradient(circle at 80% 20%, rgba(255,106,0,0.03) 0%, transparent 40%);
          color: #fff;
          overflow-x: hidden;
          padding-top: 80px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
          min-height: 100vh;
          /* iOS safe area */
          padding-left: env(safe-area-inset-left);
          padding-right: env(safe-area-inset-right);
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        .bg-grid {
          position: absolute; top:0; left:0; right:0; bottom:0;
          background-image:
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
          background-size: 50px 50px;
          -webkit-mask-image: linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 80%);
          mask-image: linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 80%);
          pointer-events: none; z-index: 0;
        }

        /* ─────────────────── HERO ─────────────────── */
        .ignite-hero {
          position: relative;
          min-height: 65vh;
          display: flex; align-items: center; justify-content: center;
          text-align: center;
          padding: clamp(24px, 5vw, 60px) 20px;
          z-index: 1;
        }
        .hero-glow {
          position: absolute; top:50%; left:50%;
          transform: translate(-50%,-50%);
          width: min(400px, 90vw); height: min(400px, 90vw);
          background: radial-gradient(circle, rgba(255,106,0,0.12) 0%, rgba(0,229,255,0.05) 50%, transparent 70%);
          pointer-events: none;
        }
        .ignite-intro {
          position: relative; z-index: 1;
          opacity: 0; transform: translateY(30px);
          transition: opacity 1s cubic-bezier(0.2,0.8,0.2,1), transform 1s cubic-bezier(0.2,0.8,0.2,1);
          padding: 0 16px;
        }
        .ignite-intro.show { opacity:1; transform:translateY(0); }

        .badge-collab {
          display: inline-block;
          background: rgba(154,163,255,0.1); border:1px solid rgba(154,163,255,0.2);
          color: #9aa3ff; padding: 6px 16px; border-radius: 50px;
          font-size: clamp(10px,2.5vw,13px); letter-spacing: 3px; margin-bottom: 24px;
        }
        .ignite-subtitle { letter-spacing:6px; font-size:clamp(11px,2vw,14px); color:#cfd3ff; font-weight:500; margin:0 0 4px; }
        .ignite-title {
          font-size: clamp(64px, 18vw, 180px);
          font-weight: 900; line-height: 1.05;
          background: linear-gradient(100deg, #ff6a00 0%, #ffb347 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
          margin: 8px 0; filter: drop-shadow(0px 4px 20px rgba(255,106,0,0.2));
        }
        .ignite-tagline {
          font-size: clamp(14px, 4vw, 22px); color: #00e5ff;
          font-weight: 600; letter-spacing: 1.5px; margin-bottom: 32px; text-transform: uppercase;
        }
        .hero-prize-badge {
          display: inline-flex; align-items: center; gap: 10px;
          background: rgba(255,215,0,0.08); border: 1px solid rgba(255,215,0,0.4);
          color: #ffd700; padding: 10px 24px; border-radius: 40px;
          font-size: clamp(14px,3.5vw,18px); font-weight: 700;
          box-shadow: 0 0 20px rgba(255,215,0,0.15);
          animation: floatPrize 3s ease-in-out infinite;
          -webkit-backdrop-filter: blur(5px); backdrop-filter: blur(5px);
        }
        .prize-icon { font-size: clamp(16px,4vw,20px); }
        @keyframes floatPrize {
          0%,100% { transform:translateY(0); }
          50% { transform:translateY(-5px); box-shadow:0 5px 25px rgba(255,215,0,0.25); }
        }

        /* ─────────────────── SECTIONS ─────────────────── */
        .ignite-section {
          position: relative; z-index: 1;
          width: 100%; max-width: 1000px;
          margin: 0 auto; padding: clamp(40px,7vw,70px) clamp(16px,4vw,24px);
        }
        .section-title {
          text-align: center; font-size: clamp(24px,5vw,34px);
          font-weight: 800; margin-bottom: 12px; color: #fff; letter-spacing: -0.5px;
        }
        .section-subtitle { text-align:center; color:#9aa3ff; margin-bottom:40px; font-size:clamp(14px,3vw,17px); }

        .fade { opacity:0; transform:translateY(40px) scale(0.98); transition:all 0.8s cubic-bezier(0.25,1,0.5,1); }
        .fade.visible { opacity:1; transform:translateY(0) scale(1); }

        /* ─────────────────── HUD CARD ─────────────────── */
        .slots-section { padding-top: 0; padding-bottom: 40px; }

        .hud-card {
          position: relative;
          background: linear-gradient(160deg, rgba(255,106,0,0.05) 0%, rgba(0,0,0,0) 50%), rgba(8,10,18,0.96);
          border: 1px solid rgba(255,106,0,0.28);
          border-radius: 6px;
          overflow: hidden;
          box-shadow: 0 0 0 1px rgba(255,106,0,0.06), 0 24px 70px -16px rgba(0,0,0,0.85), inset 0 1px 0 rgba(255,255,255,0.03);
        }

        /* Corner brackets */
        .corner { position:absolute; width:16px; height:16px; border-color:#ff6a00; border-style:solid; z-index:10; pointer-events:none; }
        .corner.tl { top:-1px; left:-1px; border-width:2px 0 0 2px; border-radius:3px 0 0 0; }
        .corner.tr { top:-1px; right:-1px; border-width:2px 2px 0 0; border-radius:0 3px 0 0; }
        .corner.bl { bottom:-1px; left:-1px; border-width:0 0 2px 2px; border-radius:0 0 0 3px; }
        .corner.br { bottom:-1px; right:-1px; border-width:0 2px 2px 0; border-radius:0 0 3px 0; }

        .scanlines {
          position:absolute; inset:0;
          background: repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.1) 3px, rgba(0,0,0,0.1) 4px);
          pointer-events:none; z-index:1; opacity:0.5;
        }

        /* Top bar */
        .hud-topbar {
          position: relative; z-index: 2;
          display: flex; justify-content: space-between; align-items: center;
          padding: 10px clamp(16px,3vw,28px);
          border-bottom: 1px solid rgba(255,106,0,0.15);
          background: rgba(255,106,0,0.04);
          font-family: 'Courier New', 'Menlo', 'Consolas', monospace;
          font-size: clamp(9px,2vw,11px); letter-spacing: 2px; text-transform: uppercase;
          gap: 8px;
        }
        .hud-tag { color: rgba(255,180,80,0.6); white-space: nowrap; }
        .live-tag { display:flex; align-items:center; gap:7px; color:#10b981; font-weight:700; flex-shrink:0; }
        .live-dot {
          width:7px; height:7px; border-radius:50%;
          background:#10b981; box-shadow:0 0 8px #10b981;
          animation: blink 1.2s step-end infinite; flex-shrink:0;
        }
        @keyframes blink { 0%,100%{opacity:1;} 50%{opacity:0.15;} }

        /* ─── HUD BODY — responsive grid ─── */
        .hud-body {
          position: relative; z-index: 2;
          display: grid;
          /* 3 cols on wide screens */
          grid-template-columns: auto 1fr 1fr;
          grid-template-rows: auto;
          align-items: center;
          gap: 0;
          padding: clamp(24px,4vw,40px) clamp(20px,4vw,44px);
        }

        /* Dividers between columns via right border */
        .arc-col  { border-right: 1px solid rgba(255,255,255,0.05); padding-right: clamp(20px,3vw,40px); }
        .counter-col { border-right: 1px solid rgba(255,255,255,0.05); padding: 0 clamp(20px,3vw,40px); }
        .slot-col { padding-left: clamp(20px,3vw,40px); }

        /* ─── Arc gauge ─── */
        .arc-col { display:flex; align-items:center; justify-content:center; }
        .arc-wrap { position:relative; display:flex; align-items:center; justify-content:center; }
        .arc-svg {
          width: clamp(120px, 16vw, 180px);
          height: clamp(120px, 16vw, 180px);
          display: block;
          overflow: visible;
        }
        .arc-center {
          position: absolute; top:50%; left:50%;
          transform: translate(-50%, -50%);
          text-align: center; line-height: 1; pointer-events:none;
        }
        .arc-pct {
          display: block;
          font-size: clamp(20px, 3.5vw, 28px);
          font-weight: 900; color: #ffb347;
          font-family: 'Courier New', monospace;
          filter: drop-shadow(0 0 10px rgba(255,179,71,0.6));
          white-space: nowrap;
        }
        .arc-pct-label {
          display: block; font-size: clamp(8px,1.2vw,10px);
          letter-spacing: 3px; color: rgba(255,255,255,0.3);
          font-family: 'Courier New', monospace; margin-top: 3px;
        }

        /* ─── Counter ─── */
        .counter-col { text-align: center; }
        .counter-eyebrow {
          font-family: 'Courier New', monospace;
          font-size: clamp(9px,1.5vw,11px); letter-spacing: 3px;
          color: rgba(255,106,0,0.6); margin: 0 0 10px;
          white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
        }
        .counter-display { display:flex; align-items:baseline; justify-content:center; gap: clamp(4px,1vw,8px); }
        .counter-main {
          font-size: clamp(56px, 9vw, 96px);
          font-weight: 900; line-height: 1;
          background: linear-gradient(135deg, #ff6a00 0%, #ffb347 55%, #ffe0a0 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
          filter: drop-shadow(0 0 20px rgba(255,106,0,0.45));
          font-family: 'Courier New', monospace; letter-spacing: -2px;
        }
        .counter-sep {
          font-size: clamp(28px, 4.5vw, 48px); color:rgba(255,255,255,0.15);
          font-weight:300; line-height:1; align-self:center;
        }
        .counter-total {
          font-size: clamp(28px, 4.5vw, 48px); font-weight:700;
          color:rgba(255,255,255,0.22); font-family:'Courier New',monospace; line-height:1;
        }
        .counter-sub {
          margin: 10px 0 0; font-size: clamp(11px,2vw,14px);
          color: rgba(255,255,255,0.35); font-family:'Courier New',monospace; letter-spacing:1px;
        }
        .slots-left-num { color:#00e5ff; font-weight:700; filter:drop-shadow(0 0 8px rgba(0,229,255,0.5)); }

        .glitch { animation: glitchAnim 0.45s steps(2,end); }
        @keyframes glitchAnim {
          0%  { transform:translate(0); }
          20% { transform:translate(-3px,2px); filter:hue-rotate(90deg); }
          40% { transform:translate(3px,-2px); }
          60% { transform:translate(-2px,1px); filter:hue-rotate(-90deg); }
          80% { transform:translate(2px,-1px); }
          100%{ transform:translate(0); filter:none; }
        }

        /* ─── Slot grid ─── */
        .slot-col { display:flex; flex-direction:column; gap:12px; }
        .slot-grid-label {
          font-family:'Courier New',monospace; font-size:clamp(8px,1.5vw,10px);
          letter-spacing: 2.5px; color:rgba(255,255,255,0.22); margin:0;
          text-transform: uppercase;
        }
        .slot-grid { display:grid; grid-template-columns:repeat(5,1fr); gap:clamp(4px,1vw,7px); }
        .slot-cell {
          aspect-ratio:1; border-radius:4px;
          transition: transform 0.25s cubic-bezier(0.34,1.56,0.64,1), opacity 0.25s ease;
          position:relative; overflow:hidden;
        }
        .slot-cell.on {
          background: linear-gradient(135deg, rgba(255,106,0,0.9), rgba(255,179,71,0.9));
          box-shadow: 0 0 8px rgba(255,100,0,0.5), inset 0 1px 0 rgba(255,255,255,0.2);
          border: 1px solid rgba(255,150,50,0.55);
          animation: popIn 0.32s cubic-bezier(0.34,1.56,0.64,1) both;
        }
        .slot-cell.off {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
        }
        .slot-shimmer {
          position:absolute; inset:0;
          background: linear-gradient(135deg, rgba(255,255,255,0.12) 0%, transparent 55%);
          border-radius: 3px;
        }
        @keyframes popIn { 0%{transform:scale(0.2);opacity:0;} 65%{transform:scale(1.18);} 100%{transform:scale(1);opacity:1;} }

        .slot-legend {
          display:flex; align-items:center; gap:6px;
          font-size: clamp(10px,1.8vw,11px); color:rgba(255,255,255,0.25);
          font-family:'Courier New',monospace; letter-spacing:1px;
        }
        .legend-dot { width:10px; height:10px; border-radius:2px; display:inline-block; flex-shrink:0; }
        .legend-dot.on { background:linear-gradient(135deg,#ff6a00,#ffb347); }
        .legend-dot.off { background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.1); }

        /* Bottom bar */
        .hud-bottombar {
          position:relative; z-index:2;
          display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:6px;
          padding: 10px clamp(16px,3vw,28px);
          border-top:1px solid rgba(255,106,0,0.15); background:rgba(255,106,0,0.03);
          font-family:'Courier New',monospace; font-size:clamp(9px,1.8vw,11px); letter-spacing:1.5px;
        }
        .bottom-tag { color:rgba(255,255,255,0.3); white-space:nowrap; }
        .bottom-tag.warn { color:rgba(255,106,0,0.75); animation:warnFlash 2s ease-in-out infinite; }
        @keyframes warnFlash { 0%,100%{opacity:1;} 50%{opacity:0.35;} }

        /* ─────────────────── CARDS ─────────────────── */
        .cards-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(min(280px,100%),1fr)); gap:clamp(16px,3vw,24px); }
        .premium-card {
          background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.05);
          border-radius:20px; padding:clamp(20px,4vw,32px);
          -webkit-backdrop-filter:blur(16px); backdrop-filter:blur(16px);
          box-shadow:0 10px 30px -10px rgba(0,0,0,0.5);
          transition:transform 0.4s cubic-bezier(0.175,0.885,0.32,1.275), border-color 0.4s, box-shadow 0.4s;
        }
        .cards-grid .premium-card:hover { transform:translateY(-8px); border-color:rgba(0,229,255,0.4); box-shadow:0 20px 40px -10px rgba(0,229,255,0.15); }
        .card-icon { font-size:28px; margin-bottom:18px; background:rgba(255,255,255,0.05); width:56px; height:56px; display:flex; align-items:center; justify-content:center; border-radius:14px; }
        .premium-card h3 { font-size:clamp(18px,3vw,22px); margin-bottom:10px; font-weight:700; color:#fff; }
        .premium-card p { color:#a5aeea; font-size:clamp(13px,2.5vw,15px); line-height:1.7; margin:0; }

        /* ─────────────────── THEMES ─────────────────── */
        .classified-badge {
          display:table; margin:0 auto 36px auto;
          background:rgba(0,229,255,0.08); border:1px solid rgba(0,229,255,0.3);
          color:#00e5ff; padding:12px 20px; border-radius:12px;
          font-size:clamp(12px,2.5vw,15px); text-align:center;
          -webkit-backdrop-filter:blur(8px); backdrop-filter:blur(8px);
        }
        .classified-badge strong { color:#fff; }
        .themes-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(min(220px,100%),1fr)); gap:clamp(14px,2.5vw,20px); }
        .theme-card {
          background:linear-gradient(145deg,rgba(255,255,255,0.03) 0%,rgba(0,0,0,0.4) 100%);
          border:1px solid rgba(255,255,255,0.06); border-radius:16px;
          padding:clamp(18px,3.5vw,28px) clamp(16px,3vw,24px);
          transition:transform 0.3s ease, border-color 0.3s, box-shadow 0.3s;
          position:relative; overflow:hidden;
        }
        .theme-card::before { content:''; position:absolute; top:0; left:0; right:0; height:3px; background:linear-gradient(90deg,#ff6a00,#ffb347); opacity:0; transition:opacity 0.3s; }
        .theme-card:hover { transform:translateY(-5px); border-color:rgba(255,106,0,0.3); box-shadow:0 15px 30px rgba(0,0,0,0.4); }
        .theme-card:hover::before { opacity:1; }
        .theme-header { display:flex; align-items:center; gap:12px; margin-bottom:14px; }
        .theme-emoji { font-size:24px; background:rgba(255,255,255,0.05); width:46px; height:46px; display:flex; align-items:center; justify-content:center; border-radius:12px; flex-shrink:0; }
        .theme-card h3 { font-size:clamp(15px,2.5vw,18px); font-weight:700; color:#fff; margin:0; }
        .theme-card p { color:#a5aeea; font-size:clamp(12px,2vw,14px); line-height:1.65; margin:0; }

        /* ─────────────────── REG DASHBOARD ─────────────────── */
        .registration-dashboard { display:flex; gap:clamp(24px,4vw,40px); align-items:flex-start; flex-wrap:wrap; border-top:2px solid rgba(0,229,255,0.2); }
        .reg-details { flex:1; min-width:min(280px,100%); display:flex; flex-direction:column; gap:16px; }
        .reg-heading { font-size:clamp(18px,3.5vw,24px); color:#fff; margin:0 0 4px; }
        .detail-item { display:flex; align-items:center; gap:14px; background:rgba(255,255,255,0.02); padding:12px 14px; border-radius:10px; border-left:3px solid #00e5ff; flex-wrap:wrap; }
        .cyan-label { color:#00e5ff; font-size:clamp(10px,2vw,13px); text-transform:uppercase; letter-spacing:1px; font-weight:700; width:72px; flex-shrink:0; }
        .detail-value { font-size:clamp(13px,2.5vw,16px); font-weight:500; color:#fff; }
        .reg-actions { margin-top:12px; }
        .step-text { color:#ffb347; font-size:clamp(12px,2.5vw,14px); margin-bottom:12px; }
        .step-text strong { color:#ff6a00; text-transform:uppercase; }
        .btn-glow-cyan {
          padding:14px 32px; border-radius:50px; background:#00e5ff; color:#000;
          font-weight:700; font-size:clamp(14px,2.5vw,16px); text-decoration:none;
          display:inline-flex; align-items:center; justify-content:center;
          transition:transform 0.3s ease, box-shadow 0.3s ease, background 0.3s;
          box-shadow:0 0 20px rgba(0,229,255,0.2);
          width:100%; max-width:300px; -webkit-user-select:none; user-select:none;
          touch-action:manipulation;
        }
        .btn-glow-cyan:hover { transform:scale(1.02); box-shadow:0 0 30px rgba(0,229,255,0.5); background:#33eeff; }
        .btn-glow-cyan:active { transform:scale(0.98); }
        .reg-payment { flex:0 0 auto; width:min(320px,100%); background:rgba(0,0,0,0.3); border:1px solid rgba(255,255,255,0.05); border-radius:24px; padding:clamp(20px,4vw,32px); display:flex; flex-direction:column; align-items:center; text-align:center; }
        .qr-wrapper { background:#fff; padding:10px; border-radius:14px; margin-bottom:20px; box-shadow:0 0 30px rgba(0,0,0,0.5); }
        .qr-image { width:clamp(140px,25vw,180px); height:clamp(140px,25vw,180px); object-fit:cover; border-radius:8px; display:block; }
        .upi-details { background:rgba(255,255,255,0.03); padding:12px; border-radius:12px; width:100%; border:1px solid rgba(255,255,255,0.05); }
        .upi-label { display:block; font-size:12px; color:#8a90ff; text-transform:uppercase; margin-bottom:4px; }
        .upi-id { font-size:clamp(12px,2.5vw,15px); color:#00e5ff; font-weight:600; word-break:break-all; }

        /* ─────────────────── TIMELINE ─────────────────── */
        .timeline-container { padding:clamp(24px,4vw,40px); }
        .timeline-track { position:relative; padding-left:32px; }
        .timeline-track::before { content:''; position:absolute; left:4px; top:10px; bottom:10px; width:2px; background:linear-gradient(to bottom,#00e5ff,rgba(0,229,255,0.1)); border-radius:2px; }
        .timeline-node { position:relative; margin-bottom:36px; }
        .timeline-node:last-child { margin-bottom:0; }
        .timeline-node::before { content:''; position:absolute; left:-32px; top:6px; width:10px; height:10px; border-radius:50%; background:#00e5ff; box-shadow:0 0 12px 2px rgba(0,229,255,0.6); border:2px solid #05070d; z-index:2; }
        .node-content { background:rgba(0,0,0,0.2); padding:clamp(14px,3vw,20px) clamp(16px,3vw,24px); border-radius:12px; border:1px solid rgba(255,255,255,0.03); }
        .node-header { display:flex; align-items:center; gap:12px; flex-wrap:wrap; }
        .node-header h3, .node-content h3 { font-size:clamp(16px,3vw,20px); font-weight:600; color:#fff; margin:0; }
        .badge-live { background:rgba(16,185,129,0.15); color:#10b981; border:1px solid rgba(16,185,129,0.3); font-size:11px; font-weight:800; padding:4px 10px; border-radius:20px; letter-spacing:1px; animation:livePulse 2s infinite; white-space:nowrap; }
        @keyframes livePulse { 0%,100%{box-shadow:0 0 0 0 rgba(16,185,129,0.4);} 70%{box-shadow:0 0 0 6px rgba(16,185,129,0);} }
        .node-desc { color:#8a90ff; margin-top:8px; font-size:clamp(13px,2.5vw,15px); }
        .node-date { color:#ffb347; margin-top:6px; font-weight:500; font-size:clamp(12px,2vw,14px); }

        /* ─────────────────── RULES ─────────────────── */
        .rules-vertical { display:flex; flex-direction:column; gap:14px; max-width:700px; margin:0 auto; }
        .rule-row { display:flex; align-items:center; gap:18px; background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.04); padding:clamp(12px,2.5vw,16px) clamp(16px,3vw,24px); border-radius:16px; transition:transform 0.3s ease, border-color 0.3s, box-shadow 0.3s; }
        .rule-row:hover { background:rgba(255,255,255,0.04); transform:translateX(8px); border-color:rgba(255,106,0,0.3); box-shadow:-4px 0 0 0 #ff6a00; }
        .rule-icon-box { font-size:20px; background:rgba(255,255,255,0.05); width:42px; height:42px; display:flex; align-items:center; justify-content:center; border-radius:12px; flex-shrink:0; }
        .rule-text { color:#cfd3ff; font-size:clamp(13px,2.5vw,16px); }
        .rule-text strong { color:#fff; margin-right:6px; }

        /* ─────────────────── FOOTER ─────────────────── */
        .ignite-footer { margin-top:60px; border-top:1px solid rgba(255,255,255,0.05); padding:clamp(28px,5vw,40px) 20px; background:rgba(0,0,0,0.2); padding-bottom:calc(clamp(28px,5vw,40px) + env(safe-area-inset-bottom)); }
        .footer-content { max-width:1000px; margin:0 auto; text-align:center; color:#8a90ff; font-size:clamp(13px,2.5vw,15px); font-weight:500; }
        .footer-copyright { margin-top:8px; font-size:12px; color:#4f5594; }

        /* ─────────────────── RESPONSIVE ─────────────────── */

        /* Tablet: 601–900px */
        @media (max-width: 900px) {
          .hud-body {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto auto;
          }
          .arc-col {
            grid-column: 1; grid-row: 1;
            border-right: 1px solid rgba(255,255,255,0.05);
            border-bottom: none;
            padding-bottom: 0;
          }
          .counter-col {
            grid-column: 2; grid-row: 1;
            border-right: none;
            border-bottom: 1px solid rgba(255,255,255,0.05);
            padding-right: 0;
            padding-bottom: clamp(20px,3vw,32px);
          }
          .slot-col {
            grid-column: 1 / -1; grid-row: 2;
            padding-left: 0;
            padding-top: clamp(20px,3vw,32px);
            border-right: none;
          }
          .hud-tag-hide { display:none; }
        }

        /* Mobile: ≤600px */
        @media (max-width: 600px) {
          .ignite-root { padding-top: 60px; }

          .hud-body {
            grid-template-columns: 1fr;
            grid-template-rows: auto;
            padding: 20px 18px;
            gap: 0;
          }
          .arc-col {
            grid-column: 1; grid-row: 1;
            border-right: none;
            border-bottom: 1px solid rgba(255,255,255,0.05);
            padding-right: 0;
            padding-bottom: 24px;
          }
          .counter-col {
            grid-column: 1; grid-row: 2;
            border-right: none;
            border-bottom: 1px solid rgba(255,255,255,0.05);
            padding: 24px 0;
          }
          .slot-col {
            grid-column: 1; grid-row: 3;
            padding-left: 0;
            padding-top: 24px;
          }
          .hud-tag-hide { display: none; }
          .hud-topbar, .hud-bottombar { flex-direction:column; align-items:flex-start; gap:4px; }
          .counter-main { font-size: clamp(52px,18vw,72px); }
          .arc-svg { width:140px; height:140px; }
          .slot-grid { grid-template-columns: repeat(5,1fr); gap:5px; }

          .registration-dashboard { flex-direction:column; }
          .reg-payment { width:100%; }
          .detail-item { flex-direction:column; align-items:flex-start; gap:2px; }
          .cyan-label { width:auto; }

          .rule-row { gap:14px; }
          .rule-row:hover { transform:none; }
        }

        /* Very small phones: ≤360px */
        @media (max-width: 360px) {
          .ignite-title { font-size: 52px; }
          .counter-main { font-size: 48px; }
          .slot-grid { gap: 4px; }
        }

        /* High-DPI / Retina */
        @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
          .hud-card { border-width: 0.5px; }
          .corner { border-width: 1.5px; }
        }

        /* Reduce motion for accessibility */
        @media (prefers-reduced-motion: reduce) {
          .fade { transition: opacity 0.4s ease; transform: none; }
          .fade.visible { transform: none; }
          .hero-prize-badge { animation: none; }
          .slot-cell.on { animation: none; opacity:1; transform:scale(1); }
          .live-dot { animation: none; }
          .glitch { animation: none; }
        }
      `}</style>
    </main>
  );
}