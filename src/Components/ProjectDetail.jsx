import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Github, ArrowLeft, Palette, Layers, Zap, CheckCircle2, Layout, Cpu, Target } from "lucide-react";
import { projectData } from "./ProjectData"; 

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectData.find((p) => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  if (!project) return (
    <div className="h-screen flex items-center justify-center text-white bg-[#050505]">
      <Link to="/" className="text-[#B06014] border border-[#B06014]/30 px-8 py-3 rounded-full hover:bg-[#B06014] hover:text-white transition-all">
        Back to Portfolio
      </Link>
    </div>
  );

  return (
    <div className="bg-[#050505] min-h-screen text-white pb-32 font-sans selection:bg-[#B06014]/30">
      
      {/* 1. TOP NAVIGATION BAR (Floating Style) */}
      <nav className="fixed top-0 w-full z-50 bg-[#050505]/80 backdrop-blur-xl border-b border-white/5 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 text-gray-400 hover:text-[#B06014] transition-all group">
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-xs font-bold uppercase tracking-widest">Back</span>
          </Link>
          <div className="hidden md:block text-[10px] tracking-[0.4em] font-black text-white/20 uppercase">
            Project Case Study — 2024
          </div>
          <div className="w-10 h-10 rounded-full bg-[#B06014]/10 border border-[#B06014]/20 flex items-center justify-center text-[#B06014] text-xs font-bold">
            {project.id}
          </div>
        </div>
      </nav>

      {/* 2. HERO HEADER */}
      <header className="relative pt-40 pb-20 px-6 overflow-hidden">
        {/* Animated Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#B06014]/10 blur-[120px] rounded-full -z-10 animate-pulse" />
        
        <div className="max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-3 mb-8 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full">
            <div className="w-1.5 h-1.5 rounded-full bg-[#B06014] animate-ping" />
            <span className="text-[#B06014] text-[10px] font-black uppercase tracking-[0.2em]">{project.category}</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-[ -0.04em] mb-10 leading-[0.9] max-w-4xl">
            {project.title}
          </h1>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-y border-white/5 mt-10">
            <div>
              <p className="text-gray-500 text-[10px] uppercase tracking-widest mb-2 font-bold">Role</p>
              <p className="text-sm font-medium">{project.category === 'UI/UX' ? 'Lead Designer' : 'Lead Developer'}</p>
            </div>
            <div>
              <p className="text-gray-500 text-[10px] uppercase tracking-widest mb-2 font-bold">Timeline</p>
              <p className="text-sm font-medium">4 Weeks</p>
            </div>
            <div>
              <p className="text-gray-500 text-[10px] uppercase tracking-widest mb-2 font-bold">Deliverable</p>
              <p className="text-sm font-medium">Case Study</p>
            </div>
            <div>
              <p className="text-gray-500 text-[10px] uppercase tracking-widest mb-2 font-bold">Tools</p>
              <p className="text-sm font-medium">{project.tech[0]} & More</p>
            </div>
          </div>
        </div>
      </header>

      {/* 3. HERO IMAGE (Parallax Style Effect) */}
      <div className="max-w-7xl mx-auto px-6 mb-32">
        <div className="rounded-[48px] overflow-hidden border border-white/10 bg-[#0A0A0A] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)]">
          <img 
            src={"/" + project.images[0]} 
            alt="Hero" 
            className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-1000" 
          />
        </div>
      </div>

      {/* 4. CONTENT GRID */}
      <main className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          
          {/* Left Side: Storytelling */}
          <div className="lg:col-span-7 space-y-24">
            <section>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-[#B06014]/10 border border-[#B06014]/20 flex items-center justify-center text-[#B06014]">
                  <Target size={24} />
                </div>
                <h2 className="text-2xl font-bold italic underline decoration-[#B06014]/30 underline-offset-8">The Challenge</h2>
              </div>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light whitespace-pre-line tracking-tight">
                {project.longDescription}
              </p>
            </section>

            {/* In-Content Gallery */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
               {project.images.slice(1, 3).map((img, idx) => (
                 <div key={idx} className="group rounded-[32px] overflow-hidden border border-white/5 bg-[#0A0A0A] aspect-[4/5] shadow-2xl">
                    <img 
                      src={"/" + img} 
                      alt="Process" 
                      className="w-full h-full object-contain p-6 group-hover:scale-105 transition-transform duration-700" 
                    />
                 </div>
               ))}
            </section>
          </div>

          {/* Right Side: Sticky Details Sidebar */}
          <aside className="lg:col-span-5 lg:sticky lg:top-32 space-y-8">
            <div className="bg-white/[0.03] border border-white/10 p-10 rounded-[40px] backdrop-blur-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#B06014]/5 blur-3xl rounded-full" />
              
              <h3 className="text-white text-xs font-black uppercase tracking-[0.4em] mb-10 flex items-center gap-3">
                <Cpu size={16} className="text-[#B06014]" /> Stack
              </h3>
              
              <div className="grid grid-cols-1 gap-4 mb-12">
                {project.tech.map((t, i) => (
                  <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-[#B06014]/30 transition-all group/item">
                    <span className="text-sm font-bold text-gray-400 group-hover/item:text-white transition-colors">{t}</span>
                    <CheckCircle2 size={18} className="text-[#B06014] opacity-40 group-hover/item:opacity-100" />
                  </div>
                ))}
              </div>

              {project.category === "Web Development" ? (
                <a href={project.link} target="_blank" rel="noreferrer" 
                   className="flex items-center justify-center gap-3 bg-white text-black py-5 rounded-2xl font-black hover:bg-[#B06014] hover:text-white transition-all shadow-2xl active:scale-95 text-sm uppercase tracking-widest">
                  <Github size={20} /> View Source
                </a>
              ) : (
                <button className="w-full flex items-center justify-center gap-3 bg-[#B06014] text-white py-5 rounded-2xl font-black hover:brightness-110 transition-all shadow-[0_20px_40px_-10px_rgba(176,96,20,0.3)] active:scale-95 text-sm uppercase tracking-widest">
                  <Palette size={20} /> Case Details
                </button>
              )}
            </div>

            <div className="p-8 rounded-[32px] border border-dashed border-white/10 flex items-center gap-4">
               <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
                  <Zap size={20} />
               </div>
               <p className="text-[10px] uppercase tracking-widest font-bold text-gray-500 leading-tight">
                  Fully Optimized & <br/> Production Ready
               </p>
            </div>
          </aside>
        </div>

        {/* 5. FULL WIDTH VISUALS */}
        {project.images.length > 3 && (
          <section className="mt-40 space-y-20">
             <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-px h-20 bg-gradient-to-b from-[#B06014] to-transparent" />
                <h3 className="text-gray-500 text-[10px] font-black uppercase tracking-[0.8em]">Visual Deep Dive</h3>
             </div>

             <div className="grid grid-cols-1 gap-20">
                {project.images.slice(3).map((img, idx) => (
                   <div key={idx} className="group relative rounded-[40px] overflow-hidden bg-[#0A0A0A] border border-white/5 shadow-3xl">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-12">
                         <p className="text-xs tracking-[0.4em] font-black uppercase">Detail Shot 0{idx + 1}</p>
                      </div>
                      <img 
                        src={"/" + img} 
                        alt="Detail" 
                        className="w-full h-auto max-h-[800px] object-contain mx-auto p-10 group-hover:scale-[1.01] transition-transform duration-1000" 
                      />
                   </div>
                ))}
             </div>
          </section>
        )}
      </main>

      {/* 6. NEXT PROJECT FOOTER */}
      <footer className="mt-40 text-center py-20 border-t border-white/5">
         <p className="text-gray-500 text-xs mb-6 uppercase tracking-widest font-bold">Finished Reading?</p>
         <Link to="/" className="text-3xl md:text-5xl font-bold hover:text-[#B06014] transition-colors">
            Back to All Works →
         </Link>
      </footer>
    </div>
  );
};

export default ProjectDetail;