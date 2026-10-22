import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import fs from "node:fs";
import path from "node:path";
import { defineConfig, type Plugin } from "vite";

const outDir = path.resolve(import.meta.dirname, "dist/public");

// GitHub Pages serve o 404.html para qualquer rota desconhecida;
// copiar o index.html mantém a SPA funcionando nesses casos.
function githubPagesFallback(): Plugin {
  return {
    name: "github-pages-fallback",
    apply: "build",
    closeBundle() {
      fs.copyFileSync(
        path.join(outDir, "index.html"),
        path.join(outDir, "404.html")
      );
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), githubPagesFallback()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
    },
  },
  base: "/joao-victor-portfolio/",
  envDir: path.resolve(import.meta.dirname),
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir,
    emptyOutDir: true,
  },
  server: {
    port: 3000,
    strictPort: false,
    host: true,
  },
});
