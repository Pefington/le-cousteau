/** @type {import('next').NextConfig} */

const { i18n } = require("./next-i18next.config")

module.exports = {
  nextConfig: {
    reactStrictMode: true,
  },
  i18n,
}
