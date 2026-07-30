import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="bg-[#171717] min-h-screen text-[#F2F5F7] font-sans scroll-smooth">
      <Navbar />
      <main className="container mx-auto">
        <Hero />
        <About />
        <Experience />
        <Projects />
      </main>
      <Footer />

      {/* Background Gradients */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#57F2D6]/10 rounded-full blur-[60px] md:blur-[120px] blur-orb" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-[#9CA3AF]/10 rounded-full blur-[50px] md:blur-[100px] blur-orb" />
      </div>
    </div>
  );
};

export default App;
