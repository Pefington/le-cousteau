import { i18n } from "./next-i18next.config"
/** @type {import('next').NextConfig} */

module.exports = {
  images: {
    domains: ["source.unsplash.com"],
  },
  nextConfig: {
    reactStrictMode: true,
  },
  i18n,
}
