import React, { useState, useEffect } from 'react';
import NavBar from '../NavBar/NavBar';
import Header from '../Header/Header';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import './App.css';


function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  const toggleTheme = (): void => {
    if (theme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={`App ${theme}`}>
      <NavBar theme={theme} toggleTheme={toggleTheme} />
      <Header theme={theme} />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
