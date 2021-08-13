import './App.css';
// we import bootstrap base on node-modules path(because each package we install will go in node-modules)
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; 
import Navbar from './component/Navbar';

function App() {
  return (
    
    <Navbar />
  );
}

export default App;
