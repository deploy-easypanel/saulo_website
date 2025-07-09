// components/Footer.tsx
import { Github, Instagram, Linkedin } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  return (
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
  );
}
