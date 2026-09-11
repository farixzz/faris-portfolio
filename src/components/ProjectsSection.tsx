import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Bot,
  Radar,
  Boxes,
  ShieldCheck,
  Network,
  Terminal as TerminalIcon,
  Eye,
  Activity,
  Wifi,
  FlaskConical,
  BarChart3,
  Cpu,
} from 'lucide-react';
import FadeIn from './FadeIn';
import LiveProjectButton from './LiveProjectButton';
import ProjectTerminal from './ProjectTerminal';
import { PROJECTS, Project } from '../data/projects';

const ICONS: Record<string, React.ElementType> = {
  Bot,
  Radar,
  Boxes,
  ShieldCheck,
  Network,
  Terminal: TerminalIcon,
  Eye,
  Activity,
  Wifi,
  FlaskConical,
  BarChart3,
  Cpu,
};

function Thumbnail({ iconName, label }: { iconName: string; label: string }) {
  const Icon = ICONS[iconName] || TerminalIcon;
  return (
    <div
      className="flex-1 min-w-0 rounded-2xl flex flex-col items-center justify-center gap-1.5 text-center px-2 py-3 sm:py-4 transition-all duration-200 hover:border-[#8FE3D6]/50"
      style={{
        background: 'linear-gradient(160deg, #1B1D21 0%, #0C0C0C 100%)',
        border: '1px solid rgba(215, 226, 234, 0.15)',
      }}
    >
      <Icon size={22} color="#BBCCD7" strokeWidth={1.3} />
      <span className="text-[#D7E2EA] uppercase tracking-widest text-[10px] sm:text-xs opacity-70 truncate w-full">
        {label}
      </span>
    </div>
  );
}

function StatusDot({ status }: { status: Project['status'] }) {
  const config = {
    live: { color: '#27C93F', textColor: '#8FE3D6', label: 'Live' },
    deploying: { color: '#4FA8FF', textColor: '#8FC3FF', label: 'Deploying Soon' },
    building: { color: '#FFBD2E', textColor: '#FFBD2E', label: 'In Development' },
  }[status];

  return (
    <span className="inline-flex items-center gap-2 text-xs sm:text-sm uppercase tracking-widest">
      <span className="w-2 h-2 rounded-full" style={{ background: config.color }} />
      <span style={{ color: config.textColor }}>{config.label}</span>
    </span>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ['start start', 'end start'],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0, 0.6]);

  return (
    <div ref={wrapperRef} className="relative h-[145vh] sm:h-[125vh] md:h-[115vh]">
      <div className="sticky top-4 sm:top-6 md:top-8">
        <motion.div
          style={{ scale }}
          className="relative w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] overflow-hidden"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            className="p-4 sm:p-6 md:p-8"
          >
            <div className="flex flex-wrap items-start justify-between gap-4 mb-5 md:mb-6">
              <div className="flex items-center gap-4 md:gap-8">
                <span
                  className="text-[#D7E2EA] font-black"
                  style={{ fontSize: 'clamp(2.5rem, 7vw, 90px)', lineHeight: 1 }}
                >
                  {project.number}
                </span>
                <div className="flex flex-col gap-1.5">
                  <span className="text-[#D7E2EA]/50 uppercase tracking-widest text-xs sm:text-sm">
                    {project.category}
                  </span>
                  <h3 className="text-[#D7E2EA] font-medium uppercase text-2xl sm:text-3xl md:text-4xl">
                    {project.name}
                  </h3>
                </div>
              </div>
              <StatusDot status={project.status} />
            </div>

            <p className="text-[#D7E2EA]/75 font-light leading-relaxed text-sm sm:text-base max-w-3xl mb-4 sm:mb-5">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-5 sm:mb-6">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-[#3A3F45] text-[#D7E2EA]/80 text-xs px-3 py-1"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mb-4 sm:mb-5">
              <ProjectTerminal
                title={'faris@' + project.name.toLowerCase().split(' ').join('-') + ':~'}
                lines={project.terminalLines}
              />
            </div>

            <div className="flex gap-2 sm:gap-3 mb-5 sm:mb-6">
              <Thumbnail iconName={project.panels[0].icon} label={project.panels[0].label} />
              <Thumbnail iconName={project.panels[1].icon} label={project.panels[1].label} />
              <Thumbnail iconName={project.panels[2].icon} label={project.panels[2].label} />
            </div>

            {project.links.length > 0 ? (
              <div className="flex flex-wrap gap-3">
                {project.links.map((link) => (
                  <LiveProjectButton key={link.label} href={link.url} label={link.label} />
                ))}
              </div>
            ) : (
              <p className="text-[#D7E2EA]/35 uppercase tracking-widest text-xs">
                {project.status === 'building'
                  ? 'Not public yet — still in development'
                  : project.status === 'deploying'
                  ? 'Code not public yet — deploying soon'
                  : 'Code not public yet'}
              </p>
            )}
          </motion.div>

          <motion.div
            style={{ opacity: overlayOpacity }}
            className="absolute inset-0 bg-black pointer-events-none"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative z-10 bg-[#0C0C0C] px-5 sm:px-8 md:px-10 pt-10 sm:pt-12 md:pt-14 pb-20 sm:pb-24 md:pb-28"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Project
        </h2>
      </FadeIn>

      <div className="max-w-6xl mx-auto">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.number} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}