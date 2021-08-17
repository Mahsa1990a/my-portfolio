import './App.css';
// we import bootstrap base on node-modules path(because each package we install will go in node-modules)
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; 
import Particles from "react-particles-js";

import Navbar from './component/Navbar';
import Header from './component/Header';
import AboutMe from './component/AboutMe';

function App() {
  return (
    <>
      <Particles 
        className="particles-canvas"
        params={{
          particles: {
            number: {
              value: 50,
              density: {
                enable: true,
                value_area: 900
              }
            },
            shape: {
              type: "star",
              stroke: {
                width: 6,
                color: "#f9ab00"
              }
            }
          }
        }}
      />
      <Navbar />
      <Header />
      <AboutMe />
    </>
  );
}

export default App;
