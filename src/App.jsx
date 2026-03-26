import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <div className="bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text transition-colors duration-300 min-h-screen">
        <Router>
          <div className="app flex flex-col min-h-screen">
            <Header />
            <main className="main-content flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
