import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Github,
  ArrowLeft,
  Palette,
  CheckCircle2,
  Target,
  Cpu,
  LayoutGrid,
  Zap,
} from "lucide-react";
import { projectData } from "./ProjectData";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectData.find((p) => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  if (!project)
    return (
      <div className="h-screen flex items-center justify-center text-white bg-[#050505]">
        <Link
          to="/"
          className="text-[#B06014] border border-[#B06014]/30 px-8 py-3 rounded-none hover:bg-[#B06014] transition-all font-bold tracking-widest uppercase text-xs"
        >
          Back to Home
        </Link>
      </div>
    );

  return (
    <div className="bg-[#050505] min-h-screen text-white pb-32 font-sans selection:bg-[#B06014]/30">
      {/* --- HEADER / HERO --- */}
      <div className="relative pt-32 pb-6 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[#B06014]/5 blur-[120px] rounded-full -z-10" />
        <div className="max-w-6xl mx-auto">
          <Link
            to="/"
            state={{ targetId: "projects" }}
            className="inline-flex items-center gap-2 text-gray-500 hover:text-white mb-12 transition-all group"
          >
            <ArrowLeft
              size={16}
              className="group-hover:-translate-x-2 transition-transform"
            />
            <span className="text-[10px] uppercase tracking-[0.4em] font-black">
              Back to Portfolio
            </span>
          </Link>

          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-[1px] bg-[#B06014]" />
              <span className="text-[#B06014] text-[14px] font-black uppercase tracking-[0.4em]">
                {project.category}
              </span>
            </div>
            <h1 className="text-5xl md:text-4xl font-bold tracking-tighter mb-8 leading-[0.9]">
              {project.title}
            </h1>
          </div>
        </div>
      </div>

      {/* --- MAIN FEATURE IMAGE --- */}
      <div className="max-w-2xl mx-auto px-6 mb-32">
        <div className="overflow-hidden border border-white/10 bg-[#0A0A0A] shadow-2xl">
          <img
            src={"/" + project.images[0]}
            alt="Main Showcase"
            className="w-full h-auto object-contain bg-[#111] hover:scale-[1.01] transition-transform duration-1000"
          />
        </div>
      </div>

      {/* --- CONTENT GRID --- */}
      <div className="max-w-6xl mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          {/* LEFT: DESCRIPTION & CASE STUDY */}
          <div className="lg:col-span-7 space-y-24">
            <section>
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 rounded-none bg-[#B06014]/10 border border-[#B06014]/20 flex items-center justify-center text-[#B06014]">
                  <Target size={24} />
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-white uppercase tracking-wider">
                  The Challenge
                </h2>
              </div>

              <div className="space-y-8">
                {Array.isArray(project.longDescription) ? (
                  project.longDescription.map((item, index) => {
                    if (item.type === "main")
                      return (
                        <p
                          key={index}
                          className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light mb-12 italic"
                        >
                          {item.content}
                        </p>
                      );

                    if (item.type === "heading")
                      return (
                        <h3
                          key={index}
                          className="text-[#B06014] text-sm font-black uppercase tracking-[0.4em] pt-10 mb-4"
                        >
                          {item.content}
                        </h3>
                      );

                    if (item.type === "bullet") {
                      const hasColon = item.content.includes(":");
                      const subHeading = hasColon
                        ? item.content.split(":")[0] + ":"
                        : "";
                      const restText = hasColon
                        ? item.content.split(":").slice(1).join(":")
                        : item.content;

                      return (
                        <div key={index} className="flex gap-5 group">
                          <span className="text-[#B06014] font-bold mt-1.5 text-lg">
                            •
                          </span>
                          <p className="text-gray-400 text-lg leading-relaxed group-hover:text-gray-200 transition-colors">
                            {subHeading && (
                              <span className="text-white font-bold mr-2">
                                {subHeading}
                              </span>
                            )}
                            {restText}
                          </p>
                        </div>
                      );
                    }

                    return null;
                  })
                ) : (
                  <p className="text-gray-300 whitespace-pre-line">
                    {project.longDescription}
                  </p>
                )}
              </div>
            </section>
          </div>

          {/* RIGHT: TECH SIDEBAR */}
          <aside className="lg:col-span-5 space-y-8 lg:sticky lg:top-32 h-fit">
            <div className="bg-white/[0.02] border border-white/10 p-10 backdrop-blur-3xl shadow-3xl">
              <h3 className="text-[#B06014] font-black mb-10 uppercase text-[10px] tracking-[0.5em] flex items-center gap-3">
                <Cpu size={14} /> Stack
              </h3>

              <div className="space-y-4 mb-12">
                {project.tech.map((t, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-5 rounded-none 
                    bg-white/10 border border-[#B06014]/20 
                    hover:bg-transparent hover:border-white/10 transition-all duration-500 group"
                  >
                    <span className="text-white group-hover:text-gray-500 text-sm font-bold tracking-wide transition-colors">
                      {t}
                    </span>
                    <CheckCircle2
                      size={16}
                      className="text-[#B06014] opacity-100 group-hover:opacity-20 transition-opacity"
                    />
                  </div>
                ))}
              </div>

              {project.category === "Web Development" ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-3 bg-white text-black py-5 rounded-none font-black hover:bg-[#B06014] hover:text-white transition-all shadow-2xl text-xs uppercase tracking-[0.2em]"
                >
                  <Github size={18} /> View Source Code
                </a>
              ) : (
                <button className="w-full flex items-center justify-center gap-3 bg-[#B06014] text-white py-5 rounded-none font-black hover:brightness-125 transition-all shadow-xl text-xs uppercase tracking-[0.2em]">
                  <Palette size={18} /> View Full Case
                </button>
              )}
            </div>

            <div className="px-8 flex items-center gap-4 text-gray-700">
              <Zap size={14} className="text-[#B06014]" />
              <span className="text-[9px] uppercase tracking-[0.3em] font-bold">
                Production Grade Asset
              </span>
            </div>
          </aside>
        </div>
      </div>

      {/* --- UPDATED GALLERY (Controlled Size) --- */}
      <section className="max-w-6xl mx-auto px-6 mt-20">
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <LayoutGrid size={22} className="text-[#B06014]" />
          <h2 className="text-2xl font-bold tracking-tight uppercase">
            System Deep Dive
          </h2>
          <div className="w-12 h-[1px] bg-[#B06014]/40" />
        </div>

        <div className="flex flex-col items-center space-y-20">
          {project.images.slice(1).map((img, idx) => (
            <div key={idx} className="w-full max-w-4xl group">
              <div className="relative overflow-hidden border border-white/10 bg-[#0A0A0A] shadow-2xl transition-all duration-700 hover:border-[#B06014]/30">
                <img
                  src={"/" + img}
                  alt={`Visual ${idx + 1}`}
                  className="w-full h-auto object-contain transition-transform duration-1000 group-hover:scale-[1.01]"
                />
              </div>

              <div className="mt-4 flex items-center justify-between opacity-50 group-hover:opacity-100 transition-opacity">
                <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-gray-400">
                  Fig. 0{idx + 1}
                </span>
                <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-[#B06014]">
                  Interface Analysis
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;