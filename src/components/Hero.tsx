import { Button } from '@/components/ui/button';
import { Github, Instagram, Linkedin } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="bg-gray-50 grid grid-cols-1 md:grid-cols-2 items-center gap-10 px-6 md:px-28 py-10">
      <div className="text-center md:text-left z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          <span className="text-gray-900">Software Developer</span>
        </h2>
        <p className="text-base text-gray-600 mb-6">
          Seja bem-vindo ao meu website
        </p>
        <Button className="px-6 py-2 text-white bg-gray-900 rounded hover:bg-gray-800">
          Saiba mais sobre mim
        </Button>
        <div className="flex justify-center md:justify-start gap-4 mt-6">
          <a href="https://github.com/saulojustiniano1" target="_blank">
            <Github className="w-6 h-6 text-gray-700 hover:text-black" />
          </a>
          <a href="https://linkedin.com/in/saulojustiniano/" target="_blank">
            <Linkedin className="w-6 h-6 text-gray-700 hover:text-black" />
          </a>
          <a href="https://instagram.com/saulojustiniano" target="_blank">
            <Instagram className="w-6 h-6 text-gray-700 hover:text-black" />
          </a>
        </div>
      </div>

      <div className="relative flex justify-center z-10">
        <div className="absolute -top-20 md:-top-70 -right-50 md:right-25 md:left-80 md:w-[700px] md:h-[700px] bg-zinc-200 rounded-full z-0"></div>
        <div className="absolute -top-40 md:-top-30 -right-50 md:right-25 md:left-0 md:w-[400px] md:h-[400px] bg-zinc-300 rounded-full z-0"></div>
        <Image
          src="/bg.svg"
          alt="Ilustração de programador"
          width={500}
          height={500}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="w-full max-w-sm h-auto z-10"
        />
      </div>
    </section>
  );
}
