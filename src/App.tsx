import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Goal from '@/components/Goal';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { useScrollReveal } from '@/hooks/useScrollReveal';

function App() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-[#0a0e1a] text-slate-200 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Goal />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
