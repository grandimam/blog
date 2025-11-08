import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TableOfContents } from "@/components/TableOfContents";
import { blogPosts } from "@/data/posts";
import { notFound } from "next/navigation";

interface PostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

const postContent = {
  "building-real-time-data-pipelines": `Modern applications require real-time data processing to deliver instant insights and responsive user experiences. Building scalable data pipelines that can handle millions of records with low latency is both an art and a science.

## The Challenge

Traditional batch processing systems fall short when dealing with:
- High-velocity data streams
- Real-time analytics requirements  
- Low-latency decision making
- Dynamic scaling needs

## Key Components

### 1. Stream Processing Framework
Choose between Apache Kafka, Apache Pulsar, or cloud-native solutions like AWS Kinesis. Each has trade-offs in terms of throughput, latency, and operational complexity.

### 2. Data Transformation
Implement lightweight transformations using:
- Apache Flink for complex event processing
- Kafka Streams for simple transformations
- Custom microservices for specialized logic

### 3. Storage Layer
Design your storage architecture with:
- Time-series databases for metrics
- Document stores for semi-structured data
- Data lakes for long-term analytics

## Implementation Strategy

Start small with a single data source and gradually expand. Monitor every component and plan for failure scenarios from day one.

The key is finding the right balance between complexity and capability for your specific use case.
  `,
  "llm-integration-patterns": `Integrating Large Language Models into production applications requires careful consideration of performance, cost, and reliability constraints.

## Architecture Patterns

### 1. API Gateway Pattern
Route requests through a centralized gateway that handles:
- Rate limiting and quotas
- Model selection and fallbacks
- Response caching
- Cost tracking

### 2. Embedding Pipeline
For semantic search and similarity matching:
- Batch processing for existing content
- Real-time embedding for new content
- Vector database optimization
- Similarity threshold tuning

## Best Practices

Always implement fallback mechanisms and monitor token usage closely. Cost optimization is crucial for sustainable LLM integration.
  `,
};

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const currentPostIndex = blogPosts.findIndex((p) => p.slug === slug);
  const post = blogPosts[currentPostIndex];

  if (!post) {
    notFound();
  }

  const content =
    postContent[post.slug as keyof typeof postContent] ||
    "Content coming soon...";


  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif',
      }}
    >
      <div
        className="mobile-container"
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          padding: "12px 16px",
        }}
      >
        <Header breadcrumb={post.slug} />

        <main>
          {/* Post header */}
          <article>
          <header style={{ marginBottom: "24px" }}>
            <h1
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                margin: "0 0 8px 0",
                lineHeight: "1.3",
                color: "#000",
              }}
            >
              {post.title}
            </h1>

            <div
              style={{
                fontSize: "12px",
                color: "#828282",
                lineHeight: "1.3",
              }}
            >
              {formatDate(post.date)} | {post.readingTime} min read
            </div>
          </header>

          {/* Post content */}
          <div
            style={{
              fontSize: "20px",
              lineHeight: "1.8",
              color: "#000",
            }}
            dangerouslySetInnerHTML={{
              __html: content
                .split("\n")
                .map((line) => {
                  if (line.startsWith("## ")) {
                    const text = line.slice(3).trim();
                    const id = text.toLowerCase().replace(/[^\w\s]/g, '').replace(/\s+/g, '-');
                    return `<h2 id="${id}" style="font-size: 16px; font-weight: bold; margin: 16px 0 6px 0; line-height: 1.3;">${text}</h2>`;
                  }
                  if (line.startsWith("### ")) {
                    const text = line.slice(4).trim();
                    const id = text.toLowerCase().replace(/[^\w\s]/g, '').replace(/\s+/g, '-');
                    return `<h3 id="${id}" style="font-size: 14px; font-weight: bold; margin: 12px 0 4px 0; line-height: 1.3;">${text}</h3>`;
                  }
                  if (line.startsWith("- ")) {
                    return `<div style="margin: 2px 0; padding-left: 16px;">• ${line.slice(
                      2
                    )}</div>`;
                  }
                  if (line.trim() === "") {
                    return '<div style="height: 8px;"></div>';
                  }
                  return `<p style="margin: 8px 0; line-height: 1.5;">${line}</p>`;
                })
                .join(""),
            }}
          />
        </article>
        </main>

        <Footer />
      </div>
    </div>
  );
}
