"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

interface DecryptedTextProps {
  text: string;
  speed?: number;
  maxIterations?: number;
  animateOn?: "view" | "hover" | "both";
  matrix?: boolean;
}

export default function DecryptedText({
  text,
  speed = 40,
  maxIterations = 15,
  animateOn = "view",
  matrix = true,
}: DecryptedTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isActive, setIsActive] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef<HTMLSpanElement>(null);

  const matrixChars =
    "アイウエオカキクケコサシスセソ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  useEffect(() => {
    if (!isActive) return;

    let iteration = 0;

    const interval = setInterval(() => {
      setDisplayText((prev) =>
        text
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            if (index < iteration) return text[index];
            return matrix
              ? matrixChars[Math.floor(Math.random() * matrixChars.length)]
              : text[index];
          })
          .join("")
      );

      iteration++;

      if (iteration > text.length + maxIterations) {
        clearInterval(interval);
        setDisplayText(text);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [isActive, text, speed, maxIterations, matrix]);

  useEffect(() => {
    if (animateOn !== "view") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setIsActive(true);
            setHasAnimated(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, [animateOn, hasAnimated]);

  return (
    <motion.span
      ref={containerRef}
      onMouseEnter={() => animateOn !== "view" && setIsActive(true)}
      style={{
        fontFamily: "monospace",
        fontSize: "48px",
        color: matrix ? "#00ff88" : "white",
        textShadow: matrix
          ? "0 0 5px #00ff88, 0 0 15px #00ff88"
          : "none",
        letterSpacing: "2px",
      }}
    >
      {displayText}
    </motion.span>
  );
}