"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

/* ---------------- HERO ANIMATION ---------------- */

const AnimatedAstryx = () => {
  const text = "ASTRYX";
  const letters = text.split("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      style={{
        maxWidth: "100%",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          maxWidth: "90vw", // ✅ CRITICAL for iOS
          overflow: "hidden",
          fontWeight: 700,
          letterSpacing: "0.22em",
          fontSize: "clamp(42px, 11vw, 96px)",
        }}
      >
        {letters.map((letter, index) => {
          const isLeft = index < 3;
          return (
            <motion.span
              key={index}
              initial={{ x: isLeft ? -40 : 40, opacity: 0 }}
              animate={{ x: mounted ? 0 : isLeft ? -40 : 40, opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: index * 0.05,
                ease: "easeOut",
              }}
            >
              {letter}
            </motion.span>
          );
        })}
      </div>
    </div>
  );
};

/* ---------------- SCROLL CTA ---------------- */

const HomeScrollCTA = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      style={{
        padding: "120px 20px",
        textAlign: "center",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: "all 0.8s ease",
      }}
    >
      <h2 style={{ fontSize: "36px", marginBottom: "20px" }}>
        Get Involved
      </h2>

      <p style={{ color: "gray", marginBottom: "40px" }}>
        Explore what’s happening right now at ASTRYX
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        <Link href="/projects" style={outlineButton}>
          Ongoing Projects
        </Link>

        <Link href="/learn" style={filledButton}>
          Learn & Join
        </Link>
      </div>
    </section>
  );
};

/* ---------------- MAIN PAGE ---------------- */

export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "black",
        color: "white",
        overflowX: "hidden",
      }}
    >
      {/* HERO SECTION */}
      <section
        style={{
          minHeight: "100vh",
          paddingTop: "120px", // ✅ prevents navbar overlap
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <AnimatedAstryx />

        <p
          style={{
            marginTop: "24px",
            color: "gray",
            fontSize: "clamp(14px, 4vw, 18px)",
          }}
        >
          Learn · Build · Compete
        </p>

        <div
          style={{
            marginTop: "40px",
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <Link href="/learn" style={outlineButton}>
            Start Learning
          </Link>

          <Link href="/teams" style={filledButton}>
            Join Us
          </Link>
        </div>
      </section>

      {/* SCROLL CTA */}
      <HomeScrollCTA />
    </main>
  );
}

/* ---------------- STYLES ---------------- */

const outlineButton = {
  padding: "14px 32px",
  border: "1px solid rgba(255,255,255,0.4)",
  borderRadius: "30px",
  textDecoration: "none",
  color: "white",
  transition: "0.3s",
};

const filledButton = {
  padding: "14px 32px",
  background: "white",
  color: "black",
  borderRadius: "30px",
  textDecoration: "none",
  transition: "0.3s",
};