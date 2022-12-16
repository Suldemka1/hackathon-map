/* @type {import('next').NextConfig} */
const nextConfig = {

  env: {
    APIpath: 'https://api.pprt.rtyva.ru'
  },

  images: {
    domains: ['api.openweathermap.org', 'localhost', 'localhost:3000', '95.167.178.44'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'localhost',
        pathname: '/'
      }
    ]
  },
  compress: false,

  reactStrictMode: true,
  output: 'standalone'
}

module.exports = nextConfig
