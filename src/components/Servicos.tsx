'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, MonitorSmartphone, Paintbrush, Rocket } from 'lucide-react';

export default function Servicos() {
  return (
    <section
      id="servicos"
      className="scroll-mt-20 py-20 px-6 md:px-28 bg-gray-50"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">Serviços</h2>
        <p className="text-gray-600 mt-2">
          Soluções sob medida para presença digital de alto impacto.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {/* Card: Websites */}
        <Card className="rounded-2xl shadow-sm">
          <CardHeader>
            <MonitorSmartphone className="w-10 h-10 text-primary" />
            <CardTitle className="text-lg mt-4">
              Websites Institucionais
            </CardTitle>
          </CardHeader>
          <CardContent>
            Criação de sites profissionais, rápidos e responsivos para destacar
            seu negócio.
          </CardContent>
        </Card>

        {/* Card: Landing Pages */}
        <Card className="rounded-2xl shadow-sm">
          <CardHeader>
            <Rocket className="w-10 h-10 text-primary" />
            <CardTitle className="text-lg mt-4">Landing Pages</CardTitle>
          </CardHeader>
          <CardContent>
            Páginas otimizadas para conversão com foco em captar clientes e
            leads.
          </CardContent>
        </Card>

        {/* Card: UI Design */}
        <Card className="rounded-2xl shadow-sm">
          <CardHeader>
            <Paintbrush className="w-10 h-10 text-primary" />
            <CardTitle className="text-lg mt-4">Design de Interfaces</CardTitle>
          </CardHeader>
          <CardContent>
            Interfaces modernas e intuitivas com foco em usabilidade e
            experiência.
          </CardContent>
        </Card>

        {/* Card: Sistemas Web */}
        <Card className="rounded-2xl shadow-sm">
          <CardHeader>
            <Code className="w-10 h-10 text-primary" />
            <CardTitle className="text-lg mt-4">
              Sistemas Personalizados
            </CardTitle>
          </CardHeader>
          <CardContent>
            Desenvolvimento de sistemas web sob demanda para sua necessidade
            específica.
          </CardContent>
        </Card>
      </div>

      <div className="text-center">
        <Button size="lg" className="rounded-xl text-base" asChild>
          <a href="#contato">Entrar em Contato</a>
        </Button>
      </div>
    </section>
  );
}
