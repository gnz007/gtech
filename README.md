# G-TECH — Página web

## Deploy en Vercel

### Paso 1: Subir a GitHub
```bash
git init
git add .
git commit -m "G-TECH website"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/gtech.git
git push -u origin main
```

### Paso 2: Importar en Vercel
1. https://vercel.com/new
2. Importá el repo
3. Vercel detecta Next.js automáticamente
4. Click **Deploy**

### Alternativa: Drag & Drop
1. https://vercel.com/new
2. Arrastrá esta carpeta
3. **Deploy**

## Personalización
Editá `src/lib/site.ts` (tel, email, URL, Instagram).

## Desarrollo
```bash
npm install
npm run dev
```
