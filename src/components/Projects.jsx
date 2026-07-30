import { ExternalLink, Github } from 'lucide-react';
import { asset } from '../constants';

const PROJECTS = [
  {
    title: "Nasa RASC-AL Rover",
    description:
      "Nasa RASC-AL competition project focused on developing a lunar rover's computer architecture and autonomy stack.",
    tech: ["Matlab", "Gazebo", "SolidWorks"],
    type: "University Project",
    color: "bg-blue-500",
    image: asset("rasc-al.webp"),
    imageWidth: 1200,
    imageHeight: 900,
    link: "https://rascal.nianet.org/rascal-archives/",
    github: null,
    underConstruction: false,
  },
  {
    title: "Stock Analyzer",
    description:
      "Stock analysis tool combining fundamental analysis, technical indicators, valuation (DCF/WACC), risk metrics, social sentiment, geopolitical risk, and AI investment summary — built for retail investors who want hedge fund level insights.",
    tech: ["Python", "JavaScript", "FastAPI", "React", "REST API"],
    type: "Full Stack & Data",
    color: "bg-emerald-700",
    image: asset("stock-analyzer.webp"),
    imageWidth: 1200,
    imageHeight: 800,
    link: "https://github.com/Abdielo23/stock-analyzer",
    github: "https://github.com/Abdielo23/stock-analyzer",
    underConstruction: false,
  },
  {
    title: "Barber-Bot",
    description:
      "An automated WhatsApp assistant for barber shops that manages real-time scheduling. It integrates Google Calendar API for availability tracking and Twilio API for messaging",
    tech: ["FastAPI", "SQLite", "Twilio API", "Google Calendar API", "Python"],
    type: "Backend & System Automation",
    color: "bg-purple-600",
    image: asset("barber-bot.webp"),
    imageWidth: 1200,
    imageHeight: 800,
    link: "#",
    github: null,
    underConstruction: false,
  },
  {
    title: "Website",
    description:
      "This website is my personal project which showcases development skills and modern UX design.",
    tech: ["React", "Html", "Tailwind", "CSS"],
    type: "Personal Project",
    color: "bg-green-600",
    image: asset("website.webp"),
    imageWidth: 1200,
    imageHeight: 800,
    link: "#",
    github: null,
    underConstruction: true,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 px-6 md:px-24 max-w-6xl mx-auto">
      <div className="flex items-center mb-8">
        <span className="text-[#57F2D6] font-mono text-lg mr-3">04.</span>
        <h2 className="text-xl font-bold text-[#9CA3AF]">
          Some Things I&apos;ve Built
        </h2>
        <div className="h-px bg-[#9CA3AF] flex-grow ml-6"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="group relative bg-[#222222] rounded-lg overflow-hidden transition-all hover:-translate-y-2 hover:shadow-xl"
          >
            {/* Under Construction Banner */}
            {project.underConstruction && (
              <div className="absolute inset-0 z-20 pointer-events-none">
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[80%] bg-black/40 backdrop-blur-sm border border-white/10 py-2 text-center text-white/80 font-semibold text-[10px] md:text-xs tracking-[0.18em] uppercase rounded-md shadow-md">
                  Under Construction
                </div>
              </div>
            )}

            <div className="relative z-0">
              {/* Image Container */}
              <div className={`h-48 w-full ${project.color} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-[#222222]/80 group-hover:bg-[#222222]/30 transition-all duration-500 flex items-center justify-center">
                  <img
                    src={project.image}
                    alt={project.title}
                    width={project.imageWidth}
                    height={project.imageHeight}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  />
                </div>
              </div>

              <div className="p-5 md:p-6">
                <div className="flex justify-between items-center mb-3">
                  <div className="text-[#57F2D6] font-mono text-xs">
                    {project.type}
                  </div>
                  <div className="flex gap-4 text-[#B8C2CC]">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#57F2D6] transition-colors"
                        aria-label="GitHub"
                      >
                        <Github size={20} />
                      </a>
                    )}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#57F2D6] transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-[#F2F5F7] mb-2 group-hover:text-[#57F2D6] transition-colors">
                  {project.title}
                </h3>

                <p className="text-[#B8C2CC] text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <ul className="flex flex-wrap gap-3 font-mono text-xs text-[#B8C2CC]">
                  {project.tech.map((t) => (
                    t && <li key={t} className="bg-[#171717] px-2 py-1 rounded">{t}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
