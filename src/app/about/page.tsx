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
              When there's a goal to achieve, I’m skilled at finding the right
              resources, creating an effective plan, and making it happen.
            </p>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
