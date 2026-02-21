import "./globals.css";
import Link from "next/link";
import ClickSpark from "../components/ClickSpark";
import Footer from "../components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* ✅ iOS viewport + safe-area support */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
      </head>

      <body
        style={{
          margin: 0,
          background: "black",
          color: "white",
          minHeight: "100dvh", // ✅ fixes iOS 100vh bug
          display: "flex",
          flexDirection: "column",
          overflowX: "hidden", // ✅ hard stop for iOS overflow
        }}
      >
        <ClickSpark>
          {/* ---------------- NAVBAR ---------------- */}
          <header
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              zIndex: 100,
              padding: "16px",
              paddingTop: "calc(16px + env(safe-area-inset-top))", // ✅ notch fix
              borderBottom: "1px solid rgba(255,255,255,0.1)",
              backdropFilter: "blur(12px)",
              background: "rgba(0,0,0,0.7)",
            }}
          >
            <nav
              style={{
                maxWidth: "1100px",
                margin: "0 auto",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Link
                href="/"
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontWeight: 600,
                  letterSpacing: "2px",
                }}
              >
                ASTRYX
              </Link>

              <div style={{ display: "flex", gap: "20px" }}>
                <Link href="/learn" style={navLink}>
                  Learn
                </Link>
                <Link href="/teams" style={navLink}>
                  Teams
                </Link>
                <Link href="/projects" style={navLink}>
                  Projects
                </Link>
                <Link href="/hackathons" style={navLink}>
                  Hackathons
                </Link>
              </div>
            </nav>
          </header>

          {/* ---------------- PAGE CONTENT ---------------- */}
          <main
            style={{
              flex: 1,
              paddingTop: "calc(96px + env(safe-area-inset-top))", // ✅ iOS offset
            }}
          >
            {children}
          </main>

          <Footer />
        </ClickSpark>
      </body>
    </html>
  );
}

const navLink = {
  color: "gray",
  textDecoration: "none",
  fontSize: "15px",
};