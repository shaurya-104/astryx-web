"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* HERO */}
      <section className="flex min-h-screen flex-col items-center justify-center px-4 text-center">

        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="
            font-bold uppercase
            text-[3rem] sm:text-[4.5rem] md:text-[6rem] lg:text-[8rem]
            tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.4em]
            leading-none
            max-w-full
            break-words
          "
        >
          ASTRYX
        </motion.h1>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-sm sm:text-base text-white/70"
        >
          Learn · Build · Compete
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <Link
            href="/learn"
            className="
              px-8 py-3 rounded-full
              border border-white/40
              hover:bg-white hover:text-black
              transition-all
            "
          >
            Start Learning
          </Link>

          <Link
            href="/teams"
            className="
              px-8 py-3 rounded-full
              bg-white text-black
              hover:scale-105
              transition-all
            "
          >
            Join a Team
          </Link>
        </motion.div>
      </section>
    </main>
  );
}