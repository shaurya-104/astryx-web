"use client";

import { useEffect, useRef, useState } from "react";

export default function HackathonsPage() {
  const [showIntro, setShowIntro] = useState(false);
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const introTimer = setTimeout(() => setShowIntro(true), 600);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.15 }
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
        <div className={`ignite-intro ${showIntro ? "show" : ""}`}>
          <p className="ignite-collab">ASTRYX × JHANKAR</p>
          <p className="ignite-subtitle">PRESENTS</p>
          <h1 className="ignite-title">IGNITE</h1>
          <p className="ignite-tagline">Ignite the code within you.</p>
        </div>
      </section>

      {/* ================= RULES ================= */}
      <section
        className="ignite-section ignite-rules fade"
        ref={(el) => el && (sectionsRef.current[0] = el)}
      >
        <h2>Ignite Rules</h2>
        <ul className="rules-list">
          <li>Team size: 2–5 members</li>
          <li>24-hour on-ground hackathon</li>
          <li>No pre-built projects allowed</li>
          <li>Internet usage permitted</li>
          <li>₹200 registration fee per person</li>
          <li>Judges’ decision will be final</li>
        </ul>
      </section>

      {/* ================= REGISTRATION ================= */}
      <section
        className="ignite-section ignite-register fade"
        ref={(el) => el && (sectionsRef.current[1] = el)}
      >
        <h2>Register for Ignite</h2>

        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSeiiOMFIYDfAQvXJshzEELyW3QOdHmPGXNgIcsCRvgRaQ9R8Q/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="ignite-btn"
        >
          Open Registration Form
        </a>
      </section>

      {/* ================= PAYMENT ================= */}
      <section
        className="ignite-section ignite-payment fade"
        ref={(el) => el && (sectionsRef.current[2] = el)}
      >
        <h2>Registration Fee Payment</h2>
        <p className="payment-sub">
          Scan the QR below to pay via any UPI app
        </p>

        <div className="qr-box">
          <img
            src="/payment/gpay-ignite.png.jpeg"
            alt="UPI Payment QR - Samagra Saharia"
          />
          <p className="upi-id">UPI ID: samagrasaharia@okicici</p>
        </div>

        <p className="payment-note">
          Upload the payment screenshot inside the Google Form after payment.
        </p>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="ignite-footer">
        ASTRYX × JHANKAR · Ignite Hackathon · Panjab University
      </footer>

      {/* ================= STYLES ================= */}
      <style jsx>{`
        .ignite-root {
          background: radial-gradient(circle at top, #0b0f1a, #05070d 70%);
          color: #fff;
          overflow-x: hidden;
          padding-top: 72px; /* ✅ navbar-safe spacing */
        }

        /* HERO */
        .ignite-hero {
          min-height: 85vh;
          padding-bottom: 80px; /* ✅ separation from rules */
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        .ignite-intro {
          opacity: 0;
          transform: translateY(40px);
          transition: all 1.6s ease;
        }

        .ignite-intro.show {
          opacity: 1;
          transform: translateY(0);
        }

        .ignite-collab {
          letter-spacing: 6px;
          font-size: 14px;
          color: #9aa3ff;
        }

        .ignite-subtitle {
          letter-spacing: 4px;
          font-size: 14px;
          color: #cfd3ff;
        }

        .ignite-title {
          font-size: clamp(72px, 14vw, 160px);
          font-weight: 800;
          background: linear-gradient(90deg, #ff6a00, #ffb347);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .ignite-tagline {
          font-size: 18px;
          color: #bfc4ff;
        }

        /* SECTIONS */
        .ignite-section {
          max-width: 900px;
          margin: 0 auto;
          padding: 56px 24px;
          text-align: center;
        }

        .ignite-rules {
          padding-top: 80px; /* ✅ FIX */
        }

        .ignite-register {
          padding-top: 32px;
          padding-bottom: 40px;
        }

        .ignite-payment {
          padding-top: 40px;
        }

        .fade {
          opacity: 0;
          transform: translateY(40px);
          transition: all 1.1s ease;
        }

        .fade.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .rules-list {
          list-style: none;
          padding: 0;
          font-size: 18px;
          color: #d1d5ff;
        }

        .rules-list li {
          margin-bottom: 8px;
        }

        .ignite-btn {
          margin-top: 24px;
          padding: 14px 42px;
          border-radius: 40px;
          background: linear-gradient(90deg, #ff6a00, #ffb347);
          color: #000;
          font-weight: 600;
          text-decoration: none;
          display: inline-block;
        }

        .qr-box {
          margin-top: 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .qr-box img {
          width: 240px;
          padding: 12px;
          background: #fff;
          border-radius: 18px;
        }

        .upi-id {
          margin-top: 10px;
          font-size: 15px;
          color: #cfd3ff;
        }

        .payment-sub {
          margin-top: 8px;
          font-size: 16px;
          color: #cfd3ff;
        }

        .payment-note {
          margin-top: 12px;
          font-size: 14px;
          color: #9aa3ff;
        }

        .ignite-footer {
          padding: 40px 20px;
          text-align: center;
          font-size: 14px;
          color: #8a90ff;
        }
      `}</style>
    </main>
  );
}