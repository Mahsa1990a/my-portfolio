import React from "react";
import Typed from "react-typed";

const Header = () => {
  return (
    <div className="head-wraper">
      <div className="blur">
        <div className="main-info">
          <h1>Web Development and Websites Promotions</h1>
          <Typed 
            className="tyoed-text"
            strings={["Web Desing", "Web Development", "Frontend Developer"]}
          />
        </div>
      </div>
    </div>
  )
}

export default Header;
