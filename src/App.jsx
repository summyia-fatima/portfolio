// src/App.jsx
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Education from "./Components/Education";
import Skills from "./Components/Skills";
import Experience from "./Components/Experience"; // Import naya section
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Experience /> {/* Experience & Certifications yahan add hua */}
      <Projects />
      <Footer />
    </div>
  );
}

export default App;