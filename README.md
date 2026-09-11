# Faris — Portfolio

A dark, motion-driven portfolio for **Faris (farixzz)** — cybersecurity engineer, full-stack systems builder, and offensive security researcher.

Built with React, TypeScript, Tailwind CSS, and Framer Motion.

## Sections

1. **Hero** — full-screen intro with a magnetic hover portrait, nav, and a tagline.
2. **Marquee** — two scroll-linked rows of the tools in the stack (React, FastAPI, Docker, Nmap, Metasploit, LangGraph, Ollama, and more).
3. **About** — bio with a character-by-character scroll reveal.
4. **Expertise** — five pillars: Full-Stack Development, Offensive Security & VAPT, Security Automation & AI, SOC & Threat Analysis, Technical Research & Writing.
5. **Projects** — sticky, stacking cards for ARES, Project UMBRA, and the Cyber Recon Scanner.
6. **Footer / Contact** — email and social links.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview
```

## Customizing content

- **Nav links / copy**: edit `src/components/HeroSection.tsx`.
- **Tech stack marquee**: edit `ROW_1` / `ROW_2` in `src/components/MarqueeSection.tsx`.
- **Bio text**: edit `ABOUT_TEXT` in `src/components/AboutSection.tsx`.
- **Expertise list**: edit `SERVICES` in `src/components/ServicesSection.tsx`.
- **Projects**: edit `PROJECTS` in `src/components/ProjectsSection.tsx`. Each project currently uses generated icon panels in place of screenshots — swap `ImagePanel` for real `<img>` tags once you have project screenshots to drop in.
- **Contact links**: edit the `Footer` component in `src/App.tsx` (email, GitHub, LinkedIn).
- **Portrait**: the hero uses a generated abstract SVG (`TerminalPortrait` inside `HeroSection.tsx`) instead of a real photo — swap it for your own headshot or illustration whenever you're ready.

## Notes

- All non-decorative imagery (hero portrait, project screenshots) is currently a stylized placeholder rather than a real photo, since none was supplied — swap these out with your own assets.
- Respects `prefers-reduced-motion`.
