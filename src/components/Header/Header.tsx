import React, { useState, useEffect } from 'react';
import Typewriter from 'react-ts-typewriter';
import './Header.css';
import ScriptSvgDark from '../../assets/script-dark.svg';
import ScriptSvgLight from '../../assets/script-light.svg';
import Applications from '../../containers/PortableConsole/PortableConsole';

function Header(props: { theme: string } & { handleScroll: (e: any) => void }) {
  // theme prop passed from App.tsx
  const { theme, handleScroll } = props;

  const [showTypewriter, setShowTypewriter] = useState(false);

  useEffect(() => {
    // Set a timeout to switch to the Typewriter after a short delay
    const timer = setTimeout(() => setShowTypewriter(true), 1000); // Adjust delay as needed

    return () => clearTimeout(timer);
  }, []);


  return (
    <div className="Header primaryDefault" id='home'>
      <div className="mainContainer">
      <div className="myInfo">
        <h1>Hi, I'm Nader</h1>
        {/* todo: loop through variations of Frontend, Front-end, Front End */}
        <h2>
          <div style={{ height: "72px" }}>
            {showTypewriter ? (
            <Typewriter
              delay={1200}
              speed={100}
              text={["Web Developer", "Frontend Engineer"]}
              loop={true}
              cursor={false}
            /> )
            : "Frontend Engineer"}
          </div>
        </h2>
        <br/>
        <b className='myInfoMission'>
        I love creating beautifully interactive web apps.
        </b>
        <br/>
        <br/>
        <br/>
        <a href='#contact' className='getInTouch' onClick={handleScroll}>Get in touch</a>
      </div>
        <Applications />
        {/* <img className="ScriptSvg" src={theme == 'dark' ? ScriptSvgDark : ScriptSvgLight} alt="Script" /> */}
      </div>
    </div>
  )
}

export default Header