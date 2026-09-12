import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import FadeIn from './FadeIn';
import Magnet from './Magnet';
import ContactButton from './ContactButton';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Services', href: '#services' },
  { label: 'Ventures', href: '#ventures' },
  { label: 'Projects', href: '#projects' },
  { label: 'Writing', href: '#writing' },
  { label: 'Contact', href: '#contact' },
];

export default function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="h-[100svh] flex flex-col overflow-x-clip relative">
      <FadeIn delay={0} y={-20}>
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

      <div className="flex-1 flex flex-col justify-center overflow-hidden">
        <FadeIn delay={0.15} y={40} className="w-full">
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw] mt-6 sm:mt-4 md:-mt-5 text-center">
            Hi, i&apos;m faris
          </h1>
        </FadeIn>
      </div>

      <div className="flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10 z-20">
        <FadeIn delay={0.35} y={20}>
          <p className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug text-[clamp(0.75rem,1.4vw,1.5rem)] max-w-[160px] sm:max-w-[220px] md:max-w-[260px]">
            a cybersecurity engineer & full-stack developer driven by building robust systems and secure architectures
          </p>
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>

      <FadeIn
        delay={0.6}
        y={30}
        className="absolute left-1/2 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 z-10"
      >
        <div className="-translate-x-1/2 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] relative">
          <Magnet padding={150} strength={3}>
            <img src="/images/portrait.webp" alt="Faris" className="w-full h-auto object-contain pointer-events-none drop-shadow-2xl block" />
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