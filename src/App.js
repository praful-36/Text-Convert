import './App.css';
import Navbar from "./compoents/Navbars";
import Textform from "./compoents/Textform";
import About from "./compoents/About";
import Footer from './compoents/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router basename="/Text-Convert">
        <Navbar />    
        <Routes>
          <Route path="/" element={<Textform />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
