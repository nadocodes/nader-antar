import React, { useState, useEffect } from 'react'
import NavBar from '../NavBar/NavBar'
import Header from '../Header/Header'
import './App.css'


function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = (): void => {
    if (theme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={`App ${theme}`}>
      <NavBar theme={theme} toggleTheme={toggleTheme} />
      <Header theme={theme} />
    </div>
  )
}

export default App
