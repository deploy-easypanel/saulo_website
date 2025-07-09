import Image from 'next/image';

const tecnologias = [
  { name: 'JavaScript', icon: '/icons/javascript.svg' },
  { name: 'TypeScript', icon: 'icons/typescript.svg' },
  { name: 'React', icon: 'icons/react.svg' },
  { name: 'Node.js', icon: 'icons/nodejs.svg' },
  { name: 'Next.js', icon: 'icons/nextjs.svg' },
  { name: 'Python', icon: 'icons/python.svg' },
  { name: 'Docker', icon: 'icons/docker.svg' },
];

export default function Tecnologias() {
  return (
    <section
      id="tecnologias"
      className="py-20 px-6 md:px-28 bg-white dark:bg-gray-900"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          Tecnologias
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">
          Tecnologias que uso no dia a dia como desenvolvedor.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-10 md:gap-48 py-4 px-2">
        {tecnologias.map((tech, index) => (
          <div key={index} className="flex flex-col items-center w-20 md:w-16">
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
  );
}
