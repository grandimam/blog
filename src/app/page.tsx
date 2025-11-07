import { Header } from '@/components/Header';
import { BlogCard } from '@/components/BlogCard';
import { Footer } from '@/components/Footer';
import { blogPosts } from '@/data/posts';

export default function HomePage() {
  return (
    <div 
      className="mobile-container"
      style={{ 
        maxWidth: '600px', 
        margin: '0 auto', 
        padding: '12px 16px',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif'
      }}>
      <Header />
      
      <main>
        {blogPosts.map((post, index) => (
          <BlogCard key={post.id} post={post} index={index} />
        ))}
      </main>
      
      <Footer />
    </div>
  );
}