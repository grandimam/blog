import { BlogPost } from '@/data/posts';

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

export function BlogCard({ post, index }: BlogCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric'
    });
  };

  return (
    <div style={{ 
      margin: '16px 0',
      display: 'flex',
      alignItems: 'baseline',
      gap: '8px'
    }}>
      <span style={{ 
        color: '#828282', 
        fontSize: '14px',
        minWidth: '20px',
        textAlign: 'right',
        lineHeight: '1.4',
        userSelect: 'none'
      }}>
        {index + 1}.
      </span>
      
      <div style={{ flex: 1 }}>
        <a 
          href={`/posts/${post.slug}`}
          style={{ 
            color: '#000', 
            textDecoration: 'none',
            fontSize: '14px',
            fontWeight: '500',
            lineHeight: '1.4',
            display: 'block',
            padding: '8px 0',
            cursor: 'pointer',
            userSelect: 'none',
            WebkitUserSelect: 'none',
            WebkitTapHighlightColor: 'transparent'
          }}
        >
          {post.title}
        </a>
        
        <div style={{ 
          fontSize: '12px', 
          color: '#828282',
          marginTop: '-8px',
          lineHeight: '1.3',
          userSelect: 'none'
        }}>
          {formatDate(post.date)} | {post.readingTime} min read
        </div>
      </div>
    </div>
  );
}