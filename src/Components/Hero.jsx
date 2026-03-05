import React, { useEffect } from "react"; // useEffect add kiya
import { Download } from "lucide-react";
import { useLocation } from "react-router-dom"; // useLocation add kiya

const Hero = () => {
  const resumeLink = "https://drive.google.com/file/d/1syqv5Mhb-q6u8fi-C9aSZ0iL6XDOoiuY/view?usp=sharing";
  const location = useLocation();

  // --- Scroll Fix Logic Start ---
  useEffect(() => {
    // Agar Navbar ne koi targetId bheja hai (Detail page se wapas aate waqt)
    if (location.state?.targetId) {
      const id = location.state.targetId;
      
      // Thora delay taake page load ho jaye phir scroll kare
      const timer = setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const offset = 100;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }, 150);

      return () => clearTimeout(timer);
    }
  }, [location]);
  // --- Scroll Fix Logic End ---

  return (
    <section id="hero" className="w-full bg-black text-white py-10 px-4 flex items-center mt-18">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* IMAGE SECTION */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end order-1 md:order-2">
          <div className="relative w-54 h-54 sm:w-80 sm:h-80 md:w-[450px] md:h-[450px] bg-[#B06014] rounded-full flex justify-center items-center overflow-hidden border-4 md:border-8 border-black shadow-2xl">
            <img
              src="Group 4.png"
              alt="Profile"
              className="w-[85%] h-auto object-contain"
            />
          </div>
        </div>

        {/* TEXT SECTION */}
        <div className="flex-1 w-full md:w-1/2 flex flex-col space-y-6 items-center md:items-start text-center md:text-left order-2 md:order-1">
          <span className="font-bold leading-none">
            <span className="text-[#B06014] text-2xl md:text-5xl">
              UI / UX Designer &
            </span>
            <br />
            <span className="text-white text-2xl md:text-5xl">
              Frontend Web / App Developer
            </span>
          </span>
          <p className="text-gray-400 text-base md:text-lg max-w-lg">
            Transform your vision into high-performing digital products by bridging intuitive UI/UX design with scalable development.
          </p>
          <button
            onClick={() => window.open(resumeLink, "_blank")}
            className="w-fit flex items-center space-x-2 bg-[#B06014] rounded-full px-8 py-2.5 text-xs font-bold uppercase tracking-widest text-white hover:bg-zinc-900 transition-all border border-white/5 shadow-xl"
          >
            <span>Resume</span>
            <Download size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;