import React from 'react'
import './Header.css'
import ScriptSvgDark from '../../assets/script-dark.svg'
import ScriptSvgLight from '../../assets/script-light.svg'

function Header(props: { theme: string }) {
  const { theme } = props;
  return (
    <div>
        <h1>Nader Antar</h1>
        <img src={theme == 'dark' ? ScriptSvgDark : ScriptSvgLight} alt="Script" />
    </div>
  )
}

export default Header