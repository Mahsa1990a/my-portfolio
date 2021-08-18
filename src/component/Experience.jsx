import React from 'react';

const Experience = () => {
  return (
    <div className="experience">
      {/* my-5 means mergin top and bottom 5  */}
      <div className="d-flex justify-content-center my-5">
        <h1>Experince</h1>
      </div>
      <div className="container experince-wraper">
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>Apr.2021 To Present</h3>
            <p>
              <ul>
                <li>Mentor students who are enrolled in a 12-week intensive Web Development Bootcamp</li>
                <li>Provide small-group and one-on-one assistance to students in completing class work and projects</li>
                <li>Teach students how to think like a programmer by building software from the ground up</li>
                <li>Familiarise students with effective debugging, troubleshooting and brainstorming new tech applications</li>
                <li>Grade assignments and provide feedback on students’ progress</li>
              </ul>
            </p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>Nov.2018 To May.2020</h3>
            <p>
              <ul>
                <li>Run and maintained Indium8.9 (Pb-Free Solder Paste) for pick and place machine</li>
                <li>Assisted in the development and production of Electronic PCBs using Altium Designer software, 
                  including schematic capture, library building, PCB design and exporting Gerber files for manufacturing</li>
                <li>Identified, developed, and implemented best engineering and manufacturing processes</li>
                <li>Helped to prepare documentation including schematics, BOM(Bill Of Material), and assembly instructions</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience;
