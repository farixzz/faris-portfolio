import React from 'react';


interface ContactButtonProps { 
  label?: string;
  href?: string
  onClick?: () => void;
  className?: string;
}

export default function ContactButton({
  label = 'Contact Me',
  href = '#contact',
  onClick,
  className = '',
}: ContactButtonProps) {
  return (
    <a href={href}
    onClick={onClick}
    className={
    'inline-block rounded-full px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base text-white font-medium uppercase tracking-widest transition-all duration-300 hover:scale-[1.03] shadow-[0px_4px_4px_rgba(181,1,167,0.25),4px_4px_12px_#7721B1_inset] hover:shadow-[0px_6px_22px_rgba(182,0,168,0.55),4px_4px_16px_#7721B1_inset] ' +
    className
  }
  style={{ 
    background:
    'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)', 
    outline: '2px solid white', 
    outlineOffset: '-3px', 
}}
  > 
    {label}
    </a>
  );
}