"use client";

import { useEffect, useRef, useState } from "react";

export default function HackathonsPage() {
  const [showIntro, setShowIntro] = useState(false);
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const introTimer = setTimeout(() => setShowIntro(true), 150);

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
      observer.disconnect();
    };
  }, []);

  return (
    <main className="ignite-root">
      {/* ================= HERO ================= */}
      <section className="ignite-hero">
        <div className="hero-glow"></div>
        <div className={`ignite-intro ${showIntro ? "show" : ""}`}>
          <div className="badge-collab">ASTRYX × JHANKAR</div>
          <p className="ignite-subtitle">PRESENTS</p>
          <h1 className="ignite-title">IGNITE</h1>
          <p className="ignite-tagline">Ignite the coder within you.</p>

          {/* Subtle Prize Pool Hook */}
          <div className="hero-prize-badge">
            <span className="prize-icon">🏆</span>
            Prize Pool: ₹50,000+
          </div>
        </div>
      </section>

      {/* ================= WHY PARTICIPATE ================= */}
      <section
        className="ignite-section fade"
        ref={(el) => el && (sectionsRef.current[0] = el)}
      >
        <h2 className="section-title">Why Participate?</h2>
        <div className="cards-grid">
          <div className="premium-card">
            <div className="card-icon">🏆</div>
            <h3>Win Big Prizes</h3>
            <p>Compete for a prize pool of ₹50,000+, including cash, exclusive goodies, and premium swag.</p>
          </div>
          <div className="premium-card">
            <div className="card-icon">💡</div>
            <h3>Build Real Projects</h3>
            <p>Create innovative solutions and strengthen your developer portfolio.</p>
          </div>
          <div className="premium-card">
            <div className="card-icon">🤝</div>
            <h3>Network</h3>
            <p>Connect with top developers, experienced mentors, and industry experts.</p>
          </div>
        </div>
      </section>

      {/* ================= MINI EVENTS ================= */}
      <section
        className="ignite-section fade"
        ref={(el) => el && (sectionsRef.current[1] = el)}
        style={{ textAlign: 'center' }}
      >
        <h2 className="section-title">Side Quests & Mini Events</h2>
        <p className="section-subtitle">Take a break from building and test your raw skills to win extra goodies.</p>

        <div className="event-rule-badge">
          ⚔️ <strong>Champion Rule:</strong> Each team can nominate exactly 1 member to compete in each game.
        </div>

        <div className="events-grid">
          <div className="event-card">
            <div className="event-emoji">🕵️‍♂️</div>
            <h4>MySQL Code Detective</h4>
            <p className="event-desc">Solve mysteries and extract hidden flags using complex queries and joins.</p>
            <div className="event-skills">
              <span className="skill-tag">SQL</span>
              <span className="skill-tag">Database Logic</span>
            </div>
          </div>

          <div className="event-card">
            <div className="event-emoji">🔐</div>
            <h4>Logic Lock</h4>
            <p className="event-desc">Crack the codes, solve riddles, and escape the digital room before time runs out.</p>
            <div className="event-skills">
              <span className="skill-tag">Cryptography</span>
              <span className="skill-tag">Aptitude</span>
            </div>
          </div>

          <div className="event-card">
            <div className="event-emoji">🧠</div>
            <h4>DSA Quiz</h4>
            <p className="event-desc">Battle it out on time/space complexity and core algorithmic problem solving.</p>
            <div className="event-skills">
              <span className="skill-tag">Data Structures</span>
              <span className="skill-tag">Algorithms</span>
            </div>
          </div>

          <div className="event-card">
            <div className="event-emoji">⚡</div>
            <h4>Tech Quiz</h4>
            <p className="event-desc">Show off your knowledge of CS fundamentals, tech history, and geek trivia.</p>
            <div className="event-skills">
              <span className="skill-tag">CS Core</span>
              <span className="skill-tag">Tech Trivia</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= COMBINED REGISTRATION & PAYMENT ================= */}
      <section
        className="ignite-section fade"
        ref={(el) => el && (sectionsRef.current[2] = el)}
      >
        <h2 className="section-title">Event Details & Registration</h2>
        <div className="premium-card registration-dashboard">

          {/* Left Side: Details & CTA */}
          <div className="reg-details">
            <h3 className="reg-heading">Join the Hackathon</h3>
            <div className="detail-item">
              <span className="cyan-label">Date</span>
              <span className="detail-value">15th March, 2026</span>
            </div>
            <div className="detail-item">
              <span className="cyan-label">Location</span>
              <span className="detail-value">Offline (UIET Campus)</span>
            </div>
            <div className="detail-item">
              <span className="cyan-label">Deadline</span>
              <span className="detail-value">14th March, 2026</span>
            </div>
            <div className="detail-item">
              <span className="cyan-label">Entry Fee</span>
              <span className="detail-value">₹200 per person</span>
            </div>

            <div className="reg-actions">
              <p className="step-text"><strong>Step 2:</strong> Fill the form & upload screenshot</p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeiiOMFIYDfAQvXJshzEELyW3QOdHmPGXNgIcsCRvgRaQ9R8Q/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glow-cyan"
              >
                Apply Now
              </a>
            </div>
          </div>

          {/* Right Side: Payment QR */}
          <div className="reg-payment">
            <p className="step-text"><strong>Step 1:</strong> Scan to pay the fee</p>
            <div className="qr-wrapper">
              <img
                src="/payment/gpay-ignite.png.jpeg"
                alt="UPI Payment QR"
                className="qr-image"
              />
            </div>
            <div className="upi-details">
              <span className="upi-label">UPI ID</span>
              <span className="upi-id">samagrasaharia@okicici</span>
            </div>
          </div>

        </div>
      </section>

      {/* ================= TIMELINE ================= */}
      <section
        className="ignite-section fade"
        ref={(el) => el && (sectionsRef.current[3] = el)}
      >
        <h2 className="section-title">Hackathon Timeline</h2>
        <div className="premium-card timeline-container">
          <div className="timeline-track">

            <div className="timeline-node">
              <div className="node-content">
                <div className="node-header">
                  <h3>Registration Opens</h3>
                  <span className="badge-live">LIVE</span>
                </div>
                <p className="node-desc">Secure your spot before slots fill up.</p>
              </div>
            </div>

            <div className="timeline-node">
              <div className="node-content">
                <h3>Hackathon Begins</h3>
                <p className="node-date">15th March, 2026</p>
                <p className="node-desc">24 hours of non-stop coding, events, and building.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= RULES (VERTICAL) ================= */}
      <section
        className="ignite-section fade"
        ref={(el) => el && (sectionsRef.current[4] = el)}
      >
        <h2 className="section-title">Ignite Rules</h2>
        <div className="rules-vertical">
          <div className="rule-row">
            <div className="rule-icon-box">👥</div>
            <div className="rule-text"><strong>Team size:</strong> 2–5 members</div>
          </div>
          <div className="rule-row">
            <div className="rule-icon-box">⏳</div>
            <div className="rule-text"><strong>Duration:</strong> 24-hour on-ground hackathon</div>
          </div>
          <div className="rule-row">
            <div className="rule-icon-box">🚫</div>
            <div className="rule-text"><strong>Originality:</strong> No pre-built projects allowed</div>
          </div>
          <div className="rule-row">
            <div className="rule-icon-box">🌐</div>
            <div className="rule-text"><strong>Resources:</strong> Internet usage permitted</div>
          </div>
          <div className="rule-row">
            <div className="rule-icon-box">⚖️</div>
            <div className="rule-text"><strong>Verdict:</strong> Judges’ decision will be final</div>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="ignite-footer">
        <div className="footer-content">
          <p>ASTRYX × JHANKAR · Ignite Hackathon</p>
          <p className="footer-copyright">© 2026 Astryx Studio | All Rights Reserved</p>
        </div>
      </footer>

      {/* ================= STYLES ================= */}
      <style jsx>{`
        .ignite-root {
          background-color: #05070d;
          background-image: 
            radial-gradient(circle at 50% 0%, rgba(11, 15, 26, 1) 0%, rgba(5, 7, 13, 1) 70%),
            radial-gradient(circle at 80% 20%, rgba(255, 106, 0, 0.03) 0%, transparent 40%);
          color: #ffffff;
          overflow-x: hidden;
          padding-top: 80px;
          font-family: system-ui, -apple-system, sans-serif;
          min-height: 100vh;
        }

        /* HERO SECTION */
        .ignite-hero {
          position: relative;
          min-height: 65vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 40px 20px;
        }

        .hero-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(255,106,0,0.15) 0%, rgba(0,0,0,0) 70%);
          z-index: 0;
          pointer-events: none;
        }

        .ignite-intro {
          position: relative;
          z-index: 1;
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 1s cubic-bezier(0.2, 0.8, 0.2, 1), transform 1s cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        .ignite-intro.show {
          opacity: 1;
          transform: translateY(0);
        }

        .badge-collab {
          display: inline-block;
          background: rgba(154, 163, 255, 0.1);
          border: 1px solid rgba(154, 163, 255, 0.2);
          color: #9aa3ff;
          padding: 6px 16px;
          border-radius: 50px;
          font-size: 13px;
          letter-spacing: 3px;
          margin-bottom: 24px;
        }

        .ignite-subtitle {
          letter-spacing: 6px;
          font-size: 14px;
          color: #cfd3ff;
          font-weight: 500;
        }

        .ignite-title {
          font-size: clamp(80px, 15vw, 180px);
          font-weight: 900;
          line-height: 1.1;
          background: linear-gradient(100deg, #ff6a00 0%, #ffb347 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin: 8px 0;
          filter: drop-shadow(0px 4px 20px rgba(255, 106, 0, 0.2));
        }

        .ignite-tagline {
          font-size: 20px;
          color: #00e5ff; 
          font-weight: 500;
          letter-spacing: 1px;
          margin-bottom: 24px;
        }
        
        /* NEW: PRIZE POOL BADGE */
        .hero-prize-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 215, 0, 0.1);
          border: 1px solid rgba(255, 215, 0, 0.4);
          color: #ffd700;
          padding: 8px 20px;
          border-radius: 30px;
          font-size: 16px;
          font-weight: 700;
          box-shadow: 0 0 15px rgba(255, 215, 0, 0.2);
          animation: floatPrize 3s ease-in-out infinite;
        }
        
        .prize-icon {
          font-size: 18px;
        }
        
        @keyframes floatPrize {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-5px); box-shadow: 0 5px 20px rgba(255, 215, 0, 0.3); }
          100% { transform: translateY(0px); }
        }

        /* GLOBAL SECTION STYLES */
        .ignite-section {
          max-width: 1000px;
          margin: 0 auto;
          padding: 70px 24px;
        }

        .section-title {
          text-align: center;
          font-size: 32px;
          font-weight: 800;
          margin-bottom: 12px;
          color: #ffffff;
          letter-spacing: -0.5px;
        }
        
        .section-subtitle {
          text-align: center;
          color: #9aa3ff;
          margin-bottom: 32px;
          font-size: 16px;
        }

        /* ANIMATIONS */
        .fade {
          opacity: 0;
          transform: translateY(40px) scale(0.98);
          transition: all 0.8s cubic-bezier(0.25, 1, 0.5, 1);
        }

        .fade.visible {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        /* PREMIUM CARDS */
        .cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
        }

        .premium-card {
          background: rgba(255, 255, 255, 0.015);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 20px;
          padding: 32px;
          backdrop-filter: blur(12px);
          box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.5);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .cards-grid .premium-card:hover {
          transform: translateY(-8px);
          border-color: rgba(0, 229, 255, 0.3);
          background: rgba(255, 255, 255, 0.03);
          box-shadow: 0 20px 40px -10px rgba(0, 229, 255, 0.1);
        }

        .card-icon {
          font-size: 32px;
          margin-bottom: 20px;
          background: rgba(255, 255, 255, 0.05);
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 14px;
        }

        .premium-card h3 {
          font-size: 22px;
          margin-bottom: 12px;
          font-weight: 700;
          color: #ffffff;
        }

        .premium-card p {
          color: #9aa3ff;
          font-size: 15px;
          line-height: 1.7;
        }

        /* MINI EVENTS */
        .event-rule-badge {
          display: inline-block;
          background: rgba(255, 106, 0, 0.1);
          border: 1px solid rgba(255, 106, 0, 0.3);
          color: #ffb347;
          padding: 10px 24px;
          border-radius: 50px;
          font-size: 14px;
          margin-bottom: 40px;
          box-shadow: 0 0 20px rgba(255, 106, 0, 0.15);
        }

        .events-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 20px;
        }

        .event-card {
          background: rgba(0, 0, 0, 0.3);
          border: 1px dashed rgba(255, 106, 0, 0.3);
          border-radius: 16px;
          padding: 28px 20px;
          text-align: center;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
          height: 100%;
        }

        .event-card:hover {
          background: rgba(255, 106, 0, 0.05);
          border-style: solid;
          border-color: #ff6a00;
          transform: translateY(-6px);
          box-shadow: 0 10px 25px rgba(255, 106, 0, 0.15);
        }

        .event-emoji {
          font-size: 44px;
          margin-bottom: 16px;
          filter: drop-shadow(0 0 10px rgba(255,255,255,0.1));
        }

        .event-card h4 {
          color: #e2e8f0;
          font-size: 18px;
          font-weight: 700;
          margin: 0 0 12px 0;
        }

        .event-desc {
          color: #8a90ff;
          font-size: 14px;
          line-height: 1.5;
          margin-bottom: 20px;
          flex-grow: 1; /* Pushes skills to the bottom evenly */
        }

        .event-skills {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 8px;
          margin-top: auto;
        }

        .skill-tag {
          font-size: 12px;
          font-weight: 600;
          color: #00e5ff;
          background: rgba(0, 229, 255, 0.08);
          border: 1px solid rgba(0, 229, 255, 0.2);
          padding: 4px 12px;
          border-radius: 20px;
        }

        /* REGISTRATION & PAYMENT DASHBOARD */
        .registration-dashboard {
          display: flex;
          gap: 40px;
          align-items: center;
          justify-content: space-between;
          border-top: 2px solid rgba(0, 229, 255, 0.2);
        }

        .reg-details {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .reg-heading {
          font-size: 24px;
          color: #fff;
          margin-bottom: 8px;
        }

        .detail-item {
          display: flex;
          align-items: center;
          gap: 16px;
          background: rgba(255, 255, 255, 0.02);
          padding: 12px 16px;
          border-radius: 10px;
          border-left: 3px solid #00e5ff;
        }

        .cyan-label {
          color: #00e5ff;
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-weight: 700;
          width: 80px;
        }

        .detail-value {
          font-size: 16px;
          font-weight: 500;
          color: #ffffff;
        }

        .reg-actions {
          margin-top: 16px;
        }

        .step-text {
          color: #ffb347;
          font-size: 14px;
          margin-bottom: 12px;
        }
        
        .step-text strong {
          color: #ff6a00;
          text-transform: uppercase;
        }

        .btn-glow-cyan {
          padding: 16px 48px;
          border-radius: 50px;
          background: #00e5ff;
          color: #000000;
          font-weight: 700;
          font-size: 16px;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          box-shadow: 0 0 20px rgba(0, 229, 255, 0.2);
          width: 100%;
          max-width: 300px;
        }

        .btn-glow-cyan:hover {
          transform: scale(1.02);
          box-shadow: 0 0 30px rgba(0, 229, 255, 0.5);
          background: #33eeff;
        }

        .reg-payment {
          flex: 0 0 320px;
          background: rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 24px;
          padding: 32px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .qr-wrapper {
          background: #ffffff;
          padding: 12px;
          border-radius: 16px;
          margin-bottom: 24px;
          box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
        }

        .qr-image {
          width: 180px;
          height: 180px;
          object-fit: cover;
          border-radius: 8px;
        }

        .upi-details {
          background: rgba(255, 255, 255, 0.03);
          padding: 12px;
          border-radius: 12px;
          width: 100%;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .upi-label {
          display: block;
          font-size: 12px;
          color: #8a90ff;
          text-transform: uppercase;
          margin-bottom: 4px;
        }

        .upi-id {
          font-size: 15px;
          color: #00e5ff;
          font-weight: 600;
        }

        /* TIMELINE */
        .timeline-container {
          padding: 40px;
        }

        .timeline-track {
          position: relative;
          padding-left: 32px; 
        }

        .timeline-track::before {
          content: '';
          position: absolute;
          left: 4px; 
          top: 10px;
          bottom: 10px;
          width: 2px;
          background: linear-gradient(to bottom, #00e5ff, rgba(0, 229, 255, 0.1));
          border-radius: 2px;
        }

        .timeline-node {
          position: relative;
          margin-bottom: 40px;
        }

        .timeline-node:last-child {
          margin-bottom: 0;
        }

        .timeline-node::before {
          content: '';
          position: absolute;
          left: -32px; 
          top: 6px;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #00e5ff;
          box-shadow: 0 0 12px 2px rgba(0, 229, 255, 0.6);
          border: 2px solid #05070d;
          z-index: 2;
        }

        .node-content {
          background: rgba(0, 0, 0, 0.2);
          padding: 20px 24px;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.03);
        }

        .node-header {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .node-header h3, .node-content h3 {
          font-size: 20px;
          font-weight: 600;
          color: #ffffff;
          margin: 0;
        }

        .badge-live {
          background: rgba(16, 185, 129, 0.15);
          color: #10b981;
          border: 1px solid rgba(16, 185, 129, 0.3);
          font-size: 11px;
          font-weight: 800;
          padding: 4px 10px;
          border-radius: 20px;
          letter-spacing: 1px;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.4); }
          70% { box-shadow: 0 0 0 6px rgba(16, 185, 129, 0); }
          100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
        }

        .node-desc {
          color: #8a90ff;
          margin-top: 8px;
          font-size: 15px;
        }

        .node-date {
          color: #ffb347; 
          margin-top: 6px;
          font-weight: 500;
          font-size: 14px;
        }

        /* VERTICAL RULES */
        .rules-vertical {
          display: flex;
          flex-direction: column;
          gap: 16px;
          max-width: 700px;
          margin: 0 auto;
        }

        .rule-row {
          display: flex;
          align-items: center;
          gap: 20px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.04);
          padding: 16px 24px;
          border-radius: 16px;
          transition: all 0.3s ease;
        }

        .rule-row:hover {
          background: rgba(255, 255, 255, 0.04);
          transform: translateX(8px);
          border-color: rgba(255, 106, 0, 0.3); 
          box-shadow: -4px 0 0 0 #ff6a00;
        }

        .rule-icon-box {
          font-size: 22px;
          background: rgba(255, 255, 255, 0.05);
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          flex-shrink: 0;
        }

        .rule-text {
          color: #cfd3ff;
          font-size: 16px;
        }

        .rule-text strong {
          color: #ffffff;
          margin-right: 6px;
        }

        /* FOOTER */
        .ignite-footer {
          margin-top: 60px;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding: 40px 20px;
          background: rgba(0, 0, 0, 0.2);
        }

        .footer-content {
          max-width: 1000px;
          margin: 0 auto;
          text-align: center;
          color: #8a90ff;
          font-size: 15px;
          font-weight: 500;
        }

        .footer-copyright {
          margin-top: 8px;
          font-size: 13px;
          color: #4f5594;
        }

        /* RESPONSIVE DESIGN */
        @media (max-width: 768px) {
          .ignite-title {
            font-size: 64px;
          }
          .registration-dashboard {
            flex-direction: column;
            gap: 32px;
            padding: 24px;
          }
          .reg-payment {
            flex: 1;
            width: 100%;
          }
          .detail-item {
            flex-direction: column;
            align-items: flex-start;
            gap: 4px;
          }
          .rule-row {
            flex-direction: column;
            text-align: center;
            gap: 12px;
          }
          .rule-row:hover {
            transform: translateY(-4px);
            box-shadow: 0 4px 0 0 #ff6a00;
            border-left: 1px solid rgba(255, 255, 255, 0.04); 
            border-bottom-color: rgba(255, 106, 0, 0.3);
          }
        }
      `}</style>
    </main>
  );
}