import { Mail, Github, Linkedin } from 'lucide-react';
import { LINKEDIN_URL, GITHUB_URL, EMAIL } from '../constants';

const Footer = () => (
  <footer className="py-6 text-center text-[#B8C2CC] text-sm font-mono hover:text-[#F2F5F7] transition-colors cursor-default">
    <p className="mb-2">Built with passion by Abdiel Vallejo</p>

    <div className="flex justify-center gap-4 mt-2">
      <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <Github size={16} className="hover:text-[#57F2D6] transition-colors" />
      </a>
      <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <Linkedin size={16} className="hover:text-[#57F2D6] transition-colors" />
      </a>
      <a href={`mailto:${EMAIL}`} aria-label="Email">
        <Mail size={16} className="hover:text-[#57F2D6] transition-colors" />
      </a>
    </div>
  </footer>
);

export default Footer;
