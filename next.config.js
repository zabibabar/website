/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/website",
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
