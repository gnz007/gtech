import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  typescript: { ignoreBuildErrors: false },
  reactStrictMode: true,
  trailingSlash: true,
  // Paths relativos — permite abrir index.html directamente con doble click
  // sin necesidad de servidor. Funciona en file:// y en cualquier host.
  assetPrefix: "./",
  basePath: "",
};

export default nextConfig;
