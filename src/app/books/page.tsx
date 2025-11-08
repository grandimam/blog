import { Header } from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';
import { Footer } from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Books | Grandimam - Current Reading & Recommendations",
  description: "Books currently reading and recently finished by Grandimam. Focus on data engineering, AI, system design, and technical leadership.",
  openGraph: {
    title: "Books | Grandimam - Reading List & Recommendations",
    description: "Current reading list and book recommendations for data engineers and AI practitioners.",
    url: "https://grandimam.dev/books",
  },
  twitter: {
    title: "Books | Grandimam - Reading List & Recommendations", 
    description: "Current reading list and book recommendations for data engineers and AI practitioners.",
  }
};

interface Book {
  title: string;
  author: string;
  status: 'reading' | 'finished';
  progress?: number;
  finishedDate?: string;
}

const books: Book[] = [
  {
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    status: 'reading',
    progress: 60
  },
  {
    title: 'Designing Data-Intensive Applications',
    author: 'Martin Kleppmann',
    status: 'reading',
    progress: 35
  },
  {
    title: 'Building Microservices',
    author: 'Sam Newman',
    status: 'finished',
    finishedDate: 'Oct 2024'
  },
  {
    title: 'Clean Architecture',
    author: 'Robert Martin',
    status: 'finished',
    finishedDate: 'Sep 2024'
  },
  {
    title: 'System Design Interview',
    author: 'Alex Xu',
    status: 'finished',
    finishedDate: 'Aug 2024'
  }
];

export default function BooksPage() {
  const currentlyReading = books.filter(book => book.status === 'reading');
  const finished = books.filter(book => book.status === 'finished');

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
      <Header breadcrumb="books" />
      
      <div style={{ display: 'flex', gap: '24px' }}>
        <Sidebar currentPage="books" />
        
        <main className="mobile-main" style={{ flex: 1, paddingTop: "24px" }}>
          <div style={{ fontSize: '16px', lineHeight: '1.5', color: '#000' }}>
            
            {/* Currently Reading */}
            <section style={{ marginBottom: '32px' }}>
              <h2 style={{ 
                fontSize: '18px', 
                fontWeight: '500', 
                margin: '0 0 16px 0',
                color: '#000'
              }}>
                Currently Reading
              </h2>
              
              {currentlyReading.map((book, index) => (
                <div key={index} style={{ margin: '12px 0' }}>
                  <div style={{ fontWeight: '500' }}>
                    {book.title}
                  </div>
                  <div style={{ 
                    fontSize: '14px', 
                    color: '#828282',
                    marginTop: '2px'
                  }}>
                    {book.author} • {book.progress}% complete
                  </div>
                </div>
              ))}
            </section>

            {/* Recently Finished */}
            <section>
              <h2 style={{ 
                fontSize: '18px', 
                fontWeight: '500', 
                margin: '0 0 16px 0',
                color: '#000'
              }}>
                Recently Finished
              </h2>
              
              {finished.map((book, index) => (
                <div key={index} style={{ margin: '12px 0' }}>
                  <div style={{ fontWeight: '500' }}>
                    {book.title}
                  </div>
                  <div style={{ 
                    fontSize: '14px', 
                    color: '#828282',
                    marginTop: '2px'
                  }}>
                    {book.author} • {book.finishedDate}
                  </div>
                </div>
              ))}
            </section>
            
          </div>
        </main>
      </div>
      
      <Footer />
    </div>
  );
}