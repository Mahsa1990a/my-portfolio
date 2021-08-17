import React from "react";
import picture from "../logo.jpg";
// REACT FONTAWSOME IMPORT:
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons"; // haumburger menu icon

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#"><img className="picture" src={picture} alt="picture" /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          {/* <span className="navbar-toggler-icon"></span>   UPDATE AFTER fontawsome icon */}
          <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }}/>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only"></span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About Me</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">My Experience</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Education</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contacts</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
