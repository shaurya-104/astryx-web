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
      <body
        style={{
          margin: 0,
          background: "black",
          color: "white",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          overflowX: "hidden", // ✅ fixes mobile horizontal cut
        }}
      >
        <ClickSpark>
          {/* ---------------- NAVBAR ---------------- */}
          <header
            style={{
              position: "fixed",
              top: 0,
              width: "100%",
              zIndex: 100,
              padding: "20px",
              borderBottom: "1px solid rgba(255,255,255,0.1)",
              backdropFilter: "blur(10px)",
              background: "rgba(0,0,0,0.6)",
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
              {/* LOGO */}
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

              {/* NAV LINKS */}
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  flexWrap: "wrap",
                }}
              >
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
              paddingTop: "100px", // ✅ offsets fixed navbar
            }}
          >
            {children}
          </main>

          {/* ---------------- FOOTER ---------------- */}
          <Footer />
        </ClickSpark>
      </body>
    </html>
  );
}

/* ---------------- NAV LINK STYLE ---------------- */

const navLink = {
  color: "gray",
  textDecoration: "none",
  fontSize: "15px",
  transition: "0.3s",
};