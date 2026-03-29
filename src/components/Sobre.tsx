'use client';

import { Button } from '@/components/ui/button';
import { Briefcase, Calendar, MapPin, Sparkles } from 'lucide-react';
import Image from 'next/image';

export default function SobreSection() {
  return (
    <section id="sobre" className="scroll-mt-20 py-20 px-6 md:px-28 bg-[#FAFAF8]">
      <div className="text-center mb-12">
        <p className="font-mono text-xs text-blue-700 tracking-widest uppercase mb-2">
          02 — sobre mim
        </p>
        <h2 className="font-display text-3xl font-bold text-gray-900">
          Quem sou eu
        </h2>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

        {/* Profile photo — tall card, spans 2 rows on md */}
        <div className="col-span-1 md:row-span-2 rounded-3xl overflow-hidden relative bg-gray-200 min-h-[260px] md:min-h-0">
          <Image
            src="/profile.png"
            alt="Saulo Justiniano"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 50vw, 33vw"
          />
        </div>

        {/* Bio card */}
        <div className="col-span-1 md:col-span-2 bg-white border border-gray-100 rounded-3xl p-6 flex flex-col justify-between">
          <div>
            <p className="text-[10px] font-mono text-blue-700 tracking-widest uppercase mb-3">
              // about.me
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Sou um desenvolvedor apaixonado por criar soluções inovadoras e
              eficientes. Especializado em React, Next.js, Node.js e TypeScript.
              Sempre busco evoluir e entregar valor por meio do código.
            </p>
          </div>
          <a href="#projetos" className="mt-5 inline-block">
            <Button
              size="sm"
              className="rounded-lg bg-gray-900 hover:bg-gray-700 text-white text-xs transition-colors"
            >
              Ver portfólio →
            </Button>
          </a>
        </div>

        {/* Stat: Anos */}
        <div className="bg-gray-900 text-white rounded-3xl p-5 flex flex-col gap-1">
          <p className="font-display text-4xl font-bold text-blue-500 leading-none">
            3+
          </p>
          <p className="text-xs text-gray-400 mt-1">anos de experiência</p>
        </div>

        {/* Stat: Projetos */}
        <div className="bg-blue-600 rounded-3xl p-5 flex flex-col gap-1">
          <p className="font-display text-4xl font-bold text-white leading-none">
            10+
          </p>
          <p className="text-xs text-blue-100 mt-1">projetos entregues</p>
        </div>

        {/* Location card */}
        <div className="col-span-2 md:col-span-1 bg-blue-50 border border-blue-100 rounded-3xl p-5 flex items-center gap-4">
          <div className="w-10 h-10 bg-blue-100 rounded-2xl flex items-center justify-center shrink-0">
            <MapPin className="w-5 h-5 text-blue-700" />
          </div>
          <div>
            <p className="text-xs text-blue-700 font-mono">localização</p>
            <p className="text-sm font-semibold text-gray-800 mt-0.5">
              Brasil 🇧🇷
            </p>
          </div>
        </div>

        {/* Open to work */}
        <div className="col-span-2 md:col-span-2 bg-white border border-gray-100 rounded-3xl p-5 flex items-center gap-4">
          <div className="w-10 h-10 bg-green-50 rounded-2xl flex items-center justify-center shrink-0">
            <Sparkles className="w-5 h-5 text-green-600" />
          </div>
          <div>
            <p className="text-xs text-green-600 font-mono">disponibilidade</p>
            <p className="text-sm font-semibold text-gray-800 mt-0.5">
              Aberto a freelas e projetos
            </p>
          </div>
          <span className="ml-auto inline-flex items-center gap-1.5 text-xs text-green-600 bg-green-50 border border-green-100 px-3 py-1 rounded-full shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            Ativo
          </span>
        </div>

        {/* Experience 1 */}
        <div className="col-span-2 md:col-span-3 bg-white border border-gray-100 rounded-3xl p-5">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-blue-50 border border-blue-100 rounded-2xl flex items-center justify-center shrink-0">
              <Briefcase className="w-4 h-4 text-blue-700" />
            </div>
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                <p className="text-sm font-semibold text-gray-800">
                  Desenvolvedor Web — Freelancer
                </p>
                <span className="text-[10px] font-mono text-blue-700 bg-blue-50 border border-blue-100 px-2 py-0.5 rounded-full w-fit">
                  2023 — Presente
                </span>
              </div>
              <p className="text-xs text-gray-500">
                Desenvolvimento de sites, sistemas e landing pages para clientes de
                diferentes segmentos.
              </p>
            </div>
          </div>
        </div>

        {/* Experience 2 */}
        <div className="col-span-2 md:col-span-3 bg-white border border-gray-100 rounded-3xl p-5">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-gray-50 border border-gray-100 rounded-2xl flex items-center justify-center shrink-0">
              <Calendar className="w-4 h-4 text-gray-500" />
            </div>
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                <p className="text-sm font-semibold text-gray-800">
                  Defensoria — Estágio em Desenvolvimento
                </p>
                <span className="text-[10px] font-mono text-gray-500 bg-gray-50 border border-gray-200 px-2 py-0.5 rounded-full w-fit">
                  2024 — 2025
                </span>
              </div>
              <p className="text-xs text-gray-500">
                Desenvolvimento e manutenção de sistemas internos da instituição.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
