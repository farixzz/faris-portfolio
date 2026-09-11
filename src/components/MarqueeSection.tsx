import React, { useEffect, useRef, useState } from 'react';
import {
  Code2,
  FileType2,
  Server,
  Terminal,
  Boxes,
  Workflow,
  Bot,
  ShieldAlert,
  Shield,
  Cpu,
  Radar,
  Bug,
  Search,
  Layers,
  Crosshair,
  FileWarning,
  Eye,
  Network,
  Fingerprint,
  BadgeCheck,
  Braces,
} from 'lucide-react';

interface StackItem {
  label: string;
  icon: React.ElementType;
}

const ROW_1: StackItem[] = [
  { label: 'React', icon: Code2 },
  { label: 'TypeScript', icon: FileType2 },
  { label: 'FastAPI', icon: Server },
  { label: 'Python', icon: Terminal },
  { label: 'Docker', icon: Boxes },
  { label: 'Reflex', icon: Layers },
  { label: 'LangGraph', icon: Workflow },
  { label: 'Ollama', icon: Bot },
  { label: 'Kali Linux', icon: ShieldAlert },
  { label: 'Parrot OS', icon: Shield },
  { label: 'VirtualBox', icon: Cpu },
];

const ROW_2: StackItem[] = [
  { label: 'Nmap', icon: Radar },
  { label: 'Nikto', icon: Bug },
  { label: 'SQLMap', icon: FileWarning },
  { label: 'Gobuster', icon: Search },
  { label: 'Metasploit', icon: Crosshair },
  { label: 'YARA Rules', icon: Eye },
  { label: 'OSINT', icon: Network },
  { label: 'MCP Protocol', icon: Braces },
  { label: 'CEH v13-AI', icon: BadgeCheck },
  { label: 'REST APIs', icon: Fingerprint },
];

function Tile({ item }: { item: StackItem }) {
  const Icon = item.icon;
  return (
    <div className="flex-shrink-0 rounded-2xl border border-[#2A2D31] bg-[#141518] flex flex-col items-center justify-center gap-2 sm:gap-3 md:gap-4 w-[220px] h-[150px] sm:w-[320px] sm:h-[210px] md:w-[420px] md:h-[270px] transition-all duration-300 hover:border-[#8FE3D6]/50 hover:scale-[1.02]">
      <Icon className="w-8 h-8 sm:w-11 sm:h-11 md:w-14 md:h-14" color="#BBCCD7" strokeWidth={1.5} />
      <span className="text-[#D7E2EA] uppercase tracking-widest text-xs sm:text-base md:text-lg font-medium">
        {item.label}
      </span>
    </div>
  );
}

function tripled<T>(arr: T[]): T[] {
  return [...arr, ...arr, ...arr];
}

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const sectionTop = sectionRef.current.getBoundingClientRect().top + window.scrollY;
      const value = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(value);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const row1 = tripled(ROW_1);
  const row2 = tripled(ROW_2);

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden"
    >
      <div className="flex flex-col gap-3">
        <div
          className="flex gap-3"
          style={{ transform: 'translateX(' + (offset - 200) + 'px)', willChange: 'transform' }}
        >
          {row1.map((item, i) => (
            <Tile key={'row1-' + i} item={item} />
          ))}
        </div>
        <div
          className="flex gap-3"
          style={{ transform: 'translateX(' + (-(offset - 200)) + 'px)', willChange: 'transform' }}
        >
          {row2.map((item, i) => (
            <Tile key={'row2-' + i} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}