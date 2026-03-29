'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import {
  ArrowRight,
  CheckCircle,
  ExternalLink,
  Github,
  Instagram,
  Linkedin,
  Send,
} from 'lucide-react';
import { useState } from 'react';

const socialLinks = [
  {
    label: 'GitHub',
    handle: '@saulojustiniano1',
    href: 'https://github.com/saulojustiniano1',
    icon: Github,
    bg: 'bg-gray-900',
    ring: 'hover:border-gray-300',
  },
  {
    label: 'LinkedIn',
    handle: 'saulojustiniano',
    href: 'https://linkedin.com/in/saulojustiniano/',
    icon: Linkedin,
    bg: 'bg-blue-600',
    ring: 'hover:border-blue-200',
  },
  {
    label: 'Instagram',
    handle: '@saulojustiniano',
    href: 'https://instagram.com/saulojustiniano',
    icon: Instagram,
    bg: 'bg-gradient-to-br from-purple-500 to-pink-500',
    ring: 'hover:border-pink-200',
  },
  {
    label: 'Currículo',
    handle: 'curriculo.saulojustiniano.site',
    href: 'https://curriculo.saulojustiniano.site',
    icon: ExternalLink,
    bg: 'bg-blue-600',
    ring: 'hover:border-blue-200',
  },
];

export default function Contato() {
  const [form, setForm] = useState({
    nome: '',
    email: '',
    mensagem: '',
    tipoSite: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleTipoSiteChange = (value: string) => {
    setForm({ ...form, tipoSite: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ nome: '', email: '', mensagem: '', tipoSite: '' });
  };

  return (
    <section id="contato" className="scroll-mt-20 py-20 px-6 md:px-28 bg-white">
      <div className="text-center mb-14">
        <p className="font-mono text-xs text-blue-700 tracking-widest uppercase mb-2">
          05 — contato
        </p>
        <h2 className="font-display text-4xl font-bold text-gray-900">
          Vamos construir algo incrível?
        </h2>
        <p className="text-gray-500 mt-3 text-base max-w-lg mx-auto">
          Tem um projeto em mente? Entre em contato e vamos conversar.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">

        {/* Left: info + social cards */}
        <div>
          <p className="text-sm text-gray-600 leading-relaxed mb-8">
            Estou disponível para freelas, projetos e parcerias. Respondo em até 24h.
          </p>

          <div className="space-y-3">
            {socialLinks.map(({ label, handle, href, icon: Icon, bg, ring }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-4 p-4 bg-[#FAFAF8] border border-gray-100 rounded-2xl ${ring} hover:shadow-sm transition-all duration-200 group`}
              >
                <div
                  className={`w-10 h-10 ${bg} rounded-xl flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform`}
                >
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-800">{label}</p>
                  <p className="text-xs text-gray-500 truncate">{handle}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all shrink-0" />
              </a>
            ))}
          </div>
        </div>

        {/* Right: form */}
        {submitted ? (
          <div className="flex flex-col items-center justify-center text-center bg-[#FAFAF8] rounded-3xl border border-gray-100 p-12">
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="font-display text-xl font-bold text-gray-900 mb-2">
              Mensagem enviada!
            </h3>
            <p className="text-gray-500 text-sm mb-6">
              Em breve entrarei em contato com você.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="text-sm text-blue-700 hover:text-amber-700 underline underline-offset-2 transition-colors"
            >
              Enviar outra mensagem
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="space-y-5 bg-[#FAFAF8] p-7 rounded-3xl border border-gray-100"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="nome" className="text-xs text-gray-600 font-medium">Nome</Label>
                <Input
                  id="nome"
                  placeholder="Seu nome"
                  name="nome"
                  value={form.nome}
                  onChange={handleChange}
                  required
                  className="rounded-xl text-sm"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-xs text-gray-600 font-medium">E-mail</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Seu e-mail"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="rounded-xl text-sm"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-xs text-gray-600 font-medium">
                O que você precisa?
              </Label>
              <Select value={form.tipoSite} onValueChange={handleTipoSiteChange} required>
                <SelectTrigger className="rounded-xl text-sm">
                  <SelectValue placeholder="Selecione uma opção" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Portfolio Pessoal">Portfólio Pessoal</SelectItem>
                  <SelectItem value="Loja Virtual">Loja Virtual</SelectItem>
                  <SelectItem value="Blog">Blog</SelectItem>
                  <SelectItem value="Landing Page">Landing Page</SelectItem>
                  <SelectItem value="Site Institucional">Site Institucional</SelectItem>
                  <SelectItem value="Outro">Outro</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="mensagem" className="text-xs text-gray-600 font-medium">
                Mensagem
              </Label>
              <Textarea
                id="mensagem"
                placeholder="Descreva seu projeto..."
                rows={4}
                name="mensagem"
                value={form.mensagem}
                onChange={handleChange}
                required
                className="rounded-xl text-sm resize-none"
              />
            </div>

            <Button
              type="submit"
              className="w-full rounded-xl gap-2 bg-gray-900 hover:bg-gray-700 transition-colors"
            >
              <Send className="w-4 h-4" />
              Enviar Mensagem
            </Button>
          </form>
        )}
      </div>
    </section>
  );
}
