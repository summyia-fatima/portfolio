import React, { useState, useEffect, useCallback, useContext } from 'react';
import { Github, X, ChevronLeft, ChevronRight } from 'lucide-react';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const categories = ['All', 'UI/UX', 'Web Development', 'App Development', 'Broachers', 'Banners'];

  // --- Full Data for All Categories ---

   const projectData = [
/* ui ux */

 {
      id: 1,
      title: "FlashDash - Delivery Rider App",
      category: "UI/UX",
      description: "Rider-centric mobile solution for optimized logistics.",
      longDescription: "FlashDash is a high-fidelity UI/UX design focused on the daily challenges of delivery riders. The app features a high-contrast interface for outdoor visibility, streamlined order management, and interactive GPS tracking.",
      images: [
        "/src/assets/delivery boy (2).png",
        "/src/assets/2.png",
        "/src/assets/3.png",
        "/src/assets/4.png",
      ],
      githubLink: "#",
      tech: ["Figma", "Mobile UI Design", "Prototyping", "UX Research"]
    },
    
/* web dev */

/*  app dev */

/*  brochure */

/* banners */

 {
      id: 6,
      title: "Dollar Store Promotional Banners",
      category: "Banners",
      description: "Eye-catching marketing assets for retail promotion.",
      longDescription: "A series of high-impact digital banners designed in Figma for the Dollar Store. These include 'Look good, feel great' and 'Unbox your creativity' themes.",
      images: [
        "src/assets/Cosmetic Banner.png",
        "src/assets/Home Decor Banner.png",
        "src/assets/Kid & Craft Banner.png"
      ],
      githubLink: "#",
      tech: ["Figma", "Graphic Design", "Marketing", "Retail Branding"]
    },

 {
      id: 2,
title: "The Golden Noodle - Brand Identity", // Brand name according to your logo      category: "Banners",
    description: "A delicious brand identity and landing page for a premium ramen shop.", 
      longDescription: "This project involved creating a cohesive brand identity for a high-end noodle bar. Starting with a logo designed in Adobe Illustrator—featuring golden circular motifs that represent both warmth and endless noodles—I then developed a sleek, responsive landing page using React to showcase their menu and story.",
       images: [
        "src/assets/IMG-20221102-WA0123.jpg", // Jo aapne pehle screenshot mein dikhayi thi
        "src/assets/IMG-20221102-WA0122.jpg" ,   // Dusri illustrator wali image
              "src/assets/IMG-20221102-WA0109.jpg"    // Dusri illustrator wali image

            ],
    tech: ["Adobe Illustrator", "Vector Branding", "Typography", "Color Theory","Layers"] // Ab sahi hai!    },

    },



  ];

  // --- Slider Logic ---
  const nextImage = useCallback(() => {
    if (selectedProject) {
      setCurrentImgIndex((prev) => (prev === selectedProject.images.length - 1 ? 0 : prev + 1));
    }
  }, [selectedProject]);

  const prevImage = () => {
    setCurrentImgIndex((prev) => (prev === 0 ? selectedProject.images.length - 1 : prev - 1));
  };

  useEffect(() => {
    let timer;
    if (selectedProject) {
      timer = setInterval(nextImage, 5000);
    }
    return () => clearInterval(timer);
  }, [selectedProject, nextImage, currentImgIndex]);

  useEffect(() => {
    setCurrentImgIndex(0);
  }, [selectedProject]);

  const filteredProjects = activeTab === 'All' 
    ? projectData 
    : projectData.filter(p => p.category === activeTab);

  return (
    <section id="projects" className="relative w-full bg-black py-20 px-6 font-sans min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-[#B06014] text-3xl md:text-4xl font-bold tracking-widest uppercase">Projects</h2>
          <div className="w-24 h-1 bg-[#B06014] mt-4 rounded-full shadow-[0_0_10px_#B06014]"></div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-6 py-2 rounded-full text-[12px] font-bold transition-all border-2 
                ${activeTab === cat ? 'bg-[#B06014] border-[#B06014] text-white shadow-lg' : 'bg-transparent border-[#B06014]/40 text-[#B06014] hover:border-[#B06014]'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-[#1A0F07] rounded-lg overflow-hidden border border-[#B06014]/20 group transition-all duration-300 hover:border-[#B06014]/60">
              <div className="h-56 w-full overflow-hidden bg-black">
                <img 
                  src={project.images[0]} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-8 text-center">
                <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-6 line-clamp-2">{project.description}</p>
                <button 
                  onClick={() => setSelectedProject(project)}
                  className="bg-[#B06014] text-white font-semibold text-xs px-6 py-2.5 rounded-full hover:bg-white hover:text-black transition-all"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- SLIDER MODAL --- */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/95 backdrop-blur-sm" onClick={() => setSelectedProject(null)}></div>
          
          <div className="bg-[#1A0F07] border border-[#B06014]/40 max-w-5xl w-full rounded-2xl overflow-hidden relative z-10 flex flex-col md:flex-row shadow-2xl animate-in fade-in zoom-in duration-300 max-h-[90vh]">
            
            <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 z-50 bg-black/60 p-2 rounded-full text-white hover:bg-red-600 transition-colors">
              <X size={20} />
            </button>

            {/* Slider Section */}
            <div className="md:w-3/5 relative bg-black flex items-center justify-center min-h-[300px] md:min-h-[500px]">
              {/* Image with object-contain to prevent cropping */}
              <img 
                src={selectedProject.images[currentImgIndex]} 
                alt="Project View" 
                className="max-w-full max-h-full object-contain transition-opacity duration-500"
              />
              
              {/* Permanent Navigation Icons */}
              <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#B06014]/80 p-3 rounded-full text-white hover:bg-[#B06014] transition-all shadow-lg">
                <ChevronLeft size={24} />
              </button>
              <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#B06014]/80 p-3 rounded-full text-white hover:bg-[#B06014] transition-all shadow-lg">
                <ChevronRight size={24} />
              </button>

              {/* Progress Dots */}
              <div className="absolute bottom-6 flex gap-2">
                {selectedProject.images.map((_, i) => (
                  <button 
                    key={i} 
                    onClick={() => setCurrentImgIndex(i)}
                    className={`h-1.5 transition-all rounded-full ${i === currentImgIndex ? 'bg-[#B06014] w-8' : 'bg-white/30 w-3'}`}
                  ></button>
                ))}
              </div>
            </div>

            {/* Details Section */}
            <div className="md:w-2/5 p-8 flex flex-col justify-center overflow-y-auto">
              <span className="text-[#B06014] text-xs font-black uppercase tracking-widest">{selectedProject.category}</span>
              <h3 className="text-white text-3xl font-bold mt-2 mb-4 leading-tight">{selectedProject.title}</h3>
              <p className="text-gray-300 text-[15px] leading-relaxed mb-6">{selectedProject.longDescription}</p>

              <div className="flex flex-wrap gap-2 mb-8">
                {selectedProject.tech.map((t, i) => (
                  <span key={i} className="text-[10px] border border-[#B06014]/40 text-[#B06014] px-3 py-1 rounded-full bg-[#B06014]/5 font-bold uppercase tracking-tighter">
                    {t}
                  </span>
                ))}
              </div>

              <a href={selectedProject.githubLink} className="flex items-center justify-center gap-2 bg-[#B06014] text-white py-3 rounded-xl hover:bg-white hover:text-black transition-all font-bold text-sm">
                <Github size={18} /> View Project Source
              </a>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;