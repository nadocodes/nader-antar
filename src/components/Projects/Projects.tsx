import React from 'react'
import './Projects.css'

function Projects() {
  return (
    <div className='Projects sectionDefault' id='projects'>
      <h2 className="projectsTitle">Projects</h2>
      <div className='projectsContainer'>
        <div className='projectCard'>
          <h3>Project 1</h3>
          <p>Project 1 description</p>
        </div>
        <div className='projectCard'>
          <h3>Project 2</h3>
          <p>Project 2 description</p>
        </div>
      </div>
      </div>
  )
}

export default Projects