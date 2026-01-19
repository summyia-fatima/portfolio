import React from 'react';

const SkillCard = ({ name, level, icon }) => (
                  <div className="bg-[#1A0F07] p-6 my-3 rounded-lg border border-[#B06014]/10 hover:border-[#B06014]/40 transition-all shadow-xl">
    <div className="flex justify-between items-center mb-2">
      <div className="flex items-center gap-3">
        {/* Yahan aapka icon image show hoga */}
        <img src={icon} alt={name} className="w-10 h-10 object-contain" />
        <span className="text-white font-semibold text-[16px]">{name}</span>
      </div>
      <span className="text-white font-bold text-sm">{level}</span>
    </div>
    <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden mb-3">
      <div className="bg-[#B06014] h-full rounded-full" style={{ width: level }}></div>
    </div>
   
  </div>
);

const CategoryBox = ({ title, skills }) => (
  <div className="bg-[#2A1B10]/40 p-6 rounded-2xl border border-[#B06014]/20 shadow-2xl">
    <h3 className="text-white text-lg font-bold mb-6 text-center border-b border-[#B06014]/30 pb-3 uppercase tracking-wider">
      {title}
    </h3>
    {skills.map((skill, index) => (
      <SkillCard key={index} {...skill} />
    ))}
  </div>
);

const Skills = () => {
  const design = [
  { name: "Figma", level: "95%", icon: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" },
{ 
  name: "Canva", 
  level: "90%", 
  icon: "https://www.vectorlogo.zone/logos/canva/canva-icon.svg" 
},    { name: "Illustrator", level: "55%", icon: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg" },
    { name: "Adobe XD", level: "75%", icon: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Adobe_XD_CC_icon.svg" },
  ];

  const frontend = [
    { name: "Flutter", level: "80%", icon: "https://cdn.worldvectorlogo.com/logos/flutter.svg" },
    { name: "React JS", level: "90%", icon: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
    { name: "Html 5 / CSS 3 / JS", level: "90%", icon: "https://cdn.worldvectorlogo.com/logos/html-1.svg" },
    { 
      name: "Tailwind CSS", 
      level: "90%", 
      icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" 
    },
  ];

  const backend = [
    { name: "Firebase", level: "85%", icon: "https://cdn.worldvectorlogo.com/logos/firebase-1.svg" },
{ 
  name: "PHP", 
  level: "95%", 
  icon: "https://www.vectorlogo.zone/logos/php/php-icon.svg" 
}  ];

  const management = [
{ 
  name: "GitHub", 
  level: "90%", 
  icon: "https://www.vectorlogo.zone/logos/github/github-tile.svg" 
},{ 
  name: "Trello", 
  level: "80%", 
  icon: "https://www.vectorlogo.zone/logos/trello/trello-official.svg" 
}  ];

  return (
    <section id="skills" className="w-full bg-black my-22  px-6 font-sans">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-20">
            <h2 className="text-[#B06014] text-3xl md:text-4xl font-bold  text-center tracking-widest uppercase">
          Skills
        </h2>
                  <div className="w-24 h-1 bg-[#B06014] mt-4 rounded-full shadow-[0_0_10px_#B06014]"></div>

        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <CategoryBox title="Design & Prototyping" skills={design} />
          <CategoryBox title="Frontend" skills={frontend} />
          <CategoryBox title="Backend" skills={backend} />
          <CategoryBox title="Project & Version Control Management" skills={management} />
        </div>
      </div>
    </section>
  );
};

export default Skills; // Yeh line bohot zaroori hai