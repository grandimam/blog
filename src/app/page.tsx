import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { BlogCard } from "@/components/BlogCard";
import { Footer } from "@/components/Footer";
import { blogPosts } from "@/data/posts";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Grandimam - Posts & Thoughts",
  description:
    "Thoughts on building meaningful solutions, collective security, and technology that serves community needs. JavaScript, Express, and purposeful development.",
  openGraph: {
    title: "Grandimam - Posts & Thoughts",
    description:
      "Thoughts on building meaningful solutions, collective security, and technology that serves community needs.",
    url: "https://grandimam.net",
  },
  twitter: {
    title: "Grandimam - Posts & Thoughts",
    description:
      "Thoughts on building meaningful solutions, collective security, and technology that serves community needs.",
  },
};

interface HomePageProps {
  searchParams: Promise<{ page?: string }>;
}

export default async function HomePage({ searchParams }: HomePageProps) {
  const params = await searchParams;
  const currentPage = Number(params.page) || 1;
  const postsPerPage = 3;
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = blogPosts.slice(startIndex, startIndex + postsPerPage);
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
      <Header currentPage="posts" />
      <div style={{ display: "flex", gap: "24px" }}>
        <Sidebar currentPage="posts" />
        <main className="mobile-main" style={{ flex: 1 }}>
          {currentPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={startIndex + index} />
          ))}

          {totalPages > 1 && (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "24px",
              }}
            >
              {currentPage > 1 ? (
                <Link
                  href={`/?page=${currentPage - 1}`}
                  style={{
                    color: "#828282",
                    textDecoration: "none",
                    fontSize: "12px",
                  }}
                >
                  ← Back
                </Link>
              ) : (
                <div></div>
              )}

              {currentPage < totalPages && (
                <Link
                  href={`/?page=${currentPage + 1}`}
                  style={{
                    color: "#828282",
                    textDecoration: "none",
                    fontSize: "12px",
                  }}
                >
                  Next →
                </Link>
              )}
            </div>
          )}
        </main>
      </div>
      <Footer />
    </div>
  );
}
