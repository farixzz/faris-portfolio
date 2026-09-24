import React, { useRef, useState } from 'react';

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
}

export default function SpotlightCard({
  children,
  className = '',
  spotlightColor = 'rgba(143, 227, 214, 0.12)',
  ...props
}: SpotlightCardProps) {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden rounded-3xl border border-[#2A2D31] bg-[#111214] transition-colors duration-300 hover:border-[#8FE3D6]/40 ${className}`}
      {...props}
    >
      {/* Radial spotlight follower */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 hidden md:block"
        style={{
          opacity,
          background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 80%)`,
        }}
      />
      {/* Mobile static subtle corner illumination */}
      <div
        className="pointer-events-none absolute -top-12 -right-12 w-28 h-28 rounded-full bg-[#8FE3D6]/5 blur-2xl md:hidden"
      />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}
