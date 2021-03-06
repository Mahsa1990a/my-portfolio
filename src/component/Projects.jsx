import React from 'react';
import Project1 from "../project1.png";
import Project2 from "../project2.png";
import Project3 from "../project3.png";
// Font Awesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
// React-Popupbox
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
// Import it from node modules:
import "react-popupbox/dist/react-popupbox.css"; // after this line, when click on image of project, it pops up

const Projects = () => {

  // Reflexion
  const openPopupboxReflexion = () => {
    const content = (
    <>
      <img className="project-image-popupbox" src={Project1} alt="Reflexion" />
      <p className="project-desc">
        React based project to create a yoga studio at home<br></br>
        <strong>Tech Stack:</strong> React, Axios, Node.js, Express, Node-postgres, Tensorflow.js
      </p>
      <b className="github">Github: </b><a className="hyper-link" onClick={() => window.open("https://github.com/Luke-Berzins/Reflexion", "_blank")}>https://github.com/Luke-Berzins/Reflexion</a>
    </>
    )
    PopupboxManager.open({ content })
  };

  const popupboxConfigReflexion =  {
    titleBar: {
      enable: true,
      text: "Reflexion Project"
    },
    // Effect for popupbox:
    fadeIn: true,
    fadeInSpeed: 500
  }

  // Scheduler
  const openPopupboxScheduler = () => {
    const content = (
    <>
      <img className="project-image-popupbox" src={Project2} alt="Scheduler" />
      <p className="project-desc">
        React based project to create meetings for students to connect with mentors in real-time<br></br>
        <strong>Tech Stack:</strong> React, Axios, Classnames, Normalize, Storybook
      </p>
      <b className="github">Github: </b><a className="hyper-link" onClick={() => window.open("https://github.com/Mahsa1990a/scheduler", "_blank")}>https://github.com/Mahsa1990a/scheduler</a>
    </>
    )
    PopupboxManager.open({ content })
  };

  const popupboxConfigScheduler =  {
    titleBar: {
      enable: true,
      text: "Scheduler Project"
    },
    // Effect for popupbox:
    fadeIn: true,
    fadeInSpeed: 500
  }

  // Tweeter
  const openPopupboxTweeter = () => {
    const content = (
    <>
      <img className="project-image-popupbox" src={Project3} alt="Tweeter" />
      <p className="project-desc">
      Single page Twitter clone<br></br>
        <strong>Tech Stack:</strong> HTML, CSS, JS, jQuery and AJAX, Node, Express and MongoDB
      </p>
      <b className="github">Github: </b><a className="hyper-link" onClick={() => window.open("https://github.com/Mahsa1990a/tweeter", "_blank")}>https://github.com/Mahsa1990a/tweeter</a>
    </>
    )
    PopupboxManager.open({ content })
  };

  const popupboxConfigTweeter =  {
    titleBar: {
      enable: true,
      text: "Tweeter Project"
    },
    // Effect for popupbox:
    fadeIn: true,
    fadeInSpeed: 500
  }

  return (
    <div className="project-wrapper">
      <div className="container">
        <h1 className="project-h1 text-uppercase text-center py-5">Projects</h1>
        <div className="image-box-wraper row row-cols-auto justify-content-center">
          <div className="project-image-box" onClick={openPopupboxReflexion}>
            <img className="project-image image1" src={Project1} alt="Project1" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="project-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="project-image-box" onClick={openPopupboxScheduler}>
            <img className="project-image image2" src={Project2} alt="Project2" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="project-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="project-image-box" onClick={openPopupboxTweeter}>
            <img className="project-image image3" src={Project3} alt="Project3" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="project-icon" icon={faSearchPlus} />
          </div>
        </div>
      </div>
      <PopupboxContainer { ...popupboxConfigReflexion }/>
      <PopupboxContainer { ...popupboxConfigScheduler }/>
      <PopupboxContainer { ...popupboxConfigTweeter }/>
    </div>
  )
}

export default Projects;
