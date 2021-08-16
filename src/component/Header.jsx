import React from "react";
import Typed from "react-typed";

const Header = () => {
  return (
    <div className="head-wraper">
      <div className="blur">
        <div className="main-info">
          <h1>Web Development and Websites Promotions</h1>
          <Typed 
            className="typed-text"
            strings={["Web Desing", "Web Development", "Frontend Developer"]}
            // The speed for writing
            typeSpeed={40}
            // The speed for back writing
            backSpeed={60}
            // It's gonna do non stop looping
            loop
          />
        </div>
      </div>
    </div>
  )
}

export default Header;
