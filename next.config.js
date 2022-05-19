/* eslint @typescript-eslint/no-var-requires: "off" */
/** @type {import('next').NextConfig} */

const { i18n } = require("./next-i18next.config")

module.exports = {
  images: {
    domains: ["source.unsplash.com", "cdnjs.cloudflare.com"],
  },
  nextConfig: {
    reactStrictMode: true,
  },
  i18n,
}
