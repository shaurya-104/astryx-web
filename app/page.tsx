"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative flex min-h-screen flex-col items-center justify-center px-4 text-center overflow-hidden">

        {/* TITLE */}
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

        {/* SUBTITLE */}
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
          className="mt-10 flex flex-col gap-4 w-full max-w-xs"
        >
          {/* Start Learning */}
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

          {/* Join a Team */}
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

          {/* Get Involved (RESTORED) */}
          <Link
            href="/get-involved"
            className="
              px-8 py-3 rounded-full
              border border-white/20
              text-white/80
              hover:border-white/60
              hover:text-white
              transition-all
            "
          >
            Get Involved
          </Link>
        </motion.div>

      </section>
    </main>
  );
}