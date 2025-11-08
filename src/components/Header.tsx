interface HeaderProps {
  breadcrumb?: string;
}

export function Header({ breadcrumb }: HeaderProps) {
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
        ~ / <a href="/" style={{ color: '#828282', textDecoration: 'none' }}>grandimam</a>{breadcrumb ? ` / ${breadcrumb}` : ''}
      </div>
    </div>
  );
}