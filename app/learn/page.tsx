"use client";

import Folder from "../../components/Folder.tsx";

export default function LearnPage() {
  return (
    <section
      style={{
        padding: "120px 20px",
        minHeight: "120vh", // forces scroll
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Folder
        size={2}
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