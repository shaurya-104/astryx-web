export default function MembersPage() {
    return (
        <main
            style={{
                minHeight: "100vh",
                padding: "120px 20px",
                maxWidth: "1100px",
                margin: "0 auto",
                color: "white",
            }}
        >
            {/* PAGE TITLE */}
            <h1
                style={{
                    fontSize: "48px",
                    textAlign: "center",
                    marginBottom: "60px",
                }}
            >
                Team Members
            </h1>

            {/* TEAM LEAD SECTION */}
            <section style={{ marginBottom: "80px" }}>
                <h2 style={{ fontSize: "32px", marginBottom: "20px" }}>
                    Team Lead
                </h2>

                <div
                    style={{
                        padding: "40px",
                        border: "1px solid rgba(255,255,255,0.15)",
                        borderRadius: "16px",
                        background: "rgba(255,255,255,0.03)",
                        textAlign: "center",
                    }}
                >
                    <div
                        style={{
                            width: "100px",
                            height: "100px",
                            borderRadius: "50%",
                            background: "rgba(255,255,255,0.1)",
                            margin: "0 auto 20px",
                        }}
                    />

                    <h3 style={{ fontSize: "22px" }}>
                        Yet to be announced
                    </h3>

                    <p style={{ marginTop: "10px", color: "gray" }}>
                        Team Lead
                    </p>
                </div>
            </section>

            {/* MEMBERS SECTION */}
            <section>
                <h2 style={{ fontSize: "32px", marginBottom: "30px" }}>
                    Members
                </h2>

                <p style={{ color: "gray", marginBottom: "40px" }}>
                    Core members and contributors will be announced soon.
                </p>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                        gap: "30px",
                        opacity: 0.6,
                    }}
                >
                    <MemberCard />
                    <MemberCard />
                    <MemberCard />
                    <MemberCard />
                </div>
            </section>
        </main>
    );
}

function MemberCard() {
    return (
        <div
            style={{
                padding: "30px",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "14px",
                background: "rgba(255,255,255,0.02)",
                textAlign: "center",
            }}
        >
            <div
                style={{
                    width: "70px",
                    height: "70px",
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.1)",
                    margin: "0 auto 15px",
                }}
            />

            <p style={{ fontSize: "16px", color: "gray" }}>
                Yet to be announced
            </p>
        </div>
    );
}