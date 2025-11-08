import { Header } from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';
import { Footer } from '@/components/Footer';

export default function ContactPage() {
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
      <Header breadcrumb="contact" />
      
      <div style={{ display: 'flex', gap: '24px' }}>
        <Sidebar currentPage="contact" />
        
        <main className="mobile-main" style={{ flex: 1 }}>
          <div style={{ fontSize: '14px', lineHeight: '1.5', color: '#000' }}>
            <p style={{ margin: '0 0 24px 0' }}>
              Get in touch
            </p>
            
            <div style={{ margin: '0' }}>
              <div style={{ margin: '12px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '14px' }}>✉</span>
                <a 
                  href="mailto:hello@grandimam.dev"
                  style={{ color: '#000', textDecoration: 'none' }}
                >
                  hello@grandimam.dev
                </a>
              </div>
              
              <div style={{ margin: '12px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '14px' }}>💼</span>
                <a 
                  href="https://linkedin.com/in/grandimam"
                  style={{ color: '#000', textDecoration: 'none' }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin.com/in/grandimam
                </a>
              </div>
              
              <div style={{ margin: '12px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '14px' }}>🐙</span>
                <a 
                  href="https://github.com/grandimam"
                  style={{ color: '#000', textDecoration: 'none' }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/grandimam
                </a>
              </div>
              
              <div style={{ margin: '12px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '14px' }}>🐦</span>
                <a 
                  href="https://twitter.com/grandimam"
                  style={{ color: '#000', textDecoration: 'none' }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @grandimam
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
      
      <Footer />
    </div>
  );
}