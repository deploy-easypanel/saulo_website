'use client';

import { Button } from '@/components/ui/button';
import {
  Code,
  MonitorSmartphone,
  Paintbrush,
  Rocket,
  type LucideIcon,
} from 'lucide-react';

const servicos: {
  icon: LucideIcon;
  titulo: string;
  descricao: string;
  tag: string;
}[] = [
  {
    icon: MonitorSmartphone,
    titulo: 'Websites Institucionais',
    descricao: 'Sites profissionais, rápidos e responsivos para destacar seu negócio online.',
    tag: 'Web',
  },
  {
    icon: Rocket,
    titulo: 'Landing Pages',
    descricao: 'Páginas otimizadas para conversão, focadas em captar clientes e leads.',
    tag: 'Marketing',
  },
  {
    icon: Paintbrush,
    titulo: 'Design de Interfaces',
    descricao: 'Interfaces modernas e intuitivas com foco em usabilidade e experiência do usuário.',
    tag: 'UI/UX',
  },
  {
    icon: Code,
    titulo: 'Sistemas Personalizados',
    descricao: 'Desenvolvimento de sistemas web sob demanda para necessidades específicas.',
    tag: 'Dev',
  },
];

export default function Servicos() {
  return (
    <section
      id="servicos"
      className="scroll-mt-20 py-20 px-6 md:px-28 bg-slate-900"
    >
      <div className="text-center mb-12">
        <p className="font-mono text-xs text-blue-600/70 tracking-widest uppercase mb-2">
          04 — o que ofereço
        </p>
        <h2 className="font-display text-3xl font-bold text-[#F0EDE8]">
          Serviços
        </h2>
        <p className="text-[#8B8B95] mt-2 text-sm">
          Soluções sob medida para presença digital de alto impacto.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        {servicos.map(({ icon: Icon, titulo, descricao, tag }) => (
          <div
            key={titulo}
            className="group relative bg-slate-800 border border-white/[0.07] rounded-3xl p-6 hover:border-blue-600/30 hover:bg-slate-700 transition-all duration-300 cursor-default"
          >
            {/* Tag */}
            <span className="inline-block text-[10px] font-mono text-blue-600/60 bg-blue-600/8 border border-blue-600/15 px-2 py-0.5 rounded-full mb-4">
              {tag}
            </span>

            {/* Icon */}
            <div className="w-12 h-12 bg-slate-900 border border-white/[0.07] rounded-2xl flex items-center justify-center mb-4 group-hover:border-blue-600/20 group-hover:bg-blue-600/5 transition-all duration-300">
              <Icon className="w-5 h-5 text-blue-600 group-hover:text-blue-500 transition-colors" />
            </div>

            <h3 className="text-sm font-semibold text-[#F0EDE8] mb-2 leading-snug">
              {titulo}
            </h3>
            <p className="text-xs text-[#8B8B95] leading-relaxed">{descricao}</p>

            {/* Hover line accent */}
            <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-blue-600/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>

      <div className="text-center">
        <Button
          size="lg"
          className="rounded-xl bg-blue-600 hover:bg-blue-500 text-gray-900 font-semibold transition-colors"
          asChild
        >
          <a href="#contato">Entrar em Contato</a>
        </Button>
      </div>
    </section>
  );
}
