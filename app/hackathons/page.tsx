"use client";

import { useEffect, useState } from "react";

export default function HackathonsPage() {
    const [showIntro, setShowIntro] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowIntro(true);
        }, 600);
        return () => clearTimeout(timer);
    }, []);

    return (
        <main className="ignite-root">
            {/* ================= HERO SECTION ================= */}
            <section className="ignite-hero">
                <div className={`ignite-intro ${showIntro ? "show" : ""}`}>
                    <p className="ignite-collab">ASTRYX × JHANKAR</p>
                    <h1 className="ignite-title">IGNITE</h1>
                    <p className="ignite-subtitle">
                        ASTRYX × JHANKAR PRESENTS
                    </p>
                    <p className="ignite-tagline">
                        Ignite the code within you.
                    </p>
                </div>

                <div className="ignite-scroll">Scroll ↓</div>
            </section>

            {/* ================= DESCRIPTION ================= */}
            <section className="ignite-section">
                <h2>About Ignite Hackathon</h2>
                <p>
                    <strong>Ignite</strong> is a flagship hackathon organized by{" "}
                    <strong>ASTRYX</strong> in collaboration with{" "}
                    <strong>JHANKAR</strong>, as a part of the prestigious{" "}
                    <strong>Jhankar Fest</strong> at Panjab University.
                </p>

                <p>
                    This hackathon is designed to bring together passionate developers,
                    designers, and problem-solvers to collaborate, innovate, and build
                    impactful solutions within an intense and creative environment.
                </p>

                <p>
                    From brainstorming ideas to deploying working prototypes, Ignite is
                    where curiosity meets execution — and ideas turn into reality.
                </p>
            </section>

            {/* ================= ORGANISING COMMITTEE ================= */}
            <section className="ignite-section highlight">
                <h2>Organising Committee Applications</h2>
                <p>
                    Want to be part of the team that builds one of the most exciting
                    tech events at Panjab University?
                </p>

                <p>
                    Applications for the <strong>Ignite Hackathon Organising Committee</strong>{" "}
                    are now open. Join us to gain hands-on experience in event management,
                    tech operations, marketing, design, and leadership.
                </p>

                <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSerw-kcUANxp1hQOwcLdj0cJLqcmRNBvqY0oKqXLbrUcWVQkg/viewform?usp=header"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ignite-btn"
                >
                    Apply Now
                </a>
            </section>

            {/* ================= FOOTER LINE ================= */}
            <section className="ignite-footer">
                <p>ASTRYX × JHANKAR · Ignite Hackathon · Panjab University</p>
            </section>

            {/* ================= STYLES ================= */}
            <style jsx>{`
        .ignite-root {
          background: radial-gradient(
            circle at top,
            #0b0f1a,
            #05070d 70%
          );
          color: #ffffff;
          overflow-x: hidden;
        }

        /* HERO */
        .ignite-hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          position: relative;
          text-align: center;
        }

        .ignite-intro {
          opacity: 0;
          transform: translateY(30px);
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
          margin-bottom: 14px;
        }

        .ignite-title {
          font-size: clamp(72px, 14vw, 160px);
          font-weight: 800;
          background: linear-gradient(90deg, #ff6a00, #ffb347);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin: 0;
        }

        .ignite-subtitle {
          margin-top: 10px;
          letter-spacing: 4px;
          font-size: 14px;
          color: #cfd3ff;
        }

        .ignite-tagline {
          margin-top: 18px;
          font-size: 18px;
          color: #bfc4ff;
        }

        .ignite-scroll {
          position: absolute;
          bottom: 30px;
          font-size: 12px;
          letter-spacing: 2px;
          opacity: 0.6;
        }

        /* SECTIONS */
        .ignite-section {
          max-width: 900px;
          margin: 0 auto;
          padding: 120px 24px;
        }

        .ignite-section h2 {
          font-size: 36px;
          margin-bottom: 24px;
        }

        .ignite-section p {
          font-size: 18px;
          line-height: 1.7;
          color: #d1d5ff;
          margin-bottom: 18px;
        }

        .ignite-section.highlight {
          background: linear-gradient(
            180deg,
            rgba(255, 106, 0, 0.08),
            transparent
          );
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          text-align: center;
        }

        /* BUTTON */
        .ignite-btn {
          display: inline-block;
          margin-top: 30px;
          padding: 14px 38px;
          font-size: 16px;
          font-weight: 600;
          border-radius: 40px;
          background: linear-gradient(90deg, #ff6a00, #ffb347);
          color: #000;
          text-decoration: none;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .ignite-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 20px 40px rgba(255, 106, 0, 0.35);
        }

        /* FOOTER */
        .ignite-footer {
          padding: 40px 20px;
          text-align: center;
          font-size: 14px;
          color: #8a90ff;
          opacity: 0.7;
        }
      `}</style>
        </main>
    );
}