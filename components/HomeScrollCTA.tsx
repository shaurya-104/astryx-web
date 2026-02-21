"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function HomeScrollCTA() {
    const ref = useRef<HTMLDivElement | null>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setVisible(true);
            },
            { threshold: 0.3 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={ref}
            style={{
                marginTop: "160px",
                padding: "100px 20px",
                textAlign: "center",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(40px)",
                transition: "all 0.8s ease",
            }}
        >
            <h2 style={{ fontSize: "36px", marginBottom: "20px" }}>
                Get Involved
            </h2>

            <p style={{ color: "gray", marginBottom: "40px" }}>
                Explore what’s happening right now at ASTRYX
            </p>

            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "20px",
                    flexWrap: "wrap",
                }}
            >
                <Link href="/projects" style={outlineButton}>
                    Ongoing Projects
                </Link>

                <Link href="/hackathons" style={filledButton}>
                    Hackathons
                </Link>
            </div>
        </section>
    );
}

const outlineButton = {
    padding: "14px 30px",
    border: "1px solid rgba(255,255,255,0.4)",
    borderRadius: "30px",
    textDecoration: "none",
    color: "white",
    transition: "0.3s",
};

const filledButton = {
    padding: "14px 30px",
    background: "white",
    color: "black",
    borderRadius: "30px",
    textDecoration: "none",
    transition: "0.3s",
};