"use client";

/* eslint-disable react/no-unknown-property */
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef, useState, useEffect } from "react";
import * as THREE from "three";

function AntigravityInner({
    count = 180,
    baseColor = "#5227FF",
    activeColor = "#00FFFF",
    hoverPosition = null,
    waveTrigger = 0,
}) {
    const meshRef = useRef<THREE.InstancedMesh>(null);
    const materialRef = useRef<THREE.MeshBasicMaterial>(null);
    const { viewport } = useThree();
    const dummy = useMemo(() => new THREE.Object3D(), []);

    const particles = useMemo(() => {
        const temp = [];
        for (let i = 0; i < count; i++) {
            temp.push({
                x: (Math.random() - 0.5) * viewport.width * 2,
                y: (Math.random() - 0.5) * viewport.height * 2,
                z: (Math.random() - 0.5) * 20,
                cx: 0,
                cy: 0,
                cz: 0,
            });
        }
        return temp;
    }, [count, viewport.width, viewport.height]);

    useFrame((state) => {
        if (!meshRef.current) return;

        const time = state.clock.getElapsedTime();
        const waveRadius = waveTrigger > 0 ? (time * 10) % 25 : 0;

        particles.forEach((p, i) => {
            let tx = p.x;
            let ty = p.y;

            if (hoverPosition) {
                const dx = p.cx - hoverPosition.x;
                const dy = p.cy - hoverPosition.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (Math.abs(dist - waveRadius) < 1.5) {
                    tx += dx * 0.6;
                    ty += dy * 0.6;
                }
            }

            p.cx += (tx - p.cx) * 0.08;
            p.cy += (ty - p.cy) * 0.08;
            p.cz += (p.z - p.cz) * 0.08;

            dummy.position.set(p.cx, p.cy, p.cz);
            dummy.scale.set(1.4, 1.4, 1.4);
            dummy.updateMatrix();

            meshRef.current.setMatrixAt(i, dummy.matrix);
        });

        meshRef.current.instanceMatrix.needsUpdate = true;

        if (materialRef.current) {
            materialRef.current.color.set(
                hoverPosition ? activeColor : baseColor
            );
        }
    });

    return (
        <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
            <sphereGeometry args={[0.2, 16, 16]} />
            <meshBasicMaterial ref={materialRef} color={baseColor} />
        </instancedMesh>
    );
}

export default function Antigravity(props: any) {
    return (
        <Canvas
            camera={{ position: [0, 0, 50], fov: 35 }}
            style={{
                position: "fixed",
                inset: 0,
                zIndex: 0,
                pointerEvents: "none",
            }}
        >
            <AntigravityInner {...props} />
        </Canvas>
    );
}