import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; 
import logo from '../assets/logo.png'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
  ];

  return (
    <nav className="w-full bg-black py-6 px-4 fixed top-0 left-0 right-0 z-[100]">
      {/* Main Navbar Capsule */}
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full bg-[#B06014] px-6 md:px-10 py-3 shadow-[0_10px_40px_rgba(176,96,20,0.3)] border border-white/10">
        
        <div className="flex items-center hover:scale-105 transition-transform duration-300">
          <img src={logo} alt="Logo" className="h-9 w-9 md:h-10 md:w-10 object-contain" />
        </div>

        {/* Desktop Links */}
        <div className="hidden space-x-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white text-[16px] font-bold tracking-wide hover:text-black transition-all duration-300 ease-in-out hover:-translate-y-1"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <button className="hidden md:block rounded-full bg-black px-8 py-2.5 text-xs font-bold uppercase tracking-widest text-white hover:bg-zinc-900 transition-all border border-white/5 shadow-xl">
            Contact Us
          </button>
          
          <button 
            className="md:hidden text-black p-1 hover:bg-black/10 rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={26} strokeWidth={2.5} /> : <Menu size={26} strokeWidth={2.5} />}
          </button>
        </div>
      </div>

      {/* Extended Menu with Dark Theme Match */}
      <div className={`fixed inset-x-4 top-24 transform transition-all duration-500 ease-in-out md:hidden ${
          isOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0 pointer-events-none'
        }`}>
        
        {/* Container: Matching the Dark-to-Brown theme */}
        <div className="bg-[#1A0F07]/95 backdrop-blur-xl rounded-[2.5rem] p-10 flex flex-col items-center space-y-8 shadow-[0_20px_60px_rgba(0,0,0,0.8)] border border-[#B06014]/20">
          
          <div className="flex flex-col items-center space-y-6 w-full">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-white text-[18px] tracking-tight hover:text-[#B06014] transition-all duration-300 transform ${
                  isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 60}ms` }}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Separator Line */}
          <div className="w-1/3 h-[2px] bg-[#B06014]/30 rounded-full" />

          {/* Mobile CTA: Matching the Button Theme */}
          <button className="w-full  bg-[#B06014] rounded-full px-8 py-2.5 text-[14px] font-bold uppercase tracking-widest text-black hover:bg-zinc-900 transition-all border border-white/5 shadow-xl active:scale-95">
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;