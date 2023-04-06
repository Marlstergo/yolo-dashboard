/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    REACT_APP_API_BASE_URL: "https://gameapi-production.up.railway.app/api",
  },
};

module.exports = nextConfig
