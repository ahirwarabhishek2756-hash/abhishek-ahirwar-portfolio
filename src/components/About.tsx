import { GraduationCap, Brain, Rocket, Target } from 'lucide-react';

const highlights = [
  {
    icon: GraduationCap,
    title: 'Education',
    text: 'Pursuing B.Tech in Computer Science Engineering',
  },
  {
    icon: Brain,
    title: 'Interests',
    text: 'Programming, Software Development, Artificial Intelligence',
  },
  {
    icon: Rocket,
    title: 'Approach',
    text: 'Continuous learning, consistency, and practical work',
  },
  {
    icon: Target,
    title: 'Focus',
    text: 'Improving skills through hands-on projects',
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="reveal text-center mb-16">
          <span className="text-sky-400 text-sm font-semibold tracking-widest uppercase">About Me</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3">Who I Am</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left — description */}
          <div className="reveal">
            <div className="glass rounded-2xl border border-white/5 p-8 sm:p-10">
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                I am currently pursuing a <span className="text-sky-400 font-medium">B.Tech in Computer Science
                Engineering</span>. I am interested in programming, software development, artificial
                intelligence, and technology. I believe in continuous learning, consistency, and
                improving my skills through practical work.
              </p>
              <p className="text-slate-400 text-base leading-relaxed mt-4">
                I am always eager to explore new tools, build small projects, and learn from every
                opportunity. My focus is on building a strong foundation and growing into a skilled
                software professional.
              </p>
            </div>
          </div>

          {/* Right — highlight cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, i) => (
              <div
                key={item.title}
                className="reveal glass rounded-2xl border border-white/5 p-6 card-glow transition-all duration-300 hover:border-sky-500/30 hover:-translate-y-1"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600/20 to-sky-500/20 flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-sky-400" />
                </div>
                <h3 className="text-white font-semibold text-base mb-1">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
