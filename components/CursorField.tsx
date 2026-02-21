"use client";

import Antigravity from "./Antigravity";

export default function CursorField() {
    return (
        <div
            style={{
                position: "fixed",
                inset: 0,
                zIndex: 0,
                pointerEvents: "none",
            }}
        >
            <Antigravity
                count={250}
                magnetRadius={6}
                ringRadius={7}
                waveSpeed={0.4}
                waveAmplitude={1}
                particleSize={1.2}
                lerpSpeed={0.05}
                color="#5227FF"
                autoAnimate
                particleVariance={1}
                rotationSpeed={0}
                depthFactor={1}
                pulseSpeed={3}
                particleShape="capsule"
                fieldStrength={10}
            />
        </div>
    );
}