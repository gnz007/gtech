# G-TECH — Página web

Página web profesional con estética Ciridae: dark void canvas, acento blue (#3c6df4), tipografía Oswald + Inter + Roboto Mono, animaciones GSAP con ScrollTrigger.

## Deploy en Vercel (recomendado)

### Opción A: Vía GitHub (auto-deploy)
1. Subí este proyecto a un repo de GitHub:
```bash
git init
git add .
git commit -m "G-TECH website"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/gtech.git
git push -u origin main
```
2. Entrá a https://vercel.com/new
3. Importá el repo
4. Vercel detecta Next.js automáticamente
5. Click **Deploy** — listo en 1 minuto

### Opción B: Drag & drop directo
1. Entrá a https://vercel.com/new
2. Arrastrá esta carpeta a la página
3. Click **Deploy**

## Configuración Vercel
- Framework: **Next.js** (autodetectado)
- Build command: `bun run build` (o `npm run build`)
- Install command: `bun install` (o `npm install`)
- Node version: 20 (ver `.nvmrc`)
- Output: automático (Vercel maneja todo)

## Stack
- Next.js 16
- TypeScript 5
- Tailwind CSS 4
- GSAP 3 + ScrollTrigger
- Fonts: Oswald + Inter + Roboto Mono

## Personalización
Editá `src/lib/site.ts` (tel, email, URL, Instagram, horarios).
Después hacé push y Vercel redeployea automáticamente.

## Desarrollo local
```bash
bun install      # o: npm install
bun run dev      # http://localhost:3000
```
