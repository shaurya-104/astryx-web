"use client";

import React, { useRef, useEffect } from "react";

export default function ClickSpark({
    children,
}: {
    children: React.ReactNode;
}) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const sparks = useRef<
        { x: number; y: number; angle: number; start: number }[]
    >([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        function resize() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }

        resize();
        window.addEventListener("resize", resize);

        function animate(time: number) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            sparks.current = sparks.current.filter((spark) => {
                const progress = (time - spark.start) / 400;
                if (progress >= 1) return false;

                const dist = progress * 30;
                const x = spark.x + Math.cos(spark.angle) * dist;
                const y = spark.y + Math.sin(spark.angle) * dist;

                ctx.beginPath();
                ctx.moveTo(x, y);
                ctx.lineTo(
                    x + Math.cos(spark.angle) * 10 * (1 - progress),
                    y + Math.sin(spark.angle) * 10 * (1 - progress)
                );
                ctx.strokeStyle = "#ffffff";
                ctx.lineWidth = 2;
                ctx.stroke();

                return true;
            });

            requestAnimationFrame(animate);
        }

        requestAnimationFrame(animate);

        function handleClick(e: MouseEvent) {
            const count = 8;
            const now = performance.now();
            for (let i = 0; i < count; i++) {
                sparks.current.push({
                    x: e.clientX,
                    y: e.clientY,
                    angle: (2 * Math.PI * i) / count,
                    start: now,
                });
            }
        }

        window.addEventListener("click", handleClick);

        return () => {
            window.removeEventListener("resize", resize);
            window.removeEventListener("click", handleClick);
        };
    }, []);

    return (
        <>
            <canvas
                ref={canvasRef}
                style={{
                    position: "fixed",
                    inset: 0,
                    pointerEvents: "none",
                    zIndex: 9999,
                }}
            />
            {children}
        </>
    );
}