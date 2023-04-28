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
            <h2>Hello, World!</h2>
            <p>I am a <em>front-end engineer</em> with a passion for coding. When I'm not busy transforming designs into seamless user experiences or untangling complex code, you'll find me sipping my favorite cup of coffee, dreaming up my next tech adventure. Driven by curiosity, I'm constantly learning and evolving to ensure my digital creations are as amazing as they are functional. Let's ignite the magic of code together and find happiness coding! <br/>🚀💻🌟</p>
            <div className='skillsContainer'>
                <h3>Skills</h3>
                <div className='skills'>
                {skills.map((skill) => { 
                    const Icon = skillIcons[skill];
                return ( 
                        <div key={`skill: ${skill}`} className='skill'>
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
