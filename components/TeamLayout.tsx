import Link from "next/link";

export default function TeamLayout({
    title,
    description,
    basePath,
}: {
    title: string;
    description: string;
    basePath: string;
}) {
    return (
        <section
            style={{
                padding: "120px 20px",
                maxWidth: "1000px",
                margin: "0 auto",
            }}
        >
            {/* Header */}
            <h1 style={{ fontSize: "48px" }}>{title}</h1>
            <p style={{ marginTop: "20px", color: "gray" }}>
                {description}
            </p>

            {/* Sections */}
            <div
                style={{
                    marginTop: "60px",
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                    gap: "30px",
                }}
            >
                <SectionCard
                    title="Members"
                    href={`${basePath}/members`}
                    description="Meet the team members"
                />

                <SectionCard
                    title="Projects"
                    href={`${basePath}/projects`}
                    description="Explore team projects"
                />
            </div>
        </section>
    );
}

function SectionCard({
    title,
    description,
    href,
}: {
    title: string;
    description: string;
    href: string;
}) {
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
            <h2 style={{ fontSize: "28px" }}>{title}</h2>
            <p style={{ marginTop: "10px", color: "gray" }}>
                {description}
            </p>
        </Link>
    );
}