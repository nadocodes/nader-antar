import React from 'react'
import './Projects.css'

function Projects() {
  
  const handleActiveProject = (e: any) => {
    const activeProject = document.querySelector('.activeProjectCard')
    if (activeProject) {
      activeProject.classList.remove('activeProjectCard')
    }
    if (e.target.classList.contains('projectCard')) {
      e.target.classList.add('activeProjectCard')
    } else {
      e.target.parentElement.classList.add('activeProjectCard')
    }
    if (e.target.parentElement.classList.contains('activeProjectCard')) {
      return
    }
  }

  return (
    <div className='Projects primaryDefault' id='projects'>
      <h2 className="projectsTitle">Projects</h2>
      <div className='projectsContainer'>
        <div className='projectCard activeProjectCard' onClick={handleActiveProject}>
          <h3>Project 1</h3>
          <p>Project 1 description</p>
        </div>
        <div className='projectCard' onClick={handleActiveProject}>
          <h3>Project 2</h3>
          <p>Project 2 description</p>
        </div>
        <div className='projectCard' onClick={handleActiveProject}>
          <h3>Project 3</h3>
          <p>Project 3 description</p>
        </div>
      </div>
      </div>
  )
}

export default Projects