import React from 'react';
import { ShieldHalf, Terminal, Lock, Radar } from 'lucide-react';
import FadeIn from './FadeIn';
import AnimatedText from './AnimatedText';
import ContactButton from './ContactButton';

const ABOUT_TEXT =
  "i'm faris, a cybersecurity engineer and full-stack systems builder working across offensive security, secure architecture, and applied ai. i design and ship autonomous recon platforms, threat intelligence pipelines, and reactive web applications end to end, from the api layer to the exploit chain. let's build something resilient together!";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center px-5 sm:px-8 md:px-10 py-20 overflow-hidden"
    >
      <FadeIn
        delay={0.1}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] opacity-30"
      >
        <ShieldHalf className="w-[70px] sm:w-[90px] md:w-[120px] h-auto" color="#BBCCD7" strokeWidth={1} />
      </FadeIn>

      <FadeIn
        delay={0.25}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] opacity-25"
      >
        <Terminal className="w-[60px] sm:w-[80px] md:w-[100px] h-auto" color="#BBCCD7" strokeWidth={1} />
      </FadeIn>

      <FadeIn
        delay={0.15}
        x={80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] opacity-30"
      >
        <Radar className="w-[70px] sm:w-[90px] md:w-[120px] h-auto" color="#BBCCD7" strokeWidth={1} />
      </FadeIn>

      <FadeIn
        delay={0.3}
        x={80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] opacity-25"
      >
        <Lock className="w-[75px] sm:w-[95px] md:w-[125px] h-auto" color="#BBCCD7" strokeWidth={1} />
      </FadeIn>

      <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16 relative z-10">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About me
          </h2>
        </FadeIn>

        <div className="flex flex-col items-center gap-16 sm:gap-20 md:gap-24">
          <AnimatedText
            text={ABOUT_TEXT}
            className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[560px]"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
          />
          <ContactButton />
        </div>
      </div>
    </section>
  );
}
