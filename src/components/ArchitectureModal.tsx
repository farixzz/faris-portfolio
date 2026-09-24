import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldAlert, Cpu, CheckCircle2, Zap, ArrowRight, Lock } from 'lucide-react';
import { Project } from '../data/projects';

interface ArchitectureModalProps {
  project: Project | null;
  onClose: () => void;
}

type TabKey = 'threat' | 'dataflow' | 'hardening';

export default function ArchitectureModal({ project, onClose }: ArchitectureModalProps) {
  const [activeTab, setActiveTab] = useState<TabKey>('threat');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;
  const details = project.architectureDetails;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#0C0C0C]/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 350 }}
          className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-3xl border border-[#2A2D31] bg-[#111214] p-6 sm:p-8 shadow-2xl z-10 flex flex-col gap-6 text-[#D7E2EA]"
        >
          {/* Header */}
          <div className="flex items-start justify-between gap-4 border-b border-[#2A2D31] pb-5">
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-[#8FE3D6] uppercase tracking-widest">
                  Architecture & Threat Model
                </span>
                <span className="text-xs font-mono text-[#D7E2EA]/40">·</span>
                <span className="text-xs font-mono text-[#D7E2EA]/60">{project.name}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[#D7E2EA]">
                {project.name} Deep Dive
              </h3>
            </div>
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="rounded-full border border-[#2A2D31] bg-[#16181B] p-2 text-[#D7E2EA]/70 transition-colors hover:border-[#8FE3D6] hover:text-[#8FE3D6]"
            >
              <X size={20} />
            </button>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-2 border-b border-[#2A2D31] pb-3">
            <button
              onClick={() => setActiveTab('threat')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                activeTab === 'threat'
                  ? 'bg-[#8FE3D6]/15 text-[#8FE3D6] border border-[#8FE3D6]/30'
                  : 'text-[#D7E2EA]/60 hover:text-[#D7E2EA] hover:bg-[#1A1D21]'
              }`}
            >
              <ShieldAlert size={15} />
              Threat Model & Vectors
            </button>
            <button
              onClick={() => setActiveTab('dataflow')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                activeTab === 'dataflow'
                  ? 'bg-[#8FE3D6]/15 text-[#8FE3D6] border border-[#8FE3D6]/30'
                  : 'text-[#D7E2EA]/60 hover:text-[#D7E2EA] hover:bg-[#1A1D21]'
              }`}
            >
              <Cpu size={15} />
              Data Flow & AI Nodes
            </button>
            <button
              onClick={() => setActiveTab('hardening')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                activeTab === 'hardening'
                  ? 'bg-[#8FE3D6]/15 text-[#8FE3D6] border border-[#8FE3D6]/30'
                  : 'text-[#D7E2EA]/60 hover:text-[#D7E2EA] hover:bg-[#1A1D21]'
              }`}
            >
              <Lock size={15} />
              Hardening & Benchmarks
            </button>
          </div>

          {/* Tab Content */}
          <div className="flex-1">
            {details ? (
              <>
                {/* Tab 1: Threat Model */}
                {activeTab === 'threat' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col gap-5"
                  >
                    <div className="flex items-center justify-between p-4 rounded-2xl border border-red-500/20 bg-red-500/5">
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-widest text-red-400/70 block">
                          Risk Classification
                        </span>
                        <span className="text-sm font-mono font-bold text-red-400">
                          {details.threatModel.riskLevel} SEVERITY
                        </span>
                      </div>
                      <ShieldAlert size={24} className="text-red-400" />
                    </div>

                    <div className="flex flex-col gap-2">
                      <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/50 font-medium">
                        Target Attack Vector
                      </span>
                      <p className="text-sm sm:text-base font-medium text-[#D7E2EA]">
                        {details.threatModel.vector}
                      </p>
                    </div>

                    <div className="flex flex-col gap-2 border-t border-[#2A2D31] pt-4">
                      <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/50 font-medium">
                        Exposed Attack Surface
                      </span>
                      <p className="text-sm font-light text-[#D7E2EA]/75 leading-relaxed">
                        {details.threatModel.attackSurface}
                      </p>
                    </div>
                  </motion.div>
                )}

                {/* Tab 2: Data Flow & AI Nodes */}
                {activeTab === 'dataflow' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col gap-5"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-2">
                      <div className="p-3.5 rounded-2xl border border-[#2A2D31] bg-[#16181B]">
                        <span className="text-[10px] font-mono text-[#8FE3D6] uppercase tracking-wider block mb-1">
                          Frontend Layer
                        </span>
                        <p className="text-xs text-[#D7E2EA]/80 font-light">
                          {details.systemDesign.frontendArchitecture}
                        </p>
                      </div>
                      <div className="p-3.5 rounded-2xl border border-[#2A2D31] bg-[#16181B]">
                        <span className="text-[10px] font-mono text-[#8FE3D6] uppercase tracking-wider block mb-1">
                          Backend & AI Engine
                        </span>
                        <p className="text-xs text-[#D7E2EA]/80 font-light">
                          {details.systemDesign.backendAndAI}
                        </p>
                      </div>
                    </div>

                    <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/50 font-medium">
                      Execution Pipeline Sequence
                    </span>
                    <div className="flex flex-col gap-3">
                      {details.systemDesign.dataFlow.map((step, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3 p-3.5 rounded-2xl border border-[#2A2D31]/80 bg-[#141518]"
                        >
                          <span className="flex-shrink-0 w-6 h-6 rounded-full border border-[#8FE3D6]/30 bg-[#8FE3D6]/10 text-[#8FE3D6] font-mono text-xs flex items-center justify-center font-bold">
                            {idx + 1}
                          </span>
                          <span className="text-xs sm:text-sm text-[#D7E2EA]/80 font-light leading-relaxed">
                            {step}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Tab 3: Hardening & Benchmarks */}
                {activeTab === 'hardening' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col gap-5"
                  >
                    <div className="p-4 rounded-2xl border border-[#8FE3D6]/30 bg-[#8FE3D6]/5 flex flex-col gap-2">
                      <div className="flex items-center gap-2">
                        <Zap size={16} className="text-[#8FE3D6]" />
                        <span className="text-xs font-mono text-[#8FE3D6] uppercase tracking-wider font-semibold">
                          Validated Benchmark
                        </span>
                      </div>
                      <p className="text-sm sm:text-base font-mono font-medium text-[#D7E2EA]">
                        {details.hardeningAndMetrics.benchmark}
                      </p>
                    </div>

                    <div className="flex flex-col gap-2 border-t border-[#2A2D31] pt-4">
                      <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/50 font-medium">
                        Production Mitigation Strategy
                      </span>
                      <p className="text-sm font-light text-[#D7E2EA]/80 leading-relaxed">
                        {details.hardeningAndMetrics.mitigation}
                      </p>
                    </div>
                  </motion.div>
                )}
              </>
            ) : (
              <p className="text-xs text-[#D7E2EA]/50 font-mono py-8 text-center">
                Detailed architecture specification available upon technical request.
              </p>
            )}
          </div>

          {/* Footer CTAs */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[#2A2D31] pt-5">
            <span className="text-xs font-mono text-[#D7E2EA]/40">
              Engineered with CEH v13-AI & zero-trust rigor
            </span>
            <div className="flex items-center gap-2">
              <a
                href="#contact"
                onClick={onClose}
                className="inline-flex items-center gap-2 rounded-full border border-[#8FE3D6] bg-[#8FE3D6]/15 px-4 py-2 text-xs uppercase tracking-widest font-mono text-[#8FE3D6] transition-colors hover:bg-[#8FE3D6] hover:text-[#0C0C0C]"
              >
                Inquire About Similar Architecture
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
