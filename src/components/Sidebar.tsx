interface SidebarProps {
  currentPage?: 'posts' | 'books' | 'about';
}

export function Sidebar({ currentPage = 'posts' }: SidebarProps) {
  const navItems = [
    { id: 'posts', label: 'posts', href: '/' },
    { id: 'books', label: 'books', href: '/books' },
    { id: 'about', label: 'about', href: '/about' }
  ];

  return (
    <nav 
      className="mobile-sidebar"
      style={{
        width: '60px',
        flexShrink: 0,
        paddingTop: '16px'
      }}>
      <div>
        {navItems.map((item) => (
          <div key={item.id} style={{ margin: '16px 0' }}>
            <a
              href={item.href}
              style={{
                color: currentPage === item.id ? '#000' : '#828282',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: currentPage === item.id ? '500' : 'normal',
                display: 'block',
                padding: '0',
                lineHeight: '1.5'
              }}
            >
              {currentPage === item.id ? `[${item.label}]` : item.label}
            </a>
          </div>
        ))}
      </div>
    </nav>
  );
}