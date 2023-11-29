/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "*",
      },
      {
        protocol: "https",
        hostname: "cineliso.com",
        port: "",
        pathname: "*",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
        pathname: "*",
      },
      {
        protocol: "https",
        hostname: "image.tmdb.org",
        port: "",
        pathname: "*",
      },
    ],
    domains: [
      "res.cloudinary.com",
      "picsum.photos",
      "cineliso.com",
      "image.tmdb.org",
    ],
    deviceSizes: [320, 420, 768, 1024, 1200],
  },
};

module.exports = nextConfig;
