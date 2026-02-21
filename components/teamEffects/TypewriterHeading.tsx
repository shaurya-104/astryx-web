"use client";

import { useEffect, useState } from "react";

export default function TypewriterHeading({ text }: { text: string }) {
    const [display, setDisplay] = useState("");

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setDisplay(text.slice(0, i));
            i++;
            if (i > text.length) clearInterval(interval);
        }, 100);

        return () => clearInterval(interval);
    }, [text]);

    return (
        <h1 style={{ fontSize: "42px", fontWeight: "bold", color: "#ffffff" }}>
            {display}
        </h1>
    );
}