import React from 'react';
import FadeIn from './FadeIn';

const SERVICES = [
  {
    number: '01',
    name: 'Full-Stack Development',
    description:
      'Responsive React interfaces and reactive Reflex UIs paired with FastAPI backends, async task handling, and local or remote LLM integrations for data-intensive dashboards and client products.',
  },
  {
    number: '02',
    name: 'Offensive Security & VAPT',
    description:
      'Vulnerability assessment and penetration testing across web, API, and network surfaces, understanding flaws at the codebase and architecture level rather than only through off-the-shelf scanners.',
  },
  {
    number: '03',
    name: 'Security Automation & AI',
    description:
      'End-to-end platforms such as ARES and Project UMBRA, combining LangGraph agents, local inference via Ollama, and automated detection rules to turn raw recon and OSINT into action.',
  },
  {
    number: '04',
    name: 'SOC & Threat Analysis',
    description:
      'Monitoring, triage, and threat analysis grounded in CEH v13-AI methodology, mapping detection coverage against real authorization bypasses and supply chain attack patterns.',
  },
  {
    number: '05',
    name: 'Technical Research & Writing',
    description:
      'Teardowns of vulnerabilities and supply chain compromises, OSINT investigation reports, and documentation that make complex threat vectors legible to technical and non-technical readers alike.',
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <FadeIn delay={0} y={30}>
        <h2
          className="text-[#0C0C0C] font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Services
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto">
        {SERVICES.map((service, i) => (
          <FadeIn key={service.number} delay={i * 0.1} y={30}>
            <div
              className="group flex items-start gap-6 sm:gap-10 py-8 sm:py-10 md:py-12 transition-all duration-300 hover:pl-3 sm:hover:pl-5 cursor-default"
              style={{
                borderBottom:
                  i === SERVICES.length - 1 ? 'none' : '1px solid rgba(12, 12, 12, 0.15)',
                borderTop: i === 0 ? '1px solid rgba(12, 12, 12, 0.15)' : 'none',
              }}
            >
              <span
                className="text-[#0C0C0C] font-black flex-shrink-0 transition-opacity duration-300 group-hover:opacity-40"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)', lineHeight: 1 }}
              >
                {service.number}
              </span>
              <div className="flex flex-col gap-3 sm:gap-4 pt-2 sm:pt-4">
                <h3
                  className="text-[#0C0C0C] font-medium uppercase"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {service.name}
                </h3>
                <p
                  className="text-[#0C0C0C] font-light leading-relaxed max-w-2xl transition-opacity duration-300 group-hover:opacity-90"
                  style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)', opacity: 0.6 }}
                >
                  {service.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
