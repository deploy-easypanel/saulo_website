import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Instagram, Linkedin } from 'lucide-react';
import Image from 'next/image';
import TypewriterText from './TypewriterText';

const orbitIcons = [
  { src: '/icons/javascript.svg', name: 'JavaScript' },
  { src: '/icons/typescript.svg', name: 'TypeScript' },
  { src: '/icons/react.svg', name: 'React' },
  { src: '/icons/nodejs.svg', name: 'Node.js' },
  { src: '/icons/nextjs.svg', name: 'Next.js' },
  { src: '/icons/python.svg', name: 'Python' },
  { src: '/icons/docker.svg', name: 'Docker' },
];

const RADIUS = 128;
const ICON_HALF = 20;

export default function Hero() {
  const icons = orbitIcons.map((icon, i) => {
    const angle = (i / orbitIcons.length) * 2 * Math.PI - Math.PI / 2;
    return {
      ...icon,
      x: RADIUS * Math.cos(angle),
      y: RADIUS * Math.sin(angle),
    };
  });

  return (
    <section className="relative min-h-screen bg-slate-900 flex items-center overflow-hidden">
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.1] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #94a3b8 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
      {/* Ambient glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/[0.06] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-blue-500/[0.04] rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full px-6 md:px-28 py-28 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left: text */}
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-500/20 bg-green-500/[0.08] text-green-400 text-xs mb-8 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            Disponível para projetos
          </div>

          <p className="animate-fade-in animation-delay-100 font-mono text-xs text-blue-600/70 tracking-[0.2em] uppercase mb-5">
            // software developer
          </p>

          <h1 className="animate-fade-in-up animation-delay-100 font-display font-bold leading-[1.0] mb-4">
            <span className="block text-6xl md:text-7xl text-[#F0EDE8]">Saulo</span>
            <span className="block text-6xl md:text-7xl text-blue-500">Justiniano</span>
          </h1>

          <div className="h-6 mb-6 animate-fade-in animation-delay-200">
            <TypewriterText />
          </div>

          <p className="animate-fade-in-up animation-delay-200 text-[#8B8B95] text-base leading-relaxed max-w-md mb-8">
            Transformo ideias em interfaces e sistemas digitais de alto impacto.
            Especializado em React, Next.js e Node.js.
          </p>

          <div className="animate-fade-in-up animation-delay-300 flex flex-wrap gap-3 mb-8">
            <a href="#sobre">
              <Button className="bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg px-6 transition-colors">
                Saiba mais
              </Button>
            </a>
            <a href="#projetos">
              <Button
                variant="outline"
                className="border-white/10 text-[#C0BDB8] hover:bg-white/5 hover:text-[#F0EDE8] rounded-lg px-6 transition-colors"
              >
                Ver projetos
              </Button>
            </a>
          </div>

          <div className="animate-fade-in-up animation-delay-400 flex gap-3">
            {[
              { href: 'https://github.com/saulojustiniano1', Icon: Github, label: 'GitHub' },
              { href: 'https://linkedin.com/in/saulojustiniano/', Icon: Linkedin, label: 'LinkedIn' },
              { href: 'https://instagram.com/saulojustiniano', Icon: Instagram, label: 'Instagram' },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/10 border border-white/[0.08] flex items-center justify-center text-[#8B8B95] hover:text-[#F0EDE8] transition-all duration-200"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Right: orbit ring + code visual */}
        <div className="flex items-center justify-center animate-fade-in animation-delay-200">
          <div className="relative" style={{ width: '300px', height: '300px' }}>
            {/* Dashed outer ring */}
            <div className="absolute inset-0 rounded-full border border-dashed border-blue-600/15" />
            {/* Inner subtle ring */}
            <div className="absolute inset-10 rounded-full border border-white/5" />
            {/* Glow */}
            <div className="absolute inset-14 bg-blue-600/10 rounded-full blur-2xl" />

            {/* Orbit container — rotates clockwise */}
            <div className="absolute inset-0 animate-orbit-cw">
              {icons.map((icon) => (
                <div
                  key={icon.name}
                  className="absolute"
                  style={{
                    left: `calc(50% + ${icon.x}px - ${ICON_HALF}px)`,
                    top: `calc(50% + ${icon.y}px - ${ICON_HALF}px)`,
                    width: `${ICON_HALF * 2}px`,
                    height: `${ICON_HALF * 2}px`,
                  }}
                >
                  <div
                    title={icon.name}
                    className="w-full h-full animate-orbit-ccw bg-slate-700 border border-white/10 rounded-xl flex items-center justify-center shadow-lg hover:border-blue-600/30 transition-colors"
                  >
                    <Image src={icon.src} alt={icon.name} width={22} height={22} />
                  </div>
                </div>
              ))}
            </div>

            {/* Code snippet — center of orbit */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="w-44 bg-slate-950 border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
                {/* Window bar */}
                <div className="flex items-center gap-1.5 px-3 py-2 bg-slate-800 border-b border-white/5">
                  <div className="w-2 h-2 rounded-full bg-red-400/70" />
                  <div className="w-2 h-2 rounded-full bg-yellow-400/70" />
                  <div className="w-2 h-2 rounded-full bg-green-400/70" />
                  <span className="ml-auto text-[9px] font-mono text-slate-500">index.tsx</span>
                </div>
                {/* Code lines */}
                <div className="px-3 py-2.5 space-y-1 font-mono text-[9px] leading-[1.6]">
                  <p>
                    <span className="text-blue-400">const</span>
                    <span className="text-white"> dev </span>
                    <span className="text-slate-500">= </span>
                    <span className="text-slate-500">&#123;</span>
                  </p>
                  <p className="pl-3">
                    <span className="text-sky-300">name</span>
                    <span className="text-slate-500">: </span>
                    <span className="text-green-300">&quot;Saulo&quot;</span>
                    <span className="text-slate-500">,</span>
                  </p>
                  <p className="pl-3">
                    <span className="text-sky-300">stack</span>
                    <span className="text-slate-500">: [</span>
                  </p>
                  <p className="pl-5">
                    <span className="text-green-300">&quot;React&quot;</span>
                    <span className="text-slate-500">,</span>
                  </p>
                  <p className="pl-5">
                    <span className="text-green-300">&quot;Next.js&quot;</span>
                    <span className="text-slate-500">,</span>
                  </p>
                  <p className="pl-5">
                    <span className="text-green-300">&quot;Node&quot;</span>
                  </p>
                  <p className="pl-3">
                    <span className="text-slate-500">],</span>
                  </p>
                  <p className="pl-3">
                    <span className="text-sky-300">open</span>
                    <span className="text-slate-500">: </span>
                    <span className="text-purple-400">true</span>
                  </p>
                  <p>
                    <span className="text-slate-500">&#125;</span>
                    <span className="text-blue-400 animate-blink-cursor ml-0.5">▋</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating terminal window — large screens */}
      <div className="hidden xl:block absolute right-8 top-28 z-20 animate-fade-in animation-delay-500">
        <div className="bg-slate-800 border border-white/[0.08] rounded-2xl p-5 w-56 shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500 cursor-default">
          <div className="flex items-center gap-1.5 mb-3">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
            <span className="ml-2 text-[10px] text-slate-500 font-mono">terminal</span>
          </div>
          <div className="space-y-1 text-[11px] font-mono leading-[1.7]">
            <p>
              <span className="text-slate-500">$ </span>
              <span className="text-green-400">git</span>
              <span className="text-white"> push origin main</span>
            </p>
            <p className="text-slate-400">Enumerating objects...</p>
            <p className="text-blue-400">✓ Branch up to date</p>
            <p>
              <span className="text-slate-500">$ </span>
              <span className="text-green-400">npm</span>
              <span className="text-white"> run build</span>
            </p>
            <p className="text-green-300">✓ Build completed</p>
            <p>
              <span className="text-slate-500">$ </span>
              <span className="text-green-400 animate-blink-cursor">▋</span>
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#tecnologias"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#444] hover:text-[#888] transition-colors animate-float"
      >
        <span className="text-[9px] font-mono tracking-[0.25em] uppercase">scroll</span>
        <ArrowDown className="w-4 h-4" />
      </a>
    </section>
  );
}
