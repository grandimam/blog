interface HeaderProps {
  breadcrumb?: string;
  currentPage?: 'posts' | 'books' | 'about';
}

export function Header({ breadcrumb, currentPage = 'posts' }: HeaderProps) {
  const navItems = [
    { id: 'posts', label: 'posts', href: '/' },
    { id: 'books', label: 'books', href: '/books' },
    { id: 'about', label: 'about', href: '/about' }
  ];

  return (
    <div style={{ margin: '12px 0 24px 0' }}>
      <div style={{ 
        fontSize: '13px', 
        fontWeight: 'normal', 
        margin: '0',
        color: '#828282',
        letterSpacing: '0.5px',
        fontFamily: 'monospace',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }}>
        ~ / <a 
          href="/" 
          style={{ 
            color: breadcrumb ? '#000' : '#828282', 
            textDecoration: 'none',
            fontWeight: breadcrumb ? '500' : 'normal'
          }}
        >
          grandimam
        </a>{breadcrumb ? ` / ${breadcrumb}` : ''}
      </div>
      
      {/* Mobile Navigation */}
      <div className="mobile-nav" style={{
        display: 'none',
        marginTop: '16px',
        paddingTop: '12px',
        borderTop: '1px solid #e5e5e5'
      }}>
        <nav style={{
          display: 'flex',
          gap: '16px',
        }}>
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              style={{
                color: currentPage === item.id ? '#000' : '#828282',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: currentPage === item.id ? '500' : 'normal',
                padding: '4px 0',
              }}
            >
              {currentPage === item.id ? `[${item.label}]` : item.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}