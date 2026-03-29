import { Github, Globe } from 'lucide-react';
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
    <div className="group relative bg-white border border-gray-100 rounded-3xl overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-400">
      {/* Image with zoom + hover overlay */}
      <div className="relative h-56 overflow-hidden bg-gray-100">
        <Image
          src={imagem}
          alt={`Imagem do projeto ${nome}`}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, 400px"
        />
        {/* Overlay with links — slides up on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
          <div className="flex gap-3 translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-blue-600 text-gray-900 text-sm font-semibold px-4 py-2 rounded-xl hover:bg-blue-500 transition-colors"
            >
              <Globe className="w-3.5 h-3.5" /> Ver Projeto
            </a>
            <a
              href="https://github.com/saulojustiniano1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-white/15 text-white text-sm px-4 py-2 rounded-xl hover:bg-white/25 transition-colors border border-white/20 backdrop-blur-sm"
            >
              <Github className="w-3.5 h-3.5" /> GitHub
            </a>
          </div>
        </div>
      </div>

      <div className="p-5">
        <h3 className="font-display text-lg font-bold text-gray-900 mb-2">{nome}</h3>
        <p className="text-gray-500 mb-4 text-sm leading-relaxed">{descricao}</p>

        <div className="flex flex-wrap gap-2">
          <span className="flex items-center gap-1.5 text-xs bg-gray-900 text-white px-2.5 py-1 rounded-full font-medium">
            <Image src={linguagem.icone} alt={linguagem.nome} width={11} height={11} />
            {linguagem.nome}
          </span>
          {ferramentas.map((f) => (
            <span
              key={f.nome}
              className="flex items-center gap-1.5 text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full"
            >
              <Image src={f.icone} alt={f.nome} width={11} height={11} />
              {f.nome}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
