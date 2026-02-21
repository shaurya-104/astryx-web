"use client";

import { useEffect, useRef } from "react";

export default function SplashCursor() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

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

        const circles: {
            x: number;
            y: number;
            radius: number;
            alpha: number;
        }[] = [];

        function animate() {
            if (!ctx) return;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            circles.forEach((circle, index) => {
                circle.radius += 1.5;
                circle.alpha -= 0.02;

                if (circle.alpha <= 0) {
                    circles.splice(index, 1);
                } else {
                    ctx.beginPath();
                    ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(0, 255, 200, ${circle.alpha})`;
                    ctx.fill();
                }
            });

            requestAnimationFrame(animate);
        }

        function handleMove(e: MouseEvent) {
            circles.push({
                x: e.clientX,
                y: e.clientY,
                radius: 8,
                alpha: 0.4,
            });
        }

        window.addEventListener("mousemove", handleMove);

        animate();

        return () => {
            window.removeEventListener("mousemove", handleMove);
            window.removeEventListener("resize", resize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                pointerEvents: "none",
                zIndex: 9999, // VERY IMPORTANT
            }}
        />
    );
}