
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

  const handleScroll = (e: any) => {
    e.preventDefault();
    const target = e.target.getAttribute('href');
    const location = document.querySelector(target)?.getBoundingClientRect().top;
    const offset = window.pageYOffset;
    const gap = 50;
    const offsetPosition = location ? location + offset - gap : 0;
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }

  // set theme in local storage and set document body class to theme
  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.className = theme;
  }, [theme]);

  return (
    <div className='App'>
      <NavBar theme={theme} toggleTheme={toggleTheme} handleScroll={handleScroll}/>
      <Header theme={theme} handleScroll={handleScroll}/>
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
