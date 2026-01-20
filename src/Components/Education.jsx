import React from "react";
import { Calendar } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      title: "BSE (Software Engineering)",
      institution: "COMSATS Institute of Information and Technology",
      date: "2021 – 2025",
      description:
        "Software Engineering graduate with hands-on training in object-oriented programming, full-stack web development, mobile application development, and software design principles. Academic focus on user-centered design, system modeling, and translating requirements into scalable digital solutions.",
      subjects: [
        "Object-Oriented Programming (OOP)",
        "Data Structures & Algorithms",
        "Web Development (HTML, CSS, JavaScript, React)",
        "Mobile App Development (Android / Flutter)",
        "Database Systems (SQL, NoSQL)",
        "Software Design & Architecture",
        "UI/UX Design Fundamentals",
        "User Flow Diagrams & Wireframing",
        "System Modeling (UML, Use Case Diagrams)",
        "Software Requirement Engineering",
        "Human-Computer Interaction (HCI)",
        "Software Testing & Quality Assurance",
      ],
    },
  ];

  const isSingle = educationData.length === 1;

  const Card = ({ item }) => (
    <div className="bg-[#121212] border border-[#B06014]/20 p-8 rounded-3xl hover:border-[#B06014]/60 transition-all duration-500 shadow-xl hover:-translate-y-2">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
        <h3 className="text-white text-xl md:text-2xl font-bold hover:text-[#B06014] transition-colors">
          {item.title}
        </h3>
        <div className="flex items-center gap-2 text-[#B06014] bg-[#B06014]/10 px-3 py-1 rounded-full border border-[#B06014]/20">
          <Calendar size={14} />
          <span className="text-[10px] font-bold uppercase tracking-wider">
            {item.date}
          </span>
        </div>
      </div>

      {/* Institution */}
      <h4 className="text-gray-400 text-[16px] font-semibold mb-5 flex items-center gap-2">
        <span className="w-4 h-[1px] bg-[#B06014]" />
        {item.institution}
      </h4>

      {/* Description */}
      {item.description && (
        <p className="text-gray-500 text-[16px] leading-relaxed text-justify hover:text-gray-400 transition-colors">
          {item.description}
        </p>
      )}

      {/* Subjects */}
      {Array.isArray(item.subjects) && item.subjects.length > 0 && (
        <div className="mt-6">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-2 h-2 rounded-full bg-[#B06014] shadow-[0_0_10px_#B06014]" />
            <h5 className="text-gray-300 text-sm font-bold tracking-wide uppercase">
              Key Coursework
            </h5>
          </div>

          <div className="flex flex-wrap gap-2">
            {item.subjects.map((sub, i) => (
              <span
                key={i}
                className="text-[12px] text-gray-300 px-3 py-1 rounded-full border border-[#B06014]/25 bg-[#B06014]/10 hover:border-[#B06014]/60 hover:text-white transition"
              >
                {sub}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <section id="education" className="w-full bg-black py-10 px-6 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-[#B06014] text-3xl md:text-4xl font-bold text-center tracking-widest uppercase">
            education
          </h2>
          <div className="w-24 h-1 bg-[#B06014] mt-4 rounded-full shadow-[0_0_10px_#B06014]" />
        </div>

        {/* ✅ SINGLE ITEM: Centered layout (no timeline garbage) */}
        {isSingle ? (
          <div className="flex justify-center">
            <div className="w-full max-w-3xl">
              <Card item={educationData[0]} />
            </div>
          </div>
        ) : (
          /* ✅ MULTI ITEM: Timeline layout */
          <div className="relative border-l-2 border-[#B06014]/20 ml-4 md:ml-0 md:border-l-0">
            {/* Central Line for Desktop */}
            <div className="absolute left-1/2 -translate-x-1/2 h-full w-[1px] bg-gradient-to-b from-[#B06014] via-[#B06014]/10 hidden md:block" />

            <div className="space-y-12">
              {educationData.map((item, index) => (
                <div
                  key={index}
                  className="relative flex flex-col md:flex-row items-center justify-between w-full group"
                >
                  {/* Alternate sides */}
                  <div
                    className={`w-full md:w-[45%] ${
                      index % 2 === 0 ? "md:order-first" : "md:order-last"
                    }`}
                  >
                    <Card item={item} />
                  </div>

                  {/* Central Dot */}
                  <div className="absolute -left-[11px] md:left-1/2 md:-translate-x-1/2 top-10 md:top-1/2 md:-translate-y-1/2 z-20">
                    <div className="w-5 h-5 rounded-full bg-black border-4 border-[#B06014] shadow-[0_0_15px_#B06014]" />
                  </div>

                  {/* Empty space for the other side on desktop */}
                  <div className="hidden md:block md:w-[45%]" />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Education;
