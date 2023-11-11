/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    dangerouslyAllowSVG: true,
  },
  distDir: "out",
};

module.exports = nextConfig;
