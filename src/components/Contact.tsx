import { Mail, Linkedin, Github, MapPin } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'ahirwarabhishek2756@gmail.com',
    href: 'mailto:ahirwarabhishek2756@gmail.com',
    color: 'from-blue-600 to-sky-500',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Abhishek Ahirwar',
    href: 'https://www.linkedin.com/in/abhishek-ahirwar-28862830b?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    color: 'from-blue-700 to-cyan-600',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'ahirwarabhishek2756-hash',
    href: 'https://github.com/ahirwarabhishek2756-hash',
    color: 'from-slate-700 to-slate-600',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="reveal text-center mb-16">
          <span className="text-sky-400 text-sm font-semibold tracking-widest uppercase">Contact</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3">Get In Touch</h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto text-sm sm:text-base">
            Feel free to reach out for opportunities, collaboration, or just to connect.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-5">
          {contactInfo.map((item, i) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="reveal glass rounded-2xl border border-white/5 p-7 text-center card-glow transition-all duration-300 hover:border-sky-500/30 hover:-translate-y-2 group"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mx-auto mb-4 transition-transform group-hover:scale-110`}>
                <item.icon className="w-7 h-7 text-white" />
              </div>
              <p className="text-slate-500 text-xs uppercase tracking-wider font-semibold mb-1">
                {item.label}
              </p>
              <p className="text-white text-sm font-medium break-all">
                {item.value}
              </p>
            </a>
          ))}
        </div>

        {/* Location */}
        <div className="reveal text-center mt-10">
          <div className="inline-flex items-center gap-2 text-slate-500 text-sm">
            <MapPin className="w-4 h-4" />
            Hoshangabad, Madhya Pradesh, India
          </div>
        </div>
      </div>
    </section>
  );
}
