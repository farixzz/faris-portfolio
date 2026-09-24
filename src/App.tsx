import React, { useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import HeroSection from './components/HeroSection';
import MarqueeSection from './components/MarqueeSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ServicesSection from './components/ServicesSection';
import VenturesSection from './components/VenturesSection';
import ProjectsSection from './components/ProjectsSection';
import ProcessSection from './components/ProcessSection';
import SecuritySandbox from './components/SecuritySandbox';
import BlogSection from './components/BlogSection';
import FadeIn from './components/FadeIn';
import ContactModal from './components/ContactModal';
import BackToTop from './components/BackToTop';

function Footer() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <footer
      id="contact"
      className="relative z-20 bg-[#0C0C0C] border-t border-[#D7E2EA]/10 px-5 sm:px-8 md:px-10 py-14 sm:py-16 md:py-20 overflow-hidden"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
        <div className="grid gap-8 md:grid-cols-[1.25fr_0.75fr] md:items-end">
          <FadeIn delay={0} y={24}>
            <div className="flex flex-col gap-4">
              <span className="text-[#8FE3D6] uppercase tracking-[0.35em] text-xs sm:text-sm">
                Contact
              </span>
              <h2 className="hero-heading font-black uppercase tracking-tight leading-none text-[14vw] sm:text-[10vw] md:text-[6vw]">
                Let&apos;s talk
              </h2>
              <p className="max-w-xl text-[#D7E2EA]/70 font-light leading-relaxed text-sm sm:text-base md:text-lg">
                Open to security engineering roles, red team engagements, full-stack builds, and serious product ideas that need secure architecture from day one.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.12} y={24}>
            <div className="flex flex-col gap-3 md:items-end">
              <button
                onClick={() => setModalOpen(true)}
                className="inline-flex w-full items-center justify-between gap-4 rounded-full border border-[#D7E2EA] px-6 py-4 text-[#D7E2EA] transition-colors duration-200 hover:bg-[#D7E2EA] hover:text-[#0C0C0C] md:w-auto md:min-w-[280px]"
              >
                <span className="uppercase tracking-widest text-sm font-medium">Email me</span>
                <Mail size={20} />
              </button>
              <a href="https://github.com/farixzz" target="_blank" rel="noopener noreferrer" className="inline-flex w-full items-center justify-between gap-4 rounded-full border border-[#D7E2EA]/25 px-6 py-4 text-[#D7E2EA] transition-colors duration-200 hover:border-[#D7E2EA] hover:bg-[#D7E2EA]/10 md:w-auto md:min-w-[280px]">
                <span className="uppercase tracking-widest text-sm font-medium">GitHub</span>
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/muhammed-faris-p/" target="_blank" rel="noopener noreferrer" className="inline-flex w-full items-center justify-between gap-4 rounded-full border border-[#D7E2EA]/25 px-6 py-4 text-[#D7E2EA] transition-colors duration-200 hover:border-[#D7E2EA] hover:bg-[#D7E2EA]/10 md:w-auto md:min-w-[280px]">
                <span className="uppercase tracking-widest text-sm font-medium">LinkedIn</span>
                <Linkedin size={20} />
              </a>
            </div>
          </FadeIn>
        </div>

        <div className="flex flex-col gap-3 border-t border-[#D7E2EA]/10 pt-6 text-[#D7E2EA]/35 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs uppercase tracking-widest">
            Faris &mdash; farixzz &copy; {new Date().getFullYear()}
          </p>
          <p className="text-xs uppercase tracking-widest">
            Built for secure systems and sharp interfaces
          </p>
        </div>
      </div>

      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </footer>
  );
}

export default function App() {
  return (
    <div className="app-wrapper" style={{ overflowX: 'clip' }}>
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <SkillsSection />
      <ServicesSection />
      <ProcessSection />
      <SecuritySandbox />
      <ProjectsSection />
      <VenturesSection />
      <BlogSection />
      <Footer />
      <BackToTop />
    </div>
  );
}