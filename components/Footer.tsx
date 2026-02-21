"use client";

import Link from "next/link";

export default function Footer() {
    return (
        <footer
            style={{
                borderTop: "1px solid rgba(255,255,255,0.1)",
                padding: "30px 20px",
                background: "black",
            }}
        >
            <div
                style={{
                    maxWidth: "1100px",
                    margin: "0 auto",
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                }}
            >
                {/* Top row */}
                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: "20px",
                    }}
                >
                    <p style={{ color: "gray", fontSize: "14px" }}>
                        © {new Date().getFullYear()} ASTRYX. All rights reserved.
                    </p>

                    <div
                        style={{
                            display: "flex",
                            gap: "20px",
                            flexWrap: "wrap",
                            fontSize: "14px",
                        }}
                    >
                        <FooterLink href="/about">About</FooterLink>
                        <FooterLink href="/participation">Participation</FooterLink>
                        <FooterLink href="/terms">Terms</FooterLink>
                        <FooterLink href="/privacy">Privacy Policy</FooterLink>
                        <FooterLink href="/contact">Contact</FooterLink>
                    </div>
                </div>

                {/* Bottom row */}
                <div
                    style={{
                        borderTop: "1px solid rgba(255,255,255,0.05)",
                        paddingTop: "15px",
                        textAlign: "center",
                    }}
                >
                    <p style={{ color: "gray", fontSize: "13px" }}>
                        Made by <span style={{ color: "white" }}>Shaurya</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}

function FooterLink({
    href,
    children,
}: {
    href: string;
    children: React.ReactNode;
}) {
    return (
        <Link
            href={href}
            style={{
                color: "gray",
                textDecoration: "none",
                transition: "0.3s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "gray")}
        >
            {children}
        </Link>
    );
}