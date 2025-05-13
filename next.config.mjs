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
    ],
  },
};

export default nextConfig;
