import React, { useState } from "react";
import { projectData } from "./ProjectData"; // Data import kiya
import { Link } from "react-router-dom"; // Yeh line add karein

const Projects = () => {
  const [activeTab, setActiveTab] = useState("All");
  const categories = ["All", "UI/UX", "Web Development","Mobile App Development", "Marketing Design"];

  const filteredProjects = activeTab === "All" 
    ? projectData 
    : projectData.filter((p) => p.category === activeTab);

  return (
    <section id="projects" className="bg-black py-20 px-6 text-white min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-[#B06014] text-4xl font-bold uppercase tracking-widest">My Portfolio</h2>
          <div className="w-24 h-1 bg-[#B06014] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-6 py-2 rounded-full text-xs font-bold transition-all border-2 
                ${activeTab === cat ? "bg-[#B06014] border-[#B06014]" : "border-[#B06014]/40 text-[#B06014] hover:border-[#B06014]"}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-[#1A0F07] rounded-xl overflow-hidden border border-[#B06014]/20 group">
              <div className="h-56 overflow-hidden">
                <img src={project.images[0]} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-6 line-clamp-2">{project.description}</p>
                
                {/* Yahan Link use ho raha hai Modal ki jagah */}
               <Link 
  to={`/project/${project.id}`} 
  className="inline-block bg-[#B06014] text-white text-xs px-8 py-3 rounded-full hover:bg-white hover:text-black transition-all font-bold"
>
  View Full Details
</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;