import React from 'react'
import './NavBar.css'

function NavBar(props: { toggleTheme: () => void}){
  const { toggleTheme } = props;
  return (
    <div>
        <nav>
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <button onClick={toggleTheme}>Toggle</button>
        </nav>
    </div>
  )
}

export default NavBar