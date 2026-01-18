import React from 'react';
import { Briefcase, Award, ExternalLink, Calendar } from 'lucide-react';

const Experience = () => {
 const experiences = [
    {
      company: "Skybricks IT Solutions Pvt Ltd",
      role: "Web Developer",
      duration: "Nov 2025 - Present",
      description: "Working as a Web Developer specializing in React.js, Next.js, and Node.js to build robust web applications."
    },
    {
      company: "UI UX Designer (Internship)",
      role: "UI/UX Designer",
      duration: "Jul 2025 - Oct 2025",
      description: "Focused on Mobile Application Design and Responsive Web Design, creating user-centric interfaces and prototypes."
    },
    {
      company: "Development Lab Corporation - Internship",
      role: "UI/UX Designer",
      duration: "Nov 2023 - Present", // Note: Matches the remote internship in your image
      description: "Working on Figma prototyping and software design systems in a remote environment."
    },
    {
      company: "CodeAlpha - Internship",
      role: "Web Developer",
      duration: "Feb 2023 - Mar 2023",
      description: "Gained hands-on experience in CSS and Front-end Development during a focused internship period."
    }
  ];

const certifications = [
 
    {
      title: "Figma UI/UX Design Essentials",
      issuer: "Skillshare",
      date: "2024",
      link: "https://www.skillshare.com/"
    },
    {
      title: "Full Stack Web Development",
      issuer: "Codershub",
      date: "2023",
      link: "#"
    },

  ];
  return (
    <section id="experience" className="w-full bg-black  px-6 font-sans ">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-20">
            <h2 className="text-[#B06014] text-3xl md:text-4xl font-bold  text-center tracking-widest uppercase">
          exprience
        </h2>
                  <div className="w-24 h-1 bg-[#B06014] mt-4 rounded-full shadow-[0_0_10px_#B06014]"></div>

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* --- WORK EXPERIENCE PORTION (LEFT) --- */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="text-[#B06014]" size={28} />
              <h3 className="text-white text-2xl font-bold">Work Experience</h3>
            </div>

            <div className="space-y-6 border-l-2 border-[#B06014]/30 ml-3 pl-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative group">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-black border-2 border-[#B06014] group-hover:bg-[#B06014] transition-all" />
                  
                  <div className="bg-[#1A0F07] p-6 rounded-lg border border-[#B06014]/10 hover:border-[#B06014]/40 transition-all shadow-xl">
                    <span className="text-[#B06014] text-[14px] font-bold flex items-center gap-2 mb-2">
                      <Calendar size={14} /> {exp.duration}
                    </span>
                    <h4 className="text-white text-[18px] font-bold">{exp.role}</h4>
                    <p className="text-[#B06014]/80 text-[16px] mb-3">{exp.company}</p>
                    <p className="text-gray-400 text-[16px] leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* --- CERTIFICATIONS PORTION (RIGHT) --- */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-6">
              <Award className="text-[#B06014]" size={28} />
              <h3 className="text-white text-2xl font-bold">Certifications</h3>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {certifications.map((cert, index) => (
                <div 
                  key={index} 
                  className="group bg-[#1A0F07] border border-[#B06014]/10 p-5 rounded-lg flex items-center justify-between hover:bg-[#B06014]/5 transition-all"
                >
                  <div className="space-y-1">
                    <h4 className="text-white text-[18px] font-bold group-hover:text-[#B06014] transition-colors">
                      {cert.title}
                    </h4>
                    <p className="text-gray-500 text-[16px] flex items-center gap-2">
                      {cert.issuer} • {cert.date}
                    </p>
                  </div>
                  <a 
                    href={cert.link} 
                    className="text-[#B06014] p-2 rounded-full border border-[#B06014]/20 hover:bg-[#B06014] hover:text-white transition-all"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;