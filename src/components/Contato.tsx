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
import { Send } from 'lucide-react';
import { useState } from 'react';

export default function Contato() {
  const [form, setForm] = useState({
    nome: '',
    email: '',
    mensagem: '',
    tipoSite: '',
  });

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
    console.log('Formulário enviado:', form);
    alert('Mensagem enviada com sucesso!');
    setForm({ nome: '', email: '', mensagem: '', tipoSite: '' });
  };

  return (
    <section id="contato" className="scroll-mt-20 py-20 px-6 md:px-28 bg-white">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900">Entre em Contato</h2>
        <p className="text-gray-600 mt-4 text-lg">
          Tem um projeto em mente? Envie uma mensagem e vamos conversar.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto space-y-8 bg-gray-50 p-8 rounded-2xl shadow-md"
      >
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="nome">Nome</Label>
            <Input
              placeholder="Seu nome"
              name="nome"
              value={form.nome}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">E-mail</Label>
            <Input
              type="email"
              placeholder="Seu e-mail"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label>O que você deseja no site?</Label>
          <Select
            value={form.tipoSite}
            onValueChange={handleTipoSiteChange}
            required
          >
            <SelectTrigger>
              <SelectValue placeholder="Selecione uma opção" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="portfolio">Portfólio Pessoal</SelectItem>
              <SelectItem value="loja">Loja Virtual</SelectItem>
              <SelectItem value="blog">Blog</SelectItem>
              <SelectItem value="landing">Landing Page</SelectItem>
              <SelectItem value="institucional">Site Institucional</SelectItem>
              <SelectItem value="outro">Outro</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="mensagem">Mensagem</Label>
          <Textarea
            placeholder="Escreva sua mensagem..."
            rows={6}
            name="mensagem"
            value={form.mensagem}
            onChange={handleChange}
            required
          />
        </div>

        <Button
          type="submit"
          size="lg"
          className="rounded-xl w-full md:w-auto gap-2 mt-4"
        >
          <Send className="w-4 h-4" />
          Enviar Mensagem
        </Button>
      </form>
    </section>
  );
}
