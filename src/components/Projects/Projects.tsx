import React from 'react';
import './Projects.css';

function Projects() {
  
  // Handle click on project card
  const handleActiveProject = (e: any) => {
    // Remove activeProjectCard class from current active project
    const activeProject = document.querySelector('.activeProjectCard');
    if (activeProject) {
      activeProject.classList.remove('activeProjectCard');
    }
    // Add activeProjectCard class to clicked project card
    if (e.target.classList.contains('projectCard')) {
      e.target.classList.add('activeProjectCard');
    } else {
      e.target.parentElement.classList.add('activeProjectCard');
    }
    // Do nothing if clicked project card is already active
    if (e.target.parentElement.classList.contains('activeProjectCard')) {
      return;
    }
  }

  return (
    <div className='Projects primaryDefault' id='projects'>
      <h2 className="projectsTitle">Projects</h2>
      <div className='projectsContainer'>
        <div className='projectCard' onClick={handleActiveProject}>
          <img src='https://img.freepik.com/premium-photo/default-wallpaper-abstract-background-trendy-futuristic-wave-minimalistic-3d-layout-design_477306-800.jpg' alt='Project 1' className='projectCardImg' />
          <h4>PushPlayListen</h4>
          <p>Project 1 description</p>
        </div>
        <div className='projectCard activeProjectCard' onClick={handleActiveProject}>
          <img src='https://img.freepik.com/premium-photo/default-wallpaper-abstract-background-trendy-futuristic-wave-minimalistic-3d-layout-design_477306-800.jpg' alt='Project 2' className='projectCardImg' />
          <h4>Portfolio 2023</h4>
          <p>Project 2 description</p>
        </div>
        <div className='projectCard' onClick={handleActiveProject}>
          <img src='https://img.freepik.com/premium-photo/default-wallpaper-abstract-background-trendy-futuristic-wave-minimalistic-3d-layout-design_477306-800.jpg' alt='Project 3' className='projectCardImg' />
          <h4>Extra Space</h4>
          <p>Project 3 description</p>
        </div>
      </div>
      </div>
  )
}

export default Projects