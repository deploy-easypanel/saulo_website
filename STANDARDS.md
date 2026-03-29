# Padrões do Projeto — saulojustiniano.site

Guia de referência para manter consistência visual, de código e de experiência no site pessoal.

---

## 1. Stack

| Camada      | Tecnologia                                           |
| ----------- | ---------------------------------------------------- |
| Framework   | Next.js 15 (App Router)                              |
| Linguagem   | TypeScript                                           |
| Estilização | Tailwind CSS v4 + CSS variables                      |
| Componentes | shadcn/ui (new-york style)                           |
| Ícones      | lucide-react                                         |
| Fontes      | Syne (display), Geist Sans (body), Geist Mono (mono) |

---

## 2. Paleta de Cores

Todas as cores são definidas como variáveis CSS em `src/app/globals.css`.

### Cores principais

| Token                | Valor (oklch)                      | Uso                      |
| -------------------- | ---------------------------------- | ------------------------ |
| `--background`       | `oklch(1 0 0)` — branco            | Fundo padrão             |
| `--foreground`       | `oklch(0.145 0 0)` — quase preto   | Texto principal          |
| `--highlight`        | `oklch(0.769 0.168 70.08)` — âmbar | Acento, destaques        |
| `--muted-foreground` | `oklch(0.556 0 0)` — cinza médio   | Texto secundário/caption |
| `--border`           | `oklch(0.922 0 0)` — cinza claro   | Bordas, divisores        |

### Fundos de seção (alternados)

| Seção | Fundo                             |
| ----- | --------------------------------- |
| Ímpar | `bg-white` `#ffffff`              |
| Par   | `bg-[#FAFAF8]` — off-white quente |

### Âmbar (acento)

Usar classes Tailwind nativas para o acento âmbar:

```
text-amber-500     — texto de destaque (headings, labels)
text-amber-600     — labels de seção (menor, mais escuro)
bg-amber-50        — background sutil de ícones/cards
bg-amber-100       — hover de ícones/cards
border-amber-200   — borda hover de cards
bg-amber-400       — barra de acento esquerda em cards
```

---

## 3. Tipografia

### Fontes

| Variável CSS        | Família    | Uso                     |
| ------------------- | ---------- | ----------------------- |
| `--font-syne`       | Syne       | Headings (h1, h2, h3)   |
| `--font-geist-sans` | Geist Sans | Corpo, parágrafos, UI   |
| `--font-geist-mono` | Geist Mono | Código, labels de seção |

### Classe utilitária de display

```html
<h2 class="font-display">...</h2>
```

Aplica Syne como fonte de heading.

### Escala de tamanho

| Nível          | Classe Tailwind                               | Uso                   |
| -------------- | --------------------------------------------- | --------------------- |
| Display hero   | `text-5xl md:text-7xl`                        | Nome no Hero          |
| H2 de seção    | `text-3xl`                                    | Título de cada seção  |
| H3 de card     | `text-lg`                                     | Título de card/item   |
| Body           | `text-base`                                   | Parágrafos principais |
| Caption/label  | `text-sm`, `text-xs`                          | Descrições, labels    |
| Label de seção | `text-xs font-mono tracking-widest uppercase` | "01 — stack"          |

### Labels de seção numeradas

Cada seção tem um label identificador em âmbar acima do título:

```html
<p class="font-mono text-xs text-amber-600 tracking-widest uppercase mb-2">
  01 — stack
</p>
```

Sequência atual:

- `01 — stack` (Tecnologias)
- `02 — sobre mim` (Sobre)
- `03 — portfólio` (Projetos)
- `04 — o que ofereço` (Serviços)
- `05 — contato` (Contato)

---

## 4. Espaçamento e Layout

### Container horizontal

```
px-6 md:px-28
```

24px mobile → 112px desktop. Manter em todas as seções.

### Espaçamento vertical de seção

```
py-20
```

80px top e bottom em todas as seções de conteúdo.

### Grid responsivo padrão

```
grid-cols-1 md:grid-cols-2     — seções de conteúdo (texto + imagem)
grid-cols-1 md:grid-cols-2 lg:grid-cols-3  — cards de projetos
grid-cols-1 md:grid-cols-2 lg:grid-cols-4  — cards de serviços
```

### Raio de borda

| Componente         | Classe Tailwind              |
| ------------------ | ---------------------------- |
| Cards pequenos     | `rounded-xl`                 |
| Cards grandes/imgs | `rounded-2xl`, `rounded-3xl` |
| Botões             | `rounded-lg`                 |
| Ícone containers   | `rounded-xl`                 |

---

## 5. Animações

Definidas em `globals.css` via `@keyframes`.

### Classes disponíveis

| Classe                | Efeito                        |
| --------------------- | ----------------------------- |
| `animate-fade-in-up`  | Fade + subida de 22px — 0.65s |
| `animate-fade-in`     | Fade simples — 0.6s           |
| `animation-delay-100` | Atraso de 100ms               |
| `animation-delay-200` | Atraso de 200ms               |
| `animation-delay-300` | Atraso de 300ms               |
| `animation-delay-400` | Atraso de 400ms               |
| `animation-delay-500` | Atraso de 500ms               |
| `animation-delay-600` | Atraso de 600ms               |

> Nota: `animate-fade-in-up` inicia com `opacity: 0`. O elemento só aparece quando a animação roda.

