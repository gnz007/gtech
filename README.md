# G-TECH — Ciridae-inspired Design System

Página web profesional con estética "void chamber with ember pulse": near-black canvas, único acento cromático blue (#3c6df4) usado solo como hairline, todo uppercase weight 400, pills 1440px, cero sombras, cero gradientes.

## Stack
- Next.js 16 (App Router, static export)
- TypeScript 5
- Tailwind CSS 4
- GSAP 3 + @gsap/react + ScrollTrigger
- Fonts: Oswald (display) + Inter (body) + Roboto Mono (system data)

## Ver la página ahora (sin instalar nada)
1. Descomprimí el zip
2. Abrí la carpeta `out/`
3. Doble click en `index.html` → se abre en tu navegador con todos los estilos

## Subir a GitHub
```bash
cd gtech-ciridae
git init
git add .
git commit -m "G-TECH Ciridae redesign"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/gtech.git
git push -u origin main
```

## Publicar en Cloudflare Pages
1. Cloudflare Dashboard → Workers & Pages → Create → Pages → Connect to Git
2. Build command: `bun run build`
3. Build output directory: `out`

## Personalización
Editá `src/lib/site.ts` (tel, email, URL, Instagram, horarios).
Después: `bun run build` para regenerar `out/`.

## Desarrollo
```bash
bun install
bun run dev      # http://localhost:3000
bun run build    # genera out/
```
