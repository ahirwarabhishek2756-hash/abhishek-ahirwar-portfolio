import {
  Cpu,
  Terminal,
  Coffee,
  FileCode,
  Palette,
  Code2,
  Database,
  Table2,
  HardHat,
  Clock,
  Lightbulb,
  BookOpen,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Skill {
  name: string;
  icon: LucideIcon;
  color: string;
}

const skills: Skill[] = [
  { name: 'C', icon: Terminal, color: 'from-blue-500 to-cyan-500' },
  { name: 'C++', icon: Cpu, color: 'from-blue-600 to-indigo-500' },
  { name: 'Java', icon: Coffee, color: 'from-orange-500 to-red-500' },
  { name: 'Python', icon: FileCode, color: 'from-yellow-400 to-green-500' },
  { name: 'HTML', icon: Code2, color: 'from-orange-500 to-amber-500' },
  { name: 'CSS', icon: Palette, color: 'from-blue-500 to-sky-400' },
  { name: 'React', icon: Code2, color: 'from-cyan-400 to-blue-500' },
  { name: 'MongoDB', icon: Database, color: 'from-green-500 to-emerald-500' },
  { name: 'SQL', icon: Table2, color: 'from-sky-500 to-blue-600' },
];

const strengths = [
  { icon: HardHat, title: 'Hardworking', text: 'Dedicated to putting in the effort to achieve my goals.' },
  { icon: Clock, title: 'Punctual & Responsible', text: 'I value time and take responsibility for my work.' },
  { icon: Lightbulb, title: 'Problem-Solving Mindset', text: 'I enjoy breaking down problems and finding solutions.' },
  { icon: BookOpen, title: 'Willingness to Learn', text: 'Always open to learning new technologies and skills.' },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 px-6 bg-slate-950/40">
      <div className="max-w-6xl mx-auto">
        <div className="reveal text-center mb-16">
          <span className="text-sky-400 text-sm font-semibold tracking-widest uppercase">Skills</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3">What I Know</h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto text-sm sm:text-base">
            Technologies and tools I have been learning and practicing.
          </p>
        </div>

        {/* Technical skills grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 mb-20">
          {skills.map((skill, i) => (
            <div
              key={skill.name}
              className="reveal glass rounded-2xl border border-white/5 p-6 flex items-center gap-4 card-glow transition-all duration-300 hover:border-sky-500/30 hover:-translate-y-1"
              style={{ transitionDelay: `${i * 0.05}s` }}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center flex-shrink-0`}>
                <skill.icon className="w-6 h-6 text-white" />
              </div>
              <span className="text-white font-semibold text-base sm:text-lg">{skill.name}</span>
            </div>
          ))}
        </div>

        {/* Personal strengths */}
        <div className="reveal text-center mb-12">
          <h3 className="text-2xl font-bold text-white">Personal Strengths</h3>
          <p className="text-slate-400 mt-3 text-sm">Qualities that help me grow every day.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {strengths.map((item, i) => (
            <div
              key={item.title}
              className="reveal glass rounded-2xl border border-white/5 p-6 text-center card-glow transition-all duration-300 hover:border-sky-500/30 hover:-translate-y-1"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600/20 to-sky-500/20 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-6 h-6 text-sky-400" />
              </div>
              <h4 className="text-white font-semibold text-base mb-2">{item.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
