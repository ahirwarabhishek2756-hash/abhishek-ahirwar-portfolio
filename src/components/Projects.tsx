

import {
  Link2,
  Clock,
  Github,
  ArrowUpRight,
  Calculator,
  Users,
  Gamepad2,
  Monitor,
} from 'lucide-react';

interface Project {
  title: string;
  description: string;
  icon: typeof Link2;
  status: string;
  tech: string[];
  githubUrl: string | null;
}

const projects: Project[] = [
  {
    title: 'URL Shortener',
    description:
      'I am currently working on a URL Shortener project. The goal is to build a web application that converts long URLs into shorter, easy-to-share links.',
    icon: Link2,
    status: 'In Progress',
    tech: ['Web Development'],
    githubUrl: null,
  },
  {
    title: 'Calculator Web Application',
    description:
      'A calculator application project focused on practising calculation logic, user interaction, and building a simple interface.',
    icon: Calculator,
    status: 'Learning Project',
    tech: ['HTML', 'CSS', 'JavaScript'],
    githubUrl: null,
  },
  {
    title: 'Smart Attendance System',
    description:
      'An attendance management project idea focused on recording and organising attendance digitally.',
    icon: Users,
    status: 'Project',
    tech: ['Technology Project'],
    githubUrl: null,
  },
  {
    title: 'Python Stone-Paper-Scissors Game',
    description:
      'A Python game in which the player chooses Stone, Paper, or Scissors and plays against a computer opponent.',
    icon: Gamepad2,
    status: 'Learning Project',
    tech: ['Python', 'Random Module'],
    githubUrl: null,
  },
  {
    title: 'HTML and CSS Login Form',
    description:
      'A login form interface project for practising form fields, page layout, and styling with HTML and CSS.',
    icon: Monitor,
    status: 'Learning Project',
    tech: ['HTML', 'CSS'],
    githubUrl: null,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="reveal text-center mb-16">
          <span className="text-sky-400 text-sm font-semibold tracking-widest uppercase">
            Projects
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3">
            Things I'm Building
          </h2>

          <p className="text-slate-400 mt-4 max-w-xl mx-auto text-sm sm:text-base">
            Explore my projects and work as I continue learning and
            developing my skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => {
            const ProjectIcon = project.icon;

            return (
              <article
                key={project.title}
                className="reveal glass rounded-2xl border border-white/5 p-7 card-glow transition-all duration-300 hover:border-sky-500/30 hover:-translate-y-2 flex flex-col"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="flex items-start justify-between gap-3 mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600/20 to-sky-500/20 flex items-center justify-center">
                    <ProjectIcon className="w-7 h-7 text-sky-400" />
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-medium">
                    <Clock className="w-3 h-3" />
                    {project.status}
                  </span>
                </div>

                <h3 className="text-white font-bold text-lg mb-2">
                  {project.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-300 text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-sky-400 hover:text-sky-300 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    View on GitHub
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <span className="flex items-center gap-2 text-sm text-slate-500">
                    <Github className="w-4 h-4" />
                    GitHub link not added yet
                  </span>
                )}
              </article>
            );
          })}
        </div>

        <div className="reveal text-center mt-12">
          <div className="inline-flex items-center gap-2 text-slate-500 text-sm">
            More projects will be added as I continue learning and building.
          </div>
        </div>
      </div>
    </section>
  );
}
