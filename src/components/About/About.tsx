import React from 'react'
import * as icons from 'react-icons/fa'
import * as icons2 from 'react-icons/si'
import './About.css'

function About() {
    const skills = ['html5', 'css3', 'JavaScript', 'python', 'react', 'redux', 'typeScript', 'jquery', 'node.js', 'MongoDB', 'GitHub', 'git', 'netlify', 'figma', 'Adobe Creative Suite'];
    
    const skillIcons: any = {
        'html5': icons.FaHtml5,
        'css3': icons.FaCss3Alt,
        'JavaScript': icons.FaJsSquare,
        'python': icons.FaPython,
        'jquery': icons2.SiJquery,
        'react': icons.FaReact,
        'redux': icons2.SiRedux,
        'typeScript': icons2.SiTypescript,
        'node.js': icons.FaNodeJs,
        'MongoDB': icons.FaDatabase,
        'git': icons.FaGitAlt,
        'GitHub': icons.FaGithub,
        'netlify': icons2.SiNetlify,
        'figma': icons.FaFigma,
        'Adobe Creative Suite': icons2.SiAdobe
    }

  return (
    <div className='About' id='about'>
        <div className='aboutContainer'>
            <h2>Hi, I'm Nader!</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ea nulla explicabo reprehenderit labore similique velit officia, autem sunt repudiandae in laboriosam voluptates, minima dolorum architecto. Odit molestiae atque nisi.</p>
            <div className='skillsContainer'>
                <h3>Skills</h3>
                <div className='skills'>
                {skills.map((skill, idx) => { 
                    const Icon = skillIcons[skill];
                return ( 
                        <div key={`skill: ${idx}`} className='skill'>
                            <Icon size={50} />
                        </div>
                    )})}
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
