/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'download.blender.org',
      'githubusercontent.com',
      'www.vectorlogo.zone',
      'raw.githubusercontent.com',
      'cdn.worldvectorlogo.com',
      'cdn-icons-png.flaticon.com',
      'miro.medium.com',
    ],
  },
}

module.exports = nextConfig
