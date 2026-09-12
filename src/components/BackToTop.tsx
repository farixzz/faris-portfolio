import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

const SHOW_AFTER_PX = 600;

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > SHOW_AFTER_PX);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className={
        'fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-40 w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-[#D7E2EA]/25 bg-[#111214] text-[#D7E2EA] flex items-center justify-center transition-all duration-300 hover:border-[#D7E2EA]/70 hover:-translate-y-1 ' +
        (visible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-3 pointer-events-none')
      }
    >
      <ArrowUp size={20} />
    </button>
  );
}