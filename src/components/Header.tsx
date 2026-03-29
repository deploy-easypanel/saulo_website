'use client';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import MobileMenu from './MobileMenu';

const navLinks = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Contato', href: '#contato' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`flex justify-between items-center py-5 px-6 md:px-28 sticky top-0 z-50 bg-white transition-all duration-300 ${
        scrolled ? 'border-b border-gray-100 shadow-sm' : 'border-b border-transparent'
      }`}
    >
      <div className="flex items-center gap-2">
        <Image
          src="/terminal-bash-black.svg"
          alt="Logo"
          width={26}
          height={26}
        />
        <span className="text-sm font-semibold font-mono tracking-tight text-gray-900">
          saulojustiniano
        </span>
      </div>

      <nav className="hidden md:flex gap-8 text-sm items-center text-gray-600">
        {navLinks.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            className="hover:text-gray-900 transition-colors duration-150"
          >
            {label}
          </a>
        ))}
        <a
          href="https://curriculo.saulojustiniano.site"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-1.5 text-xs rounded-lg font-semibold bg-gray-900 text-white hover:bg-gray-700 transition-colors"
        >
          Currículo
        </a>
      </nav>

      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden text-gray-700 hover:text-black transition-colors"
        aria-label="Menu"
      >
        {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {menuOpen && <MobileMenu />}
    </header>
  );
}
