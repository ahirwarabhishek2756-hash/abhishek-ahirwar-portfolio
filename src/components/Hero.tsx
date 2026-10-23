import { ArrowDown, Sparkles, Mail, Download } from 'lucide-react';

export default function Hero() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-start sm:items-center justify-center bg-grid overflow-visible sm:overflow-hidden pt-24 sm:pt-20 pb-20 sm:pb-0"
    >
      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 mb-5 sm:mb-8 animate-fade-in">
          <Sparkles className="w-4 h-4 text-sky-400" />
          <span className="text-sm text-slate-300">Welcome to my portfolio</span>
        </div>

        {/* Name */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-3 sm:mb-4 animate-fade-in-up leading-tight">
          Hi, I'm <span className="text-gradient">Abhishek Ahirwar</span>
        </h1>

        {/* Tagline */}
        <p className="text-lg sm:text-xl text-slate-400 mb-4 sm:mb-6 animate-fade-in-up font-medium" style={{ animationDelay: '0.15s', animationFillMode: 'both' }}>
          B.Tech CSE Student <span className="text-sky-400">|</span> Aspiring Software Developer
        </p>

        {/* Introduction */}
        <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto mb-8 sm:mb-10 animate-fade-in-up leading-relaxed" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
          I am a Computer Science Engineering student who enjoys learning programming,
          exploring new technologies, and solving problems. I am continuously improving my
          technical skills and looking for opportunities to gain practical experience and
          work on real-world projects.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-in-up w-full mx-auto" style={{ animationDelay: '0.45s', animationFillMode: 'both' }}>
          <button
            onClick={() => scrollTo('#skills')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-sky-500 text-white font-semibold text-sm transition-all duration-300 hover:shadow-[0_0_30px_rgba(56,189,248,0.4)] hover:scale-[1.03] active:scale-95"
          >
            Explore My Skills
          </button>
          <a
            href="https://drive.google.com/drive/folders/1XHLwpX9H_yjBg3WLwOLoHaMezx-oYstp"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 text-white font-semibold text-sm transition-all duration-300 hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] hover:scale-[1.03] active:scale-95 flex items-center justify-center gap-2"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </a>
          <button
            onClick={() => scrollTo('#contact')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl glass border border-white/10 text-white font-semibold text-sm transition-all duration-300 hover:bg-white/10 hover:scale-[1.03] active:scale-95 flex items-center justify-center gap-2"
          >
            <Mail className="w-4 h-4" />
            Contact Me
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="hidden sm:block absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <button
            onClick={() => scrollTo('#about')}
            className="text-slate-500 hover:text-sky-400 transition-colors"
            aria-label="Scroll down"
          >
            <ArrowDown className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
