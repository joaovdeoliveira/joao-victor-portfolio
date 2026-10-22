# João Victor de Oliveira · Portfólio

Site pessoal com experiência e formação, em português e inglês.

**Online:** https://joaovdeoliveira.github.io/joao-victor-portfolio/

## Stack

- React 19 + TypeScript + Vite
- Tailwind CSS v4
- Framer Motion para as animações de entrada
- Background [Threads](https://reactbits.dev/backgrounds/threads) da React Bits (WebGL)

## Como rodar

Pré-requisitos: Node.js 20+ e pnpm (`npm install -g pnpm`).

```bash
pnpm install
pnpm dev
```

Abra http://localhost:3000/joao-victor-portfolio/

| Comando        | O que faz                                 |
| -------------- | ----------------------------------------- |
| `pnpm dev`     | servidor de desenvolvimento               |
| `pnpm build`   | gera o site estático em `dist/public`     |
| `pnpm preview` | serve o build localmente                  |
| `pnpm check`   | checagem de tipos com TypeScript          |
| `pnpm format`  | formata o código com Prettier             |

## Onde editar o conteúdo

Os textos ficam separados dos componentes:

- `client/src/data/content.ts`: textos em PT e EN (hero, sobre, experiência, formação, contato)
- `client/src/data/certificates.ts`: lista de certificados
- `client/src/data/site.ts`: nome, e-mail, links e o caminho do PDF do currículo (`cvPath`)

Para exibir o botão "Baixar CV", coloque o PDF em `client/public/cv/` e preencha `cvPath` (ex.: `"cv/joao-victor-cv.pdf"`).
