import React, { useState, useEffect } from 'react';
import { Project, ProjectsResponse } from './types'; 
import { GoRepo } from 'react-icons/go';
import { FaExternalLinkAlt } from 'react-icons/fa';
import PushPlayListen from '../../assets/pushplaylistenScreenshot.png';
import Portfolio2023 from '../../assets/portfolio2023Screenshot.jpg';
import WatchDogsFanPage from '../../assets/watchdogsFanPageScreenshot.jpg';
import UnderConstruction from '../../assets/undrawUnderConstruction.svg';
import './Projects.css';

function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch('/.netlify/functions/fetchProjects')
      .then(response => response.json())
      .then((data) => {
        console.log(data); // Log to see the actual structure
        setProjects(data.items);
      })
      .catch(console.error);
  }, []);
  
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
    // Dynamic Projects
    <div className='Projects primaryDefault' id='projects'>
      <h2 className="projectsTitle">Personal Projects</h2>
      <div className='projectsContainer'>
        {Array.isArray(projects) && projects.length > 0 ? projects.map((project, index) => {
            // Ensure we have a valid URL before attempting to render the image
            const imageUrl = project.fields.projectImage?.fields?.file?.url;
            return (
              <div className='projectCard' key={project.sys.id || index}>
                <img src={imageUrl} alt={project.fields.projectName} className='projectCardImg' />
                <h4>{project.fields.projectName}</h4>
                <p>{project.fields.projectDescription}</p>
                <div className='projectButtons'>
                  {project.fields.repoLink && (
                    <a className='projectDemoBtn projectLink' href={project.fields.repoLink} target='_blank' rel="noopener noreferrer"><GoRepo/></a>
                  )}
                  {project.fields.projectLink && (
                    <a className='projectDemoBtn projectLink' href={project.fields.projectLink} target='_blank' rel="noopener noreferrer">Live View <FaExternalLinkAlt/></a>
                  )}
                </div>
              </div>
            );
        }) : <p>No projects to display</p>}
      </div>
    </div>

    // Static Projects
    // <div className='Projects primaryDefault' id='projects'>
    //   <h2 className="projectsTitle">Personal Projects</h2>
    //   <div className='projectsContainer'>
    //     <div className='projectCard'>
    //       <img src={Portfolio2023} alt='Portfolio 2023 Project Image' className='projectCardImg' />
    //       <h4>Portfolio 2023</h4>
    //       <p>Portfolio coded from scratch to showcase personal profile.</p>
    //       <div className='projectButtons'>
    //         <a className='projectDemoBtn projectLink' href='https://github.com/nadocodes/nader-antar.git' target='_blank'  ><GoRepo/></a>
    //       </div>
    //     </div>
    //     <div className='projectCard'>
    //       <img src={PushPlayListen} alt='PushPlayListen Project Image' className='projectCardImg' />
    //       <h4>PushPlayListen</h4>
    //       <p>A responsive playlist app uses authentication Spotify's Api.</p>
    //       <div className='projectButtons'>
    //         <a className='projectCodeBtn projectLink' href='https://github.com/nadocodes/pushplaylisten-react-app.git' target='_blank'  ><GoRepo/></a>
    //         <a className='projectDemoBtn projectLink' href='https://pushplaylisten.netlify.app/' target='_blank' >Live View <FaExternalLinkAlt/></a>
    //       </div>
    //     </div>
    //     <div className='projectCard'>
    //       <img src={WatchDogsFanPage} alt='Watchdogs 2 Fan Page Project Image' className='projectCardImg' />
    //       <h4>Watchdogs 2 Fanpage</h4>
    //       <p>A video game fan page produced as challenge to evolve technical skill set.</p>
    //       <div className='projectButtons'>
    //         <a className='projectCodeBtn projectLink' href='https://github.com/nadocodes/watchdogs2-fanpage.git' target='_blank'  ><GoRepo/></a>
    //         <a className='projectDemoBtn projectLink' href='https://nadocodes.github.io/watchdogs2-fanpage/' target='_blank' >Live View <FaExternalLinkAlt/></a>
    //       </div>
    //     </div>
    //     <div className='projectCard'>
    //       <img src={UnderConstruction} alt='Social Discussion App under construction' className='projectCardImg' />
    //       <h4>Social Discussion App</h4>
    //       <p>A Reddit style application that allows users to socially interact with posts. <br/> <b id='warning'>*Under Construction*</b></p>
    //       <div className='projectButtons'>
    //         <a className='projectDemoBtn projectLink' href='https://github.com/nadocodes/' target='_blank'  ><GoRepo/></a>
    //         {/* <a className='projectDemoBtn projectLink' href='https://pushplaylisten.netlify.app/' target='_blank' >Live View <FaExternalLinkAlt/></a> */}
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}

export default Projects