import { useState } from 'react';
import { Menu, X, ShieldCheck, Bot } from 'lucide-react';
import { motion } from 'framer-motion';
import FadeIn from './FadeIn';
import Magnet from './Magnet';
import ContactButton from './ContactButton';
import { ScrambleText } from './useTextScramble';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Ventures', href: '#ventures' },
  { label: 'Writing', href: '#writing' },
  { label: 'Contact', href: '#contact' },
];

export default function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="h-[100svh] flex flex-col overflow-x-clip relative">
      {/* Background Cyber Dot Grid + Sweeping Scanner Beam */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* Coordinate Grid Pattern with radial fade */}
        <div
          className="absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage: 'radial-gradient(rgba(215, 226, 234, 0.4) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
            maskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, #000 30%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, #000 30%, transparent 100%)',
          }}
        />

        {/* Sweeping Radar / Scanner Beam */}
        <motion.div
          animate={{ y: ['-10%', '110%'] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-x-0 h-44 bg-gradient-to-b from-transparent via-[#8FE3D6]/[0.035] to-transparent opacity-60"
        />
      </div>

      <FadeIn delay={0} y={-20} className="relative z-20">
        <div className="px-6 md:px-10 pt-6 md:pt-8">
          {/* Mobile: hamburger trigger */}
          <div className="flex justify-end sm:hidden">
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className="text-[#D7E2EA] p-1 transition-transform duration-200 hover:scale-110 active:scale-90"
            >
              <Menu size={26} />
            </button>
          </div>

          {/* Desktop / tablet: full inline nav */}
          <nav className="hidden sm:flex justify-between items-center text-[#D7E2EA] font-medium uppercase tracking-wider text-lg lg:text-[1.4rem]">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative inline-block py-1"
              >
                <span className="transition-colors duration-200 group-hover:text-white">
                  {link.label}
                </span>
                <span className="absolute left-0 -bottom-0.5 h-[1.5px] w-full origin-left scale-x-0 bg-current transition-transform duration-300 ease-out group-hover:scale-x-100" />
              </a>
            ))}
          </nav>
        </div>
      </FadeIn>

      {/* Mobile: full-screen menu overlay */}
      {menuOpen && (
        <div className="sm:hidden fixed inset-0 z-50 bg-[#0C0C0C] flex flex-col">
          <div className="flex justify-end px-6 pt-6">
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="text-[#D7E2EA] p-1 transition-transform duration-200 hover:scale-110 active:scale-90"
            >
              <X size={26} />
            </button>
          </div>
          <nav className="flex-1 flex flex-col items-center justify-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-[#D7E2EA] font-medium uppercase tracking-wider text-2xl transition-all duration-200 hover:opacity-70 active:scale-95"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}

      <div className="flex-1 flex flex-col justify-center overflow-hidden relative z-10">
        <FadeIn delay={0.15} y={40} className="w-full">
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw] mt-6 sm:mt-4 md:-mt-5 text-center">
            Hi, i&apos;m faris
          </h1>
        </FadeIn>
      </div>

      <div className="flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10 z-20">
        <FadeIn delay={0.35} y={20}>
          <div className="flex flex-col gap-2.5 max-w-[200px] sm:max-w-[280px] md:max-w-[340px]">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#8FE3D6]/30 bg-[#111214]/80 backdrop-blur-md px-3 py-1 w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#27C93F] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#27C93F]"></span>
              </span>
              <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#8FE3D6] font-medium font-mono">
                <ScrambleText text="Available for Client Work" duration={700} delay={200} />
              </span>
            </div>
            <p className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug text-[clamp(0.75rem,1.25vw,1.15rem)]">
              Cybersecurity Engineer · Full-Stack Builder · AI Specialist crafting bulletproof systems and agentic intelligence.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <div className="flex flex-col sm:flex-row items-end sm:items-center gap-3">
            <a
              href="#services"
              className="hidden md:inline-flex items-center gap-2 rounded-full border border-[#D7E2EA]/30 bg-[#111214]/60 backdrop-blur-md px-5 py-3 text-xs uppercase tracking-widest text-[#D7E2EA] transition-all duration-200 hover:border-[#8FE3D6] hover:text-[#8FE3D6]"
            >
              Client Solutions
            </a>
            <ContactButton />
          </div>
        </FadeIn>
      </div>

      <FadeIn
        delay={0.6}
        y={30}
        className="absolute left-1/2 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 z-10"
      >
        <div className="-translate-x-1/2 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] relative">
          {/* Telemetry HUD Badge: Top Left */}
          <motion.div
            animate={{ y: [-4, 4, -4] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="hidden sm:flex absolute -left-6 md:-left-12 top-16 md:top-24 z-20 items-center gap-2.5 rounded-xl border border-[#8FE3D6]/30 bg-[#0C0C0C]/90 backdrop-blur-md px-3.5 py-2 shadow-2xl pointer-events-none"
          >
            <ShieldCheck size={16} className="text-[#8FE3D6]" />
            <div className="flex flex-col text-left">
              <span className="text-[9px] uppercase tracking-widest text-[#D7E2EA]/50 font-mono">SYS_INTEGRITY</span>
              <span className="text-[11px] font-mono text-[#8FE3D6] font-semibold">100% · HARDENED</span>
            </div>
          </motion.div>

          {/* Telemetry HUD Badge: Bottom Right */}
          <motion.div
            animate={{ y: [4, -4, 4] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            className="hidden sm:flex absolute -right-6 md:-right-12 bottom-24 md:bottom-32 z-20 items-center gap-2.5 rounded-xl border border-[#8FE3D6]/30 bg-[#0C0C0C]/90 backdrop-blur-md px-3.5 py-2 shadow-2xl pointer-events-none"
          >
            <Bot size={16} className="text-[#8FE3D6]" />
            <div className="flex flex-col text-left">
              <span className="text-[9px] uppercase tracking-widest text-[#D7E2EA]/50 font-mono">AI_ENGINE</span>
              <span className="text-[11px] font-mono text-[#8FE3D6] font-semibold">LOCAL_OLLAMA · ZERO_LEAK</span>
            </div>
          </motion.div>

          <Magnet padding={150} strength={3}>
            <img src="/images/portrait-me.webp" alt="Faris" className="w-full h-auto object-contain pointer-events-none drop-shadow-2xl block" />
          </Magnet>
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-16 sm:h-24 md:h-28"
            style={{ background: 'linear-gradient(to bottom, rgba(12,12,12,0) 0%, #0C0C0C 85%)' }}
          />
        </div>
      </FadeIn>
    </section>
  );
}