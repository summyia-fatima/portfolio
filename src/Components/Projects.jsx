import React, { useState } from "react";
import { projectData } from "./ProjectData";
import { Link } from "react-router-dom";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("All");

  const categories = ["All", "UI/UX", "Development"];

  const filteredProjects =
    activeTab === "All"
      ? projectData
      : projectData.filter((p) => p.category === activeTab);

  return (
    <section
      id="projects"
      className="bg-black py-12 px-6 text-white min-h-screen"
    >
      <div className="max-w-6xl mx-auto">

        {/* HEADING */}
        <div className="text-center mb-13">
          <h2 className="text-[#B06014] text-4xl font-bold uppercase tracking-widest">
            My Portfolio
          </h2>
          <div className="w-24 h-1 bg-[#B06014] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* FILTERS */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-1 rounded-full text-[16px] font-bold transition-all border-2 ${
                activeTab === cat
                  ? "bg-[#B06014] border-[#B06014] text-white"
                  : "border-[#B06014]/40 text-[#B06014] hover:border-[#B06014]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {filteredProjects.map((project) => (

            <Link
              key={project.id}
              to={`/project/${project.id}`}
              className="block bg-[#1A0F07] rounded-2xl overflow-hidden border border-[#B06014]/20 group hover:border-[#B06014]/60 transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(176,96,20,0.15)]"
            >

              {/* IMAGE */}
              <div className="h-64 md:h-72 overflow-hidden relative">

                <img
                  src={
                    project.assets?.banner?.[0] ||
                    project.assets?.ui_images?.[0]
                  }
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                />

                <span className="absolute top-4 left-4 bg-black/70 text-xs px-3 py-1 rounded-full border border-white/10 backdrop-blur text-white">
                  {project.category}
                </span>

              </div>

              {/* CONTENT */}
              <div className="p-5 space-y-4">

                {/* TITLE */}
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {project.title}
                  </h3>

                  <p className="text-[16px] text-white/60 mt-1">
                    {project.role?.join(" • ")}
                  </p>
                </div>

             

                {/* ACTIONS */}
                <div className="flex items-center justify-between pt-4 mt-4 border-t border-[#B06014]/20">

                  {/* PRIMARY LINK (GITHUB > FIGMA) */}
                  {project.github_link ? (
                    <a
                      href={project.github_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[#B06014]/40 text-[#E6A24A] text-sm font-medium hover:bg-[#B06014]/10 transition"
                    >
                      GitHub Repo
                      <span className="text-xs">↗</span>
                    </a>
                  ) : project.figma_link ? (
                    <a
                      href={project.figma_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[#B06014]/40 text-[#E6A24A] text-sm font-medium hover:bg-[#B06014]/10 transition"
                    >
                      Figma Preview
                      <span className="text-xs">↗</span>
                    </a>
                  ) : (
                    <div />
                  )}

                  {/* CASE STUDY */}
                  <div className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#B06014] text-white text-sm font-semibold hover:bg-[#c06a16] transition cursor-pointer">
                    View Case Study
                    <span className="w-5 h-5 flex items-center justify-center rounded-full bg-white/20">
                      →
                    </span>
                  </div>

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