import React, { useState } from "react";
import { projectData } from "./ProjectData";
import { Link } from "react-router-dom";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("All");

  const categories = [
    "All",
    "UI/UX",
    "Web Development",
    "Mobile App Development",
    "Marketing Design",
  ];

  const filteredProjects =
    activeTab === "All"
      ? projectData
      : projectData.filter((p) => p.category === activeTab);

  return (
    <section
      id="projects"
      className="bg-black py-20 px-6 text-white min-h-screen"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-[#B06014] text-4xl font-bold uppercase tracking-widest">
            My Portfolio
          </h2>
          <div className="w-24 h-1 bg-[#B06014] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-6 py-2 rounded-full text-xs font-bold transition-all border-2 ${
                activeTab === cat
                  ? "bg-[#B06014] border-[#B06014] text-white"
                  : "border-[#B06014]/40 text-[#B06014] hover:border-[#B06014]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {filteredProjects.map((project) => (
            <Link
              key={project.id}
              to={`/project/${project.id}`}
              className="block bg-[#1A0F07] rounded-2xl overflow-hidden border border-[#B06014]/20 group hover:border-[#B06014]/60 transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(176,96,20,0.15)]"
            >
              {/* IMAGE (HEIGHT INCREASED) */}
              <div className="h-80 md:h-96 overflow-hidden relative">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:opacity-0 group-hover:scale-110"
                />

                <img
                  src={project.images[1] || project.images[0]}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:scale-110"
                />

                <span className="absolute top-4 left-4 bg-black/70 text-xs px-3 py-1 rounded-full border border-white/10 backdrop-blur text-white">
                  {project.category}
                </span>
              </div>

              {/* CONTENT */}
              <div className="p-6 text-left space-y-5">
                <h3 className="text-2xl font-semibold text-white">
                  {project.title}
                </h3>

                {/* TECH */}
                <div className="flex flex-wrap gap-3">
                  {project.tech?.map((item, index) => (
                    <span
                      key={index}
                      className="text-sm px-4 py-2 rounded-full bg-[#B06014]/15 text-[#B06014] border border-[#B06014]/40 font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* BUTTON (SMALLER) */}
                <div className="pt-2">
                  <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-white bg-gradient-to-r from-[#B06014] to-[#8f4d12] px-4 py-2 rounded-lg transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_8px_20px_rgba(176,96,20,0.25)]">
                    <span>View Details</span>
                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white/15 text-xs">
                      →
                    </span>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;