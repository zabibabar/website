/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/website",
  images: {
    unoptimized: true,
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
