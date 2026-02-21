"use client";

import React, { useState } from "react";

interface FolderProps {
    color?: string;
    size?: number;
    items?: React.ReactNode[];
}

export default function Folder({
    color = "#5227FF",
    size = 1,
    items = [],
}: FolderProps) {
    const [open, setOpen] = useState(false);

    // Base dimensions
    const width = 220 * size;
    const height = 140 * size;

    return (
        <div
            style={{
                cursor: "pointer",
                userSelect: "none",
            }}
            onClick={() => setOpen(!open)}
        >
            {/* Folder Body */}
            <div
                style={{
                    width,
                    height,
                    background: color,
                    borderRadius: "10px",
                    position: "relative",
                    transition: "0.3s ease",
                }}
            >
                {/* Folder Tab */}
                <div
                    style={{
                        width: width * 0.45,
                        height: height * 0.25,
                        background: color,
                        position: "absolute",
                        top: -height * 0.18,
                        left: width * 0.06,
                        borderRadius: "8px 8px 0 0",
                    }}
                />

                {/* Papers */}
                {open && (
                    <div
                        style={{
                            position: "absolute",
                            top: "10px",
                            left: "10px",
                            right: "10px",
                            bottom: "10px",
                            background: "#111",
                            borderRadius: "6px",
                            padding: "10px",
                            display: "flex",
                            flexDirection: "column",
                            gap: "8px",
                            overflowY: "auto",
                        }}
                    >
                        {items.map((item, index) => (
                            <div
                                key={index}
                                style={{
                                    background: "#222",
                                    padding: "8px 12px",
                                    borderRadius: "6px",
                                    fontSize: "14px",
                                }}
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}