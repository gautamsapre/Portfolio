import React from 'react'
import './projects.css'
import carpool from '../../assets/Carpool.png' 
import DisplayModal from './details'

const Projects = () => {
  return (
    <section id="projects">
      <h5>My recent work</h5>
      <h2>Projects</h2>

      <div className="container project__container">
        <article className="project__item">
          <div className="project_image">
            <img src={carpool} alt="Carpool Project Image" />
          </div>
          <h3>Carpool</h3>
             <DisplayModal description="the product has fantastic features"/>

        </article>
      </div>
    </section>

  )
}

export default Projects