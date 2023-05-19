import React, { useState } from 'react';
import './Header.css';
import ScriptSvgDark from '../../assets/script-dark.svg';
import ScriptSvgLight from '../../assets/script-light.svg';
import Games from '../../containers/GamesConsole/GamesConsole';

function Header(props: { theme: string } & { handleScroll: (e: any) => void }) {
  // theme prop passed from App.tsx
  const { theme, handleScroll } = props;
  return (
    <div className="Header primaryDefault" id='home'>
      <div className="mainContainer">
      <div className="myInfo">
        <h1>Hi, I'm Nader</h1>
        {/* todo: loop through variations of Frontend, Front-end, Front End */}
        <h2>Frontend Engineer</h2>
        <br/>
        <b className='myInfoMission'>
        I love creating beautifully interactive web apps.
        </b>
        <br/>
        <br/>
        <br/>
        <a href='#contact' className='getInTouch' onClick={handleScroll}>Get in touch</a>
      </div>
        <Games />
        {/* <img className="ScriptSvg" src={theme == 'dark' ? ScriptSvgDark : ScriptSvgLight} alt="Script" /> */}
      </div>
    </div>
  )
}

export default Header