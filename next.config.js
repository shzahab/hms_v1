
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
  webpackDevMiddleware: config => {
    config.dev.errorOverlay = false
    return config
  }
}

module.exports = nextConfig
