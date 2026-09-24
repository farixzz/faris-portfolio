import React from 'react';

interface ProjectTerminalProps {
  title: string;
  lines: string[];
}

export default function ProjectTerminal({ title, lines }: ProjectTerminalProps) {
  return (
    <div className="rounded-2xl border border-[#2A2D31] bg-[#0A0B0D] overflow-hidden font-mono shadow-inner">
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-[#2A2D31] bg-[#111214]">
        <div className="flex items-center gap-2 min-w-0">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
          <span className="ml-3 text-[#D7E2EA]/40 text-xs truncate">{title}</span>
        </div>
        <div className="flex items-center gap-2 text-[10px] text-[#8FE3D6]/80 uppercase tracking-widest pl-2 flex-shrink-0">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#27C93F] opacity-75" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#27C93F]" />
          </span>
          <span className="hidden sm:inline font-mono">telemetry active</span>
        </div>
      </div>
      <div className="px-4 py-3 sm:px-5 sm:py-4 flex flex-col gap-1.5">
        {lines.map((line, i) => {
          const isCommand = line.startsWith('$ ');
          return (
            <p
              key={i}
              className={
                isCommand
                  ? 'text-[#8FE3D6] text-xs sm:text-sm'
                  : 'text-[#D7E2EA]/70 text-xs sm:text-sm pl-3'
              }
            >
              {isCommand ? line : '> ' + line}
            </p>
          );
        })}
        {/* Active blinking terminal prompt */}
        <div className="flex items-center gap-1.5 pt-1 text-[#8FE3D6] text-xs sm:text-sm">
          <span className="text-[#8FE3D6]/50">$</span>
          <span className="inline-block w-2 h-3.5 bg-[#8FE3D6] animate-pulse" />
        </div>
      </div>
    </div>
  );
}