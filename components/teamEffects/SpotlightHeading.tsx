"use client";

import { useState } from "react";

export default function SpotlightHeading({ children }: { children: React.ReactNode }) {
    const [pos, setPos] = useState({ x: 50, y: 50 });

    return (
        <h1
            onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                setPos({
                    x: ((e.clientX - rect.left) / rect.width) * 100,
                    y: ((e.clientY - rect.top) / rect.height) * 100,
                });
            }}
            style={{
                fontSize: "42px",
                fontWeight: "bold",
                background: `radial-gradient(circle at ${pos.x}% ${pos.y}%, #ffb000, #444)`,
                WebkitBackgroundClip: "text",
                color: "transparent",
            }}
        >
            {children}
        </h1>
    );
}