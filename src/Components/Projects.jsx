import React, { useState, useEffect, useCallback } from "react";
import { Github, X, ChevronLeft, ChevronRight, ExternalLink, Palette } from "lucide-react";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const categories = [
    "All",
    "UI/UX",
    "Web Development",
    "App Development",
    "Marketing Design",
 
  ];

const projectData = [
  {
    id: 1,
    title: "FlashDash: Rider-Centric Delivery UI/UX",
    category: "UI/UX",
    description: "Optimized logistics interface designed for high-efficiency rider operations.",
    longDescription: "FlashDash is a high-fidelity UI/UX design focused on the daily challenges of delivery riders. The app features a high-contrast interface for outdoor visibility and streamlined order management.",
    images: ["delivery boy (2).png", "2.png", "3.png", "4.png"],
    link: "#",
    tech: ["Figma", "Mobile UI Design", "UX Research"],
  },
  {
    id: 2,
    title: "Smart Dairy: AI-Powered Livestock Care UX",
    category: "UI/UX",
    description: "Intelligent cattle management system for automated disease diagnosis and monitoring.",
    longDescription: "Smart Dairy is a comprehensive mobile solution designed for farmers to monitor cattle health. Includes AI diagnosis for Psoroptic Mange and multi-language support (English/Urdu).",
    images: ["hhhokm.png", "cvbnm.png", "plkmnbv.png", "poiuytrew.png", "wa.png"],
    link: "#",
    tech: ["Figma", "AI Integration UX", "Livestock Management"],
  },
  {
    id: 3,
    title: "Skylarks IT: Corporate Tech Solution UI",
    category: "UI/UX",
    description: "Modern web redesign focused on high-impact tech branding and performance metrics.",
    longDescription: "A high-impact website redesign aimed at positioning Skylarks as a leading tech solution provider. Features a dynamic services grid and performance metrics.",
    images: ["sss.png", "yyf.png", "ll.png"],
    link: "#",
    tech: ["Figma", "Web Design", "Corporate Branding"],
  },
  {
    id: 4,
    title: "Dollar Store: E-Commerce Marketplace UX",
    category: "UI/UX",
    description: "User-optimized retail interface for fast-paced digital shopping and bulk deals.",
    longDescription: "Optimized for quick browsing, featuring a comprehensive category system, daily deals, and bulk-buy options.",
    images: ["ml.png", "va.png", "5r.png", "098.png", "re.png"],
    link: "#",
    tech: ["Figma", "E-commerce UX", "Mobile UI"],
  },
  {
    id: 5,
    title: "Task Buddy: Service Marketplace UX",
    category: "UI/UX", 
    description: "Professional freelancer platform featuring seamless task boards and user flow mapping.",
    longDescription: "Features a 'Task Buddy Board' for job listings, detailed post-creation flow, and professional profiles with project statistics.",
    images: ["oo.jpg","g.png", "hh.png"],
    link: "#",
    tech: ["Figma", "Marketplace UX", "User Flow Mapping"],
  },
  {
    id: 6,
    title: "Drinks Cafe: Premium Tri-Fold Branding",
    category: "Marketing Design",
    description: "Clean typography and visual storytelling for premium beverage branding.",
    longDescription: "Designed for digital and print. Focuses on visual storytelling with high-quality photography and clean typography.",
    images: ["jj.jpg","dr.jpg", "dr2.jpg"],
    link: "#",
    tech: ["Figma", "Graphic Design", "Branding"],
  },
  {
    id: 7,
    title: "Dollar Store: Promotional Retail Campaign",
    category: "Marketing Design",
    description: "High-impact retail banners designed for cross-platform marketing and engagement.",
    longDescription: "A series of high-impact digital banners designed for social media and web advertisements.",
    images: ["jn.jpg","Cosmetic Banner.png", "Home Decor Banner.png", "Kid & Craft Banner.png"],
    link: "#",
    tech: ["Figma", "Marketing", "Retail Branding"],
  },
  {
    id: 9,
    title: "Hair Bliss: Organic Social Media Campaign",
    category: "Marketing Design",
    description: "Engagement-driven Canva campaign for herbal hair care brand positioning.",
    longDescription: "High-engagement Instagram posts highlighting 100% herbal ingredients with direct WhatsApp integration.",
    images: ["llg.jpg","loo.png", "pp.png", "jjjk.png", "5.png"],
    link: "#",
    tech: ["Canva", "Social Media Marketing", "Ad Creatives"],
  },
  {
    id: 10,
    title: "Dollar Shop Kamra: Localized Retail UX",
    category: "UI/UX",
    description: "Regional e-commerce UI design tailored for community-specific retail needs.",
    longDescription: "A dedicated UI/UX design project created in Figma for a local e-commerce solution in Kamra and Attock. The design focuses on user accessibility, clean product navigation, and a high-fidelity prototype tailored for regional retail needs.",
    images: ["h3.jpg","5r.png", "ml.png", "va.png"], 
    link: "#",
    tech: ["Figma", "UI Design", "Prototyping", "User Research"],
  },
  {
    id: 11,
    title: "AI Email Assistant: Intelligent UX Dashboard",
    category: "UI/UX",
    description: "Figma-based AI dashboard design for smart mail management and contact exporting.",
    longDescription: "A high-fidelity Figma design for an AI Email Assistant. The interface features an automated dashboard that runs APIs to generate real-time suggestions, smart labels, and email drafts. It also includes a robust contact management system for bulk exporting and simple contact downloading.",
    images: ["lp2.jpg","apa.png", "si.png", "si2.png", "th.png"],
    link: "#",
    tech: ["Figma", "User Flow Mapping", "AI Suggestion UX", "Contact Management"],
  },
  {
    id: 12,
    title: "AI Email Assistant: React Desktop Applicton",
    category: "Web Development",
    description: "Full-stack React application with Electron framework and real-time API integration.",
    longDescription: "A professional React-based web application that integrates email APIs to provide AI-powered features. It displays automated labels, smart drafts, and context-aware suggestions. The application includes functional logic to download or bulk export contacts as CSV/vCard formats.",
    images: ["lg.jpg","apa.png", "si.png", "si2.png", "th.png"],
    link: "https://github.com/your-username/ai-email-assistant",
    tech: ["React JS", "API Integration", "Tailwind CSS", "File Export Logic", "Electron framework"],
  },
  {
    id: 13,
    title: "Anjoma Zone: Secure Rental Checkout UX",
    category: "UI/UX",
    description: "Complex multi-step checkout flow using Auto-Layout 5.0 for secure transactions.",
    longDescription: "A comprehensive UI/UX project focused on simplifying the rental booking process. This design features a dynamic 3-day rental calculation logic, automated deposit breakdowns (30% down payment), and a clear progressive disclosure progress bar. The interface is optimized for clarity, using a warm color palette to build user trust during the secure payment phase.",
    images: ["lp.jpg","p1.png","p12.png","p2.png","p21.png"],
    link: "https://www.figma.com/file/your-figma-link-here", 
    tech: ["Figma", "Auto-Layout 5.0", "Design Systems", "Prototyping", "UX Writing"],
  },
  {
    id: 14,
    title: "Dollar Store: Category-Focused Print Design",
    category: "Marketing Design",
    description: "Vibrant tri-fold brochure design optimized for retail inventory categorization.",
    longDescription: "This project showcases a clean, category-focused layout for a discount store. It utilizes a bright yellow color palette to drive engagement and clear typography to categorize inventory like beauty, home decor, and stationery.",
    images: ["nn.jpg","n2.png","n3.png","n4.png","n5.png"],
    link: "#",
    tech: ["Figma", "Graphic Design"],
  },
  {
    id: 15,
    title: "Mamma’s Noodles: Mascot & Visual Identity",
    category: "Marketing Design",
    description: "Creative character-driven branding and mascot illustration for food marketing.",
    longDescription: "A creative branding project featuring a custom cat mascot illustration eating noodles. The design focuses on character-driven marketing with a vibrant yellow and orange color palette to create a friendly and appetizing brand personality.",
    images: ["cc.jpg","cc2.jpg","cc3.jpg","cc4.jpg"],
    link: "#",
    tech: ["Figma", "Graphic Design"],
  },
];
  const nextImage = useCallback(() => {
    if (selectedProject) {
      setCurrentImgIndex((prev) =>
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  }, [selectedProject]);

  const prevImage = () => {
    setCurrentImgIndex((prev) =>
      prev === 0 ? selectedProject.images.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    let timer;
    if (selectedProject) {
      timer = setInterval(nextImage, 5000);
    }
    return () => clearInterval(timer);
  }, [selectedProject, nextImage]);

  // Logic for filtering
  const filteredProjects = activeTab === "All" 
    ? projectData 
    : projectData.filter((p) => p.category === activeTab);

  return (
    <section id="projects" className="relative w-full bg-black py-20 px-6 font-sans min-h-screen text-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-[#B06014] text-3xl md:text-4xl font-bold tracking-widest uppercase">My Portfolio</h2>
          <div className="w-24 h-1 bg-[#B06014] mt-4 rounded-full shadow-[0_0_10px_#B06014]"></div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveTab(cat);
                setSelectedProject(null);
              }}
              className={`px-6 py-2 rounded-full text-[12px] font-bold transition-all border-2 
                ${activeTab === cat ? "bg-[#B06014] border-[#B06014] text-white" : "bg-transparent border-[#B06014]/40 text-[#B06014] hover:border-[#B06014]"}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-[#1A0F07] rounded-lg overflow-hidden border border-[#B06014]/20 group transition-all">
              <div className="h-56 w-full overflow-hidden bg-black">
                <img src={project.images[0]} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-8 text-center">
                <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-6 line-clamp-2">{project.description}</p>
                <button
                  onClick={() => { setSelectedProject(project); setCurrentImgIndex(0); }}
                  className="bg-[#B06014] text-white text-xs px-6 py-2.5 rounded-full hover:bg-white hover:text-black transition-all font-bold"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Slider */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={() => setSelectedProject(null)}></div>
          
          <div className="bg-[#1A0F07] border border-[#B06014]/40 max-w-5xl w-full rounded-2xl overflow-hidden relative z-10 flex flex-col md:flex-row max-h-[90vh]">
            <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 z-50 bg-black/60 p-2 rounded-full text-white hover:bg-red-600 transition-colors">
              <X size={20} />
            </button>

            {/* Slider Section */}
            <div className="md:w-3/5 relative bg-black flex items-center justify-center p-4">
              <img src={selectedProject.images[currentImgIndex]} alt="Slide" className="max-w-full max-h-[500px] object-contain" />
              
              <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#B06014] p-2 rounded-full text-white"><ChevronLeft /></button>
              <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#B06014] p-2 rounded-full text-white"><ChevronRight /></button>
            </div>

            {/* Details Section */}
          {/* 1. Added 'max-h-[80vh]' to limit height on mobile */}
{/* 2. Added 'overflow-y-auto' to allow scrolling inside the box */}
<div className="md:w-2/5 p-8 flex flex-col justify-start bg-[#1A0F07] overflow-y-auto max-h-[70vh] md:max-h-none md:justify-center">
  
  <span className="text-[#B06014] text-xs font-black uppercase tracking-widest">
    {selectedProject.category}
  </span>
  
  <h3 className="text-white text-2xl font-bold mt-2 mb-4">
    {selectedProject.title}
  </h3>
  
  <p className="text-gray-300 text-sm mb-6 leading-relaxed">
    {selectedProject.longDescription}
  </p>

  <div className="flex flex-wrap gap-2 mb-8">
    {selectedProject.tech.map((t, i) => (
      <span key={i} className="text-[12px] border border-[#B06014]/40 text-[#B06014] px-3 py-1 rounded-full bg-[#B06014]/5 font-bold">
        {t}
      </span>
    ))}
  </div>

  {/* Button Section */}
  <div className="mt-auto"> {/* 'mt-auto' pushes button to bottom if space allows */}
    {(selectedProject.category === "Web Development" || selectedProject.category === "App Development") ? (
      <a href={selectedProject.link} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 bg-[#B06014] text-white py-3 rounded-xl hover:bg-white hover:text-black transition-all font-bold text-sm">
        <Github size={18} /> View Project Source
      </a>
    ) : (
      <div className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 text-gray-300 py-3 rounded-xl font-bold text-sm cursor-default">
        <Palette size={18} /> Design Showcase
      </div>
    )}
  </div>
</div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;