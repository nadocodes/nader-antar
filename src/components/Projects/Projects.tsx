import React from 'react';
import { GoRepo } from 'react-icons/go';
import { FaExternalLinkAlt } from 'react-icons/fa';
import PushPlayListen from '../../assets/pushplaylistenScreenshot.png';
import Portfolio2023 from '../../assets/portfolio2023Screenshot.jpg';
import './Projects.css';

function Projects() {
  
  // // Handle click on project card
  // const handleActiveProject = (e: any) => {
  //   // Get clicked project card
  //   const projectCard = e.currentTarget.closest('.projectCard');
  //   // If div is not a project card, return
  //   if (!projectCard) {
  //     return;
  //   }
  //   // Remove activeProjectCard class from current active project
  //   const activeProject = document.querySelector('.activeProjectCard');
  //   if (activeProject) {
  //     activeProject.classList.remove('activeProjectCard');
  //   }
  //   // Add activeProjectCard class to clicked project card
  //   projectCard.classList.add('activeProjectCard');
  // }

  return (
    <div className='Projects primaryDefault' id='projects'>
      <h2 className="projectsTitle">Personal Projects</h2>
      <div className='projectsContainer'>
        <div className='projectCard'>
          <img src={PushPlayListen} alt='Project 1' className='projectCardImg' />
          <h4>PushPlayListen</h4>
          <p>A responsive playlist app uses authentication Spotify's Api.</p>
          <div className='projectButtons'>
            <a className='projectCodeBtn projectLink' href='https://github.com/nadocodes/pushplaylisten-react-app.git' target='_blank'  ><GoRepo/></a>
            <a className='projectDemoBtn projectLink' href='https://pushplaylisten.netlify.app/' target='_blank' >Live View <FaExternalLinkAlt/></a>
          </div>
        </div>
        <div className='projectCard activeProjectCard'>
          <img src={Portfolio2023} alt='Project 2' className='projectCardImg' />
          <h4>Portfolio 2023</h4>
          <p>Portfolio coded from scratch to showcase personal profile.</p>
          <div className='projectButtons'>
            <a className='projectDemoBtn projectLink' href='https://github.com/nadocodes/nader-antar.git' target='_blank'  ><GoRepo/></a>
          </div>
        </div>
        <div className='projectCard'>
          <img src='https://img.freepik.com/premium-photo/default-wallpaper-abstract-background-trendy-futuristic-wave-minimalistic-3d-layout-design_477306-800.jpg' alt='Project 3' className='projectCardImg' />
          <h4>Extra Space</h4>
          <p>Project 3 description</p>
          <div className='projectButtons'>
            <a className='projectCodeBtn projectLink' href='https://pushplaylisten.netlify.app' target='_blank'  ><GoRepo/></a>
            <a className='projectDemoBtn projectLink' href='https://pushplaylisten.netlify.app/' target='_blank' >Live View <FaExternalLinkAlt/></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects