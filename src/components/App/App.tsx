
import React, { useState, useEffect } from 'react';
import NavBar from '../NavBar/NavBar';
import Header from '../Header/Header';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import './App.css';


function App() {
  // set theme to local storage or default to light theme
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  // toggle theme between light and dark
  const toggleTheme = (): void => {
    if (theme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }

  // set theme in local storage and set document body class to theme
  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.className = theme;
  }, [theme]);

  return (
    <div className='App'>
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
