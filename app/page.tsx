"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/* ================= BURGER MENU ================= */

const BurgerMenu = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  // close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="relative w-8 h-6"
        aria-label="Menu"
      >
        <motion.span
          animate={{ rotate: open ? 45 : 0, y: open ? 8 : 0 }}
          className="absolute top-0 left-0 w-full h-[2px] bg-white"
        />
        <motion.span
          animate={{ opacity: open ? 0 : 1 }}
          className="absolute top-1/2 left-0 w-full h-[2px] bg-white -translate-y-1/2"
        />
        <motion.span
          animate={{ rotate: open ? -45 : 0, y: open ? -8 : 0 }}
          className="absolute bottom-0 left-0 w-full h-[2px] bg-white"
        />
      </button>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute right-0 mt-4 w-48 rounded-xl border border-white/20 bg-black p-4 flex flex-col gap-3"
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

/* ================= ASTRYX SPLIT ANIMATION ================= */

const AstryxSplit = () => {
  const [merged, setMerged] = useState(false);

  return (
    <div className="relative flex items-center justify-center font-bold uppercase select-none leading-none tracking-[0.35em]
      text-[3rem] sm:text-[4.5rem] md:text-[6rem] lg:text-[8rem]"
    >
      {/* AST from left */}
      <motion.span
        initial={{ x: "-120vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        onAnimationComplete={() => setMerged(true)}
        className="relative z-10"
      >
        AST
      </motion.span>

      {/* RYX from right */}
      <motion.span
        initial={{ x: "120vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10"
      >
        RYX
      </motion.span>

      {/* Distortion ONLY AFTER merge */}
      {merged && (
        <motion.span
          aria-hidden
          className="absolute inset-0 text-white/40"
          animate={{ x: [0, -2, 2, 0], y: [0, 1, -1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
        >
          ASTRYX
        </motion.span>
      )}
    </div>
  );
};
/* ================= PAGE ================= */

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* TOP NAV (ONLY BURGER NOW) */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center bg-black">
        <Link href="/" className="font-semibold">
          ASTRYX
        </Link>
        <BurgerMenu />
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 pt-24 text-center overflow-hidden">
        <AstryxSplit />

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
    </main>
  );
}