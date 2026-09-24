import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
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
  Zap,
  Layers,
} from 'lucide-react';
import FadeIn from './FadeIn';
import LiveProjectButton from './LiveProjectButton';
import ProjectTerminal from './ProjectTerminal';
import ArchitectureModal from './ArchitectureModal';
import { PROJECTS, Project, ProjectTag } from '../data/projects';

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
  Zap,
  Layers,
};

const FILTER_TABS: ProjectTag[] = [
  'All',
  'AI & Autonomous',
  'Full-Stack Platforms',
  'Cybersecurity & VAPT',
];

function CapabilityPanel({
  iconName,
  label,
  metric,
}: {
  iconName: string;
  label: string;
  metric?: string;
}) {
  const Icon = ICONS[iconName] || TerminalIcon;
  return (
    <div
      className="flex-1 min-w-0 rounded-2xl flex flex-col items-center justify-center gap-1.5 text-center px-3 py-3 sm:py-4 transition-all duration-200 hover:border-[#8FE3D6]/50"
      style={{
        background: 'linear-gradient(160deg, #181A1D 0%, #0C0C0C 100%)',
        border: '1px solid rgba(215, 226, 234, 0.12)',
      }}
    >
      <Icon size={20} color="#8FE3D6" strokeWidth={1.5} />
      {metric && (
        <span className="text-[10px] sm:text-xs font-mono text-[#8FE3D6] font-semibold truncate w-full px-1">
          {metric}
        </span>
      )}
      <span className="text-[#D7E2EA] uppercase tracking-widest text-[9px] sm:text-[11px] opacity-70 truncate w-full">
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

function ProjectCard({
  project,
  index,
  onOpenArchitecture,
}: {
  project: Project;
  index: number;
  onOpenArchitecture: (p: Project) => void;
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ['start start', 'end start'],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0, 0.55]);

  return (
    <div ref={wrapperRef} className="relative h-[145vh] sm:h-[125vh] md:h-[115vh]">
      <div className="sticky top-4 sm:top-6 md:top-8">
        <motion.div
          style={{ scale }}
          className="relative w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA]/70 bg-[#0C0C0C] overflow-hidden shadow-2xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            className="p-4 sm:p-6 md:p-8"
          >
            <div className="flex flex-wrap items-start justify-between gap-4 mb-4 md:mb-5">
              <div className="flex items-center gap-4 md:gap-8">
                <span
                  className="text-[#D7E2EA] font-black"
                  style={{ fontSize: 'clamp(2.5rem, 7vw, 90px)', lineHeight: 1 }}
                >
                  {project.number}
                </span>
                <div className="flex flex-col gap-1.5">
                  <span className="text-[#8FE3D6] uppercase tracking-widest text-xs font-mono">
                    {project.category}
                  </span>
                  <h3 className="text-[#D7E2EA] font-medium uppercase text-2xl sm:text-3xl md:text-4xl">
                    {project.name}
                  </h3>
                </div>
              </div>
              <StatusDot status={project.status} />
            </div>

            {/* Architectural Highlight Banner */}
            <div className="flex items-center gap-2.5 rounded-xl border border-[#8FE3D6]/20 bg-[#8FE3D6]/5 px-3.5 py-2 mb-4">
              <Zap size={14} className="text-[#8FE3D6] flex-shrink-0" />
              <span className="text-xs font-mono text-[#8FE3D6] truncate">
                {project.architectureHighlight}
              </span>
            </div>

            <p className="text-[#D7E2EA]/75 font-light leading-relaxed text-sm sm:text-base max-w-3xl mb-4 sm:mb-5">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-5 sm:mb-6">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-[#3A3F45] bg-[#141518] text-[#D7E2EA]/80 text-xs px-3 py-1 font-mono"
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
              <CapabilityPanel
                iconName={project.panels[0].icon}
                label={project.panels[0].label}
                metric={project.panels[0].metric}
              />
              <CapabilityPanel
                iconName={project.panels[1].icon}
                label={project.panels[1].label}
                metric={project.panels[1].metric}
              />
              <CapabilityPanel
                iconName={project.panels[2].icon}
                label={project.panels[2].label}
                metric={project.panels[2].metric}
              />
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {project.architectureDetails && (
                <button
                  onClick={() => onOpenArchitecture(project)}
                  className="inline-flex items-center gap-2 rounded-full border border-[#8FE3D6] bg-[#8FE3D6]/10 px-5 py-3 text-xs uppercase tracking-widest font-mono text-[#8FE3D6] transition-all hover:bg-[#8FE3D6] hover:text-[#0C0C0C]"
                >
                  <Layers size={14} />
                  Deep Dive & Threat Model
                </button>
              )}
              {project.links.map((link) => (
                <LiveProjectButton key={link.label} href={link.url} label={link.label} />
              ))}
              {project.links.length === 0 && !project.architectureDetails && (
                <p className="text-[#D7E2EA]/35 uppercase tracking-widest text-xs">
                  {project.status === 'building'
                    ? 'Not public yet — still in development'
                    : project.status === 'deploying'
                    ? 'Code not public yet — deploying soon'
                    : 'Code not public yet'}
                </p>
              )}
            </div>
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
  const [activeTab, setActiveTab] = useState<ProjectTag>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    activeTab === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.tag === activeTab);

  return (
    <section
      id="projects"
      className="relative z-10 bg-[#0C0C0C] px-5 sm:px-8 md:px-10 pt-10 sm:pt-14 md:pt-16 pb-20 sm:pb-24 md:pb-28"
    >
      <FadeIn delay={0} y={40}>
        <div className="flex flex-col items-center text-center mb-10 sm:mb-12">
          <span className="text-[#8FE3D6] uppercase tracking-[0.35em] text-xs sm:text-sm font-medium mb-3">
            Selected Work
          </span>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight mb-4"
            style={{ fontSize: 'clamp(2.8rem, 9vw, 130px)' }}
          >
            Projects
          </h2>
          <p className="max-w-2xl text-[#D7E2EA]/70 font-light text-sm sm:text-base leading-relaxed mb-8">
            Production architectures, autonomous AI pipelines, and defensive security systems engineered from the kernel to the interface.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 p-1.5 rounded-full border border-[#2A2D31] bg-[#111214]/80 backdrop-blur-md">
            {FILTER_TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm uppercase tracking-wider font-medium transition-all duration-200 ${
                  activeTab === tab
                    ? 'bg-[#D7E2EA] text-[#0C0C0C] shadow-md'
                    : 'text-[#D7E2EA]/60 hover:text-[#D7E2EA] hover:bg-[#1C1E22]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </FadeIn>

      <div className="max-w-6xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
          >
            {filteredProjects.map((project, i) => (
              <ProjectCard
                key={project.number}
                project={project}
                index={i}
                onOpenArchitecture={(p) => setSelectedProject(p)}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Interactive Deep Dive Modal */}
      <ArchitectureModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}