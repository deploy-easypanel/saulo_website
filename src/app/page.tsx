'use client';

import ContatoSection from '@/components/Contato';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import HeroSection from '@/components/Hero';
import ProjetosSection from '@/components/Projetos';
import ServicosSection from '@/components/Servicos';
import SobreSection from '@/components/Sobre';
import TecnologiasSection from '@/components/Tecnologias';

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white text-gray-900 font-sans scroll-smooth">
        <HeroSection />
        <TecnologiasSection />
        <SobreSection />
        <ProjetosSection />
        <ServicosSection />
        <ContatoSection />
      </main>
      <Footer />
    </>
  );
}
