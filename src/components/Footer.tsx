import { Heart, Code2 } from 'lucide-react';

export default function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/5 py-10 px-6 bg-slate-950/60">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-sky-400 flex items-center justify-center">
            <Code2 className="w-4 h-4 text-white" />
          </div>
          <span className="font-bold text-white text-sm">
            Abhishek Ahirwar
          </span>
        </div>

        {/* Quick links */}
        <nav className="flex flex-wrap items-center justify-center gap-4 text-sm">
          {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(`#${link.toLowerCase()}`)}
              className="text-slate-400 hover:text-sky-400 transition-colors"
            >
              {link}
            </button>
          ))}
        </nav>
      </div>

      {/* Copyright */}
      <div className="max-w-6xl mx-auto text-center mt-6 pt-6 border-t border-white/5">
        <p className="text-slate-500 text-sm flex items-center justify-center gap-1.5">
          © 2026 Abhishek Ahirwar. Built with a passion for learning and technology.
          <Heart className="w-3.5 h-3.5 text-sky-400 fill-sky-400" />
        </p>
      </div>
    </footer>
  );
}
