import React from 'react';
import Project1 from "../project1.png";
import Project2 from "../project2.png";
import Project3 from "../project3.png";

const Projects = () => {
  return (
    <div className="project-wrapper">
      <div className="container">
        <h1 className="project-h1 text-uppercase text-center py-5">Projects</h1>
        <div className="image-box-wraper row row-cols-auto justify-content-center">
          <div className="project-image-box">
            <img className="project-image image1" src={Project1} alt="Project1" />
            <div className="overflow"></div>
          </div>
          {/* - */}
          <div className="project-image-box">
            <img className="project-image image2" src={Project2} alt="Project2" />
            <div className="overflow"></div>
          </div>
          {/* - */}
          <div className="project-image-box">
            <img className="project-image image3" src={Project3} alt="Project3" />
            <div className="overflow"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects;
