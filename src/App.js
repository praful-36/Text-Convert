
import './App.css';
import Navbar from "./compoents/Navbars";
import Textform from "./compoents/Textform";
import About from "./compoents/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Silde from './compoents/Silde';



function App() {
  return (
    <>

      <Router>

        <Navbar title="KYN" abouttext="about text here" />
        
        <Routes>
          <Route path="/" element={<Textform />} />
          <Route path="/about" element={<About />} />
          <Route path="/Silde" element={<Silde />} />
        </Routes>

      </Router>

    </>
  );
}

export default App;

