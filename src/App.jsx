import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/common1/Navbar'
import Error from './components/pages/Error'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Location from './components/pages/Location'
import Document from './components/pages/Document'
import Blog from './components/pages/Blog'
import Contact from './components/pages/Contact'
import Footer from './components/common1/Footer'
import { useEffect, useState } from 'react'

function App() {



  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');

    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
    const newTheme = !darkMode ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark');
  }





  return (
    <>
      <Router>
        <div
          className={`min-h-screen ${
            darkMode
              ? 'dark:bg-gray-900 dark:text-white'
              : 'bg-white text-black'
          }`}
        >
          <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/About" element={<About />}></Route>
            <Route path="/Blog" element={<Blog />}></Route>
            <Route path="/Contact" element={<Contact />}></Route>
            <Route path="/Document" element={<Document />}></Route>
            <Route path="/Location" element={<Location />}></Route>
            <Route path="*" element={<Error />}></Route>
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  )
}

export default App
