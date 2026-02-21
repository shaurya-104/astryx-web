"use client";

export default function NeonHeading({ children }: { children: React.ReactNode }) {
    return (
        <h1
            style={{
                fontSize: "42px",
                fontWeight: "bold",
                color: "#00BFFF",
                textShadow: "0 0 5px #00BFFF, 0 0 20px #00BFFF, 0 0 40px #00BFFF",
                animation: "neonPulse 2s infinite alternate",
            }}
        >
            {children}
            <style>
                {`
        @keyframes neonPulse {
          from { opacity: 0.7; }
          to { opacity: 1; }
        }
        `}
            </style>
        </h1>
    );
}