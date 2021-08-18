import React from 'react';

const Education = () => {
  return (
    <div className="education">
      <h1 className="py-5">My Education</h1>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-6">
              <div className="box">
                <h3>Diploma of Full Stack Web Development</h3>
                <h5>Lighthouse Labs (Feb 2021)</h5><br></br><br></br>
                <h6>Collaborative development, pair programming, team version control<br></br>
                  Computer science fundamentals: OOP, abstraction, recursion, algorithms
                </h6>
              </div>
            </div>
            {/* - */}
            <div className="col-md-6 col-sm-6">
              <div className="box">
                <h3>Bachelor of Science in Electronics Engineering</h3>
                <h5>IAU, Tehran, Iran (2010)</h5><br></br>
                <h6>(Canadian Equivalency, as assessed by Professional Engineers Ontario)</h6>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Education;
