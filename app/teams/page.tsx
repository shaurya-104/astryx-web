"use client";

import Link from "next/link";
import ClickSpark from "../../components/ClickSpark";

export default function TeamsPage() {
  return (
    <ClickSpark>
      <section
        style={{
          padding: "120px 20px",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <h1 style={{ fontSize: "48px", marginBottom: "40px" }}>
          Teams
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "30px",
          }}
        >
          <TeamCard title="🤖 AI / ML" href="/teams/ai-ml" />
          <TeamCard title="📊 Data Science & Analytics" href="/teams/data-science" />
          <TeamCard title="🌐 Web Dev" href="/teams/web-dev" />
          <TeamCard title="📱 App Dev" href="/teams/app-dev" />
          <TeamCard title="🧠 DSA & CP" href="/teams/dsa-cp" />
          <TeamCard title="🎮 Esports & Gaming" href="/teams/esports" />
          <TeamCard title="🎨 Design" href="/teams/design" />
          <TeamCard title="📈 Marketing" href="/teams/marketing" />
        </div>
      </section>
    </ClickSpark>
  );
}

function TeamCard({ title, href }: { title: string; href: string }) {
  return (
    <Link
      href={href}
      style={{
        padding: "30px",
        border: "1px solid rgba(255,255,255,0.1)",
        textDecoration: "none",
        color: "white",
        transition: "0.3s",
      }}
    >
      <h3>{title}</h3>
    </Link>
  );
}