'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Send } from 'lucide-react';
import { useState } from 'react';

export default function Contato() {
  const [form, setForm] = useState({
    nome: '',
    email: '',
    mensagem: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode integrar com API, emailjs ou outro serviço
    console.log('Formulário enviado:', form);
    alert('Mensagem enviada com sucesso!');
    setForm({ nome: '', email: '', mensagem: '' });
  };

  return (
    <section id="contato" className="scroll-mt-20 py-20 px-6 md:px-28 bg-white">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900">Entre em Contato</h2>
        <p className="text-gray-600 mt-2">
          Tem um projeto em mente? Envie uma mensagem e vamos conversar.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <Input
            placeholder="Seu nome"
            name="nome"
            value={form.nome}
            onChange={handleChange}
            required
          />
          <Input
            type="email"
            placeholder="Seu e-mail"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <Textarea
          placeholder="Escreva sua mensagem..."
          rows={6}
          name="mensagem"
          value={form.mensagem}
          onChange={handleChange}
          required
        />

        <Button
          type="submit"
          size="lg"
          className="rounded-xl w-full md:w-auto gap-2"
        >
          <Send className="w-4 h-4" />
          Enviar Mensagem
        </Button>
      </form>
    </section>
  );
}
