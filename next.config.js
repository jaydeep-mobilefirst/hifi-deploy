/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  env: {
    NEXT_PUBLIC_CONTRACT_VAULT: process.env.NEXT_PUBLIC_CONTRACT_VAULT,
    NEXT_PUBLIC_CONTRACT_EGX: process.env.NEXT_PUBLIC_CONTRACT_EGX,
    NEXT_PUBLIC_CONTRACT_QEGX: process.env.NEXT_PUBLIC_CONTRACT_QEGX,
    NEXT_PUBLIC_FAKEDATAMODE: process.env.NEXT_PUBLIC_FAKEDATAMODE,
  },
};

module.exports = nextConfig;
