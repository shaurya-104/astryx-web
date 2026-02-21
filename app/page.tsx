"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* ================= HERO ================= */}
      <section className="relative flex min-h-screen flex-col items-center justify-center px-4 text-center overflow-hidden">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="
            font-bold uppercase leading-none select-none
            text-[3rem] sm:text-[4.5rem] md:text-[6rem] lg:text-[8rem]
            tracking-[0.15em] sm:tracking-[0.25em] md:tracking-[0.35em]
            max-w-full whitespace-nowrap
          "
        >
          ASTRYX
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-sm sm:text-base text-white/70"
        >
          Learn · Build · Compete
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-10 flex flex-col gap-4 w-full max-w-xs"
        >
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
        </motion.div>
      </section>

      {/* ================= GET INVOLVED (RESTORED) ================= */}
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
            href="/events"
            className="
              px-8 py-3 rounded-full
              border border-white/40
              hover:bg-white hover:text-black
              transition-all
            "
          >
            Explore Events
          </Link>

          <Link
            href="/get-involved"
            className="
              px-8 py-3 rounded-full
              border border-white/20
              text-white/80
              hover:border-white/60 hover:text-white
              transition-all
            "
          >
            Learn How to Join
          </Link>
        </div>
      </motion.section>
    </main>
  );
}