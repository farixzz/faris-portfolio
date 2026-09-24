import React from 'react';
import { ShieldCheck, Cpu, Terminal, Layers } from 'lucide-react';
import FadeIn from './FadeIn';
import SpotlightCard from './SpotlightCard';

interface Step {
  step: string;
  icon: React.ElementType;
  title: string;
  tagline: string;
  description: string;
  actions: string[];
}

const STEPS: Step[] = [
  {
    step: '01',
    icon: ShieldCheck,
    title: 'Threat Modeling & Architecture',
    tagline: 'Security by design before a single line of code',
    description:
      'Every project begins by scoping trust boundaries, mapping attack vectors, and designing resilient schema definitions. We identify authorization bottlenecks, data-leak risks in AI pipelines, and architectural vulnerabilities upfront.',
    actions: ['Surface mapping & threat modeling', 'Zero-trust auth & RBAC design', 'Schema & API contract specification'],
  },
  {
    step: '02',
    icon: Cpu,
    title: 'Full-Stack & Agentic Core',
    tagline: 'Engineering the frontend, API, and intelligence layers',
    description:
      'Building reactive interfaces with React/TypeScript and paired with high-throughput FastAPI/Node.js backends. When integrating AI, we build deterministic LangGraph workflows and private, zero-telemetry local LLM nodes.',
    actions: ['Component & state-driven UI engineering', 'Asynchronous API & WebSocket pipelines', 'Agentic workflow orchestration (MCP & LangGraph)'],
  },
  {
    step: '03',
    icon: Terminal,
    title: 'Offensive Testing & Code Hardening',
    tagline: 'Breaking the system before malicious actors can',
    description:
      'Grounded in CEH methodology, the entire codebase undergoes rigorous offensive testing: BOLA verification, injection fuzzing, prompt security validation, and dependency supply-chain audits.',
    actions: ['Source-code VAPT & logic flaw review', 'OWASP Top 10 automated & manual tests', 'Adversarial prompt & payload simulation'],
  },
  {
    step: '04',
    icon: Layers,
    title: 'Containerized Launch & Observability',
    tagline: 'Production-ready delivery with active telemetry',
    description:
      'Deploying hardened container environments with automated health checks, rate limiting, and audit logging. Delivering complete executive documentation and handover for seamless client maintenance.',
    actions: ['Docker containerization & CI/CD deployment', 'Telemetry, audit logging & rate limiting', 'Client documentation & technical handover'],
  },
];

export default function ProcessSection() {
  return (
    <section
      id="process"
      className="relative z-10 bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-28 border-t border-[#2A2D31]/40"
    >
      <div className="max-w-6xl mx-auto">
        <FadeIn delay={0} y={30}>
          <div className="flex flex-col items-center text-center mb-16 sm:mb-20">
            <span className="text-[#8FE3D6] uppercase tracking-[0.35em] text-xs sm:text-sm font-medium mb-3">
              Methodology
            </span>
            <h2
              className="hero-heading font-black uppercase leading-none tracking-tight mb-5"
              style={{ fontSize: 'clamp(2.8rem, 8vw, 110px)' }}
            >
              How I Build
            </h2>
            <p className="max-w-2xl text-[#D7E2EA]/70 font-light text-sm sm:text-base md:text-lg leading-relaxed">
              A disciplined, security-first development lifecycle designed to deliver robust, high-performance products on schedule.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {STEPS.map((s, i) => {
            const Icon = s.icon;
            return (
              <FadeIn key={s.step} delay={i * 0.1} y={25} className="h-full">
                <SpotlightCard className="h-full p-6 flex flex-col justify-between group">
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-[#8FE3D6] font-mono text-sm font-bold px-3 py-1 rounded-full border border-[#8FE3D6]/30 bg-[#8FE3D6]/10">
                        {s.step}
                      </span>
                      <div className="p-2 rounded-xl bg-[#1A1D21] border border-[#2A2D31] text-[#D7E2EA]/80 group-hover:text-[#8FE3D6] transition-colors">
                        <Icon size={18} />
                      </div>
                    </div>

                    <h3 className="text-[#D7E2EA] font-medium uppercase text-lg sm:text-xl mb-1.5">
                      {s.title}
                    </h3>
                    <p className="text-[#8FE3D6]/90 text-xs font-mono mb-4">
                      {s.tagline}
                    </p>
                    <p className="text-[#D7E2EA]/65 font-light text-xs sm:text-sm leading-relaxed mb-6">
                      {s.description}
                    </p>
                  </div>

                  <div className="border-t border-[#2A2D31]/80 pt-4">
                    <ul className="space-y-1.5">
                      {s.actions.map((act) => (
                        <li key={act} className="text-[11px] text-[#D7E2EA]/60 flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-[#8FE3D6]" />
                          <span>{act}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </SpotlightCard>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
