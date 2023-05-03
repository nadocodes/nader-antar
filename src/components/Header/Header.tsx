import React, { useState } from 'react';
import './Header.css';
import ScriptSvgDark from '../../assets/script-dark.svg';
import ScriptSvgLight from '../../assets/script-light.svg';
import Games from '../../containers/GamesConsole/GamesConsole';

function Header(props: { theme: string }) {
  const { theme } = props;
  return (
    <div className="Header primaryDefault" id='home'>
      <div className="mainContainer">
      <div className="myInfo">
        <h1>Nader Antar</h1>
        <h2>Web Engineer</h2>
      </div>
        <Games />
        {/* <img className="ScriptSvg" src={theme == 'dark' ? ScriptSvgDark : ScriptSvgLight} alt="Script" /> */}
      </div>
    </div>
  )
}

export default Header