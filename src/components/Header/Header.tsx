import React from 'react'
import './Header.css'
import ScriptSvgDark from '../../assets/script-dark.svg'
import ScriptSvgLight from '../../assets/script-light.svg'

function Header(props: { theme: string }) {
  const { theme } = props;
  return (
    <div className="Header">
        <h1>Nader Antar</h1>
        <h2>Web Engineer</h2>
        <img className="ScriptSvg" src={theme == 'dark' ? ScriptSvgDark : ScriptSvgLight} alt="Script" />
    </div>
  )
}

export default Header