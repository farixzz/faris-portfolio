import React from 'react';
import { Code2, Bot, ShieldAlert, Radar, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import FadeIn from './FadeIn';
import SpotlightCard from './SpotlightCard';

interface ServiceItem {
  number: string;
  icon: React.ElementType;
  name: string;
  tagline: string;
  description: string;
  deliverables: string[];
  tech: string[];
}

const SERVICES: ServiceItem[] = [
  {
    number: '01',
    icon: Code2,
    name: 'Full-Stack SaaS & Web Applications',
    tagline: 'Resilient, high-concurrency web platforms from DB to frontend',
    description:
      'Architecting and shipping responsive web apps, reactive dashboards, and resilient APIs. From high-concurrency FastAPI/Node.js backends and relational database modeling to modern React/TypeScript frontends with real-time WebSockets.',
    deliverables: [
      'Scalable Web & SaaS Architecture',
      'Reactive Dashboards & Real-time UIs',
      'High-Performance REST & WebSocket APIs',
      'Database Optimization & Redis Caching',
    ],
    tech: ['React', 'TypeScript', 'FastAPI', 'Node.js', 'PostgreSQL', 'Docker', 'Tailwind CSS'],
  },
  {
    number: '02',
    icon: Bot,
    name: 'Autonomous AI & Agentic Systems',
    tagline: 'Custom agentic workflows, private LLMs & zero-telemetry pipelines',
    description:
      'Building intelligent autonomous pipelines that replace manual chains with graph-based AI decision engines. Multi-agent orchestration with LangGraph, private zero-telemetry local inference via Ollama, and MCP (Model Context Protocol) tool servers.',
    deliverables: [
      'Multi-Agent Decision Workflows (LangGraph)',
      'Zero-Telemetry Local LLM Deployments (Ollama)',
      'Custom Model Context Protocol (MCP) Tools',
      'Prompt Injection & LLM Security Hardening',
    ],
    tech: ['LangGraph', 'Ollama', 'Python', 'FastAPI', 'MCP Protocol', 'Gemini API', 'Vector Search'],
  },
  {
    number: '03',
    icon: ShieldAlert,
    name: 'Offensive Security & VAPT Audits',
    tagline: 'Source-code-level penetration testing & vulnerability assessment',
    description:
      'Rigorous offensive security testing across your web, API, and cloud infrastructure. Instead of relying solely on automated scanners, I dissect logic flaws, broken object-level authorizations (BOLA), and exploit chains directly at the architecture level.',
    deliverables: [
      'Full Web & API Penetration Testing (VAPT)',
      'Codebase & Architecture Security Review',
      'OWASP Top 10 Vulnerability Remediation',
      'Executive Risk Assessment & Technical Briefing',
    ],
    tech: ['Burp Suite', 'Nmap', 'SQLMap', 'Metasploit', 'Nikto', 'Kali Linux', 'Python Scripts'],
  },
  {
    number: '04',
    icon: Radar,
    name: 'Threat Intelligence & Detection Engineering',
    tagline: 'Centralized threat pipelines & behavioral anomaly detection',
    description:
      'Custom cyber threat intelligence and SOC telemetry pipelines grounded in CEH v13-AI methodology. Ingesting and correlating OSINT indicators of compromise (IOCs), crafting custom detection signatures, and deploying automated triage workflows.',
    deliverables: [
      'Automated IOC Enrichment & AI Scoring',
      'Custom Detection Signatures (YARA / Sigma)',
      'Kernel & Syscall Behavioral Auditing',
      'Incident Triage & SIEM Pipeline Integration',
    ],
    tech: ['Wazuh', 'auditd', 'Python', 'Scapy', 'VirusTotal API', 'YARA', 'CEH v13-AI'],
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative z-10 bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <div className="max-w-6xl mx-auto">
        <FadeIn delay={0} y={30}>
          <div className="flex flex-col items-center text-center mb-16 sm:mb-20">
            <span className="text-[#8FE3D6] uppercase tracking-[0.35em] text-xs sm:text-sm font-medium mb-3">
              Client Solutions
            </span>
            <h2
              className="hero-heading font-black uppercase leading-none tracking-tight mb-5"
              style={{ fontSize: 'clamp(2.8rem, 9vw, 130px)' }}
            >
              Services
            </h2>
            <p className="max-w-2xl text-[#D7E2EA]/70 font-light text-sm sm:text-base md:text-lg leading-relaxed">
              Enterprise-grade security, production full-stack platforms, and autonomous AI systems built to withstand adversarial real-world conditions.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <FadeIn key={service.number} delay={i * 0.1} y={30} className="h-full">
                <SpotlightCard className="group h-full p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    {/* Header: Number, Icon, and Tagline */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <span className="text-[#8FE3D6] font-mono text-sm sm:text-base font-bold px-3 py-1 rounded-full border border-[#8FE3D6]/30 bg-[#8FE3D6]/10">
                          {service.number}
                        </span>
                        <div className="p-2 rounded-xl bg-[#1A1D21] border border-[#2A2D31] text-[#D7E2EA]">
                          <Icon size={20} />
                        </div>
                      </div>
                      <a
                        href="#contact"
                        className="text-[#D7E2EA]/40 transition-all duration-200 group-hover:text-[#8FE3D6] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        aria-label={`Inquire about ${service.name}`}
                      >
                        <ArrowUpRight size={22} />
                      </a>
                    </div>

                    <h3 className="text-[#D7E2EA] font-medium uppercase text-xl sm:text-2xl mb-2">
                      {service.name}
                    </h3>
                    <p className="text-[#8FE3D6]/90 text-xs sm:text-sm font-mono tracking-wide mb-4">
                      {service.tagline}
                    </p>
                    <p className="text-[#D7E2EA]/65 font-light text-xs sm:text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Deliverables List */}
                    <div className="mb-6 border-t border-[#2A2D31]/80 pt-5">
                      <span className="text-[#D7E2EA]/40 uppercase tracking-widest text-[11px] font-medium block mb-3">
                        Key Deliverables
                      </span>
                      <ul className="space-y-2">
                        {service.deliverables.map((item) => (
                          <li key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#D7E2EA]/85">
                            <CheckCircle2 size={15} className="text-[#8FE3D6] flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="border-t border-[#2A2D31]/80 pt-5 mt-auto">
                    <span className="text-[#D7E2EA]/40 uppercase tracking-widest text-[11px] font-medium block mb-2.5">
                      Tech & Protocols
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {service.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-[#2A2D31] bg-[#16181B] text-[#D7E2EA]/75 text-[11px] px-2.5 py-1"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
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
