import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Education from "./Components/Education";
import Skills from "./Components/Skills";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import ProjectDetail from "./Components/ProjectDetail"; // Naya component
import Portfolio from "./Components/Portfolio"; // Portfolio Component
import Footer from "./Components/Footer";

// Ek naya function banayein jo saare home sections ko hold kare
const Home = () => (
  <>
    <Hero />
    <About />
    <Projects />
    <Skills />
    <Experience />
    <Education />
  </>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black overflow-x-hidden">
        {/* Navbar hamesha dikhega */}
        <Navbar /> 
        
        <Routes>
          {/* Main Portfolio Page */}
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          {/* Dedicated Project Detail Page */}
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>

        {/* Footer hamesha dikhega */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;