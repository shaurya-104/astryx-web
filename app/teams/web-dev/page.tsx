"use client";

import Link from "next/link";
import TypewriterHeading from "../../../components/teamEffects/TypewriterHeading";

export default function WebDevPage() {
  return (
    <section style={{ padding: "120px 20px", maxWidth: "1000px", margin: "0 auto" }}>
      <TypewriterHeading text="🌐 Web Development" />

      <p style={{ marginTop: "30px", color: "gray" }}>
        Frontend, backend, and full-stack web development.
      </p>

      <Link href="/teams/web-dev/members" style={buttonStyle}>
        View Members
      </Link>
    </section>
  );
}

const buttonStyle = {
  marginTop: "40px",
  display: "inline-block",
  padding: "14px 28px",
  border: "1px solid rgba(255,255,255,0.2)",
  borderRadius: "30px",
  textDecoration: "none",
  color: "white",
};