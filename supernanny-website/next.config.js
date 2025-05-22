// Load environment variables from workspace root
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env.local') });

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Make Appwrite config available to the client
  env: {
    NEXT_PUBLIC_APPWRITE_ENDPOINT: process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT,
    NEXT_PUBLIC_APPWRITE_PROJECT: process.env.NEXT_PUBLIC_APPWRITE_PROJECT,
    NEXT_PUBLIC_APPWRITE_DATABASE_ID: process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID,
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com'],
  },
};

module.exports = nextConfig; 