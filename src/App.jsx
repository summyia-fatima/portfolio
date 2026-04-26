import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Education from "./Components/Education";
import Skills from "./Components/Skills";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import ProjectDetail from "./Components/ProjectDetail"; // Dedicated project detail page component
import Portfolio from "./Components/portfolio"; // Portfolio component
import Footer from "./Components/Footer";
import Services from "./Components/Services";

// Home component that holds all the sections
const Home = () => (
  <>
    <Hero />
    <About />
    <Projects />
        <Services />
         <Skills />    
             <Experience />
 
    <Education />

  </>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black overflow-x-hidden">
        {/* Navbar is always visible */}
        <Navbar />

        <Routes>
          {/* Main Home Page */}
          <Route path="/" element={<Home />} />
          
          {/* Portfolio Page */}
          <Route path="/portfolio" element={<Portfolio />} />

          {/* Project Detail Page (dynamic route based on ID) */}
          <Route path="/project/:id" element={<ProjectDetail />} />

          {/* Catch-all for undefined routes, direct to home page or any other fallback */}
          <Route path="*" element={<Home />} />
        </Routes>

        {/* Footer is always visible */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;