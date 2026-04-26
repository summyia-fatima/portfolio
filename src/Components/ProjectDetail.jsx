import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Target,
  LayoutGrid,
  Cpu,
  Search,
  Lightbulb,
  Pencil,
  Layers,
  Rocket,
} from "lucide-react";
import { projectData } from "./ProjectData";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projectData.find((p) => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  if (!project) {
    return (
      <div className="h-screen flex items-center justify-center text-white">
        <button
          onClick={() => navigate("/")}
          className="text-gray-400 flex items-center gap-2 hover:text-white"
        >
          <ArrowLeft size={16} /> Back
        </button>
      </div>
    );
  }

  const isUIUX = project.category === "UI/UX";
  const isDev = project.category === "Development";

  const handleBack = () => {
    if (window.history.length > 1) navigate(-1);
    else navigate("/");
  };
  const SectionTitle = ({ icon, title }) => (
    <div className="flex items-center gap-3 mb-8 mt-16">
      <div className="w-9 h-9 flex items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300">
        {icon}
      </div>

      <h2 className="text-xl md:text-2xl font-medium text-gray-100 tracking-wide">
        {title}
      </h2>
    </div>
  );

  /* ---------------- UI/UX DESIGN (UNCHANGED) ---------------- */
  if (isUIUX) {
    const remainingBanners = project.assets?.banner?.slice(1) || [];

    const SectionTitle = ({ icon, title }) => (
      <div className="flex items-center gap-4 mb-10">
        <div className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300">
          {icon}
        </div>

        <h2 className="text-2xl md:text-3xl font-medium text-gray-100 tracking-wide">
          {title}
        </h2>
      </div>
    );

    return (
      <div className="bg-[#050505] min-h-screen text-white pb-32">
        {/* HERO */}
        <div className="pt-32 px-6 max-w-6xl mx-auto">
          {/* FIXED BACK BUTTON */}
          <button
            onClick={handleBack}
            className="text-gray-400 flex items-center gap-2 mb-10 hover:text-white"
          >
            <ArrowLeft size={16} /> Back
          </button>
          <div className="flex items-center gap-3">
            <h1 className="text-4xl font-semibold text-white">
              {project.title}
            </h1>
          </div>

          <h3 className="text-[#B06014] mt-6 text-[16px] tracking-widest uppercase">
            Overview
          </h3>
          {/* FIGMA */}
          {project.figma_link && (
            <a
              href={project.figma_link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-green-600 text-white text-sm font-medium hover:bg-green-700 transition"
            >
              Figma Preview ↗
            </a>
          )}
          <p className="mt-3 text-gray-400 max-w-2xl text-lg leading-relaxed">
            {project.overview}
          </p>

            {/* ROLE SECTION */}
            <div className="mt-5 mb-3">
              <h3 className="text-[#B06014] text-[14px] tracking-widest uppercase mb-3">
                Role
              </h3>



              <div className="flex flex-wrap gap-3">
                {project.role?.map((r, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-[14px] rounded-full bg-white/5 text-gray-300 border border-white/10"
                  >
                    {r}
                  </span>
                ))}
              </div>
            </div>
        </div>

           

        {/* FIRST BANNER */}
        <section className="max-w-6xl mx-auto px-6 mt-10 flex justify-center">
          <img
            src={`/${project.assets?.banner?.[0]}`}
            className="w-[80%] rounded-lg border border-white/10"
            alt="Project Banner"
          />
        </section>

        {/* PROBLEM / SOLUTION */}
        <section className="max-w-6xl mx-auto px-6 mt-16">
          <SectionTitle
            icon={<Target size={16} />}
            title="Problem & Solution"
          />

          <div className="border border-white/10 rounded-lg overflow-hidden">
            <div className="grid grid-cols-2 bg-[#B06014]/10 text-gray-200 text-[16px] font-medium">
              <div className="p-4 border-r border-white/10">Problem</div>
              <div className="p-4">Solution</div>
            </div>

            {project.problem_solution?.map((item, i) => (
              <div
                key={i}
                className="grid grid-cols-2 border-t border-white/10"
              >
                <div className="p-4 text-[16px] text-gray-400 border-r border-white/10">
                  {item.problem}
                </div>

                <div className="p-4 text-[16px] text-gray-400">
                  {item.solution}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* UI DESIGN */}
        <section className="max-w-6xl mx-auto px-6 mt-24">
          <SectionTitle icon={<LayoutGrid size={16} />} title="UI Design" />

          <div className="grid md:grid-cols-3 gap-x-4 gap-y-4">
            {project.assets?.ui_images?.map((img, i) => (
              <img
                key={i}
                src={`/${img}`}
                className="w-[80%] mx-auto rounded-lg border border-white/10"
              />
            ))}
          </div>
        </section>

        {/* PROTOTYPING */}
        {project.prototype === true && (
          <section className="max-w-6xl mx-auto px-6 mt-24">
            <SectionTitle icon={<Cpu size={16} />} title="Prototyping" />

            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center gap-4">
                <p className="relative text-lg md:text-xl font-medium text-gray-200 inline-block">
                  Sketch Phase
                  <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#caa06a] rounded-full"></span>
                </p>

                <img
                  src={`/${project.prototyping?.sketch?.[0]}`}
                  className="w-full max-w-[85%] rounded-lg border border-white/10"
                />
              </div>

              <div className="flex flex-col items-center gap-4">
                <p className="relative text-lg md:text-xl font-medium text-gray-200 inline-block">
                  Wireframe
                  <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#caa06a] rounded-full"></span>
                </p>

                <img
                  src={`/${project.prototyping?.wireframe_prototype?.[0]}`}
                  className="w-full max-w-[85%] rounded-lg border border-white/10"
                />
              </div>

              <div className="flex flex-col items-center gap-4">
                <p className="relative text-lg md:text-xl font-medium text-gray-200 inline-block">
                  Final UI
                  <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#caa06a] rounded-full"></span>
                </p>

                <img
                  src={`/${project.prototyping?.final_ui?.[0]}`}
                  className="w-full max-w-[85%] rounded-lg border border-white/10"
                />
              </div>
            </div>
          </section>
        )}

        {project.custom_compare && (
          <section className="max-w-6xl mx-auto px-6 mt-24">
            <SectionTitle icon={<Cpu size={16} />} title="Before vs After" />

            <div className="grid md:grid-cols-2 gap-10 text-center">
              {/* BEFORE */}
              <div className="flex flex-col items-center gap-4">
                <p className="text-lg md:text-xl font-medium text-gray-200">
                  {project.custom_compare.before.heading}
                </p>

                <img
                  src={`/${project.custom_compare.before.img}`}
                  className="w-full max-w-[85%] rounded-lg border border-white/10"
                  alt="Before Design"
                />
              </div>

              {/* AFTER */}
              <div className="flex flex-col items-center gap-4">
                <p className="text-lg md:text-xl font-medium text-gray-200">
                  {project.custom_compare.after.heading}
                </p>

                <img
                  src={`/${project.custom_compare.after.img}`}
                  className="w-full max-w-[85%] rounded-lg border border-white/10"
                  alt="After Design"
                />
              </div>
            </div>
          </section>
        )}

        {/* UX PROCESS */}
        <section className="max-w-6xl mx-auto px-6 mt-24">
          <SectionTitle icon={<Layers size={16} />} title="UX Process" />

          <div className="flex flex-col md:flex-row items-stretch justify-between gap-6">
            <div className="flex-1 p-6 rounded-xl border border-white/10 bg-white/5 flex flex-col items-center text-center gap-4">
              <Search size={20} className="text-blue-300" />
              <h3 className="text-gray-100 text-[18px] font-medium">
                Research
              </h3>
              <p className="text-[16px] text-gray-500">Understanding users</p>
            </div>

            <div className="hidden md:flex items-center text-white/30 text-2xl">
              →
            </div>

            <div className="flex-1 p-6 rounded-xl border border-white/10 bg-white/5 flex flex-col items-center text-center gap-4">
              <Lightbulb size={20} className="text-purple-300" />
              <h3 className="text-gray-100 text-[18px] font-medium">
                Ideation
              </h3>
              <p className="text-[16px] text-gray-500">Generating ideas</p>
            </div>

            <div className="hidden md:flex items-center text-white/30 text-2xl">
              →
            </div>

            <div className="flex-1 p-6 rounded-xl border border-white/10 bg-white/5 flex flex-col items-center text-center gap-4">
              <Pencil size={20} className="text-pink-300" />
              <h3 className="text-gray-100 text-[18px] font-medium">
                Wireframe
              </h3>
              <p className="text-[16px] text-gray-500">Structure planning</p>
            </div>

            <div className="hidden md:flex items-center text-white/30 text-2xl">
              →
            </div>

            <div className="flex-1 p-6 rounded-xl border border-white/10 bg-white/5 flex flex-col items-center text-center gap-4">
              <LayoutGrid size={20} className="text-emerald-300" />
              <h3 className="text-gray-100 text-[18px] font-medium">
                UI Design
              </h3>
              <p className="text-[16px] text-gray-500">Visual system</p>
            </div>

            <div className="hidden md:flex items-center text-white/30 text-2xl">
              →
            </div>

            <div className="flex-1 p-6 rounded-xl border border-white/10 bg-white/5 flex flex-col items-center text-center gap-4">
              <Rocket size={20} className="text-orange-300" />
              <h3 className="text-gray-100 text-[18px] font-medium">Launch</h3>
              <p className="text-[16px] text-gray-500">Final delivery</p>
            </div>
          </div>
        </section>
        {/* SCREEN ENHANCEMENT */}
        <section className="max-w-6xl mx-auto px-6 mt-24">
          <SectionTitle
            icon={<LayoutGrid size={16} />}
            title="Screen Enhancement"
          />

          <div className="space-y-10 flex flex-col items-center">
            {remainingBanners.slice(0, -1).map((img, i) => (
              <img
                key={i}
                src={`/${img}`}
                className="w-[80%] rounded-lg border border-white/10"
                alt=""
              />
            ))}
          </div>
        </section>

        {/* ENHANCEMENTS */}
        <section className="max-w-6xl mx-auto px-6 mt-24">
          <SectionTitle icon={<Target size={16} />} title="Key Enhancements" />

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-5 rounded-lg border border-white/10 bg-white/5">
              <h3 className="text-gray-200 text-[18px] mb-2">UI Improvement</h3>
              <p className="text-[16px]  text-gray-500">
                Better spacing, hierarchy and consistency
              </p>
            </div>

            <div className="p-5 rounded-lg border border-white/10 bg-white/5">
              <h3 className="text-gray-200 text-[18px]  mb-2">UX Flow</h3>
              <p className="text-[16px]  text-gray-500">
                Clear step-by-step structured process
              </p>
            </div>

            <div className="p-5 rounded-lg border border-white/10 bg-white/5">
              <h3 className="text-gray-200 text-[18px] mb-2">Visual System</h3>
              <p className="text-[16px] text-gray-500">
                Consistent colors, icons and layout
              </p>
            </div>
          </div>
        </section>

        {/* FINAL BANNER (NO HEADING) */}
        {project.assets?.banner?.length > 0 && (
          <section className="max-w-6xl mx-auto px-6 mt-16">
            <img
              src={`/${project.assets.banner.at(-1)}`}
              className="w-full rounded-lg border border-white/10"
            />
          </section>
        )}

        {/* THANK YOU */}
        <section className="max-w-6xl mx-auto px-6 mt-28 text-center">
          <div className="border border-white/10 rounded-lg p-10 bg-white/5">
            <h2 className="text-2xl font-semibold text-gray-200 mb-3">
              Thank You
            </h2>

            <p className="text-gray-500 text-sm max-w-xl mx-auto">
              Structured UX thinking, clean UI execution, and product-focused
              design system.
            </p>
          </div>
        </section>
      </div>
    );
  }

  /* ---------------- WEB DEVELOPMENT DESIGN ---------------- */
  if (isDev) {
    return (
      <>
        <div className="bg-[#050505] min-h-screen text-white pb-32">
          {/* HERO */}
          <div className="pt-32 px-6 max-w-6xl mx-auto">
            {/* BACK BUTTON */}
            <button
              onClick={handleBack}
              className="text-gray-400 flex items-center gap-2 mb-6 hover:text-white transition"
            >
              <ArrowLeft size={16} /> Back
            </button>
            {/* APPLICATION TYPE (TOP PRIORITY) */}
            <div className="mt-2 mb-4">
              <span className="px-3 py-1 text-[16px] font-medium rounded-full bg-[#B06014]/20 text-[#B06014] border border-[#B06014]/40">
                {project.application_type}
              </span>
            </div>
            {/* TITLE */}
            <h1 className="text-4xl font-semibold text-white">
              {project.title}
            </h1>


            {/* OVERVIEW SECTION */}
            <div className="mt-4">
              <h3 className="text-[#B06014] text-[14px] tracking-widest uppercase mb-3">
                Overview
              </h3>

           
              <p className="text-gray-400 max-w-3xl text-lg leading-relaxed">
                {project.overview}
              </p>
            </div>

            {/* ROLE SECTION */}
            <div className="mt-5 mb-3">
              <h3 className="text-[#B06014] text-[14px] tracking-widest uppercase mb-3">
                Role
              </h3>



              <div className="flex flex-wrap gap-3">
                {project.role?.map((r, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-[14px] rounded-full bg-white/5 text-gray-300 border border-white/10"
                  >
                    {r}
                  </span>
                ))}
              </div>
            </div>

               {project.github_link && (
                <a
                  href={project.github_link}
                  target="_blank"
                  rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-green-600 text-white text-sm font-medium hover:bg-green-700 transition"
>                  GitHub Repository ↗
                </a>
              )}

          </div>

          {/* HERO BANNER (FIRST IMAGE) */}
          <section className="max-w-6xl mx-auto px-6 mt-10 flex justify-center">
            <img
              src={`/${project.assets?.banner?.[0]}`}
              className="w-[85%] rounded-lg border border-white/10"
            />
          </section>

          {/* FEATURES + DESIGN SYSTEM */}
          <section className="max-w-6xl mx-auto px-6 mt-4 grid md:grid-cols-2 gap-10">
            {/* UI FEATURES */}
            <div>
              <SectionTitle
                icon={<LayoutGrid size={16} />}
                title="UI Features"
              />

              <div className="space-y-3">
                {project.ui_features?.map((f, i) => (
                  <div
                    key={i}
                    className="p-3 border border-white/10 bg-white/5 rounded-lg text-gray-300"
                  >
                    {f}
                  </div>
                ))}
              </div>
            </div>

            {/* DESIGN SYSTEM */}
            <div>
              <SectionTitle icon={<Cpu size={16} />} title="Design System" />

              <div className="space-y-3">
                {project.design_system?.map((d, i) => (
                  <div
                    key={i}
                    className="p-3 border border-white/10 bg-white/5 rounded-lg text-gray-300"
                  >
                    {d}
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section className="max-w-6xl mx-auto px-6 mt-18">
            {/* SECTION TITLE */}
            <SectionTitle icon={<LayoutGrid size={16} />} title="Tools" />

            {/* TOOLS (SUB SECTION INSIDE UI SCREENS) */}
            {project.tools && (
              <div className="mb-10">
                <h3 className="text-[#B06014] text-[14px] tracking-widest uppercase mb-4">
                  Built With
                </h3>

                <div className="flex flex-wrap gap-5">
                  {project.tools.map((tool, i) => (
                    <div
                      key={i}
                      className="flex flex-col items-center justify-center gap-3
                     w-28 h-28 border border-white/10
                     rounded-xl bg-white/5 hover:bg-white/10
                     transition"
                    >
                      <img
                        src={tool.logo}
                        alt={tool.name}
                        className="w-12 h-12 object-contain"
                      />

                      <span className="text-gray-200 text-sm text-center">
                        {tool.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>

          {/* UI SCREENS (MAIN VISUAL SECTION) */}
          <section className="max-w-6xl mx-auto px-6 mt-16">
            <SectionTitle icon={<LayoutGrid size={16} />} title="UI Screens" />

            <div className="space-y-12 flex flex-col items-center">
              {project.assets?.ui_images?.map((img, i) => (
                <img
                  key={i}
                  src={`/${img}`}
                  className="w-[85%] rounded-lg border border-white/10"
                />
              ))}
            </div>
          </section>

          {/* CHALLENGES */}
          <section className="max-w-6xl mx-auto px-6 mt-18">
            <SectionTitle icon={<Target size={16} />} title="Challenges" />

            <div className="grid md:grid-cols-3 gap-6">
              {project.challenges?.map((c, i) => (
                <div
                  key={i}
                  className="p-5 border border-white/10 bg-white/5 rounded-lg text-gray-400"
                >
                  {c}
                </div>
              ))}
            </div>
          </section>

          {/* FINAL BANNER */}
          <section className="max-w-6xl mx-auto px-6 mt-24 flex justify-center">
            <img
              src={`/${project.assets?.banner?.at(-1)}`}
              className="w-full rounded-lg border border-white/10"
            />
          </section>

          {/* THANK YOU */}
          <section className="max-w-6xl mx-auto px-6 mt-28 text-center">
            <div className="border border-white/10 rounded-lg p-10 bg-white/5">
              <h2 className="text-2xl font-semibold text-gray-200 mb-3">
                Thank You
              </h2>

              <p className="text-gray-500 text-sm max-w-xl mx-auto">
                Clean frontend dashboard UI designed for scalable AI email
                automation workflows with structured system thinking.
              </p>
            </div>
          </section>
        </div>
      </>
    );
  }

  return <div className="text-white p-10">Invalid Project Type</div>;
};

export default ProjectDetail;
