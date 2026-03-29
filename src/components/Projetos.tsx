import ProjetoCard from './ProjetoCard';

const projetos = [
  {
    nome: 'Espaço Livre',
    imagem: '/espaco-livre.png',
    link: '#',
    linguagem: { nome: 'TypeScript', icone: '/icons/typescript.svg' },
    ferramentas: [
      { nome: 'Next.js', icone: '/icons/nextjs.svg' },
      { nome: 'Tailwind', icone: '/icons/tailwind.svg' },
      { nome: 'PostgreSQL', icone: '/icons/postgresql.svg' },
    ],
    descricao:
      'Plataforma de aluguel de espaços por categoria, com sistema de cadastro multi-etapas, login e painel para gerenciamento.',
  },
];

export default function Projetos() {
  return (
    <section
      id="projetos"
      className="bg-white py-20 px-6 md:px-28 scroll-mt-20"
    >
      <div className="text-center mb-12">
        <p className="font-mono text-xs text-blue-700 tracking-widest uppercase mb-2">
          03 — portfólio
        </p>
        <h2 className="font-display text-3xl font-bold text-gray-900">
          Projetos
        </h2>
        <p className="text-gray-500 mt-2 text-sm">
          Projetos que desenvolvi e tecnologias que utilizei.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projetos.map((projeto, index) => (
          <ProjetoCard key={index} {...projeto} />
        ))}
      </div>
    </section>
  );
}
