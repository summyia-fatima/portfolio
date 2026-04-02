import React, { useEffect } from "react";
import { Download } from "lucide-react";
import { useLocation } from "react-router-dom";
import summyiaPic from "/summyia-pic.png";

const Hero = () => {
  const resumeLink =
    "https://drive.google.com/file/d/11S87RLeH5lITJhhNt5BduXifbTHmZCOQ/view?usp=sharing";
  const location = useLocation();

  useEffect(() => {
    if (location.state?.targetId) {
      const id = location.state.targetId;

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

  return (
    <section
      id="hero"
      className="relative w-full  bg-black text-white pt-30 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-72 h-72 bg-[#B06014]/20 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 blur-3xl rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2   items-center gap-10 lg:gap-16">
        {/* TEXT SECTION */}
        <div className="text-center lg:text-left order-2 lg:order-1">
         <span className="inline-block mb-5 px-4 py-1 text-xs tracking-[0.2em]  text-gray-300 border border-white/10 rounded-full bg-green-600 text-white shadow-md shadow-green-500/30 hover:shadow-green-500/60 transform transition-all hover:scale-105">
  Available For Work
</span>

          <h1 className="font-bold leading-tight">
            <span className="block text-[#B06014] text-2xl sm:text-3xl md:text-[42px] xl:text-[46px]">
              UI / UX Designer
            </span>
            <span className="block text-white text-2xl sm:text-3xl md:text-[42px] xl:text-[46px] mt-2">
              & Frontend Web Developer
            </span>
          </h1>

          <p className="mt-6 max-w-xl mx-auto lg:mx-0 text-sm sm:text-base text-gray-400 leading-7">
            Transform your vision into high-performing digital products by
            combining intuitive UI/UX design with clean, scalable frontend
            development for web and mobile experiences.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center lg:items-start justify-center lg:justify-start">
            <button
              onClick={() => window.open(resumeLink, "_blank")}
              className="group flex items-center gap-2 bg-[#B06014] px-7 py-3 rounded-full text-sm font-semibold uppercase tracking-wider text-white hover:bg-[#8f4d12] transition-all shadow-lg shadow-[#B06014]/30"
            >
              <span>Download Resume</span>
              <Download
                size={18}
                className="transition-transform group-hover:translate-y-[2px]"
              />
            </button>
          </div>
        </div>

        {/* IMAGE SECTION */}
        <div className="flex justify-center lg:justify-end order-1 lg:order-2 w-full">
          <div className="relative w-[180px] sm:w-[220px] md:w-[260px] lg:w-[300px]">
            {/* Glow */}
            <div className="absolute inset-0 bg-[#B06014]/20 blur-2xl rounded-3xl scale-105" />

            {/* Card */}
            <div className="relative bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-3 shadow-2xl">
              <div className="overflow-hidden rounded-2xl h-[260px] sm:h-[300px] md:h-[340px] lg:h-[380px]">
                <img
                  src={summyiaPic}
                  alt="Summyia"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Floating Tag */}
            <div className="absolute -bottom-5 -left-5 bg-zinc-900/90 border border-white/10 rounded-xl px-4 py-2 backdrop-blur-md shadow-xl">
              <p className="text-xs text-gray-400">Specialized In</p>
              <p className="text-sm font-semibold text-white">
                UI/UX • React • Responsive
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;