"use client";

import { motion } from "framer-motion";

export default function AnimatedHeading({
  children,
  color = "#ffffff",
}: {
  children: React.ReactNode;
  color?: string;
}) {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{
        fontSize: "42px",
        fontWeight: "bold",
        color,
        letterSpacing: "2px",
      }}
    >
      {children}
    </motion.h1>
  );
}