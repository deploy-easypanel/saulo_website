import { Briefcase, FolderGit2, Home, Mail, User } from 'lucide-react';

export default function MobileMenu() {
  return (
    <div className="absolute top-[80px] left-0 right-0 z-40 bg-white shadow-md px-6 py-4 space-y-4 text-gray-800">
      {[
        { href: '#', label: 'Início', icon: Home },
        { href: '#sobre', label: 'Sobre', icon: User },
        { href: '#projetos', label: 'Projetos', icon: FolderGit2 },
        { href: '#servicos', label: 'Serviços', icon: Briefcase },
        { href: '#contato', label: 'Contato', icon: Mail },
      ].map(({ href, label, icon: Icon }) => (
        <a key={label} href={href} className="flex items-center gap-2">
          <Icon className="w-4 h-4" /> {label}
        </a>
      ))}
    </div>
  );
}
