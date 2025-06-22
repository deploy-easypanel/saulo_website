'use client';

import { Button } from '@/components/ui/button';
import {
  Briefcase,
  Code,
  FolderGit2,
  Github,
  Globe,
  Home,
  Instagram,
  Linkedin,
  Mail,
  Menu,
  User,
  Wrench,
  X,
} from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

const tecnologias = [
  { name: 'JavaScript', icon: '/javascript.svg' },
  { name: 'TypeScript', icon: '/typescript.svg' },
  { name: 'React', icon: '/react.svg' },
  { name: 'Node.js', icon: '/nodejs.svg' },
  { name: 'Next.js', icon: '/nextjs.svg' },
  { name: 'Python', icon: '/python.svg' },
  { name: 'Docker', icon: '/docker.svg' },
];

const projetos = [
  {
    nome: 'Espaço Livre',
    imagem: '/espaco-livre.png',
    link: '#',
    linguagem: { nome: 'TypeScript', icone: '/typescript.svg' },
    ferramentas: [
      { nome: 'Next.js', icone: '/nextjs.svg' },
      { nome: 'Tailwind', icone: '/tailwind.svg' },
      { nome: 'PostgreSQL', icone: '/postgresql.svg' },
    ],
    descricao:
      'Plataforma de aluguel de espaços por categoria, com sistema de cadastro multi-etapas, login e painel para gerenciamento.',
  },
];

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="flex justify-between items-center bg-white py-6 px-6 md:px-28 shadow-sm sticky top-0 z-50">
        <div id="logo" className="flex items-center gap-2">
          <Image
            src="/terminal-bash-black.svg"
            alt="Logo do terminal do bash"
            width={35}
            height={35}
            sizes="35px"
          />
          <h1 className="text-2xl font-semibold text-gray-900">
            Saulo Justiniano
          </h1>
        </div>

        <nav className="hidden md:flex gap-10 lg:gap-16 text-sm text-gray-700 items-center">
          <a href="#" className="flex items-center gap-1 hover:text-black">
            <Home className="w-4 h-4" /> Início
          </a>
          <a href="#sobre" className="flex items-center gap-1 hover:text-black">
            <User className="w-4 h-4" /> Sobre
          </a>
          <a
            href="#projetos"
            className="flex items-center gap-1 hover:text-black"
          >
            <FolderGit2 className="w-4 h-4" /> Projetos
          </a>
          <a
            href="#servicos"
            className="flex items-center gap-1 hover:text-black"
          >
            <Briefcase className="w-4 h-4" /> Serviços
          </a>
          <a
            href="#contato"
            className="flex items-center gap-1 hover:text-black"
          >
            <Mail className="w-4 h-4" /> Contato
          </a>
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700 hover:text-black"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </header>

      {menuOpen && (
        <div className="absolute top-[80px] left-0 right-0 z-40 bg-white shadow-md px-6 py-4 space-y-4 text-gray-800">
          <a href="#" className="flex items-center gap-2">
            <Home className="w-4 h-4" /> Início
          </a>
          <a href="#sobre" className="flex items-center gap-2">
            <User className="w-4 h-4" /> Sobre
          </a>
          <a href="#portfolio" className="flex items-center gap-2">
            <FolderGit2 className="w-4 h-4" /> Portfólio
          </a>
          <a href="#servicos" className="flex items-center gap-2">
            <Briefcase className="w-4 h-4" /> Serviços
          </a>
          <a href="#contato" className="flex items-center gap-2">
            <Mail className="w-4 h-4" /> Contato
          </a>
        </div>
      )}

      <main className="min-h-screen bg-white text-gray-900 font-sans scroll-smooth">
        <section className="bg-gray-50 relative grid grid-cols-1 md:grid-cols-2 items-center gap-10 px-6 md:px-28 py-10 overflow-hidden">
          {/* Texto */}
          <div className="text-center md:text-left z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
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
              <a
                href="https://linkedin.com/in/saulojustiniano/"
                target="_blank"
              >
                <Linkedin className="w-6 h-6 text-gray-700 hover:text-black" />
              </a>
              <a href="https://instagram.com/saulojustiniano" target="_blank">
                <Instagram className="w-6 h-6 text-gray-700 hover:text-black" />
              </a>
            </div>
          </div>

          {/* Imagem com esfera atrás */}
          <div className="relative flex justify-center z-10">
            {/* Esfera (círculo grande laranja) */}
            <div className="absolute -top-20 md:top-0 right-20 md:right-25 md:left-80 w-[500px] h-[500px] md:w-[700px] md:h-[700px] bg-zinc-200 rounded-full z-0"></div>

            {/* Imagem do programador */}
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

        <section
          id="tecnologias"
          className="py-20 px-6 md:px-28 bg-white dark:bg-gray-900"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              <span className="text-primary">Tecnologias</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">
              Tecnologias que uso no dia a dia como desenvolvedor.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-10 md:gap-48 py-4 px-2">
            {tecnologias.map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center w-20 md:w-16"
              >
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  width={64}
                  height={64}
                  sizes="64px"
                  className="mb-2"
                />
              </div>
            ))}
          </div>
        </section>

        <section
          id="sobre"
          className="scroll-mt-20 py-20 px-6 md:px-28 bg-gray-50"
        >
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Sobre mim
              </h2>
              <p className="text-base text-gray-700 mb-6 leading-relaxed">
                Sou um desenvolvedor apaixonado por criar soluções inovadoras e
                eficientes. Com experiência em diversas tecnologias, estou
                sempre buscando aprender e me aprimorar.
              </p>
              <Button className="px-6 py-2 text-white bg-gray-900 rounded hover:bg-gray-800">
                Ver meu portfólio
              </Button>
            </div>
          </div>
        </section>

        <section
          id="projetos"
          className="bg-white py-20 px-6 md:px-28 scroll-mt-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              <span className="text-primary">Projetos</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">
              Projetos que desenvolvi e tecnologias que utilizei.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {projetos.map((projeto, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-xl overflow-hidden flex flex-col w-full max-w-sm mx-auto transform transition-transform duration-300 hover:scale-105"
              >
                <div className="relative w-full h-48">
                  <Image
                    src={projeto.imagem}
                    alt={`Imagem do projeto ${projeto.nome}`}
                    width={400}
                    height={240}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="p-4 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      {projeto.nome}
                    </h3>
                    <p className="text-gray-600 mb-3 text-sm">
                      {projeto.descricao}
                    </p>

                    <div className="flex items-center gap-2 mb-2">
                      <Code className="w-4 h-4 text-blue-600" />
                      <Image
                        src={projeto.linguagem.icone}
                        alt={projeto.linguagem.nome}
                        width={16}
                        height={16}
                      />
                      <span className="text-xs">{projeto.linguagem.nome}</span>
                    </div>

                    <div className="flex items-center gap-2 mb-3 flex-wrap">
                      <Wrench className="w-4 h-4 text-gray-700" />
                      {projeto.ferramentas.map((ferramenta, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-1 mr-2 mb-1"
                        >
                          <Image
                            src={ferramenta.icone}
                            alt={ferramenta.nome}
                            width={16}
                            height={16}
                          />
                          <span className="text-xs">{ferramenta.nome}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-2 flex gap-4">
                    <a
                      href={projeto.link}
                      target="_blank"
                      className="inline-flex items-center gap-2 text-white bg-gray-900 px-3 py-1.5 rounded hover:bg-gray-800 transition text-sm"
                    >
                      <Globe className="w-4 h-4" />
                      Ver Projeto
                    </a>
                    <a
                      href="https://github.com/saulojustiniano1"
                      target="_blank"
                      className="inline-flex items-center gap-2 text-gray-800 hover:text-black"
                    >
                      <Github className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          id="servicos"
          className="scroll-mt-20 py-20 px-6 md:px-28 bg-gray-50"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Serviços
          </h2>
          <p className="text-center text-gray-600">
            Ofereço soluções personalizadas em desenvolvimento web.
          </p>
        </section>

        <section
          id="contato"
          className="scroll-mt-20 py-20 px-6 md:px-28 bg-white"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Contato
          </h2>
          <p className="text-center text-gray-600">
            Entre em contato comigo pelas redes sociais ou email.
          </p>
        </section>
      </main>

      <footer className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <div className="bg-gray-900 text-white py-6 px-6 md:px-28">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-center md:text-left flex-wrap justify-center">
              <span>&copy; {new Date().getFullYear()}</span>
              <span className="flex items-center gap-1">
                <Image
                  src="/terminal-bash-white.svg"
                  alt="Logo do terminal do bash"
                  width={16}
                  height={16}
                  sizes="16px"
                />
                Saulo Justiniano.
              </span>
              <span>Todos os direitos reservados.</span>
            </div>

            <div className="flex gap-4">
              <a
                href="https://github.com/saulojustiniano1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300"
                aria-label="Github"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/saulojustiniano/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/saulojustiniano"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
