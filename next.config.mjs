/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',          // <-- NECESARIO para /app/.next/standalone
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  images: { unoptimized: true },
};

export default nextConfig;
