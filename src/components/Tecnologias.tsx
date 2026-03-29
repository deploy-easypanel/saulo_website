import Image from 'next/image';

const row1 = [
  { name: 'JavaScript', icon: '/icons/javascript.svg' },
  { name: 'TypeScript', icon: '/icons/typescript.svg' },
  { name: 'React', icon: '/icons/react.svg' },
  { name: 'Node.js', icon: '/icons/nodejs.svg' },
  { name: 'Next.js', icon: '/icons/nextjs.svg' },
];

const row2 = [
  { name: 'Python', icon: '/icons/python.svg' },
  { name: 'Docker', icon: '/icons/docker.svg' },
  { name: 'Tailwind', icon: '/icons/tailwind.svg' },
  { name: 'PostgreSQL', icon: '/icons/postgresql.svg' },
  { name: 'TypeScript', icon: '/icons/typescript.svg' },
];

type Tech = { name: string; icon: string };

function TechPill({ name, icon }: Tech) {
  return (
    <div className="flex items-center gap-3 px-5 py-3 bg-white border border-gray-100 rounded-2xl hover:border-blue-200 hover:shadow-sm transition-all group shrink-0 cursor-default select-none">
      <div className="w-7 h-7 flex items-center justify-center">
        <Image src={icon} alt={name} width={28} height={28} />
      </div>
      <span className="text-sm font-medium text-gray-600 group-hover:text-gray-900 transition-colors whitespace-nowrap">
        {name}
      </span>
    </div>
  );
}

function MarqueeRow({ items, reverse = false }: { items: Tech[]; reverse?: boolean }) {
  const doubled = [...items, ...items, ...items];
  return (
    <div className="overflow-hidden py-1">
      <div
        className={`flex gap-3 ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}
        style={{ width: 'max-content' }}
      >
        {doubled.map((tech, i) => (
          <TechPill key={`${tech.name}-${i}`} {...tech} />
        ))}
      </div>
    </div>
  );
}

export default function Tecnologias() {
  return (
    <section id="tecnologias" className="py-20 bg-white overflow-hidden">
      <div className="px-6 md:px-28 text-center mb-12">
        <p className="font-mono text-xs text-blue-700 tracking-widest uppercase mb-2">
          01 — stack
        </p>
        <h2 className="font-display text-3xl font-bold text-gray-900">
          Tecnologias
        </h2>
        <p className="text-gray-500 mt-2 text-sm">
          Ferramentas que fazem parte do meu dia a dia como desenvolvedor.
        </p>
      </div>

      <div className="space-y-3">
        <MarqueeRow items={row1} />
        <MarqueeRow items={row2} reverse />
      </div>
    </section>
  );
}
