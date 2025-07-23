// components/SobreSection.tsx
'use client';

import { Button } from '@/components/ui/button';
import { Briefcase } from 'lucide-react';
import Image from 'next/image';

export default function SobreSection() {
  return (
    <section id="sobre" className="scroll-mt-20 py-20 px-6 md:px-28 bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        <div className="w-full flex justify-center mb-8 md:mb-0">
          <Image
            src="/profile.png"
            alt="Foto de perfil"
            width={400}
            height={400}
            className="h-auto object-cover rounded-2xl shadow-lg"
          />
        </div>

        <div className="max-w-xl mx-auto md:mx-0">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Sobre mim</h2>
          <p className="text-base text-gray-700 mb-6 leading-relaxed">
            Sou um desenvolvedor apaixonado por criar soluções inovadoras e
            eficientes. Tenho experiência com tecnologias modernas como React,
            Next.js, Node.js e TypeScript. Sempre busco evoluir como
            profissional e entregar valor por meio do código.
          </p>

          <div className="space-y-4 mb-6">
            <div className="flex items-start gap-2">
              <Briefcase className="w-5 h-5 text-gray-700 mt-1" />
              <div>
                <p className="text-sm font-semibold text-gray-800">
                  Desenvolvedor Web - Freelancer
                </p>
                <p className="text-xs text-gray-600">2023 - Presente</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Briefcase className="w-5 h-5 text-gray-700 mt-1" />
              <div>
                <p className="text-sm font-semibold text-gray-800">
                  Defensoria - Estágio em Desenvolvimento
                </p>
                <p className="text-xs text-gray-600">2024 - 2025</p>
              </div>
            </div>
          </div>

          <a href="#projetos">
            <Button className="px-6 py-2 text-white bg-gray-900 rounded hover:bg-gray-800">
              Ver meu portfólio
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
