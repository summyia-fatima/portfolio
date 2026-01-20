import React from "react";

const About = () => {
  const aboutImage = "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=600&fit=crop";

  // Smooth Scroll Function
  const scrollToFooter = () => {
    const footer = document.getElementById('footer');
    if (footer) {
      // Offset calculate kiya taake scroll thora behtar lagay
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = footer.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Generic function for other links like "View Works"
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="w-full bg-black  py-10 px-6 overflow-hidden font-sans">
      <div className="mx-auto max-w-6xl">
        
        {/* Section Title */}
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-[#B06014] text-3xl md:text-4xl font-bold text-center tracking-widest uppercase">
            About Me
          </h2>
          <div className="w-24 h-1 bg-[#B06014] mt-4 rounded-full shadow-[0_0_10px_#B06014]"></div>
        </div>

        {/* Layout Container */}
        <div className="flex flex-col lg:flex-row items-stretch justify-center gap-8 lg:gap-10">
          
          {/* LEFT: Image Card */}
          <div className="w-full lg:w-[45%] flex">
            <div className="relative w-full group">
              <div className="absolute -inset-2 border border-[#B06014]/20 rounded-xl group-hover:border-[#B06014]/40 transition-all duration-500"></div>
              
              <div className="relative h-full min-h-[450px] rounded-xl overflow-hidden shadow-xl border border-white/5">
                <img
                  src={aboutImage}
                  alt="Professional Workspace"
                  className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transform transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#B06014]/10 mix-blend-multiply"></div>
              </div>
            </div>
          </div>

          {/* RIGHT: Content Box */}
          <div className="w-full lg:w-[55%] flex">
            <div className="bg-[#1A0F07]/60 backdrop-blur-md p-6 md:p-8 rounded-xl border border-[#B06014]/20 shadow-2xl w-full flex flex-col justify-between">
              
              <div>
                <span className="text-[#B06014] text-[12px] font-bold tracking-[.3em] uppercase mb-2 block">Profile</span>
                <h2 className="text-white text-2xl md:text-3xl font-black mb-4 leading-tight">
                  HI! I’M <span className="text-[#B06014]">Summyia Fatima</span>
                </h2>
                <p className="text-gray-400 text-[16px] leading-relaxed mb-6">
                  I am a passionate <span className="text-white font-medium">UI/UX Designer</span> & <span className="text-white font-medium">Frontend Developer</span> dedicated to building seamless digital experiences.
                </p>

                {/* Bio Grid */}
                <div className="grid grid-cols-2 gap-y-4 gap-x-4 mb-6 py-5 border-y border-[#B06014]/10">
                  <div className="space-y-0.5 ">
                    <p className="text-[#B06014] text-[14px] font-bold uppercase tracking-wider">Experience</p>
                    <p className="text-white text-[16px] font-semibold">3+ Years</p>
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-[#B06014] text-[14px] font-bold uppercase tracking-wider">Location</p>
                    <p className="text-white text-[16px] font-semibold">Pakistan</p>
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-[#B06014] text-[14px] font-bold uppercase tracking-wider">Freelance</p>
                    <p className="text-white text-[16px] font-semibold">Available</p>
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-[#B06014] text-[14px] font-bold uppercase tracking-wider">Interests</p>
                    <p className="text-white text-[16px] font-semibold">UI/UX, React</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between mt-2">
                {/* Updated Contact Button */}
                <button 
                  onClick={scrollToFooter}
                  className="bg-[#B06014] hover:bg-white text-white hover:text-black px-6 py-2.5 rounded-full font-bold transition-all duration-300 text-[12px] uppercase tracking-widest active:scale-95"
                >
                  Contact Me
                </button>

                {/* Updated View Works Link */}
                <button
                  onClick={() => scrollToSection('projects')}
                  className="group flex items-center gap-2 text-white hover:text-[#B06014] transition-all font-bold text-[14px] uppercase tracking-widest cursor-pointer"
                >
                  View Works
                  <span className="w-6 h-[1px] bg-[#B06014] group-hover:w-10 transition-all"></span>
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;