// src/data/ProjectData.js

export const projectData = [

  // ui ux project 
  // notepad 
{
  id: 1,
  title: "Notepad App Re-Design",
  category: "UI/UX",
  role: ["UI/UX Designer", "UX Researcher"],
  timeline: {
    start: "2025-06-09",
    end: "2025-09-15"
  },

  tools_used: [
    "Figma",
    "FigJam",
    "Sketch",
    "Google Forms",
    "Canva",
  ],

  overview:
    "A complete re-design of a minimal notepad application focused on improving readability, faster note creation, better organization, and a distraction-free writing experience.",

  problem_solution: [
    {
      problem: "Users struggle with disorganized notes and poor categorization in the existing app.",
      solution:
        "Introduced folder-based structure with tags and quick filters for better note organization."
    },
    {
      problem: "Writing interface is cluttered and distracts users from note-taking.",
      solution:
        "Designed a distraction-free editor with minimal UI and focus mode."
    },
    {
      problem: "Difficulty in quickly creating and accessing notes.",
      solution:
        "Added floating action button and quick-access recent notes section."
    },
    {
      problem: "Poor readability due to weak typography and spacing.",
      solution:
        "Improved typography hierarchy, spacing system, and contrast for better reading comfort."
    }
  ],

prototype:true,

  prototyping: {
    sketch: [
      "notepad/s.jpeg"
    ],

    wireframe_prototype: [
      "notepad/p.png"
    ],

    final_ui: [
      "notepad/s1.png"
    ]
  },

  lesson_learned: [
    "Minimal interfaces require more thinking, not less design effort.",
    "Typography hierarchy directly impacts usability in note-taking apps.",
    "Reducing friction in note creation increases user engagement.",
    "Clarity in structure is more important than visual decoration."
  ],

  figma_link: "https://www.figma.com/design/wMTk2VxUBILWR1i2ZmyF8w/NotePad-Task?node-id=0-1&t=3YPDJAwlreeITrkF-1",

  assets: {
    banner: [
      "notepad/b1.png",
      "notepad/b2.png",
      "notepad/b3.png",
      "notepad/b4.png",
      "notepad/b5.png"
    ],
    ui_images: [
      "notepad/s1.png",
      "notepad/s2.png",
      "notepad/s3.png"
    ]
  },

  tech_stack: [
    "Figma",
    "UX Research",
    "Mobile UI Design",
    "Information Architecture"
  ]
},

// cards 

{
  id: 2,
  title: "Cards Website Design",
  category: "UI/UX",
  role: ["UI/UX Designer", "UX Researcher"],
  timeline: {
    start: "2025-06-09",
    end: "2025-09-15"
  },

  tools_used: [
    "Figma",
    "FigJam",
    "Sketch",
    "Google Forms",
    "Canva",
  ],

  overview:
    "A modern collectible cards marketplace website designed to enhance browsing, discovery, and trading experience with a strong visual-first interface and smooth user flow.",

  problem_solution: [
    {
      problem:
        "Users struggle to quickly find relevant cards due to poor filtering and weak categorization.",
      solution:
        "Introduced advanced filtering system based on rarity, type, price, and category for faster discovery."
    },
    {
      problem:
        "Card browsing experience lacks visual impact and feels cluttered.",
      solution:
        "Designed a clean, visual-first grid layout optimized for high-quality card previews."
    },
    {
      problem:
        "Card details are not clear enough for decision making before purchase.",
      solution:
        "Created structured card detail pages with high-resolution previews, stats, and clear pricing info."
    },
    {
      problem:
        "Buying and selling flow is too complex and slow.",
      solution:
        "Simplified marketplace flow with faster listing, checkout, and trading actions."
    }
  ],
prototype:true,
  prototyping: {
    sketch: [
      "cards/s.jpeg"
    ],

    wireframe_prototype: [
      "cards/p.png"
    ],

    final_ui: [
      "cards/s1.png"
    ]
  },

  lesson_learned: [
    "Visual hierarchy is critical in marketplaces where products are image-driven.",
    "Filtering systems directly define user satisfaction in large catalogs.",
    "Clear card detail structure improves conversion decisions.",
    "Reducing steps in trading flow increases user engagement significantly."
  ],

  figma_link: "https://www.figma.com/design/itQHFSzNz5cWMVhMOIbgkQ/ProxySmith-Website-Design?node-id=0-1&t=qyE4WeSdMO0h5o1s-1",

  assets: {
    banner: [
      "cards/b1.png",
      "cards/b2.png",
      "cards/b3.png",  
        "cards/b4.png"

    ],
    ui_images: [
      "cards/s1.png",
      "cards/s2.png",
      "cards/s3.png"
    ]
  },

  tech_stack: [
    "Figma",
    "UX Research",
    "E-commerce UI Design",
    "Information Architecture",
    "Design Systems"
  ]
},

// bulk buy me landing page project 

{
  id: 3,
  title: "BulkBuyMe Multi-Service Platform Redesign",
  category: "UI/UX",
  role: ["UI Designer"],

  timeline: {
    start: "2025-06-09",
    end: "2025-09-15"
  },

  tools_used: [
    "Figma",
    "FigJam",
    "Sketch",
    "Google Forms",
    "Canva",
  ],

  /* ---------------- OVERVIEW ---------------- */
  overview:
    "BulkBuyMe is a multi-service platform offering restaurants, salons, retail, and home services in one place. The redesign focuses on improving service discovery, visual hierarchy, and overall user experience by transforming a cluttered interface into a clean, structured, and engaging platform.",

  /* ---------------- WHAT IS BULKBUYME ---------------- */
  about:
    "BulkBuyMe allows users to explore and purchase deals across multiple service categories including food, beauty, retail, and home services. The platform combines convenience with savings, enabling users to discover offers and businesses in a single unified experience.",

  /* ---------------- PROBLEM / SOLUTION ---------------- */
  problem_solution: [
    {
      problem:
        "The homepage lacked clear hierarchy, making it difficult for users to understand available services quickly.",
      solution:
        "Redesigned the layout with structured sections and strong headings to improve scanning and navigation."
    },
    {
      problem:
        "Categories were visually weak and failed to attract user attention.",
      solution:
        "Introduced modern card-based category UI with strong imagery and consistent styling."
    },
    {
      problem:
        "Deals, categories, and services were mixed together, creating a cluttered experience.",
      solution:
        "Separated content into distinct sections like Featured Deals, Categories, and Services."
    },
    {
      problem:
        "The UI lacked consistency in spacing, typography, and color usage.",
      solution:
        "Applied a clean design system with consistent spacing, color palette, and typography."
    }
  ],

  /* ---------------- PROTOTYPING ---------------- */
  prototyping: {
    prototype: true,

    sketch: [
      "bulkbuyme/sketch.png"
    ],

    wireframe_prototype: [
      "bulkbuyme/wireframe.png"
    ],


    final_ui: [
      "bulkbuyme/final.png"
    ]
  },

  /* ---------------- BEFORE / AFTER ---------------- */
  custom_compare: {
    before: {
      heading: "Before – Cluttered & Weak Hierarchy",
      img: "bulkbuyme/before.png"
    },
    after: {
      heading: "After – Clean & Structured Experience",
      img: "bulkbuyme/s1.png"
    }
  },

  /* ---------------- LESSONS ---------------- */
  lesson_learned: [
    "Clear visual hierarchy is essential in multi-service platforms.",
    "Strong category visuals improve discoverability and engagement.",
    "Separating content reduces cognitive overload.",
    "Consistent design systems build trust and usability."
  ],

  /* ---------------- FIGMA ---------------- */
  figma_link:
    "https://www.figma.com/design/jrQLRHyd5KChSp3J16MvOb/bulk-buy-me?node-id=28-200&t=gK2e2BuaOquduith-1",

  /* ---------------- ASSETS ---------------- */
  assets: {
    banner: [
      "bulkbuyme/b1.png",
      "bulkbuyme/b2.png",
      "bulkbuyme/b3.png"
    ],

    ui_images: [
          "bulkbuyme/s2.png",
      "bulkbuyme/s3.png",
            "bulkbuyme/s4.png",

      

    ]
  },

  /* ---------------- TECH STACK ---------------- */
  tech_stack: [
    "Figma",
    "UX Research",
    "Information Architecture",
    "Design Systems",
    "E-commerce UX"
  ]
},

// skylarks project

{
  id: 4,
  title: "Skylarks IT Solutions Website Redesign (Homepage)",
  category: "UI/UX",
  role: ["UI/UX Designer", "UX Researcher"],

  timeline: {
    start: "2025-06-09",
    end: "2025-09-15"
  },

  tools_used: [
    "Figma",
    "FigJam",
    "Google Forms",
    "Miro",
    "Zoom"
  ],

  overview:
    "A complete homepage redesign for Skylarks IT Solutions focused on improving clarity, trust, and conversion. The goal was to modernize the visual system, establish a consistent brand identity aligned with the company’s purple logo system, and restructure content for enterprise users.",

  problem_solution: [
    {
      problem:
        "The homepage lacked a clear value proposition, making it difficult for users to immediately understand the company’s core services.",
      solution:
        "Redesigned the hero section with a clear headline, service positioning, and focused CTA to communicate value within seconds."
    },
    {
      problem:
        "The previous layout had inconsistent brand application and did not align with the purple identity used in the logo.",
      solution:
        "Introduced a consistent purple-based visual system across UI components to strengthen brand recognition and create a unified identity experience."
    },
    {
      problem:
        "Information was scattered, reducing trust and making the page feel unstructured.",
      solution:
        "Rebuilt the information architecture with clearly defined sections for services, credibility signals, and business highlights."
    },
    {
      problem:
        "Weak visual hierarchy made it difficult for users to follow a clear conversion path.",
      solution:
        "Implemented a structured layout system with improved spacing, typography scaling, and prioritized content flow."
    },
    {
      problem:
        "The design felt outdated compared to modern IT service competitors.",
      solution:
        "Applied a modern enterprise-grade UI system with clean components, consistent spacing, and improved readability."
    }
  ],

  custom_compare: {
    before: {
      heading: "Before – Inconsistent Branding & Unstructured Homepage Experience",
      img: "skylarks/before.png"
    },
    after: {
      heading: "After – Purple-Aligned Brand Identity with Structured Conversion Flow",
      img: "skylarks/s1.png"
    }
  },

  prototype: false,

  assets: {
    banner: [
      "skylarks/b1.png",
      "skylarks/b2.png",
      "skylarks/b3.png",
      "skylarks/b4.png",
            "skylarks/b5.png"

    ],
    ui_images: [
      "skylarks/s1.png",
      "skylarks/s2.png",
      "skylarks/s3.png"
    ]
  },

    figma_link:
"https://www.figma.com/design/zbjMBKa1hEXeiGVHkPU365/Skylarks-It-Solution?node-id=0-1&t=aBJYINZp97pe83DP-1",
  lesson_learned: [
    "Brand consistency is not optional in enterprise UI — it directly impacts trust.",
    "A strong information hierarchy improves conversion more than visual decoration.",
    "Homepage design should prioritize clarity of message over aesthetic complexity.",
    "Color systems must align with brand identity to maintain recognition and credibility."
  ],

  tech_stack: [
    "Figma",
    "UX Research",
    "Website Redesign",
    "Information Architecture",
    "Design Systems",
    "UI Strategy"
  ]
}

,

// bioprimeusa project

{
  id: 5,
  title: "BioprimeUSA Website Redesign (Homepage)",
  category: "UI/UX",
  role: ["UI/UX Designer", "UX Researcher"],

  timeline: {
    start: "2025-06-09",
    end: "2025-09-15"
  },

  tools_used: [
   "Figma",
    "FigJam",
    "Sketch",
    "Google Forms",
    "Canva",
  ],

  overview:
    "A complete homepage redesign for BioprimeUSA focused on improving clarity, trust, and product credibility. The goal was to modernize the visual system, enhance scientific brand perception, and restructure content for a health and biotech-focused audience.",

  problem_solution: [
    {
      problem:
        "The homepage did not clearly communicate the company’s scientific credibility and product purpose.",
      solution:
        "Redesigned the hero section with a strong value-driven message focused on biotechnology trust and product clarity."
    },
    {
      problem:
        "The visual design lacked a professional scientific identity, reducing brand authority.",
      solution:
        "Introduced a clean, medical-grade visual system with structured layout and trust-oriented design language."
    },
    {
      problem:
        "Information was not well organized, making it difficult for users to understand products and benefits quickly.",
      solution:
        "Rebuilt the information hierarchy to clearly separate product benefits, science backing, and company credibility."
    },
    {
      problem:
        "The conversion flow was unclear, with weak guidance toward product exploration or inquiry.",
      solution:
        "Improved CTA placement and user flow to guide visitors toward product details and contact actions."
    },
    {
      problem:
        "The design felt outdated compared to modern biotech and supplement industry standards.",
      solution:
        "Applied a modern, minimal, and trust-focused UI system aligned with health and science industry expectations."
    }
  ],

  custom_compare: {
    before: {
      heading: "Before – Unstructured Layout with Weak Scientific Branding",
      img: "bioprimeusa/before.png"
    },
    after: {
      heading: "After – Clean Medical-Grade UI with Strong Trust & Product Focus",
      img: "bioprimeusa/s1.png"
    }
  },

  prototype: false,

  assets: {
    banner: [
      "bioprimeusa/b1.png",
      "bioprimeusa/b2.png",
      "bioprimeusa/b3.png",
    
    ],
    ui_images: [
      "bioprimeusa/s1.png",
      "bioprimeusa/s2.png",
      "bioprimeusa/s3.png"
    ]
  },

  figma_link: "https://www.figma.com/design/7g8ZOjtO0cavKByaaAOZsT/Code-trail-developers?node-id=0-1&t=HORmfu73PfLuiLbD-1",

  lesson_learned: [
    "Health and biotech websites depend heavily on trust-driven UI decisions.",
    "Clarity in product communication is more important than decorative visuals.",
    "Strong hierarchy directly impacts user confidence in scientific products.",
    "Minimal, structured UI increases perceived credibility in medical brands."
  ],

  tech_stack: [
    "Figma",
    "UX Research",
    "Website Redesign",
    "Information Architecture",
    "Design Systems",
    "UI Strategy"
  ]
}
,

// cow project 
{
  id: 6,
  title: "Smart Dairy – Livestock Management Mobile App",
  category: "UI/UX",
  role: ["UI Designer", "UX Researcher"],

  timeline: {
    start: "2025-06-09",
    end: "2025-09-15"
  },

  tools_used: [
    "Figma",
    "FigJam",
    "Sketch",
    "Google Forms",
    "Canva",
  ],

  overview:
    "A livestock management mobile application designed for farmers to monitor cow health, detect diseases, identify breeds, and manage daily farming activities with a simple and accessible interface.",

  problem_solution: [
    {
      problem:
        "Farmers struggle to identify cow diseases early due to lack of accessible tools.",
      solution:
        "Designed an AI-based disease diagnosis feature using image input for quick detection and guidance."
    },
    {
      problem:
        "Tracking livestock health, vaccination, and feeding schedules is often manual and inconsistent.",
      solution:
        "Introduced notes, reminders, and notifications system for medication, feeding, and health tracking."
    },
    {
      problem:
        "Farmers have difficulty identifying cow breeds and understanding their characteristics.",
      solution:
        "Built a breed classification feature with image recognition and detailed breed information."
    },
    {
      problem:
        "Existing apps are complex and not user-friendly for non-technical farmers.",
      solution:
        "Designed a simple, minimal, and language-friendly UI with clear navigation and visual guidance."
    }
  ],

  prototype: true,

  prototyping: {
    sketch: [
      "cow/s.jpeg"
    ],

    wireframe_prototype: [
      "cow/p.png"
    ],

    final_ui: [
      "cow/s5.png"
    ]
  },

  lesson_learned: [
    "Simplicity is critical when designing for non-technical users like farmers.",
    "Visual-based features (image detection) significantly improve usability.",
    "Clear navigation and minimal UI reduce confusion in utility apps.",
    "Localized language support increases accessibility and adoption."
  ],

  figma_link: "https://www.figma.com/design/UdcvrUrnduV6EM7OLGYPrV/Cow-Proj?node-id=191-40&t=XK4DmVQfDSeCB3qt-1",

  assets: {
    banner: [
      "cow/b1.png",
      "cow/b2.png",
      "cow/b3.png",
    ],
    ui_images: [
      "cow/s1.png",
      "cow/s2.png",
      "cow/s3.png",
        "cow/s4.png",
          "cow/s5.png",
          "cow/s6.png",
          "cow/s7.png",
          "cow/s8.png",
                    "cow/s9.png",

    ]
  },

  tech_stack: [
    "Figma",
    "UX Research",
    "Mobile App Design",
    "AI-assisted UX",
    "Information Architecture",
    "Design Systems"
  ]
},

// ............................... 

//  development project


// ai gmail assistent  project 

{
  id: 99,
  title: "AI Gmail Automation Desktop Application",
  category: "Development",

  application_type: "Desktop Application", // ✅ NEW FIELD (important)

  role: ["Frontend Developer", "UI Designer"],

  github_link: "https://github.com/summyia-fatima/AI-Gmail-Automation-Desktop-Application",

  overview:
    "A frontend-only dashboard UI designed for a desktop-based AI Gmail automation system. Built with React and Tailwind CSS, the interface focuses on visualizing email workflows such as labeling, drafting, follow-ups, and contact management using structured UI components and static data simulation.",

  tools: [{
     name: "React JS",
  logo: "https://cdn.worldvectorlogo.com/logos/react-2.svg"
},
{
  name: "Tailwind CSS",
  logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
},
{
  name: "Electron JS",
  logo: "https://raw.githubusercontent.com/github/explore/main/topics/electron/electron.png"
}  ],

  ui_features: [
    "Dashboard layout for email automation workflows",
    "Email table UI system",
    "AI suggestion cards (frontend only)",
    "Bulk action interface design",
    "Progress/status UI components (mock data)",
    "Multi-screen dashboard structure"
  ],

  design_system: [
    "Reusable React components",
    "Dark SaaS dashboard UI",
    "Consistent spacing system",
    "Card-based layout structure",
    "Desktop-first responsive design"
  ],

  screens: [
    "Account selection UI",
    "Label suggestions dashboard UI",
    "Draft preview UI",
    "Follow-up screen UI",
    "Contacts management UI",
    "Bulk campaign UI layout"
  ],

  challenges: [
    "Designing complex multi-module dashboard without backend",
    "Structuring scalable UI system",
    "Maintaining consistency across multiple screens",
    "Simulating real-world SaaS behavior using static data"
  ],

   assets: {
    banner: [
      "email/b1.jpg",
      "email/b3.png",
    

    ],
    ui_images: [
      "email/s1.png",
      "email/s2.png",
            "email/b2.png",

      "email/s3.png",
       "email/s4.png" ,
      "email/s5.png"
    ]
  },
}
,

// Qmulate project

{
  id: 98,
  title: "Qmulate (Company Website) - Frontend Modernization",
  category: "Development",

  application_type: "Web Application",

  role: ["Frontend Developer"],

github_link: "https://github.com/summyia-fatima/gulb-next",
  overview:
    "Frontend modernization project where an outdated Gulp-based static website was migrated into a modern Next.js architecture to improve performance, scalability, and SEO optimization.",

  longDescription: [
    {
      type: "main",
      content:
        "This project focuses on upgrading a legacy frontend system into a modern React-based Next.js architecture with better structure, performance, and maintainability."
    },
    {
      type: "heading",
      content: "Process & Results"
    },
    {
      type: "bullet",
      content: "Migrated static HTML and Gulp workflow to Next.js."
    },
    {
      type: "bullet",
      content: "Implemented server-side rendering for improved SEO."
    },
    {
      type: "bullet",
      content: "Optimized page load performance."
    },
    {
      type: "bullet",
      content: "Improved development workflow and component structure."
    }
  ],

  // 🔥 NEW SECTION 1
  ui_features: [
    "Modern corporate landing page UI",
    "Responsive hero section with CTA layout",
    "Service-based content structure",
    "Reusable UI components system",
    "SEO-optimized layout structure",
    "Performance-focused frontend design"
  ],

  // 🔥 NEW SECTION 2
  design_system: [
    "Component-based architecture using React",
    "Utility-first styling with Tailwind CSS",
    "Consistent spacing and typography scale",
    "Reusable section blocks for scalability",
    "Mobile-first responsive design approach",
    "Clean grid-based layout system"
  ],

  tools: [
    {
      name: "Next JS",
      logo: "https://cdn.worldvectorlogo.com/logos/next-js.svg"
    },
    {
      name: "Tailwind CSS",
      logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
    },
    {
      name: "React JS",
      logo: "https://cdn.worldvectorlogo.com/logos/react-2.svg"
    }
  ],

  tech: ["Next JS", "Tailwind CSS", "Frontend Modernization"],

  assets: {
    banner: [
      "qmulate/b1.jpg",
      "qmulate/b2.png"
    ],

    ui_images: [
      "qmulate/s1.jpg",
      "qmulate/s2.jpg",
      "qmulate/s3.jpg",
      "qmulate/s4.jpg",
      "qmulate/s5.jpg",
      "qmulate/s6.jpg",
      "qmulate/s7.jpg"
    ]
  }
}


  
// correct 
 
// // correct 
//   {
//     id: 2,
//     title: "Dollar Store: E-Commerce Marketplace UX",
//     category: "UI/UX",
//     description:
//       "A modern digital marketplace interface optimized for fast browsing, quick product discovery, and seamless purchasing experiences.",
//     longDescription: [
//       {
//         type: "main",
//         content:
//           "Dollar Store Marketplace UX redesign focuses on improving the digital shopping journey by reducing friction during product discovery and checkout. The interface was optimized for mobile-first retail users.",
//       },
//       { type: "heading", content: "Key Solutions" },
//       {
//         type: "bullet",
//         content: "Micro-interactions enhancing user engagement.",
//       },
//       {
//         type: "bullet",
//         content: "Advanced filtering system for faster product search.",
//       },
//       {
//         type: "bullet",
//         content: "Dedicated bulk purchase flow for wholesale customers.",
//       },
//       { type: "bullet", content: "Optimized mobile shopping interface." },
//     ],
//     images: ["portfolio thumbnail template  (5).png","4.png","ml.png", "va.png", "re.png"],
//     link: "#",
//     tech: ["Figma", "E-commerce UX", "Mobile UI"],
//   },
//  {
//     id: 1,
//     title: "Skylarks IT: Corporate Tech Solution UI",
//     category: "UI/UX",
//     description:
//       "A modern corporate website design created to strengthen Skylarks' digital identity and improve B2B lead conversion.",
//     longDescription: [
//       {
//         type: "main",
//         content:
//           "This project focuses on designing a professional corporate website experience that communicates technical expertise and builds trust with enterprise clients. The layout prioritizes clear service presentation and strategic call-to-action placements.",
//       },
//       { type: "heading", content: "Core Focus" },
//       {
//         type: "bullet",
//         content:
//           "Conversion-oriented layout designed to capture qualified leads.",
//       },
//       {
//         type: "bullet",
//         content:
//           "Interactive service sections highlighting company capabilities.",
//       },
//       {
//         type: "bullet",
//         content:
//           "Premium dark-mode design aesthetic with modern UI components.",
//       },
//       {
//         type: "bullet",
//         content: "Scalable design system allowing future expansion.",
//       },
//     ],
//     images: ["portfolio thumbnail template  (3).png","portfolio thumbnail template  (4).png","sss.png", "yyf.png", "ll.png"],
//     link: "#",
//     tech: ["Figma", "Web Design", "Corporate Branding"],
//   },
// // correct 

//   {
//     id: 3,
//     title: "Energy Card: High-Performance Landing Page",
//     category: "UI/UX",
//     description: "A dynamic and energetic landing page designed for a revolutionary energy supplement brand.",
//     longDescription: [
//       { type: "main", content: "This project showcases a bold, red-themed aesthetic to match the high-energy nature of the product. The focus was on creating a fast-paced, conversion-friendly flow for 'Energy Card' users." },
//       { type: "heading", content: "Key Highlights" },
//       { type: "bullet", content: "Dynamic 'Blend Formula' section with interactive ingredient highlights." },
//       { type: "bullet", content: "Community-focused social proof section with integrated video testimonials." },
//       { type: "bullet", content: "Custom step-by-step usage guide with clean iconography." }
//     ],
//     images: ["portfolio thumbnail template  (2).jpg","portfolio thumbnail template  (13).png","jnj.jpg"], // Aap apni array yahan update kar lein
//     link: "#",
//     tech: ["Figma", "React", "Tailwind CSS", "Brand Identity"]
//   },

// // correct 
//   {
//     id: 4,
//     title: "BulkBuyMe: Multi-Vendor Marketplace",
//     category: "UI/UX",
//     description: "A comprehensive B2B and B2C marketplace layout focusing on bulk deals and local services.",
//     longDescription: [
//       { type: "main", content: "BulkBuyMe is designed to handle multiple categories like Restaurants, Retails, and Services in a clean, organized grid system that emphasizes accessibility and large-scale browsing." },
//       { type: "heading", content: "Features" },
//       { type: "bullet", content: "Multi-category navigation for seamless browsing between retail and services." },
//       { type: "bullet", content: "Strategic 'Super Deal' hero section for high-conversion promotions." },
//       { type: "bullet", content: "Responsive card-based UI for better mobile and desktop consistency." }
//     ],
//     images: ["portfolio thumbnail template .jpg","portfolio thumbnail template  (12).png","soup.png"],
//     link: "#",
//     tech: ["Next.js", "Figma", "E-commerce UI", "Responsive Design"]
//   },
// // correct 

//   {
//     id: 5,
//     title: "Bio Prime: Pharmaceutical E-commerce",
//     category: "UI/UX",
//     description: "A professional and clean healthcare-focused interface for research-grade peptides.",
//     longDescription: [
//       { type: "main", content: "Designed with a clinical and trustworthy green-themed palette, this project focuses on clarity, scientific data presentation, and secure shopping experiences for laboratory products." },
//       { type: "heading", content: "Design Strategy" },
//       { type: "bullet", content: "Detailed FAQ and knowledge hub layout for high-stakes product education." },
//       { type: "bullet", content: "Product grid with clear concentration and dosage labeling." },
//       { type: "bullet", content: "Trust-building 'Why Choose Us' section with custom iconography." }
//     ],
//     images: ["portfolio thumbnail template  (7).png","portfolio thumbnail template  (8).png","green.jpg"
//     ],
//     link: "#",
//     tech: ["Figma", "Web Design", "Medical UI", "Conversion Optimization"]
//   },
// // correct 

//   
//   {
//     id: 7,
//     title: "AI Email Assistant: Intelligent UX Dashboard",
//     category: "UI/UX",
//     description:
//       "A smart dashboard interface designed to manage and automate large volumes of email communication.",
//     longDescription: [
//       {
//         type: "main",
//         content:
//           "The AI Email Assistant dashboard is designed to help users efficiently manage email communication through automation and intelligent categorization.",
//       },
//       { type: "heading", content: "Smart Features" },
//       { type: "bullet", content: "AI-powered email categorization system." },
//       { type: "bullet", content: "Priority inbox management." },
//       { type: "bullet", content: "Contact extraction from email signatures." },
//       {
//         type: "bullet",
//         content: "Simplified interface reducing inbox overload.",
//       },
//     ],
//     images: ["portfolio thumbnail template  (1).jpg","lp2.jpg", "apa.png", "si.png", "si2.png", "ee.png", "ee2.png"],
//     link: "#",
//     tech: ["Figma", "AI Suggestion UX", "Dashboard Design"],
//   },

//   {
//     id: 8,
//     title: "AI Email Assistant: React Desktop Application",
//     category: "Web Development",
//     description:
//       "A desktop application built using React and Electron to automate email management workflows.",
//     longDescription: [
//       {
//         type: "main",
//         content:
//           "This project converts the AI Email Assistant system into a desktop application using Electron, allowing users to manage emails with AI-powered automation.",
//       },
//       { type: "heading", content: "Technical Implementation" },
//       {
//         type: "bullet",
//         content:
//           "Electron framework used to convert React app into desktop software.",
//       },
//       { type: "bullet", content: "Integration with Gmail and Outlook APIs." },
//       {
//         type: "bullet",
//         content: "Tailwind CSS used for responsive UI design.",
//       },
//       { type: "bullet", content: "Optimized performance for desktop usage." },
//     ],
//     images: ["lg.jpg", "apa.png", "si.png", "si2.png", "ee.png", "ee2.png"],
//     link: "https://github.com/summyia-fatima/ai-email-assistant",
//     tech: ["React JS", "Tailwind CSS", "Electron framework"],
//   },

//   {
//     id: 9,
//     title: "Anjoma Zone: Secure Rental Checkout UX",
//     category: "UI/UX",
//     description:
//       "A multi-step rental checkout experience designed to simplify booking flows while maintaining transaction security.",
//     longDescription: [
//       {
//         type: "main",
//         content:
//           "Anjoma Zone focuses on designing a seamless rental booking experience for users looking to reserve products or services online. The checkout process was simplified to reduce user friction.",
//       },
//       { type: "heading", content: "Key Solutions" },
//       {
//         type: "bullet",
//         content: "Dynamic price calculations during checkout.",
//       },
//       {
//         type: "bullet",
//         content: "Highly responsive layout using Auto-Layout.",
//       },
//       { type: "bullet", content: "Step-by-step booking flow." },
//       {
//         type: "bullet",
//         content: "Improved transaction clarity and trust signals.",
//       },
//     ],
//     images: ["portfolio thumbnail template  (6).png", "p1.png", "p12.png", "p2.png", "p21.png"],
//     link: "#",
//     tech: ["Figma", "Auto-Layout 5.0", "Design Systems"],
//   },

//   {
//     id: 10,
//     title: "Dollar Store: Category-Focused Print Design",
//     category: "Marketing Design",
//     description:
//       "A print-ready tri-fold brochure created to visually organize retail product categories.",
//     longDescription: [
//       {
//         type: "main",
//         content:
//           "This print design project organizes retail product categories into a visually structured brochure format that allows customers to quickly browse store offerings.",
//       },
//       { type: "heading", content: "Design Highlights" },
//       {
//         type: "bullet",
//         content: "Clear category segmentation for product types.",
//       },
//       {
//         type: "bullet",
//         content: "High quality product imagery for visual appeal.",
//       },
//       {
//         type: "bullet",
//         content: "CMYK optimized layout for print production.",
//       },
//       { type: "bullet", content: "Balanced typography improving readability." },
//     ],
//     images: ["nn.jpg", "n2.png", "n3.png", "n4.png", "n5.png"],
//     link: "#",
//     tech: ["Figma", "Graphic Design", "Print Media"],
//   },

//   {
//     id: 11,
//     title: "Mamma’s Noodles: Mascot & Visual Identity",
//     category: "Marketing Design",
//     description:
//       "A playful brand identity system centered around a custom character mascot.",
//     longDescription: [
//       {
//         type: "main",
//         content:
//           "This branding project develops a memorable brand identity for Mamma's Noodles using a custom illustrated mascot. The character helps build emotional brand connection.",
//       },
//       { type: "heading", content: "Creative Process" },
//       {
//         type: "bullet",
//         content: "Custom mascot illustration designed for brand recognition.",
//       },
//       { type: "bullet", content: "Bright playful color palette." },
//       {
//         type: "bullet",
//         content: "Packaging visuals integrated with mascot identity.",
//       },
//       {
//         type: "bullet",
//         content: "Consistent branding across marketing materials.",
//       },
//     ],
//     images: ["cc.jpg", "cc2.jpg", "cc3.jpg", "cc4.jpg"],
//     link: "#",
//     tech: ["Figma", "Illustration", "Brand Identity"],
//   },

//   {
//     id: 12,
//     title: "Qmulate (Company Website) - Frontend",
//     category: "Web Development",
//     description:
//       "Frontend modernization project converting legacy Gulp codebase into a modern Next JS architecture.",
//     longDescription: [
//       {
//         type: "main",
//         content:
//           "This project modernizes an outdated frontend codebase by migrating it to Next.js, improving performance, maintainability, and SEO capabilities.",
//       },
//       { type: "heading", content: "Process & Results" },
//       {
//         type: "bullet",
//         content: "Migrated static HTML and Gulp workflow to Next.js.",
//       },
//       {
//         type: "bullet",
//         content: "Implemented server-side rendering for improved SEO.",
//       },
//       { type: "bullet", content: "Optimized page load performance." },
//       { type: "bullet", content: "Improved development workflow." },
//     ],
//     images: [
//       "q1 (10).jpg",
//       "q1 (9).jpg",
//       "q1 (8).jpg",
//       "q1 (7).jpg",
//       "q1 (6).jpg",
//       "q1 (1).jpg",
//     ],
//     link: "https://github.com/summyia-fatima/gulb-next",
//     tech: ["Next JS", "Tailwind CSS", "Modernization"],
//   },

 
//     {
//     id: 16,
//     title: "FlashDash: Rider-Centric Delivery UI/UX",
//     category: "UI/UX",
//     description:
//       "A logistics-focused delivery application interface designed to maximize rider efficiency, improve navigation clarity, and streamline high-volume delivery operations.",
//     longDescription: [
//       {
//         type: "main",
//         content:
//           "FlashDash is a rider-first delivery management interface designed to transform complex logistics workflows into simple, actionable tasks. The UX focuses heavily on speed, clarity, and minimal cognitive load so riders can safely interact with the application while navigating real-world delivery routes.",
//       },
//       { type: "heading", content: "Key Highlights" },
//       {
//         type: "bullet",
//         content:
//           "High-contrast interface optimized for outdoor sunlight visibility.",
//       },
//       {
//         type: "bullet",
//         content:
//           "Quick action gestures allowing riders to accept or complete orders with minimal taps.",
//       },
//       {
//         type: "bullet",
//         content: "Live route tracking with navigation assistance.",
//       },
//       {
//         type: "bullet",
//         content:
//           "Optimized UI layout for one-handed interaction during deliveries.",
//       },
//     ],
//     images: ["portfolio thumbnail template  (9).png","delivery boy (2).png", "2.png", "3.png",],
//     link: "#",
//     tech: ["Figma", "Mobile UI Design", "UX Research"],
//   },

//   {
//     id: 17,
//     title: "Smart Dairy: AI-Powered Livestock Care UX",
//     category: "UI/UX",
//     description:
//       "An intelligent livestock monitoring platform designed to assist farmers in detecting diseases and managing cattle health using AI-powered insights.",
//     longDescription: [
//       {
//         type: "main",
//         content:
//           "Smart Dairy is an Agritech solution focused on improving livestock management through modern digital tools. The system allows farmers to monitor cattle health, track milk production, and detect diseases early through AI-based visual recognition.",
//       },
//       { type: "heading", content: "Key Features" },
//       {
//         type: "bullet",
//         content: "AI-based cattle disease detection using image recognition.",
//       },
//       {
//         type: "bullet",
//         content:
//           "Centralized dashboard for tracking milk production and vaccinations.",
//       },
//       {
//         type: "bullet",
//         content:
//           "Farmer-friendly design requiring minimal technical knowledge.",
//       },
//       {
//         type: "bullet",
//         content:
//           "Bilingual interface supporting English and Urdu for accessibility.",
//       },
//     ],
//     images: [
//         "portfolio thumbnail template  (10).png",
//       "hhhokm.png",
//       "cvbnm.png",
//       "plkmnbv.png",
//       "poiuytrew.png",
//       "wa.png",
//     ],
//     link: "#",
//     tech: ["Figma", "AI Integration UX", "Livestock Management"],
//   },

//     {
//     id: 18,
//     title: "Hair Bliss: Organic Social Media Campaign",
//     category: "Marketing Design",
//     description:
//       "A social media branding campaign created to promote an organic herbal hair care product line.",
//     longDescription: [
//       {
//         type: "main",
//         content:
//           "Hair Bliss is a social media campaign developed to highlight the benefits of organic hair care products. The design strategy focuses on educational content combined with engaging visuals.",
//       },
//       { type: "heading", content: "Content Strategy" },
//       {
//         type: "bullet",
//         content: "Educational posts about herbal ingredients.",
//       },
//       {
//         type: "bullet",
//         content: "Engaging product visuals optimized for social platforms.",
//       },
//       {
//         type: "bullet",
//         content: "Direct call-to-action integration for orders.",
//       },
//       {
//         type: "bullet",
//         content: "Consistent brand storytelling across posts.",
//       },
//     ],
//     images: ["llg.jpg", "loo.png", "pp.png", "jjjk.png", "5.png"],
//     link: "#",
//     tech: ["Canva", "Social Media Marketing", "Ad Creatives"],
//   },

//     {
//     id: 19,
//     title: "Drinks Cafe: Premium Tri-Fold Branding",
//     category: "Marketing Design",
//     description:
//       "A visually refined tri-fold brochure designed to promote a premium beverage cafe brand.",
//     longDescription: [
//       {
//         type: "main",
//         content:
//           "This branding project focuses on creating a premium visual identity through a well-structured tri-fold brochure design. The layout combines elegant typography, high-quality product imagery, and modern composition.",
//       },
//       { type: "heading", content: "Design Strategy" },
//       {
//         type: "bullet",
//         content: "Minimalist layout emphasizing product visuals.",
//       },
//       {
//         type: "bullet",
//         content: "Typography hierarchy improving readability.",
//       },
//       {
//         type: "bullet",
//         content: "Consistent color palette reflecting premium branding.",
//       },
//       {
//         type: "bullet",
//         content: "Print-ready design optimized for professional production.",
//       },
//     ],
//     images: ["jj.jpg", "dr.jpg", "dr2.jpg"],
//     link: "#",
//     tech: ["Figma", "Graphic Design", "Branding"],
//   },

//   {
//     id: 20,
//     title: "Dollar Store: Promotional Retail Campaign",
//     category: "Marketing Design",
//     description:
//       "A collection of retail marketing banners designed to increase customer engagement and highlight promotional offers.",
//     longDescription: [
//       {
//         type: "main",
//         content:
//           "This campaign design project focuses on developing visually engaging promotional banners for retail marketing. The designs highlight discount offers while maintaining brand consistency.",
//       },
//       { type: "heading", content: "Campaign Goals" },
//       {
//         type: "bullet",
//         content: "Clear visual hierarchy for discount promotions.",
//       },
//       {
//         type: "bullet",
//         content: "Consistent brand color usage across marketing assets.",
//       },
//       {
//         type: "bullet",
//         content: "Optimized layouts for digital advertising platforms.",
//       },
//       {
//         type: "bullet",
//         content: "High visibility typography for promotional messages.",
//       },
//     ],
//     images: [
//       "jn.jpg",
//       "Cosmetic Banner.png",
//       "Home Decor Banner.png",
//       "Kid & Craft Banner.png",
//     ],
//     link: "#",
//     tech: ["Figma", "Marketing", "Retail Branding"],
//   },


  

];
