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
        }}
      >
        <ClickSpark>
          <header
            style={{
              padding: "20px",
              borderBottom: "1px solid rgba(255,255,255,0.1)",
              backdropFilter: "blur(10px)",
            }}
          >
            <nav
              style={{
                maxWidth: "1100px",
                margin: "0 auto",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Link href="/" style={{ textDecoration: "none", color: "white" }}>
                ASTRYX
              </Link>

              <div style={{ display: "flex", gap: "20px" }}>
                <Link href="/learn" style={{ color: "gray" }}>
                  Learn
                </Link>
                <Link href="/teams" style={{ color: "gray" }}>
                  Teams
                </Link>
                <Link href="/events" style={{ color: "gray" }}>
                  Events
                </Link>
              </div>
            </nav>
          </header>

          <main style={{ flex: 1 }}>{children}</main>

          <Footer />
        </ClickSpark>
      </body>
    </html>
  );
}