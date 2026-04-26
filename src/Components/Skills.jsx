import React from "react";

const SkillIcon = ({ name, icon, special }) => (
  <div className="
    flex flex-col items-center justify-center gap-3
    p-6 rounded-xl
    bg-white/5 border border-white/10
    hover:border-[#B06014]/40
    hover:bg-[#B06014]/5
    transition-all duration-300
  ">

    {/* Icon circle */}
    <div className={`
      w-14 h-14 flex items-center justify-center rounded-full
      transition-all duration-300
      ${special ? "bg-[#B06014]/20" : "bg-white/5"}
    `}>
      <img
        src={icon}
        alt={name}
        className={`w-9 h-9 object-contain ${special ? "invert" : ""}`}
      />
    </div>

    <span className="text-white text-[15px] tracking-wide text-center">
      {name}
    </span>
  </div>
);

const Skills = () => {
const skills = [
  {
    name: "Figma",
    icon: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"
  },
  {
    name: "Adobe XD",
    icon: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Adobe_XD_CC_icon.svg"
  },
  {
    name: "Canva",
    icon: "https://www.vectorlogo.zone/logos/canva/canva-icon.svg"
  },
  {
    name: "Illustrator",
    icon: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg"
  },

  {
    name: "React JS",
    icon: "https://cdn.worldvectorlogo.com/logos/react-2.svg"
  },

  {
    name: "Next JS",
    icon: "https://cdn.worldvectorlogo.com/logos/next-js.svg",
    special: true
  },

  {
    name: "Tailwind CSS",
    icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
  },

  {
    name: "Photoshop",
    icon: "https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg"
  },

  {
    name: "Firebase",
    icon: "https://cdn.worldvectorlogo.com/logos/firebase-1.svg"
  },

  {
    name: "GitHub",
    icon: "https://www.vectorlogo.zone/logos/github/github-tile.svg"
  },

  // ✅ ADDED ELECTRON JS
  {
    name: "Electron JS",
    icon: "https://raw.githubusercontent.com/github/explore/main/topics/electron/electron.png"
  }
];

  return (
    <section id="skills" className="w-full bg-black py-20 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Title */}
        <div className="text-center mb-14">
          <h2 className="text-[#B06014] text-4xl font-bold tracking-widest uppercase">
           Tools
          </h2>
          <div className="w-20 h-1 bg-[#B06014] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Grid */}
        <div className="
          grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5
          gap-6
        ">
          {skills.map((skill, index) => (
            <SkillIcon key={index} {...skill} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;