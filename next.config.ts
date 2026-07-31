import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Para Vercel: NO usar output: "export" — Vercel soporta Next.js nativamente
  // con SSR, image optimization y edge functions.
  // Si querés deployar en Cloudflare Pages o hosting estático, cambiá a:
  //   output: "export",
  //   images: { unoptimized: true },
  //   assetPrefix: "./",
  typescript: { ignoreBuildErrors: false },
  reactStrictMode: true,
};

export default nextConfig;
