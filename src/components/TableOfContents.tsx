interface TableOfContentsProps {
  content: string;
}

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

export function TableOfContents({ content }: TableOfContentsProps) {
  const extractHeadings = (content: string): TOCItem[] => {
    const lines = content.split('\n');
    const headings: TOCItem[] = [];
    
    lines.forEach((line) => {
      if (line.startsWith('## ')) {
        const text = line.slice(3).trim();
        const id = text.toLowerCase().replace(/[^\w\s]/g, '').replace(/\s+/g, '-');
        headings.push({ id, text, level: 2 });
      } else if (line.startsWith('### ')) {
        const text = line.slice(4).trim();
        const id = text.toLowerCase().replace(/[^\w\s]/g, '').replace(/\s+/g, '-');
        headings.push({ id, text, level: 3 });
      }
    });
    
    return headings;
  };

  const headings = extractHeadings(content);

  if (headings.length === 0) {
    return null;
  }

  return (
    <div 
      className="toc-desktop"
      style={{
        position: 'sticky',
        top: '20px',
        paddingLeft: '24px',
        width: '200px',
        fontSize: '12px',
        color: '#828282',
      }}
    >
      <div style={{
        fontWeight: '600',
        marginBottom: '12px',
        color: '#000',
      }}>
        Contents
      </div>
      <ul style={{
        listStyle: 'none',
        padding: 0,
        margin: 0,
        lineHeight: '1.6',
      }}>
        {headings.map((heading) => (
          <li
            key={heading.id}
            style={{
              marginBottom: '4px',
              paddingLeft: heading.level === 3 ? '12px' : '0',
            }}
          >
            <a
              href={`#${heading.id}`}
              style={{
                color: '#828282',
                textDecoration: 'none',
                fontSize: heading.level === 3 ? '11px' : '12px',
              }}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}