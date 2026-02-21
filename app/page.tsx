"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/* ---------------- BURGER MENU ---------------- */

const BurgerMenu = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={menuRef} className="relative">
      {/* Burger Button */}
      <button
        onClick={() => setOpen(!open)}
        className="relative w-8 h-6"
        aria-label="Toggle menu"
      >
        <motion.span
          animate={{
            rotate: open ? 45 : 0,
            y: open ? 8 : 0,
          }}
          className="absolute top-0 left-0 w-full h-[2px] bg-white"
        />
        <motion.span
          animate={{
            opacity: open ? 0 : 1,
          }}
          className="absolute top-1/2 left-0 w-full h-[2px] bg-white -translate-y-1/2"
        />
        <motion.span
          animate={{
            rotate: open ? -45 : 0,
            y: open ? -8 : 0,
          }}
          className="absolute bottom-0 left-0 w-full h-[2px] bg-white"
        />
      </button>

      {/* Dropdown Menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="absolute right-0 mt-4 w-48 rounded-xl border border-white/20 bg-black p-4 flex flex-col gap-3 z-50"
        >
          <Link href="/learn" onClick={() => setOpen(false)}>Learn</Link>
          <Link href="/teams" onClick={() => setOpen(false)}>Teams</Link>
          <Link href="/projects" onClick={() => setOpen(false)}>Projects</Link>
          <Link href="/hackathons" onClick={() => setOpen(false)}>Hackathons</Link>
        </motion.div>
      )}
    </div>
  );
};

/* ---------------- DISTORTED ASTRYX ---------------- */

const DistortedAstryx = () => {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="
        relative font-bold uppercase select-none leading-none
        text-[3rem] sm:text-[4.5rem] md:text-[6rem] lg:text-[8rem]
        tracking-[0.15em] sm:tracking-[0.25em] md:tracking-[0.35em]
        whitespace-nowrap
      "
    >
      <span className="relative z-10">ASTRYX</span>

      {/* subtle ongoing distortion */}
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
  return (
    <main className="min-h-screen bg-black text-white">

      {/* ================= TOP NAV ================= */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black px-6 py-4 flex justify-between items-center">
        <Link href="/" className="font-semibold text-white">
          ASTRYX
        </Link>
        <BurgerMenu />
      </nav>

      {/* ================= HERO ================= */}
      <section className="relative flex min-h-screen flex-col items-center justify-center px-4 pt-24 text-center overflow-hidden">
        <DistortedAstryx />

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
          Join our community, collaborate with like-minded builders,
          and take part in events, teams, and challenges.
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