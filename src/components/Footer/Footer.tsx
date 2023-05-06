import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import './Footer.css'

function Footer() {
  return (
    <div className='Footer'>
        <div className='footerLinks'>
          <a href='https://github.com/nadocodes' target='_blank' rel='noopener noreferrer'>
            <FaGithub size={30} />
          </a>
          <a href='https://www.linkedin.com/in/nader-antar/' target='_blank' rel='noopener noreferrer'>
            <FaLinkedin size={30} />
          </a>
          <a href='mailto:naderantar96@gmail.com'>
            <FaEnvelope size={30} />
          </a>
        </div>
        <p>© Nader Antar 2023</p>
    </div>
  )
}

export default Footer