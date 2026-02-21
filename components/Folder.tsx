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

    return (
        <div
            style={{
                transform: `scale(${size})`,
                cursor: "pointer",
                userSelect: "none",
            }}
            onClick={() => setOpen(!open)}
        >
            {/* Folder Body */}
            <div
                style={{
                    width: "220px",
                    height: "140px",
                    background: color,
                    borderRadius: "8px",
                    position: "relative",
                    transition: "0.4s",
                }}
            >
                {/* Folder Tab */}
                <div
                    style={{
                        width: "100px",
                        height: "30px",
                        background: color,
                        position: "absolute",
                        top: "-20px",
                        left: "10px",
                        borderRadius: "6px 6px 0 0",
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
                                    padding: "6px 10px",
                                    borderRadius: "4px",
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