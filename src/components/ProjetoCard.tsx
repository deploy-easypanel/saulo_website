import { Code, Github, Globe, Wrench } from 'lucide-react';
import Image from 'next/image';

type ProjetoCardProps = {
  nome: string;
  imagem: string;
  descricao: string;
  linguagem: { nome: string; icone: string };
  ferramentas: { nome: string; icone: string }[];
  link: string;
};

export default function ProjetoCard({
  nome,
  imagem,
  descricao,
  linguagem,
  ferramentas,
  link,
}: ProjetoCardProps) {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden flex flex-col w-full max-w-sm mx-auto transform transition-transform duration-300 hover:scale-105">
      <div className="relative w-full h-48">
        <Image
          src={imagem}
          alt={`Imagem do projeto ${nome}`}
          width={400}
          height={240}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="p-4 flex flex-col justify-between flex-1">
        <div>
          <h3 className="text-xl font-semibold mb-2">{nome}</h3>
          <p className="text-gray-600 mb-3 text-sm">{descricao}</p>

          <div className="flex items-center gap-2 mb-2">
            <Code className="w-4 h-4 text-blue-600" />
            <Image
              src={linguagem.icone}
              alt={linguagem.nome}
              width={16}
              height={16}
            />
            <span className="text-xs">{linguagem.nome}</span>
          </div>

          <div className="flex items-center gap-2 mb-3 flex-wrap">
            <Wrench className="w-4 h-4 text-gray-700" />
            {ferramentas.map((f, i) => (
              <div key={i} className="flex items-center gap-1 mr-2 mb-1">
                <Image src={f.icone} alt={f.nome} width={16} height={16} />
                <span className="text-xs">{f.nome}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-2 flex gap-4">
          <a
            href={link}
            target="_blank"
            className="inline-flex items-center gap-2 text-white bg-gray-900 px-3 py-1.5 rounded hover:bg-gray-800 transition text-sm"
          >
            <Globe className="w-4 h-4" /> Ver Projeto
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
  );
}
