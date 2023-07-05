/** @type {import('next').NextConfig} */
require('dotenv').config()

const nextConfig = {
    env: {
        CAT_API: process.env.CAT_API,
    },
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "cdn2.thecatapi.com",
          port: "",
        }
      ]
    }
}

module.exports = nextConfig