### Uso no Hero (exemplo de stagger)

```html
<p class="animate-fade-in"><!-- label --></p>
<h2 class="animate-fade-in-up animation-delay-100">
  <!-- título -->
  <p class="animate-fade-in-up animation-delay-200"><!-- subtítulo --></p>
  <div class="animate-fade-in-up animation-delay-300">
    <!-- botões -->
    <div class="animate-fade-in-up animation-delay-400">
      <!-- social icons -->
    </div>
  </div>
</h2>
```

### Hover transitions

Padrão para cards interativos:

```html
class="hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
```

Padrão para cards de serviço:

```html
class="hover:border-amber-200 hover:shadow-md transition-all duration-200"
```

---

## 6. Componentes Padrão

### Botão primário

```html
<button
  class="px-6 py-2 text-white bg-gray-900 rounded-lg hover:bg-gray-700 transition-colors"
>
  Texto
</button>
```

### Botão outline

```html
<button
  variant="outline"
  class="rounded-lg border-gray-300 text-gray-700 hover:border-gray-900 hover:text-gray-900 transition-colors"
>
  Texto
</button>
```

### Badge de tecnologia (escuro — linguagem principal)

```html
<span
  class="flex items-center gap-1 text-xs bg-gray-900 text-white px-2 py-1 rounded-md"
>
  <img ... /> TypeScript
</span>
```

### Badge de tecnologia (claro — ferramenta/lib)

```html
<span
  class="flex items-center gap-1 text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-md"
>
  <img ... /> Next.js
</span>
```

### Card de experiência com acento esquerdo

```html
<div class="flex bg-white rounded-xl border border-gray-100 overflow-hidden">
  <div class="w-1 bg-amber-400 shrink-0" />
  <div class="flex items-start gap-3 p-4">
    <!-- conteúdo -->
  </div>
</div>
```

### Container de ícone em card de serviço

```html
<div
  class="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center group-hover:bg-amber-100 transition-colors"
>
  <Icon class="w-6 h-6 text-amber-600" />
</div>
```

### Label de ícone tech (na seção Tecnologias)

```html
<div class="flex flex-col items-center gap-2 group cursor-default">
  <div
    class="w-16 h-16 flex items-center justify-center bg-gray-50 rounded-2xl border border-gray-100 group-hover:border-amber-200 group-hover:bg-amber-50 group-hover:scale-105 transition-all duration-200"
  >
    <img ... />
  </div>
  <span
    class="text-xs text-gray-500 group-hover:text-gray-700 transition-colors"
    >Nome</span
  >
</div>
```

---

## 7. Header

- Sticky com `backdrop-blur-md bg-white/90`
- Adiciona `border-b border-gray-100 shadow-sm` após scroll de 20px (controlado via `useEffect`)
- Logo: terminal-bash-black.svg + `font-mono` nome
- Nav: links simples cinza com hover para `text-gray-900`
- Currículo: pill button dark `bg-gray-900 text-white text-xs rounded-lg`

---

## 8. Estrutura de Arquivos

```
src/
  app/
    globals.css      # Tokens de design, keyframes, utilities
    layout.tsx       # Fontes, metadata, html lang="pt-BR"
    page.tsx         # Composição das seções
  components/
    Header.tsx       # Navegação sticky com glassmorphism
    Hero.tsx         # Seção hero com animações de entrada
    Tecnologias.tsx  # Stack de tecnologias
    Sobre.tsx        # Bio + experiências
    Projetos.tsx     # Lista de projetos
    ProjetoCard.tsx  # Card individual de projeto
    Servicos.tsx     # Cards de serviços oferecidos
    Contato.tsx      # Formulário de contato
    Footer.tsx       # Rodapé com social links
    MobileMenu.tsx   # Menu mobile dropdown
    ui/              # Componentes shadcn/ui (não modificar diretamente)
  lib/
    utils.ts         # Utilitário cn()
public/
  icons/             # SVGs de tecnologias (todos com / no path)
  bg.svg             # Ilustração do hero
  profile.png        # Foto de perfil
  terminal-bash-black.svg
  terminal-bash-white.svg
```

---

## 9. Convenções de Código

- Componentes em PascalCase, arquivos com mesmo nome
- Props de componentes definidas com `type`, não `interface`
- Dados estáticos (listas de tecnologias, serviços, projetos) declarados **fora** do componente, como `const` no topo do arquivo
- Usar `'use client'` apenas quando necessário (estado, eventos de browser)
- Todos os links externos com `rel="noopener noreferrer"`
- Imagens Next.js com `sizes` e `alt` sempre preenchidos
- Paths de imagens públicas sempre com `/` inicial: `/icons/typescript.svg`

---

## 10. Identidade Visual

**Conceito:** "Terminal Editorial" — a identidade de um developer que tem senso estético.

- Logo terminal (bash) como símbolo de autenticidade técnica
- Labels de seção estilo comentário de código (`// software developer`, `01 — stack`)
- Fonte geométrica Syne para headings cria personalidade sem perder legibilidade
- Acento âmbar como cor de energia — quente, não fria (diferente do verde neon típico de portfólios dev)
- Fundo off-white `#FAFAF8` (não branco puro) dá calor e sofisticação
- Dot grid sutil no Hero reforça a sensibilidade técnica/design
