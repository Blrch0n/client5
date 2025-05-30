/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "restics.temptics.com",
        port: "",
        pathname: "/assets/**",
      },
      {
        protocol: "https",
        hostname: "templateapi.xyz",
        port: "",
        pathname: "/qrmenu/uploads/**",
      },
    ],
  },
};

export default nextConfig;
