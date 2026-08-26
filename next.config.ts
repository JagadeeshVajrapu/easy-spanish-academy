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
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/courses/spanish",
        destination: "/courses",
        permanent: true,
      },
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
        source: "/spanish-courses",
        destination: "/courses",
        permanent: true,
      },
      {
        source: "/blog/spanish-vs-german-which-language-2026",
        destination: "/blog",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
