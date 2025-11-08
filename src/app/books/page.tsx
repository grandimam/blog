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
  category: string;
  impact?: string;
}

const books: Book[] = [
  // Technology & Craft
  {
    title: 'The Soul of a New Machine',
    author: 'Tracy Kidder',
    status: 'finished',
    finishedDate: 'Dec 2024',
    category: 'Technology',
    impact: 'Deeply impacted me'
  },
  {
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    status: 'reading',
    progress: 60,
    category: 'Technology'
  },
  {
    title: 'The Pragmatic Programmer',
    author: 'David Thomas & Andrew Hunt',
    status: 'finished',
    finishedDate: 'Nov 2024',
    category: 'Technology'
  },
  
  // Systems & Architecture
  {
    title: 'Designing Data-Intensive Applications',
    author: 'Martin Kleppmann',
    status: 'reading',
    progress: 35,
    category: 'Systems'
  },
  {
    title: 'Building Microservices',
    author: 'Sam Newman',
    status: 'finished',
    finishedDate: 'Oct 2024',
    category: 'Systems'
  },
  {
    title: 'Clean Architecture',
    author: 'Robert Martin',
    status: 'finished',
    finishedDate: 'Sep 2024',
    category: 'Systems'
  },
  
  // Purpose & Leadership
  {
    title: 'Start with Why',
    author: 'Simon Sinek',
    status: 'finished',
    finishedDate: 'Aug 2024',
    category: 'Purpose'
  },
  {
    title: 'The Righteous Mind',
    author: 'Jonathan Haidt',
    status: 'reading',
    progress: 25,
    category: 'Purpose'
  }
];

export default function BooksPage() {
  const categories = ['Technology', 'Systems', 'Purpose'];
  
  const renderBook = (book: Book, index: number) => (
    <div key={index} style={{ margin: '12px 0' }}>
      <div style={{ fontWeight: '500', display: 'flex', alignItems: 'center', gap: '8px' }}>
        {book.title}
        {book.impact && (
          <span style={{ 
            fontSize: '12px', 
            color: '#666',
            fontWeight: 'normal',
            fontStyle: 'italic'
          }}>
            — {book.impact}
          </span>
        )}
      </div>
      <div style={{ 
        fontSize: '14px', 
        color: '#828282',
        marginTop: '2px'
      }}>
        {book.author} • {book.status === 'reading' ? `${book.progress}% complete` : book.finishedDate}
      </div>
    </div>
  );

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
      <Header breadcrumb="books" currentPage="books" />
      
      <div style={{ display: 'flex', gap: '24px' }}>
        <Sidebar currentPage="books" />
        
        <main className="mobile-main" style={{ flex: 1, paddingTop: "24px" }}>
          <div style={{ fontSize: '16px', lineHeight: '1.5', color: '#000' }}>
            
            {categories.map((category, categoryIndex) => {
              const categoryBooks = books.filter(book => book.category === category);
              
              return (
                <section key={category} style={{ marginBottom: categoryIndex < categories.length - 1 ? '32px' : '0' }}>
                  <h2 style={{ 
                    fontSize: '18px', 
                    fontWeight: '500', 
                    margin: '0 0 16px 0',
                    color: '#000'
                  }}>
                    {category}
                  </h2>
                  
                  {categoryBooks.map((book, index) => renderBook(book, index))}
                </section>
              );
            })}
            
          </div>
        </main>
      </div>
      
      <Footer />
    </div>
  );
}