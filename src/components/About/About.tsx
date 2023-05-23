import React from 'react';
import { FaHtml5,
    FaCss3Alt,
    FaJsSquare,
    FaPython,
    FaReact,
    FaNodeJs,
    FaGitAlt,
    FaGithub,
    FaFigma } from 'react-icons/fa';
import { SiJquery,
    SiRedux,
    SiTypescript,
    SiNetlify,
    SiAdobe } from 'react-icons/si';
import './About.css';

function About() {
    const skills = ['html5', 'css3', 'JavaScript', 'python', 'react', 'redux', 'typeScript', 'jquery', 'node.js', 'GitHub', 'git', 'netlify', 'figma', 'Adobe Creative Suite'];
    
    const skillIcons: any = {
        'html5': FaHtml5,
        'css3': FaCss3Alt,
        'JavaScript': FaJsSquare,
        'python': FaPython,
        'jquery': SiJquery,
        'react': FaReact,
        'redux': SiRedux,
        'typeScript': SiTypescript,
        'node.js': FaNodeJs,
        'git': FaGitAlt,
        'GitHub': FaGithub,
        'netlify': SiNetlify,
        'figma': FaFigma,
        'Adobe Creative Suite': SiAdobe
    }

    return (
        <div className='About secondaryDefault' id='about'>
            <div className='aboutContainer'>
                <h2>Hello, World!</h2>
                <p>I am a <em>front-end engineer</em> with a passion for coding and a knack for cracking algorithms. When I'm not busy untangling complex code, you'll find me dreaming up my next tech adventure. Driven by curiosity, I'm constantly learning and evolving to ensure my digital creations are as amazing as they are functional. Let's ignite the magic of code together and find happiness coding! <br/>🚀💻🌟</p>
                <div className='skillsContainer'>
                    <h3>Stack</h3>
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
