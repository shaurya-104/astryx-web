"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

/* ---------------- DISTORTED ASTRYX ---------------- */

const DistortedAstryx = ({ onDone }: { onDone: () => void }) => {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      onAnimationComplete={onDone}
      className="
        relative font-bold uppercase select-none leading-none
        text-[3rem] sm:text-[4.5rem] md:text-[6rem] lg:text-[8rem]
        tracking-[0.15em] sm:tracking-[0.25em] md:tracking-[0.35em]
        whitespace-nowrap
      "
    >
      <span className="relative z-10">ASTRYX</span>

      {/* subtle distortion */}
      <motion.span
        aria-hidden
        className="absolute inset-0 text-white/50"
        animate={{ x: [0, -2, 2, 0], y: [0, 1, -1, 0] }}
        transition={{ duration: 0.7, repeat: Infinity, ease: "linear" }}
      >
        ASTRYX
      </motion.span>

      <motion.span
        aria-hidden
        className="absolute inset-0 text-white/30"
        animate={{ x: [0, 2, -2, 0], y: [0, -1, 1, 0] }}
        transition={{ duration: 0.9, repeat: Infinity, ease: "linear" }}
      >
        ASTRYX
      </motion.span>
    </motion.h1>
  );
};

/* ---------------- PAGE ---------------- */

export default function HomePage() {
  const [navVisible, setNavVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-black text-white">

      {/* ================= NAVBAR ================= */}
      {navVisible && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between bg-black"
        >
          <Link href="/" className="font-semibold">
            ASTRYX
          </Link>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white/70 hover:text-white"
          >
            Menu
          </button>

          {menuOpen && (
            <div className="absolute right-6 top-16 bg-black border border-white/20 rounded-xl p-4 flex flex-col gap-3">
              <Link href="/learn">Learn</Link>
              <Link href="/teams">Teams</Link>
              <Link href="/projects">Projects</Link>
              <Link href="/hackathons">Hackathons</Link>
            </div>
          )}
        </motion.nav>
      )}

      {/* ================= HERO ================= */}
      <section className="relative flex min-h-screen flex-col items-center justify-center px-4 text-center overflow-hidden">
        <DistortedAstryx onDone={() => setNavVisible(true)} />

        <p className="mt-6 text-sm sm:text-base text-white/70">
          Learn · Build · Compete
        </p>

        <div className="mt-10 flex flex-col gap-4 w-full max-w-xs">
          <Link
            href="/learn"
            className="px-8 py-3 rounded-full border border-white/40 hover:bg-white hover:text-black transition-all"
          >
            Start Learning
          </Link>

          <Link
            href="/teams"
            className="px-8 py-3 rounded-full bg-white text-black hover:scale-105 transition-all"
          >
            Join a Team
          </Link>
        </div>
      </section>

      {/* ================= GET INVOLVED ================= */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="px-6 py-32 text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
          Get Involved
        </h2>

        <p className="text-white/70 max-w-xl mx-auto mb-10">
          Join our community, collaborate with builders, and grow with ASTRYX.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/projects"
            className="px-8 py-3 rounded-full border border-white/40 hover:bg-white hover:text-black transition-all"
          >
            Projects
          </Link>

          <Link
            href="/join"
            className="px-8 py-3 rounded-full border border-white/20 text-white/80 hover:border-white/60 hover:text-white transition-all"
          >
            Learn How to Join
          </Link>

          <Link
            href="/hackathons"
            className="px-8 py-3 rounded-full border border-white/40 hover:bg-white hover:text-black transition-all"
          >
            Hackathons
          </Link>
        </div>
      </motion.section>
    </main>
  );
}