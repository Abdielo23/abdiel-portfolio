import { useState } from 'react';
import { Mail, Github, Linkedin, Menu, X } from 'lucide-react';
import Coqui from './Coqui';
import { RESUME_URL, LINKEDIN_URL, GITHUB_URL, EMAIL } from '../constants';

const NAV_LINKS = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const smallCoquiSize = 32;

  return (
    <nav className="fixed w-full top-0 z-50 bg-[#171717]/90 backdrop-blur-sm px-4 py-3 md:px-8 flex justify-between items-center text-[#F2F5F7] shadow-lg transition-colors duration-300">

      <a
        href={LINKEDIN_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 font-medium text-sm tracking-widest uppercase text-[#57F2D6] hover:text-white transition-colors cursor-pointer"
        style={{ fontFamily: "'Varela Round', sans-serif" }}
      >
        <Coqui size={smallCoquiSize} />
        <span>ABDIEL VALLEJO</span>
      </a>

      <div className="hidden md:flex items-center space-x-8 text-sm font-medium">

        <div className="flex space-x-6">
          {NAV_LINKS.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-[#57F2D6] transition-colors duration-300"
            >
              <span className="text-[#57F2D6] mr-1">0{index + 1}.</span>
              {link.name}
            </a>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex items-center space-x-3">
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-[#57F2D6] transition-colors">
            <Github size={18} />
          </a>
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-[#57F2D6] transition-colors">
            <Linkedin size={18} />
          </a>
          <a href={`mailto:${EMAIL}`} aria-label="Email" className="hover:text-[#57F2D6] transition-colors">
            <Mail size={18} />
          </a>
        </div>

        {/* Resume Button */}
        <a
          href={RESUME_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-1.5 border rounded-lg hover:bg-[#57F2D6]/10 transition text-xs"
          style={{ borderColor: "#57F2D6", color: "#57F2D6" }}
        >
          Resume
        </a>
      </div>

      <div
        className="md:hidden text-[#57F2D6] cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#222222] shadow-xl flex flex-col items-center py-8 space-y-6 md:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium hover:text-[#57F2D6]"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}

          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-medium text-[#57F2D6]"
            onClick={() => setIsOpen(false)}
          >
            Resume
          </a>

          <div className="flex items-center space-x-6 pt-2">
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-[#57F2D6]" onClick={() => setIsOpen(false)}>
              <Github size={24} />
            </a>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-[#57F2D6]" onClick={() => setIsOpen(false)}>
              <Linkedin size={24} />
            </a>
            <a href={`mailto:${EMAIL}`} aria-label="Email" className="hover:text-[#57F2D6]" onClick={() => setIsOpen(false)}>
              <Mail size={24} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
