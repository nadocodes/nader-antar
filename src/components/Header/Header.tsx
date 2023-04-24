import React, { useState } from 'react'
import './Header.css'
import ScriptSvgDark from '../../assets/script-dark.svg'
import ScriptSvgLight from '../../assets/script-light.svg'
import Games from '../../containers/GamesConsole/GamesConsole'

function Header(props: { theme: string }) {
  const { theme } = props;
  return (
    <div className="Header">
      <div className="myInfo">
        <h2>Nader Antar</h2>
        <h1>Web Engineer</h1>
        <img className="ScriptSvg" src={theme == 'dark' ? ScriptSvgDark : ScriptSvgLight} alt="Script" />
      </div>
        <Games />
    </div>
  )
}

export default Header