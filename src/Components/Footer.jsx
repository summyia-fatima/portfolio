import React from "react";
import {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Mail,
  Phone,
  Facebook, // Lucide mein Facebook hota hai
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Custom Icon mapping: Lucide icons and External SVGs mix
  const socialLinks = [
  { 
    name: "LinkedIn",
    icon: <Linkedin size={18} color="white" />, 
    link: "https://www.linkedin.com/in/summyia-fatima-274787311" 
  },
  { 
    name: "GitHub",
    icon: <Github size={18} color="white" />, 
    link: "https://github.com/Summyia77" 
  },
  { 
    name: "Facebook",
    icon: <Facebook size={18} color="white" />, 
    link: "https://www.facebook.com/uiux.designer.dev/" 
  },
  { 
    name: "Instagram",
    icon: <Instagram size={18} color="white" />, 
    link: "https://www.instagram.com/uiux_designer_dev/" 
  },
  
  { 
    name: "Upwork",
    icon: (
      <img 
        src="https://www.vectorlogo.zone/logos/upwork/upwork-icon.svg" 
        className="w-5 h-5 brightness-0 invert" 
        alt="Upwork" 
      />
    ), 
    link: "https://www.upwork.com/freelancers/~0122f77e7f41425d90?mp_source=share" 
  },
];

  return (
    <footer id="footer" className="w-full bg-[#1A0F07] border-t border-[#B06014]/20 pt-16 pb-8 px-6 font-sans">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 items-center justify-items-center">
          
          {/* Column 1: Portfolio */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
            <h2 className="text-white text-3xl font-bold tracking-tighter">
              Portfolio<span className="text-[#B06014]">.</span>
            </h2>
            <p className="text-gray-400 text-sm">Summyia Fatima</p>
            <p className="text-gray-400 text-sm">Designed with Passion & Code</p>
          </div>

          {/* Column 2: Social Media */}
          <div className="flex flex-col items-center justify-center space-y-6 md:border-x border-[#B06014]/10 px-4 w-full">
            <div className="flex flex-wrap justify-center gap-4">
              {socialLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="w-10 h-10 rounded-full bg-[#1A0F07] border border-[#B06014]/30 flex items-center justify-center text-white hover:bg-[#B06014] hover:border-[#B06014] hover:-translate-y-1 transition-all duration-300 shadow-md overflow-hidden"
                >
                  {item.icon}
                </a>
              ))}
            </div>
            <p className="text-[#B06014]/80 text-sm font-bold tracking-[0.14em]">
              Connect with me
            </p>
          </div>

          {/* Column 3: Contact Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-3">
            <h3 className="text-white text-3xl font-bold tracking-tighter">Contact</h3>
            <div className="flex flex-col items-center md:items-start space-y-2">
              <a href="mailto:summyiawork@gmail.com" className="flex items-center gap-3 text-gray-400 hover:text-[#B06014] transition-all text-sm group">
                <Mail size={18} className="text-[#B06014] group-hover:scale-110 transition-transform" />
                <span className="group-hover:translate-x-1 transition-transform">summyiawork@gmail.com</span>
              </a>
              <a href="tel:+923180664674" className="flex items-center gap-3 text-gray-400 hover:text-[#B06014] transition-all text-sm group">
                <Phone size={18} className="text-[#B06014] group-hover:scale-110 transition-transform" />
                <span className="group-hover:translate-x-1 transition-transform">+92 3180664674</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-[#B06014]/10 text-center">
          <p className="text-[11px] text-gray-200 tracking-[0.14em] font-medium">
            © {currentYear} Summyia Fatima. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;