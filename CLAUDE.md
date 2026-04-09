# Instruções para Claude Code — landpage

## Stack

- React 19 + Vite 5
- Lucide React (ícones)
- CSS puro (sem Tailwind, sem styled-components)
- Node 22

## Estrutura

```
src/
├── App.jsx          ← componente principal, importa todos os outros
├── App.css
├── index.css        ← estilos globais, variáveis CSS
├── main.jsx         ← entry point
├── components/      ← cada componente tem .jsx + .css
│   ├── Header.jsx / Header.css
│   ├── Hero.jsx / Hero.css
│   ├── Services.jsx / Services.css
│   ├── About.jsx / About.css
│   ├── HowItWorks.jsx / HowItWorks.css
│   ├── Results.jsx / Results.css
│   ├── Pricing.jsx / Pricing.css
│   └── Footer.jsx / Footer.css
└── assets/          ← imagens, SVGs
```

## Convenções

- Um componente = um arquivo .jsx + um arquivo .css
- Importar e registrar todo componente novo em `App.jsx`
- Usar classes CSS do projeto (variáveis em `index.css`: `--primary`, `--accent`, etc.)
- Usar Lucide React para ícones: `import { Phone, Mail } from 'lucide-react'`
- Componentes em PascalCase, arquivos em PascalCase
- NÃO usar TypeScript (é JavaScript/JSX puro)

## Docker

O build roda em container nginx:alpine.
```
/usr/share/nginx/html/   ← dist/ é copiado aqui
```

O Vite faz build para `dist/`. O Dockerfile copia `dist/` para o nginx.

## Deploy

- Push em `develop` → DEV (dev.patriatechnology.com)
- Push em `homolog` → HOMOLOG (homolog.patriatechnology.com)
- Push em `main` → PROD (patriatechnology.com)

## Estilo

- Seguir o padrão visual existente (seções com `.section`, containers com `.container`)
- Cores via variáveis CSS (`--primary: #6C3AED`, `--accent`, etc.)
- Responsivo (mobile-first, breakpoints em 768px e 1024px)
- Badges: `.badge` com ícone + texto
