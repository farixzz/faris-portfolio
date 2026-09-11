import React from 'react';

interface LiveProjectButtonProps {
  label?: string;
  href?: string;
  className?: string;
}

export default function LiveProjectButton({
  label = 'Live Project',
  href = '#',
  className = '',
}: LiveProjectButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={'inline-block rounded-full border-2 border-[#D7E2EA]/70 text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base transition-all duration-200 hover:border-[#D7E2EA] hover:bg-[#D7E2EA]/10 hover:-translate-y-0.5 active:translate-y-0 ' + className}
    >
      {label}
    </a>
  );
}
