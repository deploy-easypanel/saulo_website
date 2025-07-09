'use client';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex justify-between items-center bg-white py-6 px-6 md:px-28 shadow-sm sticky top-0 z-50">
      <div className="flex items-center gap-2">
        <Image
          src="/terminal-bash-black.svg"
          alt="Logo"
          width={35}
          height={35}
        />
        <h1 className="text-2xl font-semibold">Saulo Justiniano</h1>
      </div>

      <nav className="hidden md:flex gap-10 text-sm text-gray-700 items-center">
        {['Início', 'Sobre', 'Projetos', 'Serviços', 'Contato'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="hover:text-black flex items-center gap-1"
          >
            {item}
          </a>
        ))}
      </nav>

      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden text-gray-700 hover:text-black"
      >
        {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {menuOpen && <MobileMenu />}
    </header>
  );
}
