import React from 'react';
import './NavBar.css';
import LightButton from '../../assets/dark-mode.svg';
import DarkButton from '../../assets/light-mode.svg';

function NavBar(props: { toggleTheme: () => void } & { theme: string } & { handleScroll: (e: any) => void }){
  const { toggleTheme, theme, handleScroll } = props;

  

  return (
    <div>
        <nav>
            <ul>
                <li><a className="navLinks" href="#about" onClick={handleScroll}>About</a></li> |
                <li><a className="navLinks" href="#projects" onClick={handleScroll}>Projects</a></li> |
                <li><a className="navLinks" href="#contact" onClick={handleScroll}>Contact</a></li>
            </ul>
            <button className='themeButton' onClick={toggleTheme} aria-label='Toggle Theme Button'><img alt='Theme Toggle Icon' src={theme === 'dark' ? LightButton : DarkButton} className='themeIcon'/></button>
        </nav>
    </div>
  )
}

export default NavBar