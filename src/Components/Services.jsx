import React from "react";
import { Code, Palette, Image } from "lucide-react";

const ServiceCard = ({ title, sub, desc, points, Icon }) => (
  <div className="relative bg-gradient-to-br from-[#1A0F07] to-[#140A04] p-5 rounded-2xl border border-[#B06014]/10 hover:border-[#B06014]/40 transition-all duration-300 shadow-xl hover:shadow-[#B06014]/10 group overflow-hidden">

    {/* Glow */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-[#B06014]/5 blur-2xl"></div>

    {/* Header */}
    <div className="flex justify-between items-start mb-3 relative z-10">

      <div>
        <h3 className="text-[#B06014] text-[23px] font-semibold leading-snug">
          {title}
        </h3>

        <p className="text-white text-[18px] mt-1">
          {sub}
        </p>
      </div>

      <div className="bg-[#B06014]/10 p-2 rounded-lg group-hover:bg-[#B06014]/20 transition">
        <Icon className="text-[#B06014] w-5 h-5" />
      </div>
    </div>

    {/* Capability List */}
    <ul className="text-zinc-400 text-[15px] space-y-1 relative z-10">
      {points.map((p, i) => (
        <li key={i} className="flex gap-2">
          <span className="text-[#B06014]">•</span>
          <span>{p}</span>
        </li>
      ))}
    </ul>

    {/* Bottom Line */}
    <div className="w-0 group-hover:w-full h-[1px] bg-[#B06014]/40 mt-4 transition-all duration-300"></div>
  </div>
);

const Services = () => {
  const services = [
    {
      title: "UI/UX Design",
      sub: "Complete Product Design & User Experience",
      Icon: Palette,
      points: [
        "UI/UX Design (Web & Mobile)",
        "Responsive Design Systems",
        "Visual Hierarchy & Typography",
        "Usability Testing & User Research",
        "Wireframing & Prototyping",
        "User Flows & Journey Mapping",
        "SaaS Product Experience Design"
      ]
    },
    {
      title: "Web Development",
      sub: "Modern Frontend Development",
      Icon: Code,
      points: [
        "React / Next.js Development",
        "Responsive Web Applications",
        "UI Implementation from Figma",
        "Tailwind CSS Styling",
        "API Integration",
        "Performance Optimization"
      ]
    },
    {
      title: "Graphic & Brand Design",
      sub: "Visual Content & Marketing Design",
      Icon: Image,
      points: [
        "Social Media Post Designs",
        "Marketing Banners & Ads",
        "Business Brochures",
        "Event Posters & Flyers",
        "Brand Identity Assets",
        "YouTube Thumbnails",
        "Campaign Visual Content"
      ]
    }
  ];

  return (
    <section id="services" className="w-full bg-black py-0 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-[#B06014] text-4xl font-bold tracking-widest uppercase">
            Services
          </h2>
          <div className="w-24 h-[2px] bg-[#B06014]/70 mt-3 rounded-full"></div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;