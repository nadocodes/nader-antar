import React from 'react';
import './NavBar.css';
import LightButton from '../../assets/dark-mode.svg';
import DarkButton from '../../assets/light-mode.svg';

function NavBar(props: { toggleTheme: () => void } & { theme: string }){
  const { toggleTheme, theme } = props;

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

  return (
    <div>
        <nav>
            <ul>
                <li><a className="navLinks" href="#about" onClick={handleScroll}>About</a></li> |
                <li><a className="navLinks" href="#projects" onClick={handleScroll}>Projects</a></li> |
                <li><a className="navLinks" href="#contact" onClick={handleScroll}>Contact</a></li>
            </ul>
            <button className='themeButton' onClick={toggleTheme} aria-label='Toggle Theme Button'><img alt='Theme Toggle Icon' src={theme === 'dark' ? LightButton : DarkButton} /></button>
        </nav>
    </div>
  )
}

export default NavBar