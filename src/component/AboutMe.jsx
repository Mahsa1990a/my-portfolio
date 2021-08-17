import React from 'react';
import Picture from '../../src/pic.JPG';

const AboutMe = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap">
            <img className="profile-img" src={Picture} alt="Author" />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1>About Me</h1>
          <br></br>
          <p className="about-me-text">
            I am a junior Full-Stack Web Developer with six years professional background as an Electronics Engineer.<br></br><br></br>
            I get to be a <strong>Mentor</strong> for Lighthouse Labs to teach students who are excited about 12-weeks intensive "Web Development Bootcamp" that covers a variety of frontend and backend technologies.<br></br>
            Working as a Web Developer helps me to write well-designed, testable, efficient code by using best software development practices.
            I am always eager to learn about new technologies and practice for building robust, scalable software solutions in collaboration with team members.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
