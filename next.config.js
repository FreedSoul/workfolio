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
      'testing-library.com',
    ],
  },
}



const withTM = require("next-transpile-modules")([
  "three",
  "@react-three/fiber",
  "@react-three/drei",
]);

module.exports = withTM({...nextConfig,
  //can add options as parameter
  webpack(nextConfig) {
    nextConfig.module.rules.push({
      test: /\.(glb|gltf)$/,
      use: {
        loader: "file-loader",
      },
    });

    return nextConfig;
  }
})