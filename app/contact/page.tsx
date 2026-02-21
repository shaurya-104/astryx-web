export default function Page() {
    return (
        <main
            style={{
                padding: "120px 20px",
                maxWidth: "900px",
                margin: "0 auto",
                color: "white",
            }}
        >
            <h1 style={{ fontSize: "48px" }}>Contact</h1>

            <p style={{ marginTop: "20px", color: "gray" }}>
                Reach out to ASTRYX through the platforms below.
            </p>

            <ul
                style={{
                    marginTop: "40px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                    fontSize: "18px",
                }}
            >
                <li>
                    <a href="https://x.com/" target="_blank">X (Twitter)</a>
                </li>
                <li>
                    <a href="https://www.instagram.com/astryx.innn?igsh=NDRnYTd6aTlwM3Vk" target="_blank">Instagram</a>
                </li>
                <li>
                    <a href="https://linkedin.com/" target="_blank">LinkedIn</a>
                </li>
                <li>
                    <a href="mailto:astryx@outlook.in">astryx@outlook.in</a>
                </li>
            </ul>
        </main>
    );
}