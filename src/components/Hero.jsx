import NameHeading from './NameHeading';
import { RESUME_URL } from '../constants';

const Hero = () => {
  const heroName = "hi, Abdiel Vallejo.";

  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center min-h-screen px-4 text-center pt-20 relative overflow-hidden"
    >
      <h1 className="text-4xl md:text-6xl font-extrabold mb-3 tracking-tight">
        <NameHeading fullText={heroName} className="justify-center" />
      </h1>

      <p className="max-w-2xl text-[#F2F5F7] text-base leading-relaxed mb-8 mt-6">
        I'm a Computer Engineer in my second year at UPRM.
        Currently, I am focused on building innovative gadgets and hope to collaborate with others in this journey.
      </p>

      <a
        href={RESUME_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="px-8 py-3 rounded-lg border font-mono hover:bg-[#57F2D6]/10 transition text-sm"
        style={{ borderColor: "#57F2D6", color: "#57F2D6" }}
      >
        Check out my Resume!
      </a>
    </section>
  );
};

export default Hero;
