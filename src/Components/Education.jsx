import React from 'react';
import { Calendar } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      title: "BSE (Software Engineering)",
      institution: "COMSATS Institute of Information and Technology",
      date: "2021 - 2025",
      description: "Highly motivated Software Engineering graduate with a strong academic foundation (CGPA 3.56/4.00). Passionate about UI/UX design and building user-centered digital products."
    },
    {
      title: "FSC (Pre-Engineering)",
      institution: "Fazaia Degree College ARF PAC Kamra",
      date: "2019 - 2021",
      description: "Achieved a success rate of 91% (1010/1100), demonstrating a strong grasp of core engineering and mathematical concepts."
    },
    {
      title: "Matriculation (Science)",
      institution: "Govt. Girls Higher Secondary School PAC Kamra",
      date: "2017 - 2019",
      description: "Scored 913/1100, showing excellent academic performance and a solid foundation in scientific principles."
    }
  ];

  return (
    <section id="education" className="w-full bg-black  px-6 font-sans">
      <div className="max-w-6xl mx-auto ">
        
        {/* Section Title matched with Hero alignment */}
        <div className="flex flex-col items-center mb-20">
            <h2 className="text-[#B06014] text-3xl md:text-4xl font-bold  text-center tracking-widest uppercase">
         education
        </h2>
                  <div className="w-24 h-1 bg-[#B06014] mt-4 rounded-full shadow-[0_0_10px_#B06014]"></div>

        </div>

        {/* Timeline Grid */}
        <div className="relative border-l-2 border-[#B06014]/20 ml-4 md:ml-0 md:border-l-0">
          
          {/* Central Line for Desktop */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[1px] bg-gradient-to-b from-[#B06014] via-[#B06014]/10  hidden md:block"></div>

          <div className="space-y-12">
            {educationData.map((item, index) => (
              <div 
                key={index} 
                className={`relative flex flex-col md:flex-row items-center justify-between w-full group`}
              >
                {/* Desktop Layout logic: Alternate sides */}
                <div className={`w-full md:w-[45%] ${index % 2 === 0 ? 'md:order-first' : 'md:order-last'}`}>
                  
                  {/* Content Card */}
                  <div className="bg-[#121212] border border-[#B06014]/20 p-8 rounded-3xl hover:border-[#B06014]/60 transition-all duration-500 shadow-xl group-hover:-translate-y-2">
                    
                    {/* Header: Title and Date Together */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                      <h3 className="text-white text-xl md:text-2xl font-bold group-hover:text-[#B06014] transition-colors">
                        {item.title}
                      </h3>
                      <div className="flex items-center gap-2 text-[#B06014] bg-[#B06014]/10 px-3 py-1 rounded-full border border-[#B06014]/20">
                        <Calendar size={14} />
                        <span className="text-[10px] font-bold uppercase tracking-wider">{item.date}</span>
                      </div>
                    </div>

                    {/* Institution */}
                    <h4 className="text-gray-400 text-[16px] font-semibold mb-5 flex items-center gap-2">
                      <span className="w-4 h-[1px] bg-[#B06014]"></span>
                      {item.institution}
                    </h4>

                    {/* Description */}
                    <p className="text-gray-500 text-[16px] leading-relaxed text-justify group-hover:text-gray-400 transition-colors">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Central Dot */}
                <div className="absolute -left-[11px] md:left-1/2 md:-translate-x-1/2 top-10 md:top-1/2 md:-translate-y-1/2 z-20">
                  <div className="w-5 h-5 rounded-full bg-black border-4 border-[#B06014] shadow-[0_0_15px_#B06014]"></div>
                </div>

                {/* Empty space for the other side on desktop */}
                <div className="hidden md:block md:w-[45%]"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;