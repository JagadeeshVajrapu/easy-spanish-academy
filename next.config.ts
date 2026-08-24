import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname),
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/courses/german",
        destination: "/courses/german/certificate-diploma",
        permanent: true,
      },
      {
        source: "/german-courses",
        destination: "/courses/german/certificate-diploma",
        permanent: true,
      },
      {
        source: "/blog",
        destination: "/",
        permanent: false,
      },
      {
        source: "/blog/:slug",
        destination: "/",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
