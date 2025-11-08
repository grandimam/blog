export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: number;
  tags: string[];
  slug: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Building Real-Time Data Pipelines",
    excerpt:
      "How to design scalable data pipelines that process millions of records with low latency using modern streaming technologies.",
    date: "2024-11-05",
    readingTime: 6,
    tags: ["Data", "Pipeline", "Streaming"],
    slug: "building-real-time-data-pipelines",
  },
  {
    id: "2",
    title: "LLM Integration Patterns",
    excerpt:
      "Best practices for adding AI capabilities to your applications without compromising performance or reliability.",
    date: "2024-10-28",
    readingTime: 8,
    tags: ["AI", "LLM", "Integration"],
    slug: "llm-integration-patterns",
  },
  {
    id: "3",
    title: "Intelligent Search with Embeddings",
    excerpt:
      "Transform your search experience with semantic matching and vector databases for more relevant results.",
    date: "2024-10-15",
    readingTime: 5,
    tags: ["ML", "Search", "Embeddings"],
    slug: "intelligent-search-with-embeddings",
  },
  {
    id: "4",
    title: "Scaling Data Enrichment",
    excerpt:
      "Strategies for enriching massive datasets with external APIs, ML models, and intelligent classification systems.",
    date: "2024-10-02",
    readingTime: 7,
    tags: ["Data", "API", "ML"],
    slug: "scaling-data-enrichment",
  },
  {
    id: "5",
    title: "Building Intelligence APIs",
    excerpt:
      "Design patterns for creating fast, reliable APIs that serve AI-powered insights to millions of users.",
    date: "2024-09-18",
    readingTime: 9,
    tags: ["API", "Backend", "AI"],
    slug: "building-intelligence-apis",
  },
];
