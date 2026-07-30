import { useState } from 'react';

const EXPERIENCES = [
  {
    company: "SPARC",
    role: "rasc-al",
    date: "2024 - Present",
    points: [
      "Part of PES (power and electrical systems) team focused on designing and implementing the rover's electrical systems and autonomy.",
      "Collaborated with different teams to ensure seamless integration of hardware and software components.",
      "Provided leadership within the group in assembling the hardware components for the rover and the autonomy stack.",
    ],
  },
  {
    company: "Freelance",
    role: "Full stack Developer",
    date: "2025 - Present",
    points: [
      "Developed and maintained code for websites primarily using HTML, CSS, and React.",
      "Manually tested sites in various browsers and mobile devices to ensure cross browser compatibility and responsiveness.",
    ],
  },
];

const INDICATOR_HEIGHT_PX = 48;

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="experience" className="py-16 px-6 md:px-24 max-w-4xl mx-auto">

      <div className="flex items-center mb-8">
        <span className="text-[#57F2D6] font-mono text-lg mr-3">03.</span>
        <h2 className="text-xl font-bold text-[#9CA3AF]">Where I've Worked</h2>
        <div className="h-px bg-[#9CA3AF] flex-grow ml-6"></div>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Tab Buttons */}
        <div className="relative flex md:flex-col overflow-x-scroll md:overflow-visible min-w-full md:min-w-[140px] border-b md:border-b-0 md:border-l border-[#222222]">

          {/* Active Indicator (Desktop) */}
          <div
            className="hidden md:block absolute left-[-2px] bg-[#57F2D6] z-0 transition-transform duration-300 ease-in-out"
            style={{
              width: '2px',
              height: `${INDICATOR_HEIGHT_PX}px`,
              transform: `translateY(${activeTab * INDICATOR_HEIGHT_PX}px)`,
            }}
          />

          {EXPERIENCES.map((exp, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`
                relative z-10 text-left px-4 py-3 font-mono text-sm whitespace-nowrap
                transition-all duration-150 ease-out focus:outline-none
                min-w-[140px] md:min-w-full
                hover:bg-[#57F2D6]/10
                active:scale-[0.98] active:bg-[#57F2D6]/20
                ${activeTab === index
                  ? 'text-[#57F2D6] bg-[#222222]/50 border-b-2 md:border-b-0 border-[#57F2D6]'
                  : 'text-[#F2F5F7] border-b-2 md:border-b-0 border-transparent'
                }
              `}
            >
              {exp.company}
            </button>
          ))}
        </div>

        {/* Experience Details */}
        <div
          key={activeTab}
          className="flex-1 min-h-[300px] pt-4 md:pt-0"
        >
          <div className="fade-in-base">
            <h3 className="text-lg font-medium text-[#9CA3AF]">
              {EXPERIENCES[activeTab].role} <span className="text-[#57F2D6]">@ {EXPERIENCES[activeTab].company}</span>
            </h3>
            <p className="font-mono text-sm text-[#B8C2CC] mb-4 mt-1">{EXPERIENCES[activeTab].date}</p>
          </div>

          <ul className="space-y-3 pt-3">
            {EXPERIENCES[activeTab].points.map((point, i) => (
              <li
                key={i}
                className="flex items-start text-[#F2F5F7] text-sm stagger-item"
                style={{ animationDelay: `${0.8 + i * 0.2}s` }}
              >
                <span className="text-[#57F2D6] mr-3 mt-1.5">▹</span>
                <span className="leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
