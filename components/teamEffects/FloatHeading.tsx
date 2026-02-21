"use client";

import { motion } from "framer-motion";

export default function FloatHeading({ children }: { children: React.ReactNode }) {
    return (
        <motion.h1
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            style={{
                fontSize: "42px",
                fontWeight: "bold",
                color: "#ff9ffc",
            }}
        >
            {children}
        </motion.h1>
    );
}