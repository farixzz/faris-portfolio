import React from 'react';
import FadeIn from './FadeIn';

interface SkillCategory {
  title: string;
  skills: string[];
}

const CATEGORIES: SkillCategory[] = [
  {
    title: 'Languages',
    skills: ['Python', 'TypeScript', 'JavaScript', 'Bash'],
  },
  {
    title: 'Frontend',
    skills: ['React', 'Reflex', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    title: 'Backend & APIs',
    skills: ['FastAPI', 'REST Architecture', 'Async Task Handling', 'WebSockets'],
  },
  {
    title: 'AI & Automation',
    skills: ['LangGraph', 'Ollama', 'MCP Workflows', 'Local/Remote LLM Integration'],
  },
  {
    title: 'Offensive Security',
    skills: ['VAPT', 'Nmap', 'Nikto', 'SQLMap', 'Gobuster', 'Metasploit'],
  },
  {
    title: 'Systems & DevOps',
    skills: ['Docker', 'Kali Linux', 'Parrot OS', 'VirtualBox'],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-28">
      <FadeIn delay={0} y={30}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-14 sm:mb-16 md:mb-20"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Skills
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {CATEGORIES.map((category, i) => (
          <FadeIn key={category.title} delay={i * 0.08} y={24}>
            <div className="h-full rounded-2xl border border-[#2A2D31] bg-[#111214] p-6 flex flex-col gap-4">
              <h3 className="text-[#D7E2EA]/50 uppercase tracking-widest text-xs font-medium">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-[#3A3F45] text-[#D7E2EA] text-xs sm:text-sm px-3 py-1.5 transition-all duration-200 hover:border-[#8FE3D6] hover:text-[#8FE3D6] cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.2} y={20}>
        <div className="max-w-5xl mx-auto mt-4 sm:mt-5 rounded-2xl border border-[#2A2D31] bg-[#111214] p-6 flex flex-wrap items-center gap-4">
          <h3 className="text-[#D7E2EA]/50 uppercase tracking-widest text-xs font-medium">
            Certification
          </h3>
          <span className="rounded-full border border-[#3A3F45] text-[#D7E2EA] text-xs sm:text-sm px-3 py-1.5">
            Certified Ethical Hacker — CEH v13-AI
          </span>
        </div>
      </FadeIn>
    </section>
  );
}