import { Github, Instagram, Linkedin } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 px-6 md:px-28">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2 text-sm text-gray-400 text-center md:text-left flex-wrap justify-center">
          <Image
            src="/terminal-bash-white.svg"
            alt="Logo"
            width={14}
            height={14}
            sizes="14px"
          />
          <span className="font-mono">saulojustiniano</span>
          <span className="text-gray-600">·</span>
          <span>&copy; {new Date().getFullYear()} Todos os direitos reservados.</span>
        </div>

        <div className="flex gap-4">
          <a
            href="https://github.com/saulojustiniano1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Github"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/saulojustiniano/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://instagram.com/saulojustiniano"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
