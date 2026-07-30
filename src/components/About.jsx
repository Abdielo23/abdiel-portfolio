import ImageSlideshow from './ImageSlideshow';

const SKILLS = ['C', 'React', 'Tailwind', 'Python', 'PyTorch', 'Raspberry Pi'];

const About = () => {
  return (
    <section id="about" className="py-16 px-6 md:px-24 max-w-5xl mx-auto">
      <div className="flex items-center mb-8">
        <span className="text-[#57F2D6] font-mono text-lg mr-3">02.</span>
        <h2 className="text-xl font-bold text-[#9CA3AF]">About Me</h2>
        <div className="h-px bg-[#9CA3AF] flex-grow ml-6"></div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Text Section */}
        <div className="md:col-span-2 text-[#F2F5F7] text-base leading-relaxed space-y-4">
          <p>
            HI there! I'm Abdiel, a Computer Engineering student at the University of Puerto Rico at Mayagüez. My journey into tech began with a fascination with video games and hacking, leading me to explore programming and hardware.
          </p>
          <p>
            Fast-forward to today, I've had the opportunity to work at different things like
            <span className="text-[#57F2D6]"> SPARC</span>, a
            <span className="text-[#57F2D6]"> RASC-AL</span> focused organization
            <span className="text-[#57F2D6]"> where I had the opportunity to develop a rover's computer architecture and autonomy</span>.
            My main focus these days is building useful and innovative stuff and continuing to collaborate with others in the tech community :)
          </p>
          <p>Here are a few technologies I've been working with recently:</p>

          <ul className="grid grid-cols-2 gap-2 mt-4 font-mono text-base text-[#B8C2CC]">
            {SKILLS.map((skill) => (
              <li key={skill} className="flex items-center">
                <span className="text-[#57F2D6] mr-2">▹</span>{skill}
              </li>
            ))}
          </ul>
        </div>

        {/* Image Box with Slideshow */}
        <div className="relative group w-[300px] h-[280px] mx-auto md:mx-0">
          {/* Mint block behind */}
          <div
            className="absolute inset-0 bg-[#57F2D6] rounded-2xl
              translate-x-4 translate-y-4
              group-hover:translate-x-2 group-hover:translate-y-2
              transition-transform duration-300"
          ></div>

          {/* Main image frame */}
          <div
            className="relative z-10 w-full h-full rounded-2xl overflow-hidden
              transition-all duration-300
              border-2 border-[#57F2D6] bg-transparent"
          >
            <ImageSlideshow />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
