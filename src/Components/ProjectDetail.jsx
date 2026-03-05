import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Github, ArrowLeft, Palette, Layers } from "lucide-react";
import { projectData } from "./ProjectData"; // Ensure path is correct

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectData.find((p) => p.id === parseInt(id));

  // Page load hone par screen ko sab se upar (top) le jaye
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="h-screen flex items-center justify-center text-white bg-black">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
          <Link to="/" className="text-[#B06014] hover:underline">Back to Portfolio</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen text-white pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Navigation Back */}
        <Link to="/" className="inline-flex items-center gap-2 text-[#B06014] hover:text-white transition-colors mb-10 group">
          <ArrowLeft size={20} className="group-hover:-translate-x-2 transition-transform" />
          <span>Back to Projects</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Images Section - Updated Paths */}
          <div className="space-y-6">
            <div className="rounded-2xl overflow-hidden border border-[#B06014]/30 shadow-2xl shadow-[#B06014]/10 bg-[#1A0F07]">
              {/* Added "/" before image name */}
              <img 
                src={"/" + project.images[0]} 
                alt="Main View" 
                className="w-full h-auto object-cover min-h-[300px]" 
                onError={(e) => { e.target.src = "https://via.placeholder.com/800x600?text=Image+Not+Found"; }}
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {project.images.slice(1).map((img, idx) => (
                <div key={idx} className="rounded-xl overflow-hidden border border-white/10 hover:border-[#B06014]/50 transition-colors bg-[#1A0F07]">
                  {/* Added "/" before gallery image name */}
                  <img 
                    src={"/" + img} 
                    alt={`Gallery ${idx}`} 
                    className="w-full h-40 object-cover" 
                    onError={(e) => { e.target.src = "https://via.placeholder.com/400x300?text=Error"; }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Text Details Section */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-[#B06014]/20 text-[#B06014] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest border border-[#B06014]/30">
                {project.category}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">{project.title}</h1>
            
            <div className="mb-8">
              <h4 className="text-[#B06014] flex items-center gap-2 mb-3 font-bold text-lg">
                <Layers size={20} /> Project Overview
              </h4>
              <p className="text-gray-300 text-lg leading-relaxed">
                {project.longDescription}
              </p>
            </div>

            <div className="mb-10">
              <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest border-b border-[#B06014]/30 pb-2">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span key={i} className="bg-white/5 border border-white/10 px-4 py-2 rounded-lg text-sm text-gray-300">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-auto pt-8">
              {project.category === "Web Development" ? (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-full flex items-center justify-center gap-3 bg-[#B06014] text-white py-4 rounded-xl hover:bg-white hover:text-black transition-all font-bold text-lg shadow-lg shadow-[#B06014]/20"
                >
                  <Github size={22} /> View Source Code
                </a>
              ) : (
                <div className="w-full flex items-center justify-center gap-3 bg-white/5 border border-white/10 text-gray-400 py-4 rounded-xl font-bold italic">
                  <Palette size={22} /> Design Showcase (Figma)
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;