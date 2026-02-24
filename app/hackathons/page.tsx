"use client";

import { useEffect, useRef, useState } from "react";

export default function HackathonsPage() {
  const [showIntro, setShowIntro] = useState(false);
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const introTimer = setTimeout(() => {
      setShowIntro(true);
    }, 600);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

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

      {/* ================= ABOUT ================= */}
      <section
        className="ignite-about fade"
        ref={(el) => {
          if (el) sectionsRef.current[0] = el;
        }}
      >
        <div className="about-container">
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
        </div>
      </section>

      {/* ================= ORGANISING COMMITTEE ================= */}
      <section
        className="ignite-section fade"
        ref={(el) => {
          if (el) sectionsRef.current[1] = el;
        }}
      >
        <h2>Organising Committee Applications</h2>

        <p>
          Want to be part of the team that builds one of the most exciting tech
          events at Panjab University?
        </p>

        <p>
          Applications for the <strong>Ignite Hackathon Organising Committee</strong>{" "}
          are now open. Join us to gain hands-on experience in event management,
          tech operations, outreach, and creative execution.
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

      {/* ================= FOOTER ================= */}
      <footer className="ignite-footer">
        ASTRYX × JHANKAR · Ignite Hackathon · Panjab University
      </footer>

      {/* ================= STYLES ================= */}
      <style jsx>{`
        .ignite-root {
          background: radial-gradient(circle at top, #0b0f1a, #05070d 70%);
          color: #ffffff;
          overflow-x: hidden;
        }

        .ignite-hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        .ignite-intro {
          opacity: 0;
          transform: translateY(40px);
          transition: all 1.8s ease;
        }

        .ignite-intro.show {
          opacity: 1;
          transform: translateY(0);
        }

        .ignite-collab {
          font-size: 14px;
          letter-spacing: 6px;
          color: #9aa3ff;
          margin-bottom: 18px;
        }

        .ignite-subtitle {
          letter-spacing: 4px;
          font-size: 14px;
          color: #cfd3ff;
          margin-bottom: 18px;
        }

        .ignite-title {
          font-size: clamp(72px, 14vw, 160px);
          font-weight: 800;
          background: linear-gradient(90deg, #ff6a00, #ffb347);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin: 0;
        }

        .ignite-tagline {
          margin-top: 18px;
          font-size: 18px;
          color: #bfc4ff;
        }

        .ignite-about {
          padding: 140px 24px;
        }

        .about-container {
          max-width: 900px;
          margin-left: clamp(24px, 8vw, 120px);
        }

        .ignite-about h2 {
          font-size: 42px;
          margin-bottom: 28px;
        }

        .ignite-about p {
          font-size: 18px;
          line-height: 1.8;
          color: #d1d5ff;
          margin-bottom: 20px;
          max-width: 720px;
        }

        .ignite-section {
          max-width: 900px;
          margin: 0 auto;
          padding: 120px 24px;
          text-align: center;
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

        .fade {
          opacity: 0;
          transform: translateY(60px);
          transition: all 1.2s ease;
        }

        .fade.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .ignite-btn {
          display: inline-block;
          margin-top: 32px;
          padding: 14px 40px;
          font-size: 16px;
          font-weight: 600;
          border-radius: 40px;
          background: linear-gradient(90deg, #ff6a00, #ffb347);
          color: #000;
          text-decoration: none;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .ignite-btn:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(255, 106, 0, 0.35);
        }

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