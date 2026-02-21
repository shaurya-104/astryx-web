"use client";

import Folder from "../../components/Folder";

export default function LearnPage() {
  return (
    <section
      style={{
        padding: "120px 20px",
        minHeight: "100svh", // ✅ iOS-safe viewport
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "black",
        overflow: "hidden",
      }}
    >
      <Folder
        size={1.6}                 // visual size (safe)
        color="#5227FF"
        items={[
          <div key="1">📄 DSA Roadmap.pdf</div>,
          <div key="2">📄 Backend Guide.pdf</div>,
          <div key="3">📄 Cloud Path.pdf</div>,
        ]}
      />
    </section>
  );
}