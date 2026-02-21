"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
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
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          maxWidth: "90vw",
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

/* ---------------- SCROLL CTA (iOS SAFE) ---------------- */

const HomeScrollCTA = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }} // ✅ iOS-safe
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{
        padding: "120px 20px",
        textAlign: "center",
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

        <Link href="/hackathons" style={filledButton}>
          Hackathons
        </Link>
      </div>
    </motion.section>
  );
};

/* ---------------- MAIN PAGE ---------------- */

export default function HomePage() {
  return (
    <main
      style={{
        background: "black",
        color: "white",
      }}
    >
      {/* HERO */}
      <section
        style={{
          minHeight: "100svh", // ✅ iOS-safe viewport
          paddingTop: "120px",
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

      {/* CTA */}
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
};

const filledButton = {
  padding: "14px 32px",
  background: "white",
  color: "black",
  borderRadius: "30px",
  textDecoration: "none",
};