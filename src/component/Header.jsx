import React from "react";
import Typed from "react-typed";  // Typing and removing

const Header = () => {
  return (
    <div className="head-wraper">
      <div className="blur">
        <div className="main-info">
          <h1>Web Development and Websites Promotions</h1>
          <Typed 
            className="typed-text"
            strings={["Web Desing", "Web Development", "Frontend Development, Backend Development"]}
            // The speed for writing
            typeSpeed={40}
            // The speed for back writing
            backSpeed={60}
            // It's gonna do non stop looping
            loop
          />
          <a href="#" className="btn-main-offer">Contact Me</a>
        </div>
      </div>
    </div>
  )
}

export default Header;
