import React from "react";
import { Download } from "lucide-react";

const Hero = () => {
  const resumeLink = "https://drive.google.com/file/d/1syqv5Mhb-q6u8fi-C9aSZ0iL6XDOoiuY/view?usp=sharing";

  return (
    <section className="w-full bg-black text-white my-8 px-4 flex items-center mt-32">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-10">
        {/* IMAGE SECTION (Right side on desktop, Top on mobile) */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end order-1 md:order-2">
          {/* Added rounded-full here to fix the square background issue */}
          <div className="relative w-54 h-54 sm:w-80 sm:h-80 md:w-[450px] md:h-[450px] bg-[#B06014] rounded-full flex justify-center items-center overflow-hidden border-4 md:border-8 border-black shadow-2xl">
            <img
              src="Group 4.png"
              alt="Profile"
              /* Changed from w-full h-full to a specific percentage */
              className="w-[85%] h-auto object-contain"
            />
          </div>
        </div>

        {/* TEXT SECTION (Left side on desktop, Bottom on mobile) */}
        <div className="flex-1 w-full md:w-1/2 flex flex-col space-y-6 items-center md:items-start text-center md:text-left order-2 md:order-1">
          <span className="font-bold leading-none">
            {/* Default (Mobile): text-xl | Medium Screens and up: text-3xl */}
            <span className="text-[#B06014] text-2xl md:text-5xl">
              UI / UX Designer &
            </span>
            <br />
            {/* Default (Mobile): text-xl | Medium Screens and up: text-3xl */}
            <span className="text-white text-2xl md:text-5xl">
              Frontend Web / App Developer
            </span>
          </span>
          <p className="text-gray-400 text-base md:text-lg max-w-lg">
          Transform your vision into high-performing digital products by bridging intuitive UI/UX design with scalable development.   </p>
          <button
            onClick={() => window.open(resumeLink, "_blank")}
            className="w-fit flex items-center space-x-2 bg-[#B06014]  rounded-full  px-8 py-2.5 text-xs font-bold uppercase tracking-widest text-white hover:bg-zinc-900 transition-all border border-white/5 shadow-xl"
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
