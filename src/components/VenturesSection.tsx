import React from 'react';
import { Users, Rocket, Instagram, ArrowUpRight } from 'lucide-react';
import FadeIn from './FadeIn';

interface Venture {
  icon: React.ElementType;
  kind: string;
  name: string;
  handle: string;
  description: string;
  href: string;
  cta: string;
}

const VENTURES: Venture[] = [
  {
    icon: Users,
    kind: 'Community',
    name: 'Nullbyte Collective',
    handle: '@nullbyte_collective',
    description:
      'A cybersecurity community built for people who would rather break things than just read about them — write-ups, CTF prep, tool drops, and a shared bench of research.',
    href: 'https://instagram.com/nullbyte_collective',
    cta: 'Join the collective',
  },
  {
    icon: Rocket,
    kind: 'Startup',
    name: 'Webit',
    handle: 'webit-site.netlify.app',
    description:
      'Premium SaaS production and web development — shipping reactive products and client platforms end to end, from architecture to launch.',
    href: 'https://webit-site.netlify.app/',
    cta: 'Visit Webit',
  },
  {
    icon: Instagram,
    kind: 'Creative Studio',
    name: 'Webit Ads',
    handle: '@webitads',
    description:
      'The creative and commercial arm of Webit — digital invitation platforms, brand media, and AI-driven production pipelines for clients.',
    href: 'https://instagram.com/webitads',
    cta: 'See the work',
  },
];

export default function VenturesSection() {
  return (
    <section
      id="ventures"
      className="relative z-10 bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-28"
    >
      <FadeIn delay={0} y={30}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-4"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Ventures
        </h2>
      </FadeIn>
      <FadeIn delay={0.1} y={20}>
        <p className="text-[#D7E2EA]/60 uppercase tracking-wide text-sm sm:text-base text-center max-w-lg mx-auto mb-14 sm:mb-16 md:mb-20">
          Outside the codebase — the community I run and the businesses I build.
        </p>
      </FadeIn>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
        {VENTURES.map((venture, i) => {
          const Icon = venture.icon;
          return (
            <FadeIn key={venture.name} delay={i * 0.12} y={30} className="h-full">
              <a
                href={venture.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group h-full rounded-3xl border border-[#2A2D31] bg-[#111214] p-6 sm:p-7 flex flex-col gap-5 transition-colors duration-200 hover:border-[#D7E2EA]/40"
              >
                <div className="flex items-center justify-between">
                  <Icon size={28} color="#BBCCD7" strokeWidth={1.5} />
                  <ArrowUpRight
                    size={20}
                    color="#D7E2EA"
                    className="opacity-40 transition-opacity duration-200 group-hover:opacity-100"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <span className="text-[#D7E2EA]/50 uppercase tracking-widest text-xs">
                    {venture.kind}
                  </span>
                  <h3 className="text-[#D7E2EA] font-medium uppercase text-xl sm:text-2xl">
                    {venture.name}
                  </h3>
                  <span className="text-[#8FE3D6] text-sm">{venture.handle}</span>
                </div>

                <p className="text-[#D7E2EA]/70 font-light leading-relaxed text-sm sm:text-base flex-1">
                  {venture.description}
                </p>

                <span className="text-[#D7E2EA] uppercase tracking-widest text-xs font-medium">
                  {venture.cta}
                </span>
              </a>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}