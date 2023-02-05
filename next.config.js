const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    mongodb_username: "iRick",
    mongodb_password: "nnrVi69PSk47dpRE",
    mongodb_clustername: "cluster0",
    mongodb_database: "posts-app",
  },
  images: {
    domains: ["firebasestorage.googleapis.com"],
  },
};

module.exports = nextConfig;
