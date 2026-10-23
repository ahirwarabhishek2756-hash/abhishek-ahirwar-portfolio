import { Target } from 'lucide-react';

export default function Goal() {
  return (
    <section id="goal" className="relative py-24 px-6 bg-slate-950/40 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <div className="reveal">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-sky-500 flex items-center justify-center mx-auto mb-6 animate-pulse-glow">
            <Target className="w-8 h-8 text-white" />
          </div>
          <span className="text-sky-400 text-sm font-semibold tracking-widest uppercase">My Goal</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-6">
            Where I'm Headed
          </h2>
          <p className="text-slate-300 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto">
            "My goal is to strengthen my programming fundamentals, learn new technologies,
            build practical projects, and grow into a skilled software professional."
          </p>
        </div>
      </div>
    </section>
  );
}
