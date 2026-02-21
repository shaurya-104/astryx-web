import Link from "next/link";

export default function EventsSection() {
    return (
        <section
            style={{
                padding: "100px 20px",
                borderTop: "1px solid rgba(255,255,255,0.1)",
                marginTop: "80px",
            }}
        >
            <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
                <h2 style={{ fontSize: "36px", marginBottom: "20px" }}>
                    Upcoming Events
                </h2>

                <p style={{ color: "gray", marginBottom: "30px" }}>
                    Join ASTRYX workshops, competitions and tech meetups.
                </p>

                <Link
                    href="/events"
                    style={{
                        padding: "12px 24px",
                        border: "1px solid white",
                        textDecoration: "none",
                        color: "white",
                    }}
                >
                    Join Us →
                </Link>
            </div>
        </section>
    );
}