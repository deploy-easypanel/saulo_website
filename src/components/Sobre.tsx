import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Sobre() {
  return (
    <section id="sobre" className="scroll-mt-20 py-20 px-6 md:px-28 bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        <div className="w-full flex justify-center mb-8 md:mb-0">
          <Image
            src="/profile.png"
            alt="Foto de perfil"
            width={400}
            height={400}
            sizes="(max-width: 768px) 100vw, 400px"
            className="h-auto object-cover rounded-2xl shadow-lg"
          />
        </div>

        <div className="max-w-xl mx-auto md:mx-0">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Sobre mim</h2>
          <p className="text-base text-gray-700 mb-6 leading-relaxed">
            Sou um desenvolvedor apaixonado por criar soluções inovadoras e
            eficientes. Com experiência em diversas tecnologias, estou sempre
            buscando aprender e me aprimorar.
          </p>
          <Button className="px-6 py-2 text-white bg-gray-900 rounded hover:bg-gray-800">
            Ver meu portfólio
          </Button>
        </div>
      </div>
    </section>
  );
}
