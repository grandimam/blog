import Box from '@mui/material/Box';
import { About } from './components/About';
import { Header } from "./components/Header"
import ThemeProviderWrapper from './ThemeContext'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Post } from './components/Post';
import { Contact } from './components/Contact';


const AppContent = () => {
  return (
    <Box>
      <Header />
    </Box>
  )
}

function App() {
  return (
    <ThemeProviderWrapper>
      <Router>
        <AppContent />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/posts" element={<Post />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </ThemeProviderWrapper>
  )
}

export default App
