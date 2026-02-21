export default function AboutPage() {
    return (
        <section
            style={{
                padding: "120px 20px",
                maxWidth: "900px",
                margin: "0 auto",
            }}
        >
            <h1 style={{ fontSize: "48px" }}>About ASTRYX</h1>

            <p style={{ marginTop: "30px", color: "gray", lineHeight: "1.8" }}>
                ASTRYX is a student-driven platform focused on learning, building,
                competing, and growing together. Our mission is to create a space where
                developers, designers, and thinkers collaborate through real projects,
                structured learning paths, and competitive events.
            </p>

            <p style={{ marginTop: "20px", color: "gray", lineHeight: "1.8" }}>
                Whether you are exploring DSA, backend development, AI/ML, or creative
                fields, ASTRYX helps you move from learning to execution.
            </p>
        </section>
    );
}