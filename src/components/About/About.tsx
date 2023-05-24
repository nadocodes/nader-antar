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
    const skills = ['html5', 'css3', 'JavaScript', 'Python', 'React', 'Redux', 'TypeScript', 'jQuery', 'node.js', 'GitHub', 'git', 'Netlify', 'Figma', 'Adobe Creative Suite'];
    
    const skillIcons: any = {
        'html5': FaHtml5,
        'css3': FaCss3Alt,
        'JavaScript': FaJsSquare,
        'Python': FaPython,
        'jQuery': SiJquery,
        'React': FaReact,
        'Redux': SiRedux,
        'TypeScript': SiTypescript,
        'node.js': FaNodeJs,
        'git': FaGitAlt,
        'GitHub': FaGithub,
        'Netlify': SiNetlify,
        'Figma': FaFigma,
        'Adobe Creative Suite': SiAdobe
    }

    return (
        <div className='About secondaryDefault' id='about'>
            <div className='aboutContainer'>
                <h2>Hello, World!</h2>
                <b>I am a <em>front-end engineer</em> with a passion for coding and a knack for cracking algorithms. When I'm not busy untangling complex code, you'd find me exploring the earth, photographing moments or simply meditating. I'm constantly learning to evolve my digital creations. I'm in search of a team that appreciates growth and praises potential. <br/>🚀💻🌟</b>
                <div className='skillsContainer'>
                    <h3>Stack</h3>
                    <div className='skills'>
                    {skills.map((skill) => { 
                        const Icon = skillIcons[skill];
                    return ( 
                            <div key={`skill: ${skill}`} className='skill skillTip'>
                                <span className="skillTipText">{skill}</span>
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
