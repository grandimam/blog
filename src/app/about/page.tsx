import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { Footer } from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Grandimam",
  description: "I identify what needs to be done and get it done",
  openGraph: {
    title: "About Grandimam",
    description:
      "I identify what needs to be done and get it done. Building meaningful solutions for the Muslim community with a focus on collective security and institutional responsibility.",
    url: "https://grandimam.net/about",
  },
  twitter: {
    title: "About Grandimam",
    description:
      "I identify what needs to be done and get it done. Building meaningful solutions for the Muslim community with a focus on collective security and institutional responsibility.",
  },
};

export default function AboutPage() {
  return (
    <div
      className="mobile-container"
      style={{
        maxWidth: "600px",
        margin: "0 auto",
        padding: "12px 16px",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif',
      }}
    >
      <Header breadcrumb="about" currentPage="about" />

      <div style={{ display: "flex", gap: "24px" }}>
        <Sidebar currentPage="about" />

        <main className="mobile-main" style={{ flex: 1, paddingTop: "24px" }}>
          <div style={{ fontSize: "16px", lineHeight: "1.5", color: "#000" }}>
            <p style={{ margin: "0 0 16px 0" }}>
              I identify what needs to be done and get it done.
            </p>

            <section style={{ margin: "32px 0", padding: "20px 0" }}>
              <h2
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  margin: "0 0 20px 0",
                  color: "#000",
                  letterSpacing: "-0.02em",
                }}
              >
                What Drives Me
              </h2>

              <div
                style={{
                  fontSize: "17px",
                  lineHeight: "1.75",
                  color: "#1a1a1a",
                }}
              >
                <p style={{ margin: "0 0 18px 0" }}>
                  At the core of my ideology is a belief in collective security
                  and the moral obligation that institutions exist to protect
                  its people.
                </p>

                <p style={{ margin: "0 0 18px 0" }}>
                  Not merely to govern, compete, or profit.
                </p>

                <p style={{ margin: "0" }}>
                  I reject libertarian emphasis on autonomy and market freedom,
                  and instead uphold the duty of institutions to safeguard and
                  uplift those within their care.
                </p>
              </div>
            </section>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
