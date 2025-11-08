import { Header } from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';
import { Footer } from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About | Grandimam - Data Intelligence & AI Engineer",
  description: "Learn about Grandimam's expertise in building data-intelligence platforms, AI integration, and scalable systems. Focus on data acquisition, enrichment, and intelligence delivery.",
  openGraph: {
    title: "About Grandimam - Data Intelligence Expert",
    description: "Expert in building data-intelligence platforms, AI integration, and scalable systems.",
    url: "https://grandimam.dev/about",
  },
  twitter: {
    title: "About Grandimam - Data Intelligence Expert",
    description: "Expert in building data-intelligence platforms, AI integration, and scalable systems.",
  }
};

export default function AboutPage() {
  return (
    <div 
      className="mobile-container"
      style={{ 
        maxWidth: '600px', 
        margin: '0 auto', 
        padding: '12px 16px',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif'
      }}
    >
      <Header breadcrumb="about" />
      
      <div style={{ display: 'flex', gap: '24px' }}>
        <Sidebar currentPage="about" />
        
        <main className="mobile-main" style={{ flex: 1 }}>
          <div style={{ fontSize: '14px', lineHeight: '1.5', color: '#000' }}>
            
            <p style={{ margin: '0 0 16px 0' }}>
              I build intelligence platforms — products that fetch messy data, enrich it with AI/LLMs, and expose insights via scalable APIs and apps.
            </p>
            
            <section style={{ margin: '24px 0' }}>
              <h2 style={{ 
                fontSize: '16px', 
                fontWeight: '500', 
                margin: '0 0 12px 0',
                color: '#000'
              }}>
                Focus Areas
              </h2>
              
              <div style={{ margin: '8px 0' }}>
                <strong>Data acquisition</strong> — crawlers, connectors, pipelines
              </div>
              <div style={{ margin: '8px 0' }}>
                <strong>Data enrichment</strong> — classification, recommendations, LLM + embeddings
              </div>
              <div style={{ margin: '8px 0' }}>
                <strong>Intelligence delivery</strong> — low-latency backends, search, dashboards, APIs
              </div>
            </section>

            <section style={{ margin: '24px 0' }}>
              <h2 style={{ 
                fontSize: '16px', 
                fontWeight: '500', 
                margin: '0 0 12px 0',
                color: '#000'
              }}>
                What I Enjoy
              </h2>
              
              <div style={{ margin: '8px 0' }}>
                Turning unstructured data into <strong>actionable intelligence</strong>
              </div>
              <div style={{ margin: '8px 0' }}>
                Building <strong>intelligent websites & platforms</strong> (ads, e-commerce, property, cloud security)
              </div>
              <div style={{ margin: '8px 0' }}>
                Exploring how <strong>LLMs</strong> power the next generation of intelligent systems
              </div>
            </section>

            <section style={{ margin: '24px 0' }}>
              <h2 style={{ 
                fontSize: '16px', 
                fontWeight: '500', 
                margin: '0 0 12px 0',
                color: '#000'
              }}>
                Current Work
              </h2>
              
              <p style={{ margin: '8px 0' }}>
                Working on data-intelligence platforms that help businesses make sense of their unstructured data through AI-powered enrichment and real-time insights.
              </p>
            </section>

            <section style={{ margin: '24px 0' }}>
              <h2 style={{ 
                fontSize: '16px', 
                fontWeight: '500', 
                margin: '0 0 12px 0',
                color: '#000'
              }}>
                Tech Stack
              </h2>
              
              <div style={{ margin: '8px 0' }}>
                <strong>Languages:</strong> Python, JavaScript/TypeScript, Go
              </div>
              <div style={{ margin: '8px 0' }}>
                <strong>Data:</strong> PostgreSQL, Redis, Elasticsearch, Vector DBs
              </div>
              <div style={{ margin: '8px 0' }}>
                <strong>AI/ML:</strong> OpenAI, Anthropic, Hugging Face, LangChain
              </div>
              <div style={{ margin: '8px 0' }}>
                <strong>Infrastructure:</strong> AWS, Docker, Kubernetes, Terraform
              </div>
            </section>
            
          </div>
        </main>
      </div>
      
      <Footer />
    </div>
  );
}