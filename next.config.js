/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/website",
  unoptimized: true,
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
