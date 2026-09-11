import React from 'react';

interface ProjectTerminalProps {
  title: string;
  lines: string[];
}

export default function ProjectTerminal({ title, lines }: ProjectTerminalProps) {
  return (
    <div className="rounded-2xl border border-[#2A2D31] bg-[#0A0B0D] overflow-hidden font-mono">
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-[#2A2D31] bg-[#111214]">
        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
        <span className="ml-3 text-[#D7E2EA]/40 text-xs truncate">{title}</span>
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
      </div>
    </div>
  );
}