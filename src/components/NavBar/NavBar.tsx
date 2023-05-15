import React from 'react'
import './NavBar.css'
import LightButton from '../../assets/dark-mode.svg';
import DarkButton from '../../assets/light-mode.svg';

function NavBar(props: { toggleTheme: () => void } & { theme: string }){
  const { toggleTheme, theme } = props;
  return (
    <div>
        <nav>
            <ul>
                <li><a href="#about">About</a></li> |
                <li><a href="#projects">Projects</a></li> |
                <li><a href="#contact">Contact</a></li>
            </ul>
            <button className='ThemeButton' onClick={toggleTheme} aria-label='Toggle Theme Button'><img alt='Theme Toggle Icon' src={theme === 'dark' ? LightButton : DarkButton} /></button>
        </nav>
    </div>
  )
}

export default NavBar