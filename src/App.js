import './App.css';
// we import bootstrap base on node-modules path(because each package we install will go in node-modules)
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; 
import Particles from "react-particles-js";

import Navbar from './component/Navbar';
import Header from './component/Header';

function App() {
  return (
    <>
      <Particles 
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900
              }
            }
          }
        }}
      />
      <Navbar />
      <Header />
    </>
  );
}

export default App;
